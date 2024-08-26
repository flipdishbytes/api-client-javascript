# Flipdish.CatalogProductsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveProduct**](CatalogProductsApi.md#archiveProduct) | **POST** /api/v1.0/{appId}/catalog/products/{catalogItemId}/archive | Archive Product
[**createProduct**](CatalogProductsApi.md#createProduct) | **POST** /api/v1.0/{appId}/catalog/products | Create a Product
[**duplicateProduct**](CatalogProductsApi.md#duplicateProduct) | **POST** /api/v1.0/{appId}/catalog/products/{catalogItemId}/duplicate | Duplicate Product
[**getProductById**](CatalogProductsApi.md#getProductById) | **GET** /api/v1.0/{appId}/catalog/products/{catalogItemId} | Get Product by Id
[**getProducts**](CatalogProductsApi.md#getProducts) | **GET** /api/v1.0/{appId}/catalog/products | Get paginated products by app name id filtered by types
[**updateProduct**](CatalogProductsApi.md#updateProduct) | **POST** /api/v1.0/{appId}/catalog/products/{catalogItemId} | Update Product



## archiveProduct

> archiveProduct(appId, catalogItemId)

Archive Product

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.archiveProduct(appId, catalogItemId, (error, data, response) => {
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


## createProduct

> RestApiResultProduct createProduct(appId, createProduct)

Create a Product

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let createProduct = new Flipdish.CreateProduct(); // CreateProduct | 
apiInstance.createProduct(appId, createProduct, (error, data, response) => {
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
 **createProduct** | [**CreateProduct**](CreateProduct.md)|  | 

### Return type

[**RestApiResultProduct**](RestApiResultProduct.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, CatalogItemId, IsArchived, Groups, ProductType, Sku, Name, Description, Price, ImageFileName, Alcohol


## duplicateProduct

> duplicateProduct(appId, catalogItemId)

Duplicate Product

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.duplicateProduct(appId, catalogItemId, (error, data, response) => {
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


## getProductById

> Product getProductById(appId, catalogItemId)

Get Product by Id

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
apiInstance.getProductById(appId, catalogItemId, (error, data, response) => {
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

[**Product**](Product.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, CatalogItemId, IsArchived, Groups, ProductType, Sku, Name, Description, Price, ImageFileName, Alcohol


## getProducts

> RestApiPaginationResultProduct getProducts(appId, productTypes, opts)

Get paginated products by app name id filtered by types

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let productTypes = ["null"]; // [String] | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getProducts(appId, productTypes, opts, (error, data, response) => {
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
 **productTypes** | [**[String]**](String.md)|  | 
 **searchTerm** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultProduct**](RestApiPaginationResultProduct.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateProduct

> updateProduct(appId, catalogItemId, updateProduct)

Update Product

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogProductsApi();
let appId = "appId_example"; // String | 
let catalogItemId = "catalogItemId_example"; // String | 
let updateProduct = new Flipdish.UpdateProduct(); // UpdateProduct | 
apiInstance.updateProduct(appId, catalogItemId, updateProduct, (error, data, response) => {
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
 **updateProduct** | [**UpdateProduct**](UpdateProduct.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

