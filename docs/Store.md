# Flipdish.Store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StoreId** | **Number** | Store identifier | [optional] 
**StoreGroupId** | **Number** | Store group id to which this store belongs | [optional] 
**Address** | [**StoreAddress**](StoreAddress.md) |  | [optional] 
**DeliveryZones** | [**[DeliveryZone]**](DeliveryZone.md) | Delivery zones | [optional] 
**ApmPhoneNumber** | **String** | Automated Phone Marketing number | [optional] 
**PickupHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Pickup hours | [optional] 
**DeliveryHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Delivery hours | [optional] 
**MenuId** | **Number** | Menu identifier | [optional] 
**OrderConfirmationMessageOverrideDelivery** | **String** | Overridden confirmation message for delivery orders | [optional] 
**OrderConfirmationMessageOverridePickup** | **String** | Overridden confirmation message for pickup orders | [optional] 
**PrintoutLayoutType** | **String** | Printout layout | [optional] 
**StoreNotes** | [**[StoreNote]**](StoreNote.md) | Store notes | [optional] 
**MicrosoftTimeZone** | **String** | Microsoft Time Zone Index Values (https://msdn.microsoft.com/en-us/library/ms912391)  (Editable through store coordinate change) | [optional] 
**IanaTimeZone** | **String** | IANA Time Zone (https://www.iana.org/time-zones)  (Editable through store coordinate change) | [optional] 
**Currency** | **String** | Currency (derived from Store Group) | [optional] 
**PreOrderDeliveryEnabled** | **Boolean** | Is PerOrder Enabled for Delivery | [optional] 
**PreOrderPickupEnabled** | **Boolean** | Is PerOrder Enabled for Pickup | [optional] 
**LogoUrl** | **String** | Url for logo image | [optional] 
**FraudPreventionStrategy** | **String** | Fraud Prevention Strategy | [optional] 
**AppIds** | **[String]** | Store&#39;s app ids | [optional] 
**PropertyId** | **String** | Property Id | [optional] 
**PhoneNumber** | **String** | Phone number | [optional] 
**AlwaysAppearOpen** | **Boolean** | True if the store always appears open | [optional] 
**PreOrderEnabled** | **Boolean** | True if the store accepts pre-orders | [optional] 
**TakeOutEnabled** | **Boolean** | True if the store accepts take-out orders | [optional] 
**TableServiceEnabled** | **Boolean** | True if the store has table service | [optional] 
**DineInEnabled** | **Boolean** | True if the store accepts dine-in orders | [optional] 
**AllowPreOrdersAndTableService** | **Boolean** | True if both pre-orders and talbe service can be enabled | [optional] 
**PickupEnabled** | **Boolean** | True if the store accepts pickup orders | [optional] 
**DeliveryEnabled** | **Boolean** | True if the store accepts delivery orders | [optional] 
**CardOrderDeliveryEnabled** | **Boolean** | True if the store accepts card payment for delivery orders | [optional] 
**CashOrdersDeliveryEnabled** | **Boolean** | True if the store accepts cash payment for delivery orders | [optional] 
**CardOrdersPickupEnabled** | **Boolean** | True if the store accepts card payment for pickup orders | [optional] 
**CashOrdersPickupEnabled** | **Boolean** | True if the store accepts cash payment for pickup orders | [optional] 
**TipsEnabled** | **Boolean** | True if the store accepts tips | [optional] 
**AutomaticallyAcceptOrders** | **Boolean** | True if the stores orders are automatically accepted in Flipdish | [optional] 
**OpenForDelivery** | **Boolean** | True if the store is open for delivery | [optional] 
**OpenForPickup** | **Boolean** | True if the store is open for pickup | [optional] 
**MinimumPickupOrderAmount** | **Number** | Minimum pickup order amount | [optional] 
**RequireCustomerNameForPickup** | **Boolean** | True if customer name required for pickup orders | [optional] 
**GdprCustomerPhoneNumbers** | **Boolean** | Mask your customers phone numbers printed on receipts and reduce the amout of personally identifiable customer information that is exposed. | [optional] 
**RequireCustomerNameForDelivery** | **Boolean** | True if customer name required for delivery orders | [optional] 
**AllowChefNotes** | **Boolean** | True if the customer is allowed enter custom notes with their orders | [optional] 
**EtaInPickupConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will be ready for collection | [optional] 
**EtaInDeliveryConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will delivered | [optional] 
**IsArchived** | **Boolean** | Is the Store Archived | [optional] 
**IsPublished** | **Boolean** | Is the Store Published | [optional] 
**Name** | **String** | Name | [optional] 
**EmailAddress** | **String** | Email address (visible to customers) | [optional] 
**StaffLanguage** | **String** | Staff Language (used for communication with the staff)  Emails, Printouts etc | [optional] 
**SalesChannelTypes** | **[String]** | Sales Channel Types | [optional] 



## Enum: PrintoutLayoutTypeEnum


* `Default` (value: `"Default"`)

* `Centra` (value: `"Centra"`)

* `SmallChefNotes` (value: `"SmallChefNotes"`)

* `SmallChefNotesAndCentra` (value: `"SmallChefNotesAndCentra"`)





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





## Enum: [SalesChannelTypesEnum]


* `Web` (value: `"Web"`)

* `App` (value: `"App"`)

* `Kiosk` (value: `"Kiosk"`)

* `Pos` (value: `"Pos"`)

* `None` (value: `"None"`)




