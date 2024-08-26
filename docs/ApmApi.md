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


<a name="getApmStatus"></a>
# **getApmStatus**
> RestApiResultApmStatus getApmStatus(appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApmStatus(appId, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getBasicStatistics"></a>
# **getBasicStatistics**
> RestApiResultApmStatistics getBasicStatistics(appId, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 

var opts = { 
  'storeId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBasicStatistics(appId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getCalendarWeekStatistics"></a>
# **getCalendarWeekStatistics**
> RestApiArrayResultApmHourlyDataPoint getCalendarWeekStatistics(appId, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 

var opts = { 
  'storeId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCalendarWeekStatistics(appId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getCallsStatistics"></a>
# **getCallsStatistics**
> RestApiArrayResultApmDataPoint getCallsStatistics(appId, aggregateDataBy, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 

var aggregateDataBy = "aggregateDataBy_example"; // String | 

var opts = { 
  'dataPointLimit': 56, // Number | 
  'storeId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallsStatistics(appId, aggregateDataBy, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrderStatistics"></a>
# **getOrderStatistics**
> RestApiArrayResultApmCurrencyDataPoint getOrderStatistics(appId, aggregateDataBy, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 

var aggregateDataBy = "aggregateDataBy_example"; // String | 

var opts = { 
  'dataPointLimit': 56, // Number | 
  'storeId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderStatistics(appId, aggregateDataBy, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getPaginatedCallList"></a>
# **getPaginatedCallList**
> RestApiPaginationResultPhoneCall getPaginatedCallList(appId, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.ApmApi();

var appId = "appId_example"; // String | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'storeId': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaginatedCallList(appId, opts, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

