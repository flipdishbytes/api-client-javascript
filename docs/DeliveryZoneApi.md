# FlipdishOpenApiV10.DeliveryZoneApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDeliveryZone**](DeliveryZoneApi.md#addDeliveryZone) | **POST** /api/v1.0/stores/{storeId}/deliveryzones | Adds a delivery zone to the store id
[**getDeliveryZones**](DeliveryZoneApi.md#getDeliveryZones) | **GET** /api/v1.0/stores/{storeId}/deliveryzones | Get all the delivery zones associated with a store
[**removeDeliveryZone**](DeliveryZoneApi.md#removeDeliveryZone) | **DELETE** /api/v1.0/stores/{storeId}/deliveryzones/{deliveryZoneId} | Removes the existing delivery zone
[**updateDeliveryZone**](DeliveryZoneApi.md#updateDeliveryZone) | **POST** /api/v1.0/stores/{storeId}/deliveryzones/{deliveryZoneId} | Updates the existing delivery zone


<a name="addDeliveryZone"></a>
# **addDeliveryZone**
> RestApiResultDeliveryZone addDeliveryZone(storeId, deliveryZoneBase)

Adds a delivery zone to the store id

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DeliveryZoneApi();

var storeId = 56; // Number | Store Id to which the delivery zone will be added

var deliveryZoneBase = new FlipdishOpenApiV10.DeliveryZoneBase(); // DeliveryZoneBase | Optional delivery zone, if not supplied will create a default zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addDeliveryZone(storeId, deliveryZoneBase, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Id to which the delivery zone will be added | 
 **deliveryZoneBase** | [**DeliveryZoneBase**](DeliveryZoneBase.md)| Optional delivery zone, if not supplied will create a default zone | 

### Return type

[**RestApiResultDeliveryZone**](RestApiResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getDeliveryZones"></a>
# **getDeliveryZones**
> RestApiArrayResultDeliveryZone getDeliveryZones(storeId)

Get all the delivery zones associated with a store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DeliveryZoneApi();

var storeId = 56; // Number | Store Id to which the delivery zones are associated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeliveryZones(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Id to which the delivery zones are associated | 

### Return type

[**RestApiArrayResultDeliveryZone**](RestApiArrayResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeDeliveryZone"></a>
# **removeDeliveryZone**
> removeDeliveryZone(storeId, deliveryZoneId)

Removes the existing delivery zone

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DeliveryZoneApi();

var storeId = 56; // Number | Store Id to which the delivery zone belongs

var deliveryZoneId = 56; // Number | Delivery zone id to be removed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeDeliveryZone(storeId, deliveryZoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Id to which the delivery zone belongs | 
 **deliveryZoneId** | **Number**| Delivery zone id to be removed | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateDeliveryZone"></a>
# **updateDeliveryZone**
> RestApiResultDeliveryZone updateDeliveryZone(storeId, deliveryZoneId, deliveryZone)

Updates the existing delivery zone

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.DeliveryZoneApi();

var storeId = 56; // Number | Store Id to which the delivery zone belongs

var deliveryZoneId = 56; // Number | Delivery zone id to be updated

var deliveryZone = new FlipdishOpenApiV10.DeliveryZoneBase(); // DeliveryZoneBase | Delta of delivery zone parameters that need to be changed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeliveryZone(storeId, deliveryZoneId, deliveryZone, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Id to which the delivery zone belongs | 
 **deliveryZoneId** | **Number**| Delivery zone id to be updated | 
 **deliveryZone** | [**DeliveryZoneBase**](DeliveryZoneBase.md)| Delta of delivery zone parameters that need to be changed | 

### Return type

[**RestApiResultDeliveryZone**](RestApiResultDeliveryZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

