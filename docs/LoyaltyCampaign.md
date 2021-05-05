# FlipdishOpenApiV10.LoyaltyCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **Number** | Id of campaign | [optional] 
**statistics** | [**CampaignStatistics**](CampaignStatistics.md) | Statistics of campaign | [optional] 
**stores** | [**[StoreCampaignStartTime]**](StoreCampaignStartTime.md) | Stores this campaign applies to with campaign start time in Utc | [optional] 
**ordersBeforeReceivingVoucher** | **Number** | Number of orders customer needs to make, before receiving voucher | [optional] 
**percentDiscountAmount** | **Number** | Discount amount in percents | [optional] 
**voucherValidPeriodDays** | **Number** | Number of days for which the voucher will be valid. | [optional] 
**includeDeliveryFee** | **Boolean** | Discount will include delivery fee | [optional] 
**autoApplyResultingVouchers** | **Boolean** | Automatically apply resulting vouchers | [optional] 
**includeExistingOrders** | **Boolean** | Campaign will apply to existing orders | [optional] 
**isEnabled** | **Boolean** | Is campaign enabled | [optional] 
**storeIds** | **[Number]** | Ids of stores this campaign applies to | [optional] 


