# FlipdishOpenApiV10.StoresApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveStore**](StoresApi.md#archiveStore) | **POST** /api/v1.0/stores/{storeId}/archive | Archive store
[**assignMenu**](StoresApi.md#assignMenu) | **POST** /api/v1.0/stores/{storeId}/menu/{menuId} | Assign Menu to Store
[**cloneStore**](StoresApi.md#cloneStore) | **POST** /api/v1.0/stores/{storeId}/clone | Clone store with store clone settings
[**createBusinessHoursOverrideByStoreId**](StoresApi.md#createBusinessHoursOverrideByStoreId) | **POST** /api/v1.0/stores/{storeId}/businesshoursoverrides | Create Business Hours Override for a store
[**createStore**](StoresApi.md#createStore) | **POST** /api/v1.0/stores | Create store with Store Group identifier
[**deleteBusinessHoursOverride**](StoresApi.md#deleteBusinessHoursOverride) | **DELETE** /api/v1.0/stores/{storeId}/businesshoursoverrides/{businessHoursOverrideId} | Delete Business Hours Override for a store
[**getBankAccountForStore**](StoresApi.md#getBankAccountForStore) | **GET** /api/v1.0/stores/{storeId}/bankaccount | Get Stores Bank Account Id
[**getBusinessHours**](StoresApi.md#getBusinessHours) | **GET** /api/v1.0/stores/{storeId}/availability/{deliveryType} | Get Business hours
[**getBusinessHoursOverrideByStoreId**](StoresApi.md#getBusinessHoursOverrideByStoreId) | **GET** /api/v1.0/stores/{storeId}/businesshoursoverrides | Get business hours overrides by store identifier
[**getEndOfDayReport**](StoresApi.md#getEndOfDayReport) | **GET** /api/v1.0/stores/{storeId}/endofdayreport | Get store end of day report
[**getPreOrderConfig**](StoresApi.md#getPreOrderConfig) | **GET** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType} | Get the pre order config for a store, by type
[**getPreOrderPreview**](StoresApi.md#getPreOrderPreview) | **GET** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType}/preview | Get the Preview times of the pre-order configuration
[**getProcessingFeeConfigsByStoreId**](StoresApi.md#getProcessingFeeConfigsByStoreId) | **GET** /api/v1.0/stores/{storeId}/processingfeeconfigs | Get processing fee configs by store identifier
[**getProcessingFeeConfigsByStoreIdAndPaymentAccountType**](StoresApi.md#getProcessingFeeConfigsByStoreIdAndPaymentAccountType) | **GET** /api/v1.0/stores/{storeId}/processingfeeconfigs/{paymentAccountType} | Get processing fee configs by store identifier
[**getStoreById**](StoresApi.md#getStoreById) | **GET** /api/v1.0/stores/{storeId} | Get store by identifier
[**getStoreHeadersByAppId**](StoresApi.md#getStoreHeadersByAppId) | **GET** /api/v1.0/{appId}/stores/header | Get all stores by app name id
[**getStoreNetSales**](StoresApi.md#getStoreNetSales) | **GET** /api/v1.0/{appId}/stores/stats | Get stores statistics by app name id and storeIds
[**getStores**](StoresApi.md#getStores) | **GET** /api/v1.0/stores | Get all stores, excluding archived ones
[**getStoresByAppId**](StoresApi.md#getStoresByAppId) | **GET** /api/v1.0/{appId}/stores | Get all stores by app name id
[**publishStore**](StoresApi.md#publishStore) | **POST** /api/v1.0/stores/{storeId}/publish | Publish store
[**setBusinessHours**](StoresApi.md#setBusinessHours) | **POST** /api/v1.0/stores/{storeId}/availability/{deliveryType} | Set Business hours
[**setPreOrdeEnabled**](StoresApi.md#setPreOrdeEnabled) | **POST** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType}/enabled | UPDATE pre order config for a store, by type
[**unpublishStore**](StoresApi.md#unpublishStore) | **POST** /api/v1.0/stores/{storeId}/unpublish | Unpublish store
[**updatePreOrderConfig**](StoresApi.md#updatePreOrderConfig) | **POST** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType} | UPDATE pre order config for a store, by type
[**updateStore**](StoresApi.md#updateStore) | **POST** /api/v1.0/stores/{storeId} | Update store by identifier
[**updateStoreAddress**](StoresApi.md#updateStoreAddress) | **POST** /api/v1.0/stores/{storeId}/address | Update store address
[**updateStoreAddressCoordinates**](StoresApi.md#updateStoreAddressCoordinates) | **POST** /api/v1.0/stores/{storeId}/address/coordinates | Update store address coordinates


<a name="archiveStore"></a>
# **archiveStore**
> archiveStore(storeId)

Archive store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.archiveStore(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="assignMenu"></a>
# **assignMenu**
> RestApiArrayResultRestApiDefaultResponse assignMenu(storeId, menuId)

Assign Menu to Store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var menuId = 56; // Number | Id of Menu to assign to store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignMenu(storeId, menuId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **menuId** | **Number**| Id of Menu to assign to store | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="cloneStore"></a>
# **cloneStore**
> RestApiResultStore cloneStore(storeId, settings)

Clone store with store clone settings

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var settings = new FlipdishOpenApiV10.StoreCloneSettings(); // StoreCloneSettings | Settings for cloning the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cloneStore(storeId, settings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **settings** | [**StoreCloneSettings**](StoreCloneSettings.md)| Settings for cloning the store | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createBusinessHoursOverrideByStoreId"></a>
# **createBusinessHoursOverrideByStoreId**
> RestApiResultBusinessHoursOverride createBusinessHoursOverrideByStoreId(storeId, businessHoursOverride)

Create Business Hours Override for a store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var businessHoursOverride = new FlipdishOpenApiV10.BusinessHoursOverrideBase(); // BusinessHoursOverrideBase | Business Hours Override


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBusinessHoursOverrideByStoreId(storeId, businessHoursOverride, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **businessHoursOverride** | [**BusinessHoursOverrideBase**](BusinessHoursOverrideBase.md)| Business Hours Override | 

### Return type

[**RestApiResultBusinessHoursOverride**](RestApiResultBusinessHoursOverride.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createStore"></a>
# **createStore**
> RestApiResultStore createStore(storeGroupId, store)

Create store with Store Group identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeGroupId = 56; // Number | Store Group identifier

var store = new FlipdishOpenApiV10.StoreCreateBase(); // StoreCreateBase | Store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStore(storeGroupId, store, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeGroupId** | **Number**| Store Group identifier | 
 **store** | [**StoreCreateBase**](StoreCreateBase.md)| Store | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteBusinessHoursOverride"></a>
# **deleteBusinessHoursOverride**
> RestApiArrayResultRestApiDefaultResponse deleteBusinessHoursOverride(storeId, businessHoursOverrideId)

Delete Business Hours Override for a store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | 

var businessHoursOverrideId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBusinessHoursOverride(storeId, businessHoursOverrideId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | 
 **businessHoursOverrideId** | **Number**|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBankAccountForStore"></a>
# **getBankAccountForStore**
> RestApiResultAssignedBankAccount getBankAccountForStore(storeId)

Get Stores Bank Account Id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBankAccountForStore(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

[**RestApiResultAssignedBankAccount**](RestApiResultAssignedBankAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBusinessHours"></a>
# **getBusinessHours**
> RestApiArrayResultBusinessHoursPeriod getBusinessHours(storeId, deliveryType)

Get Business hours

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | Delivery type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBusinessHours(storeId, deliveryType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| Delivery type | 

### Return type

[**RestApiArrayResultBusinessHoursPeriod**](RestApiArrayResultBusinessHoursPeriod.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBusinessHoursOverrideByStoreId"></a>
# **getBusinessHoursOverrideByStoreId**
> RestApiPaginationResultBusinessHoursOverride getBusinessHoursOverrideByStoreId(storeId, opts)

Get business hours overrides by store identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var opts = { 
  'after': new Date("2013-10-20T19:20:30+01:00"), // Date | Return results that ended after this datetime. Default value is the current datetime.
  'page': 56, // Number | Requested page index
  'limit': 56 // Number | Requested page limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBusinessHoursOverrideByStoreId(storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **after** | **Date**| Return results that ended after this datetime. Default value is the current datetime. | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultBusinessHoursOverride**](RestApiPaginationResultBusinessHoursOverride.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getEndOfDayReport"></a>
# **getEndOfDayReport**
> RestApiResultStoreEndOfDayReport getEndOfDayReport(storeId, opts)

Get store end of day report

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var opts = { 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | Store identifier
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndOfDayReport(storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **_date** | **Date**| Store identifier | [optional] 

### Return type

[**RestApiResultStoreEndOfDayReport**](RestApiResultStoreEndOfDayReport.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPreOrderConfig"></a>
# **getPreOrderConfig**
> RestApiResultPreOrderConfig getPreOrderConfig(storeId, deliveryType)

Get the pre order config for a store, by type

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | \"delivery\" or \"pickup\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPreOrderConfig(storeId, deliveryType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| \"delivery\" or \"pickup\" | 

### Return type

[**RestApiResultPreOrderConfig**](RestApiResultPreOrderConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPreOrderPreview"></a>
# **getPreOrderPreview**
> RestApiArrayResultPreOrderTime getPreOrderPreview(storeId, deliveryType, opts)

Get the Preview times of the pre-order configuration

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | \"delivery\" or \"pickup\"

var opts = { 
  'preOrderConfigLeadTimeMinutes': 56, // Number | Lead Time in Minutes
  'preOrderConfigIntervalMinutes': 56, // Number | Interval in minutes
  'preOrderConfigMaxOrderAheadDays': 56, // Number | Max Days to order ahead
  'preOrderConfigIncludeAsap': true, // Boolean | Show ASAP as option
  'preOrderConfigIncludeMoreGranularInitialTime': true, // Boolean | Granual Init' Time
  'preOrderConfigCutOffTimePreviousDayBasic': "preOrderConfigCutOffTimePreviousDayBasic_example", // String | Cut off time previous day
  'preOrderConfigCutOffTimeCurrentDayBasic': "preOrderConfigCutOffTimeCurrentDayBasic_example", // String | Cut off time current day
  'preOrderConfigPreOrderTimeDisplayType': "preOrderConfigPreOrderTimeDisplayType_example", // String | Type of time displayed.
  'preOrderConfigAlwaysAppearOpen': true, // Boolean | Specifies whether a customer can pre-order outside the store opening hours or not.
  'preOrderConfigRequireExplicitSelectAlways': true // Boolean | Force customer to select collection time.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPreOrderPreview(storeId, deliveryType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| \"delivery\" or \"pickup\" | 
 **preOrderConfigLeadTimeMinutes** | **Number**| Lead Time in Minutes | [optional] 
 **preOrderConfigIntervalMinutes** | **Number**| Interval in minutes | [optional] 
 **preOrderConfigMaxOrderAheadDays** | **Number**| Max Days to order ahead | [optional] 
 **preOrderConfigIncludeAsap** | **Boolean**| Show ASAP as option | [optional] 
 **preOrderConfigIncludeMoreGranularInitialTime** | **Boolean**| Granual Init' Time | [optional] 
 **preOrderConfigCutOffTimePreviousDayBasic** | **String**| Cut off time previous day | [optional] 
 **preOrderConfigCutOffTimeCurrentDayBasic** | **String**| Cut off time current day | [optional] 
 **preOrderConfigPreOrderTimeDisplayType** | **String**| Type of time displayed. | [optional] 
 **preOrderConfigAlwaysAppearOpen** | **Boolean**| Specifies whether a customer can pre-order outside the store opening hours or not. | [optional] 
 **preOrderConfigRequireExplicitSelectAlways** | **Boolean**| Force customer to select collection time. | [optional] 

### Return type

[**RestApiArrayResultPreOrderTime**](RestApiArrayResultPreOrderTime.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getProcessingFeeConfigsByStoreId"></a>
# **getProcessingFeeConfigsByStoreId**
> RestApiArrayResultProcessingFeeConfig getProcessingFeeConfigsByStoreId(storeId, opts)

Get processing fee configs by store identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var opts = { 
  'appNameId': "appNameId_example" // String | App Name Id(Not used, still here for compatability reasons)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessingFeeConfigsByStoreId(storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **appNameId** | **String**| App Name Id(Not used, still here for compatability reasons) | [optional] 

### Return type

[**RestApiArrayResultProcessingFeeConfig**](RestApiArrayResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getProcessingFeeConfigsByStoreIdAndPaymentAccountType"></a>
# **getProcessingFeeConfigsByStoreIdAndPaymentAccountType**
> RestApiResultProcessingFeeConfig getProcessingFeeConfigsByStoreIdAndPaymentAccountType(storeId, paymentAccountType, opts)

Get processing fee configs by store identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var paymentAccountType = "paymentAccountType_example"; // String | 

var opts = { 
  'appNameId': "appNameId_example" // String | App Name Id(Not used, still here for compatability reasons)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessingFeeConfigsByStoreIdAndPaymentAccountType(storeId, paymentAccountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **paymentAccountType** | **String**|  | 
 **appNameId** | **String**| App Name Id(Not used, still here for compatability reasons) | [optional] 

### Return type

[**RestApiResultProcessingFeeConfig**](RestApiResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreById"></a>
# **getStoreById**
> RestApiResultStore getStoreById(storeId)

Get store by identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreById(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreHeadersByAppId"></a>
# **getStoreHeadersByAppId**
> RestApiPaginationResultStoreHeader getStoreHeadersByAppId(appId, opts)

Get all stores by app name id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var appId = "appId_example"; // String | App Name Id

var opts = { 
  'storeNameQuery': "storeNameQuery_example", // String | 
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
apiInstance.getStoreHeadersByAppId(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **storeNameQuery** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreHeader**](RestApiPaginationResultStoreHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreNetSales"></a>
# **getStoreNetSales**
> RestApiArrayResultStoreStatistics getStoreNetSales(appId, storeId)

Get stores statistics by app name id and storeIds

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var appId = "appId_example"; // String | App Name Id

var storeId = [3.4]; // [Number] | Store Ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreNetSales(appId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **storeId** | [**[Number]**](Number.md)| Store Ids | 

### Return type

[**RestApiArrayResultStoreStatistics**](RestApiArrayResultStoreStatistics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStores"></a>
# **getStores**
> RestApiPaginationResultStore getStores(opts)

Get all stores, excluding archived ones

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var opts = { 
  'searchQuery': "searchQuery_example", // String | Search query
  'page': 56, // Number | Requested page index
  'limit': 56, // Number | Requested page limit
  'storeGroupId': 56 // Number | Store Group Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStores(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchQuery** | **String**| Search query | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 
 **storeGroupId** | **Number**| Store Group Id | [optional] 

### Return type

[**RestApiPaginationResultStore**](RestApiPaginationResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoresByAppId"></a>
# **getStoresByAppId**
> RestApiPaginationResultStore getStoresByAppId(appId, opts)

Get all stores by app name id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var appId = "appId_example"; // String | App Name Id

var opts = { 
  'searchQuery': "searchQuery_example", // String | Search query
  'page': 56, // Number | Requested page index
  'limit': 56 // Number | Requested page limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoresByAppId(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **searchQuery** | **String**| Search query | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultStore**](RestApiPaginationResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="publishStore"></a>
# **publishStore**
> publishStore(storeId)

Publish store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.publishStore(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setBusinessHours"></a>
# **setBusinessHours**
> RestApiResultBusinessHoursPeriod setBusinessHours(storeId, deliveryType, businessHoursPeriod)

Set Business hours

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | Delivery type

var businessHoursPeriod = new FlipdishOpenApiV10.BusinessHoursPeriodBase(); // BusinessHoursPeriodBase | Business Hours Period


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setBusinessHours(storeId, deliveryType, businessHoursPeriod, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| Delivery type | 
 **businessHoursPeriod** | [**BusinessHoursPeriodBase**](BusinessHoursPeriodBase.md)| Business Hours Period | 

### Return type

[**RestApiResultBusinessHoursPeriod**](RestApiResultBusinessHoursPeriod.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setPreOrdeEnabled"></a>
# **setPreOrdeEnabled**
> RestApiArrayResultRestApiDefaultResponse setPreOrdeEnabled(storeId, deliveryType, enabled)

UPDATE pre order config for a store, by type

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | \"delivery\" or \"pickup\"

var enabled = true; // Boolean | Update pre order config values


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setPreOrdeEnabled(storeId, deliveryType, enabled, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| \"delivery\" or \"pickup\" | 
 **enabled** | **Boolean**| Update pre order config values | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unpublishStore"></a>
# **unpublishStore**
> unpublishStore(storeId)

Unpublish store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unpublishStore(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updatePreOrderConfig"></a>
# **updatePreOrderConfig**
> RestApiArrayResultRestApiDefaultResponse updatePreOrderConfig(storeId, deliveryType, preOrderConfig)

UPDATE pre order config for a store, by type

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var deliveryType = "deliveryType_example"; // String | \"delivery\" or \"pickup\"

var preOrderConfig = new FlipdishOpenApiV10.PreOrderConfig(); // PreOrderConfig | Update pre order config values


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePreOrderConfig(storeId, deliveryType, preOrderConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **deliveryType** | **String**| \"delivery\" or \"pickup\" | 
 **preOrderConfig** | [**PreOrderConfig**](PreOrderConfig.md)| Update pre order config values | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateStore"></a>
# **updateStore**
> RestApiResultStore updateStore(storeId, store)

Update store by identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store Group identifier

var store = new FlipdishOpenApiV10.StoreBase(); // StoreBase | Store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStore(storeId, store, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Group identifier | 
 **store** | [**StoreBase**](StoreBase.md)| Store | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateStoreAddress"></a>
# **updateStoreAddress**
> RestApiResultStoreAddress updateStoreAddress(storeId, storeAddress)

Update store address

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var storeAddress = new FlipdishOpenApiV10.StoreAddressBase(); // StoreAddressBase | Store address


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStoreAddress(storeId, storeAddress, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **storeAddress** | [**StoreAddressBase**](StoreAddressBase.md)| Store address | 

### Return type

[**RestApiResultStoreAddress**](RestApiResultStoreAddress.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateStoreAddressCoordinates"></a>
# **updateStoreAddressCoordinates**
> RestApiResultCoordinates updateStoreAddressCoordinates(storeId, coordinates, opts)

Update store address coordinates

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.StoresApi();

var storeId = 56; // Number | Store identifier

var coordinates = new FlipdishOpenApiV10.Coordinates(); // Coordinates | Store address coordinates

var opts = { 
  'appNameId': "appNameId_example" // String | App Name Id(Not used, still here for compatability reasons)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStoreAddressCoordinates(storeId, coordinates, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 
 **coordinates** | [**Coordinates**](Coordinates.md)| Store address coordinates | 
 **appNameId** | **String**| App Name Id(Not used, still here for compatability reasons) | [optional] 

### Return type

[**RestApiResultCoordinates**](RestApiResultCoordinates.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

