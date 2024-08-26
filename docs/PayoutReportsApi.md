# Flipdish.PayoutReportsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayoutReport3Details**](PayoutReportsApi.md#getPayoutReport3Details) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/details | 
[**getPayoutReport3Overview**](PayoutReportsApi.md#getPayoutReport3Overview) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/overview | 
[**getPayoutReport3RefundedOrders**](PayoutReportsApi.md#getPayoutReport3RefundedOrders) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/refundedOrders | 
[**payoutReport3ExportPayoutChargebacks**](PayoutReportsApi.md#payoutReport3ExportPayoutChargebacks) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/export/chargebacks | 
[**payoutReport3ExportPayoutLedgerEntries**](PayoutReportsApi.md#payoutReport3ExportPayoutLedgerEntries) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/export/ledgerentries | 
[**payoutReport3ExportPayoutOrders**](PayoutReportsApi.md#payoutReport3ExportPayoutOrders) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/export/orders | 
[**payoutReport3ExportPayoutPosSales**](PayoutReportsApi.md#payoutReport3ExportPayoutPosSales) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/export/possales | 
[**payoutReport3ExportPayoutRefundedOrders**](PayoutReportsApi.md#payoutReport3ExportPayoutRefundedOrders) | **GET** /api/v1.0/{appId}/reporting/reports/payouts3/{bankAccountId}/{payoutId}/export/refundedOrders | 



## getPayoutReport3Details

> RestApiResultPayoutReport3Details getPayoutReport3Details(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null] // [Number] | 
};
apiInstance.getPayoutReport3Details(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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

[**RestApiResultPayoutReport3Details**](RestApiResultPayoutReport3Details.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getPayoutReport3Overview

> RestApiResultPayoutReport3Overview getPayoutReport3Overview(appId, bankAccountId, payoutId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
apiInstance.getPayoutReport3Overview(appId, bankAccountId, payoutId, (error, data, response) => {
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

[**RestApiResultPayoutReport3Overview**](RestApiResultPayoutReport3Overview.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getPayoutReport3RefundedOrders

> RestApiPaginationResultPayoutReport3RefundedOrder getPayoutReport3RefundedOrders(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'storeIds': [null], // [Number] | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getPayoutReport3RefundedOrders(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultPayoutReport3RefundedOrder**](RestApiPaginationResultPayoutReport3RefundedOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## payoutReport3ExportPayoutChargebacks

> RestApiResultFileCreationResult payoutReport3ExportPayoutChargebacks(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'stores': [null] // [Number] | 
};
apiInstance.payoutReport3ExportPayoutChargebacks(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **stores** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultFileCreationResult**](RestApiResultFileCreationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## payoutReport3ExportPayoutLedgerEntries

> RestApiResultFileCreationResult payoutReport3ExportPayoutLedgerEntries(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'stores': [null] // [Number] | 
};
apiInstance.payoutReport3ExportPayoutLedgerEntries(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **stores** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultFileCreationResult**](RestApiResultFileCreationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## payoutReport3ExportPayoutOrders

> RestApiResultFileCreationResult payoutReport3ExportPayoutOrders(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'stores': [null] // [Number] | 
};
apiInstance.payoutReport3ExportPayoutOrders(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **stores** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultFileCreationResult**](RestApiResultFileCreationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## payoutReport3ExportPayoutPosSales

> RestApiResultFileCreationResult payoutReport3ExportPayoutPosSales(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'stores': [null] // [Number] | 
};
apiInstance.payoutReport3ExportPayoutPosSales(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **stores** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultFileCreationResult**](RestApiResultFileCreationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## payoutReport3ExportPayoutRefundedOrders

> RestApiResultFileCreationResult payoutReport3ExportPayoutRefundedOrders(appId, bankAccountId, payoutId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PayoutReportsApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let payoutId = 56; // Number | 
let opts = {
  'stores': [null] // [Number] | 
};
apiInstance.payoutReport3ExportPayoutRefundedOrders(appId, bankAccountId, payoutId, opts, (error, data, response) => {
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
 **stores** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultFileCreationResult**](RestApiResultFileCreationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

