# Flipdish.OAuthClientsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRedirectUri**](OAuthClientsApi.md#addRedirectUri) | **POST** /api/v1.0/oauthclients/{oAuthClientId}/redirecturis | Create OAuth client redirect uri
[**createOAuthClient**](OAuthClientsApi.md#createOAuthClient) | **POST** /api/v1.0/oauthclients | Create OAuth client
[**deleteOAuthClient**](OAuthClientsApi.md#deleteOAuthClient) | **DELETE** /api/v1.0/oauthclients/{oAuthClientId} | Delete OAuth client
[**getOAuthClientByClientId**](OAuthClientsApi.md#getOAuthClientByClientId) | **GET** /api/v1.0/oauthclients/{clientId} | Get OAuth client by identifier
[**getOAuthClientSecret**](OAuthClientsApi.md#getOAuthClientSecret) | **GET** /api/v1.0/oauthclients/{clientId}/secret | Get OAuth client secret key
[**getOAuthClients**](OAuthClientsApi.md#getOAuthClients) | **GET** /api/v1.0/oauthclients | Get all OAuth client
[**getOauthAccessToken**](OAuthClientsApi.md#getOauthAccessToken) | **GET** /api/v1.0/oauthclients/{oAuthClientId}/accesstoken | Get OAuth access token for client
[**getRedirectUris**](OAuthClientsApi.md#getRedirectUris) | **GET** /api/v1.0/oauthclients/{oAuthClientId}/redirecturis | Get OAuth client redirect uris
[**removeRedirectUri**](OAuthClientsApi.md#removeRedirectUri) | **DELETE** /api/v1.0/oauthclients/{oAuthClientId}/redirecturis/{uriId} | Delete OAuth client redirect uri


<a name="addRedirectUri"></a>
# **addRedirectUri**
> RestApiResultOauthClientRedirectUri addRedirectUri(oAuthClientId, uri)

Create OAuth client redirect uri

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClientId = "oAuthClientId_example"; // String | OAuth client identifier

var uri = "uri_example"; // String | Redirect uri


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRedirectUri(oAuthClientId, uri, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClientId** | **String**| OAuth client identifier | 
 **uri** | **String**| Redirect uri | 

### Return type

[**RestApiResultOauthClientRedirectUri**](RestApiResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createOAuthClient"></a>
# **createOAuthClient**
> createOAuthClient(oAuthClient)

Create OAuth client

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClient = new Flipdish.OAuthClient(); // OAuthClient | OAuth client


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createOAuthClient(oAuthClient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClient** | [**OAuthClient**](OAuthClient.md)| OAuth client | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteOAuthClient"></a>
# **deleteOAuthClient**
> deleteOAuthClient(oAuthClientId)

Delete OAuth client

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClientId = "oAuthClientId_example"; // String | OAuth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOAuthClient(oAuthClientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClientId** | **String**| OAuth client identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthClientByClientId"></a>
# **getOAuthClientByClientId**
> RestApiResultOAuthClient getOAuthClientByClientId(clientId)

Get OAuth client by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var clientId = "clientId_example"; // String | OAuth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthClientByClientId(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| OAuth client identifier | 

### Return type

[**RestApiResultOAuthClient**](RestApiResultOAuthClient.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthClientSecret"></a>
# **getOAuthClientSecret**
> RestApiStringResult getOAuthClientSecret(clientId)

Get OAuth client secret key

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var clientId = "clientId_example"; // String | OAuth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthClientSecret(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| OAuth client identifier | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOAuthClients"></a>
# **getOAuthClients**
> RestApiArrayResultOAuthClient getOAuthClients()

Get all OAuth client

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOAuthClients(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiArrayResultOAuthClient**](RestApiArrayResultOAuthClient.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOauthAccessToken"></a>
# **getOauthAccessToken**
> RestApiStringResult getOauthAccessToken(oAuthClientId)

Get OAuth access token for client

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClientId = "oAuthClientId_example"; // String | OAuth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOauthAccessToken(oAuthClientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClientId** | **String**| OAuth client identifier | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getRedirectUris"></a>
# **getRedirectUris**
> RestApiArrayResultOauthClientRedirectUri getRedirectUris(oAuthClientId)

Get OAuth client redirect uris

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClientId = "oAuthClientId_example"; // String | OAuth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRedirectUris(oAuthClientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClientId** | **String**| OAuth client identifier | 

### Return type

[**RestApiArrayResultOauthClientRedirectUri**](RestApiArrayResultOauthClientRedirectUri.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeRedirectUri"></a>
# **removeRedirectUri**
> removeRedirectUri(oAuthClientId, uriId)

Delete OAuth client redirect uri

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OAuthClientsApi();

var oAuthClientId = "oAuthClientId_example"; // String | OAuth client identifier

var uriId = 56; // Number | Redirect uri identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeRedirectUri(oAuthClientId, uriId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthClientId** | **String**| OAuth client identifier | 
 **uriId** | **Number**| Redirect uri identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

