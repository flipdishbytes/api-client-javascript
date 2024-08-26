# Flipdish.GoogleFoodOrderPrototypeApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](GoogleFoodOrderPrototypeApi.md#createOrder) | **POST** /api/v1.0/{appId}/googleorder | 
[**submitOrder**](GoogleFoodOrderPrototypeApi.md#submitOrder) | **POST** /api/v1.0/{appId}/googleorder/{orderId}/submit | 



## createOrder

> RestApiResultSubmitOrderResponseDm createOrder(appId, orderRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.GoogleFoodOrderPrototypeApi();
let appId = "appId_example"; // String | 
let orderRequest = new Flipdish.CreateOrderRequest(); // CreateOrderRequest | 
apiInstance.createOrder(appId, orderRequest, (error, data, response) => {
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
 **orderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | 

### Return type

[**RestApiResultSubmitOrderResponseDm**](RestApiResultSubmitOrderResponseDm.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## submitOrder

> RestApiResultSubmitOrderResponseDm submitOrder(appId, orderId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.GoogleFoodOrderPrototypeApi();
let appId = "appId_example"; // String | 
let orderId = 56; // Number | 
let request = new Flipdish.SubmitOrderRequest(); // SubmitOrderRequest | 
apiInstance.submitOrder(appId, orderId, request, (error, data, response) => {
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
 **orderId** | **Number**|  | 
 **request** | [**SubmitOrderRequest**](SubmitOrderRequest.md)|  | 

### Return type

[**RestApiResultSubmitOrderResponseDm**](RestApiResultSubmitOrderResponseDm.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

