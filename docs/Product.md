# Flipdish.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CatalogItemId** | **String** | Unique catalog Item id | [optional] 
**IsArchived** | **Boolean** | Returns true if the item is archived | [optional] 
**Groups** | [**[GroupReference]**](GroupReference.md) | Collection of groups associated with this item | [optional] 
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




