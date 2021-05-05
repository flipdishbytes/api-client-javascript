# FlipdishOpenApiV10.OrdersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptOrder**](OrdersApi.md#acceptOrder) | **POST** /api/v1.0/orders/{id}/accept | Accept order
[**dispatchOrder**](OrdersApi.md#dispatchOrder) | **POST** /api/v1.0/orders/{id}/dispatch | Dispatch order
[**getOrderById**](OrdersApi.md#getOrderById) | **GET** /api/v1.0/orders/{id} | Get order by ID
[**getOrders**](OrdersApi.md#getOrders) | **GET** /api/v1.0/orders | Get orders by filter
[**getOrdersSummary**](OrdersApi.md#getOrdersSummary) | **GET** /api/v1.0/{appId}/orders/summaries | [PRIVATE API] Get summary of orders by filter
[**refundOrder**](OrdersApi.md#refundOrder) | **POST** /api/v1.0/orders/{id}/refund | Refund order
[**rejectOrder**](OrdersApi.md#rejectOrder) | **POST** /api/v1.0/orders/{id}/reject | Reject order


<a name="acceptOrder"></a>
# **acceptOrder**
> acceptOrder(id, acceptObject)

Accept order

To accept an order, you create an `accept` object and send it to Flipdish API using HTTP POST method. `Id` path parameter identifies the order.

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var id = 56; // Number | Order identifier

var acceptObject = new FlipdishOpenApiV10.Accept(); // Accept | Order accept parameters (eg: EstimatedMinutesForDelivery)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.acceptOrder(id, acceptObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order identifier | 
 **acceptObject** | [**Accept**](Accept.md)| Order accept parameters (eg: EstimatedMinutesForDelivery) | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="dispatchOrder"></a>
# **dispatchOrder**
> dispatchOrder(id)

Dispatch order

To dispatch an order send a POST request with `Id` path parameter which identifies the order.

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var id = 56; // Number | Order identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dispatchOrder(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrderById"></a>
# **getOrderById**
> RestApiResultOrder getOrderById(id)

Get order by ID

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var id = 56; // Number | Order identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order identifier | 

### Return type

[**RestApiResultOrder**](RestApiResultOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrders"></a>
# **getOrders**
> RestApiPaginationResultOrder getOrders(opts)

Get orders by filter

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var opts = { 
  'physicalRestaurantId': [3.4], // [Number] | Physical restaurant identifiers
  'state': ["state_example"], // [String] | Order states
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Order has been placed after this parameter value
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Order has been placed before this parameter value
  'page': 56, // Number | Requested page number
  'limit': 56 // Number | Requested page limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrders(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **physicalRestaurantId** | [**[Number]**](Number.md)| Physical restaurant identifiers | [optional] 
 **state** | [**[String]**](String.md)| Order states | [optional] 
 **from** | **Date**| Order has been placed after this parameter value | [optional] 
 **to** | **Date**| Order has been placed before this parameter value | [optional] 
 **page** | **Number**| Requested page number | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultOrder**](RestApiPaginationResultOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrdersSummary"></a>
# **getOrdersSummary**
> RestApiPaginationResultOrderSummary getOrdersSummary(appId, opts)

[PRIVATE API] Get summary of orders by filter

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var appId = "appId_example"; // String | App Name Id

var opts = { 
  'searchQuery': "searchQuery_example", // String | Query string
  'physicalRestaurantId': [3.4], // [Number] | Physical restaurant identifiers
  'state': ["state_example"], // [String] | Order states
  'page': 56, // Number | Requested page number
  'limit': 56, // Number | Requested page limit
  'orderByRequestedForTime': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrdersSummary(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **searchQuery** | **String**| Query string | [optional] 
 **physicalRestaurantId** | [**[Number]**](Number.md)| Physical restaurant identifiers | [optional] 
 **state** | [**[String]**](String.md)| Order states | [optional] 
 **page** | **Number**| Requested page number | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 
 **orderByRequestedForTime** | **Boolean**|  | [optional] 

### Return type

[**RestApiPaginationResultOrderSummary**](RestApiPaginationResultOrderSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="refundOrder"></a>
# **refundOrder**
> refundOrder(id, refundObject)

Refund order

To refund an order, you create a `refund` object and send it to Flipdish API using HTTP POST method. `Id` path parameter identifies the order.

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var id = 56; // Number | Order identifier

var refundObject = new FlipdishOpenApiV10.Refund(); // Refund | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.refundOrder(id, refundObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order identifier | 
 **refundObject** | [**Refund**](Refund.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="rejectOrder"></a>
# **rejectOrder**
> rejectOrder(id, rejectObject)

Reject order

To reject an order, you create a `reject` object and send it to Flipdish API using HTTP POST method. `Id` path parameter identifies the order.

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.OrdersApi();

var id = 56; // Number | Order identifier

var rejectObject = new FlipdishOpenApiV10.Reject(); // Reject | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.rejectOrder(id, rejectObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Order identifier | 
 **rejectObject** | [**Reject**](Reject.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

