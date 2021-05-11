# Flipdish.StoreOpeningHoursUpdatedEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventName** | **String** | The event name | [optional] 
**StoreId** | **Number** | Store Id | [optional] 
**StoreGroupId** | **Number** | Store group Id | [optional] 
**User** | [**UserEventInfo**](UserEventInfo.md) | User which updated opening hours for this store | [optional] 
**DeliveryType** | **String** | Type of opening hours Delivery / Pickup | [optional] 
**BusinessHoursPeriodOld** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) | The period that was updated | [optional] 
**BusinessHoursPeriod** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) | The new values of the period | [optional] 
**Description** | **String** | Description | [optional] 
**FlipdishEventId** | **String** | The identitfier of the event | [optional] 
**CreateTime** | **Date** | The time of creation of the event | [optional] 
**Position** | **Number** | Position | [optional] 
**AppId** | **String** | App id | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




