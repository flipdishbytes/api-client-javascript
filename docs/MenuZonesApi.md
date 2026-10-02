# Flipdish.MenuZonesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMenuZone**](MenuZonesApi.md#addMenuZone) | **POST** /api/v1.0/menus/{menuId}/zones | Adds a new menu zone to a menu.
[**deleteMenuZone**](MenuZonesApi.md#deleteMenuZone) | **DELETE** /api/v1.0/menus/{menuId}/zones/{menuZoneId} | Deletes a menu zone.
[**deleteMenuZoneImage**](MenuZonesApi.md#deleteMenuZoneImage) | **DELETE** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/image | Deletes a menu zone image.
[**flipMenuZones**](MenuZonesApi.md#flipMenuZones) | **PUT** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/flip/{menuZoneI2} | Flips the order of two menu zones.
[**getMenuZone**](MenuZonesApi.md#getMenuZone) | **GET** /api/v1.0/menus/{menuId}/zones/{menuZoneId} | Gets a specific menu zone for a given zone id
[**getMenuZonesForMenuId**](MenuZonesApi.md#getMenuZonesForMenuId) | **GET** /api/v1.0/menus/{menuId}/zones | Gets all the menu zones for a menu
[**setMenuSectionMenuZone**](MenuZonesApi.md#setMenuSectionMenuZone) | **PUT** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/section/{menuSectionId} | Assigns a zone to a menu section.
[**setMenuZoneDescription**](MenuZonesApi.md#setMenuZoneDescription) | **PUT** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/description | Sets the description of a menu zone.
[**setMenuZoneName**](MenuZonesApi.md#setMenuZoneName) | **PUT** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/name/{menuZoneName} | Sets the name of a menu zone.
[**updateMenuZone**](MenuZonesApi.md#updateMenuZone) | **PUT** /api/v1.0/menus/{menuId}/zones/{menuZoneId} | Updates a menu zone.
[**uploadMenuZoneImage**](MenuZonesApi.md#uploadMenuZoneImage) | **POST** /api/v1.0/menus/{menuId}/zones/{menuZoneId}/image | Uploads an image for a menu zone.



## addMenuZone

> RestApiResultMenuZone addMenuZone(menuId, menuZone)

Adds a new menu zone to a menu.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | The menu id.
let menuZone = new Flipdish.MenuZone(); // MenuZone | The object containing the new zone. This is optional and not supplying it will generate an empty default zone.
apiInstance.addMenuZone(menuId, menuZone, (error, data, response) => {
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
 **menuId** | **Number**| The menu id. | 
 **menuZone** | [**MenuZone**](MenuZone.md)| The object containing the new zone. This is optional and not supplying it will generate an empty default zone. | 

### Return type

[**RestApiResultMenuZone**](RestApiResultMenuZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteMenuZone

> deleteMenuZone(menuId, menuZoneId)

Deletes a menu zone.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The menu zone id.
apiInstance.deleteMenuZone(menuId, menuZoneId, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The menu zone id. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteMenuZoneImage

> deleteMenuZoneImage(menuId, menuZoneId)

Deletes a menu zone image.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The zone Id/
apiInstance.deleteMenuZoneImage(menuId, menuZoneId, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The zone Id/ | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## flipMenuZones

> flipMenuZones(menuId, menuZoneId, menuZoneI2)

Flips the order of two menu zones.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | 
let menuZoneId = 56; // Number | Source.
let menuZoneI2 = 56; // Number | Destination.
apiInstance.flipMenuZones(menuId, menuZoneId, menuZoneI2, (error, data, response) => {
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
 **menuId** | **Number**|  | 
 **menuZoneId** | **Number**| Source. | 
 **menuZoneI2** | **Number**| Destination. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuZone

> RestApiResultMenuZone getMenuZone(menuId, menuZoneId)

Gets a specific menu zone for a given zone id

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | The menu id.
let menuZoneId = 56; // Number | The menu zone id.
apiInstance.getMenuZone(menuId, menuZoneId, (error, data, response) => {
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
 **menuId** | **Number**| The menu id. | 
 **menuZoneId** | **Number**| The menu zone id. | 

### Return type

[**RestApiResultMenuZone**](RestApiResultMenuZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuZonesForMenuId

> RestApiArrayResultMenuZone getMenuZonesForMenuId(menuId)

Gets all the menu zones for a menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | The menu id to load zones for
apiInstance.getMenuZonesForMenuId(menuId, (error, data, response) => {
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
 **menuId** | **Number**| The menu id to load zones for | 

### Return type

[**RestApiArrayResultMenuZone**](RestApiArrayResultMenuZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setMenuSectionMenuZone

> setMenuSectionMenuZone(menuId, menuZoneId, menuSectionId)

Assigns a zone to a menu section.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The menu id.
let menuSectionId = 56; // Number | The menu section id.
apiInstance.setMenuSectionMenuZone(menuId, menuZoneId, menuSectionId, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The menu id. | 
 **menuSectionId** | **Number**| The menu section id. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setMenuZoneDescription

> setMenuZoneDescription(menuId, menuZoneId, description)

Sets the description of a menu zone.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The zone id.
let description = "description_example"; // String | The new description. Add as a raw string in the request, without any JSON wrapper.
apiInstance.setMenuZoneDescription(menuId, menuZoneId, description, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The zone id. | 
 **description** | **String**| The new description. Add as a raw string in the request, without any JSON wrapper. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## setMenuZoneName

> setMenuZoneName(menuId, menuZoneId, menuZoneName)

Sets the name of a menu zone.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The menu zone id.
let menuZoneName = "menuZoneName_example"; // String | The new name.
apiInstance.setMenuZoneName(menuId, menuZoneId, menuZoneName, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The menu zone id. | 
 **menuZoneName** | **String**| The new name. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateMenuZone

> updateMenuZone(menuId, menuZoneId, menuZone)

Updates a menu zone.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | The menu id.
let menuZoneId = 56; // Number | The menu zone id.
let menuZone = new Flipdish.MenuZone(); // MenuZone | The object containing the updated values.
apiInstance.updateMenuZone(menuId, menuZoneId, menuZone, (error, data, response) => {
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
 **menuId** | **Number**| The menu id. | 
 **menuZoneId** | **Number**| The menu zone id. | 
 **menuZone** | [**MenuZone**](MenuZone.md)| The object containing the updated values. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadMenuZoneImage

> uploadMenuZoneImage(menuId, menuZoneId, file)

Uploads an image for a menu zone.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuZonesApi();
let menuId = 56; // Number | Menu id.
let menuZoneId = 56; // Number | The zone id.
let file = [new Flipdish.HttpPostedFileBase()]; // [HttpPostedFileBase] | The file to upload.
apiInstance.uploadMenuZoneImage(menuId, menuZoneId, file, (error, data, response) => {
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
 **menuId** | **Number**| Menu id. | 
 **menuZoneId** | **Number**| The zone id. | 
 **file** | [**[HttpPostedFileBase]**](HttpPostedFileBase.md)| The file to upload. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

