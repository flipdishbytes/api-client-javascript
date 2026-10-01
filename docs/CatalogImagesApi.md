# Flipdish.CatalogImagesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadCatalogImage**](CatalogImagesApi.md#uploadCatalogImage) | **POST** /api/v1.0/{appId}/catalog/images | Upload a Catalog Image



## uploadCatalogImage

> CatalogImage uploadCatalogImage(appId, Image)

Upload a Catalog Image

[BETA - this endpoint is under development, do not use it in your production system]

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CatalogImagesApi();
let appId = "appId_example"; // String | 
let Image = "/path/to/file"; // File | Catalog image
apiInstance.uploadCatalogImage(appId, Image, (error, data, response) => {
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
 **Image** | **File**| Catalog image | 

### Return type

[**CatalogImage**](CatalogImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, ImageUri

