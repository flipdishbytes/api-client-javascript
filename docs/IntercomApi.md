# Flipdish.IntercomApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userHash**](IntercomApi.md#userHash) | **GET** /api/v1.0/intercom/userHash | 



## userHash

> RestApiResultIntercomUserHash userHash()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.IntercomApi();
apiInstance.userHash((error, data, response) => {
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

[**RestApiResultIntercomUserHash**](RestApiResultIntercomUserHash.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

