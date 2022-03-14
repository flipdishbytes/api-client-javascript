# Flipdish.AppStoreAppConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique App store app configuration id | 
**AppId** | **String** | App id | 
**AppStoreAppId** | **String** | App store app id | 
**IsEnabled** | **Boolean** | Is enabled | 
**PhysicalRestaurants** | **[Number]** | Stores id's | [optional] 
**Settings** | [**[Setting]**](Setting.md) | Settings | [optional] 
**VerificationStatus** | **String** | Application verification status | 
**Logo** | **String** | Logo | [optional] 
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
**Tags** | **[String]** | Tags | 
**Regions** | **[String]** | Regions | 
**DeveloperName** | **String** | Developer Name | [optional] 


<a name="VerificationStatusEnum"></a>
## Enum: VerificationStatusEnum


* `Draft` (value: `"Draft"`)

* `Submitted` (value: `"Submitted"`)

* `Verified` (value: `"Verified"`)




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




<a name="[TagsEnum]"></a>
## Enum: [TagsEnum]


* `PointOfSale` (value: `"PointOfSale"`)

* `DeliveryAndLogistics` (value: `"DeliveryAndLogistics"`)

* `CRM` (value: `"CRM"`)

* `GiftCard` (value: `"GiftCard"`)

* `Accounting` (value: `"Accounting"`)

* `LoyaltyAndMarketing` (value: `"LoyaltyAndMarketing"`)

* `Other` (value: `"Other"`)




<a name="[RegionsEnum]"></a>
## Enum: [RegionsEnum]


* `GB` (value: `"GB"`)

* `IE` (value: `"IE"`)

* `FR` (value: `"FR"`)

* `ES` (value: `"ES"`)

* `PT` (value: `"PT"`)

* `IT` (value: `"IT"`)

* `DE` (value: `"DE"`)

* `PL` (value: `"PL"`)

* `BE` (value: `"BE"`)

* `LU` (value: `"LU"`)

* `NL` (value: `"NL"`)

* `US` (value: `"US"`)

* `CA` (value: `"CA"`)

* `BG` (value: `"BG"`)

* `MX` (value: `"MX"`)

* `AU` (value: `"AU"`)

* `NZ` (value: `"NZ"`)



