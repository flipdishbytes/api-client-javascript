# Flipdish.OrderDm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserLocation** | [**CoordinatesDm**](CoordinatesDm.md) |  | [optional] 
**RequestedDeliveryOrPickupTimeUtc** | **Date** |  | [optional] 
**TipAmount** | **Number** |  | [optional] 
**DeliveryLocationId** | **Number** |  | [optional] 
**VoucherCode** | **String** |  | [optional] 
**OrderItemVms** | [**[OrderItemDm]**](OrderItemDm.md) |  | [optional] 
**VirtualRestaurantId** | **Number** |  | [optional] 
**PhysicalRestaurantId** | **Number** |  | [optional] 
**DeliveryType** | **String** |  | [optional] 
**PickupLocationType** | **String** |  | [optional] 
**PickupLocationId** | **Number** |  | [optional] 
**TableServiceCatagory** | **String** |  | [optional] 
**PaymentAccountId** | **Number** |  | [optional] 
**IsPreOrder** | **Boolean** |  | [optional] [readonly] 
**IsAsapOrder** | **Boolean** |  | [optional] 
**MenuId** | **Number** |  | [optional] 
**MenuVersion** | **Number** |  | [optional] 



## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)





## Enum: PickupLocationTypeEnum


* `TakeOut` (value: `"TakeOut"`)

* `TableService` (value: `"TableService"`)

* `DineIn` (value: `"DineIn"`)





## Enum: TableServiceCatagoryEnum


* `Generic` (value: `"Generic"`)

* `Villa` (value: `"Villa"`)

* `House` (value: `"House"`)

* `Room` (value: `"Room"`)

* `Area` (value: `"Area"`)

* `Table` (value: `"Table"`)

* `ParkingBay` (value: `"ParkingBay"`)

* `Gate` (value: `"Gate"`)

* `DriveThrough` (value: `"DriveThrough"`)

* `Team` (value: `"Team"`)




