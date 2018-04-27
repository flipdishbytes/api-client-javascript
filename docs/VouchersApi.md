# Flipdish.VouchersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVoucherMetadata**](VouchersApi.md#deleteVoucherMetadata) | **DELETE** /api/v1.0/vouchers/{voucherId}/menu/{menuId}/store/{storeId}/metadata/{key} | Delete voucher metadata
[**getVoucherById**](VouchersApi.md#getVoucherById) | **GET** /api/v1.0/vouchers/{voucherId} | Get voucher by identifier
[**getVoucherMetadata**](VouchersApi.md#getVoucherMetadata) | **GET** /api/v1.0/vouchers/{voucherId}/menu/{menuId}/store/{storeId}/metadata | Get voucher metadata
[**getVoucherMetadata_0**](VouchersApi.md#getVoucherMetadata_0) | **GET** /api/v1.0/vouchers/{voucherId}/menu/{menuId}/store/{storeId}/metadata/{key} | Get voucher metadata
[**getVouchers**](VouchersApi.md#getVouchers) | **GET** /api/v1.0/vouchers | Get vouchers
[**setVoucherMetadata**](VouchersApi.md#setVoucherMetadata) | **PUT** /api/v1.0/vouchers/{voucherId}/menu/{menuId}/store/{storeId}/metadata/{key} | Add voucher metadata


<a name="deleteVoucherMetadata"></a>
# **deleteVoucherMetadata**
> RestApiArrayResultRestApiDefaultResponse deleteVoucherMetadata(voucherId, menuId, storeId, key)

Delete voucher metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var voucherId = 56; // Number | 

var menuId = 56; // Number | 

var storeId = 56; // Number | 

var key = "key_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVoucherMetadata(voucherId, menuId, storeId, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**|  | 
 **menuId** | **Number**|  | 
 **storeId** | **Number**|  | 
 **key** | **String**|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVoucherById"></a>
# **getVoucherById**
> RestApiResultVoucher getVoucherById(voucherId)

Get voucher by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var voucherId = 56; // Number | 


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
 **voucherId** | **Number**|  | 

### Return type

[**RestApiResultVoucher**](RestApiResultVoucher.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVoucherMetadata"></a>
# **getVoucherMetadata**
> RestApiArrayResultMetadata getVoucherMetadata(voucherId, menuId, storeId)

Get voucher metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var voucherId = 56; // Number | 

var menuId = 56; // Number | 

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoucherMetadata(voucherId, menuId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**|  | 
 **menuId** | **Number**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultMetadata**](RestApiArrayResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVoucherMetadata_0"></a>
# **getVoucherMetadata_0**
> RestApiResultMetadata getVoucherMetadata_0(voucherId, menuId, storeId, key)

Get voucher metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var voucherId = 56; // Number | 

var menuId = 56; // Number | 

var storeId = 56; // Number | 

var key = "key_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoucherMetadata_0(voucherId, menuId, storeId, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**|  | 
 **menuId** | **Number**|  | 
 **storeId** | **Number**|  | 
 **key** | **String**|  | 

### Return type

[**RestApiResultMetadata**](RestApiResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVouchers"></a>
# **getVouchers**
> RestApiPaginationResultVoucher getVouchers(opts)

Get vouchers

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var opts = { 
  'filter': "filter_example", // String | 
  'pageNumber': 56, // Number | 
  'pageSize': 56, // Number | 
  'sortOrder': "sortOrder_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'subType': "subType_example", // String | 
  'status': "status_example", // String | 
  'code': "code_example", // String | 
  'validFromBegin': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'validFromEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'expiryBegin': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'expiryEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'amount': 1.2, // Number | 
  'voucherType': "voucherType_example", // String | 
  'description': "description_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVouchers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **pageNumber** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **subType** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **validFromBegin** | **Date**|  | [optional] 
 **validFromEnd** | **Date**|  | [optional] 
 **expiryBegin** | **Date**|  | [optional] 
 **expiryEnd** | **Date**|  | [optional] 
 **amount** | **Number**|  | [optional] 
 **voucherType** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 

### Return type

[**RestApiPaginationResultVoucher**](RestApiPaginationResultVoucher.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setVoucherMetadata"></a>
# **setVoucherMetadata**
> setVoucherMetadata(voucherId, menuId, storeId, key, value)

Add voucher metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.VouchersApi();

var voucherId = 56; // Number | 

var menuId = 56; // Number | 

var storeId = 56; // Number | 

var key = "key_example"; // String | 

var value = "value_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setVoucherMetadata(voucherId, menuId, storeId, key, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voucherId** | **Number**|  | 
 **menuId** | **Number**|  | 
 **storeId** | **Number**|  | 
 **key** | **String**|  | 
 **value** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

