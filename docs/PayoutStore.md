# Flipdish.PayoutStore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StoreId** | **Number** | The id of the Store. | [optional] 
**StoreName** | **String** | Name of the store | [optional] 
**Amount** | **Number** | Amount of the payout for this Store | [optional] 
**OnlineRevenue** | [**RevenueDetail**](RevenueDetail.md) | Revenue details (DEPRECATED: Use Revenue) | [optional] 
**Revenue** | [**RevenueDetail**](RevenueDetail.md) | Revenue details | [optional] 
**RevenueAdjustments** | [**RevenueAdjustmentsDetails**](RevenueAdjustmentsDetails.md) | Revenue Adjustments breakdown | [optional] 
**FlipdishFees** | [**FlipdishFeesDetails**](FlipdishFeesDetails.md) | Fees breakdown | [optional] 
**Chargebacks** | [**ChargebackDetails**](ChargebackDetails.md) | Chargebacks breakdown | [optional] 
**OtherCharges** | [**OtherChargesDetails**](OtherChargesDetails.md) | Breakdown of other charges | [optional] 
**Balance** | [**BalanceDetails**](BalanceDetails.md) | Period opening and closing balance | [optional] 
**PosRevenue** | [**PosRevenueDetails**](PosRevenueDetails.md) | Breakdown of POS charges | [optional] 


