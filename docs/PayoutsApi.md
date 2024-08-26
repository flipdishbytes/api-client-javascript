# Flipdish.PayoutsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayout**](PayoutsApi.md#getPayout) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId} | 
[**getPayoutChargebacks**](PayoutsApi.md#getPayoutChargebacks) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/chargebacks | 
[**getPayoutOrders**](PayoutsApi.md#getPayoutOrders) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/orders | 
[**getPayoutOtherCharges**](PayoutsApi.md#getPayoutOtherCharges) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/othercharges | 
[**getPayoutRefunds**](PayoutsApi.md#getPayoutRefunds) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/refunds | 
[**getPayoutSummaries**](PayoutsApi.md#getPayoutSummaries) | **GET** /api/v1.0/{appId}/payouts/summaries | 
[**getPayouts**](PayoutsApi.md#getPayouts) | **GET** /api/v1.0/{appId}/payouts | 



## getPayout

> PayoutDetail getPayout(appId, bankAccountId, payoutId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
apiInstance.getPayout(appId, bankAccountId, payoutId, (error, data, response) => {
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

### Return type

[**PayoutDetail**](PayoutDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, PayoutId, BankAccountId, AccountName, PayoutStatus, CreatedDate, PeriodStartTime, PeriodEndTime, DestinationBank, DestinationAccount, PayoutType, Currency, PayoutStores, Amount, CutoffDate


## getPayoutChargebacks

> RestApiPaginationResultPayoutChargeback getPayoutChargebacks(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [null] // [Number] | 
};
apiInstance.getPayoutChargebacks(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiPaginationResultPayoutChargeback**](RestApiPaginationResultPayoutChargeback.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayoutOrders

> RestApiPaginationResultPayoutOrder getPayoutOrders(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [null] // [Number] | 
};
apiInstance.getPayoutOrders(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiPaginationResultPayoutOrder**](RestApiPaginationResultPayoutOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayoutOtherCharges

> RestApiPaginationResultPayoutOtherCharge getPayoutOtherCharges(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [null] // [Number] | 
};
apiInstance.getPayoutOtherCharges(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiPaginationResultPayoutOtherCharge**](RestApiPaginationResultPayoutOtherCharge.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayoutRefunds

> RestApiPaginationResultPayoutRefund getPayoutRefunds(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [null] // [Number] | 
};
apiInstance.getPayoutRefunds(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiPaginationResultPayoutRefund**](RestApiPaginationResultPayoutRefund.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayoutSummaries

> RestApiArrayResultPayoutSummary getPayoutSummaries(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let opts = {
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'payoutRequestIds_bankAccountIds': [null], // [Number] | List of bank account ids to search for
  'payoutRequestIds_states': ["null"] // [String] | List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
};
apiInstance.getPayoutSummaries(appId, opts, (error, data, response) => {
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

[**RestApiArrayResultPayoutSummary**](RestApiArrayResultPayoutSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayouts

> RestApiPaginationResultPayout getPayouts(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutsApi();
let appId = "appId_example"; // String | 
let opts = {
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'payoutRequestIds_bankAccountIds': [null], // [Number] | List of bank account ids to search for
  'payoutRequestIds_states': ["null"] // [String] | List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
};
apiInstance.getPayouts(appId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **payoutRequestIds_bankAccountIds** | [**[Number]**](Number.md)| List of bank account ids to search for | [optional] 
 **payoutRequestIds_states** | [**[String]**](String.md)| List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for | [optional] 

### Return type

[**RestApiPaginationResultPayout**](RestApiPaginationResultPayout.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

