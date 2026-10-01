# Flipdish.PushNotificationsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePushNotification**](PushNotificationsApi.md#deletePushNotification) | **DELETE** /api/v1.0/{appId}/pushnotifications/{scheduledPushNotificationId} | 
[**getPushNotifications**](PushNotificationsApi.md#getPushNotifications) | **GET** /api/v1.0/{appId}/pushnotifications | 
[**schedulePushNotification**](PushNotificationsApi.md#schedulePushNotification) | **POST** /api/v1.0/{appId}/pushnotifications | 
[**updatePushNotification**](PushNotificationsApi.md#updatePushNotification) | **POST** /api/v1.0/{appId}/pushnotifications/{scheduledPushNotificationId} | 



## deletePushNotification

> deletePushNotification(appId, scheduledPushNotificationId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PushNotificationsApi();
let appId = "appId_example"; // String | 
let scheduledPushNotificationId = 56; // Number | 
apiInstance.deletePushNotification(appId, scheduledPushNotificationId, (error, data, response) => {
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
 **scheduledPushNotificationId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getPushNotifications

> RestApiPaginationResultPushNotificationResponse getPushNotifications(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PushNotificationsApi();
let appId = "appId_example"; // String | 
let opts = {
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getPushNotifications(appId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultPushNotificationResponse**](RestApiPaginationResultPushNotificationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## schedulePushNotification

> RestApiResultPushNotificationResponse schedulePushNotification(appId, notification)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PushNotificationsApi();
let appId = "appId_example"; // String | 
let notification = new Flipdish.PushNotificationRequest(); // PushNotificationRequest | 
apiInstance.schedulePushNotification(appId, notification, (error, data, response) => {
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
 **notification** | [**PushNotificationRequest**](PushNotificationRequest.md)|  | 

### Return type

[**RestApiResultPushNotificationResponse**](RestApiResultPushNotificationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updatePushNotification

> RestApiResultPushNotificationResponse updatePushNotification(appId, scheduledPushNotificationId, notification)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.PushNotificationsApi();
let appId = "appId_example"; // String | 
let scheduledPushNotificationId = 56; // Number | 
let notification = new Flipdish.PushNotificationRequest(); // PushNotificationRequest | 
apiInstance.updatePushNotification(appId, scheduledPushNotificationId, notification, (error, data, response) => {
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
 **scheduledPushNotificationId** | **Number**|  | 
 **notification** | [**PushNotificationRequest**](PushNotificationRequest.md)|  | 

### Return type

[**RestApiResultPushNotificationResponse**](RestApiResultPushNotificationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

