# Flipdish.LightspeedApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lightspeedGenerateMenu**](LightspeedApi.md#lightspeedGenerateMenu) | **POST** /api/v1.0/lightspeed/{storeId}/menu/generate | 
[**lightspeedGetStoreSettings**](LightspeedApi.md#lightspeedGetStoreSettings) | **GET** /api/v1.0/lightspeed/{storeId}/settings | 
[**lightspeedSaveStoreSettings**](LightspeedApi.md#lightspeedSaveStoreSettings) | **POST** /api/v1.0/lightspeed/{storeId}/settings | 


<a name="lightspeedGenerateMenu"></a>
# **lightspeedGenerateMenu**
> Object lightspeedGenerateMenu(storeId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.LightspeedApi();

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lightspeedGenerateMenu(storeId, callback);
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

<a name="lightspeedGetStoreSettings"></a>
# **lightspeedGetStoreSettings**
> RestApiResultLightspeedSettings lightspeedGetStoreSettings(storeId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.LightspeedApi();

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lightspeedGetStoreSettings(storeId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="lightspeedSaveStoreSettings"></a>
# **lightspeedSaveStoreSettings**
> RestApiResultLightspeedSettings lightspeedSaveStoreSettings(storeId, lightspeedSettings)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.LightspeedApi();

var storeId = 56; // Number | 

var lightspeedSettings = new Flipdish.LightspeedSettings(); // LightspeedSettings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lightspeedSaveStoreSettings(storeId, lightspeedSettings, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

