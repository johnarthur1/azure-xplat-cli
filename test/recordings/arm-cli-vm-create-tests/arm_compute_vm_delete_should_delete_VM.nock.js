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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"d13e3c63-06fc-4b6f-b2fc-edf95dfc328e\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5f65613f8e26ca0d-os-1445550879090\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage16643.blob.core.windows.net/xplatteststoragecnt16897/cli5f65613f8e26ca0d-os-1445550879090.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage16643.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3952',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '06baa7d6-3ef1-4d4e-aae2-def57ca79840',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '1888794a-4c79-48c1-8c90-ab585f18a9c8',
  'x-ms-routing-request-id': 'WESTUS:20151022T220141Z:1888794a-4c79-48c1-8c90-ab585f18a9c8',
  date: 'Thu, 22 Oct 2015 22:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"d13e3c63-06fc-4b6f-b2fc-edf95dfc328e\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5f65613f8e26ca0d-os-1445550879090\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage16643.blob.core.windows.net/xplatteststoragecnt16897/cli5f65613f8e26ca0d-os-1445550879090.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage16643.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3952',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '06baa7d6-3ef1-4d4e-aae2-def57ca79840',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '1888794a-4c79-48c1-8c90-ab585f18a9c8',
  'x-ms-routing-request-id': 'WESTUS:20151022T220141Z:1888794a-4c79-48c1-8c90-ab585f18a9c8',
  date: 'Thu, 22 Oct 2015 22:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'a8624047-652d-489d-a8b6-03a7b87ff778',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9f76b1df-420f-4a23-b97e-661299eea4c6',
  'x-ms-routing-request-id': 'WESTUS:20151022T220143Z:9f76b1df-420f-4a23-b97e-661299eea4c6',
  date: 'Thu, 22 Oct 2015 22:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9210/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'a8624047-652d-489d-a8b6-03a7b87ff778',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9f76b1df-420f-4a23-b97e-661299eea4c6',
  'x-ms-routing-request-id': 'WESTUS:20151022T220143Z:9f76b1df-420f-4a23-b97e-661299eea4c6',
  date: 'Thu, 22 Oct 2015 22:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '95cc41af-b3e9-4529-8c86-fd34d2de5150',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '7fbc7b8b-621e-4d5f-ab91-ff03b524c170',
  'x-ms-routing-request-id': 'WESTUS:20151022T220214Z:7fbc7b8b-621e-4d5f-ab91-ff03b524c170',
  date: 'Thu, 22 Oct 2015 22:02:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '95cc41af-b3e9-4529-8c86-fd34d2de5150',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '7fbc7b8b-621e-4d5f-ab91-ff03b524c170',
  'x-ms-routing-request-id': 'WESTUS:20151022T220214Z:7fbc7b8b-621e-4d5f-ab91-ff03b524c170',
  date: 'Thu, 22 Oct 2015 22:02:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'aceff50c-19d3-4395-9dd9-b8c9003297c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': 'abbf6728-0425-4e5f-9628-ffa5bab752c8',
  'x-ms-routing-request-id': 'WESTUS:20151022T220245Z:abbf6728-0425-4e5f-9628-ffa5bab752c8',
  date: 'Thu, 22 Oct 2015 22:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'aceff50c-19d3-4395-9dd9-b8c9003297c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': 'abbf6728-0425-4e5f-9628-ffa5bab752c8',
  'x-ms-routing-request-id': 'WESTUS:20151022T220245Z:abbf6728-0425-4e5f-9628-ffa5bab752c8',
  date: 'Thu, 22 Oct 2015 22:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '8d513ce5-5564-4809-ab9a-3b77640cbde0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': 'e99b6e68-1cdf-4559-9ac3-348f3fb2914a',
  'x-ms-routing-request-id': 'WESTUS:20151022T220316Z:e99b6e68-1cdf-4559-9ac3-348f3fb2914a',
  date: 'Thu, 22 Oct 2015 22:03:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': '8d513ce5-5564-4809-ab9a-3b77640cbde0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': 'e99b6e68-1cdf-4559-9ac3-348f3fb2914a',
  'x-ms-routing-request-id': 'WESTUS:20151022T220316Z:e99b6e68-1cdf-4559-9ac3-348f3fb2914a',
  date: 'Thu, 22 Oct 2015 22:03:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c321f645-f444-4b31-8997-caedee0b9036',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '30df6d8a-6dea-4d2d-8ade-f2f6f57e7e95',
  'x-ms-routing-request-id': 'WESTUS:20151022T220347Z:30df6d8a-6dea-4d2d-8ade-f2f6f57e7e95',
  date: 'Thu, 22 Oct 2015 22:03:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c321f645-f444-4b31-8997-caedee0b9036',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14835',
  'x-ms-correlation-request-id': '30df6d8a-6dea-4d2d-8ade-f2f6f57e7e95',
  'x-ms-routing-request-id': 'WESTUS:20151022T220347Z:30df6d8a-6dea-4d2d-8ade-f2f6f57e7e95',
  date: 'Thu, 22 Oct 2015 22:03:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\",\r\n  \"endTime\": \"2015-10-22T22:04:06.3021047+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c07cc491-1db1-4544-9b4c-f9fca0ccdca5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': '2a0348de-e8ea-4169-aa35-250f3e9aeacf',
  'x-ms-routing-request-id': 'WESTUS:20151022T220418Z:2a0348de-e8ea-4169-aa35-250f3e9aeacf',
  date: 'Thu, 22 Oct 2015 22:04:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/a8624047-652d-489d-a8b6-03a7b87ff778?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"a8624047-652d-489d-a8b6-03a7b87ff778\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T22:01:43.9537392+00:00\",\r\n  \"endTime\": \"2015-10-22T22:04:06.3021047+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130871674276326948',
  'x-ms-request-id': 'c07cc491-1db1-4544-9b4c-f9fca0ccdca5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14838',
  'x-ms-correlation-request-id': '2a0348de-e8ea-4169-aa35-250f3e9aeacf',
  'x-ms-routing-request-id': 'WESTUS:20151022T220418Z:2a0348de-e8ea-4169-aa35-250f3e9aeacf',
  date: 'Thu, 22 Oct 2015 22:04:18 GMT',
  connection: 'close' });
 return result; }]];