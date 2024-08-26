# Flipdish.BankAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAddress** | **String** | Address lf the bank | [optional] 
**BankCountryCode** | **String** | CountryCode of the Bank Account | [optional] 
**AccountHolderAddress** | **String** | Account Holders Address | [optional] 
**AccountHolderCountryCode** | **String** | Account Holders Country Code | [optional] 
**VatNumber** | **String** | Account Holders Vat Number | [optional] 
**CurrencyCode** | **String** | Currency of Account | [optional] 
**StoreIds** | **[Number]** | List of stores to attach to Account | [optional] 
**BankName** | **String** | Name of Bank | [optional] 
**AccountName** | **String** | Name of this account | [optional] 
**Iban** | **String** | IBAN of this account | [optional] 
**Swift** | **String** | SWIFT of this bank account | [optional] 
**NationalClearingCode** | **String** | National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ) | [optional] 
**PopulatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored. | [optional] 
**RejectionReason** | **String** | Reason for Rejection | [optional] 
**BusinessType** | **String** | Business Type | [optional] 



## Enum: CurrencyCodeEnum


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





## Enum: BusinessTypeEnum


* `Individual` (value: `"Individual"`)

* `Company` (value: `"Company"`)

* `NonProfit` (value: `"NonProfit"`)

* `GovernmentEntity` (value: `"GovernmentEntity"`)




