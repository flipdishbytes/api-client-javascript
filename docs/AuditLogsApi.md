# Flipdish.AuditLogsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderAuditLog**](AuditLogsApi.md#addOrderAuditLog) | **POST** /api/v1.0/auditlogs/orders/{orderId} | 
[**addStoreAuditLogEvent**](AuditLogsApi.md#addStoreAuditLogEvent) | **POST** /api/v1.0/auditlogs/stores/{storeId} | 


<a name="addOrderAuditLog"></a>
# **addOrderAuditLog**
> addOrderAuditLog(orderId, externalEventCreate)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AuditLogsApi();

var orderId = 56; // Number | 

var externalEventCreate = [new Flipdish.ExternalStoreAuditLog()]; // [ExternalStoreAuditLog] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addOrderAuditLog(orderId, externalEventCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **externalEventCreate** | [**[ExternalStoreAuditLog]**](ExternalStoreAuditLog.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="addStoreAuditLogEvent"></a>
# **addStoreAuditLogEvent**
> addStoreAuditLogEvent(storeId, externalEventCreate)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AuditLogsApi();

var storeId = 56; // Number | 

var externalEventCreate = [new Flipdish.ExternalStoreAuditLog()]; // [ExternalStoreAuditLog] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addStoreAuditLogEvent(storeId, externalEventCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **Number**|  | 
 **externalEventCreate** | [**[ExternalStoreAuditLog]**](ExternalStoreAuditLog.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

