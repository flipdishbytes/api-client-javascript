# Flipdish.FilesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadFile**](FilesApi.md#downloadFile) | **GET** /api/v1.0/{appId}/files/download/{fileId} | 



## downloadFile

> RestApiResultFileDownloadResult downloadFile(appId, fileId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FilesApi();
let appId = "appId_example"; // String | 
let fileId = "fileId_example"; // String | 
apiInstance.downloadFile(appId, fileId, (error, data, response) => {
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
 **fileId** | **String**|  | 

### Return type

[**RestApiResultFileDownloadResult**](RestApiResultFileDownloadResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

