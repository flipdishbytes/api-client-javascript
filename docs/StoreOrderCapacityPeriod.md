# Flipdish.StoreOrderCapacityPeriod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxOrderNumberPerStoreInterval** | **Number** | The maximum number of orders per each store order interval in this order capacity period.  E.g. for a period from 9:00 till 11:00, if the store&#39;s interval is 10 minutes, and MaxOrderNumberPerStoreInterval is set to 5,  it means that within each 10-minute interval between 9:00 and 11:00 (i.e. 9:00-9:10, 9:10-9:20, .. , 10:50-11:00) it will be possible to  request at most 5 orders. | [optional] 
**DayOfTheWeek** | **String** | Day of the week the period pertains to | [optional] 
**PeriodStartHour** | **Number** | The hour the period starts at | [optional] 
**PeriodStartMinutes** | **Number** | The minutes after the hour the period starts at | [optional] 
**PeriodEndHour** | **Number** | The hour the period ends at | [optional] 
**PeriodEndMinutes** | **Number** | The minutes after the hour the period ends at | [optional] 



## Enum: DayOfTheWeekEnum


* `Sunday` (value: `"Sunday"`)

* `Monday` (value: `"Monday"`)

* `Tuesday` (value: `"Tuesday"`)

* `Wednesday` (value: `"Wednesday"`)

* `Thursday` (value: `"Thursday"`)

* `Friday` (value: `"Friday"`)

* `Saturday` (value: `"Saturday"`)




