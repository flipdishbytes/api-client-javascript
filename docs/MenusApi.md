# Flipdish.MenusApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDraftMenuFromExistingMenu**](MenusApi.md#createDraftMenuFromExistingMenu) | **POST** /api/v1.0/menus/{menuId}/clone/{newName} | Clone a menu, (without attaching stores)
[**createNewMenuAsync**](MenusApi.md#createNewMenuAsync) | **POST** /api/v1.0/{appId}/menus/async | Create a new menu asynchronously
[**createNewMenuForApp**](MenusApi.md#createNewMenuForApp) | **POST** /api/v1.0/{appId}/menus | Create a new menu
[**deleteMenu**](MenusApi.md#deleteMenu) | **DELETE** /api/v1.0/menus/{menuId} | Mark a Menu as Deleted
[**deleteMenuImage**](MenusApi.md#deleteMenuImage) | **DELETE** /api/v1.0/menus/{menuId}/image | Delete menu image
[**deleteMenuItemMetadata**](MenusApi.md#deleteMenuItemMetadata) | **DELETE** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId} | Delete menu item metadata
[**getAllMenuMetadataByMenuIdAndStoreId**](MenusApi.md#getAllMenuMetadataByMenuIdAndStoreId) | **GET** /api/v1.0/menus/{menuId}/metadata/store/{storeId} | Get all menu metadata by menu ID and store ID
[**getMenuById**](MenusApi.md#getMenuById) | **GET** /api/v1.0/menus/{menuId} | Get menu by identifier
[**getMenuItemMetadata**](MenusApi.md#getMenuItemMetadata) | **GET** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId} | Get menu item metadata
[**getMenuItemMetadataByKey**](MenusApi.md#getMenuItemMetadataByKey) | **GET** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/{key}/store/{storeId} | Get menu item metadata by key
[**getMenuItemOptionSetItemMetadata**](MenusApi.md#getMenuItemOptionSetItemMetadata) | **GET** /api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId} | Get menu item option set item metadata by key
[**getMenuName**](MenusApi.md#getMenuName) | **GET** /api/v1.0/menus/{menuId}/name | Get Menus Name
[**getMenuStoreNames**](MenusApi.md#getMenuStoreNames) | **GET** /api/v1.0/menus/{menuId}/stores | Get menus store names
[**getMenuTaxDetails**](MenusApi.md#getMenuTaxDetails) | **GET** /api/v1.0/menus/{menuId}/tax | Get menus tax details
[**getMenusByAppId**](MenusApi.md#getMenusByAppId) | **GET** /api/v1.0/{appId}/menus | Get menus by appId
[**getMenusCheckpoints**](MenusApi.md#getMenusCheckpoints) | **GET** /api/v1.0/menus/{menuId}/checkpoints | Get a Menus Checkpoints
[**menusDeleteTaxRate**](MenusApi.md#menusDeleteTaxRate) | **DELETE** /api/v1.0/menus/{menuId}/tax/{taxId} | Remove a Menus Tax Rate, can only remove a tax rate that does not have items/optionSetItems attached
[**menusGetMenuBulkShowHide**](MenusApi.md#menusGetMenuBulkShowHide) | **GET** /api/v1.0/menus/{menuId}/bulkshowhide/list | Get bulk show/hide menu items and option set items
[**menusIsWhiteLabelMigratedToRms**](MenusApi.md#menusIsWhiteLabelMigratedToRms) | **GET** /api/v1.0/menus/isWhiteLabelMigratedToRms | PRIVATE API, TEMPORARY ENDPOINT  RMS can check if a white label is migrated to RMS
[**menusMarkWhiteLabelAsMigratedToRms**](MenusApi.md#menusMarkWhiteLabelAsMigratedToRms) | **POST** /api/v1.0/menus/markWhiteLabelAsMigratedToRms | PRIVATE API, TEMPORARY ENDPOINT  RMS can set the white label as migrated to RMS, which will block all Menu editing operations via Zeus
[**menusMarkWhiteLabelAsNotMigratedToRms**](MenusApi.md#menusMarkWhiteLabelAsNotMigratedToRms) | **POST** /api/v1.0/menus/markWhiteLabelAsNotMigratedToRms | PRIVATE API, TEMPORARY ENDPOINT  RMS can set the white label as NOT migrated to RMS, which will unblock all Menu editing operations via Zeus
[**menusSetDisplayOnMenuTax**](MenusApi.md#menusSetDisplayOnMenuTax) | **POST** /api/v1.0/menus/{menuId}/tax/show/{show} | Set if tax shows for a Menu
[**menusSetItemDisplayOrders**](MenusApi.md#menusSetItemDisplayOrders) | **POST** /api/v1.0/menus/{menuId}/sectiondisplayorders | Re-arrange Sections within a Menu
[**menusShowHideBulkItems**](MenusApi.md#menusShowHideBulkItems) | **POST** /api/v1.0/menus/{menuId}/bulkshowhide | Bulk show/hide menu items or option set items
[**menusUpdateTaxType**](MenusApi.md#menusUpdateTaxType) | **POST** /api/v1.0/menus/{menuId}/tax/type/{type} | Set the type of Tax on a Menu
[**menusUpsertTaxRate**](MenusApi.md#menusUpsertTaxRate) | **POST** /api/v1.0/menus/{menuId}/taxrate | Add/Update a Tax Rate
[**restoreAMenuCheckpoint**](MenusApi.md#restoreAMenuCheckpoint) | **POST** /api/v1.0/menus/{menuId}/checkpoints/{checkpointId}/restore | Restore a Menu to a checkpoint
[**setMenuItemMetadata**](MenusApi.md#setMenuItemMetadata) | **PUT** /api/v1.0/menus/{menuId}/menuitem/{menuItemId}/metadata/store/{storeId} | Update menu item metadata
[**setMenuItemOptionSetItemMetadata**](MenusApi.md#setMenuItemOptionSetItemMetadata) | **PUT** /api/v1.0/menus/{menuId}/optionsetitem/{optionSetItemId}/metadata/store/{storeId} | Update menu item option set item metadata
[**setMenuLock**](MenusApi.md#setMenuLock) | **POST** /api/v1.0/menus/{menuId}/lock | Lock/Unlock a Menu for Editing
[**setMenuName**](MenusApi.md#setMenuName) | **POST** /api/v1.0/menus/{menuId}/name | Set Menus Name
[**updateMenu**](MenusApi.md#updateMenu) | **POST** /api/v1.0/menus/{menuId} | Update menu
[**uploadMenuImage**](MenusApi.md#uploadMenuImage) | **POST** /api/v1.0/menus/{menuId}/image | Upload menu image
[**uploadNewMenuForApp**](MenusApi.md#uploadNewMenuForApp) | **POST** /api/v1.0/{appId}/menus/xlsx | Create a new menu from xlsx file.



## createDraftMenuFromExistingMenu

> RestApiResultMenu createDraftMenuFromExistingMenu(menuId, newName)

Clone a menu, (without attaching stores)

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let newName = "newName_example"; // String | Name of the new Menu
apiInstance.createDraftMenuFromExistingMenu(menuId, newName, (error, data, response) => {
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
 **newName** | **String**| Name of the new Menu | 

### Return type

[**RestApiResultMenu**](RestApiResultMenu.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createNewMenuAsync

> Object createNewMenuAsync(appId, menu)

Create a new menu asynchronously

You must listen to the webhook menu.async_creation.completed to know when the menu is ready

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let appId = "appId_example"; // String | App id
let menu = new Flipdish.CreateFullMenu(); // CreateFullMenu | Menu
apiInstance.createNewMenuAsync(appId, menu, (error, data, response) => {
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
 **appId** | **String**| App id | 
 **menu** | [**CreateFullMenu**](CreateFullMenu.md)| Menu | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createNewMenuForApp

> Number createNewMenuForApp(appId, menu)

Create a new menu

[DEPRECATED] - Please use the async version as this endpoint may timeout for large menus

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let appId = "appId_example"; // String | App identifier
let menu = new Flipdish.CreateFullMenu(); // CreateFullMenu | Menu. If empty the system will create a menu with default items
apiInstance.createNewMenuForApp(appId, menu, (error, data, response) => {
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
 **appId** | **String**| App identifier | 
 **menu** | [**CreateFullMenu**](CreateFullMenu.md)| Menu. If empty the system will create a menu with default items | 

### Return type

**Number**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteMenu

> deleteMenu(menuId)

Mark a Menu as Deleted

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu Identifier
apiInstance.deleteMenu(menuId, (error, data, response) => {
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
 **menuId** | **Number**| Menu Identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteMenuImage

> deleteMenuImage(menuId)

Delete menu image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.deleteMenuImage(menuId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message


## deleteMenuItemMetadata

> deleteMenuItemMetadata(menuId, storeId, menuItemId, key)

Delete menu item metadata

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let menuItemId = 56; // Number | Menu item identifier
let key = "key_example"; // String | Metadata key
apiInstance.deleteMenuItemMetadata(menuId, storeId, menuItemId, key, (error, data, response) => {
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


## getAllMenuMetadataByMenuIdAndStoreId

> RestApiArrayResultAllMetadataResult getAllMenuMetadataByMenuIdAndStoreId(menuId, storeId)

Get all menu metadata by menu ID and store ID

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
apiInstance.getAllMenuMetadataByMenuIdAndStoreId(menuId, storeId, (error, data, response) => {
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
 **storeId** | **Number**| Store identifier | 

### Return type

[**RestApiArrayResultAllMetadataResult**](RestApiArrayResultAllMetadataResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuById

> RestApiResultMenu getMenuById(menuId)

Get menu by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuById(menuId, (error, data, response) => {
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

[**RestApiResultMenu**](RestApiResultMenu.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getMenuItemMetadata

> RestApiArrayResultMetadata getMenuItemMetadata(menuId, storeId, menuItemId)

Get menu item metadata

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let menuItemId = 56; // Number | Menu item identifier
apiInstance.getMenuItemMetadata(menuId, storeId, menuItemId, (error, data, response) => {
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
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 

### Return type

[**RestApiArrayResultMetadata**](RestApiArrayResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuItemMetadataByKey

> RestApiResultMetadata getMenuItemMetadataByKey(menuId, storeId, menuItemId, key)

Get menu item metadata by key

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let menuItemId = 56; // Number | Menu item identifier
let key = "key_example"; // String | Metadata key
apiInstance.getMenuItemMetadataByKey(menuId, storeId, menuItemId, key, (error, data, response) => {
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
 **storeId** | **Number**| Store identifier | 
 **menuItemId** | **Number**| Menu item identifier | 
 **key** | **String**| Metadata key | 

### Return type

[**RestApiResultMetadata**](RestApiResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuItemOptionSetItemMetadata

> RestApiResultMetadata getMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId)

Get menu item option set item metadata by key

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let optionSetItemId = 56; // Number | Menu item option set item identifier
apiInstance.getMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, (error, data, response) => {
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
 **storeId** | **Number**| Store identifier | 
 **optionSetItemId** | **Number**| Menu item option set item identifier | 

### Return type

[**RestApiResultMetadata**](RestApiResultMetadata.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuName

> String getMenuName(menuId)

Get Menus Name

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuName(menuId, (error, data, response) => {
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

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getMenuStoreNames

> RestApiArrayResultMenuStoreNames getMenuStoreNames(menuId)

Get menus store names

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuStoreNames(menuId, (error, data, response) => {
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

[**RestApiArrayResultMenuStoreNames**](RestApiArrayResultMenuStoreNames.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getMenuTaxDetails

> RestApiArrayResultMenuTaxDetails getMenuTaxDetails(menuId)

Get menus tax details

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuTaxDetails(menuId, (error, data, response) => {
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

[**RestApiArrayResultMenuTaxDetails**](RestApiArrayResultMenuTaxDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenusByAppId

> RestApiArrayResultMenuSummary getMenusByAppId(appId)

Get menus by appId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let appId = "appId_example"; // String | Get Menus for this appId
apiInstance.getMenusByAppId(appId, (error, data, response) => {
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
 **appId** | **String**| Get Menus for this appId | 

### Return type

[**RestApiArrayResultMenuSummary**](RestApiArrayResultMenuSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getMenusCheckpoints

> RestApiArrayResultMenuCheckpoint getMenusCheckpoints(menuId)

Get a Menus Checkpoints

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenusCheckpoints(menuId, (error, data, response) => {
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

[**RestApiArrayResultMenuCheckpoint**](RestApiArrayResultMenuCheckpoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusDeleteTaxRate

> menusDeleteTaxRate(menuId, taxId)

Remove a Menus Tax Rate, can only remove a tax rate that does not have items/optionSetItems attached

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let taxId = 56; // Number | Id of Menu Tax to be removed
apiInstance.menusDeleteTaxRate(menuId, taxId, (error, data, response) => {
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
 **taxId** | **Number**| Id of Menu Tax to be removed | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusGetMenuBulkShowHide

> RestApiArrayResultMenuElementListResponse menusGetMenuBulkShowHide(menuId, isAvailable)

Get bulk show/hide menu items and option set items

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu id
let isAvailable = true; // Boolean | Is available flag
apiInstance.menusGetMenuBulkShowHide(menuId, isAvailable, (error, data, response) => {
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
 **menuId** | **Number**| Menu id | 
 **isAvailable** | **Boolean**| Is available flag | 

### Return type

[**RestApiArrayResultMenuElementListResponse**](RestApiArrayResultMenuElementListResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusIsWhiteLabelMigratedToRms

> Object menusIsWhiteLabelMigratedToRms(opts)

PRIVATE API, TEMPORARY ENDPOINT  RMS can check if a white label is migrated to RMS

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let opts = {
  'whiteLabelId': 56, // Number | white label id (integer)
  'appId': "appId_example" // String | appId (string)
};
apiInstance.menusIsWhiteLabelMigratedToRms(opts, (error, data, response) => {
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
 **whiteLabelId** | **Number**| white label id (integer) | [optional] 
 **appId** | **String**| appId (string) | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusMarkWhiteLabelAsMigratedToRms

> Object menusMarkWhiteLabelAsMigratedToRms(opts)

PRIVATE API, TEMPORARY ENDPOINT  RMS can set the white label as migrated to RMS, which will block all Menu editing operations via Zeus

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let opts = {
  'whiteLabelId': 56, // Number | white label id (integer)
  'appId': "appId_example" // String | appId (string)
};
apiInstance.menusMarkWhiteLabelAsMigratedToRms(opts, (error, data, response) => {
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
 **whiteLabelId** | **Number**| white label id (integer) | [optional] 
 **appId** | **String**| appId (string) | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusMarkWhiteLabelAsNotMigratedToRms

> Object menusMarkWhiteLabelAsNotMigratedToRms(opts)

PRIVATE API, TEMPORARY ENDPOINT  RMS can set the white label as NOT migrated to RMS, which will unblock all Menu editing operations via Zeus

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let opts = {
  'whiteLabelId': 56, // Number | white label id (integer)
  'appId': "appId_example" // String | appId (string)
};
apiInstance.menusMarkWhiteLabelAsNotMigratedToRms(opts, (error, data, response) => {
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
 **whiteLabelId** | **Number**| white label id (integer) | [optional] 
 **appId** | **String**| appId (string) | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusSetDisplayOnMenuTax

> menusSetDisplayOnMenuTax(menuId, show)

Set if tax shows for a Menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let show = true; // Boolean | Boolean show or dont show tax (Exclusive tax type can only ever be TRUE)
apiInstance.menusSetDisplayOnMenuTax(menuId, show, (error, data, response) => {
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
 **show** | **Boolean**| Boolean show or dont show tax (Exclusive tax type can only ever be TRUE) | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusSetItemDisplayOrders

> menusSetItemDisplayOrders(menuId, displayOrders)

Re-arrange Sections within a Menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let displayOrders = new Flipdish.MenuObjectDisplayOrders(); // MenuObjectDisplayOrders | Section Ids and their new display order
apiInstance.menusSetItemDisplayOrders(menuId, displayOrders, (error, data, response) => {
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
 **displayOrders** | [**MenuObjectDisplayOrders**](MenuObjectDisplayOrders.md)| Section Ids and their new display order | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## menusShowHideBulkItems

> RestApiArrayResultMenuElementEditResponse menusShowHideBulkItems(menuId, isAvailable, menuElements)

Bulk show/hide menu items or option set items

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu id
let isAvailable = true; // Boolean | Is available flag
let menuElements = [new Flipdish.MenuElementHide()]; // [MenuElementHide] | Elements to be show/hide
apiInstance.menusShowHideBulkItems(menuId, isAvailable, menuElements, (error, data, response) => {
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
 **menuId** | **Number**| Menu id | 
 **isAvailable** | **Boolean**| Is available flag | 
 **menuElements** | [**[MenuElementHide]**](MenuElementHide.md)| Elements to be show/hide | 

### Return type

[**RestApiArrayResultMenuElementEditResponse**](RestApiArrayResultMenuElementEditResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## menusUpdateTaxType

> menusUpdateTaxType(menuId, type)

Set the type of Tax on a Menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let type = "type_example"; // String | Type of Tax
apiInstance.menusUpdateTaxType(menuId, type, (error, data, response) => {
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
 **type** | **String**| Type of Tax | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## menusUpsertTaxRate

> MenuTaxRate menusUpsertTaxRate(menuId, taxRate)

Add/Update a Tax Rate

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let taxRate = new Flipdish.MenuTaxRate(); // MenuTaxRate | Tax rate to add/update
apiInstance.menusUpsertTaxRate(menuId, taxRate, (error, data, response) => {
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
 **taxRate** | [**MenuTaxRate**](MenuTaxRate.md)| Tax rate to add/update | 

### Return type

[**MenuTaxRate**](MenuTaxRate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## restoreAMenuCheckpoint

> restoreAMenuCheckpoint(menuId, checkpointId)

Restore a Menu to a checkpoint

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let checkpointId = 56; // Number | Checkpoint to restore menu to
apiInstance.restoreAMenuCheckpoint(menuId, checkpointId, (error, data, response) => {
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
 **checkpointId** | **Number**| Checkpoint to restore menu to | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setMenuItemMetadata

> setMenuItemMetadata(menuId, storeId, menuItemId, metadata)

Update menu item metadata

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let menuItemId = 56; // Number | Menu item identifier
let metadata = new Flipdish.Metadata(); // Metadata | Metadata object
apiInstance.setMenuItemMetadata(menuId, storeId, menuItemId, metadata, (error, data, response) => {
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


## setMenuItemOptionSetItemMetadata

> setMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, metadata)

Update menu item option set item metadata

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let storeId = 56; // Number | Store identifier
let optionSetItemId = 56; // Number | Menu item option set item identifier
let metadata = new Flipdish.Metadata(); // Metadata | Metadata object
apiInstance.setMenuItemOptionSetItemMetadata(menuId, storeId, optionSetItemId, metadata, (error, data, response) => {
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


## setMenuLock

> setMenuLock(menuId, locked)

Lock/Unlock a Menu for Editing

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let locked = true; // Boolean | True: Locks menu for editing, False: Unlocks for editing
apiInstance.setMenuLock(menuId, locked, (error, data, response) => {
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
 **locked** | **Boolean**| True: Locks menu for editing, False: Unlocks for editing | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## setMenuName

> setMenuName(menuId, name)

Set Menus Name

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let name = "name_example"; // String | Name to set for this Menu
apiInstance.setMenuName(menuId, name, (error, data, response) => {
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
 **name** | **String**| Name to set for this Menu | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateMenu

> updateMenu(menuId, menu)

Update menu

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let menu = new Flipdish.MenuBase(); // MenuBase | Full menu data
apiInstance.updateMenu(menuId, menu, (error, data, response) => {
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
 **menu** | [**MenuBase**](MenuBase.md)| Full menu data | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## uploadMenuImage

> RestApiStringResult uploadMenuImage(menuId, Image)

Upload menu image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let menuId = 56; // Number | Menu identifier
let Image = "/path/to/file"; // File | Menu image
apiInstance.uploadMenuImage(menuId, Image, (error, data, response) => {
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
 **Image** | **File**| Menu image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## uploadNewMenuForApp

> Number uploadNewMenuForApp(appId, Menu)

Create a new menu from xlsx file.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenusApi();
let appId = "appId_example"; // String | App identifier
let Menu = "/path/to/file"; // File | Uploaded xlsx menu
apiInstance.uploadNewMenuForApp(appId, Menu, (error, data, response) => {
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
 **appId** | **String**| App identifier | 
 **Menu** | **File**| Uploaded xlsx menu | 

### Return type

**Number**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml

