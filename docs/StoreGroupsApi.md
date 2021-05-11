# Flipdish.StoreGroupsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStoreGroup**](StoreGroupsApi.md#createStoreGroup) | **POST** /api/v1.0/{appNameId}/storegroups | Creates a Store Group  It will be attached to an existing App
[**getStoreGroup**](StoreGroupsApi.md#getStoreGroup) | **GET** /api/v1.0/storegroups/{storeGroupId} | Returns a Store Groups
[**getStoreGroups**](StoreGroupsApi.md#getStoreGroups) | **GET** /api/v1.0/{appNameId}/storegroups | Returns a paginated list of Store Groups
[**getStoreGroupsExtended**](StoreGroupsApi.md#getStoreGroupsExtended) | **GET** /api/v1.0/{appNameId}/storegroups/extended | [PRIVATE API] Returns a paginated list of Extended Store Groups
[**removeStoreGroup**](StoreGroupsApi.md#removeStoreGroup) | **DELETE** /api/v1.0/storegroups/{storeGroupId} | Deletes a Store Group  Can only remove a store group if there is no stores attached to the group
[**updateStoreGroup**](StoreGroupsApi.md#updateStoreGroup) | **POST** /api/v1.0/storegroups/{storeGroupId} | Updates Store Group


<a name="createStoreGroup"></a>
# **createStoreGroup**
> RestApiResultStoreGroup createStoreGroup(appNameId, storeGroup)

Creates a Store Group  It will be attached to an existing App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var appNameId = "appNameId_example"; // String | App Name Id

var storeGroup = new Flipdish.StoreGroupBase(); // StoreGroupBase | Store group definition


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStoreGroup(appNameId, storeGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appNameId** | **String**| App Name Id | 
 **storeGroup** | [**StoreGroupBase**](StoreGroupBase.md)| Store group definition | 

### Return type

[**RestApiResultStoreGroup**](RestApiResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreGroup"></a>
# **getStoreGroup**
> RestApiResultStoreGroup getStoreGroup(storeGroupId)

Returns a Store Groups

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var storeGroupId = 56; // Number | Store Group Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreGroup(storeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeGroupId** | **Number**| Store Group Id | 

### Return type

[**RestApiResultStoreGroup**](RestApiResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreGroups"></a>
# **getStoreGroups**
> RestApiPaginationResultStoreGroup getStoreGroups(appNameId, opts)

Returns a paginated list of Store Groups

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var appNameId = "appNameId_example"; // String | App Name Id

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
apiInstance.getStoreGroups(appNameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appNameId** | **String**| App Name Id | 
 **searchQuery** | **String**| Search query | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultStoreGroup**](RestApiPaginationResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreGroupsExtended"></a>
# **getStoreGroupsExtended**
> RestApiPaginationResultStoreGroupExtended getStoreGroupsExtended(appNameId, opts)

[PRIVATE API] Returns a paginated list of Extended Store Groups

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var appNameId = "appNameId_example"; // String | App Name Id

var opts = { 
  'searchQuery': "searchQuery_example", // String | Search query
  'page': 56, // Number | Requested page index
  'limit': 56, // Number | Requested page limit
  'groupingRadius': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreGroupsExtended(appNameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appNameId** | **String**| App Name Id | 
 **searchQuery** | **String**| Search query | [optional] 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 
 **groupingRadius** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreGroupExtended**](RestApiPaginationResultStoreGroupExtended.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeStoreGroup"></a>
# **removeStoreGroup**
> removeStoreGroup(storeGroupId)

Deletes a Store Group  Can only remove a store group if there is no stores attached to the group

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var storeGroupId = 56; // Number | Store Group Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeStoreGroup(storeGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeGroupId** | **Number**| Store Group Id | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateStoreGroup"></a>
# **updateStoreGroup**
> RestApiResultStoreGroupBase updateStoreGroup(storeGroupId, storeGroup)

Updates Store Group

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StoreGroupsApi();

var storeGroupId = 56; // Number | Store Group Id

var storeGroup = new Flipdish.StoreGroupBase(); // StoreGroupBase | Store Group Delta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStoreGroup(storeGroupId, storeGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeGroupId** | **Number**| Store Group Id | 
 **storeGroup** | [**StoreGroupBase**](StoreGroupBase.md)| Store Group Delta | 

### Return type

[**RestApiResultStoreGroupBase**](RestApiResultStoreGroupBase.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

