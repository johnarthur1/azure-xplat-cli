﻿/**
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

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-lb-inbound-nat-rule-tests-generated',
  groupName = 'xplat-test-inbound-nat-rule',
  location;
var index = 0;

var inboundNatRules = {
  protocol: 'Udp',
  protocolNew: 'Tcp',
  frontendPort: '123',
  frontendPortNew: '321',
  backendPort: '456',
  backendPortNew: '654',
  idleTimeoutInMinutes: '7',
  idleTimeoutInMinutesNew: '17',
  enableFloatingIP: 'true',
  enableFloatingIPNew: 'false',
  name: 'inboundNatRuleName'
};

inboundNatRules.loadBalancerName = 'loadBalancerName';
inboundNatRules.publicIPAddressName = 'publicIPAddressName';
inboundNatRules.frontendIPConfigurationName = 'frontendIPConfigurationName';

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var loadBalancer = {
  location: 'westus',
  name: 'loadBalancerName'
};

var frontendIPConfiguration = {
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'frontendIPConfigurationName'
};

var inboundNatRulesDefault = {
  protocol: 'TCP',
  frontendPort: '80',
  backendPort: '80',
  idleTimeoutInMinutes: '4',
  enableFloatingIP: 'false',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'inboundNatRulesDefaultName',
  group: groupName
};

var protocolOutOfRange = {
  protocol: 'TcpUdp',
  loadBalancerName: 'loadBalancerName',
  name: 'ProtocolOutOfRangeName'
};

var frontendPortUnderAllowedValue = {
  frontendPort: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortUnderAllowedValueName'
};

var frontendPortOverAllowedValue = {
  frontendPort: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortOverAllowedValueName'
};

var backendPortOutOfRange = {
  backendPort: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'BackendPortOutOfRangeName'
};

var idleTimeoutInMinutesOverAllowedValue = {
  idleTimeoutInMinutes: '31',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesOverAllowedValueName'
};

var idleTimeoutInMinutesUnderAllowedValue = {
  idleTimeoutInMinutes: '3',
  loadBalancerName: 'loadBalancerName',
  name: 'IdleTimeoutInMinutesUnderAllowedValueName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = inboundNatRules.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        inboundNatRules.location = location;
        inboundNatRules.name = suite.isMocked ? inboundNatRules.name : suite.generateId(inboundNatRules.name, null);

        inboundNatRules.group = groupName;
        protocolOutOfRange.group = groupName;
        frontendPortUnderAllowedValue.group = groupName;
        frontendPortOverAllowedValue.group = groupName;
        backendPortOutOfRange.group = groupName;
        idleTimeoutInMinutesOverAllowedValue.group = groupName;
        idleTimeoutInMinutesUnderAllowedValue.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n {name} --location {location} --json'.formatArgs(loadBalancer, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network lb frontend-ip create -g {1} -n {name} --lb-name {loadBalancerName} --public-ip-name {publicIPAddressName} --json'.formatArgs(frontendIPConfiguration, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  done();
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('inbound nat rules', function () {
      this.timeout(testTimeout);
      it('create should create inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --protocol {protocol} --frontend-port {frontendPort} --backend-port {backendPort} --idle-timeout {idleTimeoutInMinutes} --enable-floating-ip {enableFloatingIP} --lb-name {loadBalancerName} --frontend-ip-name {frontendIPConfigurationName}'.formatArgs(inboundNatRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display inbound nat rules details', function (done) {
        var cmd = 'network lb inbound-nat-rule show -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule set -g {group} -n {name} --protocol {protocolNew} --frontend-port {frontendPortNew} --backend-port {backendPortNew} --idle-timeout {idleTimeoutInMinutesNew} --enable-floating-ip {enableFloatingIPNew} --lb-name {loadBalancerName}'.formatArgs(inboundNatRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all inbound nat rules in resource group', function (done) {
        var cmd = 'network lb inbound-nat-rule list -g {group} --lb-name {loadBalancerName}'.formatArgs(inboundNatRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete inbound nat rules', function (done) {
        var cmd = 'network lb inbound-nat-rule delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet'.formatArgs(inboundNatRules);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb inbound-nat-rule show -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatRules);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);

            cmd = 'network lb inbound-nat-rule list -g {group} --lb-name {loadBalancerName}'.formatArgs(inboundNatRules);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
      it('create with defaults should create inbound nat rules with default values', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatRulesDefault);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb inbound-nat-rule delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet'.formatArgs(inboundNatRulesDefault);
          generatorUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for protocol out of range', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --protocol {protocol} --lb-name {loadBalancerName} --json'.formatArgs(protocolOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port under allowed value', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortUnderAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port over allowed value', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --frontend-port {frontendPort} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortOverAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for backend port out of range', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --backend-port {backendPort} --lb-name {loadBalancerName} --json'.formatArgs(backendPortOutOfRange);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes over allowed value', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName} --json'.formatArgs(idleTimeoutInMinutesOverAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for idle timeout in minutes under allowed value', function (done) {
        var cmd = 'network lb inbound-nat-rule create -g {group} -n {name} --idle-timeout {idleTimeoutInMinutes} --lb-name {loadBalancerName} --json'.formatArgs(idleTimeoutInMinutesUnderAllowedValue);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
