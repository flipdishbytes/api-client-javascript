# FlipdishOpenApiV10.PushNotificationsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePushNotification**](PushNotificationsApi.md#deletePushNotification) | **DELETE** /api/v1.0/{appId}/pushnotifications/{scheduledPushNotificationId} | [PRIVATE] Push notification to cutomers
[**getPushNotifications**](PushNotificationsApi.md#getPushNotifications) | **GET** /api/v1.0/{appId}/pushnotifications | [PRIVATE] Push notification to cutomers
[**schedulePushNotification**](PushNotificationsApi.md#schedulePushNotification) | **POST** /api/v1.0/{appId}/pushnotifications | [PRIVATE] Push notification to cutomers
[**updatePushNotification**](PushNotificationsApi.md#updatePushNotification) | **POST** /api/v1.0/{appId}/pushnotifications/{scheduledPushNotificationId} | [PRIVATE] Update the push notification


<a name="deletePushNotification"></a>
# **deletePushNotification**
> deletePushNotification(appId, scheduledPushNotificationId)

[PRIVATE] Push notification to cutomers

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PushNotificationsApi();

var appId = "appId_example"; // String | 

var scheduledPushNotificationId = 56; // Number | ID of Scheduled push notifiaction to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePushNotification(appId, scheduledPushNotificationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **scheduledPushNotificationId** | **Number**| ID of Scheduled push notifiaction to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPushNotifications"></a>
# **getPushNotifications**
> RestApiPaginationResultPushNotificationResponse getPushNotifications(appId, opts)

[PRIVATE] Push notification to cutomers

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PushNotificationsApi();

var appId = "appId_example"; // String | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPushNotifications(appId, opts, callback);
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

<a name="schedulePushNotification"></a>
# **schedulePushNotification**
> RestApiResultPushNotificationResponse schedulePushNotification(appId, notification)

[PRIVATE] Push notification to cutomers

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PushNotificationsApi();

var appId = "appId_example"; // String | Application Id

var notification = new FlipdishOpenApiV10.PushNotificationRequest(); // PushNotificationRequest | Notification to send


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.schedulePushNotification(appId, notification, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application Id | 
 **notification** | [**PushNotificationRequest**](PushNotificationRequest.md)| Notification to send | 

### Return type

[**RestApiResultPushNotificationResponse**](RestApiResultPushNotificationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updatePushNotification"></a>
# **updatePushNotification**
> RestApiResultPushNotificationResponse updatePushNotification(appId, scheduledPushNotificationId, notification)

[PRIVATE] Update the push notification

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.PushNotificationsApi();

var appId = "appId_example"; // String | Application Id

var scheduledPushNotificationId = 56; // Number | Notification Id

var notification = new FlipdishOpenApiV10.PushNotificationRequest(); // PushNotificationRequest | Notification to send


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePushNotification(appId, scheduledPushNotificationId, notification, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application Id | 
 **scheduledPushNotificationId** | **Number**| Notification Id | 
 **notification** | [**PushNotificationRequest**](PushNotificationRequest.md)| Notification to send | 

### Return type

[**RestApiResultPushNotificationResponse**](RestApiResultPushNotificationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

