# Flipdish.AppStoreDeveloperApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appVerificationUpdate**](AppStoreDeveloperApi.md#appVerificationUpdate) | **PUT** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId}/verification | 
[**createAppStoreApp**](AppStoreDeveloperApi.md#createAppStoreApp) | **POST** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps | 
[**deleteAppStoreApp**](AppStoreDeveloperApi.md#deleteAppStoreApp) | **DELETE** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId} | 
[**getAppExternalProduct**](AppStoreDeveloperApi.md#getAppExternalProduct) | **GET** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId}/external_product | 
[**getExternalFunctionSigningKey**](AppStoreDeveloperApi.md#getExternalFunctionSigningKey) | **GET** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId}/external_function_signing_key | 
[**updateAppStoreApp**](AppStoreDeveloperApi.md#updateAppStoreApp) | **PUT** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId} | 
[**updateExternalProduct**](AppStoreDeveloperApi.md#updateExternalProduct) | **PUT** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId}/external_product | 
[**uploadAppStoreAppLogo**](AppStoreDeveloperApi.md#uploadAppStoreAppLogo) | **POST** /api/v1.0/oauthclients/{oauthAppId}/appstore/apps/{appStoreAppId}/logo | 



## appVerificationUpdate

> appVerificationUpdate(oauthAppId, appStoreAppId, verificationStatus)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let verificationStatus = "verificationStatus_example"; // String | 
apiInstance.appVerificationUpdate(oauthAppId, appStoreAppId, verificationStatus, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 
 **verificationStatus** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Data, application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## createAppStoreApp

> RestApiResultAppStoreApp createAppStoreApp(oauthAppId, createAppStoreApp)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let createAppStoreApp = new Flipdish.CreateAppStoreApp(); // CreateAppStoreApp | 
apiInstance.createAppStoreApp(oauthAppId, createAppStoreApp, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **createAppStoreApp** | [**CreateAppStoreApp**](CreateAppStoreApp.md)|  | 

### Return type

[**RestApiResultAppStoreApp**](RestApiResultAppStoreApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## deleteAppStoreApp

> RestApiStringResult deleteAppStoreApp(oauthAppId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.deleteAppStoreApp(oauthAppId, appStoreAppId, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getAppExternalProduct

> getAppExternalProduct(oauthAppId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.getAppExternalProduct(oauthAppId, appStoreAppId, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getExternalFunctionSigningKey

> RestApiStringResult getExternalFunctionSigningKey(oauthAppId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.getExternalFunctionSigningKey(oauthAppId, appStoreAppId, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## updateAppStoreApp

> updateAppStoreApp(oauthAppId, appStoreAppId, appStoreApp)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let appStoreApp = new Flipdish.UpdateAppStoreApp(); // UpdateAppStoreApp | 
apiInstance.updateAppStoreApp(oauthAppId, appStoreAppId, appStoreApp, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 
 **appStoreApp** | [**UpdateAppStoreApp**](UpdateAppStoreApp.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## updateExternalProduct

> updateExternalProduct(oauthAppId, appStoreAppId, appStoreAppExternalProduct)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let appStoreAppExternalProduct = new Flipdish.UpdateAppStoreAppExternalProduct(); // UpdateAppStoreAppExternalProduct | 
apiInstance.updateExternalProduct(oauthAppId, appStoreAppId, appStoreAppExternalProduct, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 
 **appStoreAppExternalProduct** | [**UpdateAppStoreAppExternalProduct**](UpdateAppStoreAppExternalProduct.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Data, application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## uploadAppStoreAppLogo

> uploadAppStoreAppLogo(oauthAppId, appStoreAppId, Image)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreDeveloperApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let Image = "/path/to/file"; // File | App Store App Logo
apiInstance.uploadAppStoreAppLogo(oauthAppId, appStoreAppId, Image, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appStoreAppId** | **String**|  | 
 **Image** | **File**| App Store App Logo | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml

