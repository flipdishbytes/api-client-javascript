# Flipdish.HomeApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeHomeAction**](HomeApi.md#completeHomeAction) | **POST** /api/v1.0/{appId}/home/{homeActionId} | 
[**getHomeActions**](HomeApi.md#getHomeActions) | **GET** /api/v1.0/{appId}/home | 
[**getHomeStatistics**](HomeApi.md#getHomeStatistics) | **GET** /api/v1.0/{appId}/home/stats | 
[**getOktaPortalFeatureFlag**](HomeApi.md#getOktaPortalFeatureFlag) | **GET** /api/v1.0/home/okta-portal | 



## completeHomeAction

> Object completeHomeAction(appId, homeActionId, isDismissed)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HomeApi();
let appId = "appId_example"; // String | 
let homeActionId = 56; // Number | 
let isDismissed = true; // Boolean | 
apiInstance.completeHomeAction(appId, homeActionId, isDismissed, (error, data, response) => {
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
 **homeActionId** | **Number**|  | 
 **isDismissed** | **Boolean**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getHomeActions

> RestApiArrayResultHomeAction getHomeActions(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HomeApi();
let appId = "appId_example"; // String | 
apiInstance.getHomeActions(appId, (error, data, response) => {
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

[**RestApiArrayResultHomeAction**](RestApiArrayResultHomeAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getHomeStatistics

> RestApiResultHomeStatistics getHomeStatistics(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HomeApi();
let appId = "appId_example"; // String | 
apiInstance.getHomeStatistics(appId, (error, data, response) => {
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

[**RestApiResultHomeStatistics**](RestApiResultHomeStatistics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getOktaPortalFeatureFlag

> RestApiResultOktaPortalFeatureFlag getOktaPortalFeatureFlag()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.HomeApi();
apiInstance.getOktaPortalFeatureFlag((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestApiResultOktaPortalFeatureFlag**](RestApiResultOktaPortalFeatureFlag.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

