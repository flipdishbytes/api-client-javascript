# Flipdish.Menu

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuId** | **Number** | Menu identifier | [optional] 
**ModifiedTime** | **Date** | Last modified time | [optional] 
**VersionNumber** | **Number** | Menu version | [optional] 
**ImageUrl** | **String** | Image url | [optional] 
**Name** | **String** | Name of Menu, only shown in portal | [optional] 
**Locked** | **Boolean** | Locked: is menu locked against modifcation | [optional] 
**MenuSections** | [**[MenuSection]**](MenuSection.md) | Menu sections (startes, main etc) | [optional] 
**TaxRates** | [**[MenuTaxRate]**](MenuTaxRate.md) | Menu tax rates | [optional] 
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




