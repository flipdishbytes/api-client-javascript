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


<a name="appStoreConfigurationsAppStoreHandleOauthResponseCode"></a>
# **appStoreConfigurationsAppStoreHandleOauthResponseCode**
> Object appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appStoreAppId = "appStoreAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId, callback);
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

<a name="createAppStoreConfig"></a>
# **createAppStoreConfig**
> RestApiResultAppStoreAppConfiguration createAppStoreConfig(appId, appStoreAppId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAppStoreConfig(appId, appStoreAppId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteAppStoreConfig"></a>
# **deleteAppStoreConfig**
> RestApiStringResult deleteAppStoreConfig(appId, appStoreAppId, configId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 

var configId = "configId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAppStoreConfig(appId, appStoreAppId, configId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="executeConfigurationAction"></a>
# **executeConfigurationAction**
> RestApiResultExecuteConfigurationActionResult executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 

var configId = "configId_example"; // String | 

var executeConfigurationActionRequest = new Flipdish.ExecuteConfigurationActionRequest(); // ExecuteConfigurationActionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getAppStoreConfig"></a>
# **getAppStoreConfig**
> RestApiResultAppStoreAppConfiguration getAppStoreConfig(appId, appStoreAppId, configId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 

var configId = "configId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppStoreConfig(appId, appStoreAppId, configId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getConfiguredAppSingleApp"></a>
# **getConfiguredAppSingleApp**
> RestApiArrayResultAppStoreAppConfigurationSummary getConfiguredAppSingleApp(appId, appStoreAppId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfiguredAppSingleApp(appId, appStoreAppId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getConfiguredApps"></a>
# **getConfiguredApps**
> RestApiArrayResultAppStoreAppSummary getConfiguredApps(appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfiguredApps(appId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateAppStoreConfig"></a>
# **updateAppStoreConfig**
> updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 

var configId = "configId_example"; // String | 

var updateAppStoreAppConfiguration = new Flipdish.UpdateAppStoreAppConfiguration(); // UpdateAppStoreAppConfiguration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateAppStoreConfigSettingValues"></a>
# **updateAppStoreConfigSettingValues**
> updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreConfigurationsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 

var configId = "configId_example"; // String | 

var updateAppStoreAppConfigurationValues = new Flipdish.UpdateAppStoreAppConfigurationValuesBatch(); // UpdateAppStoreAppConfigurationValuesBatch | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

