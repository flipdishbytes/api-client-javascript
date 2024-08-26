# Flipdish.LightspeedSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompanyId** | **String** | Company Id | [optional] 
**UseOAuth** | **Boolean** | Use OAuth for authentication | [optional] 
**Enabled** | **Boolean** | Enabled | [optional] 
**EstimatedMinutesForDelivery** | **Number** | Estimated minutes for delivery | [optional] 
**EstimatedMinutesForCollection** | **Number** | Estimated minutes for collection | [optional] 
**GeographicLocation** | **String** | Geographic location (euc1, nae1, euw2, ....)) | [optional] 
**Establishment** | **Boolean** | Is the CompanyId an establishment (kind of the store of a group of store) | [optional] 
**VoucherId** | **String** | The Lightspeed voucher identifier to map with our | [optional] 
**DeliveryFeeId** | **String** | The Lightspeed delivery fee identifier to map with our | [optional] 
**ProcessingFeeId** | **String** | The Lightspeed processing fee identifier to map with our | [optional] 
**PriceType** | **String** | Which price to choose from Lightspeed menu | [optional] 
**MenuId** | **Number** | The menu id of the store | [optional] 
**CollectionTableId** | **Number** | Collection Table ID to send orders | [optional] 
**DeliveryTableId** | **Number** | Delivery Table ID to send orders | [optional] 
**CollectionTableIds** | **{String: String}** | Collection Table IDs to send orders to | [optional] 
**DeliveryTableIds** | **{String: String}** | Delivery Table IDs to send orders to | [optional] 
**UseTaxInclusivePrices** | **Boolean** | Exclude tax | [optional] 
**SkipStatusCheckAndAcceptOrderAfterSending** | **Boolean** | WARNING: only use this option if the Liteserver is not synchronizing within max 5 minutes with Lightspeed cloud! | [optional] 
**SendTableNumberToTableId** | **Boolean** | Send Table Number to Table Id | [optional] 
**AddChefNoteToProduct** | **Boolean** | Add ChefNote To Product | [optional] 
**ChefNoteItemId** | **String** | The Lightspeed Chef Note Item Id to map | [optional] 
**ChefNoteModifierId** | **String** | The Lightspeed Chef Note Modifier Id to map | [optional] 
**ServiceChargeId** | **String** | The Lightspeed Service Charge Id to map | [optional] 



## Enum: PriceTypeEnum


* `Default` (value: `"Default"`)

* `Takeaway` (value: `"Takeaway"`)

* `Delivery` (value: `"Delivery"`)




