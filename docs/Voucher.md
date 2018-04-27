# Flipdish.Voucher

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voucherId** | **Number** | Voucher identifier | [optional] 
**voucherType** | **String** | Voucher type | [optional] 
**isEnabled** | **Boolean** | Is voucher enabled | [optional] 
**isUsedUp** | **Boolean** | Is voucher used up | [optional] 
**voucherSubType** | **String** | Voucher subtype | [optional] 
**publicDescription** | **String** | Public description | [optional] 
**privateDescription** | **String** | Private description | [optional] 
**validFrom** | **Date** | Valid from | [optional] 
**expiry** | **Date** | Expiry | [optional] 
**voucherPayer** | **String** | Define who foots the bill for the voucher | [optional] 
**isVisibleToStore** | **Boolean** | Define whether we show the fact that a voucher was applied to the restaurant | [optional] 
**isReusable** | **Boolean** | Is reusable | [optional] 
**isValidForDeliveryOrders** | **Boolean** | Is valid for delivery orders | [optional] 
**isValidForPickupOrders** | **Boolean** | Is valid for pickup orders | [optional] 
**isValidForCardOrders** | **Boolean** | Is valid for card orders | [optional] 
**isValidForCashOrders** | **Boolean** | Is valid for cash orders | [optional] 
**isValidForFirstOrderOnly** | **Boolean** | Is valid for first order only | [optional] 
**minimumOrderAmount** | **Number** | Minimum order amount. | [optional] 
**isValidOncePerCustomer** | **Boolean** | Is valid once per customer | [optional] 
**autoApply** | **Boolean** | Auto apply | [optional] 
**autoApplyOrder** | **Number** | Auto apply order.  Lower numbers get applied first. | [optional] 
**includeDeliveryFee** | **Boolean** | Include delivery fee | [optional] 
**code** | **String** | Voucher code | [optional] 


<a name="VoucherTypeEnum"></a>
## Enum: VoucherTypeEnum


* `PercentageDiscount` (value: `"PercentageDiscount"`)

* `LumpDiscount` (value: `"LumpDiscount"`)

* `AddItem` (value: `"AddItem"`)

* `CreditNote` (value: `"CreditNote"`)




<a name="VoucherSubTypeEnum"></a>
## Enum: VoucherSubTypeEnum


* `None` (value: `"None"`)

* `SignUp` (value: `"SignUp"`)

* `Loyalty` (value: `"Loyalty"`)

* `Loyalty25` (value: `"Loyalty25"`)

* `Retention` (value: `"Retention"`)

* `SecondaryRetention` (value: `"SecondaryRetention"`)

* `Custom` (value: `"Custom"`)




<a name="VoucherPayerEnum"></a>
## Enum: VoucherPayerEnum


* `Flipdish` (value: `"Flipdish"`)

* `Store` (value: `"Store"`)




