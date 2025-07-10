# Flipdish.SmsProviderCredentialsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBrandSmsProviderCredentialByServiceType**](SmsProviderCredentialsApi.md#getBrandSmsProviderCredentialByServiceType) | **GET** /api/v1.0/sms-providers/orgs/{orgId}/brands/{brandId}/provider-credentials/{serviceType} | 
[**getBrandSmsProviderCredentials**](SmsProviderCredentialsApi.md#getBrandSmsProviderCredentials) | **GET** /api/v1.0/sms-providers/orgs/{orgId}/brands/{brandId}/provider-credentials | 
[**smsProviderCredentialDelete**](SmsProviderCredentialsApi.md#smsProviderCredentialDelete) | **DELETE** /api/v1.0/sms-providers/orgs/{orgId}/brands/{brandId}/provider-credentials/{serviceType} | 
[**smsProviderCredentialUpdate**](SmsProviderCredentialsApi.md#smsProviderCredentialUpdate) | **POST** /api/v1.0/sms-providers/orgs/{orgId}/brands/{brandId}/provider-credentials/{serviceType} | 
[**smsProviderCredentialsBulkUpsert**](SmsProviderCredentialsApi.md#smsProviderCredentialsBulkUpsert) | **POST** /api/v1.0/sms-providers/bulk-upsert | 



## getBrandSmsProviderCredentialByServiceType

> RestApiResultSmsProviderCredential getBrandSmsProviderCredentialByServiceType(orgId, brandId, serviceType, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SmsProviderCredentialsApi();
let orgId = "orgId_example"; // String | 
let brandId = "brandId_example"; // String | 
let serviceType = "serviceType_example"; // String | 
let opts = {
  'withFallback': true // Boolean | 
};
apiInstance.getBrandSmsProviderCredentialByServiceType(orgId, brandId, serviceType, opts, (error, data, response) => {
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
 **orgId** | **String**|  | 
 **brandId** | **String**|  | 
 **serviceType** | **String**|  | 
 **withFallback** | **Boolean**|  | [optional] 

### Return type

[**RestApiResultSmsProviderCredential**](RestApiResultSmsProviderCredential.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getBrandSmsProviderCredentials

> RestApiArrayResultSmsProviderCredential getBrandSmsProviderCredentials(orgId, brandId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SmsProviderCredentialsApi();
let orgId = "orgId_example"; // String | 
let brandId = "brandId_example"; // String | 
apiInstance.getBrandSmsProviderCredentials(orgId, brandId, (error, data, response) => {
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
 **orgId** | **String**|  | 
 **brandId** | **String**|  | 

### Return type

[**RestApiArrayResultSmsProviderCredential**](RestApiArrayResultSmsProviderCredential.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## smsProviderCredentialDelete

> RestApiResultSmsProviderCredential smsProviderCredentialDelete(orgId, brandId, serviceType)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SmsProviderCredentialsApi();
let orgId = "orgId_example"; // String | 
let brandId = "brandId_example"; // String | 
let serviceType = "serviceType_example"; // String | 
apiInstance.smsProviderCredentialDelete(orgId, brandId, serviceType, (error, data, response) => {
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
 **orgId** | **String**|  | 
 **brandId** | **String**|  | 
 **serviceType** | **String**|  | 

### Return type

[**RestApiResultSmsProviderCredential**](RestApiResultSmsProviderCredential.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## smsProviderCredentialUpdate

> RestApiResultSmsProviderCredential smsProviderCredentialUpdate(orgId, brandId, serviceType, credential)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SmsProviderCredentialsApi();
let orgId = "orgId_example"; // String | 
let brandId = "brandId_example"; // String | 
let serviceType = "serviceType_example"; // String | 
let credential = new Flipdish.SmsProviderCredentialUpdateRequest(); // SmsProviderCredentialUpdateRequest | 
apiInstance.smsProviderCredentialUpdate(orgId, brandId, serviceType, credential, (error, data, response) => {
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
 **orgId** | **String**|  | 
 **brandId** | **String**|  | 
 **serviceType** | **String**|  | 
 **credential** | [**SmsProviderCredentialUpdateRequest**](SmsProviderCredentialUpdateRequest.md)|  | 

### Return type

[**RestApiResultSmsProviderCredential**](RestApiResultSmsProviderCredential.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## smsProviderCredentialsBulkUpsert

> RestApiArrayResultSmsProviderCredential smsProviderCredentialsBulkUpsert(credentials)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.SmsProviderCredentialsApi();
let credentials = [new Flipdish.SmsProviderCredential()]; // [SmsProviderCredential] | 
apiInstance.smsProviderCredentialsBulkUpsert(credentials, (error, data, response) => {
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
 **credentials** | [**[SmsProviderCredential]**](SmsProviderCredential.md)|  | 

### Return type

[**RestApiArrayResultSmsProviderCredential**](RestApiArrayResultSmsProviderCredential.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data

