# Flipdish.DeviceApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignDevice**](DeviceApi.md#assignDevice) | **POST** /api/v1.0/{appId}/devices/assign | 
[**enrollDevice**](DeviceApi.md#enrollDevice) | **POST** /api/v1.0/{appId}/devices/enroll | 
[**getDeviceDetails**](DeviceApi.md#getDeviceDetails) | **GET** /api/v1.0/{appId}/devices/device/{deviceModel}/{deviceId} | 
[**searchDevices**](DeviceApi.md#searchDevices) | **GET** /api/v1.0/{appId}/devices/search | 



## assignDevice

> RestApiResultClientDeviceEnrollmentResult assignDevice(appId, assignDeviceRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeviceApi();
let appId = "appId_example"; // String | 
let assignDeviceRequest = new Flipdish.ClientDeviceAssignEnrolledDevice(); // ClientDeviceAssignEnrolledDevice | 
apiInstance.assignDevice(appId, assignDeviceRequest, (error, data, response) => {
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
 **assignDeviceRequest** | [**ClientDeviceAssignEnrolledDevice**](ClientDeviceAssignEnrolledDevice.md)|  | 

### Return type

[**RestApiResultClientDeviceEnrollmentResult**](RestApiResultClientDeviceEnrollmentResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## enrollDevice

> RestApiResultClientDeviceEnrollmentResult enrollDevice(appId, deviceEnrollmentRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeviceApi();
let appId = "appId_example"; // String | 
let deviceEnrollmentRequest = new Flipdish.ClientDeviceEnroll(); // ClientDeviceEnroll | 
apiInstance.enrollDevice(appId, deviceEnrollmentRequest, (error, data, response) => {
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
 **deviceEnrollmentRequest** | [**ClientDeviceEnroll**](ClientDeviceEnroll.md)|  | 

### Return type

[**RestApiResultClientDeviceEnrollmentResult**](RestApiResultClientDeviceEnrollmentResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getDeviceDetails

> RestApiResultClientDevice getDeviceDetails(appId, deviceModel, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeviceApi();
let appId = "appId_example"; // String | 
let deviceModel = "deviceModel_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.getDeviceDetails(appId, deviceModel, deviceId, (error, data, response) => {
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
 **deviceModel** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultClientDevice**](RestApiResultClientDevice.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## searchDevices

> RestApiArrayResultClientDeviceSummary searchDevices(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeviceApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeId': 56, // Number | 
  'deviceModel': "deviceModel_example" // String | 
};
apiInstance.searchDevices(appId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | [optional] 
 **deviceModel** | **String**|  | [optional] 

### Return type

[**RestApiArrayResultClientDeviceSummary**](RestApiArrayResultClientDeviceSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

