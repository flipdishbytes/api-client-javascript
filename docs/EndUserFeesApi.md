# Flipdish.EndUserFeesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEndUserFeeConfig**](EndUserFeesApi.md#createEndUserFeeConfig) | **POST** /api/v1.0/{appId}/stores/{storeId}/end-user-fees | 
[**getEndUserFeesForStore**](EndUserFeesApi.md#getEndUserFeesForStore) | **GET** /api/v1.0/{appId}/stores/{storeId}/end-user-fees | 
[**setV2FeeCalculation**](EndUserFeesApi.md#setV2FeeCalculation) | **POST** /api/v1.0/{appId}/stores/{storeId}/end-user-fees/v2-fee-calculation | 



## createEndUserFeeConfig

> Object createEndUserFeeConfig(appId, storeId, input)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EndUserFeesApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let input = new Flipdish.CreateEndUserFeeConfig(); // CreateEndUserFeeConfig | 
apiInstance.createEndUserFeeConfig(appId, storeId, input, (error, data, response) => {
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
 **input** | [**CreateEndUserFeeConfig**](CreateEndUserFeeConfig.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getEndUserFeesForStore

> RestApiResultGetEndUserFeeConfigsResponse getEndUserFeesForStore(appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EndUserFeesApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.getEndUserFeesForStore(appId, storeId, (error, data, response) => {
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

[**RestApiResultGetEndUserFeeConfigsResponse**](RestApiResultGetEndUserFeeConfigsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setV2FeeCalculation

> RestApiResultSetV2FeeCalculationRequest setV2FeeCalculation(appId, storeId, input)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EndUserFeesApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let input = new Flipdish.SetV2FeeCalculationRequest(); // SetV2FeeCalculationRequest | 
apiInstance.setV2FeeCalculation(appId, storeId, input, (error, data, response) => {
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
 **input** | [**SetV2FeeCalculationRequest**](SetV2FeeCalculationRequest.md)|  | 

### Return type

[**RestApiResultSetV2FeeCalculationRequest**](RestApiResultSetV2FeeCalculationRequest.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

