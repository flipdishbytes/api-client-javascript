# Flipdish.ProcessingFeeConfigsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessingFeeConfigsByStoreIds**](ProcessingFeeConfigsApi.md#getProcessingFeeConfigsByStoreIds) | **GET** /api/v1.0/processingfeeconfigs | Get processing fee configs by store identifiers


<a name="getProcessingFeeConfigsByStoreIds"></a>
# **getProcessingFeeConfigsByStoreIds**
> RestApiArrayResultProcessingFeeConfig getProcessingFeeConfigsByStoreIds(storeIds)

Get processing fee configs by store identifiers

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ProcessingFeeConfigsApi();

var storeIds = [3.4]; // [Number] | Store identifiers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessingFeeConfigsByStoreIds(storeIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeIds** | [**[Number]**](Number.md)| Store identifiers | 

### Return type

[**RestApiArrayResultProcessingFeeConfig**](RestApiArrayResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

