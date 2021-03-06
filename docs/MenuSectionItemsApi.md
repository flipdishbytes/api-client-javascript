# Flipdish.MenuSectionItemsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMenuSectionItem**](MenuSectionItemsApi.md#createMenuSectionItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems | Create menu section item
[**deleteMenuSectionItem**](MenuSectionItemsApi.md#deleteMenuSectionItem) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Delete menu section item
[**deleteMenuSectionItemImage**](MenuSectionItemsApi.md#deleteMenuSectionItemImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/image | Delete menu section item image
[**getMenuItemById**](MenuSectionItemsApi.md#getMenuItemById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Get menu item by identifier
[**getMenuItems**](MenuSectionItemsApi.md#getMenuItems) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems | Get menu items
[**updateMenuSectionItem**](MenuSectionItemsApi.md#updateMenuSectionItem) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId} | Update menu section item
[**uploadMenuSectionItemImage**](MenuSectionItemsApi.md#uploadMenuSectionItemImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/image | Upload menu section item image


<a name="createMenuSectionItem"></a>
# **createMenuSectionItem**
> Object createMenuSectionItem(menuId, menuSectionId, menuSectionItem)

Create menu section item

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItem = new Flipdish.MenuSectionItemBase(); // MenuSectionItemBase | Menu section item


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMenuSectionItem(menuId, menuSectionId, menuSectionItem, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSectionItem"></a>
# **deleteMenuSectionItem**
> deleteMenuSectionItem(menuId, menuSectionId, menuSectionItemId)

Delete menu section item

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSectionItem(menuId, menuSectionId, menuSectionItemId, callback);
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

<a name="deleteMenuSectionItemImage"></a>
# **deleteMenuSectionItemImage**
> deleteMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId)

Delete menu section item image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, callback);
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

<a name="getMenuItemById"></a>
# **getMenuItemById**
> RestApiResultMenuSectionItem getMenuItemById(menuId, menuSectionId, menuSectionItemId)

Get menu item by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemById(menuId, menuSectionId, menuSectionItemId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuItems"></a>
# **getMenuItems**
> RestApiArrayResultMenuSectionItem getMenuItems(menuId, menuSectionId)

Get menu items

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItems(menuId, menuSectionId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateMenuSectionItem"></a>
# **updateMenuSectionItem**
> updateMenuSectionItem(menuId, menuSectionId, menuSectionItemId, menuSectionItem, opts)

Update menu section item

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var menuSectionItem = new Flipdish.MenuSectionItemBase(); // MenuSectionItemBase | Menu section item (delta)

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
apiInstance.updateMenuSectionItem(menuId, menuSectionId, menuSectionItemId, menuSectionItem, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **menuSectionItem** | [**MenuSectionItemBase**](MenuSectionItemBase.md)| Menu section item (delta) | 
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operaton will be undone. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadMenuSectionItemImage"></a>
# **uploadMenuSectionItemImage**
> RestApiStringResult uploadMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, image)

Upload menu section item image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionItemsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionItemId = 56; // Number | Menu section item identifier

var image = "/path/to/file.txt"; // File | Menu section item image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMenuSectionItemImage(menuId, menuSectionId, menuSectionItemId, image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionItemId** | **Number**| Menu section item identifier | 
 **image** | **File**| Menu section item image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

