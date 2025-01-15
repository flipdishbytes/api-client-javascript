# Flipdish.SearchApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchRestaurants**](SearchApi.md#searchRestaurants) | **GET** /api/v1.0/search/restaurants | 



## searchRestaurants

> RestApiPaginationResultRestaurant searchRestaurants(query, countryId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SearchApi();
let query = "query_example"; // String | 
let countryId = "countryId_example"; // String | 
let opts = {
  'includeArchivedStores': "includeArchivedStores_example", // String | 
  'searchType': "searchType_example", // String | 
  'publishedStatus': "publishedStatus_example", // String | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.searchRestaurants(query, countryId, opts, (error, data, response) => {
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
 **query** | **String**|  | 
 **countryId** | **String**|  | 
 **includeArchivedStores** | **String**|  | [optional] 
 **searchType** | **String**|  | [optional] 
 **publishedStatus** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultRestaurant**](RestApiPaginationResultRestaurant.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

