# Flipdish.WebhooksApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**craeteWebhookSubscription**](WebhooksApi.md#craeteWebhookSubscription) | **POST** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions | Create a webhook subscription for you Oauth App
[**createWebhookSubscriptionEventNames**](WebhooksApi.md#createWebhookSubscriptionEventNames) | **POST** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | Add event name to your webhook subscription
[**deleteWebhookSubscription**](WebhooksApi.md#deleteWebhookSubscription) | **DELETE** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId} | Delete you webhook subscription
[**deleteWebhookSubscriptionEventName**](WebhooksApi.md#deleteWebhookSubscriptionEventName) | **DELETE** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | Remove event name to your webhook subscription
[**getWebhookEventNames**](WebhooksApi.md#getWebhookEventNames) | **GET** /api/v1.0/{appId}/webhooks/events | Get all webhook subscription event names
[**getWebhookEventNamesBySubscriptionId**](WebhooksApi.md#getWebhookEventNamesBySubscriptionId) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events | Get your webhook subscriptions selected event names
[**getWebhookEventSample**](WebhooksApi.md#getWebhookEventSample) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName}/test | Get a sample event from a webhook subscription
[**getWebhookLogs**](WebhooksApi.md#getWebhookLogs) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/logs | Get logs for your webhook subscription
[**getWebhookSubscriptions**](WebhooksApi.md#getWebhookSubscriptions) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions | Get all webhook subscriptions by your Oauth App id
[**updateWebhookSubscription**](WebhooksApi.md#updateWebhookSubscription) | **PUT** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId} | Update a webhook subscription object


<a name="craeteWebhookSubscription"></a>
# **craeteWebhookSubscription**
> RestApiIntegerResult craeteWebhookSubscription(oauthAppId, webhookSubscription, appId)

Create a webhook subscription for you Oauth App

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | Webhook subscription object

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.craeteWebhookSubscription(oauthAppId, webhookSubscription, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)| Webhook subscription object | 
 **appId** | **String**|  | 

### Return type

[**RestApiIntegerResult**](RestApiIntegerResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createWebhookSubscriptionEventNames"></a>
# **createWebhookSubscriptionEventNames**
> createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId)

Add event name to your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var eventName = "eventName_example"; // String | Webhook subscription event name

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **eventName** | **String**| Webhook subscription event name | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteWebhookSubscription"></a>
# **deleteWebhookSubscription**
> deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId)

Delete you webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteWebhookSubscriptionEventName"></a>
# **deleteWebhookSubscriptionEventName**
> deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId)

Remove event name to your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var eventName = "eventName_example"; // String | Webhook subscription event name

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **eventName** | **String**| Webhook subscription event name | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookEventNames"></a>
# **getWebhookEventNames**
> RestApiStringArrayResult getWebhookEventNames(appId)

Get all webhook subscription event names

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookEventNames(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookEventNamesBySubscriptionId"></a>
# **getWebhookEventNamesBySubscriptionId**
> RestApiStringArrayResult getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId)

Get your webhook subscriptions selected event names

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **appId** | **String**|  | 

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookEventSample"></a>
# **getWebhookEventSample**
> WebhookEventSample getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts)

Get a sample event from a webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var eventName = "eventName_example"; // String | 

var appId = "appId_example"; // String | 

var oauthAppId = "oauthAppId_example"; // String | 

var webhookSubscriptionId = "webhookSubscriptionId_example"; // String | 

var opts = { 
  'version': "version_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventName** | **String**|  | 
 **appId** | **String**|  | 
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **String**|  | 
 **version** | **String**|  | [optional] 

### Return type

[**WebhookEventSample**](WebhookEventSample.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getWebhookLogs"></a>
# **getWebhookLogs**
> RestApiPaginationResultWebhookLog getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts)

Get logs for your webhook subscription

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start time

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End time

var appId = "appId_example"; // String | 

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
apiInstance.getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **start** | **Date**| Start time | 
 **end** | **Date**| End time | 
 **appId** | **String**|  | 
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
> RestApiPaginationResultWebhookSubscription getWebhookSubscriptions(oauthAppId, appId, opts)

Get all webhook subscriptions by your Oauth App id

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var appId = "appId_example"; // String | 

var opts = { 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebhookSubscriptions(oauthAppId, appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **appId** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultWebhookSubscription**](RestApiPaginationResultWebhookSubscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateWebhookSubscription"></a>
# **updateWebhookSubscription**
> updateWebhookSubscription(oauthAppId, webhookSubscriptionId, webhookSubscription, appId)

Update a webhook subscription object

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.WebhooksApi();

var oauthAppId = "oauthAppId_example"; // String | Oauth App identifier

var webhookSubscriptionId = 56; // Number | Webhook subscription identifier

var webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | Webhook subscription object

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateWebhookSubscription(oauthAppId, webhookSubscriptionId, webhookSubscription, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**| Oauth App identifier | 
 **webhookSubscriptionId** | **Number**| Webhook subscription identifier | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)| Webhook subscription object | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

