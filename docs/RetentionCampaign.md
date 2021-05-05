# FlipdishOpenApiV10.RetentionCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **Number** | Id of campaign | [optional] 
**statistics** | [**CampaignStatistics**](CampaignStatistics.md) | Statistics of campaign | [optional] 
**stores** | [**[StoreCampaignStartTime]**](StoreCampaignStartTime.md) | Stores this campaign applies to with campaign start time in Utc | [optional] 
**notifyCustomerAfterMinutes** | **Number** | Time in minutes, after which customer will receive retention voucher if he/she does not order | [optional] 
**percentDiscountAmount** | **Number** | Discount amount in percents | [optional] 
**lumpDiscountAmount** | **Number** | Discount amount in sum of money | [optional] 
**voucherValidPeriodDays** | **Number** | Number of days for which the voucher will be valid. | [optional] 
**includeDeliveryFee** | **Boolean** | Discount will include delivery fee | [optional] 
**autoApplyResultingVouchers** | **Boolean** | Automatically apply resulting vouchers | [optional] 
**includeExistingOrders** | **Boolean** | Campaign will apply to existing orders | [optional] 
**isEnabled** | **Boolean** | Is campaign enabled | [optional] 
**storeIds** | **[Number]** | Ids of stores this campaign applies to | [optional] 


