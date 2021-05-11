# Flipdish.OAuthClientsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRedirectUri**](OAuthClientsApi.md#addRedirectUri) | **POST** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis | Create OAuth App redirect uri
[**createOAuthApp**](OAuthClientsApi.md#createOAuthApp) | **POST** /api/v1.0/{appId}/oauthclients | Create OAuth App
[**deleteOAuthApp**](OAuthClientsApi.md#deleteOAuthApp) | **DELETE** /api/v1.0/{appId}/oauthclients/{oauthAppId} | Delete OAuth App
[**getOAuthApps**](OAuthClientsApi.md#getOAuthApps) | **GET** /api/v1.0/{appId}/oauthclients | Get all OAuth Apps
[**getOAuthClientByClientId**](OAuthClientsApi.md#getOAuthClientByClientId) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId} | Get OAuth App by identifier
[**getOAuthClientSecret**](OAuthClientsApi.md#getOAuthClientSecret) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/secret | Get OAuth App secret key
[**getOauthAccessToken**](OAuthClientsApi.md#getOauthAccessToken) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/accesstoken | Get OAuth access token for App
[**getRedirectUris**](OAuthClientsApi.md#getRedirectUris) | **GET** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis | Get OAuth App redirect uris
[**oAuthClientsGetApplications**](OAuthClientsApi.md#oAuthClientsGetApplications) | **GET** /api/v1.0/{appId}/oauthclients/appnames | 
[**removeRedirectUri**](OAuthClientsApi.md#removeRedirectUri) | **DELETE** /api/v1.0/{appId}/oauthclients/{oauthAppId}/redirecturis/{uriId} | Delete OAuth App redirect uri
[**updateOAuthApp**](OAuthClientsApi.md#updateOAuthApp) | **POST** /api/v1.0/{appId}/oauthclients/{oauthAppId} | Update OAuth App


<a name="addRedirectUri"></a>
# **addRedirectUri**
> RestApiResultOauthClientRedirectUri addRedirectUri(oauthAppId, uri, appId)

Create OAuth App redirect uri

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var uri = "uri_example"; // String | Redirect uri

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRedirectUri(oauthAppId, uri, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **uri** | **String**| Redirect uri | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultOauthClientRedirectUri**](RestApiResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createOAuthApp"></a>
# **createOAuthApp**
> createOAuthApp(oAuthApp, appId)

Create OAuth App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthApp = new Flipdish.OAuthApp(); // OAuthApp | OAuth App

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createOAuthApp(oAuthApp, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthApp** | [**OAuthApp**](OAuthApp.md)| OAuth App | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteOAuthApp"></a>
# **deleteOAuthApp**
> deleteOAuthApp(oauthAppId, appId)

Delete OAuth App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOAuthApp(oauthAppId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthApps"></a>
# **getOAuthApps**
> RestApiArrayResultOAuthApp getOAuthApps(appId, opts)

Get all OAuth Apps

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var appId = "appId_example"; // String | 

var opts = { 
  'oauthAppName': "oauthAppName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthApps(appId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthClientByClientId"></a>
# **getOAuthClientByClientId**
> RestApiResultOAuthApp getOAuthClientByClientId(oauthAppId, appId)

Get OAuth App by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthClientByClientId(oauthAppId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultOAuthApp**](RestApiResultOAuthApp.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthClientSecret"></a>
# **getOAuthClientSecret**
> RestApiStringResult getOAuthClientSecret(oauthAppId, appId)

Get OAuth App secret key

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthClientSecret(oauthAppId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **appId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOauthAccessToken"></a>
# **getOauthAccessToken**
> RestApiStringResult getOauthAccessToken(oauthAppId, appId)

Get OAuth access token for App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOauthAccessToken(oauthAppId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **appId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getRedirectUris"></a>
# **getRedirectUris**
> RestApiArrayResultOauthClientRedirectUri getRedirectUris(oauthAppId, appId)

Get OAuth App redirect uris

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRedirectUris(oauthAppId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultOauthClientRedirectUri**](RestApiArrayResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="oAuthClientsGetApplications"></a>
# **oAuthClientsGetApplications**
> Object oAuthClientsGetApplications(appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oAuthClientsGetApplications(appId, callback);
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

<a name="removeRedirectUri"></a>
# **removeRedirectUri**
> removeRedirectUri(oauthAppId, uriId, appId)

Delete OAuth App redirect uri

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var uriId = 56; // Number | Redirect uri identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeRedirectUri(oauthAppId, uriId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **uriId** | **Number**| Redirect uri identifier | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateOAuthApp"></a>
# **updateOAuthApp**
> updateOAuthApp(oauthAppId, oAuthApp, appId)

Update OAuth App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oauthAppId = "oauthAppId_example"; // String | OAuth App identifier

var oAuthApp = new Flipdish.OAuthApp(); // OAuthApp | OAuth App

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOAuthApp(oauthAppId, oAuthApp, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| OAuth App identifier | 
 **oAuthApp** | [**OAuthApp**](OAuthApp.md)| OAuth App | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

