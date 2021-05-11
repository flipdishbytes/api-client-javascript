# Flipdish.StripeCustomConnectApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBankAccountAndConnectedAccount**](StripeCustomConnectApi.md#createBankAccountAndConnectedAccount) | **POST** /api/v1.0/{appId}/customconnect/bank-account | Create a new Bank Account and Stripe connected account
[**createStripeConnectedAccount**](StripeCustomConnectApi.md#createStripeConnectedAccount) | **POST** /api/v1.0/{appId}/customconnect/{bankAccountId}/create-update-account | Create or update a Stripe connected account associated with the bank account of bankAccountId
[**createStripeConnectedAccountLink**](StripeCustomConnectApi.md#createStripeConnectedAccountLink) | **POST** /api/v1.0/{appId}/customconnect/{stripeConnectedAccountId}/create-account-link | Gets a single-use Stripe URL for the given account
[**getVerificationStatus**](StripeCustomConnectApi.md#getVerificationStatus) | **GET** /api/v1.0/{appId}/customconnect/verification-status | Gets the current verification status of the given connected account
[**setBankAccountBusinessType**](StripeCustomConnectApi.md#setBankAccountBusinessType) | **POST** /api/v1.0/{appId}/customconnect/bank-account/{bankAccountId}/businesstype | Update bank account's BusinessType and create a Stripe Connected Account
[**stripeCustomConnectRefresh**](StripeCustomConnectApi.md#stripeCustomConnectRefresh) | **GET** /api/v1.0/{appId}/customconnect/refresh-link | 
[**updateBankAccountDetails**](StripeCustomConnectApi.md#updateBankAccountDetails) | **POST** /api/v1.0/{appId}/customconnect/{bankAccountId}/update-bank-account-details | Update bank account details


<a name="createBankAccountAndConnectedAccount"></a>
# **createBankAccountAndConnectedAccount**
> RestApiResultBankAccountDetail createBankAccountAndConnectedAccount(appId, account)

Create a new Bank Account and Stripe connected account

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | App Name

var account = new Flipdish.BankAccountCreate(); // BankAccountCreate | Account to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBankAccountAndConnectedAccount(appId, account, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name | 
 **account** | [**BankAccountCreate**](BankAccountCreate.md)| Account to be created | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createStripeConnectedAccount"></a>
# **createStripeConnectedAccount**
> RestApiResultStripeConnectedAccount createStripeConnectedAccount(appId, bankAccountId)

Create or update a Stripe connected account associated with the bank account of bankAccountId

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | App Name Id

var bankAccountId = 56; // Number | Bank Account Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStripeConnectedAccount(appId, bankAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **bankAccountId** | **Number**| Bank Account Id | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createStripeConnectedAccountLink"></a>
# **createStripeConnectedAccountLink**
> RestApiResultStripeConnectedAccount createStripeConnectedAccountLink(appId, stripeConnectedAccountId, stripeAccountLinkRequest)

Gets a single-use Stripe URL for the given account

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | App Name

var stripeConnectedAccountId = "stripeConnectedAccountId_example"; // String | Stripe Connected Account Id

var stripeAccountLinkRequest = new Flipdish.StripeAccountLinkRequest(); // StripeAccountLinkRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createStripeConnectedAccountLink(appId, stripeConnectedAccountId, stripeAccountLinkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name | 
 **stripeConnectedAccountId** | **String**| Stripe Connected Account Id | 
 **stripeAccountLinkRequest** | [**StripeAccountLinkRequest**](StripeAccountLinkRequest.md)|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getVerificationStatus"></a>
# **getVerificationStatus**
> RestApiResultStripeConnectedAccount getVerificationStatus(appId, stripeConnectedAccountId)

Gets the current verification status of the given connected account

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | 

var stripeConnectedAccountId = "stripeConnectedAccountId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVerificationStatus(appId, stripeConnectedAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **stripeConnectedAccountId** | **String**|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="setBankAccountBusinessType"></a>
# **setBankAccountBusinessType**
> RestApiResultBankAccountDetail setBankAccountBusinessType(appId, bankAccountId, businessType)

Update bank account's BusinessType and create a Stripe Connected Account

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | App Name

var bankAccountId = 56; // Number | Bank Account Id

var businessType = "businessType_example"; // String | Bank Account business type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setBankAccountBusinessType(appId, bankAccountId, businessType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name | 
 **bankAccountId** | **Number**| Bank Account Id | 
 **businessType** | **String**| Bank Account business type | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="stripeCustomConnectRefresh"></a>
# **stripeCustomConnectRefresh**
> Object stripeCustomConnectRefresh(linkRequestId, appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var linkRequestId = 56; // Number | 

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stripeCustomConnectRefresh(linkRequestId, appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkRequestId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateBankAccountDetails"></a>
# **updateBankAccountDetails**
> RestApiResultStripeConnectedAccount updateBankAccountDetails(appId, bankAccountId, updateRequest)

Update bank account details

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.StripeCustomConnectApi();

var appId = "appId_example"; // String | App Name Id

var bankAccountId = 56; // Number | Bank Account Id

var updateRequest = new Flipdish.BankAccountDetailsUpdateRequest(); // BankAccountDetailsUpdateRequest | fields to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBankAccountDetails(appId, bankAccountId, updateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 
 **bankAccountId** | **Number**| Bank Account Id | 
 **updateRequest** | [**BankAccountDetailsUpdateRequest**](BankAccountDetailsUpdateRequest.md)| fields to be updated | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

