# Flipdish.HttpRequestResponseLogsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHttpLogsByUserIdAsync**](HttpRequestResponseLogsApi.md#getHttpLogsByUserIdAsync) | **GET** /api/v1.0/interactions/logs | Get API interaction logs


<a name="getHttpLogsByUserIdAsync"></a>
# **getHttpLogsByUserIdAsync**
> RestApiPaginationResultHttpRequestAndResponseLog getHttpLogsByUserIdAsync(start, end, opts)

Get API interaction logs

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.HttpRequestResponseLogsApi();

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time

var opts = { 
  'filterByUserId': 56, // Number | User id (optional)
  'page': 56, // Number | Page number
  'limit': 56 // Number | Page size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHttpLogsByUserIdAsync(start, end, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Date**| Start date time | 
 **end** | **Date**| End date time | 
 **filterByUserId** | **Number**| User id (optional) | [optional] 
 **page** | **Number**| Page number | [optional] 
 **limit** | **Number**| Page size | [optional] 

### Return type

[**RestApiPaginationResultHttpRequestAndResponseLog**](RestApiPaginationResultHttpRequestAndResponseLog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

