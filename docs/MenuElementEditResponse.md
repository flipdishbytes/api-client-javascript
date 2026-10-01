# Flipdish.MenuElementEditResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SectionName** | **String** | Section name | [optional] 
**ItemName** | **String** | Item name | [optional] 
**OptionSetName** | **String** | Option Set name | [optional] 
**OptionSetItemName** | **String** | Element name | [optional] 
**MenuElementId** | **Number** | Holds the information for the A and CNAME Records of a domain. | [optional] 
**MenuElementType** | **String** | Type of menu element | [optional] 
**ValidationCode** | **String** | Validation message for menu element issue | [optional] 



## Enum: MenuElementTypeEnum


* `Item` (value: `"Item"`)

* `OptionSetItem` (value: `"OptionSetItem"`)





## Enum: ValidationCodeEnum


* `Success` (value: `"Success"`)

* `MinimumCountViolation` (value: `"MinimumCountViolation"`)

* `MasterOptionSetViolation` (value: `"MasterOptionSetViolation"`)

* `IncorrectElementTypeInMenu` (value: `"IncorrectElementTypeInMenu"`)

* `DBFailed` (value: `"DBFailed"`)




