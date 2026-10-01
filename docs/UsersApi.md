# Flipdish.UsersApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserNote**](UsersApi.md#addUserNote) | **POST** /api/v1.0/users/{userId}/AddUserNote | 
[**addUserToRole**](UsersApi.md#addUserToRole) | **POST** /api/v1.0/users/{userId}/AddUserToRole/{roleName} | 
[**anonymizeUser**](UsersApi.md#anonymizeUser) | **POST** /api/v1.0/users/{userId}/AnonymizeUser | 
[**blockUserPhoneNumber**](UsersApi.md#blockUserPhoneNumber) | **POST** /api/v1.0/users/{userId}/BlockUserPhoneNumber | 
[**getPreviousOrderCountForStore**](UsersApi.md#getPreviousOrderCountForStore) | **GET** /api/v1.0/users/{userId}/previousordercount/{storeId} | 
[**getRestaurantUserAccounts**](UsersApi.md#getRestaurantUserAccounts) | **GET** /api/v1.0/users/{userId}/RestaurantUserAccounts | 
[**getRestaurantUserStores**](UsersApi.md#getRestaurantUserStores) | **GET** /api/v1.0/users/{userId}/RestaurantUserStores | 
[**getRoles**](UsersApi.md#getRoles) | **GET** /api/v1.0/users/roles | 
[**getRolesAndUnassignedRoles**](UsersApi.md#getRolesAndUnassignedRoles) | **GET** /api/v1.0/users/{userId}/roles | 
[**getUserById**](UsersApi.md#getUserById) | **GET** /api/v1.0/users/{userId} | 
[**getUserNotes**](UsersApi.md#getUserNotes) | **GET** /api/v1.0/users/{userId}/UserNotes | 
[**markUserAsFraudulent**](UsersApi.md#markUserAsFraudulent) | **POST** /api/v1.0/users/{userId}/MarkUserAsFraudulent | 
[**markUserAsSuspicious**](UsersApi.md#markUserAsSuspicious) | **POST** /api/v1.0/users/{userId}/MarkUserAsSuspicious | 
[**removeUserFromRole**](UsersApi.md#removeUserFromRole) | **POST** /api/v1.0/users/{userId}/RemoveUserFromRole/{roleName} | 
[**resetMfa**](UsersApi.md#resetMfa) | **POST** /api/v1.0/users/{userId}/ResetMfa | 
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /api/v1.0/users/search | 
[**setCustomerName**](UsersApi.md#setCustomerName) | **POST** /api/v1.0/users/{userId}/SetCustomerName | 
[**setUserLanguage**](UsersApi.md#setUserLanguage) | **POST** /api/v1.0/users/{userId}/SetLanguage/{languageId} | 
[**unblockUserPhoneNumber**](UsersApi.md#unblockUserPhoneNumber) | **POST** /api/v1.0/users/{userId}/UnblockUserPhoneNumber | 



## addUserNote

> RestApiDefaultResponse addUserNote(userId, note)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let note = "note_example"; // String | 
apiInstance.addUserNote(userId, note, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **note** | **String**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## addUserToRole

> RestApiResultUserRole addUserToRole(userId, roleName)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let roleName = "roleName_example"; // String | 
apiInstance.addUserToRole(userId, roleName, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **roleName** | **String**|  | 

### Return type

[**RestApiResultUserRole**](RestApiResultUserRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## anonymizeUser

> RestApiDefaultResponse anonymizeUser(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.anonymizeUser(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## blockUserPhoneNumber

> RestApiDefaultResponse blockUserPhoneNumber(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.blockUserPhoneNumber(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getPreviousOrderCountForStore

> RestApiStringResult getPreviousOrderCountForStore(userId, storeId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let storeId = 56; // Number | 
apiInstance.getPreviousOrderCountForStore(userId, storeId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getRestaurantUserAccounts

> RestApiArrayResultUserFlipdishAccount getRestaurantUserAccounts(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.getRestaurantUserAccounts(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiArrayResultUserFlipdishAccount**](RestApiArrayResultUserFlipdishAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getRestaurantUserStores

> RestApiArrayResultUserStoreInfo getRestaurantUserStores(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.getRestaurantUserStores(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiArrayResultUserStoreInfo**](RestApiArrayResultUserStoreInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getRoles

> RestApiStringArrayResult getRoles()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
apiInstance.getRoles((error, data, response) => {
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

[**RestApiStringArrayResult**](RestApiStringArrayResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getRolesAndUnassignedRoles

> RestApiResultUserRole getRolesAndUnassignedRoles(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.getRolesAndUnassignedRoles(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiResultUserRole**](RestApiResultUserRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getUserById

> RestApiResultUserInfo getUserById(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.getUserById(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiResultUserInfo**](RestApiResultUserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## getUserNotes

> RestApiArrayResultUserNote getUserNotes(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.getUserNotes(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiArrayResultUserNote**](RestApiArrayResultUserNote.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## markUserAsFraudulent

> RestApiDefaultResponse markUserAsFraudulent(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.markUserAsFraudulent(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## markUserAsSuspicious

> RestApiDefaultResponse markUserAsSuspicious(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.markUserAsSuspicious(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## removeUserFromRole

> RestApiResultUserRole removeUserFromRole(userId, roleName)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let roleName = "roleName_example"; // String | 
apiInstance.removeUserFromRole(userId, roleName, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **roleName** | **String**|  | 

### Return type

[**RestApiResultUserRole**](RestApiResultUserRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## resetMfa

> RestApiDefaultResponse resetMfa(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.resetMfa(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## searchUsers

> RestApiPaginationResultUserSearch searchUsers(searchQuery, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let searchQuery = "searchQuery_example"; // String | 
let opts = {
  'hasUserLoggedIn': true, // Boolean | 
  'userDiscriminator': "userDiscriminator_example", // String | 
  'searchIn': "searchIn_example", // String | 
  'pageIndex': 56, // Number | 
  'pageSize': 56 // Number | 
};
apiInstance.searchUsers(searchQuery, opts, (error, data, response) => {
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
 **searchQuery** | **String**|  | 
 **hasUserLoggedIn** | **Boolean**|  | [optional] 
 **userDiscriminator** | **String**|  | [optional] 
 **searchIn** | **String**|  | [optional] 
 **pageIndex** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 

### Return type

[**RestApiPaginationResultUserSearch**](RestApiPaginationResultUserSearch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## setCustomerName

> RestApiDefaultResponse setCustomerName(userId, customerName)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let customerName = "customerName_example"; // String | 
apiInstance.setCustomerName(userId, customerName, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **customerName** | **String**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## setUserLanguage

> RestApiDefaultResponse setUserLanguage(userId, languageId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
let languageId = "languageId_example"; // String | 
apiInstance.setUserLanguage(userId, languageId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **languageId** | **String**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message


## unblockUserPhoneNumber

> RestApiDefaultResponse unblockUserPhoneNumber(userId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.UsersApi();
let userId = 56; // Number | 
apiInstance.unblockUserPhoneNumber(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**RestApiDefaultResponse**](RestApiDefaultResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message

