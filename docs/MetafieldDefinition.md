# Flipdish.MetafieldDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsReadOnly** | **Boolean** | Indicates if a definition can be edited or not | [optional] 
**OwnerEntity** | **String** | The Metafield will extend the specified {Flipdish.Metafields.PublicModels.V1.MetafieldDefinitionBase.OwnerEntity} | [optional] 
**Key** | **String** | Key of the metafield.  The key must have two parts, separated by a dot. The first part acts as a category, for organizational purposes.  The parts can be composed of lowercase letters, numbers, hyphen and underscore | 
**ValueType** | **String** | The excepted type for the Value field | [optional] 
**Name** | **String** | Field Name | 
**Description** | **String** | Field Description | [optional] 
**Behaviors** | **[String]** | Enable Metafield Behaviors | [optional] 
**MetafieldDefinitionRecommendationId** | **Number** | Metafield Recommendation Id | [optional] 



## Enum: OwnerEntityEnum


* `CatalogItem` (value: `"CatalogItem"`)

* `CatalogGroup` (value: `"CatalogGroup"`)

* `Menu` (value: `"Menu"`)





## Enum: ValueTypeEnum


* `Boolean` (value: `"Boolean"`)

* `Json` (value: `"Json"`)

* `SingleLineString` (value: `"SingleLineString"`)

* `MultiLineString` (value: `"MultiLineString"`)





## Enum: [BehaviorsEnum]


* `SendToOrder` (value: `"SendToOrder"`)

* `SendToMenu` (value: `"SendToMenu"`)




