# Flipdish.MenuOptionSetsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMenuItemOptionSet**](MenuOptionSetsApi.md#createMenuItemOptionSet) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets | Create menu item option set
[**deleteMenuItemOptionSet**](MenuOptionSetsApi.md#deleteMenuItemOptionSet) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId} | Delete menu item option set
[**deleteOptionSetImage**](MenuOptionSetsApi.md#deleteOptionSetImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/image | Delete option set image
[**getMenuItemOptionSetById**](MenuOptionSetsApi.md#getMenuItemOptionSetById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId} | Get menu item option set by identifier
[**getMenuItemOptionSets**](MenuOptionSetsApi.md#getMenuItemOptionSets) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets | Get menu item option sets
[**updateMenuItemOptionSet**](MenuOptionSetsApi.md#updateMenuItemOptionSet) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId} | Update menu item option set
[**uploadOptionSetImage**](MenuOptionSetsApi.md#uploadOptionSetImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/image | Upload menu item option set image



## createMenuItemOptionSet

> Object createMenuItemOptionSet(menuId, menuSectionId, menuSectionItemId, menuItemOptionSet)

Create menu item option set

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let menuItemOptionSet = new Flipdish.MenuItemOptionSetBase(); // MenuItemOptionSetBase | Menu item option set
apiInstance.createMenuItemOptionSet(menuId, menuSectionId, menuSectionItemId, menuItemOptionSet, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **menuItemOptionSet** | [**MenuItemOptionSetBase**](MenuItemOptionSetBase.md)| Menu item option set | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteMenuItemOptionSet

> deleteMenuItemOptionSet(menuId, menuSectionItemId, menuSectionId, optionSetId)

Delete menu item option set

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let menuSectionId = 56; // Number | Menu section identifier
let optionSetId = 56; // Number | Option set identifier
apiInstance.deleteMenuItemOptionSet(menuId, menuSectionItemId, menuSectionId, optionSetId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **optionSetId** | **Number**| Option set identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteOptionSetImage

> deleteOptionSetImage(menuId, menuSectionId, menuSectionItemId, optionSetId)

Delete option set image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
apiInstance.deleteOptionSetImage(menuId, menuSectionId, menuSectionItemId, optionSetId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **optionSetId** | **Number**| Option set identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuItemOptionSetById

> RestApiResultMenuItemOptionSet getMenuItemOptionSetById(menuId, menuSectionId, menuSectionItemId, optionSetId)

Get menu item option set by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Menu item option set identifier
apiInstance.getMenuItemOptionSetById(menuId, menuSectionId, menuSectionItemId, optionSetId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **optionSetId** | **Number**| Menu item option set identifier | 

### Return type

[**RestApiResultMenuItemOptionSet**](RestApiResultMenuItemOptionSet.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuItemOptionSets

> RestApiArrayResultMenuItemOptionSet getMenuItemOptionSets(menuId, menuSectionId, menuSectionItemId)

Get menu item option sets

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
apiInstance.getMenuItemOptionSets(menuId, menuSectionId, menuSectionItemId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 

### Return type

[**RestApiArrayResultMenuItemOptionSet**](RestApiArrayResultMenuItemOptionSet.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateMenuItemOptionSet

> updateMenuItemOptionSet(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSet)

Update menu item option set

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSet = new Flipdish.MenuItemOptionSetBase(); // MenuItemOptionSetBase | Menu item option set (delta)
apiInstance.updateMenuItemOptionSet(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSet, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **optionSetId** | **Number**| Option set identifier | 
 **menuItemOptionSet** | [**MenuItemOptionSetBase**](MenuItemOptionSetBase.md)| Menu item option set (delta) | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadOptionSetImage

> RestApiStringResult uploadOptionSetImage(menuId, menuSectionId, menuSectionItemId, optionSetId, Image)

Upload menu item option set image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let Image = "/path/to/file"; // File | Option set image
apiInstance.uploadOptionSetImage(menuId, menuSectionId, menuSectionItemId, optionSetId, Image, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **optionSetId** | **Number**| Option set identifier | 
 **Image** | **File**| Option set image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data

