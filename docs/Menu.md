# Flipdish.Menu

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuId** | **Number** | Menu identifier | [optional] 
**ModifiedTime** | **Date** | Last modified time | [optional] 
**VersionNumber** | **Number** | Menu version | [optional] 
**ImageName** | **String** | Image Name | [optional] 
**ImageUrl** | **String** | Image url | [optional] 
**Name** | **String** | Name of Menu, only shown in portal | [optional] 
**Locked** | **Boolean** | Locked: is menu locked against modifcation | [optional] 
**MenuSections** | [**[MenuSection]**](MenuSection.md) | Menu sections (startes, main etc) | [optional] 
**TaxRates** | [**[MenuTaxRate]**](MenuTaxRate.md) | Menu tax rates | [optional] 
**AppId** | **String** | Identifier of App the menu is attached to | [optional] 
**DisplaySectionLinks** | **Boolean** | Display menu section link on UI | [optional] 
**MenuSectionBehaviour** | **String** | Menu section behaviour | [optional] 
**TaxType** | **String** | Tax type | [optional] 
**IsIntegrated** | **Boolean** | Flag to indicate if the menu is integrated (contains metadata) | [optional] 



## Enum: MenuSectionBehaviourEnum


* `ExpandSingle` (value: `"ExpandSingle"`)

* `ExpandMultiple` (value: `"ExpandMultiple"`)





## Enum: TaxTypeEnum


* `IncludedInBasePrice` (value: `"IncludedInBasePrice"`)

* `ExcludedFromBasePrice` (value: `"ExcludedFromBasePrice"`)




