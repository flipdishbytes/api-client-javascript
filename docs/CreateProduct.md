# Flipdish.CreateProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | [**[CreateGroupReference]**](CreateGroupReference.md) | Collection of groups associated with this item | [optional] 
**Metafields** | [**[Metafield]**](Metafield.md) | Collection of metafields | [optional] 
**ItemType** | **String** | Type of item (Product, Modifier, etc) | 
**Sku** | **String** | Stock Keeping Unit (SKU) | 
**Name** | **String** | Item name | 
**Description** | **String** | Item description | [optional] 
**Price** | **Number** | Item price | 
**ImageFileName** | **String** | Image File Name | [optional] 
**Alcohol** | **Boolean** | item contains alcohol | [optional] 


<a name="ItemTypeEnum"></a>
## Enum: ItemTypeEnum


* `Product` (value: `"Product"`)

* `Modifier` (value: `"Modifier"`)




