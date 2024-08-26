# Flipdish.SubscriptionsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubscriptionById**](SubscriptionsApi.md#getSubscriptionById) | **GET** /api/v1.0/{appId}/subscriptions/{subscriptionId} | 
[**getSubscriptionsForApp**](SubscriptionsApi.md#getSubscriptionsForApp) | **GET** /api/v1.0/{appId}/subscriptions | 
[**hasCustomerGotPaymentMethodOnFile**](SubscriptionsApi.md#hasCustomerGotPaymentMethodOnFile) | **GET** /api/v1.0/{appId}/subscriptions/hasPaymentMethod | 



## getSubscriptionById

> RestApiResultSubscription getSubscriptionById(appId, subscriptionId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SubscriptionsApi();
let appId = "appId_example"; // String | 
let subscriptionId = "subscriptionId_example"; // String | 
apiInstance.getSubscriptionById(appId, subscriptionId, (error, data, response) => {
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
 **subscriptionId** | **String**|  | 

### Return type

[**RestApiResultSubscription**](RestApiResultSubscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getSubscriptionsForApp

> RestApiArrayResultSubscriptionSummary getSubscriptionsForApp(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SubscriptionsApi();
let appId = "appId_example"; // String | 
let opts = {
  'excludeNotOwnedSubscriptions': true, // Boolean | 
  'storeId': [null], // [Number] | 
  'excludeCancelledSubscriptions': true // Boolean | 
};
apiInstance.getSubscriptionsForApp(appId, opts, (error, data, response) => {
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
 **excludeNotOwnedSubscriptions** | **Boolean**|  | [optional] 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 
 **excludeCancelledSubscriptions** | **Boolean**|  | [optional] 

### Return type

[**RestApiArrayResultSubscriptionSummary**](RestApiArrayResultSubscriptionSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## hasCustomerGotPaymentMethodOnFile

> RestApiResultHasPaymentMethodResponse hasCustomerGotPaymentMethodOnFile(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SubscriptionsApi();
let appId = "appId_example"; // String | 
let opts = {
  'email': "email_example" // String | 
};
apiInstance.hasCustomerGotPaymentMethodOnFile(appId, opts, (error, data, response) => {
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
 **email** | **String**|  | [optional] 

### Return type

[**RestApiResultHasPaymentMethodResponse**](RestApiResultHasPaymentMethodResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

