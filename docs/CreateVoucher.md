# FlipdishOpenApiV10.CreateVoucher

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voucherType** | **String** | Voucher Type | [optional] 
**stores** | **[Number]** | Stores that this voucher applies to | [optional] 
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


<a name="VoucherTypeEnum"></a>
## Enum: VoucherTypeEnum


* `percentageDiscount` (value: `"PercentageDiscount"`)

* `lumpDiscount` (value: `"LumpDiscount"`)

* `addItem` (value: `"AddItem"`)

* `creditNote` (value: `"CreditNote"`)




