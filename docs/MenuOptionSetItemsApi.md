# FlipdishOpenApiV10.MenuOptionSetItemsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#addMenuItemOptionSetItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems | Create menu item option set item
[**deleteOptionSetItemImage**](MenuOptionSetItemsApi.md#deleteOptionSetItemImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image | Delete menu item option set item image
[**getMenuItemOptionSetItemById**](MenuOptionSetItemsApi.md#getMenuItemOptionSetItemById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Get menu item option set item by identifier
[**getMenuItemOptionSetItems**](MenuOptionSetItemsApi.md#getMenuItemOptionSetItems) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems | Get menu item option set items
[**removeMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#removeMenuItemOptionSetItem) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Delete menu item option set item
[**setOptionSetItemTax**](MenuOptionSetItemsApi.md#setOptionSetItemTax) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/taxrate/{taxRateId} | [Private API] Set Tax Rate on OptionSetItem
[**updateMenuItemOptionSetItem**](MenuOptionSetItemsApi.md#updateMenuItemOptionSetItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId} | Update menu item option set item
[**uploadOptionSetItemImage**](MenuOptionSetItemsApi.md#uploadOptionSetItemImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image | Upload menu item option set item image


<a name="addMenuItemOptionSetItem"></a>
# **addMenuItemOptionSetItem**
> Object addMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItem)

Create menu item option set item

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItem = new FlipdishOpenApiV10.MenuItemOptionSetItemBase(); // MenuItemOptionSetItemBase | Option set item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItem, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteOptionSetItemImage"></a>
# **deleteOptionSetItemImage**
> deleteOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Delete menu item option set item image

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItemId = 56; // Number | Option set item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback);
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

<a name="getMenuItemOptionSetItemById"></a>
# **getMenuItemOptionSetItemById**
> RestApiResultMenuItemOptionSetItem getMenuItemOptionSetItemById(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Get menu item option set item by identifier

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItemId = 56; // Number | Option set item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemOptionSetItemById(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuItemOptionSetItems"></a>
# **getMenuItemOptionSetItems**
> RestApiArrayResultMenuItemOptionSetItem getMenuItemOptionSetItems(menuId, menuSectionId, menuSectionItemId, optionSetId)

Get menu item option set items

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemOptionSetItems(menuId, menuSectionId, menuSectionItemId, optionSetId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeMenuItemOptionSetItem"></a>
# **removeMenuItemOptionSetItem**
> removeMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId)

Delete menu item option set item

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItemId = 56; // Number | Option set item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback);
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

<a name="setOptionSetItemTax"></a>
# **setOptionSetItemTax**
> setOptionSetItemTax(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, taxRateId)

[Private API] Set Tax Rate on OptionSetItem

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | 

var menuSectionItemId = 56; // Number | 

var optionSetId = 56; // Number | 

var menuItemOptionSetItemId = 56; // Number | Option set item identifier

var taxRateId = 56; // Number | Tax Rate to use


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setOptionSetItemTax(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, taxRateId, callback);
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

<a name="updateMenuItemOptionSetItem"></a>
# **updateMenuItemOptionSetItem**
> updateMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, menuItemOptionSetItem, opts)

Update menu item option set item

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItemId = 56; // Number | Option set item identifier

var menuItemOptionSetItem = new FlipdishOpenApiV10.MenuItemOptionSetItemBase(); // MenuItemOptionSetItemBase | Option set item (delta)

var opts = { 
  'undoAfter': 1.2 // Number | An optional time period, in hours, after which the hide-section operaton will be undone.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, menuItemOptionSetItem, opts, callback);
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
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operaton will be undone. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadOptionSetItemImage"></a>
# **uploadOptionSetItemImage**
> RestApiStringResult uploadOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, image)

Upload menu item option set item image

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.MenuOptionSetItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var optionSetId = 56; // Number | Option set identifier

var menuItemOptionSetItemId = 56; // Number | Option set item identifier

var image = "/path/to/file.txt"; // File | Option set item image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **optionSetId** | **Number**| Option set identifier | 
 **menuItemOptionSetItemId** | **Number**| Option set item identifier | 
 **image** | **File**| Option set item image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

