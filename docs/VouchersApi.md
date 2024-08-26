# Flipdish.VouchersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucher**](VouchersApi.md#createVoucher) | **POST** /api/v1.0/vouchers/{appId} | 
[**getVoucherById**](VouchersApi.md#getVoucherById) | **GET** /api/v1.0/vouchers/{voucherId} | 
[**getVoucherStatsById**](VouchersApi.md#getVoucherStatsById) | **GET** /api/v1.0/vouchers/stats/{voucherId} | 
[**getVoucherValidityPeriods**](VouchersApi.md#getVoucherValidityPeriods) | **GET** /api/v1.0/{appId}/vouchers/{voucherId}/validity-periods | 
[**getVouchers**](VouchersApi.md#getVouchers) | **GET** /api/v1.0/{appId}/vouchers/summaries | 
[**setVoucherValidityPeriodsSimplified**](VouchersApi.md#setVoucherValidityPeriodsSimplified) | **POST** /api/v1.0/{appId}/vouchers/{voucherId}/validity-periods-simplified | 
[**updateVoucher**](VouchersApi.md#updateVoucher) | **POST** /api/v1.0/vouchers/{voucherId} | 
[**updateVoucherUsage**](VouchersApi.md#updateVoucherUsage) | **POST** /api/v1.0/{appId}/vouchers/{voucherId}/usage | 



## createVoucher

> RestApiResultVoucherWithStats createVoucher(appId, voucher)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let appId = "appId_example"; // String | 
let voucher = new Flipdish.CreateVoucher(); // CreateVoucher | 
apiInstance.createVoucher(appId, voucher, (error, data, response) => {
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
 **voucher** | [**CreateVoucher**](CreateVoucher.md)|  | 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getVoucherById

> RestApiResultVoucherWithStats getVoucherById(voucherId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let voucherId = 56; // Number | 
apiInstance.getVoucherById(voucherId, (error, data, response) => {
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
 **voucherId** | **Number**|  | 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getVoucherStatsById

> RestApiArrayResultVoucherDataPoint getVoucherStatsById(voucherId, aggregateDataBy, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let voucherId = 56; // Number | 
let aggregateDataBy = "aggregateDataBy_example"; // String | 
let opts = {
  'dataPointLimit': 56 // Number | 
};
apiInstance.getVoucherStatsById(voucherId, aggregateDataBy, opts, (error, data, response) => {
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
 **voucherId** | **Number**|  | 
 **aggregateDataBy** | **String**|  | 
 **dataPointLimit** | **Number**|  | [optional] 

### Return type

[**RestApiArrayResultVoucherDataPoint**](RestApiArrayResultVoucherDataPoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getVoucherValidityPeriods

> getVoucherValidityPeriods(appId, voucherId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let appId = "appId_example"; // String | 
let voucherId = 56; // Number | 
apiInstance.getVoucherValidityPeriods(appId, voucherId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **voucherId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Data, application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getVouchers

> RestApiPaginationResultVoucherSummary getVouchers(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let appId = "appId_example"; // String | 
let opts = {
  'pageIndex': 56, // Number | 
  'pageSize': 56, // Number | 
  'searchCodes': ["null"], // [String] | 
  'statusSearch': ["null"], // [String] | 
  'typeSearch': ["null"], // [String] | 
  'subTypeSearch': ["null"], // [String] | 
  'storeIds': [null], // [Number] | 
  'channelRestrictions': ["null"] // [String] | 
};
apiInstance.getVouchers(appId, opts, (error, data, response) => {
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
 **pageIndex** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **searchCodes** | [**[String]**](String.md)|  | [optional] 
 **statusSearch** | [**[String]**](String.md)|  | [optional] 
 **typeSearch** | [**[String]**](String.md)|  | [optional] 
 **subTypeSearch** | [**[String]**](String.md)|  | [optional] 
 **storeIds** | [**[Number]**](Number.md)|  | [optional] 
 **channelRestrictions** | [**[String]**](String.md)|  | [optional] 

### Return type

[**RestApiPaginationResultVoucherSummary**](RestApiPaginationResultVoucherSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## setVoucherValidityPeriodsSimplified

> setVoucherValidityPeriodsSimplified(appId, voucherId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let appId = "appId_example"; // String | 
let voucherId = 56; // Number | 
let request = new Flipdish.SetVoucherValidityPeriodsSimplifiedRequest(); // SetVoucherValidityPeriodsSimplifiedRequest | 
apiInstance.setVoucherValidityPeriodsSimplified(appId, voucherId, request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **voucherId** | **Number**|  | 
 **request** | [**SetVoucherValidityPeriodsSimplifiedRequest**](SetVoucherValidityPeriodsSimplifiedRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Data, application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## updateVoucher

> RestApiResultVoucherWithStats updateVoucher(voucherId, voucher, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let voucherId = 56; // Number | 
let voucher = new Flipdish.UpdateVoucher(); // UpdateVoucher | 
let opts = {
  'storeId': [null], // [Number] | 
  'percentValue': 56, // Number | 
  'lumpValue': 3.4, // Number | 
  'maxDiscountAmount': 3.4 // Number | 
};
apiInstance.updateVoucher(voucherId, voucher, opts, (error, data, response) => {
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
 **voucherId** | **Number**|  | 
 **voucher** | [**UpdateVoucher**](UpdateVoucher.md)|  | 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 
 **percentValue** | **Number**|  | [optional] 
 **lumpValue** | **Number**|  | [optional] 
 **maxDiscountAmount** | **Number**|  | [optional] 

### Return type

[**RestApiResultVoucherWithStats**](RestApiResultVoucherWithStats.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## updateVoucherUsage

> updateVoucherUsage(appId, voucherId, voucherUsage)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.VouchersApi();
let appId = "appId_example"; // String | 
let voucherId = 56; // Number | 
let voucherUsage = new Flipdish.UpdateVoucherUsage(); // UpdateVoucherUsage | 
apiInstance.updateVoucherUsage(appId, voucherId, voucherUsage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **voucherId** | **Number**|  | 
 **voucherUsage** | [**UpdateVoucherUsage**](UpdateVoucherUsage.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Data, application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace

