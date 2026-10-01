# Flipdish.AppCompliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | App ID | [optional] 
**ComplianceType** | **String** | Type of compliance.  This controls if the Flipdish websites and apps display cookie consent banners and adjust cookies to be inline with various regulations.   You should set this correctly based on your region. | [optional] 
**AllowDisablingOfGdpr** | **Boolean** | For EU countries, we should not allow to change the option to “Default banner”, but all other countries should be able to do so. | [optional] 



## Enum: ComplianceTypeEnum


* `Default` (value: `"Default"`)

* `GdprCompliance` (value: `"GdprCompliance"`)




