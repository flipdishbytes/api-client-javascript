# Flipdish.CampaignsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLoyaltyCampaign**](CampaignsApi.md#createLoyaltyCampaign) | **POST** /api/v1.0/{appId}/campaigns/loyalty | 
[**createRetentionCampaign**](CampaignsApi.md#createRetentionCampaign) | **POST** /api/v1.0/{appId}/campaigns/retention | 
[**getLoyaltyCampaignsForApp**](CampaignsApi.md#getLoyaltyCampaignsForApp) | **GET** /api/v1.0/{appId}/campaigns/loyalty | 
[**getLoyaltyCampaignsForStore**](CampaignsApi.md#getLoyaltyCampaignsForStore) | **GET** /api/v1.0/{appId}/campaigns/loyalty/{storeId} | 
[**getRetentionCampaignsForApp**](CampaignsApi.md#getRetentionCampaignsForApp) | **GET** /api/v1.0/{appId}/campaigns/retention | 
[**getRetentionCampaignsForStore**](CampaignsApi.md#getRetentionCampaignsForStore) | **GET** /api/v1.0/{appId}/campaigns/retention/{storeId} | 
[**getStoreList**](CampaignsApi.md#getStoreList) | **GET** /api/v1.0/{appId}/campaigns/stores | 
[**removeCampaign**](CampaignsApi.md#removeCampaign) | **DELETE** /api/v1.0/{appId}/campaigns/{campaignId} | 
[**updateLoyaltyCampaign**](CampaignsApi.md#updateLoyaltyCampaign) | **POST** /api/v1.0/{appId}/campaigns/loyalty/{campaignId} | 
[**updateRetentionCampaign**](CampaignsApi.md#updateRetentionCampaign) | **POST** /api/v1.0/{appId}/campaigns/retention/{campaignId} | 


<a name="createLoyaltyCampaign"></a>
# **createLoyaltyCampaign**
> RestApiResultLoyaltyCampaign createLoyaltyCampaign(appId, campaign)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var campaign = new Flipdish.LoyaltyCampaignBase(); // LoyaltyCampaignBase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLoyaltyCampaign(appId, campaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **campaign** | [**LoyaltyCampaignBase**](LoyaltyCampaignBase.md)|  | 

### Return type

[**RestApiResultLoyaltyCampaign**](RestApiResultLoyaltyCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createRetentionCampaign"></a>
# **createRetentionCampaign**
> RestApiResultRetentionCampaign createRetentionCampaign(appId, campaign)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var campaign = new Flipdish.RetentionCampaignBase(); // RetentionCampaignBase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRetentionCampaign(appId, campaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **campaign** | [**RetentionCampaignBase**](RetentionCampaignBase.md)|  | 

### Return type

[**RestApiResultRetentionCampaign**](RestApiResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getLoyaltyCampaignsForApp"></a>
# **getLoyaltyCampaignsForApp**
> RestApiArrayResultLoyaltyCampaign getLoyaltyCampaignsForApp(appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoyaltyCampaignsForApp(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultLoyaltyCampaign**](RestApiArrayResultLoyaltyCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getLoyaltyCampaignsForStore"></a>
# **getLoyaltyCampaignsForStore**
> RestApiArrayResultLoyaltyCampaign getLoyaltyCampaignsForStore(appId, storeId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoyaltyCampaignsForStore(appId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultLoyaltyCampaign**](RestApiArrayResultLoyaltyCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getRetentionCampaignsForApp"></a>
# **getRetentionCampaignsForApp**
> RestApiArrayResultRetentionCampaign getRetentionCampaignsForApp(appId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRetentionCampaignsForApp(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**RestApiArrayResultRetentionCampaign**](RestApiArrayResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getRetentionCampaignsForStore"></a>
# **getRetentionCampaignsForStore**
> RestApiArrayResultRetentionCampaign getRetentionCampaignsForStore(appId, storeId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var storeId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRetentionCampaignsForStore(appId, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **storeId** | **Number**|  | 

### Return type

[**RestApiArrayResultRetentionCampaign**](RestApiArrayResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreList"></a>
# **getStoreList**
> RestApiArrayResultStoreListItem getStoreList(appId, opts)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var opts = { 
  'onlyPublished': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreList(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **onlyPublished** | **Boolean**|  | [optional] 

### Return type

[**RestApiArrayResultStoreListItem**](RestApiArrayResultStoreListItem.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="removeCampaign"></a>
# **removeCampaign**
> removeCampaign(appId, campaignId)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var campaignId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCampaign(appId, campaignId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **campaignId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateLoyaltyCampaign"></a>
# **updateLoyaltyCampaign**
> RestApiResultLoyaltyCampaign updateLoyaltyCampaign(appId, campaignId, campaign)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var campaignId = 56; // Number | 

var campaign = new Flipdish.LoyaltyCampaignBase(); // LoyaltyCampaignBase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLoyaltyCampaign(appId, campaignId, campaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **campaignId** | **Number**|  | 
 **campaign** | [**LoyaltyCampaignBase**](LoyaltyCampaignBase.md)|  | 

### Return type

[**RestApiResultLoyaltyCampaign**](RestApiResultLoyaltyCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateRetentionCampaign"></a>
# **updateRetentionCampaign**
> RestApiResultRetentionCampaign updateRetentionCampaign(appId, campaignId, campaign)



### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.CampaignsApi();

var appId = "appId_example"; // String | 

var campaignId = 56; // Number | 

var campaign = new Flipdish.RetentionCampaignBase(); // RetentionCampaignBase | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRetentionCampaign(appId, campaignId, campaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **campaignId** | **Number**|  | 
 **campaign** | [**RetentionCampaignBase**](RetentionCampaignBase.md)|  | 

### Return type

[**RestApiResultRetentionCampaign**](RestApiResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

