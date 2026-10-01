# Flipdish.StoreOrderCapacityApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStoreOrderCapacity**](StoreOrderCapacityApi.md#getStoreOrderCapacity) | **GET** /api/v1.0/{appId}/storeordercapacity/{storeId}/{deliveryType} | 
[**updateStoreOrderCapacityConfig**](StoreOrderCapacityApi.md#updateStoreOrderCapacityConfig) | **POST** /api/v1.0/{appId}/storeordercapacity/{storeId} | 



## getStoreOrderCapacity

> RestApiResultStoreOrderCapacityConfig getStoreOrderCapacity(appId, storeId, deliveryType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreOrderCapacityApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
apiInstance.getStoreOrderCapacity(appId, storeId, deliveryType, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 

### Return type

[**RestApiResultStoreOrderCapacityConfig**](RestApiResultStoreOrderCapacityConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateStoreOrderCapacityConfig

> updateStoreOrderCapacityConfig(storeId, deliveryType, appId, newOrderCapacityConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreOrderCapacityApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let appId = "appId_example"; // String | 
let newOrderCapacityConfig = new Flipdish.StoreOrderCapacityConfigEditModel(); // StoreOrderCapacityConfigEditModel | 
apiInstance.updateStoreOrderCapacityConfig(storeId, deliveryType, appId, newOrderCapacityConfig, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **appId** | **String**|  | 
 **newOrderCapacityConfig** | [**StoreOrderCapacityConfigEditModel**](StoreOrderCapacityConfigEditModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

