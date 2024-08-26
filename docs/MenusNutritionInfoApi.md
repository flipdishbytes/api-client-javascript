# Flipdish.MenusNutritionInfoApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrUpdateMenuItemNutritionInfo**](MenusNutritionInfoApi.md#addOrUpdateMenuItemNutritionInfo) | **POST** /api/v1.0/menus/{menuId}/menuItem/{publicId}/nutrition | Add or update menuitem nutrition info by menu item&#39;s publicId
[**addOrUpdateMenuItemOptionSetItemNutritionInfo**](MenusNutritionInfoApi.md#addOrUpdateMenuItemOptionSetItemNutritionInfo) | **POST** /api/v1.0/menus/{menuId}/menuItemOption/{publicId}/nutrition | Add or update menuitem optionsetitem nutrition info its publicId
[**addOrUpdateMenuNutritionInfoByMenuId**](MenusNutritionInfoApi.md#addOrUpdateMenuNutritionInfoByMenuId) | **POST** /api/v1.0/menus/{menuId}/nutrition | Add or update menu nutrition by identifier
[**deleteMenuNutritionInfoByMenuId**](MenusNutritionInfoApi.md#deleteMenuNutritionInfoByMenuId) | **DELETE** /api/v1.0/menus/{menuId}/nutrition | Delete menu nutrition information by menuId
[**getAllergens**](MenusNutritionInfoApi.md#getAllergens) | **GET** /api/v1.0/{appId}/menus/nutrition/allergens | Get allergens
[**getMenuNutritionInfoByMenuId**](MenusNutritionInfoApi.md#getMenuNutritionInfoByMenuId) | **GET** /api/v1.0/menus/{menuId}/nutrition | Get menu nutrition by menuId



## addOrUpdateMenuItemNutritionInfo

> RestApiResultMenuNutritionInfoHeader addOrUpdateMenuItemNutritionInfo(menuId, publicId, addOrUpdateModel)

Add or update menuitem nutrition info by menu item&#39;s publicId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let menuId = 56; // Number | Menu identifier
let publicId = "publicId_example"; // String | Menu item's publicId
let addOrUpdateModel = new Flipdish.ItemNutritionInfoAddUpdateModel(); // ItemNutritionInfoAddUpdateModel | 
apiInstance.addOrUpdateMenuItemNutritionInfo(menuId, publicId, addOrUpdateModel, (error, data, response) => {
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
 **publicId** | **String**| Menu item&#39;s publicId | 
 **addOrUpdateModel** | [**ItemNutritionInfoAddUpdateModel**](ItemNutritionInfoAddUpdateModel.md)|  | 

### Return type

[**RestApiResultMenuNutritionInfoHeader**](RestApiResultMenuNutritionInfoHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## addOrUpdateMenuItemOptionSetItemNutritionInfo

> RestApiResultMenuNutritionInfoHeader addOrUpdateMenuItemOptionSetItemNutritionInfo(menuId, publicId, addOrUpdateModel)

Add or update menuitem optionsetitem nutrition info its publicId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let menuId = 56; // Number | Menu identifier
let publicId = null; // String | Menu item's publicId
let addOrUpdateModel = new Flipdish.ItemNutritionInfoAddUpdateModel(); // ItemNutritionInfoAddUpdateModel | 
apiInstance.addOrUpdateMenuItemOptionSetItemNutritionInfo(menuId, publicId, addOrUpdateModel, (error, data, response) => {
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
 **publicId** | [**String**](.md)| Menu item&#39;s publicId | 
 **addOrUpdateModel** | [**ItemNutritionInfoAddUpdateModel**](ItemNutritionInfoAddUpdateModel.md)|  | 

### Return type

[**RestApiResultMenuNutritionInfoHeader**](RestApiResultMenuNutritionInfoHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## addOrUpdateMenuNutritionInfoByMenuId

> RestApiResultMenuNutritionInfoHeader addOrUpdateMenuNutritionInfoByMenuId(menuId)

Add or update menu nutrition by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let menuId = 56; // Number | Menu identifier
apiInstance.addOrUpdateMenuNutritionInfoByMenuId(menuId, (error, data, response) => {
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

### Return type

[**RestApiResultMenuNutritionInfoHeader**](RestApiResultMenuNutritionInfoHeader.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## deleteMenuNutritionInfoByMenuId

> Object deleteMenuNutritionInfoByMenuId(menuId)

Delete menu nutrition information by menuId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let menuId = 56; // Number | Menu identifier
apiInstance.deleteMenuNutritionInfoByMenuId(menuId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getAllergens

> RestApiArrayResultAllergen getAllergens(appId, opts)

Get allergens

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let appId = "appId_example"; // String | 
let opts = {
  'languageId': "languageId_example" // String | 
};
apiInstance.getAllergens(appId, opts, (error, data, response) => {
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
 **languageId** | **String**|  | [optional] 

### Return type

[**RestApiArrayResultAllergen**](RestApiArrayResultAllergen.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getMenuNutritionInfoByMenuId

> RestApiResultNutritionInfo getMenuNutritionInfoByMenuId(menuId)

Get menu nutrition by menuId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuNutritionInfoByMenuId(menuId, (error, data, response) => {
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

### Return type

[**RestApiResultNutritionInfo**](RestApiResultNutritionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

