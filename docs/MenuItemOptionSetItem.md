# Flipdish.MenuItemOptionSetItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuItemOptionSetItemId** | **Number** | Menu item option set item identifier | [optional] 
**PublicId** | **String** | Permanent reference to the item. | [optional] 
**Metadata** | [**[CreateMetadata]**](CreateMetadata.md) | List of metadata | [optional] 
**NextMenuItemOptionSetId** | **Number** | if null, next option set is next. if -1, this is the final option set | [optional] 
**ProductId** | **String** | Product Id when the OptionSet is associated to a Product | [optional] 
**TaxRateName** | **String** | Tax rate name | [optional] 
**TaxRateId** | **Number** |  | [optional] 
**TaxValue** | **Number** |  | [optional] 
**Name** | **String** | Name | [optional] 
**Price** | **Number** | Price | [optional] 
**IsAvailable** | **Boolean** | Is available | [optional] 
**DisplayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**ImageUrl** | **String** | Image url | [optional] 


<a name="CellLayoutTypeEnum"></a>
## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




