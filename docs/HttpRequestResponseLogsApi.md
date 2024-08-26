# Flipdish.HttpRequestResponseLogsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogs**](HttpRequestResponseLogsApi.md#getLogs) | **GET** /api/v1.0/{appId}/interactions/logs | 



## getLogs

> RestApiPaginationResultHttpRequestAndResponseLog getLogs(start, end, appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HttpRequestResponseLogsApi();
let start = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let end = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let appId = "appId_example"; // String | 
let opts = {
  'filterByUserId': 56, // Number | 
  'guid': "guid_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getLogs(start, end, appId, opts, (error, data, response) => {
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
 **start** | **Date**|  | 
 **end** | **Date**|  | 
 **appId** | **String**|  | 
 **filterByUserId** | **Number**|  | [optional] 
 **guid** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultHttpRequestAndResponseLog**](RestApiPaginationResultHttpRequestAndResponseLog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message

