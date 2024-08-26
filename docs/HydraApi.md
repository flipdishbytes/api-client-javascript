# Flipdish.HydraApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignEmv**](HydraApi.md#assignEmv) | **POST** /api/v1.0/{appId}/hydra/emvterminal/assign/{hydraConfigId}/{emvTerminalId} | 
[**attachStoreToKiosk**](HydraApi.md#attachStoreToKiosk) | **POST** /api/v1.0/{appId}/AttachStoreToKiosk/{deviceId}/store/{storeId} | 
[**attachStoreToTerminal**](HydraApi.md#attachStoreToTerminal) | **POST** /api/v1.0/{appId}/hydra/{deviceId}/attach/{storeId} | 
[**cancelEmvPayment**](HydraApi.md#cancelEmvPayment) | **POST** /api/v1.0/{appId}/hydra/cancelemvpayment/{orderId} | 
[**detachStoreFromTerminal**](HydraApi.md#detachStoreFromTerminal) | **POST** /api/v1.0/{appId}/hydra/{deviceId}/detach/{storeId} | 
[**getAblyToken**](HydraApi.md#getAblyToken) | **GET** /api/v1.0/hydra/ably_token | 
[**getAttachedDevice**](HydraApi.md#getAttachedDevice) | **GET** /api/v1.0/{appId}/hydra/{deviceType}/{deviceId} | 
[**getAttachedDevices**](HydraApi.md#getAttachedDevices) | **GET** /api/v1.0/{appId}/hydra/{deviceType}/list | 
[**getEMVTerminalDetails**](HydraApi.md#getEMVTerminalDetails) | **GET** /api/v1.0/{appId}/hydra/emvterminal | 
[**getEmvOrderState**](HydraApi.md#getEmvOrderState) | **GET** /api/v1.0/{appId}/hydra/emvorderstate/{orderId} | 
[**getKioskCashPaymentSettings**](HydraApi.md#getKioskCashPaymentSettings) | **GET** /api/v1.0/{appId}/kioskcashsettings/{deviceId} | 
[**getKioskSettings**](HydraApi.md#getKioskSettings) | **GET** /api/v1.0/{appId}/kiosksettings/{deviceId} | 
[**getRegistration**](HydraApi.md#getRegistration) | **GET** /api/v1.0/hydra/registration | 
[**getSettings**](HydraApi.md#getSettings) | **GET** /api/v1.0/hydra/settings | 
[**hydraCreateEmv**](HydraApi.md#hydraCreateEmv) | **POST** /api/v1.0/{appId}/emvterminals | 
[**hydraDeleteEmv**](HydraApi.md#hydraDeleteEmv) | **DELETE** /api/v1.0/{appId}/emvterminals/{id} | 
[**hydraDetachStoreFromKiosk**](HydraApi.md#hydraDetachStoreFromKiosk) | **DELETE** /api/v1.0/{appId}/DetachStoreFromKiosk/{deviceId}/store/{storeId} | 
[**hydraGetEmvsForAppId**](HydraApi.md#hydraGetEmvsForAppId) | **GET** /api/v1.0/{appId}/emvterminals | 
[**loginWithDeviceId**](HydraApi.md#loginWithDeviceId) | **POST** /api/v1.0/hydra/{deviceId}/login | 
[**register**](HydraApi.md#register) | **POST** /api/v1.0/{appId}/hydra/registration | 
[**unAssign**](HydraApi.md#unAssign) | **DELETE** /api/v1.0/{appId}/hydra/{deviceId}/registration | 
[**unassignEmv**](HydraApi.md#unassignEmv) | **POST** /api/v1.0/{appId}/hydra/emvterminal/unassign/{hydraConfigId} | 
[**updateKioskCashVisibilitySettings**](HydraApi.md#updateKioskCashVisibilitySettings) | **POST** /api/v1.0/{appId}/kioskupdatecashsettings | 
[**updateKioskSettings**](HydraApi.md#updateKioskSettings) | **POST** /api/v1.0/{appId}/kiosksettings/{deviceId} | 



## assignEmv

> assignEmv(appId, hydraConfigId, emvTerminalId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let hydraConfigId = 56; // Number | 
let emvTerminalId = 56; // Number | 
apiInstance.assignEmv(appId, hydraConfigId, emvTerminalId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## attachStoreToKiosk

> RestApiResultHydraStatus attachStoreToKiosk(appId, storeId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let deviceId = "deviceId_example"; // String | 
apiInstance.attachStoreToKiosk(appId, storeId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## attachStoreToTerminal

> RestApiResultHydraStatus attachStoreToTerminal(appId, deviceId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.attachStoreToTerminal(appId, deviceId, storeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## cancelEmvPayment

> cancelEmvPayment(orderId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let orderId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.cancelEmvPayment(orderId, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## detachStoreFromTerminal

> RestApiResultHydraStatus detachStoreFromTerminal(appId, deviceId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.detachStoreFromTerminal(appId, deviceId, storeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getAblyToken

> getAblyToken()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
apiInstance.getAblyToken((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getAttachedDevice

> RestApiResultHydraDeviceDetails getAttachedDevice(appId, deviceType, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceType = "deviceType_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.getAttachedDevice(appId, deviceType, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceType** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultHydraDeviceDetails**](RestApiResultHydraDeviceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getAttachedDevices

> RestApiPaginationResultHydraDeviceDetails getAttachedDevices(appId, deviceType, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceType = "deviceType_example"; // String | 
let opts = {
  'pageIndex': 56, // Number | 
  'pageSize': 56, // Number | 
  'storeId': 56, // Number | 
  'deviceName': "deviceName_example", // String | 
  'deviceSerial': "deviceSerial_example" // String | 
};
apiInstance.getAttachedDevices(appId, deviceType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getEMVTerminalDetails

> RestApiResultPaymentTerminalDetails getEMVTerminalDetails(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
apiInstance.getEMVTerminalDetails(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getEmvOrderState

> RestApiResultPaymentTerminalTransactionDetails getEmvOrderState(orderId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let orderId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.getEmvOrderState(orderId, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getKioskCashPaymentSettings

> RestApiArrayResultKioskCashPaymentSettings getKioskCashPaymentSettings(appId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.getKioskCashPaymentSettings(appId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiArrayResultKioskCashPaymentSettings**](RestApiArrayResultKioskCashPaymentSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getKioskSettings

> RestApiResultKioskSettings getKioskSettings(appId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.getKioskSettings(appId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultKioskSettings**](RestApiResultKioskSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getRegistration

> RestApiResultHydraStatus getRegistration()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
apiInstance.getRegistration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getSettings

> RestApiResultHydraConfig getSettings()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
apiInstance.getSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestApiResultHydraConfig**](RestApiResultHydraConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## hydraCreateEmv

> Object hydraCreateEmv(appId, emv)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let emv = new Flipdish.EmvTerminal(); // EmvTerminal | 
apiInstance.hydraCreateEmv(appId, emv, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## hydraDeleteEmv

> Object hydraDeleteEmv(appId, id)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let id = 56; // Number | 
apiInstance.hydraDeleteEmv(appId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## hydraDetachStoreFromKiosk

> RestApiResultHydraStatus hydraDetachStoreFromKiosk(appId, storeId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let deviceId = "deviceId_example"; // String | 
apiInstance.hydraDetachStoreFromKiosk(appId, storeId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultHydraStatus**](RestApiResultHydraStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## hydraGetEmvsForAppId

> RestApiArrayResultEmvTerminalWithAssignments hydraGetEmvsForAppId(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
apiInstance.hydraGetEmvsForAppId(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## loginWithDeviceId

> loginWithDeviceId(deviceId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let deviceId = "deviceId_example"; // String | 
let opts = {
  'hydraUserType': "hydraUserType_example", // String | 
  'serialNumber': "serialNumber_example" // String | 
};
apiInstance.loginWithDeviceId(deviceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## register

> RestApiResultHydraStatus register(appId, hydraRegistration)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let hydraRegistration = new Flipdish.HydraRegistrationRequest(); // HydraRegistrationRequest | 
apiInstance.register(appId, hydraRegistration, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## unAssign

> unAssign(appId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.unAssign(appId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## unassignEmv

> unassignEmv(appId, hydraConfigId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let hydraConfigId = 56; // Number | 
apiInstance.unassignEmv(appId, hydraConfigId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## updateKioskCashVisibilitySettings

> updateKioskCashVisibilitySettings(appId, deviceId, isCashEnabled)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let isCashEnabled = true; // Boolean | 
apiInstance.updateKioskCashVisibilitySettings(appId, deviceId, isCashEnabled, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **isCashEnabled** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateKioskSettings

> updateKioskSettings(appId, deviceId, settings)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HydraApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let settings = new Flipdish.KioskSettings(); // KioskSettings | 
apiInstance.updateKioskSettings(appId, deviceId, settings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **settings** | [**KioskSettings**](KioskSettings.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

