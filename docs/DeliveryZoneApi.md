# Flipdish.DeliveryZoneApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDeliveryZone**](DeliveryZoneApi.md#addDeliveryZone) | **POST** /api/v1.0/stores/{storeId}/deliveryzones | 
[**getDeliveryZones**](DeliveryZoneApi.md#getDeliveryZones) | **GET** /api/v1.0/stores/{storeId}/deliveryzones | 
[**removeDeliveryZone**](DeliveryZoneApi.md#removeDeliveryZone) | **DELETE** /api/v1.0/stores/{storeId}/deliveryzones/{deliveryZoneId} | 
[**updateDeliveryZone**](DeliveryZoneApi.md#updateDeliveryZone) | **POST** /api/v1.0/stores/{storeId}/deliveryzones/{deliveryZoneId} | 



## addDeliveryZone

> RestApiResultDeliveryZone addDeliveryZone(storeId, deliveryZoneBase)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeliveryZoneApi();
let storeId = 56; // Number | 
let deliveryZoneBase = new Flipdish.DeliveryZoneBase(); // DeliveryZoneBase | 
apiInstance.addDeliveryZone(storeId, deliveryZoneBase, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryZoneBase** | [**DeliveryZoneBase**](DeliveryZoneBase.md)|  | 

### Return type

[**RestApiResultDeliveryZone**](RestApiResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getDeliveryZones

> RestApiArrayResultDeliveryZone getDeliveryZones(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeliveryZoneApi();
let storeId = 56; // Number | 
apiInstance.getDeliveryZones(storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultDeliveryZone**](RestApiArrayResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## removeDeliveryZone

> removeDeliveryZone(storeId, deliveryZoneId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeliveryZoneApi();
let storeId = 56; // Number | 
let deliveryZoneId = 56; // Number | 
apiInstance.removeDeliveryZone(storeId, deliveryZoneId, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryZoneId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateDeliveryZone

> RestApiResultDeliveryZone updateDeliveryZone(storeId, deliveryZoneId, deliveryZone)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DeliveryZoneApi();
let storeId = 56; // Number | 
let deliveryZoneId = 56; // Number | 
let deliveryZone = new Flipdish.DeliveryZoneBase(); // DeliveryZoneBase | 
apiInstance.updateDeliveryZone(storeId, deliveryZoneId, deliveryZone, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **deliveryZoneId** | **Number**|  | 
 **deliveryZone** | [**DeliveryZoneBase**](DeliveryZoneBase.md)|  | 

### Return type

[**RestApiResultDeliveryZone**](RestApiResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

