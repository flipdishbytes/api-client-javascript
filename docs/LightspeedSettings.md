# FlipdishOpenApiV10.LightspeedSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **String** | Company Id | [optional] 
**useOAuth** | **Boolean** | Use OAuth for authentication | [optional] 
**enabled** | **Boolean** | Enabled | [optional] 
**estimatedMinutesForDelivery** | **Number** | Estimated minutes for delivery | [optional] 
**estimatedMinutesForCollection** | **Number** | Estimated minutes for collection | [optional] 
**geographicLocation** | **String** | Geographic location (euc1, nae1, euw2, ....)) | [optional] 
**establishment** | **Boolean** | Is the CompanyId an establishment (kind of the store of a group of store) | [optional] 
**voucherId** | **String** | The Lightspeed voucher identifier to map with our | [optional] 
**deliveryFeeId** | **String** | The Lightspeed delivery fee identifier to map with our | [optional] 
**processingFeeId** | **String** | The Lightspeed processing fee identifier to map with our | [optional] 
**priceType** | **String** | Which price to choose from Lightspeed menu | [optional] 
**menuId** | **Number** | The menu id of the store | [optional] 
**collectionTableId** | **Number** | Collection Table ID to send orders | [optional] 
**deliveryTableId** | **Number** | Delivery Table ID to send orders | [optional] 
**collectionTableIds** | **{String: String}** | Collection Table IDs to send orders to | [optional] 
**deliveryTableIds** | **{String: String}** | Delivery Table IDs to send orders to | [optional] 
**useTaxInclusivePrices** | **Boolean** | Exclude tax | [optional] 
**skipStatusCheckAndAcceptOrderAfterSending** | **Boolean** | WARNING: only use this option if the Liteserver is not synchronizing within max 5 minutes with Lightspeed cloud! | [optional] 


<a name="PriceTypeEnum"></a>
## Enum: PriceTypeEnum


* `_default` (value: `"Default"`)

* `takeaway` (value: `"Takeaway"`)

* `delivery` (value: `"Delivery"`)




