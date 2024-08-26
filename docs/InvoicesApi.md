# Flipdish.InvoicesApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoices**](InvoicesApi.md#getInvoices) | **GET** /api/v1.0/{appId}/invoices | 



## getInvoices

> RestApiFinanceSearchPaginationResultInvoice getInvoices(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.InvoicesApi();
let appId = "appId_example"; // String | 
let opts = {
  'subscriptionId': "subscriptionId_example", // String | 
  'limit': 56, // Number | 
  'pageId': "pageId_example", // String | 
  'excludeNotOwnedInvoices': true, // Boolean | 
  'dateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'invoiceNumber': "invoiceNumber_example", // String | 
  'storeId': [null] // [Number] | 
};
apiInstance.getInvoices(appId, opts, (error, data, response) => {
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
 **subscriptionId** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **pageId** | **String**|  | [optional] 
 **excludeNotOwnedInvoices** | **Boolean**|  | [optional] 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 
 **invoiceNumber** | **String**|  | [optional] 
 **storeId** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**RestApiFinanceSearchPaginationResultInvoice**](RestApiFinanceSearchPaginationResultInvoice.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Message, ErrorCode, StackTrace

