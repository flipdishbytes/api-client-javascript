# Flipdish.UsersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRoles**](UsersApi.md#getRoles) | **GET** /api/v1.0/users/roles | Get role names


<a name="getRoles"></a>
# **getRoles**
> RestApiStringArrayResult getRoles()

Get role names

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoles(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

