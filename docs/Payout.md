# Flipdish.Payout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayoutId** | **Number** | The id of the payout. | [optional] 
**PayeeBankAccountId** | **Number** | Bank account identifier | [optional] 
**AccountName** | **String** | Account name of the payout destination | [optional] 
**PayoutStatus** | **String** | Status of the payout | [optional] 
**CreatedDate** | **Date** | Date payout was created | [optional] 
**PeriodStartTime** | **Date** | This payout includes operations after at this date (inclusive) | [optional] 
**PeriodEndTime** | **Date** | This payout includes operations before at this date (exclusive) | [optional] 
**DestinationBank** | **String** | Destination bank name | [optional] 
**DestinationAccount** | **String** | Last 4 digits of the destination bank IBAN | [optional] 
**Amount** | **Number** | Payout amount | [optional] 
**PayoutType** | **String** | Type of payout source | [optional] 
**Currency** | **String** | Payout currency | [optional] 
**CutoffDate** | **Date** | Payouts before this date do not have a details breakdown | [optional] 
**OnlineSalesAmount** | **Number** | Payout online sales amount | [optional] 
**OnlineSalesDeliveryCharges** | **Number** | Payout online sales delivery charges | [optional] 
**OnlineSalesTips** | **Number** | Payout online sales tips | [optional] 
**OnlineSalesServiceCharges** | **Number** | Payout online sales service charges | [optional] 
**OnlineSalesRefundedFees** | **Number** | Payout online sales refunded fees | [optional] 
**OnlineSalesFees** | **Number** | Payout online sales fees | [optional] 
**PosSalesFees** | **Number** | Payout online sales fees | [optional] 
**OnlineSalesRefundedAmount** | **Number** | Payout online sales refunded amount | [optional] 
**PosSalesRefundedAmount** | **Number** | POS Payout online sales refunded amount | [optional] 
**OnlineSalesTax** | **Number** | Payout online sales tax | [optional] 
**TotalOnlineRevenue** | **Number** | Payout total online revenue | [optional] 
**CashSalesFees** | **Number** | Payout cash sales fees | [optional] 
**CashSalesRefundedFees** | **Number** | Payout cash sales refunded fees | [optional] 
**CustomerCashFees** | **Number** | Payout cash fees charged to customer | [optional] 
**SalesFeesVat** | **Number** | Payout sales fees vat | [optional] 
**TotalFees** | **Number** | Payout total fees | [optional] 
**TotalOnlineRevenueAdjustments** | **Number** | Payout total online revenue adjustments | [optional] 
**ChargebackAmount** | **Number** | Payout chargeback amount | [optional] 
**PosSalesChargebackAmount** | **Number** | POS Payout chargeback amount | [optional] 
**ChargebackRefundedFees** | **Number** | Payout chargeback refunded fees | [optional] 
**TotalChargebackCost** | **Number** | Payout chargebacks total cost | [optional] 
**TotalOtherCharges** | **Number** | Payout other charges total | [optional] 
**OpeningBalance** | **Number** | Payout opening balance | [optional] 
**ClosingBalance** | **Number** | Payout closing balance | [optional] 
**PayGreenSalesAmount** | **Number** | Amount of sales through PayGreen (restaurant vouchers) | [optional] 
**DeliveryIntegrationFee** | **Number** | Third party integration delivery fee | [optional] 
**DeliveryIntegrationTipFee** | **Number** | Third party integration delivery tip fee | [optional] 
**TotalThirdPartyFees** | **Number** | Total third party integration fees | [optional] 
**PosSalesAmount** | **Number** | POS sales amount | [optional] 
**PosSalesTax** | **Number** | POS sales tax | [optional] 
**TipsOnPosSales** | **Number** | Tips on POS sales | [optional] 



## Enum: PayoutStatusEnum


* `Pending` (value: `"Pending"`)

* `InTransit` (value: `"InTransit"`)

* `Paid` (value: `"Paid"`)

* `Failed` (value: `"Failed"`)

* `Cancelled` (value: `"Cancelled"`)





## Enum: PayoutTypeEnum


* `Internal` (value: `"Internal"`)

* `Stripe` (value: `"Stripe"`)





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




