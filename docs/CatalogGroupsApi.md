# Flipdish.CatalogGroupsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveGroup**](CatalogGroupsApi.md#archiveGroup) | **POST** /api/v1.0/{appId}/catalog/groups/{catalogItemId}/archive | Archive Catalog Group
[**createGroup**](CatalogGroupsApi.md#createGroup) | **POST** /api/v1.0/{appId}/catalog/groups | Create a Catalog Group
[**duplicateGroup**](CatalogGroupsApi.md#duplicateGroup) | **POST** /api/v1.0/{appId}/catalog/groups/{catalogItemId}/duplicate | Duplicate Catalog Group
[**getGroupById**](CatalogGroupsApi.md#getGroupById) | **GET** /api/v1.0/{appId}/catalog/groups/{catalogItemId} | Get group by Id
[**getGroups**](CatalogGroupsApi.md#getGroups) | **GET** /api/v1.0/{appId}/catalog/groups | Get paginated groups by app name id filtered by types
[**updateGroup**](CatalogGroupsApi.md#updateGroup) | **POST** /api/v1.0/{appId}/catalog/groups/{catalogItemId} | Update Catalog Group



## archiveGroup

> archiveGroup(appId, catalogItemId)

Archive Catalog Group

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.archiveGroup(appId, catalogItemId, (error, data, response) => {
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


## createGroup

> RestApiResultGroup createGroup(appId, createGroup)

Create a Catalog Group

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let createGroup = new Flipdish.CreateGroup(); // CreateGroup | 
apiInstance.createGroup(appId, createGroup, (error, data, response) => {
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
 **createGroup** | [**CreateGroup**](CreateGroup.md)|  | 

### Return type

[**RestApiResultGroup**](RestApiResultGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, MinSelectCount, MaxSelectCount, Products, GroupType, Sku, Name, AutogenerateDisplayText, ImageFileName


## duplicateGroup

> duplicateGroup(appId, catalogItemId)

Duplicate Catalog Group

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.duplicateGroup(appId, catalogItemId, (error, data, response) => {
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


## getGroupById

> Group getGroupById(appId, catalogItemId)

Get group by Id

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.getGroupById(appId, catalogItemId, (error, data, response) => {
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

[**Group**](Group.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, CatalogGroupId, CatalogItemId, IsArchived, MinSelectCount, Products, GroupType, Sku, Name, AutogenerateDisplayText, ImageFileName


## getGroups

> RestApiPaginationResultGroup getGroups(appId, groupTypes, opts)

Get paginated groups by app name id filtered by types

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let groupTypes = ["null"]; // [String] | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getGroups(appId, groupTypes, opts, (error, data, response) => {
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
 **groupTypes** | [**[String]**](String.md)|  | 
 **searchTerm** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultGroup**](RestApiPaginationResultGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateGroup

> updateGroup(appId, catalogItemId, updateGroup)

Update Catalog Group

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogGroupsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
let updateGroup = new Flipdish.UpdateGroup(); // UpdateGroup | 
apiInstance.updateGroup(appId, catalogItemId, updateGroup, (error, data, response) => {
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
 **updateGroup** | [**UpdateGroup**](UpdateGroup.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml
