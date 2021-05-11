# Flipdish.MenuSectionsApi

All URIs are relative to *https://api.flipdish.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneMenuSection**](MenuSectionsApi.md#cloneMenuSection) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/clone | Clone menu section
[**createMenuAvailabilityForDay**](MenuSectionsApi.md#createMenuAvailabilityForDay) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability/times/{dayOfWeek} | Set/update menu section availability hours.
[**createMenuSection**](MenuSectionsApi.md#createMenuSection) | **POST** /api/v1.0/menus/{menuId}/sections | Create menu section
[**createMenuSectionAvailability**](MenuSectionsApi.md#createMenuSectionAvailability) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability | Create menu availability type
[**deleteMenuSection**](MenuSectionsApi.md#deleteMenuSection) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Delete menu section
[**deleteMenuSectionImage**](MenuSectionsApi.md#deleteMenuSectionImage) | **DELETE** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/image | Delete menu section image
[**getMenuSectionById**](MenuSectionsApi.md#getMenuSectionById) | **GET** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Get menu section by identifier
[**getMenuSections**](MenuSectionsApi.md#getMenuSections) | **GET** /api/v1.0/menus/{menuId}/sections | Get menu sections
[**menuSectionsSetItemDisplayOrders**](MenuSectionsApi.md#menuSectionsSetItemDisplayOrders) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitemdisplayorders | Re-arrange Items within a Section
[**updateMenuSection**](MenuSectionsApi.md#updateMenuSection) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId} | Update menu section
[**uploadMenuSectionImage**](MenuSectionsApi.md#uploadMenuSectionImage) | **POST** /api/v1.0/menus/{menuId}/sections/{menuSectionId}/image | Upload menu section image


<a name="cloneMenuSection"></a>
# **cloneMenuSection**
> RestApiResultMenuSection cloneMenuSection(menuId, menuSectionId)

Clone menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cloneMenuSection(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

[**RestApiResultMenuSection**](RestApiResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createMenuAvailabilityForDay"></a>
# **createMenuAvailabilityForDay**
> Object createMenuAvailabilityForDay(menuId, menuSectionId, dayOfWeek, businessHoursPeriod)

Set/update menu section availability hours.

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var dayOfWeek = "dayOfWeek_example"; // String | Day of the  week

var businessHoursPeriod = new Flipdish.BusinessHoursPeriodBase(); // BusinessHoursPeriodBase | Menu section active hours, note: DayOfWeek property will be overriden by the path parameter.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMenuAvailabilityForDay(menuId, menuSectionId, dayOfWeek, businessHoursPeriod, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **dayOfWeek** | **String**| Day of the  week | 
 **businessHoursPeriod** | [**BusinessHoursPeriodBase**](BusinessHoursPeriodBase.md)| Menu section active hours, note: DayOfWeek property will be overriden by the path parameter. | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createMenuSection"></a>
# **createMenuSection**
> Object createMenuSection(menuId, menuSection)

Create menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMenuSection(menuId, menuSection, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSection** | [**MenuSectionBase**](MenuSectionBase.md)| Menu section | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="createMenuSectionAvailability"></a>
# **createMenuSectionAvailability**
> Object createMenuSectionAvailability(menuId, menuSectionId, menuSectionAvailability)

Create menu availability type

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSectionAvailability = new Flipdish.MenuSectionAvailabilityBase(); // MenuSectionAvailabilityBase | DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMenuSectionAvailability(menuId, menuSectionId, menuSectionAvailability, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionAvailability** | [**MenuSectionAvailabilityBase**](MenuSectionAvailabilityBase.md)| DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSection"></a>
# **deleteMenuSection**
> deleteMenuSection(menuId, menuSectionId)

Delete menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSection(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="deleteMenuSectionImage"></a>
# **deleteMenuSectionImage**
> deleteMenuSectionImage(menuId, menuSectionId)

Delete menu section image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMenuSectionImage(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuSectionById"></a>
# **getMenuSectionById**
> RestApiResultMenuSection getMenuSectionById(menuId, menuSectionId)

Get menu section by identifier

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuSectionById(menuId, menuSectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

[**RestApiResultMenuSection**](RestApiResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="getMenuSections"></a>
# **getMenuSections**
> RestApiArrayResultMenuSection getMenuSections(menuId)

Get menu sections

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuSections(menuId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 

### Return type

[**RestApiArrayResultMenuSection**](RestApiArrayResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="menuSectionsSetItemDisplayOrders"></a>
# **menuSectionsSetItemDisplayOrders**
> menuSectionsSetItemDisplayOrders(menuId, menuSectionId, displayOrders)

Re-arrange Items within a Section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var displayOrders = new Flipdish.MenuObjectDisplayOrders(); // MenuObjectDisplayOrders | Item Ids and their new display order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.menuSectionsSetItemDisplayOrders(menuId, menuSectionId, displayOrders, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **displayOrders** | [**MenuObjectDisplayOrders**](MenuObjectDisplayOrders.md)| Item Ids and their new display order | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="updateMenuSection"></a>
# **updateMenuSection**
> updateMenuSection(menuId, menuSectionId, menuSection, opts)

Update menu section

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section changes (delta)

var opts = { 
  'undoAfter': 1.2 // Number | An optional time period, in hours, after which the hide-section operation will be undone.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateMenuSection(menuId, menuSectionId, menuSection, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSection** | [**MenuSectionBase**](MenuSectionBase.md)| Menu section changes (delta) | 
 **undoAfter** | **Number**| An optional time period, in hours, after which the hide-section operation will be undone. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="uploadMenuSectionImage"></a>
# **uploadMenuSectionImage**
> RestApiStringResult uploadMenuSectionImage(menuId, menuSectionId, Image)

Upload menu section image

### Example
```javascript
var Flipdish = require('@flipdish/api-client-javascript');
var defaultClient = Flipdish.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Flipdish.MenuSectionsApi();

var menuId = 56; // Number | Menu identifier

var menuSectionId = 56; // Number | Menu section identifier

var Image = "/path/to/file.txt"; // File | Menu section image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadMenuSectionImage(menuId, menuSectionId, Image, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **Image** | **File**| Menu section image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

