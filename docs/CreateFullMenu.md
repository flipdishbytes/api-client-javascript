# Flipdish.CreateFullMenu

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of Menu, only shown in portal | [optional] 
**ImageUrl** | **String** | Image url | [optional] 
**MenuSections** | [**[CreateFullMenuSection]**](CreateFullMenuSection.md) | Menu sections (startes, main etc) | [optional] 
**TaxRates** | [**[CreateMenuTaxRate]**](CreateMenuTaxRate.md) | Menu tax rates | [optional] 
**DisplaySectionLinks** | **Boolean** | Display menu section link on UI | [optional] 
**MenuSectionBehaviour** | **String** | Menu section behaviour | [optional] 
**TaxType** | **String** | Tax type | [optional] 


<a name="MenuSectionBehaviourEnum"></a>
## Enum: MenuSectionBehaviourEnum


* `ExpandSingle` (value: `"ExpandSingle"`)

* `ExpandMultiple` (value: `"ExpandMultiple"`)




<a name="TaxTypeEnum"></a>
## Enum: TaxTypeEnum


* `IncludedInBasePrice` (value: `"IncludedInBasePrice"`)

* `ExcludedFromBasePrice` (value: `"ExcludedFromBasePrice"`)




