# Flipdish.FulfillmentInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DispatchType** | **String** | [Required] Dispatch Type (i.e Pickup / Delivery) | [optional] 
**RequestedForUtc** | **Date** | [Required] Time the order is requested for | [optional] 
**Location** | [**Location**](Location.md) | Location the order is to be delivered to  [Required] Delivery  [Not Required] Pickup | [optional] 
**DispatchAmount** | [**Price**](Price.md) | Price of the dispatch, normally 0 for collection and a value for delivery  [Required] Delivery  [Not Required] Pickup | [optional] 


<a name="DispatchTypeEnum"></a>
## Enum: DispatchTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




