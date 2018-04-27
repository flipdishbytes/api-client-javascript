# Flipdish.WebhooksApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**craeteWebhookSubscription**](WebhooksApi.md#craeteWebhookSubscription) | **POST** /api/v1.0/webhooks/{clientId}/subscriptions | Create a webhook subscription for you Oauth client
[**createWebhookSubscriptionEventNames**](WebhooksApi.md#createWebhookSubscriptionEventNames) | **POST** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | Add event name to your webhook subscription
[**deleteWebhookSubscription**](WebhooksApi.md#deleteWebhookSubscription) | **DELETE** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId} | Delete you webhook subscription
[**deleteWebhookSubscriptionEventName**](WebhooksApi.md#deleteWebhookSubscriptionEventName) | **DELETE** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | Remove event name to your webhook subscription
[**getWebhookEventNames**](WebhooksApi.md#getWebhookEventNames) | **GET** /api/v1.0/webhooks/events | Get all webhook subscription event names
[**getWebhookEventNamesBySubscriptionId**](WebhooksApi.md#getWebhookEventNamesBySubscriptionId) | **GET** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events | Get your webhook subscriptions selected event names
[**getWebhookLogs**](WebhooksApi.md#getWebhookLogs) | **GET** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/logs | Get logs for your webhook subscription
[**getWebhookSubscriptions**](WebhooksApi.md#getWebhookSubscriptions) | **GET** /api/v1.0/webhooks/{clientId}/subscriptions | Get all webhook subscriptions by your Oauth client id
[**updateWebhookSubscription**](WebhooksApi.md#updateWebhookSubscription) | **PUT** /api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId} | Update a webhook subscription object


<a name="craeteWebhookSubscription"></a>
# **craeteWebhookSubscription**
> RestApiIntegerResult craeteWebhookSubscription(clientId, webhookSubscription)

Create a webhook subscription for you Oauth client

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | Webhook subscription object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.craeteWebhookSubscription(clientId, webhookSubscription, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)| Webhook subscription object | 

### Return type

[**RestApiIntegerResult**](RestApiIntegerResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createWebhookSubscriptionEventNames"></a>
# **createWebhookSubscriptionEventNames**
> createWebhookSubscriptionEventNames(clientId, webhookSubscriptionId, eventName)

Add event name to your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var eventName = "eventName_example"; // String | Webhook subscription event name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createWebhookSubscriptionEventNames(clientId, webhookSubscriptionId, eventName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **eventName** | **String**| Webhook subscription event name | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteWebhookSubscription"></a>
# **deleteWebhookSubscription**
> deleteWebhookSubscription(clientId, webhookSubscriptionId)

Delete you webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhookSubscription(clientId, webhookSubscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteWebhookSubscriptionEventName"></a>
# **deleteWebhookSubscriptionEventName**
> deleteWebhookSubscriptionEventName(clientId, webhookSubscriptionId, eventName)

Remove event name to your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var eventName = "eventName_example"; // String | Webhook subscription event name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhookSubscriptionEventName(clientId, webhookSubscriptionId, eventName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **eventName** | **String**| Webhook subscription event name | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookEventNames"></a>
# **getWebhookEventNames**
> RestApiStringArrayResult getWebhookEventNames()

Get all webhook subscription event names

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookEventNames(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookEventNamesBySubscriptionId"></a>
# **getWebhookEventNamesBySubscriptionId**
> RestApiStringArrayResult getWebhookEventNamesBySubscriptionId(clientId, webhookSubscriptionId)

Get your webhook subscriptions selected event names

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookEventNamesBySubscriptionId(clientId, webhookSubscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookLogs"></a>
# **getWebhookLogs**
> RestApiPaginationResultWebhookLog getWebhookLogs(clientId, webhookSubscriptionId, start, end, opts)

Get logs for your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start time

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End time

var opts = { 
  'page': 56, // Number | Page number
  'limit': 56 // Number | Page size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookLogs(clientId, webhookSubscriptionId, start, end, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **start** | **Date**| Start time | 
 **end** | **Date**| End time | 
 **page** | **Number**| Page number | [optional] 
 **limit** | **Number**| Page size | [optional] 

### Return type

[**RestApiPaginationResultWebhookLog**](RestApiPaginationResultWebhookLog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookSubscriptions"></a>
# **getWebhookSubscriptions**
> RestApiArrayResultWebhookSubscription getWebhookSubscriptions(clientId)

Get all webhook subscriptions by your Oauth client id

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookSubscriptions(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 

### Return type

[**RestApiArrayResultWebhookSubscription**](RestApiArrayResultWebhookSubscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateWebhookSubscription"></a>
# **updateWebhookSubscription**
> updateWebhookSubscription(clientId, webhookSubscriptionId, webhookSubscription)

Update a webhook subscription object

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var clientId = "clientId_example"; // String | Oauth client identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | Webhook subscription object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWebhookSubscription(clientId, webhookSubscriptionId, webhookSubscription, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Oauth client identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)| Webhook subscription object | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

