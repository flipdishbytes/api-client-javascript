# Flipdish.OrderSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | **Number** | Order identifier | [optional] 
**DeliveryType** | **String** | Delivery type | [optional] 
**PickupLocationType** | **String** | Pickup location type | [optional] 
**TableServiceCatagory** | **String** | Table service category | [optional] 
**OrderState** | **String** | Order state | [optional] 
**RequestedForTime** | **Date** | Order requested for | [optional] 
**StoreName** | **String** | Name of the store | [optional] 
**StoreIanaTimeZone** | **String** | Store IANA time zone | [optional] 
**CustomerName** | **String** | Name of the customer | [optional] 
**CustomerPhoneNumber** | **String** | Phone number of customer | [optional] 
**Amount** | **Number** | This is the sum of the OrderItemsAmount, DeliveryAmount, TipAmount and Voucher.Amount (which is usually negative) and OnlineOrderingFee  It does include the OnlineOrderingFee | [optional] 
**RefundedAmount** | **Number** | Refunded amount | [optional] 
**PaymentAccountType** | **String** | Payment Account | [optional] 
**PaymentStatus** | **String** | Status of the payment | [optional] 
**Currency** | **String** | Currency of payment | [optional] 
**AppType** | **String** | Type of app end user is on | [optional] 
**LocalOrderId** | **String** | Local order Id. This is used for displaying a \&quot;shorter\&quot; order ID for customers (eg. Kiosk orders) | [optional] 
**DropOffLocationId** | **Number** | id of the collection/drop off location | [optional] 
**DropOffLocation** | **String** | Represents table service drop off location | [optional] 
**AcceptedFor** | **Date** | Time store has accepted the order for | [optional] 
**Channel** | [**Channel**](Channel.md) |  | [optional] 
**InFraudZone** | **Boolean** | Was order made within a fraud zone | [optional] 
**UnusualHighValueOrder** | **Boolean** | Is order of unusually high value | [optional] 
**ChannelOrderId** | **String** | ChannelOrderId from external channel | [optional] 
**ChannelOrderDisplayId** | **String** | ChannelOrderDisplayId from external channel | [optional] 
**OrderDropOffLocation** | [**OrderDropOffLocation**](OrderDropOffLocation.md) |  | [optional] 
**OrderBatchInfo** | [**OrderBatchSummary**](OrderBatchSummary.md) |  | [optional] 
**DeliveryLocation** | [**DeliveryLocation**](DeliveryLocation.md) |  | [optional] 



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





## Enum: PaymentAccountTypeEnum


* `Card` (value: `"Card"`)

* `Cash` (value: `"Cash"`)

* `Ideal` (value: `"Ideal"`)

* `Bancontact` (value: `"Bancontact"`)

* `Giropay` (value: `"Giropay"`)

* `Eps` (value: `"Eps"`)

* `Emv` (value: `"Emv"`)

* `PayPal` (value: `"PayPal"`)

* `PayGreen` (value: `"PayGreen"`)

* `GoogleWalletToken` (value: `"GoogleWalletToken"`)





## Enum: PaymentStatusEnum


* `Paid` (value: `"Paid"`)

* `Unpaid` (value: `"Unpaid"`)

* `Refunded` (value: `"Refunded"`)

* `PartiallyRefunded` (value: `"PartiallyRefunded"`)

* `Disputed` (value: `"Disputed"`)





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




