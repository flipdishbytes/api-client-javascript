# Flipdish.EventsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerEvents**](EventsApi.md#getCustomerEvents) | **GET** /api/v1.0/events/customer/{customerId} | Get customer events  For technical reasons, the number of records returned is limited to 100.
[**getEvents**](EventsApi.md#getEvents) | **GET** /api/v1.0/events | Get events  For technical reasons, the number of records returned is limited to 100.
[**getEventsById**](EventsApi.md#getEventsById) | **GET** /api/v1.0/events/{eventId} | Get event by Id  For technical reasons, the number of records returned is limited to 100.
[**getMenuEvents**](EventsApi.md#getMenuEvents) | **GET** /api/v1.0/events/menu/{menuId} | Get menu events  For technical reasons, the number of records returned is limited to 100.
[**getOrderEvents**](EventsApi.md#getOrderEvents) | **GET** /api/v1.0/events/order/{orderId} | Get order events  For technical reasons, the number of records returned is limited to 100.
[**getOrderEventsByCustomer**](EventsApi.md#getOrderEventsByCustomer) | **GET** /api/v1.0/events/order | Get order events by customer  For technical reasons, the number of records returned is limited to 100.
[**getStoreEvents**](EventsApi.md#getStoreEvents) | **GET** /api/v1.0/events/store/{storeId} | Get store events  For technical reasons, the number of records returned is limited to 100.
[**getUserEvents**](EventsApi.md#getUserEvents) | **GET** /api/v1.0/events/user/{userId} | Get user events  For technical reasons, the number of records returned is limited to 100.
[**getWhiteLabelEvents**](EventsApi.md#getWhiteLabelEvents) | **GET** /api/v1.0/events/whitelabel/{whitelabelId} | Get WhiteLabel events  For technical reasons, the number of records returned is limited to 100.


<a name="getCustomerEvents"></a>
# **getCustomerEvents**
> RestApiEventSearchPaginationResult getCustomerEvents(customerId, opts)

Get customer events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var customerId = 56; // Number | Customer identifier identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerEvents(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Customer identifier identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getEvents"></a>
# **getEvents**
> RestApiEventSearchPaginationResult getEvents(opts)

Get events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var opts = { 
  'whiteLabelId': 56, // Number | White Label Id
  'customerId': 56, // Number | Customer Id
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvents(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whiteLabelId** | **Number**| White Label Id | [optional] 
 **customerId** | **Number**| Customer Id | [optional] 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getEventsById"></a>
# **getEventsById**
> EventSearchResult getEventsById(eventId)

Get event by Id  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var eventId = "eventId_example"; // String | Event identifier (Guid)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventsById(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**String**](.md)| Event identifier (Guid) | 

### Return type

[**EventSearchResult**](EventSearchResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuEvents"></a>
# **getMenuEvents**
> RestApiEventSearchPaginationResult getMenuEvents(menuId, opts)

Get menu events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var menuId = 56; // Number | Menu Identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuEvents(menuId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu Identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrderEvents"></a>
# **getOrderEvents**
> RestApiEventSearchPaginationResult getOrderEvents(orderId, opts)

Get order events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var orderId = 56; // Number | Order identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId2': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderEvents(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| Order identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId2** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getOrderEventsByCustomer"></a>
# **getOrderEventsByCustomer**
> RestApiEventSearchPaginationResult getOrderEventsByCustomer(customerId, opts)

Get order events by customer  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var customerId = 56; // Number | Customer identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderEventsByCustomer(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Number**| Customer identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreEvents"></a>
# **getStoreEvents**
> RestApiEventSearchPaginationResult getStoreEvents(storeId, opts)

Get store events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var storeId = 56; // Number | Id of the store

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId2': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreEvents(storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**| Id of the store | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId2** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getUserEvents"></a>
# **getUserEvents**
> RestApiEventSearchPaginationResult getUserEvents(userId, opts)

Get user events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var userId = 56; // Number | User identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId2': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserEvents(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| User identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId2** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWhiteLabelEvents"></a>
# **getWhiteLabelEvents**
> RestApiEventSearchPaginationResult getWhiteLabelEvents(whitelabelId, opts)

Get WhiteLabel events  For technical reasons, the number of records returned is limited to 100.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.EventsApi();

var whitelabelId = 56; // Number | White Label Identifier

var opts = { 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["eventType_example"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWhiteLabelEvents(whitelabelId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whitelabelId** | **Number**| White Label Identifier | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

