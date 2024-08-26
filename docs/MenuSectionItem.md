# Flipdish.MenuSectionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActualPrice** | **Number** | Actual price - the minimum price possible when all required option set items prices are included. | [optional] 
**MenuItemOptionSets** | [**[MenuItemOptionSet]**](MenuItemOptionSet.md) | Menu item option sets | [optional] 
**DailySpecialHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Daily special hours | [optional] 
**PublicId** | **String** | Permanent reference to the item. | [optional] 
**TaxRateName** | **String** | Tax rate name | [optional] 
**TaxRateId** | **Number** | TaxRate | [optional] 
**TaxValue** | **Number** | TaxValue - the tax associated with this item, based on TaxRate / TaxType and Currency (currency determines decimal point precision) | [optional] 
**ExcludeFromVoucherDiscounting** | **Boolean** | If true, the item is excluded from voucher discount calculations | [optional] 
**Metadata** | [**[CreateMetadata]**](CreateMetadata.md) | List of metadata | [optional] 
**CatalogItemId** | **String** | Catalog item Id when the Item is associated to a Product | [optional] 
**Name** | **String** | Menu item name (like \&quot;Korma\&quot;) | [optional] 
**Description** | **String** | Description (like \&quot;A lovely dish from the east\&quot;) | [optional] 
**SpicinessRating** | **String** | Spiciness rating | [optional] 
**Price** | **Number** | Price - this is only used when there is no master option set and should be set to 0 if a master option set exists. | [optional] 
**DepositReturnFee** | **Number** | An optional fee that can be added to the price of the item. | [optional] 
**DisplayOrder** | **Number** | Display order | [optional] 
**Alcohol** | **Boolean** | To be set true if the item or an option of the item contains an alcoholic drink. | [optional] 
**IsAvailable** | **Boolean** | True if we accept orders for this item still | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**DisableVouchers** | **Boolean** | If true, then vouchers won&#39;t be applied for this item | [optional] 
**ImageName** | **String** | Image url | [optional] 
**ImageUrl** | **String** | Image url | [optional] 
**MenuItemId** | **Number** | Menu Item Id | [optional] 



## Enum: SpicinessRatingEnum


* `NotRated` (value: `"NotRated"`)

* `Mild` (value: `"Mild"`)

* `Medium` (value: `"Medium"`)

* `Hot` (value: `"Hot"`)





## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




