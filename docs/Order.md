# FlipdishOpenApiV10.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store** | [**StoreSummary**](StoreSummary.md) | Store summary | [optional] 
**customer** | [**CustomerSummary**](CustomerSummary.md) | Customer summary | [optional] 
**voucher** | [**OrderVoucherSummary**](OrderVoucherSummary.md) | Voucher summary | [optional] 
**fees** | [**FeeSummary**](FeeSummary.md) | Fee summary | [optional] 
**orderItems** | [**[OrderItem]**](OrderItem.md) | Ordered items | [optional] 
**deliveryLocation** | [**DeliveryLocation**](DeliveryLocation.md) | Delivery location for delivery orders | [optional] 
**customerLocation** | [**Coordinates**](Coordinates.md) | Customer location | [optional] 
**maskedPhoneNumber** | [**MaskedPhoneNumber**](MaskedPhoneNumber.md) | Represents customers masked phone number | [optional] 
**dropOffLocationId** | **Number** | Represents table service drop off location | [optional] 
**dropOffLocation** | **String** | Represents table service drop off location | [optional] 
**acceptedFor** | **Date** | Time store has accepted the order for | [optional] 
**inFraudZone** | **Boolean** | Was order made within a fraud zone | [optional] 
**unusualHighValueOrder** | **Boolean** | Is order of unusually high value | [optional] 
**rejectedByUserId** | **Number** | Id of user who rejected order, if available | [optional] 
**orderId** | **Number** | Order identifier | [optional] 
**localOrderId** | **String** | Local order Id. This is used for displaying a \"shorter\" order ID for customers (eg. Kiosk orders) | [optional] 
**deliveryType** | **String** | Delivery type | [optional] 
**pickupLocationType** | **String** | Pickup location type | [optional] 
**tableServiceCatagory** | **String** | Pickup location type | [optional] 
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
**paymentStatus** | **String** | Status of the payment | [optional] 
**rejectionReason** | **String** | Rejection reason. Can have value if the order is rejected. | [optional] 
**refundedAmount** | **Number** | Amount refunded to customer. | [optional] 
**deliveryTrackingStatus** | **String** | Delivery tracking status | [optional] 
**driverId** | **Number** | Assigned driver identifier | [optional] 
**totalTax** | **Number** | Total tax applied to order | [optional] 
**orderTrackingCode** | **String** | Unique, 6 character long alpha numeric code for tracking. | [optional] 


<a name="DeliveryTypeEnum"></a>
## Enum: DeliveryTypeEnum


* `delivery` (value: `"Delivery"`)

* `pickup` (value: `"Pickup"`)




<a name="PickupLocationTypeEnum"></a>
## Enum: PickupLocationTypeEnum


* `takeOut` (value: `"TakeOut"`)

* `tableService` (value: `"TableService"`)

* `dineIn` (value: `"DineIn"`)




<a name="TableServiceCatagoryEnum"></a>
## Enum: TableServiceCatagoryEnum


* `generic` (value: `"Generic"`)

* `villa` (value: `"Villa"`)

* `house` (value: `"House"`)

* `room` (value: `"Room"`)

* `area` (value: `"Area"`)

* `table` (value: `"Table"`)

* `parkingBay` (value: `"ParkingBay"`)

* `gate` (value: `"Gate"`)




<a name="PaymentAccountTypeEnum"></a>
## Enum: PaymentAccountTypeEnum


* `card` (value: `"Card"`)

* `cash` (value: `"Cash"`)

* `ideal` (value: `"Ideal"`)

* `bancontact` (value: `"Bancontact"`)

* `giropay` (value: `"Giropay"`)

* `eps` (value: `"Eps"`)

* `emv` (value: `"Emv"`)

* `payPal` (value: `"PayPal"`)




<a name="OrderStateEnum"></a>
## Enum: OrderStateEnum


* `created` (value: `"Created"`)

* `placedCanBeCancelled` (value: `"PlacedCanBeCancelled"`)

* `readyToProcess` (value: `"ReadyToProcess"`)

* `acceptedByRestaurant` (value: `"AcceptedByRestaurant"`)

* `dispatched` (value: `"Dispatched"`)

* `delivered` (value: `"Delivered"`)

* `cancelled` (value: `"Cancelled"`)

* `manualReview` (value: `"ManualReview"`)

* `rejectedByStore` (value: `"RejectedByStore"`)

* `rejectedByFlipdish` (value: `"RejectedByFlipdish"`)

* `rejectedAutomatically` (value: `"RejectedAutomatically"`)

* `rejectedAfterBeingAccepted` (value: `"RejectedAfterBeingAccepted"`)

* `acceptedAndRefunded` (value: `"AcceptedAndRefunded"`)




<a name="AppTypeEnum"></a>
## Enum: AppTypeEnum


* `unknown` (value: `"Unknown"`)

* `ios` (value: `"Ios"`)

* `android` (value: `"Android"`)

* `web` (value: `"Web"`)

* `kiosk` (value: `"Kiosk"`)

* `pos` (value: `"Pos"`)

* `telephoneCall` (value: `"TelephoneCall"`)

* `sms` (value: `"Sms"`)

* `pwaAndroid` (value: `"PwaAndroid"`)

* `pwaIos` (value: `"PwaIos"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `paid` (value: `"Paid"`)

* `unpaid` (value: `"Unpaid"`)

* `refunded` (value: `"Refunded"`)

* `partiallyRefunded` (value: `"PartiallyRefunded"`)

* `disputed` (value: `"Disputed"`)




<a name="RejectionReasonEnum"></a>
## Enum: RejectionReasonEnum


* `tooBusy` (value: `"TooBusy"`)

* `foodUnavailable` (value: `"FoodUnavailable"`)

* `unableToDeliver` (value: `"UnableToDeliver"`)

* `unknownAddress` (value: `"UnknownAddress"`)

* `unknownReason` (value: `"UnknownReason"`)

* `tooSoon` (value: `"TooSoon"`)

* `timeUnavailable` (value: `"TimeUnavailable"`)

* `dontDeliverToArea` (value: `"DontDeliverToArea"`)

* `storeUncontactable` (value: `"StoreUncontactable"`)




<a name="DeliveryTrackingStatusEnum"></a>
## Enum: DeliveryTrackingStatusEnum


* `unassigned` (value: `"Unassigned"`)

* `unaccepted` (value: `"Unaccepted"`)

* `accepted` (value: `"Accepted"`)

* `carrying` (value: `"Carrying"`)

* `onTheWay` (value: `"OnTheWay"`)

* `arrivedAtLocation` (value: `"ArrivedAtLocation"`)

* `delivered` (value: `"Delivered"`)

* `cannotDeliver` (value: `"CannotDeliver"`)




