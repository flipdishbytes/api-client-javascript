# Flipdish.VoucherSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VoucherId** | **Number** | Voucher Id | [optional] 
**Code** | **String** | Voucher Code | [optional] 
**Status** | **String** | Voucher Status | [optional] 
**VoucherType** | **String** | Voucher Type | [optional] 
**VoucherSubType** | **String** | Voucher Sub Type | [optional] 
**Description** | **String** | Voucher Description (Visible on printout) | [optional] 
**IsEnabled** | **Boolean** | Is voucher enabled | [optional] 



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





## Enum: VoucherSubTypeEnum


* `None` (value: `"None"`)

* `SignUp` (value: `"SignUp"`)

* `Loyalty` (value: `"Loyalty"`)

* `Loyalty25` (value: `"Loyalty25"`)

* `Retention` (value: `"Retention"`)

* `SecondaryRetention` (value: `"SecondaryRetention"`)

* `Custom` (value: `"Custom"`)




