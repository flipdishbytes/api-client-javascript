# Flipdish.StoresApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveStore**](StoresApi.md#archiveStore) | **POST** /api/v1.0/stores/{storeId}/archive | 
[**assignMenu**](StoresApi.md#assignMenu) | **POST** /api/v1.0/stores/{storeId}/menu/{menuId} | 
[**cloneStore**](StoresApi.md#cloneStore) | **POST** /api/v1.0/stores/{storeId}/clone | 
[**configureStoreServiceCharge**](StoresApi.md#configureStoreServiceCharge) | **POST** /api/v1.0/stores/{storeId}/servicecharge | 
[**createBusinessHoursOverrideByStoreId**](StoresApi.md#createBusinessHoursOverrideByStoreId) | **POST** /api/v1.0/stores/{storeId}/businesshoursoverrides | 
[**createStore**](StoresApi.md#createStore) | **POST** /api/v1.0/stores | 
[**createStoreInProperty**](StoresApi.md#createStoreInProperty) | **POST** /api/v1.0/properties/{propertyId}/stores | 
[**deleteBusinessHoursOverride**](StoresApi.md#deleteBusinessHoursOverride) | **DELETE** /api/v1.0/stores/{storeId}/businesshoursoverrides/{businessHoursOverrideId} | 
[**getBankAccountForStore**](StoresApi.md#getBankAccountForStore) | **GET** /api/v1.0/stores/{storeId}/bankaccount | 
[**getBusinessHours**](StoresApi.md#getBusinessHours) | **GET** /api/v1.0/stores/{storeId}/availability/{deliveryType} | 
[**getBusinessHoursOverrideByStoreId**](StoresApi.md#getBusinessHoursOverrideByStoreId) | **GET** /api/v1.0/stores/{storeId}/businesshoursoverrides | 
[**getEndOfDayReport**](StoresApi.md#getEndOfDayReport) | **GET** /api/v1.0/stores/{storeId}/endofdayreport | 
[**getPreOrderConfig**](StoresApi.md#getPreOrderConfig) | **GET** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType} | 
[**getPreOrderPreview**](StoresApi.md#getPreOrderPreview) | **GET** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType}/preview | 
[**getProcessingFeeConfigsByStoreId**](StoresApi.md#getProcessingFeeConfigsByStoreId) | **GET** /api/v1.0/stores/{storeId}/processingfeeconfigs | 
[**getProcessingFeeConfigsByStoreIdAndPaymentAccountType**](StoresApi.md#getProcessingFeeConfigsByStoreIdAndPaymentAccountType) | **GET** /api/v1.0/stores/{storeId}/processingfeeconfigs/{paymentAccountType} | 
[**getStoreById**](StoresApi.md#getStoreById) | **GET** /api/v1.0/stores/{storeId} | 
[**getStoreDeliveryFeeConfig**](StoresApi.md#getStoreDeliveryFeeConfig) | **GET** /api/v1.0/stores/{storeId}/feeConfig/deliveryZones | 
[**getStoreFeeConfig**](StoresApi.md#getStoreFeeConfig) | **GET** /api/v1.0/stores/{storeId}/feeConfig | 
[**getStoreHeadersByAppId**](StoresApi.md#getStoreHeadersByAppId) | **GET** /api/v1.0/{appId}/stores/header | 
[**getStoreLeadTimes**](StoresApi.md#getStoreLeadTimes) | **GET** /api/v1.0/stores/{storeId}/leadTimes | 
[**getStoreNetSales**](StoresApi.md#getStoreNetSales) | **GET** /api/v1.0/{appId}/stores/stats | 
[**getStoreServiceCharge**](StoresApi.md#getStoreServiceCharge) | **GET** /api/v1.0/stores/{storeId}/servicecharge | 
[**getStores**](StoresApi.md#getStores) | **GET** /api/v1.0/stores | 
[**getStoresByAppId**](StoresApi.md#getStoresByAppId) | **GET** /api/v1.0/{appId}/stores | 
[**getStoresByStoreIdWithValidations**](StoresApi.md#getStoresByStoreIdWithValidations) | **GET** /api/v1.0/{appId}/storevalidation/kiosk | 
[**publishStore**](StoresApi.md#publishStore) | **POST** /api/v1.0/stores/{storeId}/publish | 
[**putStoreDeliveryFeeConfig**](StoresApi.md#putStoreDeliveryFeeConfig) | **PUT** /api/v1.0/stores/{storeId}/feeConfig/deliveryZones | 
[**setBusinessHours**](StoresApi.md#setBusinessHours) | **POST** /api/v1.0/stores/{storeId}/availability/{deliveryType} | 
[**setPreOrdeEnabled**](StoresApi.md#setPreOrdeEnabled) | **POST** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType}/enabled | 
[**setStoreCollectionSettings**](StoresApi.md#setStoreCollectionSettings) | **POST** /api/v1.0/stores/{storeId}/collectionsettings | 
[**setStoreLeadTimes**](StoresApi.md#setStoreLeadTimes) | **POST** /api/v1.0/stores/{storeId}/leadTimes | 
[**storesSetPropertyId**](StoresApi.md#storesSetPropertyId) | **POST** /api/v1.0/stores/{storeId}/propertyId/{propertyId} | 
[**supportedSalesChannelsTypes**](StoresApi.md#supportedSalesChannelsTypes) | **POST** /api/v1.0/properties/{propertyId}/stores/{storeId}/supportedSalesChannels | 
[**unpublishStore**](StoresApi.md#unpublishStore) | **POST** /api/v1.0/stores/{storeId}/unpublish | 
[**updatePreOrderConfig**](StoresApi.md#updatePreOrderConfig) | **POST** /api/v1.0/stores/{storeId}/preorderconfig/{deliveryType} | 
[**updateStore**](StoresApi.md#updateStore) | **POST** /api/v1.0/stores/{storeId} | 
[**updateStoreAddress**](StoresApi.md#updateStoreAddress) | **POST** /api/v1.0/stores/{storeId}/address | 
[**updateStoreAddressCoordinates**](StoresApi.md#updateStoreAddressCoordinates) | **POST** /api/v1.0/stores/{storeId}/address/coordinates | 
[**updateStoreAddressForm**](StoresApi.md#updateStoreAddressForm) | **POST** /api/v1.0/stores/{storeId}/addressform | 



## archiveStore

> archiveStore(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.archiveStore(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Data, application/json, text/json, application/xml, text/xml


## assignMenu

> RestApiArrayResultRestApiDefaultResponse assignMenu(storeId, menuId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let menuId = 56; // Number | 
apiInstance.assignMenu(storeId, menuId, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **menuId** | **Number**|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## cloneStore

> RestApiResultStore cloneStore(storeId, settings)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let settings = new Flipdish.StoreCloneSettings(); // StoreCloneSettings | 
apiInstance.cloneStore(storeId, settings, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **settings** | [**StoreCloneSettings**](StoreCloneSettings.md)|  | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## configureStoreServiceCharge

> RestApiResultServiceCharge configureStoreServiceCharge(storeId, serviceCharge)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let serviceCharge = new Flipdish.ServiceCharge(); // ServiceCharge | 
apiInstance.configureStoreServiceCharge(storeId, serviceCharge, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **serviceCharge** | [**ServiceCharge**](ServiceCharge.md)|  | 

### Return type

[**RestApiResultServiceCharge**](RestApiResultServiceCharge.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## createBusinessHoursOverrideByStoreId

> RestApiResultBusinessHoursOverride createBusinessHoursOverrideByStoreId(storeId, businessHoursOverride)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let businessHoursOverride = new Flipdish.BusinessHoursOverrideBase(); // BusinessHoursOverrideBase | 
apiInstance.createBusinessHoursOverrideByStoreId(storeId, businessHoursOverride, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **businessHoursOverride** | [**BusinessHoursOverrideBase**](BusinessHoursOverrideBase.md)|  | 

### Return type

[**RestApiResultBusinessHoursOverride**](RestApiResultBusinessHoursOverride.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createStore

> RestApiResultStore createStore(storeGroupId, store)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeGroupId = 56; // Number | 
let store = new Flipdish.StoreCreateBase(); // StoreCreateBase | 
apiInstance.createStore(storeGroupId, store, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 
 **store** | [**StoreCreateBase**](StoreCreateBase.md)|  | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createStoreInProperty

> RestApiResultStore createStoreInProperty(storeGroupId, propertyId, store, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeGroupId = 56; // Number | 
let propertyId = "propertyId_example"; // String | 
let store = new Flipdish.StoreCreateBase(); // StoreCreateBase | 
let opts = {
  'autoAssignMenu': true // Boolean | 
};
apiInstance.createStoreInProperty(storeGroupId, propertyId, store, opts, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 
 **propertyId** | **String**|  | 
 **store** | [**StoreCreateBase**](StoreCreateBase.md)|  | 
 **autoAssignMenu** | **Boolean**|  | [optional] 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteBusinessHoursOverride

> RestApiArrayResultRestApiDefaultResponse deleteBusinessHoursOverride(storeId, businessHoursOverrideId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let businessHoursOverrideId = 56; // Number | 
apiInstance.deleteBusinessHoursOverride(storeId, businessHoursOverrideId, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **businessHoursOverrideId** | **Number**|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getBankAccountForStore

> RestApiResultAssignedBankAccount getBankAccountForStore(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getBankAccountForStore(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultAssignedBankAccount**](RestApiResultAssignedBankAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBusinessHours

> RestApiArrayResultBusinessHoursPeriod getBusinessHours(storeId, deliveryType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
apiInstance.getBusinessHours(storeId, deliveryType, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 

### Return type

[**RestApiArrayResultBusinessHoursPeriod**](RestApiArrayResultBusinessHoursPeriod.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBusinessHoursOverrideByStoreId

> RestApiPaginationResultBusinessHoursOverride getBusinessHoursOverrideByStoreId(storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let opts = {
  'after': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getBusinessHoursOverrideByStoreId(storeId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **after** | **Date**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultBusinessHoursOverride**](RestApiPaginationResultBusinessHoursOverride.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getEndOfDayReport

> RestApiResultStoreEndOfDayReport getEndOfDayReport(storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let opts = {
  'date': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.getEndOfDayReport(storeId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **date** | **Date**|  | [optional] 

### Return type

[**RestApiResultStoreEndOfDayReport**](RestApiResultStoreEndOfDayReport.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPreOrderConfig

> RestApiResultPreOrderConfig getPreOrderConfig(storeId, deliveryType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
apiInstance.getPreOrderConfig(storeId, deliveryType, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 

### Return type

[**RestApiResultPreOrderConfig**](RestApiResultPreOrderConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPreOrderPreview

> RestApiArrayResultPreOrderTime getPreOrderPreview(storeId, deliveryType, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let opts = {
  'preOrderConfig_leadTimeMinutes': 56, // Number | Lead Time in Minutes
  'preOrderConfig_intervalMinutes': 56, // Number | Interval in minutes
  'preOrderConfig_maxOrderAheadDays': 56, // Number | Max Days to order ahead
  'preOrderConfig_includeAsap': true, // Boolean | Show ASAP as option
  'preOrderConfig_includeMoreGranularInitialTime': true, // Boolean | Granual Init' Time
  'preOrderConfig_cutOffTimePreviousDayBasic': "preOrderConfig_cutOffTimePreviousDayBasic_example", // String | Cut off time previous day
  'preOrderConfig_cutOffTimeCurrentDayBasic': "preOrderConfig_cutOffTimeCurrentDayBasic_example", // String | Cut off time current day
  'preOrderConfig_preOrderTimeDisplayType': "preOrderConfig_preOrderTimeDisplayType_example", // String | Type of time displayed.
  'preOrderConfig_alwaysAppearOpen': true, // Boolean | Specifies whether a customer can pre-order outside the store opening hours or not.
  'preOrderConfig_requireExplicitSelectAlways': true // Boolean | Force customer to select collection time.
};
apiInstance.getPreOrderPreview(storeId, deliveryType, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **preOrderConfig_leadTimeMinutes** | **Number**| Lead Time in Minutes | [optional] 
 **preOrderConfig_intervalMinutes** | **Number**| Interval in minutes | [optional] 
 **preOrderConfig_maxOrderAheadDays** | **Number**| Max Days to order ahead | [optional] 
 **preOrderConfig_includeAsap** | **Boolean**| Show ASAP as option | [optional] 
 **preOrderConfig_includeMoreGranularInitialTime** | **Boolean**| Granual Init&#39; Time | [optional] 
 **preOrderConfig_cutOffTimePreviousDayBasic** | **String**| Cut off time previous day | [optional] 
 **preOrderConfig_cutOffTimeCurrentDayBasic** | **String**| Cut off time current day | [optional] 
 **preOrderConfig_preOrderTimeDisplayType** | **String**| Type of time displayed. | [optional] 
 **preOrderConfig_alwaysAppearOpen** | **Boolean**| Specifies whether a customer can pre-order outside the store opening hours or not. | [optional] 
 **preOrderConfig_requireExplicitSelectAlways** | **Boolean**| Force customer to select collection time. | [optional] 

### Return type

[**RestApiArrayResultPreOrderTime**](RestApiArrayResultPreOrderTime.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getProcessingFeeConfigsByStoreId

> RestApiArrayResultProcessingFeeConfig getProcessingFeeConfigsByStoreId(storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let opts = {
  'appNameId': "appNameId_example" // String | 
};
apiInstance.getProcessingFeeConfigsByStoreId(storeId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **appNameId** | **String**|  | [optional] 

### Return type

[**RestApiArrayResultProcessingFeeConfig**](RestApiArrayResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getProcessingFeeConfigsByStoreIdAndPaymentAccountType

> RestApiResultProcessingFeeConfig getProcessingFeeConfigsByStoreIdAndPaymentAccountType(storeId, paymentAccountType, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let paymentAccountType = "paymentAccountType_example"; // String | 
let opts = {
  'appNameId': "appNameId_example" // String | 
};
apiInstance.getProcessingFeeConfigsByStoreIdAndPaymentAccountType(storeId, paymentAccountType, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **paymentAccountType** | **String**|  | 
 **appNameId** | **String**|  | [optional] 

### Return type

[**RestApiResultProcessingFeeConfig**](RestApiResultProcessingFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getStoreById

> RestApiResultStore getStoreById(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getStoreById(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreDeliveryFeeConfig

> RestApiArrayResultStoreDeliveryZoneFeeConfig getStoreDeliveryFeeConfig(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getStoreDeliveryFeeConfig(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultStoreDeliveryZoneFeeConfig**](RestApiArrayResultStoreDeliveryZoneFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreFeeConfig

> StoreFeeConfig getStoreFeeConfig(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getStoreFeeConfig(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**StoreFeeConfig**](StoreFeeConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, FeeConfigId, StoreId, StartTime, PercentFeeCardOrders, PercentFeeCashOrders, PercentFeeCardOrdersWeb, PercentFeeCashOrdersWeb, PercentFeeCardOrdersKiosk, PercentFeeCashOrdersKiosk, FixedFeeCardOrdersKiosk, FixedFeeCashOrdersKiosk, PercentFeeCardOrdersKioskChargedToCustomerIncludingVat, FixedFeeCardOrdersKioskChargedToCustomerIncludingVat, PercentFeeCashOrdersKioskChargedToCustomerIncludingVat, FixedFeeCashOrdersKioskChargedToCustomerIncludingVat, FixedFeeCardOrders, FixedFeeCashOrders, PercentFeeCardOrdersChargedToCustomerIncludingVat, FixedFeeCardOrdersChargedToCustomerIncludingVat, PercentFeeCashOrdersChargedToCustomerIncludingVat, FixedFeeCashOrdersChargedToCustomerIncludingVat, PercentFeeTips, PercentFeeTipsCollection, PercentFeeTipsDelivery, TaxRatePercent, PercentFeeCardOrdersLocationService, PercentFeeCashOrdersLocationService, FixedFeeCardOrdersLocationService, FixedFeeCashOrdersLocationService, PercentFeeCardOrdersLocationServiceChargedToCustomerIncludingVat, PercentFeeCashOrdersLocationServiceChargedToCustomerIncludingVat, FixedFeeCardOrdersLocationServiceChargedToCustomerIncludingVat, FixedFeeCashOrdersLocationServiceChargedToCustomerIncludingVat, PercentFeeDelivery, FixedFeeDelivery, PercentFeeCardPosTransaction, FixedFeeCardPosTransaction, PercentFeeOrderWithGoogle, FixedFeeOrderWithGoogle


## getStoreHeadersByAppId

> RestApiPaginationResultStoreHeader getStoreHeadersByAppId(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeNameQuery': "storeNameQuery_example", // String | 
  'salesChannelType': "salesChannelType_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getStoreHeadersByAppId(appId, opts, (error, data, response) => {
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
 **storeNameQuery** | **String**|  | [optional] 
 **salesChannelType** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreHeader**](RestApiPaginationResultStoreHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreLeadTimes

> RestApiResultOrderLeadTimes getStoreLeadTimes(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getStoreLeadTimes(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultOrderLeadTimes**](RestApiResultOrderLeadTimes.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreNetSales

> RestApiArrayResultStoreStatistics getStoreNetSales(appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let appId = "appId_example"; // String | 
let storeId = [null]; // [Number] | 
apiInstance.getStoreNetSales(appId, storeId, (error, data, response) => {
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
 **storeId** | [**[Number]**](Number.md)|  | 

### Return type

[**RestApiArrayResultStoreStatistics**](RestApiArrayResultStoreStatistics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreServiceCharge

> ServiceCharge getStoreServiceCharge(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.getStoreServiceCharge(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**ServiceCharge**](ServiceCharge.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, StoreId, PercentageValue, Enabled, IsOptional, DisplayWithProcessingFee, IncludesVouchers


## getStores

> RestApiPaginationResultStore getStores(opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeGroupId': 56 // Number | 
};
apiInstance.getStores(opts, (error, data, response) => {
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
 **searchQuery** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeGroupId** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStore**](RestApiPaginationResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoresByAppId

> RestApiPaginationResultStore getStoresByAppId(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let appId = "appId_example"; // String | 
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'salesChannelType': "salesChannelType_example", // String | 
  'excludeUnpublished': true, // Boolean | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getStoresByAppId(appId, opts, (error, data, response) => {
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
 **searchQuery** | **String**|  | [optional] 
 **salesChannelType** | **String**|  | [optional] 
 **excludeUnpublished** | **Boolean**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStore**](RestApiPaginationResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoresByStoreIdWithValidations

> RestApiPaginationResultStoreValidationConfig getStoresByStoreIdWithValidations(storeId, appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = [null]; // [Number] | 
let appId = "appId_example"; // String | 
let opts = {
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getStoresByStoreIdWithValidations(storeId, appId, opts, (error, data, response) => {
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
 **storeId** | [**[Number]**](Number.md)|  | 
 **appId** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreValidationConfig**](RestApiPaginationResultStoreValidationConfig.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## publishStore

> publishStore(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.publishStore(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Data, application/json, text/json, application/xml, text/xml


## putStoreDeliveryFeeConfig

> putStoreDeliveryFeeConfig(storeId, feeConfigUpdateRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let feeConfigUpdateRequest = new Flipdish.StoreDeliveryZoneFeeConfigUpdateRequest(); // StoreDeliveryZoneFeeConfigUpdateRequest | 
apiInstance.putStoreDeliveryFeeConfig(storeId, feeConfigUpdateRequest, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **feeConfigUpdateRequest** | [**StoreDeliveryZoneFeeConfigUpdateRequest**](StoreDeliveryZoneFeeConfigUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## setBusinessHours

> RestApiResultBusinessHoursPeriod setBusinessHours(storeId, deliveryType, businessHoursPeriod)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let businessHoursPeriod = new Flipdish.BusinessHoursPeriodBase(); // BusinessHoursPeriodBase | 
apiInstance.setBusinessHours(storeId, deliveryType, businessHoursPeriod, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **businessHoursPeriod** | [**BusinessHoursPeriodBase**](BusinessHoursPeriodBase.md)|  | 

### Return type

[**RestApiResultBusinessHoursPeriod**](RestApiResultBusinessHoursPeriod.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setPreOrdeEnabled

> RestApiArrayResultRestApiDefaultResponse setPreOrdeEnabled(storeId, deliveryType, enabled)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let enabled = true; // Boolean | 
apiInstance.setPreOrdeEnabled(storeId, deliveryType, enabled, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **enabled** | **Boolean**|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setStoreCollectionSettings

> RestApiResultRestApiDefaultResponse setStoreCollectionSettings(storeId, settings)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let settings = new Flipdish.StoreCollectionSettings(); // StoreCollectionSettings | 
apiInstance.setStoreCollectionSettings(storeId, settings, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **settings** | [**StoreCollectionSettings**](StoreCollectionSettings.md)|  | 

### Return type

[**RestApiResultRestApiDefaultResponse**](RestApiResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## setStoreLeadTimes

> RestApiResultOrderLeadTimes setStoreLeadTimes(storeId, leadTime)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let leadTime = new Flipdish.LeadTime(); // LeadTime | 
apiInstance.setStoreLeadTimes(storeId, leadTime, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **leadTime** | [**LeadTime**](LeadTime.md)|  | 

### Return type

[**RestApiResultOrderLeadTimes**](RestApiResultOrderLeadTimes.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## storesSetPropertyId

> Object storesSetPropertyId(storeId, propertyId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let propertyId = "propertyId_example"; // String | 
apiInstance.storesSetPropertyId(storeId, propertyId, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **propertyId** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## supportedSalesChannelsTypes

> supportedSalesChannelsTypes(propertyId, storeId, salesChannelTypes)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let propertyId = "propertyId_example"; // String | 
let storeId = 56; // Number | 
let salesChannelTypes = ["null"]; // [String] | 
apiInstance.supportedSalesChannelsTypes(propertyId, storeId, salesChannelTypes, (error, data, response) => {
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
 **propertyId** | **String**|  | 
 **storeId** | **Number**|  | 
 **salesChannelTypes** | [**[String]**](String.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## unpublishStore

> unpublishStore(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
apiInstance.unpublishStore(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Data, application/json, text/json, application/xml, text/xml


## updatePreOrderConfig

> RestApiArrayResultRestApiDefaultResponse updatePreOrderConfig(storeId, deliveryType, preOrderConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let preOrderConfig = new Flipdish.PreOrderConfig(); // PreOrderConfig | 
apiInstance.updatePreOrderConfig(storeId, deliveryType, preOrderConfig, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **preOrderConfig** | [**PreOrderConfig**](PreOrderConfig.md)|  | 

### Return type

[**RestApiArrayResultRestApiDefaultResponse**](RestApiArrayResultRestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateStore

> RestApiResultStore updateStore(storeId, store)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let store = new Flipdish.StoreBase(); // StoreBase | 
apiInstance.updateStore(storeId, store, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **store** | [**StoreBase**](StoreBase.md)|  | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateStoreAddress

> RestApiResultStoreAddress updateStoreAddress(storeId, storeAddress)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let storeAddress = new Flipdish.StoreAddressBase(); // StoreAddressBase | 
apiInstance.updateStoreAddress(storeId, storeAddress, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **storeAddress** | [**StoreAddressBase**](StoreAddressBase.md)|  | 

### Return type

[**RestApiResultStoreAddress**](RestApiResultStoreAddress.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateStoreAddressCoordinates

> RestApiResultCoordinates updateStoreAddressCoordinates(storeId, coordinates, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let coordinates = new Flipdish.Coordinates(); // Coordinates | 
let opts = {
  'appNameId': "appNameId_example" // String | 
};
apiInstance.updateStoreAddressCoordinates(storeId, coordinates, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **coordinates** | [**Coordinates**](Coordinates.md)|  | 
 **appNameId** | **String**|  | [optional] 

### Return type

[**RestApiResultCoordinates**](RestApiResultCoordinates.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateStoreAddressForm

> Object updateStoreAddressForm(storeId, address)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoresApi();
let storeId = 56; // Number | 
let address = new Flipdish.StoreAddressForm(); // StoreAddressForm | 
apiInstance.updateStoreAddressForm(storeId, address, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **address** | [**StoreAddressForm**](StoreAddressForm.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

