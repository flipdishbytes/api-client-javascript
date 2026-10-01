# Flipdish.StoreOpeningHoursUpdatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventName** | **String** | The event name | [optional] 
**OrgId** | **String** | Organisation Id | [optional] 
**StoreId** | **Number** | Store Id | [optional] 
**StoreGroupId** | **Number** | Store group Id | [optional] 
**User** | [**UserEventInfo**](UserEventInfo.md) |  | [optional] 
**DeliveryType** | **String** | Type of opening hours Delivery / Pickup | [optional] 
**DeliveryTypeString** | **String** | Type of opening hours Delivery / Pickup as a string | [optional] 
**BusinessHoursPeriodOld** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) |  | [optional] 
**BusinessHoursPeriod** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) |  | [optional] 
**Description** | **String** | Description | [optional] 
**FlipdishEventId** | **String** | The identitfier of the event | [optional] 
**CreateTime** | **Date** | The time of creation of the event | [optional] 
**Position** | **Number** | Position | [optional] 
**AppId** | **String** | App id | [optional] 
**IpAddress** | **String** | Ip Address | [optional] 



## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)





## Enum: DeliveryTypeStringEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




