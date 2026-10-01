# Flipdish.OrdersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptOrder**](OrdersApi.md#acceptOrder) | **POST** /api/v1.0/orders/{id}/accept | 
[**dispatchOrder**](OrdersApi.md#dispatchOrder) | **POST** /api/v1.0/orders/{id}/dispatch | 
[**getDeliveryInformation**](OrdersApi.md#getDeliveryInformation) | **GET** /api/v1.0/orders/{orderId}/deliveryinfo | 
[**getFulfillmentState**](OrdersApi.md#getFulfillmentState) | **GET** /api/v1.0/orders/{orderId}/fulfillment/state | 
[**getFulfillmentStatusWithDetailsAndActions**](OrdersApi.md#getFulfillmentStatusWithDetailsAndActions) | **GET** /api/v1.0/orders/{orderId}/fulfillment/state/details | 
[**getOrderById**](OrdersApi.md#getOrderById) | **GET** /api/v1.0/orders/{id} | 
[**getOrders**](OrdersApi.md#getOrders) | **GET** /api/v1.0/orders | 
[**getOrdersSummary**](OrdersApi.md#getOrdersSummary) | **GET** /api/v1.0/{appId}/orders/summaries | 
[**getOrdersSummaryNew**](OrdersApi.md#getOrdersSummaryNew) | **GET** /api/v1.0/{appId}/orders/summariesNew | 
[**getReadyToProcess**](OrdersApi.md#getReadyToProcess) | **GET** /api/v1.0/{appId}/orders/ready_to_process | 
[**refundOrder**](OrdersApi.md#refundOrder) | **POST** /api/v1.0/orders/{id}/refund | 
[**rejectOrder**](OrdersApi.md#rejectOrder) | **POST** /api/v1.0/orders/{id}/reject | 
[**searchFulfillmentStatuses**](OrdersApi.md#searchFulfillmentStatuses) | **GET** /api/v1.0/{appId}/orders/fulfillmentstatuses | 
[**updateDeliveryInformation**](OrdersApi.md#updateDeliveryInformation) | **POST** /api/v1.0/orders/{orderId}/deliveryinfo | 
[**updateFulfillmentState**](OrdersApi.md#updateFulfillmentState) | **POST** /api/v1.0/orders/{orderId}/fulfillment/state | 



## acceptOrder

> acceptOrder(id, acceptObject)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let id = 56; // Number | 
let acceptObject = new Flipdish.Accept(); // Accept | 
apiInstance.acceptOrder(id, acceptObject, (error, data, response) => {
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
 **id** | **Number**|  | 
 **acceptObject** | [**Accept**](Accept.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## dispatchOrder

> dispatchOrder(id)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let id = 56; // Number | 
apiInstance.dispatchOrder(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getDeliveryInformation

> RestApiResultOrderDeliveryInformation getDeliveryInformation(orderId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let orderId = 56; // Number | 
apiInstance.getDeliveryInformation(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**RestApiResultOrderDeliveryInformation**](RestApiResultOrderDeliveryInformation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getFulfillmentState

> RestApiResultOrderFulfillmentStatus getFulfillmentState(orderId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let orderId = 56; // Number | 
apiInstance.getFulfillmentState(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**RestApiResultOrderFulfillmentStatus**](RestApiResultOrderFulfillmentStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getFulfillmentStatusWithDetailsAndActions

> RestApiResultOrderFulfillmentStatusWithConfigurationActions getFulfillmentStatusWithDetailsAndActions(orderId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let orderId = 56; // Number | 
apiInstance.getFulfillmentStatusWithDetailsAndActions(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**RestApiResultOrderFulfillmentStatusWithConfigurationActions**](RestApiResultOrderFulfillmentStatusWithConfigurationActions.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getOrderById

> RestApiResultOrder getOrderById(id)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let id = 56; // Number | 
apiInstance.getOrderById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**RestApiResultOrder**](RestApiResultOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getOrders

> RestApiPaginationResultOrder getOrders(opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let opts = {
  'physicalRestaurantId': [null], // [Number] | 
  'state': ["null"], // [String] | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'page': 56, // Number | 
  'limit': 56 // Number | 
};
apiInstance.getOrders(opts, (error, data, response) => {
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
 **physicalRestaurantId** | [**[Number]**](Number.md)|  | [optional] 
 **state** | [**[String]**](String.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultOrder**](RestApiPaginationResultOrder.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getOrdersSummary

> RestApiPaginationResultOrderSummary getOrdersSummary(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let appId = "appId_example"; // String | 
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'physicalRestaurantId': [null], // [Number] | 
  'state': ["null"], // [String] | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'orderByRequestedForTime': true, // Boolean | 
  'channels': ["null"], // [String] | 
  'orderIds': [null], // [Number] | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'logSql': true // Boolean | 
};
apiInstance.getOrdersSummary(appId, opts, (error, data, response) => {
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
 **searchQuery** | **String**|  | [optional] 
 **physicalRestaurantId** | [**[Number]**](Number.md)|  | [optional] 
 **state** | [**[String]**](String.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **orderByRequestedForTime** | **Boolean**|  | [optional] 
 **channels** | [**[String]**](String.md)|  | [optional] 
 **orderIds** | [**[Number]**](Number.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **logSql** | **Boolean**|  | [optional] 

### Return type

[**RestApiPaginationResultOrderSummary**](RestApiPaginationResultOrderSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getOrdersSummaryNew

> RestApiPaginationResultOrderSummary getOrdersSummaryNew(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let appId = "appId_example"; // String | 
let opts = {
  'searchQuery': "searchQuery_example", // String | 
  'physicalRestaurantId': [null], // [Number] | 
  'state': ["null"], // [String] | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'orderByRequestedForTime': true, // Boolean | 
  'channels': ["null"], // [String] | 
  'orderIds': [null], // [Number] | 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'logSql': true // Boolean | 
};
apiInstance.getOrdersSummaryNew(appId, opts, (error, data, response) => {
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
 **searchQuery** | **String**|  | [optional] 
 **physicalRestaurantId** | [**[Number]**](Number.md)|  | [optional] 
 **state** | [**[String]**](String.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **orderByRequestedForTime** | **Boolean**|  | [optional] 
 **channels** | [**[String]**](String.md)|  | [optional] 
 **orderIds** | [**[Number]**](Number.md)|  | [optional] 
 **from** | **Date**|  | [optional] 
 **to** | **Date**|  | [optional] 
 **logSql** | **Boolean**|  | [optional] 

### Return type

[**RestApiPaginationResultOrderSummary**](RestApiPaginationResultOrderSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getReadyToProcess

> OrderList getReadyToProcess(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeId': [null] // [Number] | 
};
apiInstance.getReadyToProcess(appId, opts, (error, data, response) => {
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
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**OrderList**](OrderList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message


## refundOrder

> refundOrder(id, refundObject)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let id = 56; // Number | 
let refundObject = new Flipdish.Refund(); // Refund | 
apiInstance.refundOrder(id, refundObject, (error, data, response) => {
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
 **id** | **Number**|  | 
 **refundObject** | [**Refund**](Refund.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## rejectOrder

> rejectOrder(id, rejectObject)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let id = 56; // Number | 
let rejectObject = new Flipdish.Reject(); // Reject | 
apiInstance.rejectOrder(id, rejectObject, (error, data, response) => {
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
 **id** | **Number**|  | 
 **rejectObject** | [**Reject**](Reject.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## searchFulfillmentStatuses

> RestApiArrayResultOrderFulfillmentStatus searchFulfillmentStatuses(appId, orderIds)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let appId = "appId_example"; // String | 
let orderIds = "orderIds_example"; // String | 
apiInstance.searchFulfillmentStatuses(appId, orderIds, (error, data, response) => {
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
 **orderIds** | **String**|  | 

### Return type

[**RestApiArrayResultOrderFulfillmentStatus**](RestApiArrayResultOrderFulfillmentStatus.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateDeliveryInformation

> updateDeliveryInformation(orderId, deliveryInformation)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let orderId = 56; // Number | 
let deliveryInformation = new Flipdish.OrderDeliveryInformationBase(); // OrderDeliveryInformationBase | 
apiInstance.updateDeliveryInformation(orderId, deliveryInformation, (error, data, response) => {
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
 **deliveryInformation** | [**OrderDeliveryInformationBase**](OrderDeliveryInformationBase.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateFulfillmentState

> updateFulfillmentState(orderId, fulfillmentStatusRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OrdersApi();
let orderId = 56; // Number | 
let fulfillmentStatusRequest = new Flipdish.OrderFulfillmentStatusUpdate(); // OrderFulfillmentStatusUpdate | 
apiInstance.updateFulfillmentState(orderId, fulfillmentStatusRequest, (error, data, response) => {
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
 **fulfillmentStatusRequest** | [**OrderFulfillmentStatusUpdate**](OrderFulfillmentStatusUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

