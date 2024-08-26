# Flipdish.PaymentsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderPaymentInformation**](PaymentsApi.md#getOrderPaymentInformation) | **GET** /api/v1.0/payments/payment/{orderId}/refundable | 



## getOrderPaymentInformation

> RestApiResultOrderPaymentInformation getOrderPaymentInformation(orderId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PaymentsApi();
let orderId = 56; // Number | 
apiInstance.getOrderPaymentInformation(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**RestApiResultOrderPaymentInformation**](RestApiResultOrderPaymentInformation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message

