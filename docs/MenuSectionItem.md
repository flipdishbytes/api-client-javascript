# FlipdishOpenApiV10.MenuSectionItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menuItemId** | **Number** | Menu item identifier. This ID may change at any time. Use `PublicId` if you need a perminant reference to the item. | [optional] 
**actualPrice** | **Number** | Actual price - the minimum price possible when all required option set items prices are included. | [optional] 
**menuItemOptionSets** | [**[MenuItemOptionSet]**](MenuItemOptionSet.md) | Menu item option sets | [optional] 
**dailySpecialHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Daily special hours | [optional] 
**publicId** | **String** | Permanent reference to the item. | [optional] 
**metadata** | [**[CreateMetadata]**](CreateMetadata.md) | List of metadata | [optional] 
**name** | **String** | Menu item name (like \"Korma\") | [optional] 
**description** | **String** | Description (like \"A lovely dish from the east\") | [optional] 
**spicinessRating** | **String** | Spiciness rating | [optional] 
**price** | **Number** | Price - this is only used when there is no master option set and should be set to 0 if a master option set exists. | [optional] 
**displayOrder** | **Number** | Display order | [optional] 
**alcohol** | **Boolean** | To be set true if the item or an option of the item contains an alcoholic drink. | [optional] 
**isAvailable** | **Boolean** | True if we accept orders for this item still | [optional] 
**cellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**disableVouchers** | **Boolean** | If true, then vouchers won't be applied for this item | [optional] 
**imageUrl** | **String** | Image url | [optional] 


<a name="SpicinessRatingEnum"></a>
## Enum: SpicinessRatingEnum


* `notRated` (value: `"NotRated"`)

* `mild` (value: `"Mild"`)

* `medium` (value: `"Medium"`)

* `hot` (value: `"Hot"`)




<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `small` (value: `"Small"`)

* `medium` (value: `"Medium"`)

* `large` (value: `"Large"`)

* `hiddenImage` (value: `"HiddenImage"`)




