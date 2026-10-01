# Flipdish.CatalogItemsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveCatalogItem**](CatalogItemsApi.md#archiveCatalogItem) | **POST** /api/v1.0/{appId}/catalog/items/{catalogItemId}/archive | Archive Catalog Item
[**createCatalogItem**](CatalogItemsApi.md#createCatalogItem) | **POST** /api/v1.0/{appId}/catalog/items | Create a Catalog Item
[**duplicateCatalogItem**](CatalogItemsApi.md#duplicateCatalogItem) | **POST** /api/v1.0/{appId}/catalog/items/{catalogItemId}/duplicate | Duplicate Catalog Item
[**getCatalogItemById**](CatalogItemsApi.md#getCatalogItemById) | **GET** /api/v1.0/{appId}/catalog/items/{catalogItemId} | Get item by Id
[**getItems**](CatalogItemsApi.md#getItems) | **GET** /api/v1.0/{appId}/catalog/items | Get paginated items by app name id filtered by types
[**updateCatalogItem**](CatalogItemsApi.md#updateCatalogItem) | **POST** /api/v1.0/{appId}/catalog/items/{catalogItemId} | Update Catalog Item



## archiveCatalogItem

> archiveCatalogItem(appId, catalogItemId)

Archive Catalog Item

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.archiveCatalogItem(appId, catalogItemId, (error, data, response) => {
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
 **appId** | **String**|  | 
 **catalogItemId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createCatalogItem

> RestApiResultCatalogItem createCatalogItem(appId, createCatalogItem)

Create a Catalog Item

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let createCatalogItem = new Flipdish.CreateCatalogItem(); // CreateCatalogItem | 
apiInstance.createCatalogItem(appId, createCatalogItem, (error, data, response) => {
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
 **createCatalogItem** | [**CreateCatalogItem**](CreateCatalogItem.md)|  | 

### Return type

[**RestApiResultCatalogItem**](RestApiResultCatalogItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, CatalogItemId, IsArchived, Groups, ItemType, Sku, Name, Description, Price, ImageFileName, Alcohol


## duplicateCatalogItem

> duplicateCatalogItem(appId, catalogItemId)

Duplicate Catalog Item

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.duplicateCatalogItem(appId, catalogItemId, (error, data, response) => {
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
 **appId** | **String**|  | 
 **catalogItemId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getCatalogItemById

> CatalogItem getCatalogItemById(appId, catalogItemId)

Get item by Id

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.getCatalogItemById(appId, catalogItemId, (error, data, response) => {
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
 **catalogItemId** | **String**|  | 

### Return type

[**CatalogItem**](CatalogItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, CatalogItemId, IsArchived, Groups, ItemType, Sku, Name, Description, Price, ImageFileName, Alcohol


## getItems

> RestApiPaginationResultCatalogItem getItems(appId, itemTypes, opts)

Get paginated items by app name id filtered by types

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let itemTypes = ["null"]; // [String] | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getItems(appId, itemTypes, opts, (error, data, response) => {
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
 **itemTypes** | [**[String]**](String.md)|  | 
 **searchTerm** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultCatalogItem**](RestApiPaginationResultCatalogItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateCatalogItem

> updateCatalogItem(appId, catalogItemId, updateCatalogItem)

Update Catalog Item

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogItemsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
let updateCatalogItem = new Flipdish.UpdateCatalogItem(); // UpdateCatalogItem | 
apiInstance.updateCatalogItem(appId, catalogItemId, updateCatalogItem, (error, data, response) => {
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
 **appId** | **String**|  | 
 **catalogItemId** | **String**|  | 
 **updateCatalogItem** | [**UpdateCatalogItem**](UpdateCatalogItem.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

