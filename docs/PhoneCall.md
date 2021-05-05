# FlipdishOpenApiV10.PhoneCall

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phoneCallId** | **Number** | Phone call id | [optional] 
**timeOfCall** | **Date** | Time of the call | [optional] 
**timeOfCallLocal** | **Date** | Time of the call, local to the store to which the call was made | [optional] 
**storeId** | **Number** | ID of the store that the call was TO | [optional] 
**storeName** | **String** | Name of the store that the call was TO | [optional] 
**callerName** | **String** | Name of the caller | [optional] 
**callerUserId** | **Number** | UserID of the caller | [optional] 
**callerNumber** | **String** | Phone number of the caller | [optional] 
**callLengthInSeconds** | **Number** | The amount of time the call took | [optional] 
**callStatus** | **String** | The status of the call | [optional] 


<a name="CallStatusEnum"></a>
## Enum: CallStatusEnum


* `queued` (value: `"Queued"`)

* `ringing` (value: `"Ringing"`)

* `inProgress` (value: `"InProgress"`)

* `completed` (value: `"Completed"`)

* `failed` (value: `"Failed"`)

* `busy` (value: `"Busy"`)

* `noAnswer` (value: `"NoAnswer"`)

* `unknown` (value: `"Unknown"`)

* `canceled` (value: `"Canceled"`)




