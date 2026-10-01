# Flipdish.ProcessingFeeConfigsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessingFeeConfigsByStoreIds**](ProcessingFeeConfigsApi.md#getProcessingFeeConfigsByStoreIds) | **GET** /api/v1.0/processingfeeconfigs | 



## getProcessingFeeConfigsByStoreIds

> RestApiArrayResultProcessingFeeConfig getProcessingFeeConfigsByStoreIds(storeIds)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ProcessingFeeConfigsApi();
let storeIds = [null]; // [Number] | 
apiInstance.getProcessingFeeConfigsByStoreIds(storeIds, (error, data, response) => {
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
 **storeIds** | [**[Number]**](Number.md)|  | 

### Return type

[**RestApiArrayResultProcessingFeeConfig**](RestApiArrayResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

