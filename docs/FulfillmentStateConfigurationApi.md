# Flipdish.FulfillmentStateConfigurationApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFulfillmentStatesConfig**](FulfillmentStateConfigurationApi.md#createFulfillmentStatesConfig) | **POST** /api/v1.0/{appId}/fulfillment/configuration/states | 
[**deleteFulfillmentStatesConfig**](FulfillmentStateConfigurationApi.md#deleteFulfillmentStatesConfig) | **DELETE** /api/v1.0/{appId}/fulfillment/configuration/states/{configId} | 
[**getFulfillmentStatesConfiguration**](FulfillmentStateConfigurationApi.md#getFulfillmentStatesConfiguration) | **GET** /api/v1.0/{appId}/fulfillment/configuration/states/{configId} | 
[**getFulfillmentStatesConfigurationTemplate**](FulfillmentStateConfigurationApi.md#getFulfillmentStatesConfigurationTemplate) | **GET** /api/v1.0/{appId}/fulfillment/configuration/states_template | 
[**searchFulfillmentStatesConfigurations**](FulfillmentStateConfigurationApi.md#searchFulfillmentStatesConfigurations) | **GET** /api/v1.0/{appId}/fulfillment/configuration/states | 
[**updateFulfillmentStatesConfig**](FulfillmentStateConfigurationApi.md#updateFulfillmentStatesConfig) | **POST** /api/v1.0/{appId}/fulfillment/configuration/states/{configId} | 



## createFulfillmentStatesConfig

> RestApiResultFulfillmentStatesConfiguration createFulfillmentStatesConfig(appId, fulfillmentStateConfiguration)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
let fulfillmentStateConfiguration = new Flipdish.CreateFulfillmentStatesConfiguration(); // CreateFulfillmentStatesConfiguration | 
apiInstance.createFulfillmentStatesConfig(appId, fulfillmentStateConfiguration, (error, data, response) => {
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
 **fulfillmentStateConfiguration** | [**CreateFulfillmentStatesConfiguration**](CreateFulfillmentStatesConfiguration.md)|  | 

### Return type

[**RestApiResultFulfillmentStatesConfiguration**](RestApiResultFulfillmentStatesConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## deleteFulfillmentStatesConfig

> RestApiStringResult deleteFulfillmentStatesConfig(appId, configId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
let configId = "configId_example"; // String | 
apiInstance.deleteFulfillmentStatesConfig(appId, configId, (error, data, response) => {
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
 **configId** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getFulfillmentStatesConfiguration

> FulfillmentStatesConfiguration getFulfillmentStatesConfiguration(appId, configId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
let configId = "configId_example"; // String | 
apiInstance.getFulfillmentStatesConfiguration(appId, configId, (error, data, response) => {
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
 **configId** | **String**|  | 

### Return type

[**FulfillmentStatesConfiguration**](FulfillmentStatesConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, States, StoreSelectorType, StoreIds, Name, Message, ErrorCode, StackTrace


## getFulfillmentStatesConfigurationTemplate

> FulfillmentStatesConfiguration getFulfillmentStatesConfigurationTemplate(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
apiInstance.getFulfillmentStatesConfigurationTemplate(appId, (error, data, response) => {
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

[**FulfillmentStatesConfiguration**](FulfillmentStatesConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, States, StoreSelectorType, StoreIds, Name, Message, ErrorCode, StackTrace


## searchFulfillmentStatesConfigurations

> RestApiArrayResultFulfillmentStatesConfigurationSummary searchFulfillmentStatesConfigurations(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
apiInstance.searchFulfillmentStatesConfigurations(appId, (error, data, response) => {
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

[**RestApiArrayResultFulfillmentStatesConfigurationSummary**](RestApiArrayResultFulfillmentStatesConfigurationSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateFulfillmentStatesConfig

> updateFulfillmentStatesConfig(appId, configId, updateFulfillmentStatesConfiguration)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FulfillmentStateConfigurationApi();
let appId = "appId_example"; // String | 
let configId = "configId_example"; // String | 
let updateFulfillmentStatesConfiguration = new Flipdish.UpdateFulfillmentStatesConfiguration(); // UpdateFulfillmentStatesConfiguration | 
apiInstance.updateFulfillmentStatesConfig(appId, configId, updateFulfillmentStatesConfiguration, (error, data, response) => {
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
 **configId** | **String**|  | 
 **updateFulfillmentStatesConfiguration** | [**UpdateFulfillmentStatesConfiguration**](UpdateFulfillmentStatesConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace

