# Flipdish.TipsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tipConfigGet**](TipsApi.md#tipConfigGet) | **GET** /api/v1.0/stores/{storeId}/tipconfig | 
[**tipConfigUpsert**](TipsApi.md#tipConfigUpsert) | **POST** /api/v1.0/stores/{storeId}/tipconfig | 



## tipConfigGet

> RestApiResultTipConfiguration tipConfigGet(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TipsApi();
let storeId = 56; // Number | 
apiInstance.tipConfigGet(storeId, (error, data, response) => {
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

[**RestApiResultTipConfiguration**](RestApiResultTipConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## tipConfigUpsert

> RestApiResultTipConfiguration tipConfigUpsert(storeId, updateConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TipsApi();
let storeId = 56; // Number | 
let updateConfig = new Flipdish.UpdateTipConfiguration(); // UpdateTipConfiguration | 
apiInstance.tipConfigUpsert(storeId, updateConfig, (error, data, response) => {
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
 **updateConfig** | [**UpdateTipConfiguration**](UpdateTipConfiguration.md)|  | 

### Return type

[**RestApiResultTipConfiguration**](RestApiResultTipConfiguration.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

