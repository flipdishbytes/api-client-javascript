# Flipdish.MenuSectionItemsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneMenuSectionItem**](MenuSectionItemsApi.md#cloneMenuSectionItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/clone | Clone menu section item
[**createMenuSectionItem**](MenuSectionItemsApi.md#createMenuSectionItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems | Create menu section item
[**createMenuSectionItemFromCatalogItems**](MenuSectionItemsApi.md#createMenuSectionItemFromCatalogItems) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/add-catalogitems | Create menu section items from a list of Catalog Items
[**deleteMenuSectionItem**](MenuSectionItemsApi.md#deleteMenuSectionItem) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Delete menu section item
[**deleteMenuSectionItemImage**](MenuSectionItemsApi.md#deleteMenuSectionItemImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/image | Delete menu section item image
[**getMenuItemById**](MenuSectionItemsApi.md#getMenuItemById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Get menu item by identifier
[**getMenuItems**](MenuSectionItemsApi.md#getMenuItems) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems | Get menu items
[**moveMenuItem**](MenuSectionItemsApi.md#moveMenuItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/setorder/{destinationDisplayOrder} | Move an Item within a menu
[**setSectionItemTax**](MenuSectionItemsApi.md#setSectionItemTax) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/taxrate/{taxRateId} | Set tax rate for menu item
[**updateMenuSectionItem**](MenuSectionItemsApi.md#updateMenuSectionItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Update menu section item
[**uploadMenuSectionItemImage**](MenuSectionItemsApi.md#uploadMenuSectionItemImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/image | Upload menu section item image



## cloneMenuSectionItem

> RestApiResultMenuSectionItem cloneMenuSectionItem(menuId, menuSectionId, menuSectionItemId)

Clone menu section item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
apiInstance.cloneMenuSectionItem(menuId, menuSectionId, menuSectionItemId, (error, data, response) => {
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

[**RestApiResultMenuSectionItem**](RestApiResultMenuSectionItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createMenuSectionItem

> Object createMenuSectionItem(menuId, menuSectionId, menuSectionItem)

Create menu section item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItem = new Flipdish.MenuSectionItemBase(); // MenuSectionItemBase | Menu section item
apiInstance.createMenuSectionItem(menuId, menuSectionId, menuSectionItem, (error, data, response) => {
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
 **menuSectionItem** | [**MenuSectionItemBase**](MenuSectionItemBase.md)| Menu section item | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createMenuSectionItemFromCatalogItems

> Object createMenuSectionItemFromCatalogItems(menuId, menuSectionId, createFromCatalogItems)

Create menu section items from a list of Catalog Items

BETA - this endpoint is under development, do not use it in your production system

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let createFromCatalogItems = new Flipdish.CreateMenuSectionItemFromCatalogItems(); // CreateMenuSectionItemFromCatalogItems | Information to create the new MenuSectionItems
apiInstance.createMenuSectionItemFromCatalogItems(menuId, menuSectionId, createFromCatalogItems, (error, data, response) => {
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
 **createFromCatalogItems** | [**CreateMenuSectionItemFromCatalogItems**](CreateMenuSectionItemFromCatalogItems.md)| Information to create the new MenuSectionItems | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteMenuSectionItem

> deleteMenuSectionItem(menuId, menuSectionId, menuSectionItemId)

Delete menu section item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
apiInstance.deleteMenuSectionItem(menuId, menuSectionId, menuSectionItemId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteMenuSectionItemImage

> deleteMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId)

Delete menu section item image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
apiInstance.deleteMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuItemById

> RestApiResultMenuSectionItem getMenuItemById(menuId, menuSectionId, menuSectionItemId)

Get menu item by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu item identifier
apiInstance.getMenuItemById(menuId, menuSectionId, menuSectionItemId, (error, data, response) => {
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
 **menuSectionItemId** | **Number**| Menu item identifier | 

### Return type

[**RestApiResultMenuSectionItem**](RestApiResultMenuSectionItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuItems

> RestApiArrayResultMenuSectionItem getMenuItems(menuId, menuSectionId)

Get menu items

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
apiInstance.getMenuItems(menuId, menuSectionId, (error, data, response) => {
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

### Return type

[**RestApiArrayResultMenuSectionItem**](RestApiArrayResultMenuSectionItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## moveMenuItem

> moveMenuItem(menuId, menuSectionId, menuSectionItemId, destinationDisplayOrder)

Move an Item within a menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Section to put item in (will usually be original section)
let menuSectionItemId = 56; // Number | ID of Item to be moved
let destinationDisplayOrder = 56; // Number | New Display Order of item
apiInstance.moveMenuItem(menuId, menuSectionId, menuSectionItemId, destinationDisplayOrder, (error, data, response) => {
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
 **menuSectionId** | **Number**| Section to put item in (will usually be original section) | 
 **menuSectionItemId** | **Number**| ID of Item to be moved | 
 **destinationDisplayOrder** | **Number**| New Display Order of item | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setSectionItemTax

> setSectionItemTax(menuId, menuSectionId, menuSectionItemId, taxRateId)

Set tax rate for menu item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Section to put item in (will usually be original section)
let menuSectionItemId = 56; // Number | ID of Item to be moved
let taxRateId = 56; // Number | tax rate to be set against item
apiInstance.setSectionItemTax(menuId, menuSectionId, menuSectionItemId, taxRateId, (error, data, response) => {
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
 **menuSectionId** | **Number**| Section to put item in (will usually be original section) | 
 **menuSectionItemId** | **Number**| ID of Item to be moved | 
 **taxRateId** | **Number**| tax rate to be set against item | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateMenuSectionItem

> updateMenuSectionItem(menuId, menuSectionId, menuSectionItemId, menuSectionItem, opts)

Update menu section item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let menuSectionItem = new Flipdish.MenuSectionItemBase(); // MenuSectionItemBase | Menu section item (delta)
let opts = {
  'undoAfter': 3.4 // Number | An optional time period, in hours, after which the hide-section operation will be undone
};
apiInstance.updateMenuSectionItem(menuId, menuSectionId, menuSectionItemId, menuSectionItem, opts, (error, data, response) => {
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
 **menuSectionItem** | [**MenuSectionItemBase**](MenuSectionItemBase.md)| Menu section item (delta) | 
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operation will be undone | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadMenuSectionItemImage

> RestApiStringResult uploadMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, Image)

Upload menu section item image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let Image = "/path/to/file"; // File | Menu section item image
apiInstance.uploadMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, Image, (error, data, response) => {
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
 **Image** | **File**| Menu section item image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data

