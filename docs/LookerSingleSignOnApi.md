# Flipdish.LookerSingleSignOnApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSSOEndpoint**](LookerSingleSignOnApi.md#getSSOEndpoint) | **GET** /api/v1.0/{appId}/looker/sso | 



## getSSOEndpoint

> DashboardEmbed getSSOEndpoint(appId, embedPath, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.LookerSingleSignOnApi();
let appId = "appId_example"; // String | 
let embedPath = "embedPath_example"; // String | 
let opts = {
  'filters': "filters_example" // String | 
};
apiInstance.getSSOEndpoint(appId, embedPath, opts, (error, data, response) => {
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
 **embedPath** | **String**|  | 
 **filters** | **String**|  | [optional] 

### Return type

[**DashboardEmbed**](DashboardEmbed.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, EmbedUrl

