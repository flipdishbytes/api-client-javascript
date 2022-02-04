# Flipdish.MetafieldDefinitionRecommendation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerEntity** | **String** | The Metafield will extend the specified {Flipdish.PublicModels.V1.Metafields.MetafieldDefinitionBase.OwnerEntity} | [optional] 
**Key** | **String** | Key of the metafield.  Allowed characters: lowercase letters, numbers, hyphen, underscore and dot | 
**ValueType** | **String** | The excepted type for the Value field | [optional] 
**Name** | **String** | Field Name | 
**Description** | **String** | Field Description | [optional] 
**Behaviors** | **[String]** | Enable Metafield Behaviors | [optional] 


<a name="OwnerEntityEnum"></a>
## Enum: OwnerEntityEnum


* `CatalogItem` (value: `"CatalogItem"`)

* `CatalogGroup` (value: `"CatalogGroup"`)

* `Menu` (value: `"Menu"`)




<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `Json` (value: `"Json"`)

* `SingleLineString` (value: `"SingleLineString"`)

* `MultiLineString` (value: `"MultiLineString"`)




<a name="[BehaviorsEnum]"></a>
## Enum: [BehaviorsEnum]


* `SendToOrder` (value: `"SendToOrder"`)

* `SendToMenu` (value: `"SendToMenu"`)




