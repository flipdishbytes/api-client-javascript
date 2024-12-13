# Flipdish.TeammatesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeammate**](TeammatesApi.md#createTeammate) | **POST** /api/v1.0/{appId}/teammates | 
[**deleteTeammate**](TeammatesApi.md#deleteTeammate) | **DELETE** /api/v1.0/{appId}/teammates/{id} | 
[**getTeammateByAppIdAndTeammateId**](TeammatesApi.md#getTeammateByAppIdAndTeammateId) | **GET** /api/v1.0/{appId}/teammates/{id} | 
[**getTeammatesByAppId**](TeammatesApi.md#getTeammatesByAppId) | **GET** /api/v1.0/{appId}/teammates | 
[**grantaccess**](TeammatesApi.md#grantaccess) | **POST** /api/v1.0/{appId}/teammates/grantaccess | 
[**redeemInvitation**](TeammatesApi.md#redeemInvitation) | **GET** /api/v1.0/{appId}/teammates/redeem/{otc} | 
[**teammatesAcceptInvitation**](TeammatesApi.md#teammatesAcceptInvitation) | **GET** /api/v1.0/{appId}/teammates/accept/{otc} | 
[**teammatesAcceptInvitations**](TeammatesApi.md#teammatesAcceptInvitations) | **POST** /api/v1.0/teammates/acceptInvitations | 
[**teammatesPendingInvitations**](TeammatesApi.md#teammatesPendingInvitations) | **GET** /api/v1.0/teammates/pending-invitations | 
[**updateTeammate**](TeammatesApi.md#updateTeammate) | **POST** /api/v1.0/{appId}/teammates/{id} | 



## createTeammate

> RestApiResultTeammate createTeammate(appId, teammate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
let teammate = new Flipdish.CreateTeammate(); // CreateTeammate | 
apiInstance.createTeammate(appId, teammate, (error, data, response) => {
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
 **teammate** | [**CreateTeammate**](CreateTeammate.md)|  | 

### Return type

[**RestApiResultTeammate**](RestApiResultTeammate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteTeammate

> deleteTeammate(appId, id)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deleteTeammate(appId, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getTeammateByAppIdAndTeammateId

> RestApiResultTeammate getTeammateByAppIdAndTeammateId(appId, id)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
let id = "id_example"; // String | 
apiInstance.getTeammateByAppIdAndTeammateId(appId, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**RestApiResultTeammate**](RestApiResultTeammate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getTeammatesByAppId

> RestApiArrayResultTeammate getTeammatesByAppId(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
apiInstance.getTeammatesByAppId(appId, (error, data, response) => {
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

[**RestApiArrayResultTeammate**](RestApiArrayResultTeammate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## grantaccess

> Object grantaccess(appId, teammate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
let teammate = new Flipdish.CreateTeammate(); // CreateTeammate | 
apiInstance.grantaccess(appId, teammate, (error, data, response) => {
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
 **teammate** | [**CreateTeammate**](CreateTeammate.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## redeemInvitation

> RestApiResultRedeemInvitationResult redeemInvitation(otc, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let otc = "otc_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.redeemInvitation(otc, appId, (error, data, response) => {
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
 **otc** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultRedeemInvitationResult**](RestApiResultRedeemInvitationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## teammatesAcceptInvitation

> RestApiResultAcceptInvitationResult teammatesAcceptInvitation(otc, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let otc = "otc_example"; // String | 
let appId = "appId_example"; // String | 
apiInstance.teammatesAcceptInvitation(otc, appId, (error, data, response) => {
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
 **otc** | **String**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultAcceptInvitationResult**](RestApiResultAcceptInvitationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## teammatesAcceptInvitations

> teammatesAcceptInvitations()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
apiInstance.teammatesAcceptInvitations((error, data, response) => {
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
- **Accept**: application/json, text/json, application/xml, text/xml


## teammatesPendingInvitations

> RestApiArrayResultPendingInvitation teammatesPendingInvitations()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
apiInstance.teammatesPendingInvitations((error, data, response) => {
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

[**RestApiArrayResultPendingInvitation**](RestApiArrayResultPendingInvitation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## updateTeammate

> RestApiResultTeammate updateTeammate(appId, id, teammate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.TeammatesApi();
let appId = "appId_example"; // String | 
let id = "id_example"; // String | 
let teammate = new Flipdish.TeammateBase(); // TeammateBase | 
apiInstance.updateTeammate(appId, id, teammate, (error, data, response) => {
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
 **id** | **String**|  | 
 **teammate** | [**TeammateBase**](TeammateBase.md)|  | 

### Return type

[**RestApiResultTeammate**](RestApiResultTeammate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

