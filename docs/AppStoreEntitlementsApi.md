# Flipdish.AppStoreEntitlementsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppStoreAppEntitlements**](AppStoreEntitlementsApi.md#getAppStoreAppEntitlements) | **GET** /api/v1.0/{appId}/appstore/apps/{appStoreAppId}/entitlements | 


<a name="getAppStoreAppEntitlements"></a>
# **getAppStoreAppEntitlements**
> RestApiResultAppStoreAppEntitlements getAppStoreAppEntitlements(appId, appStoreAppId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AppStoreEntitlementsApi();

var appId = "appId_example"; // String | 

var appStoreAppId = "appStoreAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppStoreAppEntitlements(appId, appStoreAppId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

