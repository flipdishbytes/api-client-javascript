# FlipdishOpenApiV10.VoucherWithStats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalUsed** | **Number** | Total times the voucher was used | [optional] 
**totalCustomers** | **Number** | Total amount of customers who used this voucher | [optional] 
**totalAmountFromOrders** | **Number** | Total amount of money from orders | [optional] 
**totalDiscounted** | **Number** | Total amount of money given away | [optional] 
**averageOrderSize** | **Number** | Average Order Size | [optional] 
**voucherId** | **Number** | Voucher Id | [optional] 
**status** | **String** | Voucher Status | [optional] 
**voucherType** | **String** | Voucher Type | [optional] 
**voucherSubType** | **String** | Voucher Sub Type | [optional] 
**currency** | **String** | Currency of the voucher | [optional] 
**stores** | **[Number]** | Stores that this voucher applies to | [optional] 
**storeNames** | **[String]** | Stores that this voucher applies to | [optional] 
**addItemDetails** | [**AddItemDetails**](AddItemDetails.md) | Add item details | [optional] 
**creditNoteDetails** | [**CreditNoteDetails**](CreditNoteDetails.md) | Credit note details | [optional] 
**lumpDiscountDetails** | [**LumpDiscountDetails**](LumpDiscountDetails.md) | Lump discount details | [optional] 
**percentDiscountDetails** | [**PercentDiscountDetails**](PercentDiscountDetails.md) | Percent discount details | [optional] 
**code** | **String** | Voucher Code | [optional] 
**description** | **String** | Voucher Description (Visible on printout) | [optional] 
**validOnOrdersOver** | **Number** | Valid on orders on or above | [optional] 
**takesPriority** | **Boolean** | Takes priority | [optional] 
**isEnabled** | **Boolean** | Is voucher enabled | [optional] 
**isAutomaticallyApplied** | **Boolean** | Is voucher automatically applied | [optional] 
**includeDeliveryFee** | **Boolean** | Include delivery fees | [optional] 
**isValidForDeliveryOrders** | **Boolean** | Valid for delivery orders | [optional] 
**isValidForPickupOrders** | **Boolean** | Valid for pickup orders | [optional] 
**isValidForOrdersPayedOnline** | **Boolean** | Valid for orders payed online | [optional] 
**isValidForOrdersPayedByCash** | **Boolean** | Valid for orders payed in cash | [optional] 
**isValidForFirstOrderOnly** | **Boolean** | Valid only on the first order by the customer | [optional] 
**isValidOncePerCustomer** | **Boolean** | Valid once per customer | [optional] 
**isValidOnlyOnce** | **Boolean** | Valid only once, by any customer (once used cannot be used again by any other customer) | [optional] 
**startDate** | **Date** | Voucher Starts On (Time in UTC) | [optional] 
**expiryDate** | **Date** | Voucher Expires On (Time in UTC) | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"Valid"`)

* `notYetValid` (value: `"NotYetValid"`)

* `expired` (value: `"Expired"`)

* `used` (value: `"Used"`)

* `disabled` (value: `"Disabled"`)




<a name="VoucherTypeEnum"></a>
## Enum: VoucherTypeEnum


* `percentageDiscount` (value: `"PercentageDiscount"`)

* `lumpDiscount` (value: `"LumpDiscount"`)

* `addItem` (value: `"AddItem"`)

* `creditNote` (value: `"CreditNote"`)




<a name="VoucherSubTypeEnum"></a>
## Enum: VoucherSubTypeEnum


* `none` (value: `"None"`)

* `signUp` (value: `"SignUp"`)

* `loyalty` (value: `"Loyalty"`)

* `loyalty25` (value: `"Loyalty25"`)

* `retention` (value: `"Retention"`)

* `secondaryRetention` (value: `"SecondaryRetention"`)

* `custom` (value: `"Custom"`)




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




