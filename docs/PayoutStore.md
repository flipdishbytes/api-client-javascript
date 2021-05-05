# FlipdishOpenApiV10.PayoutStore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **Number** | The id of the Store. | [optional] 
**storeName** | **String** | Name of the store | [optional] 
**amount** | **Number** | Amount of the payout for this Store | [optional] 
**onlineRevenue** | [**RevenueDetail**](RevenueDetail.md) | Revenue details (DEPRECATED: Use Revenue) | [optional] 
**revenue** | [**RevenueDetail**](RevenueDetail.md) | Revenue details | [optional] 
**revenueAdjustments** | [**RevenueAdjustmentsDetails**](RevenueAdjustmentsDetails.md) | Revenue Adjustments breakdown | [optional] 
**flipdishFees** | [**FlipdishFeesDetails**](FlipdishFeesDetails.md) | Fees breakdown | [optional] 
**chargebacks** | [**ChargebackDetails**](ChargebackDetails.md) | Chargebacks breakdown | [optional] 
**otherCharges** | [**OtherChargesDetails**](OtherChargesDetails.md) | Breakdown of other charges | [optional] 
**balance** | [**BalanceDetails**](BalanceDetails.md) | Period opening and closing balance | [optional] 


