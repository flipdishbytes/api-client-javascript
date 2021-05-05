# FlipdishOpenApiV10.Store

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **Number** | Store identifier | [optional] 
**storeGroupId** | **Number** | Store group id to which this store belongs | [optional] 
**address** | [**StoreAddress**](StoreAddress.md) | Store address | [optional] 
**deliveryZones** | [**[DeliveryZone]**](DeliveryZone.md) | Delivery zones | [optional] 
**apmPhoneNumber** | **String** | Automated Phone Marketing number | [optional] 
**pickupHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Pickup hours | [optional] 
**deliveryHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Delivery hours | [optional] 
**menuId** | **Number** | Menu identifier | [optional] 
**orderConfirmationMessageOverrideDelivery** | **String** | Overridden confirmation message for delivery orders | [optional] 
**orderConfirmationMessageOverridePickup** | **String** | Overridden confirmation message for pickup orders | [optional] 
**printoutLayoutType** | **String** | Printout layout | [optional] 
**storeNotes** | [**[StoreNote]**](StoreNote.md) | Store notes | [optional] 
**microsoftTimeZone** | **String** | Microsoft Time Zone Index Values (https://msdn.microsoft.com/en-us/library/ms912391)  (Editable through store coordinate change) | [optional] 
**ianaTimeZone** | **String** | IANA Time Zone (https://www.iana.org/time-zones)  (Editable through store coordinate change) | [optional] 
**currency** | **String** | Currency (derived from Store Group) | [optional] 
**preOrderDeliveryEnabled** | **Boolean** | Is PerOrder Enabled for Delivery | [optional] 
**preOrderPickupEnabled** | **Boolean** | Is PerOrder Enabled for Pickup | [optional] 
**logoUrl** | **String** | Url for logo image | [optional] 
**phoneNumber** | **String** | Phone number | [optional] 
**alwaysAppearOpen** | **Boolean** | True if the store always appears open | [optional] 
**preOrderEnabled** | **Boolean** | True if the store accepts pre-orders | [optional] 
**takeOutEnabled** | **Boolean** | True if the store accepts take-out orders | [optional] 
**tableServiceEnabled** | **Boolean** | True if the store has table service | [optional] 
**dineInEnabled** | **Boolean** | True if the store accepts dine-in orders | [optional] 
**allowPreOrdersAndTableService** | **Boolean** | True if both pre-orders and talbe service can be enabled | [optional] 
**pickupEnabled** | **Boolean** | True if the store accepts pickup orders | [optional] 
**deliveryEnabled** | **Boolean** | True if the store accepts delivery orders | [optional] 
**cardOrderDeliveryEnabled** | **Boolean** | True if the store accepts card payment for delivery orders | [optional] 
**cashOrdersDeliveryEnabled** | **Boolean** | True if the store accepts cash payment for delivery orders | [optional] 
**cardOrdersPickupEnabled** | **Boolean** | True if the store accepts card payment for pickup orders | [optional] 
**cashOrdersPickupEnabled** | **Boolean** | True if the store accepts cash payment for pickup orders | [optional] 
**tipsEnabled** | **Boolean** | True if the store accepts tips | [optional] 
**automaticallyAcceptOrders** | **Boolean** | True if the stores orders are automatically accepted in Flipdish | [optional] 
**openForDelivery** | **Boolean** | True if the store is open for delivery | [optional] 
**openForPickup** | **Boolean** | True if the store is open for pickup | [optional] 
**minimumPickupOrderAmount** | **Number** | Minimum pickup order amount | [optional] 
**requireCustomerNameForPickup** | **Boolean** | True if customer name required for pickup orders | [optional] 
**gdprCustomerPhoneNumbers** | **Boolean** | Mask your customers phone numbers printed on receipts and reduce the amout of personally identifiable customer information that is exposed. | [optional] 
**requireCustomerNameForDelivery** | **Boolean** | True if customer name required for delivery orders | [optional] 
**allowChefNotes** | **Boolean** | True if the customer is allowed enter custom notes with their orders | [optional] 
**etaInPickupConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will be ready for collection | [optional] 
**etaInDeliveryConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will delivered | [optional] 
**isArchived** | **Boolean** | Is the Store Archived | [optional] 
**isPublished** | **Boolean** | Is the Store Published | [optional] 
**name** | **String** | Name | [optional] 
**emailAddress** | **String** | Email address (visible to customers) | [optional] 
**staffLanguage** | **String** | Staff Language (used for communication with the staff)  Emails, Printouts etc | [optional] 


<a name="PrintoutLayoutTypeEnum"></a>
## Enum: PrintoutLayoutTypeEnum


* `_default` (value: `"Default"`)

* `centra` (value: `"Centra"`)

* `smallChefNotes` (value: `"SmallChefNotes"`)

* `smallChefNotesAndCentra` (value: `"SmallChefNotesAndCentra"`)




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




