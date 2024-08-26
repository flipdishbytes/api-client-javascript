# Flipdish.StripeCustomConnectAdminApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initializeBankAccountConnectedAccount**](StripeCustomConnectAdminApi.md#initializeBankAccountConnectedAccount) | **POST** /api/v1.0/customconnect/initialize-bank-account | 



## initializeBankAccountConnectedAccount

> RestApiResultBankAccountDetail initializeBankAccountConnectedAccount(accounts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.StripeCustomConnectAdminApi();
let accounts = [null]; // [Number] | 
apiInstance.initializeBankAccountConnectedAccount(accounts, (error, data, response) => {
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
 **accounts** | [**[Number]**](Number.md)|  | 

### Return type

[**RestApiResultBankAccountDetail**](RestApiResultBankAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

