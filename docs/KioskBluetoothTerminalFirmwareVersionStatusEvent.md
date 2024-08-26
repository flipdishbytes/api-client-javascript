# Flipdish.KioskBluetoothTerminalFirmwareVersionStatusEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeviceId** | **String** | Device Id of the Kiosk | [optional] 
**SerialNumber** | **String** | Serial Number of the device | [optional] 
**HasFirmwareUpdate** | **Boolean** | Indicates if Payment Terminal has Firmware Update | [optional] 
**HasConfigUpdate** | **Boolean** | Indicates if Payment Terminal has Config Update | [optional] 
**HasKeyUpdate** | **Boolean** | Indicates if Payment Terminal has Key Update | [optional] 
**UpdateTimeEstimate** | **String** | ETA to install the update | [optional] 
**UserEventInfo** | [**UserEventInfo**](UserEventInfo.md) |  | [optional] 
**EventName** | **String** | The event name | [optional] 
**FlipdishEventId** | **String** | The identitfier of the event | [optional] 
**CreateTime** | **Date** | The time of creation of the event | [optional] 
**Position** | **Number** | Position | [optional] 
**AppId** | **String** | App id | [optional] 
**IpAddress** | **String** | Ip Address | [optional] 



## Enum: UpdateTimeEstimateEnum


* `LessThanOneMinute` (value: `"LessThanOneMinute"`)

* `OneToTwoMinutes` (value: `"OneToTwoMinutes"`)

* `TwoToFiveMinutes` (value: `"TwoToFiveMinutes"`)

* `FiveToFifteenMinutes` (value: `"FiveToFifteenMinutes"`)




