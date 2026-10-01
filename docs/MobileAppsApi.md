# Flipdish.MobileAppsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppConfigSalesChannel**](MobileAppsApi.md#getAppConfigSalesChannel) | **GET** /api/v1.0/mobileapps/{appId}/saleschannel/details | 
[**getStatistics**](MobileAppsApi.md#getStatistics) | **GET** /api/v1.0/mobileapps/{appId}/statistics | 
[**getSubmissionDetails**](MobileAppsApi.md#getSubmissionDetails) | **GET** /api/v1.0/mobileapps/{appId}/submission/details | 
[**getSubmissionStatus**](MobileAppsApi.md#getSubmissionStatus) | **GET** /api/v1.0/mobileapps/{appId}/submission/{submissionId}/status | 
[**publish**](MobileAppsApi.md#publish) | **POST** /api/v1.0/mobileapps/{appId}/submission/{submissionId}/publish | 
[**resubmission**](MobileAppsApi.md#resubmission) | **POST** /api/v1.0/mobileapps/{appId}/resubmission | 
[**submission**](MobileAppsApi.md#submission) | **POST** /api/v1.0/mobileapps/{appId}/submission | 
[**unpublish**](MobileAppsApi.md#unpublish) | **POST** /api/v1.0/mobileapps/{appId}/submission/{submissionId}/unpublish | 
[**updateAppConfigSalesChannel**](MobileAppsApi.md#updateAppConfigSalesChannel) | **POST** /api/v1.0/mobileapps/{appId}/saleschannel | 
[**updateSubmissionStatus**](MobileAppsApi.md#updateSubmissionStatus) | **POST** /api/v1.0/mobileapps/{appId}/submission/{submissionId}/status | 
[**uploadImage**](MobileAppsApi.md#uploadImage) | **POST** /api/v1.0/mobileapps/{appId}/submission/image | 



## getAppConfigSalesChannel

> RestApiResultAppConfigSalesChannel getAppConfigSalesChannel(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
apiInstance.getAppConfigSalesChannel(appId, (error, data, response) => {
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

[**RestApiResultAppConfigSalesChannel**](RestApiResultAppConfigSalesChannel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getStatistics

> RestApiArrayResultMobileAppsStatistics getStatistics(appId, platformTypes)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let platformTypes = ["null"]; // [String] | 
apiInstance.getStatistics(appId, platformTypes, (error, data, response) => {
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
 **platformTypes** | [**[String]**](String.md)|  | 

### Return type

[**RestApiArrayResultMobileAppsStatistics**](RestApiArrayResultMobileAppsStatistics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getSubmissionDetails

> RestApiResultMobileAppsSubmissionDetails getSubmissionDetails(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
apiInstance.getSubmissionDetails(appId, (error, data, response) => {
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

[**RestApiResultMobileAppsSubmissionDetails**](RestApiResultMobileAppsSubmissionDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getSubmissionStatus

> RestApiResultMobileAppsSubmissionStatus getSubmissionStatus(appId, submissionId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let submissionId = 56; // Number | 
apiInstance.getSubmissionStatus(appId, submissionId, (error, data, response) => {
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
 **submissionId** | **Number**|  | 

### Return type

[**RestApiResultMobileAppsSubmissionStatus**](RestApiResultMobileAppsSubmissionStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## publish

> RestApiResultRestApiIntegerResult publish(appId, submissionId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let submissionId = 56; // Number | 
let opts = {
  'platformType': "platformType_example" // String | 
};
apiInstance.publish(appId, submissionId, opts, (error, data, response) => {
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
 **submissionId** | **Number**|  | 
 **platformType** | **String**|  | [optional] 

### Return type

[**RestApiResultRestApiIntegerResult**](RestApiResultRestApiIntegerResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## resubmission

> RestApiResultMobileAppsSubmission resubmission(appId, mobileAppsSubmission)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let mobileAppsSubmission = new Flipdish.MobileAppsSubmission(); // MobileAppsSubmission | 
apiInstance.resubmission(appId, mobileAppsSubmission, (error, data, response) => {
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
 **mobileAppsSubmission** | [**MobileAppsSubmission**](MobileAppsSubmission.md)|  | 

### Return type

[**RestApiResultMobileAppsSubmission**](RestApiResultMobileAppsSubmission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## submission

> RestApiResultMobileAppsSubmission submission(appId, mobileAppsSubmission)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let mobileAppsSubmission = new Flipdish.MobileAppsSubmission(); // MobileAppsSubmission | 
apiInstance.submission(appId, mobileAppsSubmission, (error, data, response) => {
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
 **mobileAppsSubmission** | [**MobileAppsSubmission**](MobileAppsSubmission.md)|  | 

### Return type

[**RestApiResultMobileAppsSubmission**](RestApiResultMobileAppsSubmission.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## unpublish

> RestApiIntegerResult unpublish(appId, submissionId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let submissionId = 56; // Number | 
let opts = {
  'platformType': "platformType_example" // String | 
};
apiInstance.unpublish(appId, submissionId, opts, (error, data, response) => {
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
 **submissionId** | **Number**|  | 
 **platformType** | **String**|  | [optional] 

### Return type

[**RestApiIntegerResult**](RestApiIntegerResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateAppConfigSalesChannel

> RestApiResultAppConfigSalesChannel updateAppConfigSalesChannel(appId, appConfigSalesChannel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let appConfigSalesChannel = new Flipdish.AppConfigSalesChannel(); // AppConfigSalesChannel | 
apiInstance.updateAppConfigSalesChannel(appId, appConfigSalesChannel, (error, data, response) => {
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
 **appConfigSalesChannel** | [**AppConfigSalesChannel**](AppConfigSalesChannel.md)|  | 

### Return type

[**RestApiResultAppConfigSalesChannel**](RestApiResultAppConfigSalesChannel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateSubmissionStatus

> RestApiResultUpdateMobileAppsSubmissionStatus updateSubmissionStatus(appId, submissionId, updateSubmissionStatus)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let submissionId = 56; // Number | 
let updateSubmissionStatus = new Flipdish.UpdateMobileAppsSubmissionStatus(); // UpdateMobileAppsSubmissionStatus | 
apiInstance.updateSubmissionStatus(appId, submissionId, updateSubmissionStatus, (error, data, response) => {
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
 **submissionId** | **Number**|  | 
 **updateSubmissionStatus** | [**UpdateMobileAppsSubmissionStatus**](UpdateMobileAppsSubmissionStatus.md)|  | 

### Return type

[**RestApiResultUpdateMobileAppsSubmissionStatus**](RestApiResultUpdateMobileAppsSubmissionStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## uploadImage

> RestApiResultMobileAppsImage uploadImage(appId, Image)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MobileAppsApi();
let appId = "appId_example"; // String | 
let Image = "/path/to/file"; // File | Mobile Apps image
apiInstance.uploadImage(appId, Image, (error, data, response) => {
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
 **Image** | **File**| Mobile Apps image | 

### Return type

[**RestApiResultMobileAppsImage**](RestApiResultMobileAppsImage.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data

