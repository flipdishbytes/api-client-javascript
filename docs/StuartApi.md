# Flipdish.StuartApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stuartCancelJob**](StuartApi.md#stuartCancelJob) | **DELETE** /api/v1.0/stuart/jobs/{jobId} | Cancel a stuart job
[**stuartGetJob**](StuartApi.md#stuartGetJob) | **GET** /api/v1.0/stuart/jobs/{jobId} | Get start job details
[**stuartGetStuartSettings**](StuartApi.md#stuartGetStuartSettings) | **GET** /api/v1.0/stuart/settings/{storeId} | Get stuart settings for a store
[**stuartPostStuartSettings**](StuartApi.md#stuartPostStuartSettings) | **POST** /api/v1.0/stuart/settings/{storeId} | Set stuart settings for a store


<a name="stuartCancelJob"></a>
# **stuartCancelJob**
> Object stuartCancelJob(jobId, storeId)

Cancel a stuart job

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StuartApi();

var jobId = 56; // Number | Stuart job identifier

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stuartCancelJob(jobId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| Stuart job identifier | 
 **storeId** | **Number**| Store identifier | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="stuartGetJob"></a>
# **stuartGetJob**
> RestApiResultJobResponse stuartGetJob(jobId, storeId)

Get start job details

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StuartApi();

var jobId = 56; // Number | Stuart job identifier

var storeId = 56; // Number | Store identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stuartGetJob(jobId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| Stuart job identifier | 
 **storeId** | **Number**| Store identifier | 

### Return type

[**RestApiResultJobResponse**](RestApiResultJobResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="stuartGetStuartSettings"></a>
# **stuartGetStuartSettings**
> RestApiResultStuartSettings stuartGetStuartSettings(storeId)

Get stuart settings for a store

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StuartApi();

var storeId = 56; // Number | Store Identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stuartGetStuartSettings(storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Identifier | 

### Return type

[**RestApiResultStuartSettings**](RestApiResultStuartSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="stuartPostStuartSettings"></a>
# **stuartPostStuartSettings**
> Object stuartPostStuartSettings(storeId, stuartSettings)

Set stuart settings for a store

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StuartApi();

var storeId = 56; // Number | Store Identifier

var stuartSettings = new Flipdish.StuartSettings(); // StuartSettings | Stuart settings model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stuartPostStuartSettings(storeId, stuartSettings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Store Identifier | 
 **stuartSettings** | [**StuartSettings**](StuartSettings.md)| Stuart settings model | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

