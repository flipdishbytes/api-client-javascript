# Flipdish.LocationAreasApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLocationArea**](LocationAreasApi.md#createLocationArea) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas | 
[**getLocationArea**](LocationAreasApi.md#getLocationArea) | **GET** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId} | 
[**getLocationAreasForStore**](LocationAreasApi.md#getLocationAreasForStore) | **GET** /api/v1.0/{appId}/stores/{storeId}/location-areas | 
[**updateLocationArea**](LocationAreasApi.md#updateLocationArea) | **POST** /api/v1.0/{appId}/stores/{storeId}/location-areas/{locationAreaId}/update | 



## createLocationArea

> Object createLocationArea(appId, storeId, locationAreaInput)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationAreasApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let locationAreaInput = new Flipdish.CreateLocationArea(); // CreateLocationArea | 
apiInstance.createLocationArea(appId, storeId, locationAreaInput, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **locationAreaInput** | [**CreateLocationArea**](CreateLocationArea.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getLocationArea

> RestApiResultLocationAreaWithLocations getLocationArea(locationAreaId, appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationAreasApi();
let locationAreaId = 56; // Number | 
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.getLocationArea(locationAreaId, appId, storeId, (error, data, response) => {
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

### Return type

[**RestApiResultLocationAreaWithLocations**](RestApiResultLocationAreaWithLocations.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getLocationAreasForStore

> RestApiArrayResultLocationAreaWithLocations getLocationAreasForStore(appId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationAreasApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
apiInstance.getLocationAreasForStore(appId, storeId, (error, data, response) => {
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
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultLocationAreaWithLocations**](RestApiArrayResultLocationAreaWithLocations.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateLocationArea

> RestApiResultLocationArea updateLocationArea(appId, storeId, locationAreaId, locationAreaInput)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LocationAreasApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let locationAreaId = "locationAreaId_example"; // String | 
let locationAreaInput = new Flipdish.UpdateLocationArea(); // UpdateLocationArea | 
apiInstance.updateLocationArea(appId, storeId, locationAreaId, locationAreaInput, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **locationAreaId** | **String**|  | 
 **locationAreaInput** | [**UpdateLocationArea**](UpdateLocationArea.md)|  | 

### Return type

[**RestApiResultLocationArea**](RestApiResultLocationArea.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

