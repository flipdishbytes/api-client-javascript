# Flipdish.CreateFullMenuItemOptionSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuItemOptionSetId** | **Number** | Menu item option set identifier | [optional] 
**MenuItemOptionSetItems** | [**[CreateFullMenuItemOptionSetItem]**](CreateFullMenuItemOptionSetItem.md) | Option set items | [optional] 
**Name** | **String** | Menu item option set name | [optional] 
**IsMasterOptionSet** | **Boolean** | Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\"with ketchup\") or modifier (\"large\"). | [optional] 
**DisplayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**MinSelectCount** | **Number** | Minimum items must be selected | [optional] 
**MaxSelectCount** | **Number** | Maximum number of items can be selected | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 


<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




