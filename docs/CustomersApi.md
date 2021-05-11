# Flipdish.CustomersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerById**](CustomersApi.md#getCustomerById) | **GET** /api/v1.0/{appId}/customers/{customerId} | Get customer of an app by Id
[**updateCustomerById**](CustomersApi.md#updateCustomerById) | **POST** /api/v1.0/{appId}/customers/{customerId} | Update customer of an app by Id


<a name="getCustomerById"></a>
# **getCustomerById**
> RestApiResultCustomer getCustomerById(appId, customerId)

Get customer of an app by Id

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CustomersApi();

var appId = "appId_example"; // String | App Name Id

var customerId = 56; // Number | Customer Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerById(appId, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **customerId** | **Number**| Customer Id | 

### Return type

[**RestApiResultCustomer**](RestApiResultCustomer.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateCustomerById"></a>
# **updateCustomerById**
> RestApiResultCustomer updateCustomerById(appId, customerId, updateCustomer)

Update customer of an app by Id

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CustomersApi();

var appId = "appId_example"; // String | App Name Id

var customerId = 56; // Number | Customer Id

var updateCustomer = new Flipdish.CustomerUpdateModel(); // CustomerUpdateModel | Updated customer information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomerById(appId, customerId, updateCustomer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **customerId** | **Number**| Customer Id | 
 **updateCustomer** | [**CustomerUpdateModel**](CustomerUpdateModel.md)| Updated customer information | 

### Return type

[**RestApiResultCustomer**](RestApiResultCustomer.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

