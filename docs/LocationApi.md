# Flipdish.LocationApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLocation**](LocationApi.md#createLocation) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/location | 
[**deleteLocation**](LocationApi.md#deleteLocation) | **DELETE** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/location/{locationId}/delete | 
[**mapLocationToExternalId**](LocationApi.md#mapLocationToExternalId) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/location/{locationId}/map-external | 
[**moveLocation**](LocationApi.md#moveLocation) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/location/{locationId}/move | 
[**updateLocation**](LocationApi.md#updateLocation) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/location/{locationId}/update | 



## createLocation

> Object createLocation(locationAreaId, appId, storeId, createLocationInput)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationApi();
let locationAreaId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let createLocationInput = [new Flipdish.CreateLocation()]; // [CreateLocation] | 
apiInstance.createLocation(locationAreaId, appId, storeId, createLocationInput, (error, data, response) => {
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
 **locationAreaId** | **Number**|  | 
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 
 **createLocationInput** | [**[CreateLocation]**](CreateLocation.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteLocation

> Object deleteLocation(locationId, locationAreaId, appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationApi();
let locationId = 56; // Number | 
let locationAreaId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.deleteLocation(locationId, locationAreaId, appId, storeId, (error, data, response) => {
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
 **locationId** | **Number**|  | 
 **locationAreaId** | **Number**|  | 
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## mapLocationToExternalId

> RestApiResultMappedLocation mapLocationToExternalId(locationId, locationAreaId, appId, storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationApi();
let locationId = 56; // Number | 
let locationAreaId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let opts = {
  'externalLocationId': "externalLocationId_example" // String | 
};
apiInstance.mapLocationToExternalId(locationId, locationAreaId, appId, storeId, opts, (error, data, response) => {
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
 **locationId** | **Number**|  | 
 **locationAreaId** | **Number**|  | 
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 
 **externalLocationId** | **String**|  | [optional] 

### Return type

[**RestApiResultMappedLocation**](RestApiResultMappedLocation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## moveLocation

> Object moveLocation(locationId, locationAreaId, newLocationAreaId, appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationApi();
let locationId = 56; // Number | 
let locationAreaId = 56; // Number | 
let newLocationAreaId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.moveLocation(locationId, locationAreaId, newLocationAreaId, appId, storeId, (error, data, response) => {
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
 **locationId** | **Number**|  | 
 **locationAreaId** | **Number**|  | 
 **newLocationAreaId** | **Number**|  | 
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateLocation

> RestApiResultLocationAreaLocation updateLocation(locationAreaId, locationId, appId, storeId, updateLocationInput)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationApi();
let locationAreaId = 56; // Number | 
let locationId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let updateLocationInput = new Flipdish.CreateLocation(); // CreateLocation | 
apiInstance.updateLocation(locationAreaId, locationId, appId, storeId, updateLocationInput, (error, data, response) => {
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
 **locationAreaId** | **Number**|  | 
 **locationId** | **Number**|  | 
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 
 **updateLocationInput** | [**CreateLocation**](CreateLocation.md)|  | 

### Return type

[**RestApiResultLocationAreaLocation**](RestApiResultLocationAreaLocation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

