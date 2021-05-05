# FlipdishOpenApiV10.VoucherSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voucherId** | **Number** | Voucher Id | [optional] 
**code** | **String** | Voucher Code | [optional] 
**status** | **String** | Voucher Status | [optional] 
**voucherType** | **String** | Voucher Type | [optional] 
**voucherSubType** | **String** | Voucher Sub Type | [optional] 
**description** | **String** | Voucher Description (Visible on printout) | [optional] 
**isEnabled** | **Boolean** | Is voucher enabled | [optional] 


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




