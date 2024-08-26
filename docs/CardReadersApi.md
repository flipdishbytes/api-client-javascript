# Flipdish.CardReadersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCurrentlyInitiatedBluetoothDeviceUpdate**](CardReadersApi.md#cancelCurrentlyInitiatedBluetoothDeviceUpdate) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/cancelUpdate | 
[**cancelReaderAction**](CardReadersApi.md#cancelReaderAction) | **POST** /api/v1.0/{appId}/payments/terminals/stripe/{readerId}/cancel_action | 
[**cardReadersGetReader**](CardReadersApi.md#cardReadersGetReader) | **GET** /api/v1.0/{appId}/payments/terminals/stripe/{readerId} | 
[**generateStripeTerminalLocation**](CardReadersApi.md#generateStripeTerminalLocation) | **POST** /api/v1.0/{appId}/stripeterminal/location | 
[**getBluetoothTerminalStatus**](CardReadersApi.md#getBluetoothTerminalStatus) | **GET** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/status | 
[**getStripeConnectionToken**](CardReadersApi.md#getStripeConnectionToken) | **GET** /api/v1.0/{appId}/stripeterminal/connectiontoken | 
[**initiateBluetoothTerminalDeviceUpdateCheck**](CardReadersApi.md#initiateBluetoothTerminalDeviceUpdateCheck) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/checkForUpdate | 
[**initiateKioskBluetoothPairingMode**](CardReadersApi.md#initiateKioskBluetoothPairingMode) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/pair | 
[**initiateKioskBluetoothUpdateInstall**](CardReadersApi.md#initiateKioskBluetoothUpdateInstall) | **POST** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/{terminalType}/installUpdate | 
[**initiateReaderProcessPaymentIntent**](CardReadersApi.md#initiateReaderProcessPaymentIntent) | **POST** /api/v1.0/{appId}/payments/terminals/stripe/{readerId}/processPaymentIntent | 
[**registerStripeTerminal**](CardReadersApi.md#registerStripeTerminal) | **POST** /api/v1.0/{appId}/payments/terminals/stripe/register | 
[**unRegisterTerminal**](CardReadersApi.md#unRegisterTerminal) | **DELETE** /api/v1.0/{appId}/payments/terminals/stripe/unregister | 
[**unpairCurrentlyPairedBluetoothDevice**](CardReadersApi.md#unpairCurrentlyPairedBluetoothDevice) | **DELETE** /api/v1.0/{appId}/cardreaders/kiosk/{deviceId}/bluetooth/unpair | 


<a name="cancelCurrentlyInitiatedBluetoothDeviceUpdate"></a>
# **cancelCurrentlyInitiatedBluetoothDeviceUpdate**
> cancelCurrentlyInitiatedBluetoothDeviceUpdate(appId, deviceId, terminalType)



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
apiInstance.cancelCurrentlyInitiatedBluetoothDeviceUpdate(appId, deviceId, terminalType, callback);
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

<a name="cancelReaderAction"></a>
# **cancelReaderAction**
> RestApiResultCardReader cancelReaderAction(readerId, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var readerId = "readerId_example"; // String | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelReaderAction(readerId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readerId** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="cardReadersGetReader"></a>
# **cardReadersGetReader**
> RestApiResultCardReader cardReadersGetReader(readerId, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var readerId = "readerId_example"; // String | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cardReadersGetReader(readerId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readerId** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="generateStripeTerminalLocation"></a>
# **generateStripeTerminalLocation**
> RestApiResultStripeTerminalLocation generateStripeTerminalLocation(geoPointRequest, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var geoPointRequest = new Flipdish.GeoPointRequest(); // GeoPointRequest | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateStripeTerminalLocation(geoPointRequest, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **geoPointRequest** | [**GeoPointRequest**](GeoPointRequest.md)|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultStripeTerminalLocation**](RestApiResultStripeTerminalLocation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBluetoothTerminalStatus"></a>
# **getBluetoothTerminalStatus**
> RestApiResultBluetoothTerminalStatus getBluetoothTerminalStatus(appId, deviceId)



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

<a name="getStripeConnectionToken"></a>
# **getStripeConnectionToken**
> RestApiResultStripeTerminalConnectionToken getStripeConnectionToken(appId)



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
apiInstance.getStripeConnectionToken(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiResultStripeTerminalConnectionToken**](RestApiResultStripeTerminalConnectionToken.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="initiateBluetoothTerminalDeviceUpdateCheck"></a>
# **initiateBluetoothTerminalDeviceUpdateCheck**
> initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType)



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

<a name="initiateKioskBluetoothUpdateInstall"></a>
# **initiateKioskBluetoothUpdateInstall**
> initiateKioskBluetoothUpdateInstall(appId, deviceId, terminalType)



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
apiInstance.initiateKioskBluetoothUpdateInstall(appId, deviceId, terminalType, callback);
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

<a name="initiateReaderProcessPaymentIntent"></a>
# **initiateReaderProcessPaymentIntent**
> RestApiResultCardReader initiateReaderProcessPaymentIntent(request, readerId, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var request = new Flipdish.ProcessPaymentIntentRequest(); // ProcessPaymentIntentRequest | 

var readerId = "readerId_example"; // String | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.initiateReaderProcessPaymentIntent(request, readerId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ProcessPaymentIntentRequest**](ProcessPaymentIntentRequest.md)|  | 
 **readerId** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="registerStripeTerminal"></a>
# **registerStripeTerminal**
> RestApiResultCardReader registerStripeTerminal(request, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var request = new Flipdish.CardReaderRegistrationRequest(); // CardReaderRegistrationRequest | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerStripeTerminal(request, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CardReaderRegistrationRequest**](CardReaderRegistrationRequest.md)|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unRegisterTerminal"></a>
# **unRegisterTerminal**
> RestApiResultCardReader unRegisterTerminal(request, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CardReadersApi();

var request = new Flipdish.UnRegisterCardReaderRequest(); // UnRegisterCardReaderRequest | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unRegisterTerminal(request, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UnRegisterCardReaderRequest**](UnRegisterCardReaderRequest.md)|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="unpairCurrentlyPairedBluetoothDevice"></a>
# **unpairCurrentlyPairedBluetoothDevice**
> unpairCurrentlyPairedBluetoothDevice(appId, deviceId)



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

