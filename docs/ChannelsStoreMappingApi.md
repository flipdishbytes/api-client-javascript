# Flipdish.ChannelsStoreMappingApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsGetStoreChannelStoreMapping**](ChannelsStoreMappingApi.md#channelsGetStoreChannelStoreMapping) | **GET** /api/v1.0/{appId}/channels/storemappings | 
[**channelsSetStoreChannelStoreMapping**](ChannelsStoreMappingApi.md#channelsSetStoreChannelStoreMapping) | **POST** /api/v1.0/{appId}/channels/storemappings | 



## channelsGetStoreChannelStoreMapping

> RestApiArrayResultStoreChannelStoreMapping channelsGetStoreChannelStoreMapping(appId, channelId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ChannelsStoreMappingApi();
let appId = "appId_example"; // String | 
let channelId = 56; // Number | 
apiInstance.channelsGetStoreChannelStoreMapping(appId, channelId, (error, data, response) => {
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
 **channelId** | **Number**|  | 

### Return type

[**RestApiArrayResultStoreChannelStoreMapping**](RestApiArrayResultStoreChannelStoreMapping.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## channelsSetStoreChannelStoreMapping

> RestApiArrayResultStoreChannelStoreMapping channelsSetStoreChannelStoreMapping(appId, channelId, stores)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.ChannelsStoreMappingApi();
let appId = "appId_example"; // String | 
let channelId = 56; // Number | 
let stores = [new Flipdish.ChannelStoreMapping()]; // [ChannelStoreMapping] | 
apiInstance.channelsSetStoreChannelStoreMapping(appId, channelId, stores, (error, data, response) => {
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
 **channelId** | **Number**|  | 
 **stores** | [**[ChannelStoreMapping]**](ChannelStoreMapping.md)|  | 

### Return type

[**RestApiArrayResultStoreChannelStoreMapping**](RestApiArrayResultStoreChannelStoreMapping.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

