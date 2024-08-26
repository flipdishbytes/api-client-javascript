# Flipdish.OrderBatchesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOrderBatches**](OrderBatchesApi.md#getAllOrderBatches) | **GET** /api/v1.0/{appId}/order-batches | 
[**getOrderBatch**](OrderBatchesApi.md#getOrderBatch) | **GET** /api/v1.0/{appId}/order-batches/{orderBatchId} | 



## getAllOrderBatches

> RestApiArrayResultOrderBatch getAllOrderBatches(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrderBatchesApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeIds': [null], // [Number] | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.getAllOrderBatches(appId, opts, (error, data, response) => {
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
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 

### Return type

[**RestApiArrayResultOrderBatch**](RestApiArrayResultOrderBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getOrderBatch

> RestApiResultOrderBatch getOrderBatch(appId, orderBatchId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrderBatchesApi();
let appId = "appId_example"; // String | 
let orderBatchId = 56; // Number | 
apiInstance.getOrderBatch(appId, orderBatchId, (error, data, response) => {
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
 **orderBatchId** | **Number**|  | 

### Return type

[**RestApiResultOrderBatch**](RestApiResultOrderBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

