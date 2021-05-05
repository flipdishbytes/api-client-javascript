# FlipdishOpenApiV10.StoreOpeningHoursUpdatedEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventName** | **String** | The event name | [optional] 
**storeId** | **Number** | Store Id | [optional] 
**storeGroupId** | **Number** | Store group Id | [optional] 
**user** | [**UserEventInfo**](UserEventInfo.md) | User which updated opening hours for this store | [optional] 
**deliveryType** | **String** | Type of opening hours Delivery / Pickup | [optional] 
**businessHoursPeriodOld** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) | The period that was updated | [optional] 
**businessHoursPeriod** | [**BusinessHoursPeriod**](BusinessHoursPeriod.md) | The new values of the period | [optional] 
**description** | **String** | Description | [optional] 
**flipdishEventId** | **String** | The identitfier of the event | [optional] 
**createTime** | **Date** | The time of creation of the event | [optional] 
**position** | **Number** | Position | [optional] 
**appId** | **String** | App id | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `delivery` (value: `"Delivery"`)

* `pickup` (value: `"Pickup"`)




