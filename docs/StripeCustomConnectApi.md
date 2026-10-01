# Flipdish.StripeCustomConnectApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBankAccountAndConnectedAccount**](StripeCustomConnectApi.md#createBankAccountAndConnectedAccount) | **POST** /api/v1.0/{appId}/customconnect/bank-account | 
[**createStripeConnectedAccount**](StripeCustomConnectApi.md#createStripeConnectedAccount) | **POST** /api/v1.0/{appId}/customconnect/{bankAccountId}/create-update-account | 
[**createStripeConnectedAccountLink**](StripeCustomConnectApi.md#createStripeConnectedAccountLink) | **POST** /api/v1.0/{appId}/customconnect/{stripeConnectedAccountId}/create-account-link | 
[**getCustomConnect**](StripeCustomConnectApi.md#getCustomConnect) | **GET** /api/v1.0/{appId}/customconnect/{storeId} | 
[**getVerificationStatus**](StripeCustomConnectApi.md#getVerificationStatus) | **GET** /api/v1.0/{appId}/customconnect/verification-status | 
[**setBankAccountBusinessType**](StripeCustomConnectApi.md#setBankAccountBusinessType) | **POST** /api/v1.0/{appId}/customconnect/bank-account/{bankAccountId}/businesstype | 
[**stripeCustomConnectRefresh**](StripeCustomConnectApi.md#stripeCustomConnectRefresh) | **GET** /api/v1.0/{appId}/customconnect/refresh-link | 
[**updateBankAccountDetails**](StripeCustomConnectApi.md#updateBankAccountDetails) | **POST** /api/v1.0/{appId}/customconnect/{bankAccountId}/update-bank-account-details | 
[**updatePayoutSchedule**](StripeCustomConnectApi.md#updatePayoutSchedule) | **POST** /api/v1.0/{appId}/customconnect/update-payout-schedule/{stripeConnectedAccountId}/{interval} | 



## createBankAccountAndConnectedAccount

> RestApiResultBankAccountDetail createBankAccountAndConnectedAccount(appId, account)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let account = new Flipdish.BankAccountCreate(); // BankAccountCreate | 
apiInstance.createBankAccountAndConnectedAccount(appId, account, (error, data, response) => {
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
 **account** | [**BankAccountCreate**](BankAccountCreate.md)|  | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createStripeConnectedAccount

> RestApiResultStripeConnectedAccount createStripeConnectedAccount(appId, bankAccountId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
apiInstance.createStripeConnectedAccount(appId, bankAccountId, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createStripeConnectedAccountLink

> RestApiResultStripeConnectedAccount createStripeConnectedAccountLink(appId, stripeConnectedAccountId, stripeAccountLinkRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let stripeConnectedAccountId = "stripeConnectedAccountId_example"; // String | 
let stripeAccountLinkRequest = new Flipdish.StripeAccountLinkRequest(); // StripeAccountLinkRequest | 
apiInstance.createStripeConnectedAccountLink(appId, stripeConnectedAccountId, stripeAccountLinkRequest, (error, data, response) => {
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
 **stripeConnectedAccountId** | **String**|  | 
 **stripeAccountLinkRequest** | [**StripeAccountLinkRequest**](StripeAccountLinkRequest.md)|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getCustomConnect

> RestApiArrayResultStripeCustomConnectedAccount getCustomConnect(storeId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let storeId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.getCustomConnect(storeId, appId, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultStripeCustomConnectedAccount**](RestApiArrayResultStripeCustomConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getVerificationStatus

> RestApiResultStripeConnectedAccount getVerificationStatus(appId, stripeConnectedAccountId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let stripeConnectedAccountId = "stripeConnectedAccountId_example"; // String | 
apiInstance.getVerificationStatus(appId, stripeConnectedAccountId, (error, data, response) => {
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
 **stripeConnectedAccountId** | **String**|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## setBankAccountBusinessType

> RestApiResultBankAccountDetail setBankAccountBusinessType(appId, bankAccountId, businessType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let businessType = "businessType_example"; // String | 
apiInstance.setBankAccountBusinessType(appId, bankAccountId, businessType, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **businessType** | **String**|  | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## stripeCustomConnectRefresh

> Object stripeCustomConnectRefresh(linkRequestId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let linkRequestId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.stripeCustomConnectRefresh(linkRequestId, appId, (error, data, response) => {
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
 **linkRequestId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateBankAccountDetails

> RestApiResultStripeConnectedAccount updateBankAccountDetails(appId, bankAccountId, updateRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let updateRequest = new Flipdish.BankAccountDetailsUpdateRequest(); // BankAccountDetailsUpdateRequest | 
apiInstance.updateBankAccountDetails(appId, bankAccountId, updateRequest, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **updateRequest** | [**BankAccountDetailsUpdateRequest**](BankAccountDetailsUpdateRequest.md)|  | 

### Return type

[**RestApiResultStripeConnectedAccount**](RestApiResultStripeConnectedAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updatePayoutSchedule

> RestApiResultModelBase updatePayoutSchedule(appId, stripeConnectedAccountId, interval)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectApi();
let appId = "appId_example"; // String | 
let stripeConnectedAccountId = "stripeConnectedAccountId_example"; // String | 
let interval = "interval_example"; // String | 
apiInstance.updatePayoutSchedule(appId, stripeConnectedAccountId, interval, (error, data, response) => {
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
 **stripeConnectedAccountId** | **String**|  | 
 **interval** | **String**|  | 

### Return type

[**RestApiResultModelBase**](RestApiResultModelBase.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

