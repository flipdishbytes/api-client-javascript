# FlipdishOpenApiV10.PreOrderConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leadTimeMinutes** | **Number** | Lead Time in Minutes | [optional] 
**intervalMinutes** | **Number** | Interval in minutes | [optional] 
**maxOrderAheadDays** | **Number** | Max Days to order ahead | [optional] 
**includeAsap** | **Boolean** | Show ASAP as option | [optional] 
**includeMoreGranularInitialTime** | **Boolean** | Granual Init' Time | [optional] 
**cutOffTimePreviousDayBasic** | **String** | Cut off time previous day | [optional] 
**cutOffTimeCurrentDayBasic** | **String** | Cut off time current day | [optional] 
**preOrderTimeDisplayType** | **String** | Type of time displayed. | [optional] 
**alwaysAppearOpen** | **Boolean** | Specifies whether a customer can pre-order outside the store opening hours or not. | [optional] 
**requireExplicitSelectAlways** | **Boolean** | Force customer to select collection time. | [optional] 


<a name="PreOrderTimeDisplayTypeEnum"></a>
## Enum: PreOrderTimeDisplayTypeEnum


* `singleTime` (value: `"SingleTime"`)

* `startAndEndTime` (value: `"StartAndEndTime"`)

* `dayOnly` (value: `"DayOnly"`)




