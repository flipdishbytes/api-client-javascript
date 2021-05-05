# FlipdishOpenApiV10.CreateFullMenu

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of Menu, only shown in portal | [optional] 
**imageUrl** | **String** | Image url | [optional] 
**menuSections** | [**[CreateFullMenuSection]**](CreateFullMenuSection.md) | Menu sections (startes, main etc) | [optional] 
**taxRates** | [**[CreateMenuTaxRate]**](CreateMenuTaxRate.md) | Menu tax rates | [optional] 
**displaySectionLinks** | **Boolean** | Display menu section link on UI | [optional] 
**menuSectionBehaviour** | **String** | Menu section behaviour | [optional] 
**taxType** | **String** | Tax type | [optional] 


<a name="MenuSectionBehaviourEnum"></a>
## Enum: MenuSectionBehaviourEnum


* `expandSingle` (value: `"ExpandSingle"`)

* `expandMultiple` (value: `"ExpandMultiple"`)




<a name="TaxTypeEnum"></a>
## Enum: TaxTypeEnum


* `includedInBasePrice` (value: `"IncludedInBasePrice"`)

* `excludedFromBasePrice` (value: `"ExcludedFromBasePrice"`)




