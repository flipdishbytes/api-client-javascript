# Flipdish.StoreGroupsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignStoresToStoreGroup**](StoreGroupsApi.md#assignStoresToStoreGroup) | **POST** /api/v1.0/{appId}/storegroups/{storeGroupId}/assignStores | 
[**createStoreGroup**](StoreGroupsApi.md#createStoreGroup) | **POST** /api/v1.0/{appNameId}/storegroups | 
[**getStoreGroup**](StoreGroupsApi.md#getStoreGroup) | **GET** /api/v1.0/storegroups/{storeGroupId} | 
[**getStoreGroups**](StoreGroupsApi.md#getStoreGroups) | **GET** /api/v1.0/{appNameId}/storegroups | 
[**getStoreGroupsExtended**](StoreGroupsApi.md#getStoreGroupsExtended) | **GET** /api/v1.0/{appNameId}/storegroups/extended | 
[**removeStoreGroup**](StoreGroupsApi.md#removeStoreGroup) | **DELETE** /api/v1.0/storegroups/{storeGroupId} | 
[**setMenuMessagePerDeliveryType**](StoreGroupsApi.md#setMenuMessagePerDeliveryType) | **POST** /api/v1.0/storegroups/{storeGroupId}/{deliveryType}/MenuMessagePerDeliveryType | 
[**updateStoreGroup**](StoreGroupsApi.md#updateStoreGroup) | **POST** /api/v1.0/storegroups/{storeGroupId} | 



## assignStoresToStoreGroup

> assignStoresToStoreGroup(appId, storeGroupId, storeIds)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let appId = "appId_example"; // String | 
let storeGroupId = 56; // Number | 
let storeIds = [null]; // [Number] | 
apiInstance.assignStoresToStoreGroup(appId, storeGroupId, storeIds, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 
 **storeIds** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createStoreGroup

> RestApiResultStoreGroup createStoreGroup(appNameId, storeGroup)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let appNameId = "appNameId_example"; // String | 
let storeGroup = new Flipdish.StoreGroupBase(); // StoreGroupBase | 
apiInstance.createStoreGroup(appNameId, storeGroup, (error, data, response) => {
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
 **appNameId** | **String**|  | 
 **storeGroup** | [**StoreGroupBase**](StoreGroupBase.md)|  | 

### Return type

[**RestApiResultStoreGroup**](RestApiResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreGroup

> RestApiResultStoreGroup getStoreGroup(storeGroupId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let storeGroupId = 56; // Number | 
apiInstance.getStoreGroup(storeGroupId, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 

### Return type

[**RestApiResultStoreGroup**](RestApiResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreGroups

> RestApiPaginationResultStoreGroup getStoreGroups(appNameId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let appNameId = "appNameId_example"; // String | 
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getStoreGroups(appNameId, opts, (error, data, response) => {
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
 **appNameId** | **String**|  | 
 **searchQuery** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreGroup**](RestApiPaginationResultStoreGroup.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStoreGroupsExtended

> RestApiPaginationResultStoreGroupExtended getStoreGroupsExtended(appNameId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let appNameId = "appNameId_example"; // String | 
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'groupingRadius': 56 // Number | 
};
apiInstance.getStoreGroupsExtended(appNameId, opts, (error, data, response) => {
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
 **appNameId** | **String**|  | 
 **searchQuery** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **groupingRadius** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultStoreGroupExtended**](RestApiPaginationResultStoreGroupExtended.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## removeStoreGroup

> removeStoreGroup(storeGroupId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let storeGroupId = 56; // Number | 
apiInstance.removeStoreGroup(storeGroupId, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setMenuMessagePerDeliveryType

> setMenuMessagePerDeliveryType(storeGroupId, deliveryType, menuMessage)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let storeGroupId = 56; // Number | 
let deliveryType = "deliveryType_example"; // String | 
let menuMessage = "menuMessage_example"; // String | 
apiInstance.setMenuMessagePerDeliveryType(storeGroupId, deliveryType, menuMessage, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 
 **deliveryType** | **String**|  | 
 **menuMessage** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateStoreGroup

> RestApiResultStoreGroupBase updateStoreGroup(storeGroupId, storeGroup)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StoreGroupsApi();
let storeGroupId = 56; // Number | 
let storeGroup = new Flipdish.StoreGroupBase(); // StoreGroupBase | 
apiInstance.updateStoreGroup(storeGroupId, storeGroup, (error, data, response) => {
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
 **storeGroupId** | **Number**|  | 
 **storeGroup** | [**StoreGroupBase**](StoreGroupBase.md)|  | 

### Return type

[**RestApiResultStoreGroupBase**](RestApiResultStoreGroupBase.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

