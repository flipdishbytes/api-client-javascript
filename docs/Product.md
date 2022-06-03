# Flipdish.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CatalogItemId** | **String** | Unique catalog Item id | [optional] 
**IsArchived** | **Boolean** | Returns true if the item is archived | [optional] 
**Groups** | [**[GroupReference]**](GroupReference.md) | Collection of groups associated with this item | [optional] 
**Metafields** | [**[Metafield]**](Metafield.md) | Collection of metafields | [optional] 
**ProductType** | **String** | Type of item (Product, Modifier, etc) | 
**Sku** | **String** | Stock Keeping Unit (SKU) | 
**Name** | **String** | Product name | 
**Description** | **String** | Product description | [optional] 
**Price** | **Number** | Product price | 
**ImageFileName** | **String** | Image File Name | [optional] 
**Alcohol** | **Boolean** | Product contains alcohol | [optional] 


<a name="ProductTypeEnum"></a>
## Enum: ProductTypeEnum


* `Product` (value: `"Product"`)

* `Modifier` (value: `"Modifier"`)




