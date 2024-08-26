# Flipdish.PaymentIntentsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentIntent**](PaymentIntentsApi.md#getPaymentIntent) | **GET** /api/v1.0/payment_intents/{paymentIntentId} | 



## getPaymentIntent

> RestApiResultPaymentIntent getPaymentIntent(paymentIntentId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PaymentIntentsApi();
let paymentIntentId = "paymentIntentId_example"; // String | 
apiInstance.getPaymentIntent(paymentIntentId, (error, data, response) => {
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
 **paymentIntentId** | **String**|  | 

### Return type

[**RestApiResultPaymentIntent**](RestApiResultPaymentIntent.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

