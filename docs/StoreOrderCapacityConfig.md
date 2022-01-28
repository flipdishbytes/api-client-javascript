# Flipdish.StoreOrderCapacityConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StoreId** | **Number** | Store identifier | [optional] 
**DeliveryType** | **String** | Signifies whether the order capacity configuration is for Delivery / Pickup | [optional] 
**StoreIntervalInMinutes** | **Number** | Store Interval - time between orders, e.g. 10 minutes between each order time available to customer | [optional] 
**OrderCapacityPeriods** | [**[StoreOrderCapacityPeriod]**](StoreOrderCapacityPeriod.md) | Order capacity periods | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




