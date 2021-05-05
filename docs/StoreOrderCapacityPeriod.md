# FlipdishOpenApiV10.StoreOrderCapacityPeriod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxOrderNumberPerStoreInterval** | **Number** | The maximum number of orders per each store order interval in this order capacity period.  E.g. for a period from 9:00 till 11:00, if the store's interval is 10 minutes, and MaxOrderNumberPerStoreInterval is set to 5,  it means that within each 10-minute interval between 9:00 and 11:00 (i.e. 9:00-9:10, 9:10-9:20, .. , 10:50-11:00) it will be possible to  request at most 5 orders. | [optional] 
**dayOfTheWeek** | **String** | Day of the week the period pertains to | [optional] 
**periodStartHour** | **Number** | The hour the period starts at | [optional] 
**periodStartMinutes** | **Number** | The minutes after the hour the period starts at | [optional] 
**periodEndHour** | **Number** | The hour the period ends at | [optional] 
**periodEndMinutes** | **Number** | The minutes after the hour the period ends at | [optional] 


<a name="DayOfTheWeekEnum"></a>
## Enum: DayOfTheWeekEnum


* `sunday` (value: `"Sunday"`)

* `monday` (value: `"Monday"`)

* `tuesday` (value: `"Tuesday"`)

* `wednesday` (value: `"Wednesday"`)

* `thursday` (value: `"Thursday"`)

* `friday` (value: `"Friday"`)

* `saturday` (value: `"Saturday"`)




