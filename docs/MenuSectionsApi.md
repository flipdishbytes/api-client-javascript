# Flipdish.MenuSectionsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMenuSection**](MenuSectionsApi.md#createMenuSection) | **POST** /api/v1.0/menus/{menuId}/sections | Create menu section
[**deleteMenuSection**](MenuSectionsApi.md#deleteMenuSection) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Delete menu section
[**deleteMenuSectionImage**](MenuSectionsApi.md#deleteMenuSectionImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/image | Delete menu section image
[**getMenuSectionById**](MenuSectionsApi.md#getMenuSectionById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Get menu section by identifier
[**getMenuSections**](MenuSectionsApi.md#getMenuSections) | **GET** /api/v1.0/menus/{menuId}/sections | Get menu sections
[**updateMenuSection**](MenuSectionsApi.md#updateMenuSection) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Update menu section
[**uploadMenuSectionImage**](MenuSectionsApi.md#uploadMenuSectionImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/image | Upload menu section image


<a name="createMenuSection"></a>
# **createMenuSection**
> Object createMenuSection(menuId, menuSection)

Create menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMenuSection(menuId, menuSection, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSection** | [**MenuSectionBase**](MenuSectionBase.md)| Menu section | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSection"></a>
# **deleteMenuSection**
> deleteMenuSection(menuId, menuSectionId)

Delete menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSection(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSectionImage"></a>
# **deleteMenuSectionImage**
> deleteMenuSectionImage(menuId, menuSectionId)

Delete menu section image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSectionImage(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuSectionById"></a>
# **getMenuSectionById**
> RestApiResultMenuSection getMenuSectionById(menuId, menuSectionId)

Get menu section by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuSectionById(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

[**RestApiResultMenuSection**](RestApiResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuSections"></a>
# **getMenuSections**
> RestApiArrayResultMenuSection getMenuSections(menuId)

Get menu sections

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuSections(menuId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 

### Return type

[**RestApiArrayResultMenuSection**](RestApiArrayResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateMenuSection"></a>
# **updateMenuSection**
> updateMenuSection(menuId, menuSectionId, menuSection, undoAfter)

Update menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section changes (delta)

var undoAfter = 1.2; // Number | An optional time period, in hours, after which the hide-section operaton will be undone.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateMenuSection(menuId, menuSectionId, menuSection, undoAfter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSection** | [**MenuSectionBase**](MenuSectionBase.md)| Menu section changes (delta) | 
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operaton will be undone. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadMenuSectionImage"></a>
# **uploadMenuSectionImage**
> RestApiStringResult uploadMenuSectionImage(menuId, menuSectionId, image)

Upload menu section image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var image = "/path/to/file.txt"; // File | Menu section image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMenuSectionImage(menuId, menuSectionId, image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **image** | **File**| Menu section image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

