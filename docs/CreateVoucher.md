# Flipdish.CreateVoucher

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VoucherType** | **String** | Voucher Type | [optional] 
**Promotion** | [**CreatePromotion**](CreatePromotion.md) | Create Promotion details | [optional] 
**CreditNoteDetails** | [**CreditNoteDetails**](CreditNoteDetails.md) | Credit note details | [optional] 
**LumpDiscountDetails** | [**LumpDiscountDetails**](LumpDiscountDetails.md) | Lump discount details | [optional] 
**PercentDiscountDetails** | [**PercentDiscountDetails**](PercentDiscountDetails.md) | Percent discount details | [optional] 
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
**StartDate** | **Date** | Voucher Starts On (Time in UTC) | [optional] 
**ExpiryDate** | **Date** | Voucher Expires On (Time in UTC) | [optional] 
**ChannelRestrictions** | **[String]** | Limit the channels this voucher can be used on | [optional] 
**VoucherSubType** | **String** | Voucher Subtype | [optional] 
**CustomerId** | **Number** | Customer UserID | [optional] 
**MaxRedemptions** | **Number** | Maximum number of times the voucher can be redeemed (used) | [optional] 


<a name="VoucherTypeEnum"></a>
## Enum: VoucherTypeEnum


* `PercentageDiscount` (value: `"PercentageDiscount"`)

* `LumpDiscount` (value: `"LumpDiscount"`)

* `AddItem` (value: `"AddItem"`)

* `CreditNote` (value: `"CreditNote"`)

* `FreeDelivery` (value: `"FreeDelivery"`)




<a name="[ChannelRestrictionsEnum]"></a>
## Enum: [ChannelRestrictionsEnum]


* `Ios` (value: `"Ios"`)

* `Android` (value: `"Android"`)

* `Web` (value: `"Web"`)

* `Kiosk` (value: `"Kiosk"`)

* `Pos` (value: `"Pos"`)

* `Google` (value: `"Google"`)




<a name="VoucherSubTypeEnum"></a>
## Enum: VoucherSubTypeEnum


* `None` (value: `"None"`)

* `SignUp` (value: `"SignUp"`)

* `Loyalty` (value: `"Loyalty"`)

* `Loyalty25` (value: `"Loyalty25"`)

* `Retention` (value: `"Retention"`)

* `SecondaryRetention` (value: `"SecondaryRetention"`)

* `Custom` (value: `"Custom"`)




