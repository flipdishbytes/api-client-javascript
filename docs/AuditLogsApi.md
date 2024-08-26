# Flipdish.AuditLogsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderAuditLog**](AuditLogsApi.md#addOrderAuditLog) | **POST** /api/v1.0/auditlogs/orders/{orderId} | 
[**addStoreAuditLogEvent**](AuditLogsApi.md#addStoreAuditLogEvent) | **POST** /api/v1.0/auditlogs/stores/{storeId} | 



## addOrderAuditLog

> addOrderAuditLog(orderId, externalEventCreate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AuditLogsApi();
let orderId = 56; // Number | 
let externalEventCreate = [new Flipdish.ExternalStoreAuditLog()]; // [ExternalStoreAuditLog] | 
apiInstance.addOrderAuditLog(orderId, externalEventCreate, (error, data, response) => {
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
 **orderId** | **Number**|  | 
 **externalEventCreate** | [**[ExternalStoreAuditLog]**](ExternalStoreAuditLog.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## addStoreAuditLogEvent

> addStoreAuditLogEvent(storeId, externalEventCreate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AuditLogsApi();
let storeId = 56; // Number | 
let externalEventCreate = [new Flipdish.ExternalStoreAuditLog()]; // [ExternalStoreAuditLog] | 
apiInstance.addStoreAuditLogEvent(storeId, externalEventCreate, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **externalEventCreate** | [**[ExternalStoreAuditLog]**](ExternalStoreAuditLog.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

