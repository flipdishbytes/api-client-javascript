# Flipdish.RestaurantVouchersPayGreenApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayGreenConfiguration**](RestaurantVouchersPayGreenApi.md#createPayGreenConfiguration) | **POST** /api/v1.0/{appId}/restaurant-vouchers/paygreen | 
[**deletePayGreenConfiguration**](RestaurantVouchersPayGreenApi.md#deletePayGreenConfiguration) | **DELETE** /api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId} | 
[**getElegibleStores**](RestaurantVouchersPayGreenApi.md#getElegibleStores) | **GET** /api/v1.0/{appId}/restaurant-vouchers/paygreen/stores | 
[**getPayGreenConfigurations**](RestaurantVouchersPayGreenApi.md#getPayGreenConfigurations) | **GET** /api/v1.0/{appId}/restaurant-vouchers/paygreen | 
[**getStoreAvailablePayGreenConfigurations**](RestaurantVouchersPayGreenApi.md#getStoreAvailablePayGreenConfigurations) | **GET** /api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId}/available-configurations | 
[**getStorePayGreenConfiguration**](RestaurantVouchersPayGreenApi.md#getStorePayGreenConfiguration) | **GET** /api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId} | 
[**listPayGreenConfigurations**](RestaurantVouchersPayGreenApi.md#listPayGreenConfigurations) | **GET** /api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId} | 
[**updatePayGreenConfiguration**](RestaurantVouchersPayGreenApi.md#updatePayGreenConfiguration) | **POST** /api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId} | 
[**updateStorePayGreenConfiguration**](RestaurantVouchersPayGreenApi.md#updateStorePayGreenConfiguration) | **POST** /api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId} | 



## createPayGreenConfiguration

> RestApiResultRestaurantVoucherPayGreenConfiguration createPayGreenConfiguration(appId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let request = new Flipdish.CreatePayGreenConfigurationRequest(); // CreatePayGreenConfigurationRequest | 
apiInstance.createPayGreenConfiguration(appId, request, (error, data, response) => {
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
 **request** | [**CreatePayGreenConfigurationRequest**](CreatePayGreenConfigurationRequest.md)|  | 

### Return type

[**RestApiResultRestaurantVoucherPayGreenConfiguration**](RestApiResultRestaurantVoucherPayGreenConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deletePayGreenConfiguration

> Object deletePayGreenConfiguration(appId, paygreenConfigurationId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let paygreenConfigurationId = 56; // Number | 
apiInstance.deletePayGreenConfiguration(appId, paygreenConfigurationId, (error, data, response) => {
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
 **paygreenConfigurationId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getElegibleStores

> RestApiArrayResultRestaurantVoucherEligibleStore getElegibleStores(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
apiInstance.getElegibleStores(appId, (error, data, response) => {
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

### Return type

[**RestApiArrayResultRestaurantVoucherEligibleStore**](RestApiArrayResultRestaurantVoucherEligibleStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPayGreenConfigurations

> RestApiArrayResultRestaurantVoucherPayGreenConfiguration getPayGreenConfigurations(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
apiInstance.getPayGreenConfigurations(appId, (error, data, response) => {
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

### Return type

[**RestApiArrayResultRestaurantVoucherPayGreenConfiguration**](RestApiArrayResultRestaurantVoucherPayGreenConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreAvailablePayGreenConfigurations

> RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary getStoreAvailablePayGreenConfigurations(appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.getStoreAvailablePayGreenConfigurations(appId, storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary**](RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStorePayGreenConfiguration

> RestApiResultRestaurantVoucherPayGreenStoreConfiguration getStorePayGreenConfiguration(appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.getStorePayGreenConfiguration(appId, storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultRestaurantVoucherPayGreenStoreConfiguration**](RestApiResultRestaurantVoucherPayGreenStoreConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## listPayGreenConfigurations

> RestApiResultRestaurantVoucherPayGreenConfiguration listPayGreenConfigurations(appId, paygreenConfigurationId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let paygreenConfigurationId = 56; // Number | 
apiInstance.listPayGreenConfigurations(appId, paygreenConfigurationId, (error, data, response) => {
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
 **paygreenConfigurationId** | **Number**|  | 

### Return type

[**RestApiResultRestaurantVoucherPayGreenConfiguration**](RestApiResultRestaurantVoucherPayGreenConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updatePayGreenConfiguration

> RestApiResultRestaurantVoucherPayGreenConfiguration updatePayGreenConfiguration(appId, paygreenConfigurationId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let paygreenConfigurationId = 56; // Number | 
let request = new Flipdish.UpdatePayGreenConfigurationRequest(); // UpdatePayGreenConfigurationRequest | 
apiInstance.updatePayGreenConfiguration(appId, paygreenConfigurationId, request, (error, data, response) => {
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
 **paygreenConfigurationId** | **Number**|  | 
 **request** | [**UpdatePayGreenConfigurationRequest**](UpdatePayGreenConfigurationRequest.md)|  | 

### Return type

[**RestApiResultRestaurantVoucherPayGreenConfiguration**](RestApiResultRestaurantVoucherPayGreenConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateStorePayGreenConfiguration

> RestApiResultRestaurantVoucherPayGreenStoreConfiguration updateStorePayGreenConfiguration(appId, storeId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.RestaurantVouchersPayGreenApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let request = new Flipdish.UpdateStorePayGreenConfigurationRequest(); // UpdateStorePayGreenConfigurationRequest | 
apiInstance.updateStorePayGreenConfiguration(appId, storeId, request, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **request** | [**UpdateStorePayGreenConfigurationRequest**](UpdateStorePayGreenConfigurationRequest.md)|  | 

### Return type

[**RestApiResultRestaurantVoucherPayGreenStoreConfiguration**](RestApiResultRestaurantVoucherPayGreenStoreConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

