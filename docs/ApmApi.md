# FlipdishOpenApiV10.ApmApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApmStatus**](ApmApi.md#getApmStatus) | **GET** /api/v1.0/{appId}/apm/status | [PRIVATE API] Returns true if APM is enabled on at least one store in an application
[**getBasicStatistics**](ApmApi.md#getBasicStatistics) | **GET** /api/v1.0/{appId}/apm/statistics | [PRIVATE API] Get Basic Statistics
[**getCalendarWeekStatistics**](ApmApi.md#getCalendarWeekStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/calendar | [PRIVATE API] Get Calendar statistics
[**getCallsStatistics**](ApmApi.md#getCallsStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/calls/{aggregateDataBy} | [PRIVATE API] Get Calls Statistics
[**getOrderStatistics**](ApmApi.md#getOrderStatistics) | **GET** /api/v1.0/{appId}/apm/statistics/orders/{aggregateDataBy} | [PRIVATE API] Get Order Statistics (Value of Orders)
[**getPaginatedCallList**](ApmApi.md#getPaginatedCallList) | **GET** /api/v1.0/{appId}/apm/calls | [PRIVATE API] Get paginated APM call list


<a name="getApmStatus"></a>
# **getApmStatus**
> RestApiResultApmStatus getApmStatus(appId)

[PRIVATE API] Returns true if APM is enabled on at least one store in an application

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id


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
 **appId** | **String**| App Id | 

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

[PRIVATE API] Get Basic Statistics

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id

var opts = { 
  'storeId': [3.4] // [Number] | List of stores to search by
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
 **appId** | **String**| App Id | 
 **storeId** | [**[Number]**](Number.md)| List of stores to search by | [optional] 

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

[PRIVATE API] Get Calendar statistics

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id

var opts = { 
  'storeId': [3.4] // [Number] | List of stores to search by
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
 **appId** | **String**| App Id | 
 **storeId** | [**[Number]**](Number.md)| List of stores to search by | [optional] 

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

[PRIVATE API] Get Calls Statistics

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id

var aggregateDataBy = "aggregateDataBy_example"; // String | Aggregate data by day \\ week

var opts = { 
  'dataPointLimit': 56, // Number | Amount of data points per request
  'storeId': [3.4] // [Number] | List of stores to search by
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
 **appId** | **String**| App Id | 
 **aggregateDataBy** | **String**| Aggregate data by day \\ week | 
 **dataPointLimit** | **Number**| Amount of data points per request | [optional] 
 **storeId** | [**[Number]**](Number.md)| List of stores to search by | [optional] 

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

[PRIVATE API] Get Order Statistics (Value of Orders)

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id

var aggregateDataBy = "aggregateDataBy_example"; // String | Aggregate data by day \\ week

var opts = { 
  'dataPointLimit': 56, // Number | Amount of data points per request
  'storeId': [3.4] // [Number] | List of stores to search by
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
 **appId** | **String**| App Id | 
 **aggregateDataBy** | **String**| Aggregate data by day \\ week | 
 **dataPointLimit** | **Number**| Amount of data points per request | [optional] 
 **storeId** | [**[Number]**](Number.md)| List of stores to search by | [optional] 

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

[PRIVATE API] Get paginated APM call list

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.ApmApi();

var appId = "appId_example"; // String | App Id

var opts = { 
  'page': 56, // Number | Requested page index
  'limit': 56, // Number | Requested page limit
  'storeId': [3.4] // [Number] | List of stores to search by
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
 **appId** | **String**| App Id | 
 **page** | **Number**| Requested page index | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 
 **storeId** | [**[Number]**](Number.md)| List of stores to search by | [optional] 

### Return type

[**RestApiPaginationResultPhoneCall**](RestApiPaginationResultPhoneCall.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

