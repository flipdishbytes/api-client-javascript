# Flipdish.LightspeedApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lightspeedGenerateMenu**](LightspeedApi.md#lightspeedGenerateMenu) | **POST** /api/v1.0/lightspeed/{storeId}/menu/generate | 
[**lightspeedGetStoreSettings**](LightspeedApi.md#lightspeedGetStoreSettings) | **GET** /api/v1.0/lightspeed/{storeId}/settings | 
[**lightspeedSaveStoreSettings**](LightspeedApi.md#lightspeedSaveStoreSettings) | **POST** /api/v1.0/lightspeed/{storeId}/settings | 



## lightspeedGenerateMenu

> Object lightspeedGenerateMenu(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LightspeedApi();
let storeId = 56; // Number | 
apiInstance.lightspeedGenerateMenu(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## lightspeedGetStoreSettings

> RestApiResultLightspeedSettings lightspeedGetStoreSettings(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LightspeedApi();
let storeId = 56; // Number | 
apiInstance.lightspeedGetStoreSettings(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultLightspeedSettings**](RestApiResultLightspeedSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## lightspeedSaveStoreSettings

> RestApiResultLightspeedSettings lightspeedSaveStoreSettings(storeId, lightspeedSettings)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LightspeedApi();
let storeId = 56; // Number | 
let lightspeedSettings = new Flipdish.LightspeedSettings(); // LightspeedSettings | 
apiInstance.lightspeedSaveStoreSettings(storeId, lightspeedSettings, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **lightspeedSettings** | [**LightspeedSettings**](LightspeedSettings.md)|  | 

### Return type

[**RestApiResultLightspeedSettings**](RestApiResultLightspeedSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

