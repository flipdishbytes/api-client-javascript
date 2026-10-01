# Flipdish.MenusNutritionInfoV2Api

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrUpdateMenuItemNutritionInfoV2**](MenusNutritionInfoV2Api.md#addOrUpdateMenuItemNutritionInfoV2) | **POST** /api/v1.0/{appId}/menus/{menuId}/menuItem/{publicId}/nutritionv2 | Add or update menuitem nutrition info by menu item&#39;s publicId
[**addOrUpdateMenuItemOptionSetItemNutritionInfoV2**](MenusNutritionInfoV2Api.md#addOrUpdateMenuItemOptionSetItemNutritionInfoV2) | **POST** /api/v1.0/{appId}/menus/{menuId}/menuItemOption/{publicId}/nutritionv2 | Add or update menuitem option set item&#39;s nutrition info by its publicId
[**getAllergensV2**](MenusNutritionInfoV2Api.md#getAllergensV2) | **GET** /api/v1.0/{appId}/menus/nutritionv2/allergens | Get allergens
[**getMenuNutritionInfoV2ByMenuId**](MenusNutritionInfoV2Api.md#getMenuNutritionInfoV2ByMenuId) | **GET** /api/v1.0/{appId}/menus/{menuId}/nutritionv2 | Get menu nutrition by menuId



## addOrUpdateMenuItemNutritionInfoV2

> Object addOrUpdateMenuItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel)

Add or update menuitem nutrition info by menu item&#39;s publicId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoV2Api();
let menuId = 56; // Number | Menu identifier
let publicId = "publicId_example"; // String | Menu item's publicId
let appId = "appId_example"; // String | 
let addOrUpdateModel = new Flipdish.ItemNutritionInfoV2AddUpdateModel(); // ItemNutritionInfoV2AddUpdateModel | Allergen ids
apiInstance.addOrUpdateMenuItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel, (error, data, response) => {
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
 **appId** | **String**|  | 
 **addOrUpdateModel** | [**ItemNutritionInfoV2AddUpdateModel**](ItemNutritionInfoV2AddUpdateModel.md)| Allergen ids | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## addOrUpdateMenuItemOptionSetItemNutritionInfoV2

> Object addOrUpdateMenuItemOptionSetItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel)

Add or update menuitem option set item&#39;s nutrition info by its publicId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoV2Api();
let menuId = 56; // Number | Menu identifier
let publicId = "publicId_example"; // String | Menu item option set item's publicId
let appId = "appId_example"; // String | 
let addOrUpdateModel = new Flipdish.ItemNutritionInfoV2AddUpdateModel(); // ItemNutritionInfoV2AddUpdateModel | Allergen ids
apiInstance.addOrUpdateMenuItemOptionSetItemNutritionInfoV2(menuId, publicId, appId, addOrUpdateModel, (error, data, response) => {
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
 **publicId** | **String**| Menu item option set item&#39;s publicId | 
 **appId** | **String**|  | 
 **addOrUpdateModel** | [**ItemNutritionInfoV2AddUpdateModel**](ItemNutritionInfoV2AddUpdateModel.md)| Allergen ids | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getAllergensV2

> RestApiArrayResultAllergen getAllergensV2(appId, opts)

Get allergens

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoV2Api();
let appId = "appId_example"; // String | 
let opts = {
  'languageId': "languageId_example" // String | 
};
apiInstance.getAllergensV2(appId, opts, (error, data, response) => {
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


## getMenuNutritionInfoV2ByMenuId

> RestApiResultNutritionInfoV2 getMenuNutritionInfoV2ByMenuId(appId, menuId, opts)

Get menu nutrition by menuId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusNutritionInfoV2Api();
let appId = "appId_example"; // String | 
let menuId = 56; // Number | Menu identifier
let opts = {
  'languageId': "languageId_example" // String | 
};
apiInstance.getMenuNutritionInfoV2ByMenuId(appId, menuId, opts, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **languageId** | **String**|  | [optional] 

### Return type

[**RestApiResultNutritionInfoV2**](RestApiResultNutritionInfoV2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

