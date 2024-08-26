# Flipdish.WebhooksApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookSubscription**](WebhooksApi.md#createWebhookSubscription) | **POST** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions | 
[**createWebhookSubscriptionEventNames**](WebhooksApi.md#createWebhookSubscriptionEventNames) | **POST** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | 
[**deleteWebhookSubscription**](WebhooksApi.md#deleteWebhookSubscription) | **DELETE** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId} | 
[**deleteWebhookSubscriptionEventName**](WebhooksApi.md#deleteWebhookSubscriptionEventName) | **DELETE** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName} | 
[**getWebhookEventNames**](WebhooksApi.md#getWebhookEventNames) | **GET** /api/v1.0/{appId}/webhooks/events | 
[**getWebhookEventNamesBySubscriptionId**](WebhooksApi.md#getWebhookEventNamesBySubscriptionId) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events | 
[**getWebhookEventSample**](WebhooksApi.md#getWebhookEventSample) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName}/test | 
[**getWebhookLogs**](WebhooksApi.md#getWebhookLogs) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/logs | 
[**getWebhookSubscriptions**](WebhooksApi.md#getWebhookSubscriptions) | **GET** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions | 
[**updateWebhookSubscription**](WebhooksApi.md#updateWebhookSubscription) | **PUT** /api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId} | 



## createWebhookSubscription

> RestApiIntegerResult createWebhookSubscription(oauthAppId, appId, webhookSubscription)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
let webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | 
apiInstance.createWebhookSubscription(oauthAppId, appId, webhookSubscription, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appId** | **String**|  | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)|  | 

### Return type

[**RestApiIntegerResult**](RestApiIntegerResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## createWebhookSubscriptionEventNames

> createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let eventName = "eventName_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **eventName** | **String**|  | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message


## deleteWebhookSubscription

> deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message


## deleteWebhookSubscriptionEventName

> deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let eventName = "eventName_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **eventName** | **String**|  | 
 **appId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message


## getWebhookEventNames

> RestApiStringArrayResult getWebhookEventNames(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let appId = "appId_example"; // String | 
apiInstance.getWebhookEventNames(appId, (error, data, response) => {
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

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getWebhookEventNamesBySubscriptionId

> RestApiStringArrayResult getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getWebhookEventSample

> WebhookEventSample getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let eventName = "eventName_example"; // String | 
let appId = "appId_example"; // String | 
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = "webhookSubscriptionId_example"; // String | 
let opts = {
  'version': "version_example" // String | 
};
apiInstance.getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts, (error, data, response) => {
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
- **Accept**: application/json, text/json, application/xml, text/xml, Type, CreateTime, Body


## getWebhookLogs

> RestApiPaginationResultWebhookLog getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let start = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let end = new Date("2013-10-20T19:20:30+01:00"); // Date | 
let appId = "appId_example"; // String | 
let opts = {
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **start** | **Date**|  | 
 **end** | **Date**|  | 
 **appId** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultWebhookLog**](RestApiPaginationResultWebhookLog.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getWebhookSubscriptions

> RestApiPaginationResultWebhookSubscription getWebhookSubscriptions(oauthAppId, appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let appId = "appId_example"; // String | 
let opts = {
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getWebhookSubscriptions(oauthAppId, appId, opts, (error, data, response) => {
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
 **oauthAppId** | **String**|  | 
 **appId** | **String**|  | 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultWebhookSubscription**](RestApiPaginationResultWebhookSubscription.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## updateWebhookSubscription

> updateWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, webhookSubscription)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.WebhooksApi();
let oauthAppId = "oauthAppId_example"; // String | 
let webhookSubscriptionId = 56; // Number | 
let appId = "appId_example"; // String | 
let webhookSubscription = new Flipdish.WebhookSubscription(); // WebhookSubscription | 
apiInstance.updateWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, webhookSubscription, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauthAppId** | **String**|  | 
 **webhookSubscriptionId** | **Number**|  | 
 **appId** | **String**|  | 
 **webhookSubscription** | [**WebhookSubscription**](WebhookSubscription.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message

