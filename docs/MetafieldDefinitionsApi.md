# Flipdish.MetafieldDefinitionsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMetafieldDefinition**](MetafieldDefinitionsApi.md#createMetafieldDefinition) | **POST** /api/v1.0/{appId}/metafields/definitions/{ownerEntity} | 
[**getMetafieldDefinitionByKey**](MetafieldDefinitionsApi.md#getMetafieldDefinitionByKey) | **GET** /api/v1.0/{appId}/metafields/definitions/{ownerEntity}/{key} | 
[**getMetafieldDefinitions**](MetafieldDefinitionsApi.md#getMetafieldDefinitions) | **GET** /api/v1.0/{appId}/metafields/definitions/{ownerEntity} | 
[**getOwnerEntityConfigurations**](MetafieldDefinitionsApi.md#getOwnerEntityConfigurations) | **GET** /api/v1.0/{appId}/metafields/definitions | 
[**getOwnerEntityRecommendations**](MetafieldDefinitionsApi.md#getOwnerEntityRecommendations) | **GET** /api/v1.0/{appId}/metafields/definitions/recommendations/{ownerEntity} | 
[**updateMetafieldDefinition**](MetafieldDefinitionsApi.md#updateMetafieldDefinition) | **POST** /api/v1.0/{appId}/metafields/definitions/{ownerEntity}/{key} | 



## createMetafieldDefinition

> RestApiResultMetafieldDefinition createMetafieldDefinition(appId, ownerEntity, createMetafieldDefinition)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
let ownerEntity = "ownerEntity_example"; // String | 
let createMetafieldDefinition = new Flipdish.CreateMetafieldDefinition(); // CreateMetafieldDefinition | 
apiInstance.createMetafieldDefinition(appId, ownerEntity, createMetafieldDefinition, (error, data, response) => {
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
 **ownerEntity** | **String**|  | 
 **createMetafieldDefinition** | [**CreateMetafieldDefinition**](CreateMetafieldDefinition.md)|  | 

### Return type

[**RestApiResultMetafieldDefinition**](RestApiResultMetafieldDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, IsReadOnly, OwnerEntity, Key, ValueType, Name, Description, Behaviors


## getMetafieldDefinitionByKey

> RestApiResultMetafieldDefinition getMetafieldDefinitionByKey(appId, ownerEntity, key)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
let ownerEntity = "ownerEntity_example"; // String | 
let key = "key_example"; // String | 
apiInstance.getMetafieldDefinitionByKey(appId, ownerEntity, key, (error, data, response) => {
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
 **ownerEntity** | **String**|  | 
 **key** | **String**|  | 

### Return type

[**RestApiResultMetafieldDefinition**](RestApiResultMetafieldDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, IsReadOnly, OwnerEntity, Key, ValueType, Name, Description, Behaviors


## getMetafieldDefinitions

> RestApiPaginationResultMetafieldDefinition getMetafieldDefinitions(appId, ownerEntity, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
let ownerEntity = "ownerEntity_example"; // String | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getMetafieldDefinitions(appId, ownerEntity, opts, (error, data, response) => {
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
 **ownerEntity** | **String**|  | 
 **searchTerm** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultMetafieldDefinition**](RestApiPaginationResultMetafieldDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getOwnerEntityConfigurations

> OwnerEntityConfigurations getOwnerEntityConfigurations(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
apiInstance.getOwnerEntityConfigurations(appId, (error, data, response) => {
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

[**OwnerEntityConfigurations**](OwnerEntityConfigurations.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Configurations


## getOwnerEntityRecommendations

> RestApiPaginationResultMetafieldDefinitionRecommendation getOwnerEntityRecommendations(appId, ownerEntity, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
let ownerEntity = "ownerEntity_example"; // String | 
let opts = {
  'searchTerm': "searchTerm_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getOwnerEntityRecommendations(appId, ownerEntity, opts, (error, data, response) => {
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
 **ownerEntity** | **String**|  | 
 **searchTerm** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultMetafieldDefinitionRecommendation**](RestApiPaginationResultMetafieldDefinitionRecommendation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateMetafieldDefinition

> RestApiResultMetafieldDefinition updateMetafieldDefinition(appId, ownerEntity, key, updateMetafieldDefinition)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MetafieldDefinitionsApi();
let appId = "appId_example"; // String | 
let ownerEntity = "ownerEntity_example"; // String | 
let key = "key_example"; // String | 
let updateMetafieldDefinition = new Flipdish.UpdateMetafieldDefinition(); // UpdateMetafieldDefinition | 
apiInstance.updateMetafieldDefinition(appId, ownerEntity, key, updateMetafieldDefinition, (error, data, response) => {
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
 **ownerEntity** | **String**|  | 
 **key** | **String**|  | 
 **updateMetafieldDefinition** | [**UpdateMetafieldDefinition**](UpdateMetafieldDefinition.md)|  | 

### Return type

[**RestApiResultMetafieldDefinition**](RestApiResultMetafieldDefinition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, IsReadOnly, OwnerEntity, Key, ValueType, Name, Description, Behaviors

