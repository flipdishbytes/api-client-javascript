# Flipdish.TeammateBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppAccessLevel** | **String** | App access level | [optional] 
**HasAccessToAllStores** | **Boolean** | The user has access to all stores for the app (including new stores that added later) | [optional] 
**StoreIds** | **[Number]** | Store IDs the user has access to (if HasAccessToAllStores is false) | [optional] 
**PropertyIds** | **[String]** | Property Ids the user has access to (if HasAccessToAllStores is false) | [optional] 



## Enum: AppAccessLevelEnum


* `None` (value: `"None"`)

* `Owner` (value: `"Owner"`)

* `StoreOwner` (value: `"StoreOwner"`)

* `PropertyOwner` (value: `"PropertyOwner"`)

* `ManagedOwner` (value: `"ManagedOwner"`)

* `Integrator` (value: `"Integrator"`)

* `PropertyManager` (value: `"PropertyManager"`)

* `StoreManager` (value: `"StoreManager"`)

* `StoreStaff` (value: `"StoreStaff"`)

* `StoreReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `FinanceManger` (value: `"FinanceManger"`)

* `Onboarding` (value: `"Onboarding"`)

* `Support` (value: `"Support"`)




