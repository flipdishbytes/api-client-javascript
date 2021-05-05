# FlipdishOpenApiV10.HttpRequestResponseLogsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogs**](HttpRequestResponseLogsApi.md#getLogs) | **GET** /api/v1.0/{appId}/interactions/logs | Get API interaction logs


<a name="getLogs"></a>
# **getLogs**
> RestApiPaginationResultHttpRequestAndResponseLog getLogs(start, end, appId, opts)

Get API interaction logs

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.HttpRequestResponseLogsApi();

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date time

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date time

var appId = "appId_example"; // String | 

var opts = { 
  'filterByUserId': 56, // Number | User id (optional)
  'guid': "guid_example", // String | Id of the log
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
apiInstance.getLogs(start, end, appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Date**| Start date time | 
 **end** | **Date**| End date time | 
 **appId** | **String**|  | 
 **filterByUserId** | **Number**| User id (optional) | [optional] 
 **guid** | **String**| Id of the log | [optional] 
 **page** | **Number**| Page number | [optional] 
 **limit** | **Number**| Page size | [optional] 

### Return type

[**RestApiPaginationResultHttpRequestAndResponseLog**](RestApiPaginationResultHttpRequestAndResponseLog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

