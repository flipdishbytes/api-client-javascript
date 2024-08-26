# Flipdish.CreateFullMenuItemOptionSetItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuItemOptionSetItemId** | **Number** | Menu item option set item identifier | [optional] 
**Metadata** | [**[CreateMetadata]**](CreateMetadata.md) | List of metadata | [optional] 
**TaxRateName** | **String** | Tax rate name | [optional] 
**NextMenuItemOptionSetId** | **Number** | if null, next option set is next. if -1, this is the final option set | [optional] 
**Name** | **String** | Name | [optional] 
**Price** | **Number** | Price | [optional] 
**DepositReturnFee** | **Number** | An optional fee that can be added to the price of the item. | [optional] 
**IsAvailable** | **Boolean** | Is available | [optional] 
**DisplayOrder** | **Number** | Display order. Displayed in ascending order. | [optional] 
**CellLayoutType** | **String** | Small | Medium | Large  Affects the layout of the menu. | [optional] 
**ImageUrl** | **String** | Image url | [optional] 



## Enum: CellLayoutTypeEnum


* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `HiddenImage` (value: `"HiddenImage"`)




