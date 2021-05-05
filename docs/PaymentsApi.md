# FlipdishOpenApiV10.PaymentsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderPaymentInformation**](PaymentsApi.md#getOrderPaymentInformation) | **GET** /api/v1.0/payments/payment/{orderId}/refundable | Returns payment refund information related to the order with the order id


<a name="getOrderPaymentInformation"></a>
# **getOrderPaymentInformation**
> RestApiResultOrderPaymentInformation getOrderPaymentInformation(orderId)

Returns payment refund information related to the order with the order id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PaymentsApi();

var orderId = 56; // Number | Order identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderPaymentInformation(orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Order identifier | 

### Return type

[**RestApiResultOrderPaymentInformation**](RestApiResultOrderPaymentInformation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

