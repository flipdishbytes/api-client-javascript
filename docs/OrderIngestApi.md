# Flipdish.OrderIngestApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderIngestSubmitNewOrder**](OrderIngestApi.md#orderIngestSubmitNewOrder) | **POST** /api/v1.0/{appNameId}/order-ingest/submit | 



## orderIngestSubmitNewOrder

> RestApiResultOrderIngestSubmitOrderResponse orderIngestSubmitNewOrder(appNameId, order)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrderIngestApi();
let appNameId = "appNameId_example"; // String | 
let order = new Flipdish.OrderIngestSubmitOrderRequest(); // OrderIngestSubmitOrderRequest | 
apiInstance.orderIngestSubmitNewOrder(appNameId, order, (error, data, response) => {
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
 **appNameId** | **String**|  | 
 **order** | [**OrderIngestSubmitOrderRequest**](OrderIngestSubmitOrderRequest.md)|  | 

### Return type

[**RestApiResultOrderIngestSubmitOrderResponse**](RestApiResultOrderIngestSubmitOrderResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

