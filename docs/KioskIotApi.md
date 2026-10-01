# Flipdish.KioskIotApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKioskIotConnection**](KioskIotApi.md#getKioskIotConnection) | **POST** /api/v1.0/kioskiot/connect | 
[**queryTelemetrySeries**](KioskIotApi.md#queryTelemetrySeries) | **POST** /api/v1.0/{appId}/kioskiot/timeseries/query | 



## getKioskIotConnection

> RestApiResultKioskIotConnectionParameters getKioskIotConnection()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.KioskIotApi();
apiInstance.getKioskIotConnection((error, data, response) => {
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

[**RestApiResultKioskIotConnectionParameters**](RestApiResultKioskIotConnectionParameters.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace


## queryTelemetrySeries

> RestApiResultTelemetrySeriesResult queryTelemetrySeries(appId, queryParams)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.KioskIotApi();
let appId = "appId_example"; // String | 
let queryParams = new Flipdish.TelemetrySeriesQueryParameters(); // TelemetrySeriesQueryParameters | 
apiInstance.queryTelemetrySeries(appId, queryParams, (error, data, response) => {
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
 **queryParams** | [**TelemetrySeriesQueryParameters**](TelemetrySeriesQueryParameters.md)|  | 

### Return type

[**RestApiResultTelemetrySeriesResult**](RestApiResultTelemetrySeriesResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

