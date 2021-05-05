# FlipdishOpenApiV10.Teammate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**teammateId** | **String** | Unique indentifier | [optional] 
**name** | **String** | Name | [optional] 
**lastActivity** | **Date** | Last activity | [optional] 
**appId** | **String** | Access level is for this App | [optional] 
**invitationStatus** | **String** | Invitation status | [optional] 
**email** | **String** | Email address | [optional] 
**appAccessLevel** | **String** | App access level | [optional] 
**hasAccessToAllStores** | **Boolean** | The user has access to all stores for the app (including new stores that added later) | [optional] 
**storeIds** | **[Number]** | Store IDs the user has access to (if HasAccessToAllStores is false) | [optional] 


<a name="InvitationStatusEnum"></a>
## Enum: InvitationStatusEnum


* `pending` (value: `"Pending"`)

* `accepted` (value: `"Accepted"`)

* `expired` (value: `"Expired"`)




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




