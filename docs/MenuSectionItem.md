# Flipdish.MenuSectionItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuItemId** | **Number** | Menu item identifier. This ID may change at any time. Use `PublicId` if you need a permanent reference to the item. | [optional] 
**ActualPrice** | **Number** | Actual price - the minimum price possible when all required option set items prices are included. | [optional] 
**MenuItemOptionSets** | [**[MenuItemOptionSet]**](MenuItemOptionSet.md) | Menu item option sets | [optional] 
**DailySpecialHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Daily special hours | [optional] 
**PublicId** | **String** | Permanent reference to the item. | [optional] 
**TaxRateName** | **String** | Tax rate name | [optional] 
**TaxRateId** | **Number** | TaxRate | [optional] 
**TaxValue** | **Number** | TaxValue - the tax associated with this item, based on TaxRate / TaxType and Currency (currency determines decimal point precision) | [optional] 
**Metadata** | [**[CreateMetadata]**](CreateMetadata.md) | List of metadata | [optional] 
**CatalogItemId** | **String** | Catalog item Id when the Item is associated to a Product | [optional] 
**Name** | **String** | Menu item name (like \"Korma\") | [optional] 
**Description** | **String** | Description (like \"A lovely dish from the east\") | [optional] 
**SpicinessRating** | **String** | Spiciness rating | [optional] 
**Price** | **Number** | Price - this is only used when there is no master option set and should be set to 0 if a master option set exists. | [optional] 
**DisplayOrder** | **Number** | Display order | [optional] 
**Alcohol** | **Boolean** | To be set true if the item or an option of the item contains an alcoholic drink. | [optional] 
**IsAvailable** | **Boolean** | True if we accept orders for this item still | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**DisableVouchers** | **Boolean** | If true, then vouchers won't be applied for this item | [optional] 
**ImageName** | **String** | Image url | [optional] 
**ImageUrl** | **String** | Image url | [optional] 


<a name="SpicinessRatingEnum"></a>
## Enum: SpicinessRatingEnum


* `NotRated` (value: `"NotRated"`)

* `Mild` (value: `"Mild"`)

* `Medium` (value: `"Medium"`)

* `Hot` (value: `"Hot"`)




<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




