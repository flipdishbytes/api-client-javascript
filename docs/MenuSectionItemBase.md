# Flipdish.MenuSectionItemBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**MenuItemId** | **Number** | Menu Item Id | [optional] 


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




