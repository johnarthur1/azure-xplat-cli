// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"92d16e58-5940-49db-b282-10c68c792990\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli6a83036ca79daac1-os-1445551560443\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext5062.blob.core.windows.net/xplatstoragecntext3324/cli6a83036ca79daac1-os-1445551560443.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '6555cdfe-b8cb-4086-bb64-d6bfe3a45b13',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': 'ce7b477b-7c7f-46e9-8b35-70cf2b4ebc3d',
  'x-ms-routing-request-id': 'WESTUS:20151022T221935Z:ce7b477b-7c7f-46e9-8b35-70cf2b4ebc3d',
  date: 'Thu, 22 Oct 2015 22:19:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"92d16e58-5940-49db-b282-10c68c792990\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli6a83036ca79daac1-os-1445551560443\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext5062.blob.core.windows.net/xplatstoragecntext3324/cli6a83036ca79daac1-os-1445551560443.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1548',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '6555cdfe-b8cb-4086-bb64-d6bfe3a45b13',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': 'ce7b477b-7c7f-46e9-8b35-70cf2b4ebc3d',
  'x-ms-routing-request-id': 'WESTUS:20151022T221935Z:ce7b477b-7c7f-46e9-8b35-70cf2b4ebc3d',
  date: 'Thu, 22 Oct 2015 22:19:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Storage/storageAccounts/xplatstoragext5062/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"YqAtb9xhYiXms//ToWFHR/XnzlwiMtX5C/FhvWlswwyUxNv7K4I8Obb7oSU5weYKtdYjW1E1FiTmlCjx40rPxg==\",\"key2\":\"dDdWVS1aPw0AuhEOuK7oyWR7mZ2n/nBRaOAXmdVQGfTSVLbkRTccMTyJqXyAdXJENw/bfjlm3is6jQ2bRFx1Lg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  'x-ms-routing-request-id': 'WESTUS:20151022T221936Z:c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Oct 2015 22:19:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Storage/storageAccounts/xplatstoragext5062/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"YqAtb9xhYiXms//ToWFHR/XnzlwiMtX5C/FhvWlswwyUxNv7K4I8Obb7oSU5weYKtdYjW1E1FiTmlCjx40rPxg==\",\"key2\":\"dDdWVS1aPw0AuhEOuK7oyWR7mZ2n/nBRaOAXmdVQGfTSVLbkRTccMTyJqXyAdXJENw/bfjlm3is6jQ2bRFx1Lg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  'x-ms-routing-request-id': 'WESTUS:20151022T221936Z:c49cc5a6-dec2-4596-bd3f-7cab7f7a54e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Oct 2015 22:19:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n    \"type\": \"IaaSDiagnostics\",\r\n    \"typeHandlerVersion\": \"1.4\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjg0NTgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext5062\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n  \"name\": \"IaaSDiagnostics\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1498',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '63031c50-0d04-403f-ae3f-b5c4622d53ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ccde8a5a-4c90-4b67-9141-ef9fc3382e4a',
  'x-ms-routing-request-id': 'WESTUS:20151022T221940Z:ccde8a5a-4c90-4b67-9141-ef9fc3382e4a',
  date: 'Thu, 22 Oct 2015 22:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n    \"type\": \"IaaSDiagnostics\",\r\n    \"typeHandlerVersion\": \"1.4\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjg0NTgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext5062\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n  \"name\": \"IaaSDiagnostics\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1498',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '63031c50-0d04-403f-ae3f-b5c4622d53ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ccde8a5a-4c90-4b67-9141-ef9fc3382e4a',
  'x-ms-routing-request-id': 'WESTUS:20151022T221940Z:ccde8a5a-4c90-4b67-9141-ef9fc3382e4a',
  date: 'Thu, 22 Oct 2015 22:19:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '287677dc-d120-419c-8619-9788fe5476f8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14837',
  'x-ms-correlation-request-id': '5764be09-a5d5-437c-9a4e-6e574df7ff27',
  'x-ms-routing-request-id': 'WESTUS:20151022T222011Z:5764be09-a5d5-437c-9a4e-6e574df7ff27',
  date: 'Thu, 22 Oct 2015 22:20:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '287677dc-d120-419c-8619-9788fe5476f8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14837',
  'x-ms-correlation-request-id': '5764be09-a5d5-437c-9a4e-6e574df7ff27',
  'x-ms-routing-request-id': 'WESTUS:20151022T222011Z:5764be09-a5d5-437c-9a4e-6e574df7ff27',
  date: 'Thu, 22 Oct 2015 22:20:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '7910174b-f153-43d6-a1ae-7522059859d1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14851',
  'x-ms-correlation-request-id': '549fd31a-f14a-4137-8ab4-97340677cb7f',
  'x-ms-routing-request-id': 'WESTUS:20151022T222042Z:549fd31a-f14a-4137-8ab4-97340677cb7f',
  date: 'Thu, 22 Oct 2015 22:20:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '7910174b-f153-43d6-a1ae-7522059859d1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14851',
  'x-ms-correlation-request-id': '549fd31a-f14a-4137-8ab4-97340677cb7f',
  'x-ms-routing-request-id': 'WESTUS:20151022T222042Z:549fd31a-f14a-4137-8ab4-97340677cb7f',
  date: 'Thu, 22 Oct 2015 22:20:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'ae63967a-1739-4226-8521-6b41ab4d4b03',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14853',
  'x-ms-correlation-request-id': '2d2729e5-e026-458e-85f6-2d0faebd32d1',
  'x-ms-routing-request-id': 'WESTUS:20151022T222113Z:2d2729e5-e026-458e-85f6-2d0faebd32d1',
  date: 'Thu, 22 Oct 2015 22:21:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'ae63967a-1739-4226-8521-6b41ab4d4b03',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14853',
  'x-ms-correlation-request-id': '2d2729e5-e026-458e-85f6-2d0faebd32d1',
  'x-ms-routing-request-id': 'WESTUS:20151022T222113Z:2d2729e5-e026-458e-85f6-2d0faebd32d1',
  date: 'Thu, 22 Oct 2015 22:21:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c665a45e-943c-42c5-8466-bf27c4ab5a48',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': 'b65aed9a-42b2-4ae3-a7b1-7d3a9dcda71e',
  'x-ms-routing-request-id': 'WESTUS:20151022T222145Z:b65aed9a-42b2-4ae3-a7b1-7d3a9dcda71e',
  date: 'Thu, 22 Oct 2015 22:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c665a45e-943c-42c5-8466-bf27c4ab5a48',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': 'b65aed9a-42b2-4ae3-a7b1-7d3a9dcda71e',
  'x-ms-routing-request-id': 'WESTUS:20151022T222145Z:b65aed9a-42b2-4ae3-a7b1-7d3a9dcda71e',
  date: 'Thu, 22 Oct 2015 22:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\",\r\n  \"endTime\": \"2015-10-22T22:22:14.7702954+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '8b19b4c8-7af1-4e52-9e83-daef4c99e1fb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14842',
  'x-ms-correlation-request-id': '7094cac4-7131-4242-b468-537bf6d62def',
  'x-ms-routing-request-id': 'WESTUS:20151022T222216Z:7094cac4-7131-4242-b468-537bf6d62def',
  date: 'Thu, 22 Oct 2015 22:22:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/63031c50-0d04-403f-ae3f-b5c4622d53ee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"63031c50-0d04-403f-ae3f-b5c4622d53ee\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:19:40.5788455+00:00\",\r\n  \"endTime\": \"2015-10-22T22:22:14.7702954+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '8b19b4c8-7af1-4e52-9e83-daef4c99e1fb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14842',
  'x-ms-correlation-request-id': '7094cac4-7131-4242-b468-537bf6d62def',
  'x-ms-routing-request-id': 'WESTUS:20151022T222216Z:7094cac4-7131-4242-b468-537bf6d62def',
  date: 'Thu, 22 Oct 2015 22:22:15 GMT',
  connection: 'close' });
 return result; }]];