# Flipdish.LoyaltyCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignId** | **Number** | Id of campaign | [optional] 
**Statistics** | [**CampaignStatistics**](CampaignStatistics.md) |  | [optional] 
**Stores** | [**[StoreCampaignStartTime]**](StoreCampaignStartTime.md) | Stores this campaign applies to with campaign start time in Utc | [optional] 
**PublicId** | **String** | Permanent reference to the item. | [optional] 
**OrdersBeforeReceivingVoucher** | **Number** | Number of orders customer needs to make, before receiving voucher | [optional] 
**PercentDiscountAmount** | **Number** | Discount amount in percents | [optional] 
**MaxDiscount** | **Number** | Maximum discount for percentage discounts | [optional] 
**RoundingStrategy** | **Number** | Controls how the loyalty voucher&#39;s amount is rounded | [optional] 
**ShouldIncludeOrdersWithLoyaltyVoucher** | **Boolean** | Controls whether we should include orders with loyalty vouchers in the campaign calculation | [optional] 
**VoucherValidPeriodDays** | **Number** | Number of days for which the voucher will be valid. | [optional] 
**IncludeDeliveryFee** | **Boolean** | Discount will include delivery fee | [optional] 
**AutoApplyResultingVouchers** | **Boolean** | Automatically apply resulting vouchers | [optional] 
**IncludeExistingOrders** | **Boolean** | Campaign will apply to existing orders | [optional] 
**IsEnabled** | **Boolean** | Is campaign enabled | [optional] 
**StoreIds** | **[Number]** | Ids of stores this campaign applies to | [optional] 
**AppId** | **String** | The app that this campaign belongs to. | [optional] 
**ForceDiscount** | **Boolean** | Controls whether the voucher generated from this campaign will override discount exclusions | [optional] 


