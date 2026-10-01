# Flipdish.WebsiteApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestimonial**](WebsiteApi.md#addTestimonial) | **POST** /api/v1.0/{appId}/website/testimonial | 
[**deleteTestimonial**](WebsiteApi.md#deleteTestimonial) | **DELETE** /api/v1.0/{appId}/website/testimonial/{testimonialId} | 
[**deleteWebsiteImage**](WebsiteApi.md#deleteWebsiteImage) | **DELETE** /api/v1.0/{appId}/website/image/{imageId} | 
[**editTestimonial**](WebsiteApi.md#editTestimonial) | **POST** /api/v1.0/{appId}/website/testimonial/{testimonialId} | 
[**getIndexConfiguration**](WebsiteApi.md#getIndexConfiguration) | **GET** /api/v1.0/{appId}/website/index | 
[**setIndexConfiguration**](WebsiteApi.md#setIndexConfiguration) | **POST** /api/v1.0/{appId}/website/index | 
[**uploadWebsiteImage**](WebsiteApi.md#uploadWebsiteImage) | **POST** /api/v1.0/{appId}/website/image/{imageLocation} | 
[**websiteCheckNow**](WebsiteApi.md#websiteCheckNow) | **GET** /api/v1.0/{appId}/website/dnscheck | 



## addTestimonial

> RestApiResultWebsiteTestimonial addTestimonial(appId, testimonial)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let testimonial = new Flipdish.WebsiteTestimonialBase(); // WebsiteTestimonialBase | 
apiInstance.addTestimonial(appId, testimonial, (error, data, response) => {
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
 **testimonial** | [**WebsiteTestimonialBase**](WebsiteTestimonialBase.md)|  | 

### Return type

[**RestApiResultWebsiteTestimonial**](RestApiResultWebsiteTestimonial.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteTestimonial

> deleteTestimonial(appId, testimonialId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let testimonialId = 56; // Number | 
apiInstance.deleteTestimonial(appId, testimonialId, (error, data, response) => {
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
 **testimonialId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteWebsiteImage

> deleteWebsiteImage(appId, imageId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let imageId = 56; // Number | 
apiInstance.deleteWebsiteImage(appId, imageId, (error, data, response) => {
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
 **imageId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## editTestimonial

> RestApiResultWebsiteTestimonial editTestimonial(appId, testimonialId, testimonial)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let testimonialId = 56; // Number | 
let testimonial = new Flipdish.WebsiteTestimonialBase(); // WebsiteTestimonialBase | 
apiInstance.editTestimonial(appId, testimonialId, testimonial, (error, data, response) => {
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
 **testimonialId** | **Number**|  | 
 **testimonial** | [**WebsiteTestimonialBase**](WebsiteTestimonialBase.md)|  | 

### Return type

[**RestApiResultWebsiteTestimonial**](RestApiResultWebsiteTestimonial.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getIndexConfiguration

> RestApiResultIndexPage getIndexConfiguration(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
apiInstance.getIndexConfiguration(appId, (error, data, response) => {
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

[**RestApiResultIndexPage**](RestApiResultIndexPage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setIndexConfiguration

> RestApiResultIndexPageBase setIndexConfiguration(appId, indexPage)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let indexPage = new Flipdish.IndexPageBase(); // IndexPageBase | 
apiInstance.setIndexConfiguration(appId, indexPage, (error, data, response) => {
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
 **indexPage** | [**IndexPageBase**](IndexPageBase.md)|  | 

### Return type

[**RestApiResultIndexPageBase**](RestApiResultIndexPageBase.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## uploadWebsiteImage

> RestApiResultWebsiteImage uploadWebsiteImage(appId, imageLocation, Image)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
let imageLocation = "imageLocation_example"; // String | 
let Image = "/path/to/file"; // File | App Logo
apiInstance.uploadWebsiteImage(appId, imageLocation, Image, (error, data, response) => {
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
 **imageLocation** | **String**|  | 
 **Image** | **File**| App Logo | 

### Return type

[**RestApiResultWebsiteImage**](RestApiResultWebsiteImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## websiteCheckNow

> websiteCheckNow(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebsiteApi();
let appId = "appId_example"; // String | 
apiInstance.websiteCheckNow(appId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

