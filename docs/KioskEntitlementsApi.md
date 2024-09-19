# Flipdish.KioskEntitlementsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryKioskEntitlements**](KioskEntitlementsApi.md#queryKioskEntitlements) | **GET** /api/v1.0/{appId}/kiosk/entitlements | 
[**queryKioskEntitlementsByOrgId**](KioskEntitlementsApi.md#queryKioskEntitlementsByOrgId) | **GET** /api/v1.0/orgs/{orgId}/kiosk/entitlements | 



## queryKioskEntitlements

> RestApiResultKioskEntitlementsResult queryKioskEntitlements(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.KioskEntitlementsApi();
let appId = "appId_example"; // String | 
apiInstance.queryKioskEntitlements(appId, (error, data, response) => {
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

[**RestApiResultKioskEntitlementsResult**](RestApiResultKioskEntitlementsResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## queryKioskEntitlementsByOrgId

> RestApiResultKioskEntitlementsResult queryKioskEntitlementsByOrgId(orgId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.KioskEntitlementsApi();
let orgId = "orgId_example"; // String | 
apiInstance.queryKioskEntitlementsByOrgId(orgId, (error, data, response) => {
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
 **orgId** | **String**|  | 

### Return type

[**RestApiResultKioskEntitlementsResult**](RestApiResultKioskEntitlementsResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

