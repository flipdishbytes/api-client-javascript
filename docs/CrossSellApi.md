# Flipdish.CrossSellApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCrossSellMenuItems**](CrossSellApi.md#getCrossSellMenuItems) | **GET** /api/v1.0/{appId}/crossSell/menuItems | 



## getCrossSellMenuItems

> RestApiResultCrossSellMenuItems getCrossSellMenuItems(menuId, menuItemId, limit, totalValue, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.CrossSellApi();
let menuId = 56; // Number | 
let menuItemId = [null]; // [Number] | 
let limit = 56; // Number | 
let totalValue = 3.4; // Number | 
let appId = "appId_example"; // String | 
apiInstance.getCrossSellMenuItems(menuId, menuItemId, limit, totalValue, appId, (error, data, response) => {
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
 **menuId** | **Number**|  | 
 **menuItemId** | [**[Number]**](Number.md)|  | 
 **limit** | **Number**|  | 
 **totalValue** | **Number**|  | 
 **appId** | **String**|  | 

### Return type

[**RestApiResultCrossSellMenuItems**](RestApiResultCrossSellMenuItems.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data

