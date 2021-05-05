# FlipdishOpenApiV10.DriversApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDriverNotificationToken**](DriversApi.md#addDriverNotificationToken) | **POST** /api/v1.0/drivers/token | Add driver token
[**deleteDriverProfileImage**](DriversApi.md#deleteDriverProfileImage) | **DELETE** /api/v1.0/drivers/profile/image | Delete driver profile image
[**driverLogin**](DriversApi.md#driverLogin) | **POST** /api/v1.0/drivers/login | [PRIVATE] Login with phone number and pin
[**driverRequestLoginCodeSms**](DriversApi.md#driverRequestLoginCodeSms) | **POST** /api/v1.0/drivers/pin | [PRIVATE] Request an SMS to be sent to the driver with their login code
[**getDriverProfile**](DriversApi.md#getDriverProfile) | **GET** /api/v1.0/drivers/profile | Get driver profile
[**getStoresForDriver**](DriversApi.md#getStoresForDriver) | **GET** /api/v1.0/drivers/assignedstores | Get stores for driver
[**removeDriverNotificationToken**](DriversApi.md#removeDriverNotificationToken) | **DELETE** /api/v1.0/drivers/token | Delete driver token
[**setDriverPresenceForStore**](DriversApi.md#setDriverPresenceForStore) | **POST** /api/v1.0/drivers/stores/{storeId}/presence/{presence} | 
[**setDriverProfileImage**](DriversApi.md#setDriverProfileImage) | **POST** /api/v1.0/drivers/profile/image | Set driver profile image and returns it's url
[**updateDeliveryTrackingStatus**](DriversApi.md#updateDeliveryTrackingStatus) | **POST** /api/v1.0/orders/{orderId}/tracking/{deliveryTrackingStatus} | Change delivery tracking status and return the updated status.
[**updateDriverProfile**](DriversApi.md#updateDriverProfile) | **POST** /api/v1.0/drivers/profile | Update driver profile


<a name="addDriverNotificationToken"></a>
# **addDriverNotificationToken**
> addDriverNotificationToken(updateDriverToken)

Add driver token

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var updateDriverToken = new FlipdishOpenApiV10.UpdateDriverNotificationToken(); // UpdateDriverNotificationToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDriverNotificationToken(updateDriverToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDriverToken** | [**UpdateDriverNotificationToken**](UpdateDriverNotificationToken.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteDriverProfileImage"></a>
# **deleteDriverProfileImage**
> deleteDriverProfileImage()

Delete driver profile image

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDriverProfileImage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="driverLogin"></a>
# **driverLogin**
> driverLogin(driverLoginModel)

[PRIVATE] Login with phone number and pin

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var driverLoginModel = new FlipdishOpenApiV10.DriverLoginModel(); // DriverLoginModel | Driver request login code model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.driverLogin(driverLoginModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driverLoginModel** | [**DriverLoginModel**](DriverLoginModel.md)| Driver request login code model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="driverRequestLoginCodeSms"></a>
# **driverRequestLoginCodeSms**
> driverRequestLoginCodeSms(driverRequestLoginPinModel)

[PRIVATE] Request an SMS to be sent to the driver with their login code

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var driverRequestLoginPinModel = new FlipdishOpenApiV10.DriverRequestLoginPinModel(); // DriverRequestLoginPinModel | Driver request login code model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.driverRequestLoginCodeSms(driverRequestLoginPinModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driverRequestLoginPinModel** | [**DriverRequestLoginPinModel**](DriverRequestLoginPinModel.md)| Driver request login code model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getDriverProfile"></a>
# **getDriverProfile**
> RestApiResultDriver getDriverProfile()

Get driver profile

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverProfile(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiResultDriver**](RestApiResultDriver.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoresForDriver"></a>
# **getStoresForDriver**
> RestApiArrayResultDriverStore getStoresForDriver()

Get stores for driver

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoresForDriver(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiArrayResultDriverStore**](RestApiArrayResultDriverStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeDriverNotificationToken"></a>
# **removeDriverNotificationToken**
> removeDriverNotificationToken(removeDriverToken)

Delete driver token

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var removeDriverToken = new FlipdishOpenApiV10.UpdateDriverNotificationToken(); // UpdateDriverNotificationToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeDriverNotificationToken(removeDriverToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeDriverToken** | [**UpdateDriverNotificationToken**](UpdateDriverNotificationToken.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setDriverPresenceForStore"></a>
# **setDriverPresenceForStore**
> setDriverPresenceForStore(storeId, presence)



### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var storeId = 56; // Number | 

var presence = "presence_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setDriverPresenceForStore(storeId, presence, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | 
 **presence** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setDriverProfileImage"></a>
# **setDriverProfileImage**
> RestApiStringResult setDriverProfileImage()

Set driver profile image and returns it's url

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setDriverProfileImage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateDeliveryTrackingStatus"></a>
# **updateDeliveryTrackingStatus**
> RestApiStringResult updateDeliveryTrackingStatus(orderId, deliveryTrackingStatus)

Change delivery tracking status and return the updated status.

...

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var orderId = 56; // Number | Order identifier

var deliveryTrackingStatus = "deliveryTrackingStatus_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeliveryTrackingStatus(orderId, deliveryTrackingStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Order identifier | 
 **deliveryTrackingStatus** | **String**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateDriverProfile"></a>
# **updateDriverProfile**
> updateDriverProfile(updateDriverProfile)

Update driver profile

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DriversApi();

var updateDriverProfile = new FlipdishOpenApiV10.UpdateDriverProfileModel(); // UpdateDriverProfileModel | Update the driver profile (i.e Name)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDriverProfile(updateDriverProfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDriverProfile** | [**UpdateDriverProfileModel**](UpdateDriverProfileModel.md)| Update the driver profile (i.e Name) | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

