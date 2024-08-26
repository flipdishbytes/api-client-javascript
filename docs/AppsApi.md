# Flipdish.AppsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /api/v1.0/apps | 
[**createAppInOrg**](AppsApi.md#createAppInOrg) | **POST** /api/v1.0/orgs/{orgId}/apps | 
[**getApp**](AppsApi.md#getApp) | **GET** /api/v1.0/apps/{appId} | 
[**getAppHostnameStatus**](AppsApi.md#getAppHostnameStatus) | **GET** /api/v1.0/apps/{appId}/hostnamestatus | 
[**getApps**](AppsApi.md#getApps) | **GET** /api/v1.0/apps | 
[**getCompliance**](AppsApi.md#getCompliance) | **GET** /api/v1.0/apps/{appId}/compliance | 
[**getPanaceaVanityUrl**](AppsApi.md#getPanaceaVanityUrl) | **GET** /api/v1.0/apps/{appId}/panacea/url | 
[**getSupportedCountries**](AppsApi.md#getSupportedCountries) | **GET** /api/v1.0/apps/supportedcountries | 
[**isPanaceaVanityUrlAvailable**](AppsApi.md#isPanaceaVanityUrlAvailable) | **GET** /api/v1.0/apps/{appId}/panacea/url/available | 
[**lookupByWhitelabelId**](AppsApi.md#lookupByWhitelabelId) | **GET** /api/v1.0/apps/{whitelabelId}/lookup | 
[**setAppConfig**](AppsApi.md#setAppConfig) | **POST** /api/v1.0/apps/{appId}/config | 
[**setAppHostname**](AppsApi.md#setAppHostname) | **POST** /api/v1.0/apps/{appId}/hostname | 
[**setAppLanguages**](AppsApi.md#setAppLanguages) | **POST** /api/v1.0/apps/{appId}/config/languages | 
[**setAppStoreName**](AppsApi.md#setAppStoreName) | **POST** /api/v1.0/apps/{appId}/appstorename | 
[**setCompliance**](AppsApi.md#setCompliance) | **POST** /api/v1.0/apps/{appId}/compliance | 
[**setPanaceaVanityUrl**](AppsApi.md#setPanaceaVanityUrl) | **POST** /api/v1.0/apps/{appId}/panacea/url | 
[**toggleNextGenWeb**](AppsApi.md#toggleNextGenWeb) | **POST** /api/v1.0/apps/{appId}/nextgenweb | 
[**uploadAppLogo**](AppsApi.md#uploadAppLogo) | **POST** /api/v1.0/apps/{appId}/logo | 



## createApp

> RestApiStringResult createApp(parameters)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let parameters = new Flipdish.CreateAppParameters(); // CreateAppParameters | 
apiInstance.createApp(parameters, (error, data, response) => {
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
 **parameters** | [**CreateAppParameters**](CreateAppParameters.md)|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## createAppInOrg

> RestApiResultApp createAppInOrg(orgId, createAppInOrgRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let orgId = "orgId_example"; // String | 
let createAppInOrgRequest = new Flipdish.CreateAppInOrg(); // CreateAppInOrg | 
apiInstance.createAppInOrg(orgId, createAppInOrgRequest, (error, data, response) => {
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
 **orgId** | **String**|  | 
 **createAppInOrgRequest** | [**CreateAppInOrg**](CreateAppInOrg.md)|  | 

### Return type

[**RestApiResultApp**](RestApiResultApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getApp

> RestApiResultApp getApp(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
apiInstance.getApp(appId, (error, data, response) => {
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

[**RestApiResultApp**](RestApiResultApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getAppHostnameStatus

> RestApiResultDnsRecordInformation getAppHostnameStatus(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
apiInstance.getAppHostnameStatus(appId, (error, data, response) => {
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

[**RestApiResultDnsRecordInformation**](RestApiResultDnsRecordInformation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getApps

> RestApiPaginationResultApp getApps(opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let opts = {
  'nameFilter': "nameFilter_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getApps(opts, (error, data, response) => {
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
 **nameFilter** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultApp**](RestApiPaginationResultApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getCompliance

> RestApiResultAppCompliance getCompliance(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
apiInstance.getCompliance(appId, (error, data, response) => {
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

[**RestApiResultAppCompliance**](RestApiResultAppCompliance.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPanaceaVanityUrl

> RestApiStringResult getPanaceaVanityUrl(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
apiInstance.getPanaceaVanityUrl(appId, (error, data, response) => {
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

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getSupportedCountries

> RestApiArrayResultSupportedCountry getSupportedCountries()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
apiInstance.getSupportedCountries((error, data, response) => {
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

[**RestApiArrayResultSupportedCountry**](RestApiArrayResultSupportedCountry.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## isPanaceaVanityUrlAvailable

> RestApiStringResult isPanaceaVanityUrlAvailable(vanityUrl, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let vanityUrl = "vanityUrl_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.isPanaceaVanityUrlAvailable(vanityUrl, appId, (error, data, response) => {
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
 **vanityUrl** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## lookupByWhitelabelId

> AppLookup lookupByWhitelabelId(whitelabelId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let whitelabelId = 56; // Number | 
apiInstance.lookupByWhitelabelId(whitelabelId, (error, data, response) => {
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
 **whitelabelId** | **Number**|  | 

### Return type

[**AppLookup**](AppLookup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setAppConfig

> RestApiResultApp setAppConfig(appId, appConfigUpdate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let appConfigUpdate = new Flipdish.AppConfigUpdateModel(); // AppConfigUpdateModel | 
apiInstance.setAppConfig(appId, appConfigUpdate, (error, data, response) => {
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
 **appConfigUpdate** | [**AppConfigUpdateModel**](AppConfigUpdateModel.md)|  | 

### Return type

[**RestApiResultApp**](RestApiResultApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setAppHostname

> RestApiStringResult setAppHostname(appId, hostname, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let hostname = "hostname_example"; // String | 
let opts = {
  'isEmbed': true // Boolean | 
};
apiInstance.setAppHostname(appId, hostname, opts, (error, data, response) => {
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
 **hostname** | **String**|  | 
 **isEmbed** | **Boolean**|  | [optional] 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setAppLanguages

> RestApiResultApp setAppLanguages(appId, languages)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let languages = [new Flipdish.Language()]; // [Language] | 
apiInstance.setAppLanguages(appId, languages, (error, data, response) => {
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
 **languages** | [**[Language]**](Language.md)|  | 

### Return type

[**RestApiResultApp**](RestApiResultApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setAppStoreName

> setAppStoreName(appId, appStoreName)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let appStoreName = "appStoreName_example"; // String | 
apiInstance.setAppStoreName(appId, appStoreName, (error, data, response) => {
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
 **appStoreName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## setCompliance

> RestApiResultAppCompliance setCompliance(appId, complianceType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let complianceType = "complianceType_example"; // String | 
apiInstance.setCompliance(appId, complianceType, (error, data, response) => {
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
 **complianceType** | **String**|  | 

### Return type

[**RestApiResultAppCompliance**](RestApiResultAppCompliance.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setPanaceaVanityUrl

> RestApiStringResult setPanaceaVanityUrl(appId, vanityUrl)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let vanityUrl = "vanityUrl_example"; // String | 
apiInstance.setPanaceaVanityUrl(appId, vanityUrl, (error, data, response) => {
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
 **vanityUrl** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## toggleNextGenWeb

> RestApiStringResult toggleNextGenWeb(appId, hostname, vanityUrl, isNextGenWeb)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let hostname = "hostname_example"; // String | 
let vanityUrl = "vanityUrl_example"; // String | 
let isNextGenWeb = true; // Boolean | 
apiInstance.toggleNextGenWeb(appId, hostname, vanityUrl, isNextGenWeb, (error, data, response) => {
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
 **hostname** | **String**|  | 
 **vanityUrl** | **String**|  | 
 **isNextGenWeb** | **Boolean**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## uploadAppLogo

> uploadAppLogo(appId, Image)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppsApi();
let appId = "appId_example"; // String | 
let Image = "/path/to/file"; // File | App Logo
apiInstance.uploadAppLogo(appId, Image, (error, data, response) => {
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
 **Image** | **File**| App Logo | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml

