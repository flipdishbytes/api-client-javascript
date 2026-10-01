# Flipdish.EventsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerEvents**](EventsApi.md#getCustomerEvents) | **GET** /api/v1.0/{appId}/events/customer/{customerId} | 
[**getEvents**](EventsApi.md#getEvents) | **GET** /api/v1.0/{appId}/events | 
[**getEventsById**](EventsApi.md#getEventsById) | **GET** /api/v1.0/{appId}/events/{eventId} | 
[**getMenuEvents**](EventsApi.md#getMenuEvents) | **GET** /api/v1.0/{appId}/events/menu/{menuId} | 
[**getOrderEvents**](EventsApi.md#getOrderEvents) | **GET** /api/v1.0/{appId}/events/order/{orderId} | 
[**getOrderEventsByCustomer**](EventsApi.md#getOrderEventsByCustomer) | **GET** /api/v1.0/{appId}/events/order | 
[**getStoreEvents**](EventsApi.md#getStoreEvents) | **GET** /api/v1.0/{appId}/events/store/{storeId} | 
[**getUserEvents**](EventsApi.md#getUserEvents) | **GET** /api/v1.0/{appId}/events/user/{userId} | 
[**getWhiteLabelEvents**](EventsApi.md#getWhiteLabelEvents) | **GET** /api/v1.0/{appId}/events/whitelabel/{whitelabelId} | 



## getCustomerEvents

> RestApiEventSearchPaginationResult getCustomerEvents(appId, customerId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let customerId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getCustomerEvents(appId, customerId, opts, (error, data, response) => {
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
 **customerId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getEvents

> RestApiEventSearchPaginationResult getEvents(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let opts = {
  'whiteLabelId': 56, // Number | 
  'customerId': 56, // Number | 
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getEvents(appId, opts, (error, data, response) => {
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
 **whiteLabelId** | **Number**|  | [optional] 
 **customerId** | **Number**|  | [optional] 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getEventsById

> EventSearchResult getEventsById(eventId, appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let eventId = null; // String | 
let appId = "appId_example"; // String | 
apiInstance.getEventsById(eventId, appId, (error, data, response) => {
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
 **eventId** | [**String**](.md)|  | 
 **appId** | **String**|  | 

### Return type

[**EventSearchResult**](EventSearchResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, AnalyticsClientEvent, OrderAcceptedEvent, OrderCustomerTrackingCreatedEvent, OrderDeliveryTrackingStatusUpdatedEvent, OrderBatchPublishedEvent, OrderCreatedEvent, OrderRatingUpdatedEvent, OrderRefundedEvent, OrderRejectedEvent, OrderTipUpdatedEvent, StoreCreatedEvent, StoreDeletedEvent, StoreAddressUpdatedEvent, StoreKioskSettingUpdatedEvent, DeliveryZoneCreatedEvent, DeliveryZoneUpdatedEvent, DeliveryZoneDeletedEvent, StoreOpeningHoursUpdatedEvent, StoreMenuAssignedEvent, StoreBusinessHoursOverrideCreatedEvent, StoreBusinessHoursOverrideDeletedEvent, StoreArchivedEvent, StoreUnarchivedEvent, StorePublishedEvent, StoreUnpublishedEvent, StoreUpdatedEvent, StorePreOrderConfigUpdatedEvent, StoreLogoCreatedEvent, StoreLogoUpdatedEvent, StoreLogoDeletedEvent, MenuCreatedEvent, MenuAsyncCreationCompletedEvent, MenuUpdatedEvent, MenuUploadedEvent, MenuBulkEditEvent, MenuCheckpointCreatedEvent, CustomerCreatedEvent, CustomerUpdatedEvent, CustomerConsentUpdatedEvent, WebhookSubscriptionCreatedEvent, WebhookSubscriptionUpdatedEvent, WebhookSubscriptionDeletedEvent, PrinterTurnedOnEvent, PrinterTurnedOffEvent, PrinterAssignedToStoreEvent, PrinterUnassignedFromStoreEvent, PhoneCallStartedEvent, PhoneCallEndedEvent, TelephonyConfigUpdatedEvent, LoyaltyCampaignCreatedEvent, LoyaltyCampaignDeletedEvent, LoyaltyCampaignUpdatedEvent, RetentionCampaignCreatedEvent, RetentionCampaignDeletedEvent, RetentionCampaignUpdatedEvent, SmsReceivedEvent, UserLoginEvent, UserCreatedEvent, UserUpdatedEvent, UserDeletedEvent, UserCreatedPasswordEvent, UserAnsweredSignupQuestionsEvent, VoucherCreatedEvent, VoucherUpdatedEvent, VoucherDeletedEvent, VoucherAppliedEvent, TeammateInviteSentEvent, TeammateInviteAcceptedEvent, TeammateUpdatedEvent, TeammateDeletedEvent, BankAccountCreatedEvent, BankAccountUpdatedEvent, BankAccountDeletedEvent, BankAccountAssignedEvent, HydraAssignedEvent, HydraRequestResetEvent, HydraSettingChangedEvent, HydraUnAssignedEvent, KioskBluetoothPairingModeEvent, KioskBluetoothUnpairingModeEvent, KioskBluetoothTerminalUnpairedEvent, KioskTerminalActionStateChangedEvent, KioskBluetoothTerminalUpdatedEvent, KioskBluetoothTerminalInitiateUpdateCheckEvent, KioskBluetoothInstallUpdateInitiateEvent, KioskBluetoothTerminalCancelUpdateEvent, KioskBluetoothTerminalFirmwareVersionStatusEvent, KioskBluetoothTerminalInstallationStatusEvent, PushNotificationScheduledEvent, PushNotificationSentEvent, PushNotificationDeletedEvent, DnsVerifiedEvent, CertificateCreatedEvent, CertificateRenewedEvent, WebsiteVanityUrlUpdatedEvent, WebsiteUpdatedEvent, OrderCapacityUpdatedEvent, ExternalStoreEvent, AppStoreConfigCreatedEvent, AppStoreConfigUpdatedEvent, AppStoreConfigDeletedEvent, AppStoreSubscriptionChangeJobUpdatedEvent, CatalogItemCreatedEvent, CatalogItemUpdatedEvent, CatalogItemArchivedEvent, CatalogGroupCreatedEvent, CatalogGroupUpdatedEvent, CatalogGroupArchivedEvent, StoreTipUpdatedEvent, LocationAreaCreatedEvent, LocationAreaUpdatedEvent, LocationCreatedEvent, LocationDeletedEvent, StoreServiceChargeUpdatedEvent, MobileAppsSubmissionStatusUpdatedEvent, MobileAppsSubmissionUpdatedEvent, StoreFeeConfigUpdatedEvent


## getMenuEvents

> RestApiEventSearchPaginationResult getMenuEvents(appId, menuId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let menuId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId2': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getMenuEvents(appId, menuId, opts, (error, data, response) => {
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
 **menuId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId2** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getOrderEvents

> RestApiEventSearchPaginationResult getOrderEvents(appId, orderId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let orderId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId2': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getOrderEvents(appId, orderId, opts, (error, data, response) => {
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
 **orderId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId2** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getOrderEventsByCustomer

> RestApiEventSearchPaginationResult getOrderEventsByCustomer(appId, customerId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let customerId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getOrderEventsByCustomer(appId, customerId, opts, (error, data, response) => {
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
 **customerId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getStoreEvents

> RestApiEventSearchPaginationResult getStoreEvents(appId, storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId2': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getStoreEvents(appId, storeId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId2** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getUserEvents

> RestApiEventSearchPaginationResult getUserEvents(appId, userId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let userId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId2': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getUserEvents(appId, userId, opts, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId2** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount


## getWhiteLabelEvents

> RestApiEventSearchPaginationResult getWhiteLabelEvents(appId, whitelabelId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.EventsApi();
let appId = "appId_example"; // String | 
let whitelabelId = 56; // Number | 
let opts = {
  'limit': 56, // Number | The maximum elements to return
  'page': 56, // Number | The index of the page to return, starting by 1
  'start': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'end': new Date("2013-10-20T19:20:30+01:00"), // Date | End date
  'orderId': 56, // Number | Events that have Order Id
  'storeId': 56, // Number | Events that have Store Id
  'storeIdList': [null], // [Number] | Events that have Store Id List
  'storeGroupId': 56, // Number | Events that have Store Group Id
  'userId': 56, // Number | Events that have User Id
  'menuId': 56, // Number | Events that have Menu Id
  'campaignId': 56, // Number | Events that have Campaign Id
  'userEmail': "userEmail_example", // String | Events that have User Email
  'userName': "userName_example", // String | Events that have User Name
  'voucherCode': "voucherCode_example", // String | Events that have voucher code
  'eventType': ["null"], // [String] | Events that have event type\\s
  'flipdishEventId': "flipdishEventId_example" // String | Unique Identifier of Event, if this is specified, all other criteria are ignored.
};
apiInstance.getWhiteLabelEvents(appId, whitelabelId, opts, (error, data, response) => {
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
 **whitelabelId** | **Number**|  | 
 **limit** | **Number**| The maximum elements to return | [optional] 
 **page** | **Number**| The index of the page to return, starting by 1 | [optional] 
 **start** | **Date**| Start date | [optional] 
 **end** | **Date**| End date | [optional] 
 **orderId** | **Number**| Events that have Order Id | [optional] 
 **storeId** | **Number**| Events that have Store Id | [optional] 
 **storeIdList** | [**[Number]**](Number.md)| Events that have Store Id List | [optional] 
 **storeGroupId** | **Number**| Events that have Store Group Id | [optional] 
 **userId** | **Number**| Events that have User Id | [optional] 
 **menuId** | **Number**| Events that have Menu Id | [optional] 
 **campaignId** | **Number**| Events that have Campaign Id | [optional] 
 **userEmail** | **String**| Events that have User Email | [optional] 
 **userName** | **String**| Events that have User Name | [optional] 
 **voucherCode** | **String**| Events that have voucher code | [optional] 
 **eventType** | [**[String]**](String.md)| Events that have event type\\s | [optional] 
 **flipdishEventId** | **String**| Unique Identifier of Event, if this is specified, all other criteria are ignored. | [optional] 

### Return type

[**RestApiEventSearchPaginationResult**](RestApiEventSearchPaginationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data, Page, Limit, TotalRecordCount

