# Flipdish.WhiteLabelBuildsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](WhiteLabelBuildsApi.md#healthCheck) | **GET** /api/v1.0/whitelabelbuilds/health | 
[**submitAndroidApps**](WhiteLabelBuildsApi.md#submitAndroidApps) | **POST** /api/v1.0/whitelabelbuilds/android/multiple | 
[**submitAndroidBuild**](WhiteLabelBuildsApi.md#submitAndroidBuild) | **POST** /api/v1.0/whitelabelbuilds/{appId}/android | 
[**submitIosApps**](WhiteLabelBuildsApi.md#submitIosApps) | **POST** /api/v1.0/whitelabelbuilds/ios/multiple | 
[**submitIosBuild**](WhiteLabelBuildsApi.md#submitIosBuild) | **POST** /api/v1.0/whitelabelbuilds/{appId}/ios | 



## healthCheck

> String healthCheck()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelBuildsApi();
apiInstance.healthCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## submitAndroidApps

> RestApiResultBuildResultModel submitAndroidApps(whiteLabelIds, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelBuildsApi();
let whiteLabelIds = "whiteLabelIds_example"; // String | 
let opts = {
  'branch': "branch_example", // String | 
  'buildType': "buildType_example" // String | 
};
apiInstance.submitAndroidApps(whiteLabelIds, opts, (error, data, response) => {
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
 **whiteLabelIds** | **String**|  | 
 **branch** | **String**|  | [optional] 
 **buildType** | **String**|  | [optional] 

### Return type

[**RestApiResultBuildResultModel**](RestApiResultBuildResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## submitAndroidBuild

> RestApiResultBuildResultModel submitAndroidBuild(appId, branch, lane, buildType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelBuildsApi();
let appId = "appId_example"; // String | 
let branch = "branch_example"; // String | 
let lane = "lane_example"; // String | 
let buildType = "buildType_example"; // String | 
apiInstance.submitAndroidBuild(appId, branch, lane, buildType, (error, data, response) => {
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
 **branch** | **String**|  | 
 **lane** | **String**|  | 
 **buildType** | **String**|  | 

### Return type

[**RestApiResultBuildResultModel**](RestApiResultBuildResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## submitIosApps

> RestApiResultBuildResultModel submitIosApps(whiteLabelIds, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelBuildsApi();
let whiteLabelIds = "whiteLabelIds_example"; // String | 
let opts = {
  'branch': "branch_example", // String | 
  'buildType': "buildType_example" // String | 
};
apiInstance.submitIosApps(whiteLabelIds, opts, (error, data, response) => {
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
 **whiteLabelIds** | **String**|  | 
 **branch** | **String**|  | [optional] 
 **buildType** | **String**|  | [optional] 

### Return type

[**RestApiResultBuildResultModel**](RestApiResultBuildResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## submitIosBuild

> RestApiResultBuildResultModel submitIosBuild(appId, buildType, branch, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WhiteLabelBuildsApi();
let appId = "appId_example"; // String | 
let buildType = "buildType_example"; // String | 
let branch = "branch_example"; // String | 
let opts = {
  'submitForReview': true // Boolean | 
};
apiInstance.submitIosBuild(appId, buildType, branch, opts, (error, data, response) => {
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
 **buildType** | **String**|  | 
 **branch** | **String**|  | 
 **submitForReview** | **Boolean**|  | [optional] 

### Return type

[**RestApiResultBuildResultModel**](RestApiResultBuildResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

