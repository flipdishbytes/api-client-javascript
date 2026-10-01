# Flipdish.StuartApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stuartCancelJob**](StuartApi.md#stuartCancelJob) | **DELETE** /api/v1.0/stuart/jobs/{jobId} | 
[**stuartGetJob**](StuartApi.md#stuartGetJob) | **GET** /api/v1.0/stuart/jobs/{jobId} | 
[**stuartGetStuartSettings**](StuartApi.md#stuartGetStuartSettings) | **GET** /api/v1.0/stuart/settings/{storeId} | 
[**stuartPostStuartSettings**](StuartApi.md#stuartPostStuartSettings) | **POST** /api/v1.0/stuart/settings/{storeId} | 



## stuartCancelJob

> Object stuartCancelJob(jobId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StuartApi();
let jobId = 56; // Number | 
let storeId = 56; // Number | 
apiInstance.stuartCancelJob(jobId, storeId, (error, data, response) => {
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
 **jobId** | **Number**|  | 
 **storeId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## stuartGetJob

> RestApiResultJobResponse stuartGetJob(jobId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StuartApi();
let jobId = 56; // Number | 
let storeId = 56; // Number | 
apiInstance.stuartGetJob(jobId, storeId, (error, data, response) => {
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
 **jobId** | **Number**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiResultJobResponse**](RestApiResultJobResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## stuartGetStuartSettings

> RestApiResultStuartSettings stuartGetStuartSettings(storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StuartApi();
let storeId = 56; // Number | 
apiInstance.stuartGetStuartSettings(storeId, (error, data, response) => {
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

### Return type

[**RestApiResultStuartSettings**](RestApiResultStuartSettings.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## stuartPostStuartSettings

> Object stuartPostStuartSettings(storeId, stuartSettings)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StuartApi();
let storeId = 56; // Number | 
let stuartSettings = new Flipdish.StuartSettings(); // StuartSettings | 
apiInstance.stuartPostStuartSettings(storeId, stuartSettings, (error, data, response) => {
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
 **stuartSettings** | [**StuartSettings**](StuartSettings.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

