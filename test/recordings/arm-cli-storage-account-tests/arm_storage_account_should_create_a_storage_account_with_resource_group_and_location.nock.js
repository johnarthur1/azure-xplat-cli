// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: 3fc26864-8ef2-48b9-abeb-04f44e1af76e\\r\\nCorrelation ID: 2836c383-40c3-4c75-982f-697c2bffd0b8\\r\\nTimestamp: 2015-10-19 08:07:46Z\",\"error_codes\":[90014],\"timestamp\":\"2015-10-19 08:07:46Z\",\"trace_id\":\"3fc26864-8ef2-48b9-abeb-04f44e1af76e\",\"correlation_id\":\"2836c383-40c3-4c75-982f-697c2bffd0b8\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3fc26864-8ef2-48b9-abeb-04f44e1af76e',
  'client-request-id': '2836c383-40c3-4c75-982f-697c2bffd0b8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_30',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token', '*')
  .reply(400, "{\"error\":\"invalid_request\",\"error_description\":\"AADSTS90014: The request body must contain the following parameter: 'refresh_token'.\\r\\nTrace ID: 3fc26864-8ef2-48b9-abeb-04f44e1af76e\\r\\nCorrelation ID: 2836c383-40c3-4c75-982f-697c2bffd0b8\\r\\nTimestamp: 2015-10-19 08:07:46Z\",\"error_codes\":[90014],\"timestamp\":\"2015-10-19 08:07:46Z\",\"trace_id\":\"3fc26864-8ef2-48b9-abeb-04f44e1af76e\",\"correlation_id\":\"2836c383-40c3-4c75-982f-697c2bffd0b8\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3fc26864-8ef2-48b9-abeb-04f44e1af76e',
  'client-request-id': '2836c383-40c3-4c75-982f-697c2bffd0b8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_30',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '438' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1445245667\",\"not_before\":\"1445241767\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ1MjQxNzY3LCJuYmYiOjE0NDUyNDE3NjcsImV4cCI6MTQ0NTI0NTY2NywidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3Iiwib2lkIjoiMTlkMjkxODUtOWU2Ny00MGJiLThhZGEtYTlhM2EwYTIxMDk2Iiwic3ViIjoiMTlkMjkxODUtOWU2Ny00MGJiLThhZGEtYTlhM2EwYTIxMDk2IiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImFwcGlkIjoiZTNmMjExNTYtZmViZi00NTg3LTk0NDktNjhmYjZhNzU3NzQ3IiwiYXBwaWRhY3IiOiIxIn0.AAKZHGZ39mczwN0XcV0PYCa-wCMwTgsyGr1wUCeLamJJJTpg883xPRqpFhoBhlvD17TmcshjdIxvzAnY5bVNNsLhIOxNeIQmRWOrOu61XNMI_rZACXIIDujzOUic48Z6ADaMAgO2TcP0MFzsxpQtl_5eC90PgzcZBLtZLGxNGnCMgkTQo0tYvb89x6he6cOoU-vTQIbFpbExIEK7QB7SxzsF6C-u8yZsdsM1y_Xs28msbEIartxnJjLkbnoRKU3s9xnGUNg0qeKh5hiW3tcfj8ruAK3fxj0MpAkJKr8vuR2alubVL9jyCt9YV3Yu7WVdioJb5ba9PqOVfFYS1VxNRQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'fdbed03e-c21b-4ea2-bc3b-f757ba2f3fc5',
  'client-request-id': '2836c383-40c3-4c75-982f-697c2bffd0b8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_41',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1445245667\",\"not_before\":\"1445241767\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ1MjQxNzY3LCJuYmYiOjE0NDUyNDE3NjcsImV4cCI6MTQ0NTI0NTY2NywidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3Iiwib2lkIjoiMTlkMjkxODUtOWU2Ny00MGJiLThhZGEtYTlhM2EwYTIxMDk2Iiwic3ViIjoiMTlkMjkxODUtOWU2Ny00MGJiLThhZGEtYTlhM2EwYTIxMDk2IiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImFwcGlkIjoiZTNmMjExNTYtZmViZi00NTg3LTk0NDktNjhmYjZhNzU3NzQ3IiwiYXBwaWRhY3IiOiIxIn0.AAKZHGZ39mczwN0XcV0PYCa-wCMwTgsyGr1wUCeLamJJJTpg883xPRqpFhoBhlvD17TmcshjdIxvzAnY5bVNNsLhIOxNeIQmRWOrOu61XNMI_rZACXIIDujzOUic48Z6ADaMAgO2TcP0MFzsxpQtl_5eC90PgzcZBLtZLGxNGnCMgkTQo0tYvb89x6he6cOoU-vTQIbFpbExIEK7QB7SxzsF6C-u8yZsdsM1y_Xs28msbEIartxnJjLkbnoRKU3s9xnGUNg0qeKh5hiW3tcfj8ruAK3fxj0MpAkJKr8vuR2alubVL9jyCt9YV3Yu7WVdioJb5ba9PqOVfFYS1VxNRQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'fdbed03e-c21b-4ea2-bc3b-f757ba2f3fc5',
  'client-request-id': '2836c383-40c3-4c75-982f-697c2bffd0b8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_41',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageGroup1071?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup1071' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'x-ms-correlation-request-id': '1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080747Z:1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageGroup1071?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup1071' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'x-ms-correlation-request-id': '1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080747Z:1e3c4d00-2172-4ac6-af40-48fdc20ed84f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:47 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageGroup1071?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup1071\",\"name\":\"armclistorageGroup1071\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '80e025d5-48ed-4238-91db-e8aeb723734d',
  'x-ms-correlation-request-id': '80e025d5-48ed-4238-91db-e8aeb723734d',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080750Z:80e025d5-48ed-4238-91db-e8aeb723734d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageGroup1071?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup1071\",\"name\":\"armclistorageGroup1071\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '80e025d5-48ed-4238-91db-e8aeb723734d',
  'x-ms-correlation-request-id': '80e025d5-48ed-4238-91db-e8aeb723734d',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080750Z:80e025d5-48ed-4238-91db-e8aeb723734d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup1071/providers/Microsoft.Storage/storageAccounts/armclistorageaccount713?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/4c1097a4-61ac-40f6-acbe-8156391e1062?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'caed904c-a60a-413a-94a8-319156328f25',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'caed904c-a60a-413a-94a8-319156328f25',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080754Z:caed904c-a60a-413a-94a8-319156328f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup1071/providers/Microsoft.Storage/storageAccounts/armclistorageaccount713?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/4c1097a4-61ac-40f6-acbe-8156391e1062?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'caed904c-a60a-413a-94a8-319156328f25',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'caed904c-a60a-413a-94a8-319156328f25',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080754Z:caed904c-a60a-413a-94a8-319156328f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/4c1097a4-61ac-40f6-acbe-8156391e1062?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"West US\",\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '66',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080821Z:0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:08:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/4c1097a4-61ac-40f6-acbe-8156391e1062?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"West US\",\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '66',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080821Z:0b3f095a-1ee7-4c42-b76a-2db4ccf1ee7e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:08:20 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount713','armclistorageGroup1071'];};