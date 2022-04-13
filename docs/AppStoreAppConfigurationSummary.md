# Flipdish.AppStoreAppConfigurationSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique App store app configuration id | 
**AppId** | **String** | App Id | 
**IsEnabled** | **Boolean** | Is enabled | 
**Stores** | [**[ConfiguredStore]**](ConfiguredStore.md) | List of stores | 
**ConfigurationType** | **String** | Configuration type | [optional] 
**StoreSelectorType** | **String** | Store selector type | [optional] 
**AppStoreAppId** | **String** | Unique App store app id | 
**Name** | **String** | Name of Appstore app | 
**Description** | **String** | Description | 
**Logo** | **String** | Logo | [optional] 
**DeveloperName** | **String** | Developer name | [optional] 


<a name="ConfigurationTypeEnum"></a>
## Enum: ConfigurationTypeEnum


* `ExternalLink` (value: `"ExternalLink"`)

* `FlipdishHosted` (value: `"FlipdishHosted"`)




<a name="StoreSelectorTypeEnum"></a>
## Enum: StoreSelectorTypeEnum


* `None` (value: `"None"`)

* `Single` (value: `"Single"`)

* `Multiple` (value: `"Multiple"`)




