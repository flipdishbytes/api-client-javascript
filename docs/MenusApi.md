# Flipdish.MenusApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMenuItemMetadata**](MenusApi.md#deleteMenuItemMetadata) | **GET** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId} | Get a menu item metadata by key
[**deleteMenuItemMetadata_0**](MenusApi.md#deleteMenuItemMetadata_0) | **DELETE** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId} | Update a menu items metadata
[**deleteMenuSectionImage**](MenusApi.md#deleteMenuSectionImage) | **DELETE** /api/v1.0/menus/{menuId}/image | Delete menu image
[**getMenuById**](MenusApi.md#getMenuById) | **GET** /api/v1.0/menus/{menuId} | Get menu by identifier
[**getMenuItemMetadata**](MenusApi.md#getMenuItemMetadata) | **GET** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId} | Get a menu items metadata
[**getMenuItemOptionSetItemMetadata**](MenusApi.md#getMenuItemOptionSetItemMetadata) | **GET** /api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId} | Get a menu item option set item metadata by key
[**setMenuItemMetadata**](MenusApi.md#setMenuItemMetadata) | **PUT** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId} | Update a menu items metadata
[**setMenuItemOptionSetItemMetadata**](MenusApi.md#setMenuItemOptionSetItemMetadata) | **PUT** /api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId} | Update a menu item option set items metadata
[**updateMenu**](MenusApi.md#updateMenu) | **POST** /api/v1.0/menus/{menuId} | Update menu
[**uploadMenuSectionImage**](MenusApi.md#uploadMenuSectionImage) | **POST** /api/v1.0/menus/{menuId}/image | Upload menu image


<a name="deleteMenuItemMetadata"></a>
# **deleteMenuItemMetadata**
> deleteMenuItemMetadata(menuId, storeId, menuItemId, key)

Get a menu item metadata by key

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var menuItemId = 56; // Number | Menu item identifier

var key = "key_example"; // String | Metadata key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuItemMetadata(menuId, storeId, menuItemId, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 
 **key** | **String**| Metadata key | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuItemMetadata_0"></a>
# **deleteMenuItemMetadata_0**
> deleteMenuItemMetadata_0(menuId, storeId, menuItemId, key)

Update a menu items metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var menuItemId = 56; // Number | Menu item identifier

var key = "key_example"; // String | Metadata key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuItemMetadata_0(menuId, storeId, menuItemId, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 
 **key** | **String**| Metadata key | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSectionImage"></a>
# **deleteMenuSectionImage**
> deleteMenuSectionImage(menuId)

Delete menu image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSectionImage(menuId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuById"></a>
# **getMenuById**
> RestApiResultMenu getMenuById(menuId)

Get menu by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuById(menuId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 

### Return type

[**RestApiResultMenu**](RestApiResultMenu.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuItemMetadata"></a>
# **getMenuItemMetadata**
> RestApiArrayResultMetadata getMenuItemMetadata(menuId, storeId, menuItemId)

Get a menu items metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var menuItemId = 56; // Number | Menu item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemMetadata(menuId, storeId, menuItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 

### Return type

[**RestApiArrayResultMetadata**](RestApiArrayResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuItemOptionSetItemMetadata"></a>
# **getMenuItemOptionSetItemMetadata**
> RestApiResultMetadata getMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId)

Get a menu item option set item metadata by key

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var optionSetItemId = 56; // Number | Menu item option set item identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **optionSetItemId** | **Number**| Menu item option set item identifier | 

### Return type

[**RestApiResultMetadata**](RestApiResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setMenuItemMetadata"></a>
# **setMenuItemMetadata**
> setMenuItemMetadata(menuId, storeId, menuItemId, metadata)

Update a menu items metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var menuItemId = 56; // Number | Menu item identifier

var metadata = new Flipdish.Metadata(); // Metadata | Metadata object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setMenuItemMetadata(menuId, storeId, menuItemId, metadata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 
 **metadata** | [**Metadata**](Metadata.md)| Metadata object | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setMenuItemOptionSetItemMetadata"></a>
# **setMenuItemOptionSetItemMetadata**
> setMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, metadata)

Update a menu item option set items metadata

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var storeId = 56; // Number | Store identifier

var optionSetItemId = 56; // Number | Menu item option set item identifier

var metadata = new Flipdish.Metadata(); // Metadata | Metadata object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, metadata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **storeId** | **Number**| Store identifier | 
 **optionSetItemId** | **Number**| Menu item option set item identifier | 
 **metadata** | [**Metadata**](Metadata.md)| Metadata object | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateMenu"></a>
# **updateMenu**
> updateMenu(menuId, menu)

Update menu

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var menu = new Flipdish.MenuBase(); // MenuBase | Menu (delta)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateMenu(menuId, menu, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menu** | [**MenuBase**](MenuBase.md)| Menu (delta) | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadMenuSectionImage"></a>
# **uploadMenuSectionImage**
> RestApiStringResult uploadMenuSectionImage(menuId, image)

Upload menu image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenusApi();

var menuId = 56; // Number | Menu identifier

var image = "/path/to/file.txt"; // File | Menu image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMenuSectionImage(menuId, image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **image** | **File**| Menu image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

