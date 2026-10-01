# Flipdish.AppStoreConfigurationsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreConfigurationsAppStoreHandleOauthResponseCode**](AppStoreConfigurationsApi.md#appStoreConfigurationsAppStoreHandleOauthResponseCode) | **GET** /api/v1.0/appstore/oauthresponse/{appStoreAppId}/responsecode | 
[**createAppStoreConfig**](AppStoreConfigurationsApi.md#createAppStoreConfig) | **POST** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config | 
[**deleteAppStoreConfig**](AppStoreConfigurationsApi.md#deleteAppStoreConfig) | **DELETE** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId} | 
[**executeConfigurationAction**](AppStoreConfigurationsApi.md#executeConfigurationAction) | **POST** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}/action | 
[**getAppStoreConfig**](AppStoreConfigurationsApi.md#getAppStoreConfig) | **GET** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId} | 
[**getConfiguredAppSingleApp**](AppStoreConfigurationsApi.md#getConfiguredAppSingleApp) | **GET** /api/v1.0/{appId}/appstore/apps/{appStoreAppId} | 
[**getConfiguredApps**](AppStoreConfigurationsApi.md#getConfiguredApps) | **GET** /api/v1.0/{appId}/appstore/apps | 
[**updateAppStoreConfig**](AppStoreConfigurationsApi.md#updateAppStoreConfig) | **PUT** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId} | 
[**updateAppStoreConfigSettingValues**](AppStoreConfigurationsApi.md#updateAppStoreConfigSettingValues) | **POST** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}/updatesettings | 



## appStoreConfigurationsAppStoreHandleOauthResponseCode

> Object appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createAppStoreConfig

> RestApiResultAppStoreAppConfiguration createAppStoreConfig(appId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.createAppStoreConfig(appId, appStoreAppId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 

### Return type

[**RestApiResultAppStoreAppConfiguration**](RestApiResultAppStoreAppConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## deleteAppStoreConfig

> RestApiStringResult deleteAppStoreConfig(appId, appStoreAppId, configId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let configId = "configId_example"; // String | 
apiInstance.deleteAppStoreConfig(appId, appStoreAppId, configId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 
 **configId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## executeConfigurationAction

> RestApiResultExecuteConfigurationActionResult executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let configId = "configId_example"; // String | 
let executeConfigurationActionRequest = new Flipdish.ExecuteConfigurationActionRequest(); // ExecuteConfigurationActionRequest | 
apiInstance.executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 
 **configId** | **String**|  | 
 **executeConfigurationActionRequest** | [**ExecuteConfigurationActionRequest**](ExecuteConfigurationActionRequest.md)|  | 

### Return type

[**RestApiResultExecuteConfigurationActionResult**](RestApiResultExecuteConfigurationActionResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getAppStoreConfig

> RestApiResultAppStoreAppConfiguration getAppStoreConfig(appId, appStoreAppId, configId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let configId = "configId_example"; // String | 
apiInstance.getAppStoreConfig(appId, appStoreAppId, configId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 
 **configId** | **String**|  | 

### Return type

[**RestApiResultAppStoreAppConfiguration**](RestApiResultAppStoreAppConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getConfiguredAppSingleApp

> RestApiArrayResultAppStoreAppConfigurationSummary getConfiguredAppSingleApp(appId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.getConfiguredAppSingleApp(appId, appStoreAppId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 

### Return type

[**RestApiArrayResultAppStoreAppConfigurationSummary**](RestApiArrayResultAppStoreAppConfigurationSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getConfiguredApps

> RestApiArrayResultAppStoreAppSummary getConfiguredApps(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
apiInstance.getConfiguredApps(appId, (error, data, response) => {
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

[**RestApiArrayResultAppStoreAppSummary**](RestApiArrayResultAppStoreAppSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateAppStoreConfig

> updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let configId = "configId_example"; // String | 
let updateAppStoreAppConfiguration = new Flipdish.UpdateAppStoreAppConfiguration(); // UpdateAppStoreAppConfiguration | 
apiInstance.updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 
 **configId** | **String**|  | 
 **updateAppStoreAppConfiguration** | [**UpdateAppStoreAppConfiguration**](UpdateAppStoreAppConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## updateAppStoreConfigSettingValues

> updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreConfigurationsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
let configId = "configId_example"; // String | 
let updateAppStoreAppConfigurationValues = new Flipdish.UpdateAppStoreAppConfigurationValuesBatch(); // UpdateAppStoreAppConfigurationValuesBatch | 
apiInstance.updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 
 **configId** | **String**|  | 
 **updateAppStoreAppConfigurationValues** | [**UpdateAppStoreAppConfigurationValuesBatch**](UpdateAppStoreAppConfigurationValuesBatch.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace

