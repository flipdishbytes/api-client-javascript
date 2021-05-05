# FlipdishOpenApiV10.HydraApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignEmv**](HydraApi.md#assignEmv) | **POST** /api/v1.0/{appId}/hydra/emvterminal/assign/{hydraConfigId}/{emvTerminalId} | Assign an EMV terminal to a kiosk
[**attachStoreToTerminal**](HydraApi.md#attachStoreToTerminal) | **POST** /api/v1.0/{appId}/hydra/{deviceId}/attach/{storeId} | [Private]
[**cancelEmvPayment**](HydraApi.md#cancelEmvPayment) | **POST** /api/v1.0/{appId}/hydra/cancelemvpayment/{orderId} | 
[**detachStoreFromTerminal**](HydraApi.md#detachStoreFromTerminal) | **POST** /api/v1.0/{appId}/hydra/{deviceId}/detach/{storeId} | [Private]
[**getAttachedDevices**](HydraApi.md#getAttachedDevices) | **GET** /api/v1.0/{appId}/hydra/{deviceType}/list | [Private]
[**getEMVTerminalDetails**](HydraApi.md#getEMVTerminalDetails) | **GET** /api/v1.0/{appId}/hydra/emvterminal | [Private]
[**getEmvOrderState**](HydraApi.md#getEmvOrderState) | **GET** /api/v1.0/{appId}/hydra/emvorderstate/{orderId} | [Private]
[**getRegistration**](HydraApi.md#getRegistration) | **GET** /api/v1.0/hydra/registration | 
[**getSettings**](HydraApi.md#getSettings) | **GET** /api/v1.0/hydra/settings | [Private]
[**hydraCreateEmv**](HydraApi.md#hydraCreateEmv) | **POST** /api/v1.0/{appId}/emvterminals | [Private]
[**hydraDeleteEmv**](HydraApi.md#hydraDeleteEmv) | **DELETE** /api/v1.0/{appId}/emvterminals/{id} | [Private]
[**hydraGetEmvsForAppId**](HydraApi.md#hydraGetEmvsForAppId) | **GET** /api/v1.0/{appId}/emvterminals | List EMV terminals belonging to the given AppNameId
[**loginWithDeviceId**](HydraApi.md#loginWithDeviceId) | **POST** /api/v1.0/hydra/{deviceId}/login | [Private]
[**register**](HydraApi.md#register) | **POST** /api/v1.0/{appId}/hydra/registration | [Private]
[**unAssign**](HydraApi.md#unAssign) | **DELETE** /api/v1.0/{appId}/hydra/{deviceId}/registration | [Private]
[**unassignEmv**](HydraApi.md#unassignEmv) | **POST** /api/v1.0/{appId}/hydra/emvterminal/unassign/{hydraConfigId} | Unassign the currently assigned EMV terminal from a kiosk


<a name="assignEmv"></a>
# **assignEmv**
> assignEmv(appId, hydraConfigId, emvTerminalId)

Assign an EMV terminal to a kiosk

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var hydraConfigId = 56; // Number | 

var emvTerminalId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignEmv(appId, hydraConfigId, emvTerminalId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **hydraConfigId** | **Number**|  | 
 **emvTerminalId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="attachStoreToTerminal"></a>
# **attachStoreToTerminal**
> RestApiResultHydraStatus attachStoreToTerminal(appId, deviceId, storeId)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachStoreToTerminal(appId, deviceId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="cancelEmvPayment"></a>
# **cancelEmvPayment**
> cancelEmvPayment(orderId, appId)



### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var orderId = 56; // Number | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelEmvPayment(orderId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="detachStoreFromTerminal"></a>
# **detachStoreFromTerminal**
> RestApiResultHydraStatus detachStoreFromTerminal(appId, deviceId, storeId)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detachStoreFromTerminal(appId, deviceId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getAttachedDevices"></a>
# **getAttachedDevices**
> RestApiPaginationResultHydraDeviceDetails getAttachedDevices(appId, deviceType, opts)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var deviceType = "deviceType_example"; // String | 

var opts = { 
  'pageIndex': 56, // Number | 
  'pageSize': 56, // Number | 
  'storeId': 56, // Number | 
  'deviceName': "deviceName_example", // String | 
  'deviceSerial': "deviceSerial_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttachedDevices(appId, deviceType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceType** | **String**|  | 
 **pageIndex** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **storeId** | **Number**|  | [optional] 
 **deviceName** | **String**|  | [optional] 
 **deviceSerial** | **String**|  | [optional] 

### Return type

[**RestApiPaginationResultHydraDeviceDetails**](RestApiPaginationResultHydraDeviceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getEMVTerminalDetails"></a>
# **getEMVTerminalDetails**
> RestApiResultPaymentTerminalDetails getEMVTerminalDetails(appId)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEMVTerminalDetails(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiResultPaymentTerminalDetails**](RestApiResultPaymentTerminalDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getEmvOrderState"></a>
# **getEmvOrderState**
> RestApiResultPaymentTerminalTransactionDetails getEmvOrderState(orderId, appId)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var orderId = 56; // Number | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmvOrderState(orderId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultPaymentTerminalTransactionDetails**](RestApiResultPaymentTerminalTransactionDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getRegistration"></a>
# **getRegistration**
> RestApiResultHydraStatus getRegistration()



### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getSettings"></a>
# **getSettings**
> RestApiResultHydraConfig getSettings()

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSettings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiResultHydraConfig**](RestApiResultHydraConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="hydraCreateEmv"></a>
# **hydraCreateEmv**
> Object hydraCreateEmv(appId, emv)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var emv = new FlipdishOpenApiV10.EmvTerminal(); // EmvTerminal | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hydraCreateEmv(appId, emv, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **emv** | [**EmvTerminal**](EmvTerminal.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="hydraDeleteEmv"></a>
# **hydraDeleteEmv**
> Object hydraDeleteEmv(appId, id)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hydraDeleteEmv(appId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **id** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="hydraGetEmvsForAppId"></a>
# **hydraGetEmvsForAppId**
> RestApiArrayResultEmvTerminalWithAssignments hydraGetEmvsForAppId(appId)

List EMV terminals belonging to the given AppNameId

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.hydraGetEmvsForAppId(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultEmvTerminalWithAssignments**](RestApiArrayResultEmvTerminalWithAssignments.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="loginWithDeviceId"></a>
# **loginWithDeviceId**
> loginWithDeviceId(deviceId, opts)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var deviceId = "deviceId_example"; // String | 

var opts = { 
  'hydraUserType': "hydraUserType_example", // String | 
  'serialNumber': "serialNumber_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginWithDeviceId(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **hydraUserType** | **String**|  | [optional] 
 **serialNumber** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="register"></a>
# **register**
> RestApiResultHydraStatus register(appId, hydraRegistration)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var hydraRegistration = new FlipdishOpenApiV10.HydraRegistrationRequest(); // HydraRegistrationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.register(appId, hydraRegistration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **hydraRegistration** | [**HydraRegistrationRequest**](HydraRegistrationRequest.md)|  | 

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unAssign"></a>
# **unAssign**
> unAssign(appId, deviceId)

[Private]

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unAssign(appId, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unassignEmv"></a>
# **unassignEmv**
> unassignEmv(appId, hydraConfigId)

Unassign the currently assigned EMV terminal from a kiosk

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HydraApi();

var appId = "appId_example"; // String | 

var hydraConfigId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unassignEmv(appId, hydraConfigId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **hydraConfigId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

