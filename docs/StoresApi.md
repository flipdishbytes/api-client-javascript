# Flipdish.StoresApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStoreById**](StoresApi.md#getStoreById) | **GET** /api/v1.0/stores/{storeId} | Get store by identifier
[**getStores**](StoresApi.md#getStores) | **GET** /api/v1.0/stores | Get all stores


<a name="getStoreById"></a>
# **getStoreById**
> RestApiResultStore getStoreById(storeId)

Get store by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoresApi();

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreById(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store identifier | 

### Return type

[**RestApiResultStore**](RestApiResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStores"></a>
# **getStores**
> RestApiPaginationResultStore getStores(opts)

Get all stores

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoresApi();

var opts = { 
  'searchQuery': "searchQuery_example", // String | Search query
  'page': 56, // Number | Requested page index
  'limit': 56 // Number | Requested page limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStores(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchQuery** | **String**| Search query | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultStore**](RestApiPaginationResultStore.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

