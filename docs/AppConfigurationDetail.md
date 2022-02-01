# Flipdish.AppConfigurationDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Application Configuration Public Id | 
**AppId** | **String** | Whitelabel App Id | 
**AppStoreAppId** | **String** | App Store App Id | 
**IsEnabled** | **Boolean** | Is Enabled | 
**PhysicalRestaurants** | **[Number]** | Physical Restaurant Id's | [optional] 
**Settings** | [**[Setting]**](Setting.md) | Settings | [optional] 
**ConfigurationType** | **String** | Configuration Type  <example>ExternalLink</example><example>FlipdishHosted</example> | 
**StoreSelectorType** | **String** | Store Selector Type | 
**FieldGroups** | [**[FieldGroup]**](FieldGroup.md) | Field Groups | [optional] 
**SetupInstructions** | **String** | Setup Instructions | [optional] 
**ExternalSetupLink** | **String** | External Setup Link | [optional] 
**OAuthAppId** | **String** | OAuth App Id | 
**Name** | **String** | Name | 
**Description** | **String** | Description | 
**Logo** | **String** | Logo | [optional] 
**VerificationStatus** | **String** | Application verification status | 
**Tags** | **[String]** | Tags | 
**Regions** | **[String]** | Regions | 
**DeveloperName** | **String** | Developer Name | [optional] 


<a name="ConfigurationTypeEnum"></a>
## Enum: ConfigurationTypeEnum


* `ExternalLink` (value: `"ExternalLink"`)

* `FlipdishHosted` (value: `"FlipdishHosted"`)




<a name="StoreSelectorTypeEnum"></a>
## Enum: StoreSelectorTypeEnum


* `None` (value: `"None"`)

* `Single` (value: `"Single"`)

* `Multiple` (value: `"Multiple"`)




<a name="VerificationStatusEnum"></a>
## Enum: VerificationStatusEnum


* `Draft` (value: `"Draft"`)

* `Submitted` (value: `"Submitted"`)

* `Verified` (value: `"Verified"`)



