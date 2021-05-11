# Flipdish.Teammate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeammateId** | **String** | Unique indentifier | [optional] 
**Name** | **String** | Name | [optional] 
**LastActivity** | **Date** | Last activity | [optional] 
**AppId** | **String** | Access level is for this App | [optional] 
**InvitationStatus** | **String** | Invitation status | [optional] 
**Email** | **String** | Email address | [optional] 
**AppAccessLevel** | **String** | App access level | [optional] 
**HasAccessToAllStores** | **Boolean** | The user has access to all stores for the app (including new stores that added later) | [optional] 
**StoreIds** | **[Number]** | Store IDs the user has access to (if HasAccessToAllStores is false) | [optional] 


<a name="InvitationStatusEnum"></a>
## Enum: InvitationStatusEnum


* `Pending` (value: `"Pending"`)

* `Accepted` (value: `"Accepted"`)

* `Expired` (value: `"Expired"`)




<a name="AppAccessLevelEnum"></a>
## Enum: AppAccessLevelEnum


* `None` (value: `"None"`)

* `Owner` (value: `"Owner"`)

* `StoreOwner` (value: `"StoreOwner"`)

* `ManagedOwner` (value: `"ManagedOwner"`)

* `StoreManager` (value: `"StoreManager"`)

* `StoreStaff` (value: `"StoreStaff"`)

* `StoreReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `FinanceManger` (value: `"FinanceManger"`)




