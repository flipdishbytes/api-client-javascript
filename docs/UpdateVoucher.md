# Flipdish.UpdateVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromotionId** | **Number** | Promotion ID to update | [optional] 
**PromotionName** | **String** | The updated name of the promotion | [optional] 
**PromotionAwardMenuItemPublicIds** | **[String]** | The updated menu items that the promotion awards | [optional] 
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




