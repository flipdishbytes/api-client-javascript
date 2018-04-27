# Flipdish.OrdersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptOrder**](OrdersApi.md#acceptOrder) | **POST** /api/v1.0/orders/{id}/accept | Accept order
[**getOrderById**](OrdersApi.md#getOrderById) | **GET** /api/v1.0/orders/{id} | Get order by ID
[**getOrders**](OrdersApi.md#getOrders) | **GET** /api/v1.0/orders | Get orders by filter
[**refundOrder**](OrdersApi.md#refundOrder) | **POST** /api/v1.0/orders/{id}/refund | Refund order
[**rejectOrder**](OrdersApi.md#rejectOrder) | **POST** /api/v1.0/orders/{id}/reject | Reject order


<a name="acceptOrder"></a>
# **acceptOrder**
> acceptOrder(id, acceptObject)

Accept order

To accept an order, you create an &#x60;accept&#x60; object and send it to Flipdish API using HTTP POST method. &#x60;Id&#x60; path parameter identifies the order.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OrdersApi();

var id = 56; // Number | Order identifier

var acceptObject = new Flipdish.Accept(); // Accept | 


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
 **acceptObject** | [**Accept**](Accept.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrderById"></a>
# **getOrderById**
> RestApiResultOrder getOrderById(id)

Get order by ID

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OrdersApi();

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
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OrdersApi();

var opts = { 
  'physicalRestaurantId': [3.4], // [Number] | Physical restaurant identifiers
  'state': ["state_example"], // [String] | Order states
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
 **page** | **Number**| Requested page number | [optional] 
 **limit** | **Number**| Requested page limit | [optional] 

### Return type

[**RestApiPaginationResultOrder**](RestApiPaginationResultOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="refundOrder"></a>
# **refundOrder**
> refundOrder(id, refundObject)

Refund order

To refund an order, you create a &#x60;refund&#x60; object and send it to Flipdish API using HTTP POST method. &#x60;Id&#x60; path parameter identifies the order.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OrdersApi();

var id = 56; // Number | Order identifier

var refundObject = new Flipdish.Refund(); // Refund | 


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

To reject an order, you create a &#x60;reject&#x60; object and send it to Flipdish API using HTTP POST method. &#x60;Id&#x60; path parameter identifies the order.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.OrdersApi();

var id = 56; // Number | Order identifier

var rejectObject = new Flipdish.Reject(); // Reject | 


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

