// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9690a5bf-d489-4fd8-8c26-640da72502bd',
    name: 'Windows Azure MSDN - Visual Studio Ultimate',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '461e517d-31f6-4789-9060-c6e4162eaf38',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [];
