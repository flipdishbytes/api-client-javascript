# Flipdish.WebOrderPageApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebOrderPage**](WebOrderPageApi.md#getWebOrderPage) | **GET** /api/v1.0/apps/{appId}/weborderpage | 
[**setWebOrderPage**](WebOrderPageApi.md#setWebOrderPage) | **POST** /api/v1.0/apps/{appId}/weborderpage | 



## getWebOrderPage

> RestApiResultWebOrderPage getWebOrderPage(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebOrderPageApi();
let appId = "appId_example"; // String | 
apiInstance.getWebOrderPage(appId, (error, data, response) => {
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

[**RestApiResultWebOrderPage**](RestApiResultWebOrderPage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setWebOrderPage

> setWebOrderPage(appId, setWebOrderPage)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebOrderPageApi();
let appId = "appId_example"; // String | 
let setWebOrderPage = new Flipdish.SetWebOrderPage(); // SetWebOrderPage | 
apiInstance.setWebOrderPage(appId, setWebOrderPage, (error, data, response) => {
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
 **setWebOrderPage** | [**SetWebOrderPage**](SetWebOrderPage.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

