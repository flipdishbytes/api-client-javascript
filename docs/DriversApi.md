# Flipdish.DriversApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**driversAddDriverNotificationToken**](DriversApi.md#driversAddDriverNotificationToken) | **POST** /api/v1.0/drivers/token | 
[**driversDeleteDriverProfileImage**](DriversApi.md#driversDeleteDriverProfileImage) | **DELETE** /api/v1.0/drivers/profile/image | 
[**driversDriverLogin**](DriversApi.md#driversDriverLogin) | **POST** /api/v1.0/drivers/login | 
[**driversDriverRequestLoginCodeSms**](DriversApi.md#driversDriverRequestLoginCodeSms) | **POST** /api/v1.0/drivers/pin | 
[**driversGetDriverProfile**](DriversApi.md#driversGetDriverProfile) | **GET** /api/v1.0/drivers/profile | 
[**driversGetStoresForDriver**](DriversApi.md#driversGetStoresForDriver) | **GET** /api/v1.0/drivers/assignedstores | 
[**driversRemoveDriverNotificationToken**](DriversApi.md#driversRemoveDriverNotificationToken) | **DELETE** /api/v1.0/drivers/token | 
[**driversSetDriverPresenceForStore**](DriversApi.md#driversSetDriverPresenceForStore) | **POST** /api/v1.0/drivers/stores/{storeId}/presence/{presence} | 
[**driversSetDriverProfileImage**](DriversApi.md#driversSetDriverProfileImage) | **POST** /api/v1.0/drivers/profile/image | 
[**driversUpdateDeliveryTrackingStatus**](DriversApi.md#driversUpdateDeliveryTrackingStatus) | **POST** /api/v1.0/orders/{orderId}/tracking/{deliveryTrackingStatus} | 
[**driversUpdateDriverProfile**](DriversApi.md#driversUpdateDriverProfile) | **POST** /api/v1.0/drivers/profile | 



## driversAddDriverNotificationToken

> Object driversAddDriverNotificationToken(updateDriverToken)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let updateDriverToken = new Flipdish.UpdateDriverNotificationToken(); // UpdateDriverNotificationToken | 
apiInstance.driversAddDriverNotificationToken(updateDriverToken, (error, data, response) => {
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
 **updateDriverToken** | [**UpdateDriverNotificationToken**](UpdateDriverNotificationToken.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## driversDeleteDriverProfileImage

> Object driversDeleteDriverProfileImage()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
apiInstance.driversDeleteDriverProfileImage((error, data, response) => {
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversDriverLogin

> Object driversDriverLogin(driverLoginModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let driverLoginModel = new Flipdish.DriverLoginModel(); // DriverLoginModel | 
apiInstance.driversDriverLogin(driverLoginModel, (error, data, response) => {
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
 **driverLoginModel** | [**DriverLoginModel**](DriverLoginModel.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## driversDriverRequestLoginCodeSms

> Object driversDriverRequestLoginCodeSms(driverRequestLoginPinModel)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let driverRequestLoginPinModel = new Flipdish.DriverRequestLoginPinModel(); // DriverRequestLoginPinModel | 
apiInstance.driversDriverRequestLoginCodeSms(driverRequestLoginPinModel, (error, data, response) => {
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
 **driverRequestLoginPinModel** | [**DriverRequestLoginPinModel**](DriverRequestLoginPinModel.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## driversGetDriverProfile

> Object driversGetDriverProfile()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
apiInstance.driversGetDriverProfile((error, data, response) => {
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversGetStoresForDriver

> Object driversGetStoresForDriver()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
apiInstance.driversGetStoresForDriver((error, data, response) => {
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversRemoveDriverNotificationToken

> Object driversRemoveDriverNotificationToken(removeDriverToken)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let removeDriverToken = new Flipdish.UpdateDriverNotificationToken(); // UpdateDriverNotificationToken | 
apiInstance.driversRemoveDriverNotificationToken(removeDriverToken, (error, data, response) => {
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
 **removeDriverToken** | [**UpdateDriverNotificationToken**](UpdateDriverNotificationToken.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## driversSetDriverPresenceForStore

> Object driversSetDriverPresenceForStore(storeId, presence)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let storeId = 56; // Number | 
let presence = "presence_example"; // String | 
apiInstance.driversSetDriverPresenceForStore(storeId, presence, (error, data, response) => {
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
 **storeId** | **Number**|  | 
 **presence** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversSetDriverProfileImage

> Object driversSetDriverProfileImage()



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
apiInstance.driversSetDriverProfileImage((error, data, response) => {
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversUpdateDeliveryTrackingStatus

> Object driversUpdateDeliveryTrackingStatus(orderId, deliveryTrackingStatus)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let orderId = 56; // Number | 
let deliveryTrackingStatus = "deliveryTrackingStatus_example"; // String | 
apiInstance.driversUpdateDeliveryTrackingStatus(orderId, deliveryTrackingStatus, (error, data, response) => {
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
 **orderId** | **Number**|  | 
 **deliveryTrackingStatus** | **String**|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## driversUpdateDriverProfile

> Object driversUpdateDriverProfile(updateDriverProfile)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.DriversApi();
let updateDriverProfile = new Flipdish.UpdateDriverProfileModel(); // UpdateDriverProfileModel | 
apiInstance.driversUpdateDriverProfile(updateDriverProfile, (error, data, response) => {
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
 **updateDriverProfile** | [**UpdateDriverProfileModel**](UpdateDriverProfileModel.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

