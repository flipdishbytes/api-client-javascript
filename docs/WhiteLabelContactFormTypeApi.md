# Flipdish.WhiteLabelContactFormTypeApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppContactFormType**](WhiteLabelContactFormTypeApi.md#getAppContactFormType) | **GET** /api/v1.0/whitelabelconfig/{appId}/contact-form-type | 
[**updateAppContactFormType**](WhiteLabelContactFormTypeApi.md#updateAppContactFormType) | **POST** /api/v1.0/whitelabelconfig/{appId}/contact-form-type | 



## getAppContactFormType

> RestApiResultContactFormTypeConfigModel getAppContactFormType(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelContactFormTypeApi();
let appId = "appId_example"; // String | 
apiInstance.getAppContactFormType(appId, (error, data, response) => {
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

[**RestApiResultContactFormTypeConfigModel**](RestApiResultContactFormTypeConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateAppContactFormType

> RestApiResultContactFormTypeConfigModel updateAppContactFormType(appId, contactFormTypeConfig)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelContactFormTypeApi();
let appId = "appId_example"; // String | 
let contactFormTypeConfig = new Flipdish.ContactFormTypeConfigModel(); // ContactFormTypeConfigModel | 
apiInstance.updateAppContactFormType(appId, contactFormTypeConfig, (error, data, response) => {
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
 **contactFormTypeConfig** | [**ContactFormTypeConfigModel**](ContactFormTypeConfigModel.md)|  | 

### Return type

[**RestApiResultContactFormTypeConfigModel**](RestApiResultContactFormTypeConfigModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

