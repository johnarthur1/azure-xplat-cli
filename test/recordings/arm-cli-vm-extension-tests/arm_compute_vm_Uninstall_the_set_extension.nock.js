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
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"92d16e58-5940-49db-b282-10c68c792990\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli6a83036ca79daac1-os-1445551560443\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext5062.blob.core.windows.net/xplatstoragecntext3324/cli6a83036ca79daac1-os-1445551560443.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjg0NTgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext5062\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3694',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '7284e156-2820-4f24-9b0b-7e247e6e5c06',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': 'bccb1fc4-5ff3-4e33-b502-5e3152bcceda',
  'x-ms-routing-request-id': 'WESTUS:20151022T222342Z:bccb1fc4-5ff3-4e33-b502-5e3152bcceda',
  date: 'Thu, 22 Oct 2015 22:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"92d16e58-5940-49db-b282-10c68c792990\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli6a83036ca79daac1-os-1445551560443\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext5062.blob.core.windows.net/xplatstoragecntext3324/cli6a83036ca79daac1-os-1445551560443.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjg0NTgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext5062\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3694',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '7284e156-2820-4f24-9b0b-7e247e6e5c06',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': 'bccb1fc4-5ff3-4e33-b502-5e3152bcceda',
  'x-ms-routing-request-id': 'WESTUS:20151022T222342Z:bccb1fc4-5ff3-4e33-b502-5e3152bcceda',
  date: 'Thu, 22 Oct 2015 22:23:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '937',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '9de508a8-3068-4d03-9beb-c79e6f2b481b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14844',
  'x-ms-correlation-request-id': 'e2072b88-03d2-434a-aa55-dcc5622571ab',
  'x-ms-routing-request-id': 'WESTUS:20151022T222343Z:e2072b88-03d2-434a-aa55-dcc5622571ab',
  date: 'Thu, 22 Oct 2015 22:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '937',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '9de508a8-3068-4d03-9beb-c79e6f2b481b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14844',
  'x-ms-correlation-request-id': 'e2072b88-03d2-434a-aa55-dcc5622571ab',
  'x-ms-routing-request-id': 'WESTUS:20151022T222343Z:e2072b88-03d2-434a-aa55-dcc5622571ab',
  date: 'Thu, 22 Oct 2015 22:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'e6abf5ca-f0ac-4392-a19a-985cecf1400f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8d75f501-09bf-440e-9332-d2c0c8f8ac29',
  'x-ms-routing-request-id': 'WESTUS:20151022T222345Z:8d75f501-09bf-440e-9332-d2c0c8f8ac29',
  date: 'Thu, 22 Oct 2015 22:23:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8458/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'e6abf5ca-f0ac-4392-a19a-985cecf1400f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8d75f501-09bf-440e-9332-d2c0c8f8ac29',
  'x-ms-routing-request-id': 'WESTUS:20151022T222345Z:8d75f501-09bf-440e-9332-d2c0c8f8ac29',
  date: 'Thu, 22 Oct 2015 22:23:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e6abf5ca-f0ac-4392-a19a-985cecf1400f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:23:46.4757694+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '196469bc-c39d-4273-a12a-4cab9ea80930',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14825',
  'x-ms-correlation-request-id': 'c8668697-f32e-4506-88da-2b404451a92b',
  'x-ms-routing-request-id': 'WESTUS:20151022T222416Z:c8668697-f32e-4506-88da-2b404451a92b',
  date: 'Thu, 22 Oct 2015 22:24:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e6abf5ca-f0ac-4392-a19a-985cecf1400f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:23:46.4757694+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '196469bc-c39d-4273-a12a-4cab9ea80930',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14825',
  'x-ms-correlation-request-id': 'c8668697-f32e-4506-88da-2b404451a92b',
  'x-ms-routing-request-id': 'WESTUS:20151022T222416Z:c8668697-f32e-4506-88da-2b404451a92b',
  date: 'Thu, 22 Oct 2015 22:24:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e6abf5ca-f0ac-4392-a19a-985cecf1400f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:23:46.4757694+00:00\",\r\n  \"endTime\": \"2015-10-22T22:24:31.8675193+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '2bb06bb7-0f72-4537-b46a-e222f37d9397',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14839',
  'x-ms-correlation-request-id': '9e669bf0-0fdb-409d-b395-0115025807b0',
  'x-ms-routing-request-id': 'WESTUS:20151022T222447Z:9e669bf0-0fdb-409d-b395-0115025807b0',
  date: 'Thu, 22 Oct 2015 22:24:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e6abf5ca-f0ac-4392-a19a-985cecf1400f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"e6abf5ca-f0ac-4392-a19a-985cecf1400f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:23:46.4757694+00:00\",\r\n  \"endTime\": \"2015-10-22T22:24:31.8675193+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '2bb06bb7-0f72-4537-b46a-e222f37d9397',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14839',
  'x-ms-correlation-request-id': '9e669bf0-0fdb-409d-b395-0115025807b0',
  'x-ms-routing-request-id': 'WESTUS:20151022T222447Z:9e669bf0-0fdb-409d-b395-0115025807b0',
  date: 'Thu, 22 Oct 2015 22:24:47 GMT',
  connection: 'close' });
 return result; }]];