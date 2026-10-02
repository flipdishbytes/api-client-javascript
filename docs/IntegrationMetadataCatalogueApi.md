# Flipdish.IntegrationMetadataCatalogueApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrationMetadataCatalogueGetPixelPointProducts**](IntegrationMetadataCatalogueApi.md#integrationMetadataCatalogueGetPixelPointProducts) | **GET** /api/v1.0/integrationmetadatacatalogue/pixelpoint/stores/{storeId}/products | 



## integrationMetadataCatalogueGetPixelPointProducts

> RestApiResultPixelPointProductCatalogue integrationMetadataCatalogueGetPixelPointProducts(storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.IntegrationMetadataCatalogueApi();
let storeId = 56; // Number | 
let opts = {
  'nameContains': "nameContains_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.integrationMetadataCatalogueGetPixelPointProducts(storeId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **nameContains** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**RestApiResultPixelPointProductCatalogue**](RestApiResultPixelPointProductCatalogue.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

