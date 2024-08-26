# Flipdish.FpmApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFpmForStore**](FpmApi.md#createFpmForStore) | **POST** /api/v1.0/{storeId}/fpm | 
[**editFpmForStore**](FpmApi.md#editFpmForStore) | **POST** /api/v1.0/{storeId}/fpm/edit | 



## createFpmForStore

> Object createFpmForStore(storeId, phoneNumber)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FpmApi();
let storeId = 56; // Number | 
let phoneNumber = "phoneNumber_example"; // String | 
apiInstance.createFpmForStore(storeId, phoneNumber, (error, data, response) => {
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
 **phoneNumber** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## editFpmForStore

> editFpmForStore(storeId, telephonyConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FpmApi();
let storeId = 56; // Number | 
let telephonyConfig = new Flipdish.TelephonyConfig(); // TelephonyConfig | 
apiInstance.editFpmForStore(storeId, telephonyConfig, (error, data, response) => {
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
 **telephonyConfig** | [**TelephonyConfig**](TelephonyConfig.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

