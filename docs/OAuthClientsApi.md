# Flipdish.OAuthClientsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRedirectUri**](OAuthClientsApi.md#addRedirectUri) | **POST** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis | 
[**createOAuthApp**](OAuthClientsApi.md#createOAuthApp) | **POST** /api/v1.0/{appId}/oauthclients | 
[**deleteOAuthApp**](OAuthClientsApi.md#deleteOAuthApp) | **DELETE** /api/v1.0/{appId}/oauthclients/{oauthAppId} | 
[**getOAuthApps**](OAuthClientsApi.md#getOAuthApps) | **GET** /api/v1.0/{appId}/oauthclients | 
[**getOAuthClientByClientId**](OAuthClientsApi.md#getOAuthClientByClientId) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId} | 
[**getOAuthClientSecret**](OAuthClientsApi.md#getOAuthClientSecret) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/secret | 
[**getOauthAccessToken**](OAuthClientsApi.md#getOauthAccessToken) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/accesstoken | 
[**getRedirectUris**](OAuthClientsApi.md#getRedirectUris) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis | 
[**oAuthClientsGetApplications**](OAuthClientsApi.md#oAuthClientsGetApplications) | **GET** /api/v1.0/{appId}/oauthclients/appnames | 
[**removeRedirectUri**](OAuthClientsApi.md#removeRedirectUri) | **DELETE** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis/{uriId} | 
[**updateOAuthApp**](OAuthClientsApi.md#updateOAuthApp) | **POST** /api/v1.0/{appId}/oauthclients/{oauthAppId} | 



## addRedirectUri

> RestApiResultOauthClientRedirectUri addRedirectUri(oauthAppId, appId, uri)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
let uri = "uri_example"; // String | 
apiInstance.addRedirectUri(oauthAppId, appId, uri, (error, data, response) => {
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
 **appId** | **String**|  | 
 **uri** | **String**|  | 

### Return type

[**RestApiResultOauthClientRedirectUri**](RestApiResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## createOAuthApp

> createOAuthApp(appId, oAuthApp)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let appId = "appId_example"; // String | 
let oAuthApp = new Flipdish.OAuthApp(); // OAuthApp | 
apiInstance.createOAuthApp(appId, oAuthApp, (error, data, response) => {
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
 **oAuthApp** | [**OAuthApp**](OAuthApp.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## deleteOAuthApp

> deleteOAuthApp(oauthAppId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.deleteOAuthApp(oauthAppId, appId, (error, data, response) => {
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
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getOAuthApps

> RestApiArrayResultOAuthApp getOAuthApps(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let appId = "appId_example"; // String | 
let opts = {
  'oauthAppName': "oauthAppName_example" // String | 
};
apiInstance.getOAuthApps(appId, opts, (error, data, response) => {
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
 **oauthAppName** | **String**|  | [optional] 

### Return type

[**RestApiArrayResultOAuthApp**](RestApiArrayResultOAuthApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getOAuthClientByClientId

> RestApiResultOAuthApp getOAuthClientByClientId(oauthAppId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.getOAuthClientByClientId(oauthAppId, appId, (error, data, response) => {
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
 **appId** | **String**|  | 

### Return type

[**RestApiResultOAuthApp**](RestApiResultOAuthApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getOAuthClientSecret

> RestApiStringResult getOAuthClientSecret(oauthAppId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.getOAuthClientSecret(oauthAppId, appId, (error, data, response) => {
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
 **appId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getOauthAccessToken

> RestApiStringResult getOauthAccessToken(oauthAppId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.getOauthAccessToken(oauthAppId, appId, (error, data, response) => {
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
 **appId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getRedirectUris

> RestApiArrayResultOauthClientRedirectUri getRedirectUris(oauthAppId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.getRedirectUris(oauthAppId, appId, (error, data, response) => {
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
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultOauthClientRedirectUri**](RestApiArrayResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## oAuthClientsGetApplications

> Object oAuthClientsGetApplications(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let appId = "appId_example"; // String | 
apiInstance.oAuthClientsGetApplications(appId, (error, data, response) => {
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## removeRedirectUri

> removeRedirectUri(oauthAppId, uriId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let uriId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.removeRedirectUri(oauthAppId, uriId, appId, (error, data, response) => {
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
 **uriId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## updateOAuthApp

> updateOAuthApp(oauthAppId, appId, oAuthApp)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OAuthClientsApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
let oAuthApp = new Flipdish.OAuthApp(); // OAuthApp | 
apiInstance.updateOAuthApp(oauthAppId, appId, oAuthApp, (error, data, response) => {
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
 **appId** | **String**|  | 
 **oAuthApp** | [**OAuthApp**](OAuthApp.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace

