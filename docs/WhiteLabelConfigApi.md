# Flipdish.WhiteLabelConfigApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppGeneralConfig**](WhiteLabelConfigApi.md#getAppGeneralConfig) | **GET** /api/v1.0/whitelabelconfig/{appId}/general | 
[**getPlayStoreConfig**](WhiteLabelConfigApi.md#getPlayStoreConfig) | **GET** /api/v1.0/whitelabelconfig/{appId}/playstore | 
[**getWhiteLabelAppStoreConfig**](WhiteLabelConfigApi.md#getWhiteLabelAppStoreConfig) | **GET** /api/v1.0/whitelabelconfig/{appId}/appstore | 
[**getWhiteLabelConfig**](WhiteLabelConfigApi.md#getWhiteLabelConfig) | **GET** /api/v1.0/whitelabelconfig/id/{wlid} | 
[**getWhiteLabelConfigByAppNameId**](WhiteLabelConfigApi.md#getWhiteLabelConfigByAppNameId) | **GET** /api/v1.0/whitelabelconfig/name/{appId} | 
[**updateAppGeneralConfig**](WhiteLabelConfigApi.md#updateAppGeneralConfig) | **POST** /api/v1.0/whitelabelconfig/{appId}/general | 
[**updatePlayStoreConfig**](WhiteLabelConfigApi.md#updatePlayStoreConfig) | **POST** /api/v1.0/whitelabelconfig/{appId}/playstore | 
[**updateWhiteLabelAppStoreConfig**](WhiteLabelConfigApi.md#updateWhiteLabelAppStoreConfig) | **POST** /api/v1.0/whitelabelconfig/{appId}/appstore | 
[**uploadAppStoreIcon**](WhiteLabelConfigApi.md#uploadAppStoreIcon) | **POST** /api/v1.0/whitelabelconfig/{appId}/app-store-icon | 
[**whiteLabelConfigHealthCheck**](WhiteLabelConfigApi.md#whiteLabelConfigHealthCheck) | **GET** /api/v1.0/whitelabelconfig/health | 



## getAppGeneralConfig

> RestApiResultAppGeneralConfigModel getAppGeneralConfig(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
apiInstance.getAppGeneralConfig(appId, (error, data, response) => {
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

[**RestApiResultAppGeneralConfigModel**](RestApiResultAppGeneralConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getPlayStoreConfig

> RestApiResultPlayStoreConfigModel getPlayStoreConfig(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
apiInstance.getPlayStoreConfig(appId, (error, data, response) => {
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

[**RestApiResultPlayStoreConfigModel**](RestApiResultPlayStoreConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getWhiteLabelAppStoreConfig

> RestApiResultAppStoreConfigModel getWhiteLabelAppStoreConfig(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
apiInstance.getWhiteLabelAppStoreConfig(appId, (error, data, response) => {
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

[**RestApiResultAppStoreConfigModel**](RestApiResultAppStoreConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getWhiteLabelConfig

> RestApiResultWhiteLabelConfigModel getWhiteLabelConfig(wlid)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let wlid = 56; // Number | 
apiInstance.getWhiteLabelConfig(wlid, (error, data, response) => {
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
 **wlid** | **Number**|  | 

### Return type

[**RestApiResultWhiteLabelConfigModel**](RestApiResultWhiteLabelConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getWhiteLabelConfigByAppNameId

> RestApiResultWhiteLabelConfigModel getWhiteLabelConfigByAppNameId(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
apiInstance.getWhiteLabelConfigByAppNameId(appId, (error, data, response) => {
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

[**RestApiResultWhiteLabelConfigModel**](RestApiResultWhiteLabelConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateAppGeneralConfig

> RestApiResultAppGeneralConfigModel updateAppGeneralConfig(appId, appGeneralConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
let appGeneralConfig = new Flipdish.AppGeneralConfigModel(); // AppGeneralConfigModel | 
apiInstance.updateAppGeneralConfig(appId, appGeneralConfig, (error, data, response) => {
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
 **appGeneralConfig** | [**AppGeneralConfigModel**](AppGeneralConfigModel.md)|  | 

### Return type

[**RestApiResultAppGeneralConfigModel**](RestApiResultAppGeneralConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updatePlayStoreConfig

> RestApiResultPlayStoreConfigModel updatePlayStoreConfig(appId, playStoreConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
let playStoreConfig = new Flipdish.PlayStoreConfigModel(); // PlayStoreConfigModel | 
apiInstance.updatePlayStoreConfig(appId, playStoreConfig, (error, data, response) => {
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
 **playStoreConfig** | [**PlayStoreConfigModel**](PlayStoreConfigModel.md)|  | 

### Return type

[**RestApiResultPlayStoreConfigModel**](RestApiResultPlayStoreConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateWhiteLabelAppStoreConfig

> RestApiResultAppStoreConfigModel updateWhiteLabelAppStoreConfig(appId, appStoreConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
let appStoreConfig = new Flipdish.AppStoreConfigModel(); // AppStoreConfigModel | 
apiInstance.updateWhiteLabelAppStoreConfig(appId, appStoreConfig, (error, data, response) => {
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
 **appStoreConfig** | [**AppStoreConfigModel**](AppStoreConfigModel.md)|  | 

### Return type

[**RestApiResultAppStoreConfigModel**](RestApiResultAppStoreConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadAppStoreIcon

> RestApiResultAssetResultModel uploadAppStoreIcon(appId, file)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
let appId = "appId_example"; // String | 
let file = new Flipdish.HttpPostedFileBase(); // HttpPostedFileBase | 
apiInstance.uploadAppStoreIcon(appId, file, (error, data, response) => {
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
 **file** | [**HttpPostedFileBase**](HttpPostedFileBase.md)|  | 

### Return type

[**RestApiResultAssetResultModel**](RestApiResultAssetResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## whiteLabelConfigHealthCheck

> String whiteLabelConfigHealthCheck()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelConfigApi();
apiInstance.whiteLabelConfigHealthCheck((error, data, response) => {
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

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

