# Flipdish.CardReadersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeStripeTerminal**](CardReadersApi.md#authorizeStripeTerminal) | **POST** /api/v1.0/cardreaders/authorize/stripe | Get Authorization Key for Stripe Terminal
[**authorizeStripeTerminal_0**](CardReadersApi.md#authorizeStripeTerminal_0) | **POST** /api/v1.0/{appId}/stripeterminal/authorize | Get Authorization Key for Stripe Terminal
[**getBluetoothTerminalStatus**](CardReadersApi.md#getBluetoothTerminalStatus) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/status | Get the status of the bluetooth terminal
[**initiateBluetoothTerminalDeviceUpdateCheck**](CardReadersApi.md#initiateBluetoothTerminalDeviceUpdateCheck) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/checkForUpdate | Trigger check for Bluetooth device update on Kiosk
[**initiateKioskBluetoothPairingMode**](CardReadersApi.md#initiateKioskBluetoothPairingMode) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/pair | Initiate stripe terminal pairing mode
[**initiateKioskUpdateInstallForBluetoothTerminal**](CardReadersApi.md#initiateKioskUpdateInstallForBluetoothTerminal) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/installUpdate | 
[**unpairCurrentlyPairedBluetoothDevice**](CardReadersApi.md#unpairCurrentlyPairedBluetoothDevice) | **DELETE** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/unpair | Unpair the currently paired stripe terminal


<a name="authorizeStripeTerminal"></a>
# **authorizeStripeTerminal**
> RestApiResultStripeTerminalPrivateKey authorizeStripeTerminal()

Get Authorization Key for Stripe Terminal

Can only be called by Kiosk  [BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authorizeStripeTerminal(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiResultStripeTerminalPrivateKey**](RestApiResultStripeTerminalPrivateKey.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="authorizeStripeTerminal_0"></a>
# **authorizeStripeTerminal_0**
> RestApiResultStripeTerminalPrivateKey authorizeStripeTerminal_0(appId)

Get Authorization Key for Stripe Terminal

Can only be called by Kiosk  [BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authorizeStripeTerminal_0(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiResultStripeTerminalPrivateKey**](RestApiResultStripeTerminalPrivateKey.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBluetoothTerminalStatus"></a>
# **getBluetoothTerminalStatus**
> RestApiResultBluetoothTerminalStatus getBluetoothTerminalStatus(appId, deviceId)

Get the status of the bluetooth terminal

[BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBluetoothTerminalStatus(appId, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultBluetoothTerminalStatus**](RestApiResultBluetoothTerminalStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="initiateBluetoothTerminalDeviceUpdateCheck"></a>
# **initiateBluetoothTerminalDeviceUpdateCheck**
> initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType)

Trigger check for Bluetooth device update on Kiosk

[BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var terminalType = "terminalType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="initiateKioskBluetoothPairingMode"></a>
# **initiateKioskBluetoothPairingMode**
> initiateKioskBluetoothPairingMode(appId, deviceId, terminalType)

Initiate stripe terminal pairing mode

[BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var terminalType = "terminalType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.initiateKioskBluetoothPairingMode(appId, deviceId, terminalType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="initiateKioskUpdateInstallForBluetoothTerminal"></a>
# **initiateKioskUpdateInstallForBluetoothTerminal**
> initiateKioskUpdateInstallForBluetoothTerminal(appId, deviceId, terminalType)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var terminalType = "terminalType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.initiateKioskUpdateInstallForBluetoothTerminal(appId, deviceId, terminalType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unpairCurrentlyPairedBluetoothDevice"></a>
# **unpairCurrentlyPairedBluetoothDevice**
> unpairCurrentlyPairedBluetoothDevice(appId, deviceId)

Unpair the currently paired stripe terminal

[BETA - this endpoint is under development, do not use it in your production system]

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var appId = "appId_example"; // String | 

var deviceId = "deviceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unpairCurrentlyPairedBluetoothDevice(appId, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

