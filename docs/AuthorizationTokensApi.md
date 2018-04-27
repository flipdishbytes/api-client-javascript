# Flipdish.AuthorizationTokensApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthorizationTokens**](AuthorizationTokensApi.md#getAuthorizationTokens) | **GET** /api/v1.0/authorizationtokens/{clientId} | Get authorization tokens
[**revokeToken**](AuthorizationTokensApi.md#revokeToken) | **DELETE** /api/v1.0/authorizationtokens/{key} | Revoke token


<a name="getAuthorizationTokens"></a>
# **getAuthorizationTokens**
> RestApiPaginationResultOAuthTokenModel getAuthorizationTokens(clientId, opts)

Get authorization tokens



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AuthorizationTokensApi();

var clientId = "clientId_example"; // String | Client identifier

var opts = { 
  'page': 56, // Number | Requested page number
  'limit': 56 // Number | Requested page limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthorizationTokens(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client identifier | 
 **page** | **Number**| Requested page number | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultOAuthTokenModel**](RestApiPaginationResultOAuthTokenModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="revokeToken"></a>
# **revokeToken**
> revokeToken(key)

Revoke token

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AuthorizationTokensApi();

var key = "key_example"; // String | Token identifier key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.revokeToken(key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| Token identifier key | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

