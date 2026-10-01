# Flipdish.MenuOptionSetItemsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#addMenuItemOptionSetItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems | Create menu item option set item
[**deleteOptionSetItemImage**](MenuOptionSetItemsApi.md#deleteOptionSetItemImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image | Delete menu item option set item image
[**getMenuItemOptionSetItemById**](MenuOptionSetItemsApi.md#getMenuItemOptionSetItemById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Get menu item option set item by identifier
[**getMenuItemOptionSetItems**](MenuOptionSetItemsApi.md#getMenuItemOptionSetItems) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems | Get menu item option set items
[**removeMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#removeMenuItemOptionSetItem) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Delete menu item option set item
[**setOptionSetItemTax**](MenuOptionSetItemsApi.md#setOptionSetItemTax) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/taxrate/{taxRateId} | Set Tax Rate on OptionSetItem
[**updateMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#updateMenuItemOptionSetItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Update menu item option set item
[**uploadOptionSetItemImage**](MenuOptionSetItemsApi.md#uploadOptionSetItemImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image | Upload menu item option set item image



## addMenuItemOptionSetItem

> Object addMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItem)

Create menu item option set item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItem = new Flipdish.MenuItemOptionSetItemBase(); // MenuItemOptionSetItemBase | Option set item
apiInstance.addMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItem, (error, data, response) => {
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
 **menuItemOptionSetItem** | [**MenuItemOptionSetItemBase**](MenuItemOptionSetItemBase.md)| Option set item | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteOptionSetItemImage

> deleteOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Delete menu item option set item image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
apiInstance.deleteOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, (error, data, response) => {
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
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuItemOptionSetItemById

> RestApiResultMenuItemOptionSetItem getMenuItemOptionSetItemById(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Get menu item option set item by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
apiInstance.getMenuItemOptionSetItemById(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, (error, data, response) => {
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
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 

### Return type

[**RestApiResultMenuItemOptionSetItem**](RestApiResultMenuItemOptionSetItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuItemOptionSetItems

> RestApiArrayResultMenuItemOptionSetItem getMenuItemOptionSetItems(menuId, menuSectionId, menuSectionItemId, optionSetId)

Get menu item option set items

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
apiInstance.getMenuItemOptionSetItems(menuId, menuSectionId, menuSectionItemId, optionSetId, (error, data, response) => {
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

### Return type

[**RestApiArrayResultMenuItemOptionSetItem**](RestApiArrayResultMenuItemOptionSetItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## removeMenuItemOptionSetItem

> removeMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Delete menu item option set item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
apiInstance.removeMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, (error, data, response) => {
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
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setOptionSetItemTax

> setOptionSetItemTax(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, taxRateId)

Set Tax Rate on OptionSetItem

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | 
let menuSectionItemId = 56; // Number | 
let optionSetId = 56; // Number | 
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
let taxRateId = 56; // Number | Tax Rate to use
apiInstance.setOptionSetItemTax(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, taxRateId, (error, data, response) => {
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
 **menuSectionId** | **Number**|  | 
 **menuSectionItemId** | **Number**|  | 
 **optionSetId** | **Number**|  | 
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 
 **taxRateId** | **Number**| Tax Rate to use | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateMenuItemOptionSetItem

> updateMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, menuItemOptionSetItem, opts)

Update menu item option set item

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
let menuItemOptionSetItem = new Flipdish.MenuItemOptionSetItemBase(); // MenuItemOptionSetItemBase | Option set item (delta)
let opts = {
  'undoAfter': 3.4 // Number | An optional time period, in hours, after which the hide-section operation will be undone.
};
apiInstance.updateMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, menuItemOptionSetItem, opts, (error, data, response) => {
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
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 
 **menuItemOptionSetItem** | [**MenuItemOptionSetItemBase**](MenuItemOptionSetItemBase.md)| Option set item (delta) | 
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operation will be undone. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadOptionSetItemImage

> RestApiStringResult uploadOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, Image)

Upload menu item option set item image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuOptionSetItemsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionItemId = 56; // Number | Menu section item identifier
let optionSetId = 56; // Number | Option set identifier
let menuItemOptionSetItemId = 56; // Number | Option set item identifier
let Image = "/path/to/file"; // File | Option set item image
apiInstance.uploadOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, Image, (error, data, response) => {
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
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 
 **Image** | **File**| Option set item image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data

