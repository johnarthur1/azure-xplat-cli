// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"37774174-34c6-45f7-b19e-17fca2b97a34\\\"\",\r\n      \"location\": \"eastus2\",\r\n      \"zones\": [\r\n        \"1\"\r\n      ],\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 14,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelset\",\r\n          \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '886',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61c5463e-acd0-47c5-b36a-4510d07cf7c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '24d035ce-6ee4-425b-890d-7ccd2b85b869',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122503Z:24d035ce-6ee4-425b-890d-7ccd2b85b869',
  date: 'Mon, 18 Sep 2017 12:25:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"publicIPAddressName\",\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n      \"etag\": \"W/\\\"37774174-34c6-45f7-b19e-17fca2b97a34\\\"\",\r\n      \"location\": \"eastus2\",\r\n      \"zones\": [\r\n        \"1\"\r\n      ],\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 14,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"labelset\",\r\n          \"fqdn\": \"labelset.eastus2.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '886',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '61c5463e-acd0-47c5-b36a-4510d07cf7c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '24d035ce-6ee4-425b-890d-7ccd2b85b869',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122503Z:24d035ce-6ee4-425b-890d-7ccd2b85b869',
  date: 'Mon, 18 Sep 2017 12:25:03 GMT',
  connection: 'close' });
 return result; }]];