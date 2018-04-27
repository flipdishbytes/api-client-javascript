# Flipdish.MenuSectionItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menuItemId** | **Number** | Menu item identifier | [optional] 
**actualPrice** | **Number** | Actual price - the minimum price possible when all required option set items prices are included. | [optional] 
**imageUrl** | **String** | Image url | [optional] 
**menuItemOptionSets** | [**[MenuItemOptionSet]**](MenuItemOptionSet.md) | Menu item option sets | [optional] 
**name** | **String** | Menu item name (like \&quot;Korma\&quot;) | [optional] 
**description** | **String** | Description (like \&quot;A lovely dish from the east\&quot;) | [optional] 
**spicinessRating** | **String** | Spiciness rating | [optional] 
**price** | **Number** | Price - this is only used when there is no master option set and should be set to 0 if a master option set exists. | [optional] 
**displayOrder** | **Number** | Display order | [optional] 
**alcohol** | **Boolean** | To be set true if the item or an option of the item contains an alcoholic drink. | [optional] 
**isAvailable** | **Boolean** | True if we accept orders for this item still | [optional] 
**cellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 


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




