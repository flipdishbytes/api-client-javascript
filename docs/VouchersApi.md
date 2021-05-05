# FlipdishOpenApiV10.VouchersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucher**](VouchersApi.md#createVoucher) | **POST** /api/v1.0/vouchers/{appId} | [PRIVATE API] Create voucher
[**getVoucherById**](VouchersApi.md#getVoucherById) | **GET** /api/v1.0/vouchers/{voucherId} | [PRIVATE API] Get voucher by identifier
[**getVoucherStatsById**](VouchersApi.md#getVoucherStatsById) | **GET** /api/v1.0/vouchers/stats/{voucherId} | [PRIVATE API] Get voucher stats by identifier
[**getVouchers**](VouchersApi.md#getVouchers) | **GET** /api/v1.0/{appId}/vouchers/summaries | [PRIVATE API] Get vouchers summaries for App Id
[**updateVoucher**](VouchersApi.md#updateVoucher) | **POST** /api/v1.0/vouchers/{voucherId} | [PRIVATE API] Updates voucher


<a name="createVoucher"></a>
# **createVoucher**
> RestApiResultVoucherWithStats createVoucher(appId, voucher)

[PRIVATE API] Create voucher

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.VouchersApi();

var appId = "appId_example"; // String | App Name Id

var voucher = new FlipdishOpenApiV10.CreateVoucher(); // CreateVoucher | Voucher Details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVoucher(appId, voucher, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **voucher** | [**CreateVoucher**](CreateVoucher.md)| Voucher Details | 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVoucherById"></a>
# **getVoucherById**
> RestApiResultVoucherWithStats getVoucherById(voucherId)

[PRIVATE API] Get voucher by identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.VouchersApi();

var voucherId = 56; // Number | Id of the voucher


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoucherById(voucherId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**| Id of the voucher | 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVoucherStatsById"></a>
# **getVoucherStatsById**
> RestApiArrayResultVoucherDataPoint getVoucherStatsById(voucherId, aggregateDataBy, opts)

[PRIVATE API] Get voucher stats by identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.VouchersApi();

var voucherId = 56; // Number | Id of the voucher

var aggregateDataBy = "aggregateDataBy_example"; // String | Aggregate data by day \\ week \\ month

var opts = { 
  'dataPointLimit': 56 // Number | Amount of data points per request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoucherStatsById(voucherId, aggregateDataBy, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**| Id of the voucher | 
 **aggregateDataBy** | **String**| Aggregate data by day \\ week \\ month | 
 **dataPointLimit** | **Number**| Amount of data points per request | [optional] 

### Return type

[**RestApiArrayResultVoucherDataPoint**](RestApiArrayResultVoucherDataPoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVouchers"></a>
# **getVouchers**
> RestApiPaginationResultVoucherSummary getVouchers(appId, opts)

[PRIVATE API] Get vouchers summaries for App Id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.VouchersApi();

var appId = "appId_example"; // String | Application Id

var opts = { 
  'pageIndex': 56, // Number | Page Number
  'pageSize': 56, // Number | Page Size
  'searchCodes': ["searchCodes_example"], // [String] | Search by Voucher Code\\s
  'statusSearch': ["statusSearch_example"], // [String] | Search by Status
  'typeSearch': ["typeSearch_example"], // [String] | Search by Type
  'subTypeSearch': ["subTypeSearch_example"], // [String] | Search by Sub Type
  'storeIds': [3.4] // [Number] | Search by Store Ids
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVouchers(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application Id | 
 **pageIndex** | **Number**| Page Number | [optional] 
 **pageSize** | **Number**| Page Size | [optional] 
 **searchCodes** | [**[String]**](String.md)| Search by Voucher Code\\s | [optional] 
 **statusSearch** | [**[String]**](String.md)| Search by Status | [optional] 
 **typeSearch** | [**[String]**](String.md)| Search by Type | [optional] 
 **subTypeSearch** | [**[String]**](String.md)| Search by Sub Type | [optional] 
 **storeIds** | [**[Number]**](Number.md)| Search by Store Ids | [optional] 

### Return type

[**RestApiPaginationResultVoucherSummary**](RestApiPaginationResultVoucherSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateVoucher"></a>
# **updateVoucher**
> RestApiResultVoucherWithStats updateVoucher(voucherId, voucher, opts)

[PRIVATE API] Updates voucher

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.VouchersApi();

var voucherId = 56; // Number | Id of the voucher

var voucher = new FlipdishOpenApiV10.VoucherBase(); // VoucherBase | Updated details for the voucher

var opts = { 
  'storeId': [3.4], // [Number] | 
  'percentValue': 56, // Number | Percent voucher value (can have 1 of 3)
  'lumpValue': 1.2, // Number | Lump voucher value (can have 1 of 3)
  'freeItemId': 56 // Number | Free Item Id (can have 1 of 3)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVoucher(voucherId, voucher, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**| Id of the voucher | 
 **voucher** | [**VoucherBase**](VoucherBase.md)| Updated details for the voucher | 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 
 **percentValue** | **Number**| Percent voucher value (can have 1 of 3) | [optional] 
 **lumpValue** | **Number**| Lump voucher value (can have 1 of 3) | [optional] 
 **freeItemId** | **Number**| Free Item Id (can have 1 of 3) | [optional] 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

