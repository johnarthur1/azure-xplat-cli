/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var util = require('util');

var policyClientWorkaround = require('./policyClientWorkaround');
var profile = require('../../../util/profile');
var resourceUtils = require('../resource/resourceUtils');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;

  var role = cli.category('role');
  var roleAssignment = role.category('assignment')
      .description($('Commands to manage your role assignment'));

  roleAssignment.command('create [objectId] [userPrincipalName] [mail] [servicePrincipalName] [role] [scope] [resource-group] [resource-type] [resource-name]')
    .description($('create a new role assignment'))
    .option('--objectId <objectId>', $('Object id of the user, group or service principal.'))
    .option('--userPrincipalName <userPrincipalName>', $('User principal name.'))
    .option('--mail <mail>', $('Mail of a user or group.'))
    .option('--spn <servicePrincipalName>', $('Service Principal Name.'))
    .option('-o --role <role>', $('Role to assign the principals with.'))
    .option('-c --scope <scope>', $('Scope of the role assignment.'))
    .option('-g --resource-group <resource-group>', $('Resource group to assign the role to.'))
    .option('-r --resource-type <resource-type>', $('Type of the resource to assign the role to.'))
    .option('-u --resource-name <resource-name>', $('Name of the resource to assign the role to.'))
    .option('--parent <parent>', $('Parent resource of the resource to assign the role to, if there is any.'))
    .option('--subscription <subscription>', $('Subscription id or name of where the role assignment will be created.'))
    .execute(function (objectId, userPrincipalName, mail, servicePrincipalName, role, scope, resourceGroup, resourceType, resourceName, options, _) {
      //TODO: common code of checking arguments

      if (!role) {
        return cli.missingArgument('role');
      }

      var subscription = profile.current.getSubscription(options.subscription);
      var client = policyClientWorkaround.getClient(subscription);

      //A guid object id? (Supporting UPN is coming soon)
      objectId = getObjectId(objectId, userPrincipalName, mail, servicePrincipalName, subscription, _);
      if (!objectId) {
        throw new Error($('Invalid principal.'));
      }

      //Figure out the scope
      if (!scope) {
        scope = constructScope(subscription, resourceGroup, resourceType, resourceName, options.parent);
      }

      var matchedRoles;
      var progress = cli.interaction.progress($('Getting role definition id'));
      try {
        matchedRoles = client.roleDefinitions.list(_);
        matchedRoles = matchedRoles.roleDefinitions.filter(function (r) {
          return utils.ignoreCaseEquals(r.properties.roleName, role);
        });
      } finally {
        progress.end();
      }

      var roleId;
      if (matchedRoles && matchedRoles.length > 0) {
        roleId = matchedRoles[0].id;
      }
      if (!roleId) {
        throw new Error(util.format($('Role of \'%s\' does not exist'), role));
      }

      var parameter = {
        principalId: objectId,
        roleDefinitionId: roleId,
        scope: scope
      };

      var roleAssignmentNameGuid = utils.uuidGen();
      progress = cli.interaction.progress($('Creating role assignment'));
      try {
        client.roleAssignments.create(scope, roleAssignmentNameGuid, parameter, _);
      } finally {
        progress.end();
      }
    });

  roleAssignment.command('list [objectId] [userPrincipalName] [mail] [servicePrincipalName] [role] [scope] [resource-group] [resource-type] [resource-name]')
    .description($('Get role assignment at a given scope'))
    .option('--objectId <objectId>', $('Object id of the user, group or service principal.'))
    .option('--userPrincipalName <userPrincipalName>', $('User principal name.'))
    .option('--mail <mail>', $('Mail of a user or group.'))
    .option('--spn <servicePrincipalName>', $('Service Principal Name.'))
    .option('-o --role <role>', $('Role the principals was assigned to'))
    .option('-c --scope <scope>', $('Scope of the role assignment.'))
    .option('-g --resource-group <resource-group>', $('Resource group to role was assigned to.'))
    .option('-r --resource-type <resource-type>', $('Type of the resource the role was assign to'))
    .option('-u --resource-name <resource-name>', $('The resource the role was assigned to.'))
    .option('--parent <parent>', $('Parent resource of the resource the role was assigned to, if there is any.'))
    .option('--subscription <subscription>', $('Subscription id or name of where the role assignment is from.'))
    .execute(function (objectId, userPrincipalName, mail, servicePrincipalName, role, scope, resourceGroup, resourceType, resourceName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = policyClientWorkaround.getClient(subscription);

      var progress = cli.interaction.progress($('Getting role assignment'));
      var filterResult;
      try {
        filterResult = filterRoleAssignments(true, subscription, client, objectId, userPrincipalName, mail, servicePrincipalName, role, resourceGroup, resourceType, resourceName, options.parent, scope, _);
      } finally {
        progress.end();
      }

      if (filterResult.assignments.length === 0) {
        log.info($('No matching role assignments were found'));
        return;
      }

      //retrieve user objects from graph and create a mapping between id and principal name
      var graphClient = policyClientWorkaround.getADGraphClient(subscription);  
      var graphQueryResult = graphClient.objects.getObjectsByObjectIds({ ids: filterResult.principalIdList }, _);
      var entities = graphQueryResult.aADObject;
      var principalNames = [];
      for (var i = 0; i < entities.length; i++) {
        principalNames[entities[i].objectId] = entities[i].userPrincipalName || entities[i].displayName;
      }

      //populate principalName, roleName and permissions so that complete info is provided with --json switch
      filterResult.assignments.forEach(function (assignment) {
        assignment.properties.principalName = principalNames[assignment.properties.principalId] ? 
                                              principalNames[assignment.properties.principalId] : 
                                              assignment.properties.principalId;
        assignment.properties.roleName = filterResult.roleNames[getRoleGuid(assignment.properties.roleDefinitionId)];
        assignment.properties.permissions = filterResult.rolePermissionList[getRoleGuid(assignment.properties.roleDefinitionId)];
      });

      cli.interaction.formatOutput(filterResult.assignments, function (data) {
        log.table(data, function (row, assignment) {
          row.cell($('PrincipalName'), assignment.properties.principalName);
          row.cell($('Role'), assignment.properties.roleName);
          row.cell($('Scope'), assignment.properties.scope);
          row.cell($('Permissions'), assignment.properties.permissions);
        });
      });
    });

  roleAssignment.command('delete [objectId] [userPrincipalName] [mail] [servicePrincipalName] [role] [scope] [resource-group] [resource-type] [resource-name]')
    .description($('delete a role assignment'))
    .option('--objectId <objectId>', $('Object id of the user, group or service principal.'))
    .option('--upn <userPrincipalName>', $('User principal name.'))
    .option('--mail <mail>', $('Mail of a user or group.'))
    .option('--spn <servicePrincipalName>', $('Service Principal Name.'))
    .option('-o --role <role>', $('Role to remove from the principals.'))
    .option('-c --scope <scope>', $('Scope of the role assignment.'))
    .option('-g --resource-group <resource-group>', $('Resource group to role was assigned to.'))
    .option('-r --resource-type <resource-type>', $('Type of the resource the role was assign to'))
    .option('-u --resource-name <resource-name>', $('The resource the role was assigned to.'))
    .option('--parent <parent>', $('Parent resource of the resource the role was assigned to, if there is any.'))
    .option('-q --quiet', $('If specified, won\'t prompt before delete.'))
    .option('--subscription <subscription>', $('Subscription id or name of where the role assignment will be removed.'))
    .execute(function (objectId, userPrincipalName, mail, servicePrincipalName, role, scope, resourceGroup, resourceType, resourceName, options, _) {
      //TODO, verify argument

      var subscription = profile.current.getSubscription(options.subscription);
      var client = policyClientWorkaround.getClient(subscription);

      var progress = cli.interaction.progress($('Getting role assignments to delete'));
      var filterResult;
      try {
        filterResult = filterRoleAssignments(false, subscription, client, objectId, userPrincipalName, mail, servicePrincipalName, role, resourceGroup, resourceType, resourceName, options.parent, scope, _);
      } finally {
        progress.end();
      }

      if (filterResult.assignments.length > 0) {
        if (!options.quiet && !cli.interaction.confirm($('Delete role assignments? [y/n] '), _)) {
          return;
        }
        progress = cli.interaction.progress($('Deleting role assignments'));
        try {
          for (var i = 0; i <= filterResult.assignments.length - 1; i++) {
            client.roleAssignments.delete(filterResult.assignments[i].properties.scope, filterResult.assignments[i].name, _);
          }
        } finally {
          progress.end();
        }
      }
      else {
        log.info($('No role assignments are found to delete'));
      }
    });
};

function filterRoleAssignments(forList, subscription, client, objectId, userPrincipalName, mail, servicePrincipalName, role, resourceGroup, resourceType, resourceName, parent, scope, _) {
  var filteredAssignments = {
    assignments: []
  };

  var atScope = true;
  if (forList && !scope && !resourceGroup && !resourceName) {
    atScope = false;
  }

  if (!scope && forList) {
    scope = constructScope(subscription, resourceGroup, resourceType, resourceName, parent);
  }

  var result;
  var filterByPrincipal = (objectId || userPrincipalName || mail || servicePrincipalName);
  if (filterByPrincipal) {
    objectId = getObjectId(objectId, userPrincipalName, mail, servicePrincipalName, subscription, _);
    result = client.roleAssignments.listForScope(scope, { atScope: false, principalId : objectId }, _);
  }
  else {
    result = client.roleAssignments.listForScope(scope, { atScope: true }, _);
  }

  if (result.roleAssignments.length === 0) {
    return filteredAssignments;
  }

  //load role permission list
  var rolePermissionList = [];
  var roleNames = [];
  var listRolesResult = client.roleDefinitions.list(_);
  for (i = 0; i < listRolesResult.roleDefinitions.length; i++) {
    var roleId = listRolesResult.roleDefinitions[i].name; //Note, the 'name' field here has guid value
    rolePermissionList[roleId] = serializePermissionList(listRolesResult.roleDefinitions[i].properties.permissions);
    roleNames[roleId] = listRolesResult.roleDefinitions[i].properties.roleName;
  }

  //filtering role assignment.
  var principalIdList = [];
  for (var i = result.roleAssignments.length - 1 ; i >= 0; i--) {
    //filter by scope
    var scopeMatched = !scope;
    if (!scopeMatched) {
      //this will check if the given scope is at the level or above the desired scope
      scopeMatched = utils.stringStartsWith(scope, result.roleAssignments[i].properties.scope, true);
    }  
    var roleMatched = !role;
    if (!roleMatched) {
      var roleDefGuid = getRoleGuid(result.roleAssignments[i].properties.roleDefinitionId);
      roleMatched = utils.ignoreCaseEquals(roleNames[roleDefGuid], role);
    }
    var principalMatched = !objectId || utils.ignoreCaseEquals(result.roleAssignments[i].properties.principalId, objectId);
    
    if (scopeMatched && roleMatched && principalMatched) {
      principalIdList.push(result.roleAssignments[i].properties.principalId);
    } else {
      result.roleAssignments.splice(i, 1);
    }
  }

  return {
    assignments: result.roleAssignments,
    roleNames: roleNames, // role textual name (not guid)
    principalIdList: principalIdList,
    rolePermissionList: rolePermissionList
  };
}

function constructScope(subscription, resourceGroup, resourceType, resource, resourceParent) {
  var scope = '/subscriptions/' + subscription.id;
  if (resourceGroup) {
    scope = scope + '/resourcegroups/' + resourceGroup.trim();
    if (resource) {
      if (!resourceType) {
        throw new Error($('Please specify a valid resource type'));
      }
      var resourceTypeName = resourceUtils.getResourceTypeName(resourceType);
      var provider = resourceUtils.getProviderName(resourceType);

      scope = scope + '/providers/' + provider.trim() + '/' + (resourceParent ? resourceParent.trim() : '') +
        '/' + resourceTypeName.trim() + '/' + resource.trim();
    }
  }
  return scope;
}

function getObjectId(objectId, userPrincipalName, mail, servicePrincipalName, subscription, _) {
  if (objectId) {
    return objectId;
  }

  var graphClient = policyClientWorkaround.getADGraphClient(subscription);
  var graphQueryResult = null;
  if (userPrincipalName) {
    graphQueryResult = graphClient.user.getBySignInName(userPrincipalName, _);
    if (graphQueryResult.users.length > 0) { //TODO: error on 2+ mataches
      return graphQueryResult.users[0].objectId;
    } else {
      throw new Error('invalid spn'); //TODO: better error text
    }
  }

  if (mail) {
    graphQueryResult = graphClient.user.list(mail, '', _);
    if (graphQueryResult.users.length > 0) {//TODO: error on 2+ mataches
      return graphQueryResult.users[0].objectId;
    } else {
      graphQueryResult = graphClient.group.list(mail, '', _);
      if (graphQueryResult.groups.length > 0){ //TODO: error on 2+ matches
        return graphQueryResult.groups[0].objectId;
      } else {
        throw new Error('invalid mail'); //TODO: better error
      }
    }
  }

  if (servicePrincipalName) {
    graphQueryResult = graphClient.servicePrincipal.getByServicePrincipalName(servicePrincipalName, _); //@@@ library support
    if (graphQueryResult.servicePrincipals.length > 0) {//TODO: error on 2+ mataches
      return graphQueryResult.servicePrincipals[0].objectId;
    } else {
      throw new Error('invalud spn'); //better name
    }
  }

  throw new Error('missing argument, you should at least specify one parameter'); //TODO: better error
}

function serializePermissionList(permissions) {
  var actions = [];
  for (var i = 0; i < permissions.length; i++) {
    actions = actions.concat(permissions[i].actions);
  }
  return actions.join();
}

function getRoleGuid(roleDefId) {
  //to extract out the <guid> from definition id like '/subscriptions/358f3860-9dbe-4ace-b0c0-3d4f2d861014/providers/.../<guid>'
  return roleDefId.substring(roleDefId.lastIndexOf('/') + 1);
}
