# Flipdish.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Store** | [**StoreSummary**](StoreSummary.md) | Store summary | [optional] 
**Customer** | [**CustomerSummary**](CustomerSummary.md) | Customer summary | [optional] 
**Voucher** | [**OrderVoucherSummary**](OrderVoucherSummary.md) | Voucher summary | [optional] 
**Fees** | [**FeeSummary**](FeeSummary.md) | Fee summary | [optional] 
**OrderItems** | [**[OrderItem]**](OrderItem.md) | Ordered items | [optional] 
**DeliveryLocation** | [**DeliveryLocation**](DeliveryLocation.md) | Delivery location for delivery orders | [optional] 
**CustomerLocation** | [**Coordinates**](Coordinates.md) | Customer location | [optional] 
**MaskedPhoneNumber** | [**MaskedPhoneNumber**](MaskedPhoneNumber.md) | Represents customers masked phone number | [optional] 
**DropOffLocationId** | **Number** | Represents table service drop off location | [optional] 
**DropOffLocation** | **String** | Represents table service drop off location | [optional] 
**AcceptedFor** | **Date** | Time store has accepted the order for | [optional] 
**InFraudZone** | **Boolean** | Was order made within a fraud zone | [optional] 
**UnusualHighValueOrder** | **Boolean** | Is order of unusually high value | [optional] 
**RejectedByUserId** | **Number** | Id of user who rejected order, if available | [optional] 
**ChannelOrderId** | **String** | ChannelOrderId from external channel | [optional] 
**ChannelOrderDisplayId** | **String** | ChannelOrderDisplayId from external channel | [optional] 
**Channel** | [**Channel**](Channel.md) | Channel where the Order comes from | [optional] 
**ReceiptCode** | **String** | Generated receipt code for an order | [optional] 
**OrderDropOffLocation** | [**OrderDropOffLocation**](OrderDropOffLocation.md) | Order Drop Off Location | [optional] 
**OrderId** | **Number** | Order identifier | [optional] 
**LocalOrderId** | **String** | Local order Id. This is used for displaying a \"shorter\" order ID for customers (eg. Kiosk orders) | [optional] 
**DeliveryType** | **String** | Delivery type | [optional] 
**PickupLocationType** | **String** | Pickup location type | [optional] 
**TableServiceCatagory** | **String** | Pickup location type | [optional] 
**TipAmount** | **Number** | Tip amount | [optional] 
**DeliveryAmount** | **Number** | Delivery amount | [optional] 
**OrderItemsAmount** | **Number** | Ordered items amount | [optional] 
**ServiceChargeAmount** | **Number** | Service Charge Amount | [optional] 
**Amount** | **Number** | This is the sum of the OrderItemsAmount, DeliveryAmount, TipAmount and Voucher.Amount (which is usually negative) and OnlineOrderingFee for cash orders.  It does not include the OnlineOrderingFee in the case of card orders as this fee is charged by Flipdish directly to the customer. | [optional] 
**ProcessingFee** | **Number** | This contains the online ordering processing fee. For card payments this is charged directly to the customer and for cash orders it is paid by the customer to the store. It is tax inclusive. | [optional] 
**PaymentAccountType** | **String** | Payment account type | [optional] 
**PaymentAccountDescription** | **String** | Payment account description (like Visa ****2371 or Apple Pay. or Cash) | [optional] 
**OrderState** | **String** | Order state | [optional] 
**IsPreOrder** | **Boolean** | Is pre-order | [optional] 
**PlacedTime** | **Date** | Order placed time | [optional] 
**RequestedForTime** | **Date** | Order requested for | [optional] 
**ChefNote** | **String** | Chef note | [optional] 
**AppType** | **String** | Used app type | [optional] 
**UserRating** | **Number** | User rating | [optional] 
**PaymentStatus** | **String** | Status of the payment | [optional] 
**RejectionReason** | **String** | Rejection reason. Can have value if the order is rejected. | [optional] 
**RefundedAmount** | **Number** | Amount refunded to customer. | [optional] 
**DeliveryTrackingStatus** | **String** | Delivery tracking status | [optional] 
**DriverId** | **Number** | Assigned driver identifier | [optional] 
**TotalTax** | **Number** | Total tax applied to order | [optional] 
**OrderTrackingCode** | **String** | Unique, 6 character long alpha numeric code for tracking. | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `Delivery` (value: `"Delivery"`)

* `Pickup` (value: `"Pickup"`)




<a name="PickupLocationTypeEnum"></a>
## Enum: PickupLocationTypeEnum


* `TakeOut` (value: `"TakeOut"`)

* `TableService` (value: `"TableService"`)

* `DineIn` (value: `"DineIn"`)




<a name="TableServiceCatagoryEnum"></a>
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




<a name="PaymentAccountTypeEnum"></a>
## Enum: PaymentAccountTypeEnum


* `Card` (value: `"Card"`)

* `Cash` (value: `"Cash"`)

* `Ideal` (value: `"Ideal"`)

* `Bancontact` (value: `"Bancontact"`)

* `Giropay` (value: `"Giropay"`)

* `Eps` (value: `"Eps"`)

* `Emv` (value: `"Emv"`)

* `PayPal` (value: `"PayPal"`)




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

* `Google` (value: `"Google"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `Paid` (value: `"Paid"`)

* `Unpaid` (value: `"Unpaid"`)

* `Refunded` (value: `"Refunded"`)

* `PartiallyRefunded` (value: `"PartiallyRefunded"`)

* `Disputed` (value: `"Disputed"`)




<a name="RejectionReasonEnum"></a>
## Enum: RejectionReasonEnum


* `TooBusy` (value: `"TooBusy"`)

* `FoodUnavailable` (value: `"FoodUnavailable"`)

* `UnableToDeliver` (value: `"UnableToDeliver"`)

* `UnknownAddress` (value: `"UnknownAddress"`)

* `UnknownReason` (value: `"UnknownReason"`)

* `TooSoon` (value: `"TooSoon"`)

* `TimeUnavailable` (value: `"TimeUnavailable"`)

* `DontDeliverToArea` (value: `"DontDeliverToArea"`)

* `StoreUncontactable` (value: `"StoreUncontactable"`)




<a name="DeliveryTrackingStatusEnum"></a>
## Enum: DeliveryTrackingStatusEnum


* `Unassigned` (value: `"Unassigned"`)

* `Unaccepted` (value: `"Unaccepted"`)

* `Accepted` (value: `"Accepted"`)

* `Carrying` (value: `"Carrying"`)

* `OnTheWay` (value: `"OnTheWay"`)

* `ArrivedAtLocation` (value: `"ArrivedAtLocation"`)

* `Delivered` (value: `"Delivered"`)

* `CannotDeliver` (value: `"CannotDeliver"`)




