# Flipdish.MenuItemOptionSetBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Menu item option set name | [optional] 
**IsMasterOptionSet** | **Boolean** | Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\&quot;with ketchup\&quot;) or modifier (\&quot;large\&quot;). | [optional] 
**DisplayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**MinSelectCount** | **Number** | Minimum items must be selected | [optional] 
**MaxSelectCount** | **Number** | Maximum number of items can be selected | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**PublicId** | **String** | Permanent reference to the item. | [optional] 



## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




