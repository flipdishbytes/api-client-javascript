# Flipdish.OrderBatchingConfigurationApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](OrderBatchingConfigurationApi.md#get) | **GET** /api/v1.0/stores/{storeId}/order-batching-configuration | 
[**post**](OrderBatchingConfigurationApi.md#post) | **POST** /api/v1.0/stores/{storeId}/order-batching-configuration | 



## get

> RestApiResultOrderBatchingConfiguration get(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrderBatchingConfigurationApi();
let storeId = 56; // Number | 
apiInstance.get(storeId, (error, data, response) => {
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

[**RestApiResultOrderBatchingConfiguration**](RestApiResultOrderBatchingConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## post

> post(storeId, setOrderBatchingConfiguration)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrderBatchingConfigurationApi();
let storeId = 56; // Number | 
let setOrderBatchingConfiguration = new Flipdish.SetOrderBatchingConfiguration(); // SetOrderBatchingConfiguration | 
apiInstance.post(storeId, setOrderBatchingConfiguration, (error, data, response) => {
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
 **setOrderBatchingConfiguration** | [**SetOrderBatchingConfiguration**](SetOrderBatchingConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

