# Flipdish.VoucherWithStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalUsed** | **Number** | Total times the voucher was used | [optional] 
**TotalCustomers** | **Number** | Total amount of customers who used this voucher | [optional] 
**TotalAmountFromOrders** | **Number** | Total amount of money from orders | [optional] 
**TotalDiscounted** | **Number** | Total amount of money given away | [optional] 
**AverageOrderSize** | **Number** | Average Order Size | [optional] 
**VoucherId** | **Number** | Voucher Id | [optional] 
**Status** | **String** | Voucher Status | [optional] 
**VoucherType** | **String** | Voucher Type | [optional] 
**Currency** | **String** | Currency of the voucher | [optional] 
**StoreNames** | **[String]** | Stores that this voucher applies to | [optional] 
**PromotionDetails** | [**PromotionDetails**](PromotionDetails.md) |  | [optional] 
**CreditNoteDetails** | [**CreditNoteDetails**](CreditNoteDetails.md) |  | [optional] 
**LumpDiscountDetails** | [**LumpDiscountDetails**](LumpDiscountDetails.md) |  | [optional] 
**PercentDiscountDetails** | [**PercentDiscountDetails**](PercentDiscountDetails.md) |  | [optional] 
**Code** | **String** | Voucher Code | [optional] 
**Description** | **String** | Voucher Description (Visible on printout) | [optional] 
**Stores** | **[Number]** | Stores that this voucher applies to | [optional] 
**ValidOnOrdersOver** | **Number** | Valid on orders on or above | [optional] 
**TakesPriority** | **Boolean** | Takes priority | [optional] 
**IsEnabled** | **Boolean** | Is voucher enabled | [optional] 
**IsAutomaticallyApplied** | **Boolean** | Is voucher automatically applied | [optional] 
**IncludeDeliveryFee** | **Boolean** | Include delivery fees | [optional] 
**IsValidForDeliveryOrders** | **Boolean** | Valid for delivery orders | [optional] 
**IsValidForPickupOrders** | **Boolean** | Valid for pickup orders | [optional] 
**IsValidForOrdersPayedOnline** | **Boolean** | Valid for orders payed online | [optional] 
**IsValidForOrdersPayedByCash** | **Boolean** | Valid for orders payed in cash | [optional] 
**IsValidForFirstOrderOnly** | **Boolean** | Valid only on the first order by the customer | [optional] 
**IsValidOncePerCustomer** | **Boolean** | Valid once per customer | [optional] 
**IsValidOnlyOnce** | **Boolean** | Valid only once, by any customer (once used cannot be used again by any other customer) | [optional] 
**IsDiscoverable** | **Boolean** | Enables the voucher to be offered in the Voucher Discoverability feature | [optional] 
**ForceDiscount** | **Boolean** | Force the discount to be applied which bypasses some menu restrictions | [optional] 
**StartDate** | **Date** | Voucher Starts On (Time in UTC) | [optional] 
**ExpiryDate** | **Date** | Voucher Expires On (Time in UTC) | [optional] 
**ChannelRestrictions** | **[String]** | Limit the channels this voucher can be used on | [optional] 
**ValidityPeriods** | [**[ValidityPeriod]**](ValidityPeriod.md) | Periods in which the voucher is valid.  An empty list means the voucher is valid at all times.  When updating the voucher, if this is set to null, the validity periods won&#39;t be updated. | [optional] 
**VoucherSubType** | **String** | Voucher Subtype | [optional] 
**CustomerId** | **Number** | Customer UserID | [optional] 
**MaxRedemptions** | **Number** | Maximum number of times the voucher can be redeemed (used) | [optional] 



## Enum: StatusEnum


* `Valid` (value: `"Valid"`)

* `NotYetValid` (value: `"NotYetValid"`)

* `Expired` (value: `"Expired"`)

* `Used` (value: `"Used"`)

* `Disabled` (value: `"Disabled"`)





## Enum: VoucherTypeEnum


* `PercentageDiscount` (value: `"PercentageDiscount"`)

* `LumpDiscount` (value: `"LumpDiscount"`)

* `AddItem` (value: `"AddItem"`)

* `CreditNote` (value: `"CreditNote"`)

* `FreeDelivery` (value: `"FreeDelivery"`)





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





## Enum: [ChannelRestrictionsEnum]


* `Ios` (value: `"Ios"`)

* `Android` (value: `"Android"`)

* `Web` (value: `"Web"`)

* `Kiosk` (value: `"Kiosk"`)

* `Pos` (value: `"Pos"`)

* `Google` (value: `"Google"`)





## Enum: VoucherSubTypeEnum


* `None` (value: `"None"`)

* `SignUp` (value: `"SignUp"`)

* `Loyalty` (value: `"Loyalty"`)

* `Loyalty25` (value: `"Loyalty25"`)

* `Retention` (value: `"Retention"`)

* `SecondaryRetention` (value: `"SecondaryRetention"`)

* `Custom` (value: `"Custom"`)




