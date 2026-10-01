# Flipdish.PayoutsExportApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportPayoutChargebacks**](PayoutsExportApi.md#exportPayoutChargebacks) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/chargebacks/export | 
[**exportPayoutOrders**](PayoutsExportApi.md#exportPayoutOrders) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/orders/export | 
[**exportPayoutOtherCharges**](PayoutsExportApi.md#exportPayoutOtherCharges) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/othercharges/export | 
[**exportPayoutRefunds**](PayoutsExportApi.md#exportPayoutRefunds) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/refunds/export | 
[**exportPayoutStores**](PayoutsExportApi.md#exportPayoutStores) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/export | 
[**exportPayouts**](PayoutsExportApi.md#exportPayouts) | **GET** /api/v1.0/{appId}/payouts/export | 



## exportPayoutChargebacks

> String exportPayoutChargebacks(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.exportPayoutChargebacks(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## exportPayoutOrders

> String exportPayoutOrders(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.exportPayoutOrders(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## exportPayoutOtherCharges

> String exportPayoutOtherCharges(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.exportPayoutOtherCharges(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## exportPayoutRefunds

> String exportPayoutRefunds(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.exportPayoutRefunds(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## exportPayoutStores

> String exportPayoutStores(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.exportPayoutStores(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## exportPayouts

> String exportPayouts(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsExportApi();
let appId = "appId_example"; // String | 
let opts = {
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'payoutRequestIds_bankAccountIds': [null], // [Number] | List of bank account ids to search for
  'payoutRequestIds_states': ["null"] // [String] | List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
};
apiInstance.exportPayouts(appId, opts, (error, data, response) => {
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
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **payoutRequestIds_bankAccountIds** | [**[Number]**](Number.md)| List of bank account ids to search for | [optional] 
 **payoutRequestIds_states** | [**[String]**](String.md)| List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for | [optional] 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

