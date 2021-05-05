# FlipdishOpenApiV10.PayoutsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportPayoutChargebacks**](PayoutsApi.md#exportPayoutChargebacks) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/chargebacks/export | Export a list of payout's chargebacks as CSV
[**exportPayoutOrders**](PayoutsApi.md#exportPayoutOrders) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/orders/export | Export a list of payout's orders as CSV
[**exportPayoutOtherCharges**](PayoutsApi.md#exportPayoutOtherCharges) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/othercharges/export | Export a list of payout's other charges as CSV
[**exportPayoutRefunds**](PayoutsApi.md#exportPayoutRefunds) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/refunds/export | Export a list of payout's refunds as CSV
[**exportPayoutStores**](PayoutsApi.md#exportPayoutStores) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/export | Export payout's details as CSV
[**getPayout**](PayoutsApi.md#getPayout) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId} | Get Payout details broken down by Store
[**getPayoutChargebacks**](PayoutsApi.md#getPayoutChargebacks) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/chargebacks | Get list of payout's chargebacks
[**getPayoutOrders**](PayoutsApi.md#getPayoutOrders) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/orders | Get list of payout's orders
[**getPayoutOtherCharges**](PayoutsApi.md#getPayoutOtherCharges) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/othercharges | Get list of payout's other charges
[**getPayoutRefunds**](PayoutsApi.md#getPayoutRefunds) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/refunds | Get list of payout's refunds
[**getPayoutSummaries**](PayoutsApi.md#getPayoutSummaries) | **GET** /api/v1.0/{appId}/payouts/summaries | Get list of payout summaries
[**getPayouts**](PayoutsApi.md#getPayouts) | **GET** /api/v1.0/{appId}/payouts | Get list of payouts


<a name="exportPayoutChargebacks"></a>
# **exportPayoutChargebacks**
> 'String' exportPayoutChargebacks(appId, bankAccountId, payoutId, opts)

Export a list of payout's chargebacks as CSV

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportPayoutChargebacks(appId, bankAccountId, payoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**'String'**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="exportPayoutOrders"></a>
# **exportPayoutOrders**
> 'String' exportPayoutOrders(appId, bankAccountId, payoutId, opts)

Export a list of payout's orders as CSV

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportPayoutOrders(appId, bankAccountId, payoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**'String'**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="exportPayoutOtherCharges"></a>
# **exportPayoutOtherCharges**
> 'String' exportPayoutOtherCharges(appId, bankAccountId, payoutId, opts)

Export a list of payout's other charges as CSV

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportPayoutOtherCharges(appId, bankAccountId, payoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**'String'**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="exportPayoutRefunds"></a>
# **exportPayoutRefunds**
> 'String' exportPayoutRefunds(appId, bankAccountId, payoutId, opts)

Export a list of payout's refunds as CSV

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportPayoutRefunds(appId, bankAccountId, payoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**'String'**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="exportPayoutStores"></a>
# **exportPayoutStores**
> 'String' exportPayoutStores(appId, bankAccountId, payoutId, opts)

Export payout's details as CSV

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportPayoutStores(appId, bankAccountId, payoutId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **payoutId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 

### Return type

**'String'**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayout"></a>
# **getPayout**
> PayoutDetail getPayout(appId, bankAccountId, payoutId)

Get Payout details broken down by Store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayout(appId, bankAccountId, payoutId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayoutChargebacks"></a>
# **getPayoutChargebacks**
> RestApiPaginationResultPayoutChargeback getPayoutChargebacks(appId, bankAccountId, payoutId, opts)

Get list of payout's chargebacks

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayoutChargebacks(appId, bankAccountId, payoutId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayoutOrders"></a>
# **getPayoutOrders**
> RestApiPaginationResultPayoutOrder getPayoutOrders(appId, bankAccountId, payoutId, opts)

Get list of payout's orders

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayoutOrders(appId, bankAccountId, payoutId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayoutOtherCharges"></a>
# **getPayoutOtherCharges**
> RestApiPaginationResultPayoutOtherCharge getPayoutOtherCharges(appId, bankAccountId, payoutId, opts)

Get list of payout's other charges

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayoutOtherCharges(appId, bankAccountId, payoutId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayoutRefunds"></a>
# **getPayoutRefunds**
> RestApiPaginationResultPayoutRefund getPayoutRefunds(appId, bankAccountId, payoutId, opts)

Get list of payout's refunds

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var bankAccountId = 56; // Number | 

var payoutId = 56; // Number | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeIds': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayoutRefunds(appId, bankAccountId, payoutId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayoutSummaries"></a>
# **getPayoutSummaries**
> RestApiArrayResultPayoutSummary getPayoutSummaries(appId, opts)

Get list of payout summaries

BETA - this endpoint is under development, do not use it in your production system

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var opts = { 
  'bankAccountId': 56, // Number | 
  'payeeBankAccountDataId': 56, // Number | Deprecated
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'status': "status_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayoutSummaries(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | [optional] 
 **payeeBankAccountDataId** | **Number**| Deprecated | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**RestApiArrayResultPayoutSummary**](RestApiArrayResultPayoutSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPayouts"></a>
# **getPayouts**
> RestApiPaginationResultPayout getPayouts(appId, opts)

Get list of payouts

BETA - this endpoint is under development, do not use it in your production system

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PayoutsApi();

var appId = "appId_example"; // String | 

var opts = { 
  'bankAccountId': 56, // Number | 
  'payeeBankAccountDataId': 56, // Number | Deprecated
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'status': "status_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayouts(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | [optional] 
 **payeeBankAccountDataId** | **Number**| Deprecated | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **status** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultPayout**](RestApiPaginationResultPayout.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

