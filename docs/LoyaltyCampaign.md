# Flipdish.LoyaltyCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignId** | **Number** | Id of campaign | [optional] 
**Statistics** | [**CampaignStatistics**](CampaignStatistics.md) | Statistics of campaign | [optional] 
**Stores** | [**[StoreCampaignStartTime]**](StoreCampaignStartTime.md) | Stores this campaign applies to with campaign start time in Utc | [optional] 
**OrdersBeforeReceivingVoucher** | **Number** | Number of orders customer needs to make, before receiving voucher | [optional] 
**PercentDiscountAmount** | **Number** | Discount amount in percents | [optional] 
**VoucherValidPeriodDays** | **Number** | Number of days for which the voucher will be valid. | [optional] 
**IncludeDeliveryFee** | **Boolean** | Discount will include delivery fee | [optional] 
**AutoApplyResultingVouchers** | **Boolean** | Automatically apply resulting vouchers | [optional] 
**IncludeExistingOrders** | **Boolean** | Campaign will apply to existing orders | [optional] 
**IsEnabled** | **Boolean** | Is campaign enabled | [optional] 
**StoreIds** | **[Number]** | Ids of stores this campaign applies to | [optional] 


