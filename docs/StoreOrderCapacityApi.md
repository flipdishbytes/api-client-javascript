# FlipdishOpenApiV10.StoreOrderCapacityApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStoreOrderCapacity**](StoreOrderCapacityApi.md#getStoreOrderCapacity) | **GET** /api/v1.0/{appId}/storeordercapacity/{storeId}/{deliveryType} | Get store's order capacity configuration
[**updateStoreOrderCapacityConfig**](StoreOrderCapacityApi.md#updateStoreOrderCapacityConfig) | **POST** /api/v1.0/{appId}/storeordercapacity/{storeId} | Create or update a store's order capacity configuration


<a name="getStoreOrderCapacity"></a>
# **getStoreOrderCapacity**
> RestApiResultStoreOrderCapacityConfig getStoreOrderCapacity(appId, storeId, deliveryType)

Get store's order capacity configuration

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoreOrderCapacityApi();

var appId = "appId_example"; // String | App Name Id

var storeId = 56; // Number | Store Id

var deliveryType = "deliveryType_example"; // String | Delivery / Pickup


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreOrderCapacity(appId, storeId, deliveryType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **storeId** | **Number**| Store Id | 
 **deliveryType** | **String**| Delivery / Pickup | 

### Return type

[**RestApiResultStoreOrderCapacityConfig**](RestApiResultStoreOrderCapacityConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateStoreOrderCapacityConfig"></a>
# **updateStoreOrderCapacityConfig**
> updateStoreOrderCapacityConfig(storeId, deliveryType, newOrderCapacityConfig, appId)

Create or update a store's order capacity configuration

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoreOrderCapacityApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | Delivery / Pickup

var newOrderCapacityConfig = new FlipdishOpenApiV10.StoreOrderCapacityConfigEditModel(); // StoreOrderCapacityConfigEditModel | new order capacity configuration

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStoreOrderCapacityConfig(storeId, deliveryType, newOrderCapacityConfig, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| Delivery / Pickup | 
 **newOrderCapacityConfig** | [**StoreOrderCapacityConfigEditModel**](StoreOrderCapacityConfigEditModel.md)| new order capacity configuration | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

