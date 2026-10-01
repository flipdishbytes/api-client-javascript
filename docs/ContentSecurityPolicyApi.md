# Flipdish.ContentSecurityPolicyApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentSecurityPolicyReport**](ContentSecurityPolicyApi.md#contentSecurityPolicyReport) | **POST** /api/v1.0/csp/report | 



## contentSecurityPolicyReport

> Object contentSecurityPolicyReport(request)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ContentSecurityPolicyApi();
let request = new Flipdish.CspReportRequest(); // CspReportRequest | 
apiInstance.contentSecurityPolicyReport(request, (error, data, response) => {
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
 **request** | [**CspReportRequest**](CspReportRequest.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

