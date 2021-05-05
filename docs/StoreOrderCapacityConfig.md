# FlipdishOpenApiV10.StoreOrderCapacityConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **Number** | Store identifier | [optional] 
**deliveryType** | **String** | Signifies whether the order capacity configuration is for Delivery / Pickup | [optional] 
**storeIntervalInMinutes** | **Number** | Store Interval - time between orders, e.g. 10 minutes between each order time available to customer | [optional] 
**orderCapacityPeriods** | [**[StoreOrderCapacityPeriod]**](StoreOrderCapacityPeriod.md) | Order capacity periods | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `delivery` (value: `"Delivery"`)

* `pickup` (value: `"Pickup"`)




