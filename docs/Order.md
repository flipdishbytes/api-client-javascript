# Flipdish.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store** | [**StoreSummary**](StoreSummary.md) | Store summary | [optional] 
**customer** | [**CustomerSummary**](CustomerSummary.md) | Customer summary | [optional] 
**voucher** | [**VoucherSummary**](VoucherSummary.md) | Voucher summary | [optional] 
**fees** | [**FeeSummary**](FeeSummary.md) | Fee summary | [optional] 
**orderItems** | [**[OrderItem]**](OrderItem.md) | Ordered items | [optional] 
**deliveryLocation** | [**DeliveryLocation**](DeliveryLocation.md) | Delivery location for delivery orders | [optional] 
**customerLocation** | [**Coordinates**](Coordinates.md) | Customer location | [optional] 
**orderId** | **Number** | Order identifier | [optional] 
**deliveryType** | **String** | Delivery type | [optional] 
**pickupLocationType** | **String** | Pickup location type | [optional] 
**tipAmount** | **Number** | Tip amount | [optional] 
**deliveryAmount** | **Number** | Delivery amount | [optional] 
**orderItemsAmount** | **Number** | Ordered items amount | [optional] 
**amount** | **Number** | This is the sum of the OrderItemsAmount, DeliveryAmount, TipAmount and Voucher.Amount (which is usually negative) and OnlineOrderingFee for cash orders.  It does not include the OnlineOrderingFee in the case of card orders as this fee is charged by Flipdish directly to the customer. | [optional] 
**processingFee** | **Number** | This contains the online ordering processing fee. For card payments this is charged directly to the customer and for cash orders it is paid by the customer to the store. It is tax inclusive. | [optional] 
**paymentAccountType** | **String** | Payment account type | [optional] 
**paymentAccountDescription** | **String** | Payment account description (like Visa ****2371 or Apple Pay. or Cash) | [optional] 
**orderState** | **String** | Order state | [optional] 
**isPreOrder** | **Boolean** | Is pre-order | [optional] 
**placedTime** | **Date** | Order placed time | [optional] 
**requestedForTime** | **Date** | Order requested for | [optional] 
**chefNote** | **String** | Chef note | [optional] 
**appType** | **String** | Used app type | [optional] 
**userRating** | **Number** | User rating | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




<a name="PickupLocationTypeEnum"></a>
## Enum: PickupLocationTypeEnum


* `TakeOut` (value: `"TakeOut"`)

* `TableService` (value: `"TableService"`)

* `DineIn` (value: `"DineIn"`)




<a name="PaymentAccountTypeEnum"></a>
## Enum: PaymentAccountTypeEnum


* `Card` (value: `"Card"`)

* `Cash` (value: `"Cash"`)




<a name="OrderStateEnum"></a>
## Enum: OrderStateEnum


* `Created` (value: `"Created"`)

* `PlacedCanBeCancelled` (value: `"PlacedCanBeCancelled"`)

* `ReadyToProcess` (value: `"ReadyToProcess"`)

* `AcceptedByRestaurant` (value: `"AcceptedByRestaurant"`)

* `Dispatched` (value: `"Dispatched"`)

* `Delivered` (value: `"Delivered"`)

* `Cancelled` (value: `"Cancelled"`)

* `ManualReview` (value: `"ManualReview"`)

* `RejectedByStore` (value: `"RejectedByStore"`)

* `RejectedByFlipdish` (value: `"RejectedByFlipdish"`)

* `RejectedAutomatically` (value: `"RejectedAutomatically"`)

* `RejectedAfterBeingAccepted` (value: `"RejectedAfterBeingAccepted"`)

* `AcceptedAndRefunded` (value: `"AcceptedAndRefunded"`)




<a name="AppTypeEnum"></a>
## Enum: AppTypeEnum


* `Unknown` (value: `"Unknown"`)

* `Ios` (value: `"Ios"`)

* `Android` (value: `"Android"`)

* `Web` (value: `"Web"`)

* `Kiosk` (value: `"Kiosk"`)

* `Pos` (value: `"Pos"`)

* `TelephoneCall` (value: `"TelephoneCall"`)

* `Sms` (value: `"Sms"`)

* `PwaAndroid` (value: `"PwaAndroid"`)

* `PwaIos` (value: `"PwaIos"`)




