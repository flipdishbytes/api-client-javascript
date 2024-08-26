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



## cancelCurrentlyInitiatedBluetoothDeviceUpdate

> cancelCurrentlyInitiatedBluetoothDeviceUpdate(appId, deviceId, terminalType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let terminalType = "terminalType_example"; // String | 
apiInstance.cancelCurrentlyInitiatedBluetoothDeviceUpdate(appId, deviceId, terminalType, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## cancelReaderAction

> RestApiResultCardReader cancelReaderAction(readerId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let readerId = "readerId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.cancelReaderAction(readerId, appId, (error, data, response) => {
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
 **readerId** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## cardReadersGetReader

> RestApiResultCardReader cardReadersGetReader(readerId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let readerId = "readerId_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.cardReadersGetReader(readerId, appId, (error, data, response) => {
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
 **readerId** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## generateStripeTerminalLocation

> RestApiResultStripeTerminalLocation generateStripeTerminalLocation(appId, geoPointRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let geoPointRequest = new Flipdish.GeoPointRequest(); // GeoPointRequest | 
apiInstance.generateStripeTerminalLocation(appId, geoPointRequest, (error, data, response) => {
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
 **geoPointRequest** | [**GeoPointRequest**](GeoPointRequest.md)|  | 

### Return type

[**RestApiResultStripeTerminalLocation**](RestApiResultStripeTerminalLocation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBluetoothTerminalStatus

> RestApiResultBluetoothTerminalStatus getBluetoothTerminalStatus(appId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.getBluetoothTerminalStatus(appId, deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

[**RestApiResultBluetoothTerminalStatus**](RestApiResultBluetoothTerminalStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStripeConnectionToken

> RestApiResultStripeTerminalConnectionToken getStripeConnectionToken(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
apiInstance.getStripeConnectionToken(appId, (error, data, response) => {
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

[**RestApiResultStripeTerminalConnectionToken**](RestApiResultStripeTerminalConnectionToken.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## initiateBluetoothTerminalDeviceUpdateCheck

> initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let terminalType = "terminalType_example"; // String | 
apiInstance.initiateBluetoothTerminalDeviceUpdateCheck(appId, deviceId, terminalType, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## initiateKioskBluetoothPairingMode

> initiateKioskBluetoothPairingMode(appId, deviceId, terminalType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let terminalType = "terminalType_example"; // String | 
apiInstance.initiateKioskBluetoothPairingMode(appId, deviceId, terminalType, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## initiateKioskBluetoothUpdateInstall

> initiateKioskBluetoothUpdateInstall(appId, deviceId, terminalType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let terminalType = "terminalType_example"; // String | 
apiInstance.initiateKioskBluetoothUpdateInstall(appId, deviceId, terminalType, (error, data, response) => {
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
 **deviceId** | **String**|  | 
 **terminalType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## initiateReaderProcessPaymentIntent

> RestApiResultCardReader initiateReaderProcessPaymentIntent(readerId, appId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let readerId = "readerId_example"; // String | 
let appId = "appId_example"; // String | 
let request = new Flipdish.ProcessPaymentIntentRequest(); // ProcessPaymentIntentRequest | 
apiInstance.initiateReaderProcessPaymentIntent(readerId, appId, request, (error, data, response) => {
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
 **readerId** | **String**|  | 
 **appId** | **String**|  | 
 **request** | [**ProcessPaymentIntentRequest**](ProcessPaymentIntentRequest.md)|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## registerStripeTerminal

> RestApiResultCardReader registerStripeTerminal(appId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let request = new Flipdish.CardReaderRegistrationRequest(); // CardReaderRegistrationRequest | 
apiInstance.registerStripeTerminal(appId, request, (error, data, response) => {
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
 **request** | [**CardReaderRegistrationRequest**](CardReaderRegistrationRequest.md)|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## unRegisterTerminal

> RestApiResultCardReader unRegisterTerminal(appId, request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let request = new Flipdish.UnRegisterCardReaderRequest(); // UnRegisterCardReaderRequest | 
apiInstance.unRegisterTerminal(appId, request, (error, data, response) => {
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
 **request** | [**UnRegisterCardReaderRequest**](UnRegisterCardReaderRequest.md)|  | 

### Return type

[**RestApiResultCardReader**](RestApiResultCardReader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## unpairCurrentlyPairedBluetoothDevice

> unpairCurrentlyPairedBluetoothDevice(appId, deviceId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CardReadersApi();
let appId = "appId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
apiInstance.unpairCurrentlyPairedBluetoothDevice(appId, deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

