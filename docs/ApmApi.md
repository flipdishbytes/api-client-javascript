# Flipdish.ApmApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApmStatus**](ApmApi.md#getApmStatus) | **GET** /api/v1.0/{appId}/apm/status | 
[**getBasicStatistics**](ApmApi.md#getBasicStatistics) | **GET** /api/v1.0/{appId}/apm/statistics | 
[**getCalendarWeekStatistics**](ApmApi.md#getCalendarWeekStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/calendar | 
[**getCallsStatistics**](ApmApi.md#getCallsStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/calls/{aggregateDataBy} | 
[**getOrderStatistics**](ApmApi.md#getOrderStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/orders/{aggregateDataBy} | 
[**getPaginatedCallList**](ApmApi.md#getPaginatedCallList) | **GET** /api/v1.0/{appId}/apm/calls | 



## getApmStatus

> RestApiResultApmStatus getApmStatus(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
apiInstance.getApmStatus(appId, (error, data, response) => {
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

[**RestApiResultApmStatus**](RestApiResultApmStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBasicStatistics

> RestApiResultApmStatistics getBasicStatistics(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeId': [null] // [Number] | 
};
apiInstance.getBasicStatistics(appId, opts, (error, data, response) => {
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
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiResultApmStatistics**](RestApiResultApmStatistics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getCalendarWeekStatistics

> RestApiArrayResultApmHourlyDataPoint getCalendarWeekStatistics(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeId': [null] // [Number] | 
};
apiInstance.getCalendarWeekStatistics(appId, opts, (error, data, response) => {
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
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiArrayResultApmHourlyDataPoint**](RestApiArrayResultApmHourlyDataPoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getCallsStatistics

> RestApiArrayResultApmDataPoint getCallsStatistics(appId, aggregateDataBy, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
let aggregateDataBy = "aggregateDataBy_example"; // String | 
let opts = {
  'dataPointLimit': 56, // Number | 
  'storeId': [null] // [Number] | 
};
apiInstance.getCallsStatistics(appId, aggregateDataBy, opts, (error, data, response) => {
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
 **aggregateDataBy** | **String**|  | 
 **dataPointLimit** | **Number**|  | [optional] 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiArrayResultApmDataPoint**](RestApiArrayResultApmDataPoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getOrderStatistics

> RestApiArrayResultApmCurrencyDataPoint getOrderStatistics(appId, aggregateDataBy, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
let aggregateDataBy = "aggregateDataBy_example"; // String | 
let opts = {
  'dataPointLimit': 56, // Number | 
  'storeId': [null] // [Number] | 
};
apiInstance.getOrderStatistics(appId, aggregateDataBy, opts, (error, data, response) => {
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
 **aggregateDataBy** | **String**|  | 
 **dataPointLimit** | **Number**|  | [optional] 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiArrayResultApmCurrencyDataPoint**](RestApiArrayResultApmCurrencyDataPoint.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getPaginatedCallList

> RestApiPaginationResultPhoneCall getPaginatedCallList(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ApmApi();
let appId = "appId_example"; // String | 
let opts = {
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeId': [null] // [Number] | 
};
apiInstance.getPaginatedCallList(appId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiPaginationResultPhoneCall**](RestApiPaginationResultPhoneCall.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

