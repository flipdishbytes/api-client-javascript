# FlipdishOpenApiV10.Menu

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menuId** | **Number** | Menu identifier | [optional] 
**modifiedTime** | **Date** | Last modified time | [optional] 
**versionNumber** | **Number** | Menu version | [optional] 
**imageUrl** | **String** | Image url | [optional] 
**name** | **String** | Name of Menu, only shown in portal | [optional] 
**locked** | **Boolean** | Locked: is menu locked against modifcation | [optional] 
**menuSections** | [**[MenuSection]**](MenuSection.md) | Menu sections (startes, main etc) | [optional] 
**taxRates** | [**[MenuTaxRate]**](MenuTaxRate.md) | Menu tax rates | [optional] 
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




