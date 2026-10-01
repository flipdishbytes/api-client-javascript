# Flipdish.AccountsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**answerSignUpQuestion**](AccountsApi.md#answerSignUpQuestion) | **POST** /api/v1.0/accounts/signupstep/{signupStepAction}/answer | 
[**changePassword**](AccountsApi.md#changePassword) | **PUT** /api/v1.0/accounts/password | 
[**changePasswordWithPin**](AccountsApi.md#changePasswordWithPin) | **PUT** /api/v1.0/accounts/password/pin | 
[**createAccount**](AccountsApi.md#createAccount) | **POST** /api/v1.0/accounts | 
[**createBasicAccount**](AccountsApi.md#createBasicAccount) | **POST** /api/v1.0/accounts/basic-account | 
[**getAccountDetails**](AccountsApi.md#getAccountDetails) | **GET** /api/v1.0/accounts | 
[**getLocalisedTimeZones**](AccountsApi.md#getLocalisedTimeZones) | **GET** /api/v1.0/accounts/timezones | 
[**login**](AccountsApi.md#login) | **POST** /api/v1.0/accounts/login | 
[**loginSso**](AccountsApi.md#loginSso) | **POST** /api/v1.0/accounts/login/sso | 
[**loginWithPin**](AccountsApi.md#loginWithPin) | **POST** /api/v1.0/accounts/login/pin | 
[**logout**](AccountsApi.md#logout) | **POST** /api/v1.0/accounts/logout | 
[**passwordResetWithToken**](AccountsApi.md#passwordResetWithToken) | **POST** /api/v1.0/accounts/password | 
[**recaptchaValidate**](AccountsApi.md#recaptchaValidate) | **POST** /api/v1.0/accounts/recaptcha | 
[**requestLoginPin**](AccountsApi.md#requestLoginPin) | **POST** /api/v1.0/accounts/pin | 
[**requestPasswordReset**](AccountsApi.md#requestPasswordReset) | **POST** /api/v1.0/accounts/passwordreset | 
[**sendPinForPasswordReset**](AccountsApi.md#sendPinForPasswordReset) | **POST** /api/v1.0/accounts/password/resetpin | 
[**skipSignupStep**](AccountsApi.md#skipSignupStep) | **POST** /api/v1.0/accounts/signupstep/{signupStepAction}/skip | 
[**updateAccount**](AccountsApi.md#updateAccount) | **PUT** /api/v1.0/accounts | 



## answerSignUpQuestion

> answerSignUpQuestion(signupStepAction, answerId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let signupStepAction = "signupStepAction_example"; // String | 
let answerId = 56; // Number | 
apiInstance.answerSignUpQuestion(signupStepAction, answerId, (error, data, response) => {
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
 **signupStepAction** | **String**|  | 
 **answerId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## changePassword

> changePassword(changePasswordModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let changePasswordModel = new Flipdish.ChangePasswordModel(); // ChangePasswordModel | 
apiInstance.changePassword(changePasswordModel, (error, data, response) => {
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
 **changePasswordModel** | [**ChangePasswordModel**](ChangePasswordModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## changePasswordWithPin

> changePasswordWithPin(changePasswordModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let changePasswordModel = new Flipdish.SetPasswordWithPinModel(); // SetPasswordWithPinModel | 
apiInstance.changePasswordWithPin(changePasswordModel, (error, data, response) => {
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
 **changePasswordModel** | [**SetPasswordWithPinModel**](SetPasswordWithPinModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## createAccount

> createAccount(createAccountModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let createAccountModel = new Flipdish.CreateAccountModel(); // CreateAccountModel | 
apiInstance.createAccount(createAccountModel, (error, data, response) => {
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
 **createAccountModel** | [**CreateAccountModel**](CreateAccountModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## createBasicAccount

> String createBasicAccount(basicAccountModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let basicAccountModel = new Flipdish.CreateBasicAccountModel(); // CreateBasicAccountModel | 
apiInstance.createBasicAccount(basicAccountModel, (error, data, response) => {
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
 **basicAccountModel** | [**CreateBasicAccountModel**](CreateBasicAccountModel.md)|  | 

### Return type

**String**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## getAccountDetails

> RestApiResultAccountDetail getAccountDetails()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
apiInstance.getAccountDetails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestApiResultAccountDetail**](RestApiResultAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## getLocalisedTimeZones

> RestApiArrayResultLocalisedTimeZone getLocalisedTimeZones()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
apiInstance.getLocalisedTimeZones((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestApiArrayResultLocalisedTimeZone**](RestApiArrayResultLocalisedTimeZone.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## login

> login(loginModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let loginModel = new Flipdish.LoginModel(); // LoginModel | 
apiInstance.login(loginModel, (error, data, response) => {
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
 **loginModel** | [**LoginModel**](LoginModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## loginSso

> loginSso()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
apiInstance.loginSso((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## loginWithPin

> loginWithPin(loginModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let loginModel = new Flipdish.LoginWithPinModel(); // LoginWithPinModel | 
apiInstance.loginWithPin(loginModel, (error, data, response) => {
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
 **loginModel** | [**LoginWithPinModel**](LoginWithPinModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## logout

> logout()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
apiInstance.logout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Message, ErrorCode, StackTrace


## passwordResetWithToken

> passwordResetWithToken(passwordResetModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let passwordResetModel = new Flipdish.PasswordResetModel(); // PasswordResetModel | 
apiInstance.passwordResetWithToken(passwordResetModel, (error, data, response) => {
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
 **passwordResetModel** | [**PasswordResetModel**](PasswordResetModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## recaptchaValidate

> recaptchaValidate(token)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let token = "token_example"; // String | 
apiInstance.recaptchaValidate(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## requestLoginPin

> RequestLoginPinResponse requestLoginPin(requestLoginPinRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let requestLoginPinRequest = new Flipdish.RequestLoginPinModel(); // RequestLoginPinModel | 
apiInstance.requestLoginPin(requestLoginPinRequest, (error, data, response) => {
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
 **requestLoginPinRequest** | [**RequestLoginPinModel**](RequestLoginPinModel.md)|  | 

### Return type

[**RequestLoginPinResponse**](RequestLoginPinResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## requestPasswordReset

> requestPasswordReset(requestPasswordResetModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let requestPasswordResetModel = new Flipdish.RequestPasswordResetModel(); // RequestPasswordResetModel | 
apiInstance.requestPasswordReset(requestPasswordResetModel, (error, data, response) => {
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
 **requestPasswordResetModel** | [**RequestPasswordResetModel**](RequestPasswordResetModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml


## sendPinForPasswordReset

> RequestPasswordResetPinResponse sendPinForPasswordReset(requestPasswordResetRequest)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let requestPasswordResetRequest = new Flipdish.RequestPasswordResetModel(); // RequestPasswordResetModel | 
apiInstance.sendPinForPasswordReset(requestPasswordResetRequest, (error, data, response) => {
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
 **requestPasswordResetRequest** | [**RequestPasswordResetModel**](RequestPasswordResetModel.md)|  | 

### Return type

[**RequestPasswordResetPinResponse**](RequestPasswordResetPinResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## skipSignupStep

> skipSignupStep(signupStepAction)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let signupStepAction = "signupStepAction_example"; // String | 
apiInstance.skipSignupStep(signupStepAction, (error, data, response) => {
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
 **signupStepAction** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateAccount

> updateAccount(updateAccountModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.AccountsApi();
let updateAccountModel = new Flipdish.AccountDetailBase(); // AccountDetailBase | 
apiInstance.updateAccount(updateAccountModel, (error, data, response) => {
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
 **updateAccountModel** | [**AccountDetailBase**](AccountDetailBase.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: Message, ErrorCode, StackTrace, application/json, text/json, application/xml, text/xml

