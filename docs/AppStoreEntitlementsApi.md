# Flipdish.AppStoreEntitlementsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppStoreAppEntitlements**](AppStoreEntitlementsApi.md#getAppStoreAppEntitlements) | **GET** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/entitlements | 



## getAppStoreAppEntitlements

> RestApiResultAppStoreAppEntitlements getAppStoreAppEntitlements(appId, appStoreAppId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AppStoreEntitlementsApi();
let appId = "appId_example"; // String | 
let appStoreAppId = "appStoreAppId_example"; // String | 
apiInstance.getAppStoreAppEntitlements(appId, appStoreAppId, (error, data, response) => {
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
 **appStoreAppId** | **String**|  | 

### Return type

[**RestApiResultAppStoreAppEntitlements**](RestApiResultAppStoreAppEntitlements.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

