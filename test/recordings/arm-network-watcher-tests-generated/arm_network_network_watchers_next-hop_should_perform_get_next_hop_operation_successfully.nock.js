// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"a18ed96e-44c1-4cbd-8f07-d7cbb383bdbe\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a18ed96e-44c1-4cbd-8f07-d7cbb383bdbe"',
  'x-ms-request-id': '9d53a79e-72ea-475b-bb1f-88016117eec1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'e012b51a-0990-4ef9-80ca-326e28dc8ced',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072822Z:e012b51a-0990-4ef9-80ca-326e28dc8ced',
  date: 'Fri, 14 Jul 2017 07:28:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"a18ed96e-44c1-4cbd-8f07-d7cbb383bdbe\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a18ed96e-44c1-4cbd-8f07-d7cbb383bdbe"',
  'x-ms-request-id': '9d53a79e-72ea-475b-bb1f-88016117eec1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'e012b51a-0990-4ef9-80ca-326e28dc8ced',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072822Z:e012b51a-0990-4ef9-80ca-326e28dc8ced',
  date: 'Fri, 14 Jul 2017 07:28:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/nextHop?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"nextHopType\": \"None\",\r\n  \"routeTableId\": \"System Route\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '64',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/2d165b41-ecd9-48f2-b2bf-a1ed3f028b59?api-version=2017-06-01',
  'x-ms-request-id': '2d165b41-ecd9-48f2-b2bf-a1ed3f028b59',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dd072d72-c714-4ec9-9914-aeba9c45a7a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072831Z:dd072d72-c714-4ec9-9914-aeba9c45a7a5',
  date: 'Fri, 14 Jul 2017 07:28:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/nextHop?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"nextHopType\": \"None\",\r\n  \"routeTableId\": \"System Route\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '64',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/2d165b41-ecd9-48f2-b2bf-a1ed3f028b59?api-version=2017-06-01',
  'x-ms-request-id': '2d165b41-ecd9-48f2-b2bf-a1ed3f028b59',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dd072d72-c714-4ec9-9914-aeba9c45a7a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072831Z:dd072d72-c714-4ec9-9914-aeba9c45a7a5',
  date: 'Fri, 14 Jul 2017 07:28:31 GMT',
  connection: 'close' });
 return result; }]];