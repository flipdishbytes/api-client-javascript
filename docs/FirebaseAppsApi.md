# Flipdish.FirebaseAppsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firebaseAppsAddFirebaseApp**](FirebaseAppsApi.md#firebaseAppsAddFirebaseApp) | **POST** /api/v1.0/FirebaseApp | 
[**firebaseAppsDeleteFirebaseApp**](FirebaseAppsApi.md#firebaseAppsDeleteFirebaseApp) | **DELETE** /api/v1.0/FirebaseApp/{whiteLabelId} | 
[**firebaseAppsGetFirebaseApp**](FirebaseAppsApi.md#firebaseAppsGetFirebaseApp) | **GET** /api/v1.0/FirebaseApp/{whitelabelId} | 



## firebaseAppsAddFirebaseApp

> Object firebaseAppsAddFirebaseApp(firebaseApp)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FirebaseAppsApi();
let firebaseApp = new Flipdish.FirebaseApp(); // FirebaseApp | 
apiInstance.firebaseAppsAddFirebaseApp(firebaseApp, (error, data, response) => {
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
 **firebaseApp** | [**FirebaseApp**](FirebaseApp.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## firebaseAppsDeleteFirebaseApp

> Object firebaseAppsDeleteFirebaseApp(whiteLabelId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FirebaseAppsApi();
let whiteLabelId = 56; // Number | 
apiInstance.firebaseAppsDeleteFirebaseApp(whiteLabelId, (error, data, response) => {
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
 **whiteLabelId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## firebaseAppsGetFirebaseApp

> Object firebaseAppsGetFirebaseApp(whitelabelId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.FirebaseAppsApi();
let whitelabelId = 56; // Number | 
apiInstance.firebaseAppsGetFirebaseApp(whitelabelId, (error, data, response) => {
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
 **whitelabelId** | **Number**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

