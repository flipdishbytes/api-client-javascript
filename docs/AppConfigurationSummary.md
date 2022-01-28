# Flipdish.AppConfigurationSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Application Configuration Public Id | 
**AppId** | **String** | Whitelabel App Id | 
**IsEnabled** | **Boolean** | Is Enabled | 
**PhysicalRestaurants** | [**[ConfiguredPhysicalRestaurant]**](ConfiguredPhysicalRestaurant.md) | List of restaurants | 
**ConfigurationType** | **String** | Configuration Type | [optional] 
**StoreSelectorType** | **String** | Store Selector Type | [optional] 
**AppStoreAppId** | **String** | AppStore App Id | 
**Name** | **String** | Name | 
**Description** | **String** | Description | 
**Logo** | **String** | Logo | [optional] 
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




