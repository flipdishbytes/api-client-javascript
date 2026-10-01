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



## cloneMenuSection

> RestApiResultMenuSection cloneMenuSection(menuId, menuSectionId)

Clone menu section

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
apiInstance.cloneMenuSection(menuId, menuSectionId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

[**RestApiResultMenuSection**](RestApiResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createMenuAvailabilityForDay

> Object createMenuAvailabilityForDay(menuId, menuSectionId, dayOfWeek, businessHoursPeriod)

Set/update menu section availability hours.

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let dayOfWeek = "dayOfWeek_example"; // String | Day of the  week
let businessHoursPeriod = new Flipdish.BusinessHoursPeriodBase(); // BusinessHoursPeriodBase | Menu section active hours, note: DayOfWeek property will be overriden by the path parameter.
apiInstance.createMenuAvailabilityForDay(menuId, menuSectionId, dayOfWeek, businessHoursPeriod, (error, data, response) => {
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
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createMenuSection

> Object createMenuSection(menuId, menuSection)

Create menu section

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section
apiInstance.createMenuSection(menuId, menuSection, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSection** | [**MenuSectionBase**](MenuSectionBase.md)| Menu section | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## createMenuSectionAvailability

> Object createMenuSectionAvailability(menuId, menuSectionId, menuSectionAvailability)

Create menu availability type

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSectionAvailability = new Flipdish.MenuSectionAvailabilityBase(); // MenuSectionAvailabilityBase | DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes
apiInstance.createMenuSectionAvailability(menuId, menuSectionId, menuSectionAvailability, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **menuSectionAvailability** | [**MenuSectionAvailabilityBase**](MenuSectionAvailabilityBase.md)| DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## deleteMenuSection

> deleteMenuSection(menuId, menuSectionId)

Delete menu section

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
apiInstance.deleteMenuSection(menuId, menuSectionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## deleteMenuSectionImage

> deleteMenuSectionImage(menuId, menuSectionId)

Delete menu section image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
apiInstance.deleteMenuSectionImage(menuId, menuSectionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## getMenuSectionById

> RestApiResultMenuSection getMenuSectionById(menuId, menuSectionId)

Get menu section by identifier

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
apiInstance.getMenuSectionById(menuId, menuSectionId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 

### Return type

[**RestApiResultMenuSection**](RestApiResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## getMenuSections

> RestApiArrayResultMenuSection getMenuSections(menuId)

Get menu sections

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
apiInstance.getMenuSections(menuId, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 

### Return type

[**RestApiArrayResultMenuSection**](RestApiArrayResultMenuSection.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml, Data


## menuSectionsSetItemDisplayOrders

> menuSectionsSetItemDisplayOrders(menuId, menuSectionId, displayOrders)

Re-arrange Items within a Section

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let displayOrders = new Flipdish.MenuObjectDisplayOrders(); // MenuObjectDisplayOrders | Item Ids and their new display order
apiInstance.menuSectionsSetItemDisplayOrders(menuId, menuSectionId, displayOrders, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## updateMenuSection

> updateMenuSection(menuId, menuSectionId, menuSection, opts)

Update menu section

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let menuSection = new Flipdish.MenuSectionBase(); // MenuSectionBase | Menu section changes (delta)
let opts = {
  'undoAfter': 3.4 // Number | An optional time period, in hours, after which the hide-section operation will be undone.
};
apiInstance.updateMenuSection(menuId, menuSectionId, menuSection, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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


## uploadMenuSectionImage

> RestApiStringResult uploadMenuSectionImage(menuId, menuSectionId, Image)

Upload menu section image

### Example

```javascript
import Flipdish from '@flipdish/api-client-javascript';
let defaultClient = Flipdish.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Flipdish.MenuSectionsApi();
let menuId = 56; // Number | Menu identifier
let menuSectionId = 56; // Number | Menu section identifier
let Image = "/path/to/file"; // File | Menu section image
apiInstance.uploadMenuSectionImage(menuId, menuSectionId, Image, (error, data, response) => {
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
 **menuId** | **Number**| Menu identifier | 
 **menuSectionId** | **Number**| Menu section identifier | 
 **Image** | **File**| Menu section image | 

### Return type

[**RestApiStringResult**](RestApiStringResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, text/json, application/xml, text/xml, Data

