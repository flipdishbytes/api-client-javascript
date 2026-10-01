# Flipdish.BankAccountApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachBankAccountToStore**](BankAccountApi.md#attachBankAccountToStore) | **POST** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/store/{storeId} | 
[**createBankAccount**](BankAccountApi.md#createBankAccount) | **POST** /api/v1.0/{appId}/bankaccounts | 
[**deleteBankAccount**](BankAccountApi.md#deleteBankAccount) | **DELETE** /api/v1.0/{appId}/bankaccounts/{bankAccountId} | 
[**getBankAccountById**](BankAccountApi.md#getBankAccountById) | **GET** /api/v1.0/{appId}/bankaccounts/{bankAccountId} | 
[**getBankAccounts**](BankAccountApi.md#getBankAccounts) | **GET** /api/v1.0/{appId}/bankaccounts | 
[**getCountriesWithFieldDefinitions**](BankAccountApi.md#getCountriesWithFieldDefinitions) | **GET** /api/v1.0/{appId}/bankaccounts/countries-field-definitions | 
[**getFieldDefinitions**](BankAccountApi.md#getFieldDefinitions) | **GET** /api/v1.0/{appId}/bankaccounts/field-definitions | 
[**updateBankAccount**](BankAccountApi.md#updateBankAccount) | **POST** /api/v1.0/{appId}/bankaccounts/{bankAccountId} | 
[**updateBankAccountState**](BankAccountApi.md#updateBankAccountState) | **POST** /api/v1.0/{appId}/bankaccounts/{bankAccountId}/state/{state} | 



## attachBankAccountToStore

> attachBankAccountToStore(appId, bankAccountId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let storeId = 56; // Number | 
apiInstance.attachBankAccountToStore(appId, bankAccountId, storeId, (error, data, response) => {
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
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **storeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createBankAccount

> RestApiResultBankAccountDetail createBankAccount(appId, account)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
let account = new Flipdish.BankAccountCreate(); // BankAccountCreate | 
apiInstance.createBankAccount(appId, account, (error, data, response) => {
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


## deleteBankAccount

> deleteBankAccount(appId, bankAccountId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
apiInstance.deleteBankAccount(appId, bankAccountId, (error, data, response) => {
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
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getBankAccountById

> RestApiResultBankAccountDetail getBankAccountById(bankAccountId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let bankAccountId = 56; // Number | 
let appId = "appId_example"; // String | 
apiInstance.getBankAccountById(bankAccountId, appId, (error, data, response) => {
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
 **bankAccountId** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBankAccounts

> RestApiArrayResultBankAccountSummary getBankAccounts(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
apiInstance.getBankAccounts(appId, (error, data, response) => {
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

[**RestApiArrayResultBankAccountSummary**](RestApiArrayResultBankAccountSummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getCountriesWithFieldDefinitions

> RestApiArrayResultCountryWithAccountFieldsDefinitions getCountriesWithFieldDefinitions(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
apiInstance.getCountriesWithFieldDefinitions(appId, (error, data, response) => {
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

[**RestApiArrayResultCountryWithAccountFieldsDefinitions**](RestApiArrayResultCountryWithAccountFieldsDefinitions.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getFieldDefinitions

> RestApiResultAccountFieldsDefinitions getFieldDefinitions(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
apiInstance.getFieldDefinitions(appId, (error, data, response) => {
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

[**RestApiResultAccountFieldsDefinitions**](RestApiResultAccountFieldsDefinitions.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateBankAccount

> updateBankAccount(appId, bankAccountId, account)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let account = new Flipdish.BankAccountCreate(); // BankAccountCreate | 
apiInstance.updateBankAccount(appId, bankAccountId, account, (error, data, response) => {
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
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **account** | [**BankAccountCreate**](BankAccountCreate.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateBankAccountState

> updateBankAccountState(appId, bankAccountId, state, reason)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.BankAccountApi();
let appId = "appId_example"; // String | 
let bankAccountId = 56; // Number | 
let state = "state_example"; // String | 
let reason = "reason_example"; // String | 
apiInstance.updateBankAccountState(appId, bankAccountId, state, reason, (error, data, response) => {
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
 **appId** | **String**|  | 
 **bankAccountId** | **Number**|  | 
 **state** | **String**|  | 
 **reason** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

