# Flipdish.OnboardingApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onboardingGetOnboardingConfig**](OnboardingApi.md#onboardingGetOnboardingConfig) | **GET** /api/v1.0/clients/{appId}/onboarding/config | 
[**onboardingGetOnboardingConfigs**](OnboardingApi.md#onboardingGetOnboardingConfigs) | **GET** /api/v1.0/clients/{appId}/onboarding/configs | 
[**onboardingGetOnboardingItems**](OnboardingApi.md#onboardingGetOnboardingItems) | **GET** /api/v1.0/clients/{appId}/onboarding/stores/{storeId} | 
[**onboardingGetOnboardingItemsV2**](OnboardingApi.md#onboardingGetOnboardingItemsV2) | **GET** /api/v1.0/clients/{appId}/onboarding/stores | 
[**onboardingUpdateOnboardingConfig**](OnboardingApi.md#onboardingUpdateOnboardingConfig) | **POST** /api/v1.0/clients/{appId}/onboarding/config | 
[**onboardingUpdateOnboardingConfigById**](OnboardingApi.md#onboardingUpdateOnboardingConfigById) | **POST** /api/v1.0/clients/{appId}/onboarding/config/{configId} | 
[**onboardingUpdateOnboardingItem**](OnboardingApi.md#onboardingUpdateOnboardingItem) | **POST** /api/v1.0/clients/{appId}/onboarding/stores/{storeId}/items/{onboardingItemId} | 
[**onboardingUpdateOnboardingItemV2**](OnboardingApi.md#onboardingUpdateOnboardingItemV2) | **POST** /api/v1.0/clients/{appId}/onboarding/stores/items/{onboardingItemId} | 



## onboardingGetOnboardingConfig

> Object onboardingGetOnboardingConfig(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
apiInstance.onboardingGetOnboardingConfig(appId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingGetOnboardingConfigs

> Object onboardingGetOnboardingConfigs(appId)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
apiInstance.onboardingGetOnboardingConfigs(appId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingGetOnboardingItems

> Object onboardingGetOnboardingItems(appId, storeId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let opts = {
  'milestoneId': 56 // Number | 
};
apiInstance.onboardingGetOnboardingItems(appId, storeId, opts, (error, data, response) => {
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
 **milestoneId** | **Number**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingGetOnboardingItemsV2

> Object onboardingGetOnboardingItemsV2(appId, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let opts = {
  'storeId': 56, // Number | 
  'milestoneId': 56 // Number | 
};
apiInstance.onboardingGetOnboardingItemsV2(appId, opts, (error, data, response) => {
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
 **storeId** | **Number**|  | [optional] 
 **milestoneId** | **Number**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingUpdateOnboardingConfig

> Object onboardingUpdateOnboardingConfig(appId, configUpdate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let configUpdate = new Flipdish.OnboardingConfigUpdate(); // OnboardingConfigUpdate | 
apiInstance.onboardingUpdateOnboardingConfig(appId, configUpdate, (error, data, response) => {
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
 **configUpdate** | [**OnboardingConfigUpdate**](OnboardingConfigUpdate.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingUpdateOnboardingConfigById

> Object onboardingUpdateOnboardingConfigById(appId, configId, configUpdate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let configId = 56; // Number | 
let configUpdate = new Flipdish.OnboardingConfigUpdate(); // OnboardingConfigUpdate | 
apiInstance.onboardingUpdateOnboardingConfigById(appId, configId, configUpdate, (error, data, response) => {
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
 **configId** | **Number**|  | 
 **configUpdate** | [**OnboardingConfigUpdate**](OnboardingConfigUpdate.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingUpdateOnboardingItem

> Object onboardingUpdateOnboardingItem(appId, storeId, onboardingItemId, itemUpdate)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let storeId = 56; // Number | 
let onboardingItemId = 56; // Number | 
let itemUpdate = new Flipdish.OnboardingItemUpdate(); // OnboardingItemUpdate | 
apiInstance.onboardingUpdateOnboardingItem(appId, storeId, onboardingItemId, itemUpdate, (error, data, response) => {
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
 **onboardingItemId** | **Number**|  | 
 **itemUpdate** | [**OnboardingItemUpdate**](OnboardingItemUpdate.md)|  | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## onboardingUpdateOnboardingItemV2

> Object onboardingUpdateOnboardingItemV2(appId, onboardingItemId, itemUpdate, opts)



### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.OnboardingApi();
let appId = "appId_example"; // String | 
let onboardingItemId = 56; // Number | 
let itemUpdate = new Flipdish.OnboardingItemUpdate(); // OnboardingItemUpdate | 
let opts = {
  'storeId': 56 // Number | 
};
apiInstance.onboardingUpdateOnboardingItemV2(appId, onboardingItemId, itemUpdate, opts, (error, data, response) => {
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
 **onboardingItemId** | **Number**|  | 
 **itemUpdate** | [**OnboardingItemUpdate**](OnboardingItemUpdate.md)|  | 
 **storeId** | **Number**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

