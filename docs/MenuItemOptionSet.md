# FlipdishOpenApiV10.MenuItemOptionSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menuItemOptionSetId** | **Number** | Menu item option set identifier | [optional] 
**imageUrl** | **String** | Image url | [optional] 
**menuItemOptionSetItems** | [**[MenuItemOptionSetItem]**](MenuItemOptionSetItem.md) | Option set items | [optional] 
**publicId** | **String** | Permanent reference to the item. | [optional] 
**name** | **String** | Menu item option set name | [optional] 
**isMasterOptionSet** | **Boolean** | Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\"with ketchup\") or modifier (\"large\"). | [optional] 
**displayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**minSelectCount** | **Number** | Minimum items must be selected | [optional] 
**maxSelectCount** | **Number** | Maximum number of items can be selected | [optional] 
**cellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 


<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `small` (value: `"Small"`)

* `medium` (value: `"Medium"`)

* `large` (value: `"Large"`)

* `hiddenImage` (value: `"HiddenImage"`)




