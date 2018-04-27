# Flipdish.MenuItemOptionSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menuItemOptionSetId** | **Number** | Menu item option set identifier | [optional] 
**imageUrl** | **String** | Image url | [optional] 
**menuItemOptionSetItems** | [**[MenuItemOptionSetItem]**](MenuItemOptionSetItem.md) | Option set items | [optional] 
**name** | **String** | Menu item option set name | [optional] 
**isMasterOptionSet** | **Boolean** | Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\&quot;with ketchup\&quot;) or modifier (\&quot;large\&quot;). | [optional] 
**displayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**minSelectCount** | **Number** | Minimum items must be selected | [optional] 
**maxSelectCount** | **Number** | Maximum number of items can be selected | [optional] 
**cellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 


<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)




