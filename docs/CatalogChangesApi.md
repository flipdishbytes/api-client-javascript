# Flipdish.CatalogChangesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPendingMenuChanges**](CatalogChangesApi.md#getPendingMenuChanges) | **GET** /api/v1.0/{appId}/menus/catalog-changes | Get menu pending changes from Catalog groups and items
[**getPendingMenuChangesSummaries**](CatalogChangesApi.md#getPendingMenuChangesSummaries) | **GET** /api/v1.0/{appId}/menus/catalog-changes/summaries | Get menu pending changes summaries by appId
[**publishPendingMenuChanges**](CatalogChangesApi.md#publishPendingMenuChanges) | **POST** /api/v1.0/{appId}/menus/catalog-changes/publish | Update menus with the pending changes from Catalog groups and items



## getPendingMenuChanges

> RestApiPaginationResultPendingMenuChanges getPendingMenuChanges(appId, opts)

Get menu pending changes from Catalog groups and items

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogChangesApi();
let appId = "appId_example"; // String | 
let opts = {
  'menuId': 56, // Number | 
  'catalogItemId': "catalogItemId_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getPendingMenuChanges(appId, opts, (error, data, response) => {
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
 **menuId** | **Number**|  | [optional] 
 **catalogItemId** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultPendingMenuChanges**](RestApiPaginationResultPendingMenuChanges.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPendingMenuChangesSummaries

> RestApiArrayResultPendingMenuChangesSummaries getPendingMenuChangesSummaries(appId)

Get menu pending changes summaries by appId

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogChangesApi();
let appId = "appId_example"; // String | 
apiInstance.getPendingMenuChangesSummaries(appId, (error, data, response) => {
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

### Return type

[**RestApiArrayResultPendingMenuChangesSummaries**](RestApiArrayResultPendingMenuChangesSummaries.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## publishPendingMenuChanges

> publishPendingMenuChanges(appId, publishMenuChanges)

Update menus with the pending changes from Catalog groups and items

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogChangesApi();
let appId = "appId_example"; // String | 
let publishMenuChanges = new Flipdish.PublishMenuChanges(); // PublishMenuChanges | 
apiInstance.publishPendingMenuChanges(appId, publishMenuChanges, (error, data, response) => {
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
 **publishMenuChanges** | [**PublishMenuChanges**](PublishMenuChanges.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

