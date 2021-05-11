# Flipdish.DeliveryTrackingApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignDriverToOrder**](DeliveryTrackingApi.md#assignDriverToOrder) | **POST** /api/v1.0/{appId}/drivers/{driverId}/orders/{orderId} | [PRIVATE] Assign driver to order
[**assignDriverToOrders**](DeliveryTrackingApi.md#assignDriverToOrders) | **POST** /api/v1.0/{appId}/drivers/{driverId}/orders | Assign driver to multiple orders
[**getDrivers**](DeliveryTrackingApi.md#getDrivers) | **GET** /api/v1.0/{appId}/drivers | [PRIVATE] Get drivers by App
[**inviteDriverToApp**](DeliveryTrackingApi.md#inviteDriverToApp) | **POST** /api/v1.0/{appId}/drivers | [PRIVATE] Invite driver
[**removeDriverFromApp**](DeliveryTrackingApi.md#removeDriverFromApp) | **DELETE** /api/v1.0/{appId}/drivers/{driverId} | [PRIVATE] Unassign driver from app
[**unassignDriverFromOrder**](DeliveryTrackingApi.md#unassignDriverFromOrder) | **DELETE** /api/v1.0/{appId}/orders/{orderId}/driver | [PRIVATE] Unassign driver from order


<a name="assignDriverToOrder"></a>
# **assignDriverToOrder**
> assignDriverToOrder(appId, orderId, driverId)

[PRIVATE] Assign driver to order

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var orderId = 56; // Number | Order Id

var driverId = 56; // Number | Driver Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignDriverToOrder(appId, orderId, driverId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **orderId** | **Number**| Order Id | 
 **driverId** | **Number**| Driver Id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="assignDriverToOrders"></a>
# **assignDriverToOrders**
> assignDriverToOrders(appId, driverId, orderIdAndSequenceNumbers)

Assign driver to multiple orders

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var driverId = 56; // Number | Driver Id

var orderIdAndSequenceNumbers = [new Flipdish.OrderIdAndSequenceNumber()]; // [OrderIdAndSequenceNumber] | Array of object containing OrderId and Sequence


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignDriverToOrders(appId, driverId, orderIdAndSequenceNumbers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **driverId** | **Number**| Driver Id | 
 **orderIdAndSequenceNumbers** | [**[OrderIdAndSequenceNumber]**](OrderIdAndSequenceNumber.md)| Array of object containing OrderId and Sequence | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getDrivers"></a>
# **getDrivers**
> RestApiArrayResultDriver getDrivers(appId, opts)

[PRIVATE] Get drivers by App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var opts = { 
  'name': "name_example", // String | Driver's username
  'phoneNumber': "phoneNumber_example", // String | Driver's phone number
  'storeId': 56, // Number | Store Id
  'presence': "presence_example" // String | Offline/Online
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDrivers(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **name** | **String**| Driver's username | [optional] 
 **phoneNumber** | **String**| Driver's phone number | [optional] 
 **storeId** | **Number**| Store Id | [optional] 
 **presence** | **String**| Offline/Online | [optional] 

### Return type

[**RestApiArrayResultDriver**](RestApiArrayResultDriver.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="inviteDriverToApp"></a>
# **inviteDriverToApp**
> RestApiResultDriver inviteDriverToApp(appId, driverInvitation)

[PRIVATE] Invite driver

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var driverInvitation = new Flipdish.DriverInvitation(); // DriverInvitation | Driver invitation model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inviteDriverToApp(appId, driverInvitation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **driverInvitation** | [**DriverInvitation**](DriverInvitation.md)| Driver invitation model | 

### Return type

[**RestApiResultDriver**](RestApiResultDriver.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeDriverFromApp"></a>
# **removeDriverFromApp**
> removeDriverFromApp(appId, driverId)

[PRIVATE] Unassign driver from app

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var driverId = 56; // Number | Driver Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeDriverFromApp(appId, driverId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **driverId** | **Number**| Driver Id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unassignDriverFromOrder"></a>
# **unassignDriverFromOrder**
> unassignDriverFromOrder(appId, orderId)

[PRIVATE] Unassign driver from order

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.DeliveryTrackingApi();

var appId = "appId_example"; // String | Application identifier

var orderId = 56; // Number | Order Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unassignDriverFromOrder(appId, orderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **orderId** | **Number**| Order Id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

