# Flipdish.CreateAppStoreApp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigurationType** | **String** | Configuration type  <example>External link</example><example>Flipdish hosted</example> | 
**StoreSelectorType** | **String** | Store selector type | 
**FieldGroups** | [**[FieldGroup]**](FieldGroup.md) | Field groups | [optional] 
**SetupInstructions** | **String** | Setup instructions | [optional] 
**ExternalSetupLink** | **String** | External setup link | [optional] 
**OAuthAppId** | **String** | OAuth app id | 
**TeammateAppAccessLevel** | **String** | Teammate app access level | [optional] 
**PermissionsType** | **String** | Permissions type | 
**Name** | **String** | Name | 
**Description** | **String** | Description | 
**IsEnabled** | **Boolean** | Is application enabled | [optional] 
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




<a name="TeammateAppAccessLevelEnum"></a>
## Enum: TeammateAppAccessLevelEnum


* `Owner` (value: `"Owner"`)

* `StoreOwner` (value: `"StoreOwner"`)

* `ManagedOwner` (value: `"ManagedOwner"`)

* `Integrator` (value: `"Integrator"`)

* `StoreManager` (value: `"StoreManager"`)

* `StoreStaff` (value: `"StoreStaff"`)

* `StoreReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `FinanceManger` (value: `"FinanceManger"`)




<a name="PermissionsTypeEnum"></a>
## Enum: PermissionsTypeEnum


* `Teammate` (value: `"Teammate"`)




