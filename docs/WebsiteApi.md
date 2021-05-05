# FlipdishOpenApiV10.WebsiteApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestimonial**](WebsiteApi.md#addTestimonial) | **POST** /api/v1.0/{appId}/website/testimonial | Add a testimonial
[**deleteTestimonial**](WebsiteApi.md#deleteTestimonial) | **DELETE** /api/v1.0/{appId}/website/testimonial/{testimonialId} | Delete a testimonial
[**deleteWebsiteImage**](WebsiteApi.md#deleteWebsiteImage) | **DELETE** /api/v1.0/{appId}/website/image/{imageId} | Delete Website Image
[**editTestimonial**](WebsiteApi.md#editTestimonial) | **POST** /api/v1.0/{appId}/website/testimonial/{testimonialId} | Edit a testimonial
[**getIndexConfiguration**](WebsiteApi.md#getIndexConfiguration) | **GET** /api/v1.0/{appId}/website/index | Get Index Configuration
[**setIndexConfiguration**](WebsiteApi.md#setIndexConfiguration) | **POST** /api/v1.0/{appId}/website/index | Set Index Configuration
[**uploadWebsiteImage**](WebsiteApi.md#uploadWebsiteImage) | **POST** /api/v1.0/{appId}/website/image/{imageLocation} | Upload Website Image
[**websiteCheckNow**](WebsiteApi.md#websiteCheckNow) | **GET** /api/v1.0/{appId}/website/dnscheck | Triggers a Check DNS Process


<a name="addTestimonial"></a>
# **addTestimonial**
> RestApiResultWebsiteTestimonial addTestimonial(appId, testimonial)

Add a testimonial

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var testimonial = new FlipdishOpenApiV10.WebsiteTestimonialBase(); // WebsiteTestimonialBase | Testimonial to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTestimonial(appId, testimonial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **testimonial** | [**WebsiteTestimonialBase**](WebsiteTestimonialBase.md)| Testimonial to be added | 

### Return type

[**RestApiResultWebsiteTestimonial**](RestApiResultWebsiteTestimonial.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteTestimonial"></a>
# **deleteTestimonial**
> deleteTestimonial(appId, testimonialId)

Delete a testimonial

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var testimonialId = 56; // Number | Id of the testimonial to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTestimonial(appId, testimonialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **testimonialId** | **Number**| Id of the testimonial to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteWebsiteImage"></a>
# **deleteWebsiteImage**
> deleteWebsiteImage(appId, imageId)

Delete Website Image

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var imageId = 56; // Number | Id of the image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebsiteImage(appId, imageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **imageId** | **Number**| Id of the image | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editTestimonial"></a>
# **editTestimonial**
> RestApiResultWebsiteTestimonial editTestimonial(appId, testimonialId, testimonial)

Edit a testimonial

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var testimonialId = 56; // Number | Id of the testimonial to edit

var testimonial = new FlipdishOpenApiV10.WebsiteTestimonialBase(); // WebsiteTestimonialBase | New values of the testimonial


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editTestimonial(appId, testimonialId, testimonial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **testimonialId** | **Number**| Id of the testimonial to edit | 
 **testimonial** | [**WebsiteTestimonialBase**](WebsiteTestimonialBase.md)| New values of the testimonial | 

### Return type

[**RestApiResultWebsiteTestimonial**](RestApiResultWebsiteTestimonial.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getIndexConfiguration"></a>
# **getIndexConfiguration**
> RestApiResultIndexPage getIndexConfiguration(appId)

Get Index Configuration

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIndexConfiguration(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 

### Return type

[**RestApiResultIndexPage**](RestApiResultIndexPage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setIndexConfiguration"></a>
# **setIndexConfiguration**
> RestApiResultIndexPageBase setIndexConfiguration(appId, indexPage)

Set Index Configuration

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var indexPage = new FlipdishOpenApiV10.IndexPageBase(); // IndexPageBase | New index page definition


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setIndexConfiguration(appId, indexPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **indexPage** | [**IndexPageBase**](IndexPageBase.md)| New index page definition | 

### Return type

[**RestApiResultIndexPageBase**](RestApiResultIndexPageBase.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadWebsiteImage"></a>
# **uploadWebsiteImage**
> RestApiResultWebsiteImage uploadWebsiteImage(appId, imageLocation, image)

Upload Website Image

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | Application identifier

var imageLocation = "imageLocation_example"; // String | Section for which to upload the image

var image = "/path/to/file.txt"; // File | App Logo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadWebsiteImage(appId, imageLocation, image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application identifier | 
 **imageLocation** | **String**| Section for which to upload the image | 
 **image** | **File**| App Logo | 

### Return type

[**RestApiResultWebsiteImage**](RestApiResultWebsiteImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="websiteCheckNow"></a>
# **websiteCheckNow**
> websiteCheckNow(appId)

Triggers a Check DNS Process

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.WebsiteApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.websiteCheckNow(appId, callback);
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

