# FlipdishOpenApiV10.OrderSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **Number** | Order identifier | [optional] 
**deliveryType** | **String** | Delivery type | [optional] 
**pickupLocationType** | **String** | Pickup location type | [optional] 
**tableServiceCatagory** | **String** | Table service category | [optional] 
**orderState** | **String** | Order state | [optional] 
**requestedForTime** | **Date** | Order requested for | [optional] 
**storeName** | **String** | Name of the store | [optional] 
**storeIanaTimeZone** | **String** | Store IANA time zone | [optional] 
**customerName** | **String** | Name of the customer | [optional] 
**customerPhoneNumber** | **String** | Phone number of customer | [optional] 
**amount** | **Number** | This is the sum of the OrderItemsAmount, DeliveryAmount, TipAmount and Voucher.Amount (which is usually negative) and OnlineOrderingFee  It does include the OnlineOrderingFee | [optional] 
**refundedAmount** | **Number** | Refunded amount | [optional] 
**paymentAccountType** | **String** | Payment Account | [optional] 
**paymentStatus** | **String** | Status of the payment | [optional] 
**currency** | **String** | Currency of payment | [optional] 
**appType** | **String** | Type of app end user is on | [optional] 
**localOrderId** | **String** | Local order Id. This is used for displaying a \"shorter\" order ID for customers (eg. Kiosk orders) | [optional] 
**dropOffLocationId** | **Number** | id of the collection/drop off location | [optional] 
**dropOffLocation** | **String** | Represents table service drop off location | [optional] 
**acceptedFor** | **Date** | Time store has accepted the order for | [optional] 
**inFraudZone** | **Boolean** | Was order made within a fraud zone | [optional] 
**unusualHighValueOrder** | **Boolean** | Is order of unusually high value | [optional] 


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




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `paid` (value: `"Paid"`)

* `unpaid` (value: `"Unpaid"`)

* `refunded` (value: `"Refunded"`)

* `partiallyRefunded` (value: `"PartiallyRefunded"`)

* `disputed` (value: `"Disputed"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `EUR` (value: `"EUR"`)

* `USD` (value: `"USD"`)

* `GBP` (value: `"GBP"`)

* `CAD` (value: `"CAD"`)

* `AUD` (value: `"AUD"`)

* `DJF` (value: `"DJF"`)

* `ZAR` (value: `"ZAR"`)

* `ETB` (value: `"ETB"`)

* `AED` (value: `"AED"`)

* `BHD` (value: `"BHD"`)

* `DZD` (value: `"DZD"`)

* `EGP` (value: `"EGP"`)

* `IQD` (value: `"IQD"`)

* `JOD` (value: `"JOD"`)

* `KWD` (value: `"KWD"`)

* `LBP` (value: `"LBP"`)

* `LYD` (value: `"LYD"`)

* `MAD` (value: `"MAD"`)

* `OMR` (value: `"OMR"`)

* `QAR` (value: `"QAR"`)

* `SAR` (value: `"SAR"`)

* `SYP` (value: `"SYP"`)

* `TND` (value: `"TND"`)

* `YER` (value: `"YER"`)

* `CLP` (value: `"CLP"`)

* `INR` (value: `"INR"`)

* `AZN` (value: `"AZN"`)

* `RUB` (value: `"RUB"`)

* `BYN` (value: `"BYN"`)

* `BGN` (value: `"BGN"`)

* `NGN` (value: `"NGN"`)

* `BDT` (value: `"BDT"`)

* `CNY` (value: `"CNY"`)

* `BAM` (value: `"BAM"`)

* `CZK` (value: `"CZK"`)

* `DKK` (value: `"DKK"`)

* `CHF` (value: `"CHF"`)

* `MVR` (value: `"MVR"`)

* `BTN` (value: `"BTN"`)

* `XCD` (value: `"XCD"`)

* `BZD` (value: `"BZD"`)

* `HKD` (value: `"HKD"`)

* `IDR` (value: `"IDR"`)

* `JMD` (value: `"JMD"`)

* `MYR` (value: `"MYR"`)

* `NZD` (value: `"NZD"`)

* `PHP` (value: `"PHP"`)

* `SGD` (value: `"SGD"`)

* `TTD` (value: `"TTD"`)

* `XDR` (value: `"XDR"`)

* `ARS` (value: `"ARS"`)

* `BOB` (value: `"BOB"`)

* `COP` (value: `"COP"`)

* `CRC` (value: `"CRC"`)

* `CUP` (value: `"CUP"`)

* `DOP` (value: `"DOP"`)

* `GTQ` (value: `"GTQ"`)

* `HNL` (value: `"HNL"`)

* `MXN` (value: `"MXN"`)

* `NIO` (value: `"NIO"`)

* `PAB` (value: `"PAB"`)

* `PEN` (value: `"PEN"`)

* `PYG` (value: `"PYG"`)

* `UYU` (value: `"UYU"`)

* `VEF` (value: `"VEF"`)

* `IRR` (value: `"IRR"`)

* `XOF` (value: `"XOF"`)

* `CDF` (value: `"CDF"`)

* `XAF` (value: `"XAF"`)

* `HTG` (value: `"HTG"`)

* `ILS` (value: `"ILS"`)

* `HRK` (value: `"HRK"`)

* `HUF` (value: `"HUF"`)

* `AMD` (value: `"AMD"`)

* `ISK` (value: `"ISK"`)

* `JPY` (value: `"JPY"`)

* `GEL` (value: `"GEL"`)

* `KZT` (value: `"KZT"`)

* `KHR` (value: `"KHR"`)

* `KRW` (value: `"KRW"`)

* `KGS` (value: `"KGS"`)

* `LAK` (value: `"LAK"`)

* `MKD` (value: `"MKD"`)

* `MNT` (value: `"MNT"`)

* `BND` (value: `"BND"`)

* `MMK` (value: `"MMK"`)

* `NOK` (value: `"NOK"`)

* `NPR` (value: `"NPR"`)

* `PKR` (value: `"PKR"`)

* `PLN` (value: `"PLN"`)

* `AFN` (value: `"AFN"`)

* `BRL` (value: `"BRL"`)

* `MDL` (value: `"MDL"`)

* `RON` (value: `"RON"`)

* `RWF` (value: `"RWF"`)

* `SEK` (value: `"SEK"`)

* `LKR` (value: `"LKR"`)

* `SOS` (value: `"SOS"`)

* `ALL` (value: `"ALL"`)

* `RSD` (value: `"RSD"`)

* `KES` (value: `"KES"`)

* `TJS` (value: `"TJS"`)

* `THB` (value: `"THB"`)

* `ERN` (value: `"ERN"`)

* `TMT` (value: `"TMT"`)

* `BWP` (value: `"BWP"`)

* `TRY` (value: `"TRY"`)

* `UAH` (value: `"UAH"`)

* `UZS` (value: `"UZS"`)

* `VND` (value: `"VND"`)

* `MOP` (value: `"MOP"`)

* `TWD` (value: `"TWD"`)

* `BMD` (value: `"BMD"`)




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




