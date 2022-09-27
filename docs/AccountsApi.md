# Flipdish.AccountsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**answerSignUpQuestion**](AccountsApi.md#answerSignUpQuestion) | **POST** /api/v1.0/accounts/signupstep/{signupStepAction}/answer | Answer a signup question
[**changePassword**](AccountsApi.md#changePassword) | **PUT** /api/v1.0/accounts/password | Change password
[**changePasswordWithPin**](AccountsApi.md#changePasswordWithPin) | **PUT** /api/v1.0/accounts/password/pin | Change password
[**createAccount**](AccountsApi.md#createAccount) | **POST** /api/v1.0/accounts | Create account with email address and store name
[**getAccountDetails**](AccountsApi.md#getAccountDetails) | **GET** /api/v1.0/accounts | Gets the current account detail
[**getLocalisedTimeZones**](AccountsApi.md#getLocalisedTimeZones) | **GET** /api/v1.0/accounts/timezones | [PRIVATE API] Get timezones localised to users language
[**login**](AccountsApi.md#login) | **POST** /api/v1.0/accounts/login | Login with username and password
[**loginWithPin**](AccountsApi.md#loginWithPin) | **POST** /api/v1.0/accounts/login/pin | Login with username and password
[**logout**](AccountsApi.md#logout) | **POST** /api/v1.0/accounts/logout | Log out. It removes Flipdish authorization Cookie.
[**passwordResetWithToken**](AccountsApi.md#passwordResetWithToken) | **POST** /api/v1.0/accounts/password | Reset password with token.
[**recaptchaValidate**](AccountsApi.md#recaptchaValidate) | **POST** /api/v1.0/accounts/recaptcha | Validate recaptcha from flipdish portal
[**requestLoginPin**](AccountsApi.md#requestLoginPin) | **POST** /api/v1.0/accounts/pin | Request login PIN. The server sends the PIN to the email address.
[**requestPasswordReset**](AccountsApi.md#requestPasswordReset) | **POST** /api/v1.0/accounts/passwordreset | Request password reset. Flipdish system will send a token via email.
[**sendPinForPasswordReset**](AccountsApi.md#sendPinForPasswordReset) | **POST** /api/v1.0/accounts/password/resetpin | Request Password Reset PIN. The server sends the PIN to the email address.
[**skipSignupStep**](AccountsApi.md#skipSignupStep) | **POST** /api/v1.0/accounts/signupstep/{signupStepAction}/skip | Skip a signup question
[**updateAccount**](AccountsApi.md#updateAccount) | **PUT** /api/v1.0/accounts | Update account with name and language


<a name="answerSignUpQuestion"></a>
# **answerSignUpQuestion**
> answerSignUpQuestion(signupStepAction, answerId)

Answer a signup question

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var signupStepAction = "signupStepAction_example"; // String | Signup step action

var answerId = 56; // Number | Identifier of the answer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.answerSignUpQuestion(signupStepAction, answerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupStepAction** | **String**| Signup step action | 
 **answerId** | **Number**| Identifier of the answer | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="changePassword"></a>
# **changePassword**
> changePassword(changePasswordModel)

Change password

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var changePasswordModel = new Flipdish.ChangePasswordModel(); // ChangePasswordModel | Change password model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePassword(changePasswordModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordModel** | [**ChangePasswordModel**](ChangePasswordModel.md)| Change password model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="changePasswordWithPin"></a>
# **changePasswordWithPin**
> changePasswordWithPin(changePasswordModel)

Change password

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var changePasswordModel = new Flipdish.SetPasswordWithPinModel(); // SetPasswordWithPinModel | Change password model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePasswordWithPin(changePasswordModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordModel** | [**SetPasswordWithPinModel**](SetPasswordWithPinModel.md)| Change password model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createAccount"></a>
# **createAccount**
> createAccount(createAccountModel)

Create account with email address and store name

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var createAccountModel = new Flipdish.CreateAccountModel(); // CreateAccountModel | Create account model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createAccount(createAccountModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccountModel** | [**CreateAccountModel**](CreateAccountModel.md)| Create account model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getAccountDetails"></a>
# **getAccountDetails**
> RestApiResultAccountDetail getAccountDetails()

Gets the current account detail

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountDetails(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RestApiResultAccountDetail**](RestApiResultAccountDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getLocalisedTimeZones"></a>
# **getLocalisedTimeZones**
> RestApiArrayResultLocalisedTimeZone getLocalisedTimeZones()

[PRIVATE API] Get timezones localised to users language

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocalisedTimeZones(callback);
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

<a name="login"></a>
# **login**
> login(loginModel)

Login with username and password

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var loginModel = new Flipdish.LoginModel(); // LoginModel | Login model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.login(loginModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginModel** | [**LoginModel**](LoginModel.md)| Login model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="loginWithPin"></a>
# **loginWithPin**
> loginWithPin(loginModel)

Login with username and password

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var loginModel = new Flipdish.LoginWithPinModel(); // LoginWithPinModel | Login model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginWithPin(loginModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginModel** | [**LoginWithPinModel**](LoginWithPinModel.md)| Login model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="logout"></a>
# **logout**
> logout()

Log out. It removes Flipdish authorization Cookie.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="passwordResetWithToken"></a>
# **passwordResetWithToken**
> passwordResetWithToken(passwordResetModel)

Reset password with token.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var passwordResetModel = new Flipdish.PasswordResetModel(); // PasswordResetModel | Password reset model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.passwordResetWithToken(passwordResetModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetModel** | [**PasswordResetModel**](PasswordResetModel.md)| Password reset model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="recaptchaValidate"></a>
# **recaptchaValidate**
> recaptchaValidate(token)

Validate recaptcha from flipdish portal

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var token = "token_example"; // String | Request token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.recaptchaValidate(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Request token | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="requestLoginPin"></a>
# **requestLoginPin**
> RequestLoginPinResposne requestLoginPin(requestLoginPinRequest)

Request login PIN. The server sends the PIN to the email address.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var requestLoginPinRequest = new Flipdish.RequestLoginPinModel(); // RequestLoginPinModel | Request login PIN request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestLoginPin(requestLoginPinRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestLoginPinRequest** | [**RequestLoginPinModel**](RequestLoginPinModel.md)| Request login PIN request | 

### Return type

[**RequestLoginPinResposne**](RequestLoginPinResposne.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="requestPasswordReset"></a>
# **requestPasswordReset**
> requestPasswordReset(requestPasswordResetModel)

Request password reset. Flipdish system will send a token via email.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var requestPasswordResetModel = new Flipdish.RequestPasswordResetModel(); // RequestPasswordResetModel | Request password reset model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestPasswordReset(requestPasswordResetModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPasswordResetModel** | [**RequestPasswordResetModel**](RequestPasswordResetModel.md)| Request password reset model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="sendPinForPasswordReset"></a>
# **sendPinForPasswordReset**
> RequestPasswordResetPinResponse sendPinForPasswordReset(requestPasswordResetRequest)

Request Password Reset PIN. The server sends the PIN to the email address.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var requestPasswordResetRequest = new Flipdish.RequestPasswordResetModel(); // RequestPasswordResetModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendPinForPasswordReset(requestPasswordResetRequest, callback);
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
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="skipSignupStep"></a>
# **skipSignupStep**
> skipSignupStep(signupStepAction)

Skip a signup question

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var signupStepAction = "signupStepAction_example"; // String | Signup step action


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.skipSignupStep(signupStepAction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupStepAction** | **String**| Signup step action | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateAccount"></a>
# **updateAccount**
> updateAccount(updateAccountModel)

Update account with name and language

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.AccountsApi();

var updateAccountModel = new Flipdish.AccountDetailBase(); // AccountDetailBase | Update account model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAccount(updateAccountModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAccountModel** | [**AccountDetailBase**](AccountDetailBase.md)| Update account model | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

