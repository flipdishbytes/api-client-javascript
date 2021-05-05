# FlipdishOpenApiV10.CampaignsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLoyaltyCampaign**](CampaignsApi.md#createLoyaltyCampaign) | **POST** /api/v1.0/{appId}/campaigns/loyalty | Creates loyalty campaign
[**createRetentionCampaign**](CampaignsApi.md#createRetentionCampaign) | **POST** /api/v1.0/{appId}/campaigns/retention | Creates retention campaign
[**getLoyaltyCampaignsForApp**](CampaignsApi.md#getLoyaltyCampaignsForApp) | **GET** /api/v1.0/{appId}/campaigns/loyalty | Gets loyalty campaigns for app
[**getLoyaltyCampaignsForStore**](CampaignsApi.md#getLoyaltyCampaignsForStore) | **GET** /api/v1.0/{appId}/campaigns/loyalty/{storeId} | Gets loyalty campaigns for store
[**getRetentionCampaignsForApp**](CampaignsApi.md#getRetentionCampaignsForApp) | **GET** /api/v1.0/{appId}/campaigns/retention | Gets retention campaigns for app
[**getRetentionCampaignsForStore**](CampaignsApi.md#getRetentionCampaignsForStore) | **GET** /api/v1.0/{appId}/campaigns/retention/{storeId} | Gets retention campaigns for store
[**getStoreList**](CampaignsApi.md#getStoreList) | **GET** /api/v1.0/{appId}/campaigns/stores | Gets list of stores for app
[**removeCampaign**](CampaignsApi.md#removeCampaign) | **DELETE** /api/v1.0/{appId}/campaigns/{campaignId} | Deletes a campaign
[**updateLoyaltyCampaign**](CampaignsApi.md#updateLoyaltyCampaign) | **POST** /api/v1.0/{appId}/campaigns/loyalty/{campaignId} | Updates loyalty campaign
[**updateRetentionCampaign**](CampaignsApi.md#updateRetentionCampaign) | **POST** /api/v1.0/{appId}/campaigns/retention/{campaignId} | Updates retention campaign


<a name="createLoyaltyCampaign"></a>
# **createLoyaltyCampaign**
> RestApiResultLoyaltyCampaign createLoyaltyCampaign(appId, campaign)

Creates loyalty campaign

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var campaign = new FlipdishOpenApiV10.LoyaltyCampaignBase(); // LoyaltyCampaignBase | Loyalty campaign details


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
 **appId** | **String**| App Name Id | 
 **campaign** | [**LoyaltyCampaignBase**](LoyaltyCampaignBase.md)| Loyalty campaign details | 

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

Creates retention campaign

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var campaign = new FlipdishOpenApiV10.RetentionCampaignBase(); // RetentionCampaignBase | Retention campaign details


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
 **appId** | **String**| App Name Id | 
 **campaign** | [**RetentionCampaignBase**](RetentionCampaignBase.md)| Retention campaign details | 

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

Gets loyalty campaigns for app

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id


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
 **appId** | **String**| App Name Id | 

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

Gets loyalty campaigns for store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var storeId = 56; // Number | Store Id


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
 **appId** | **String**| App Name Id | 
 **storeId** | **Number**| Store Id | 

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

Gets retention campaigns for app

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id


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
 **appId** | **String**| App Name Id | 

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

Gets retention campaigns for store

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var storeId = 56; // Number | Store Id


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
 **appId** | **String**| App Name Id | 
 **storeId** | **Number**| Store Id | 

### Return type

[**RestApiArrayResultRetentionCampaign**](RestApiArrayResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getStoreList"></a>
# **getStoreList**
> RestApiArrayResultStoreListItem getStoreList(appId)

Gets list of stores for app

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStoreList(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| App Name Id | 

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

Deletes a campaign

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var campaignId = 56; // Number | Campaign Id


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
 **appId** | **String**| App Name Id | 
 **campaignId** | **Number**| Campaign Id | 

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

Updates loyalty campaign

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var campaignId = 56; // Number | Loyalty campaign Id

var campaign = new FlipdishOpenApiV10.LoyaltyCampaignBase(); // LoyaltyCampaignBase | Loyalty campaign details


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
 **appId** | **String**| App Name Id | 
 **campaignId** | **Number**| Loyalty campaign Id | 
 **campaign** | [**LoyaltyCampaignBase**](LoyaltyCampaignBase.md)| Loyalty campaign details | 

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

Updates retention campaign

### Example
```javascript
var FlipdishOpenApiV10 = require('flipdish_open_api_v10');
var defaultClient = FlipdishOpenApiV10.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FlipdishOpenApiV10.CampaignsApi();

var appId = "appId_example"; // String | App Name Id

var campaignId = 56; // Number | Retention campaign Id

var campaign = new FlipdishOpenApiV10.RetentionCampaignBase(); // RetentionCampaignBase | Retention campaign details


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
 **appId** | **String**| App Name Id | 
 **campaignId** | **Number**| Retention campaign Id | 
 **campaign** | [**RetentionCampaignBase**](RetentionCampaignBase.md)| Retention campaign details | 

### Return type

[**RestApiResultRetentionCampaign**](RestApiResultRetentionCampaign.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

