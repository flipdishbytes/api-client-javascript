# FlipdishOpenApiV10.CreateTeammate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address | [optional] 
**appAccessLevel** | **String** | App access level | [optional] 
**hasAccessToAllStores** | **Boolean** | The user has access to all stores for the app (including new stores that added later) | [optional] 
**storeIds** | **[Number]** | Store IDs the user has access to (if HasAccessToAllStores is false) | [optional] 


<a name="AppAccessLevelEnum"></a>
## Enum: AppAccessLevelEnum


* `none` (value: `"None"`)

* `owner` (value: `"Owner"`)

* `storeOwner` (value: `"StoreOwner"`)

* `managedOwner` (value: `"ManagedOwner"`)

* `storeManager` (value: `"StoreManager"`)

* `storeStaff` (value: `"StoreStaff"`)

* `storeReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `financeManger` (value: `"FinanceManger"`)




