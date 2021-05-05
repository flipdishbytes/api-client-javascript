# FlipdishOpenApiV10.BluetoothTerminalStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serialNumber** | **String** | Serial Number | [optional] 
**softwareVersion** | **String** | Software Version | [optional] 
**deviceType** | **String** | Device Type | [optional] 
**status** | **String** | Device Status | [optional] 
**batteryLevel** | **Number** | Indication of the battery level from 0 to 1 | [optional] 
**updateTime** | **Date** | Last time the status was updated | [optional] 


<a name="DeviceTypeEnum"></a>
## Enum: DeviceTypeEnum


* `cHIPPER2X` (value: `"CHIPPER_2X"`)

* `COTS_DEVICE` (value: `"COTS_DEVICE"`)

* `vERIFONEP400` (value: `"VERIFONE_P400"`)

* `wISEPAD3` (value: `"WISEPAD_3"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `notConnected` (value: `"Not_Connected"`)

* `connecting` (value: `"Connecting"`)

* `connected` (value: `"Connected"`)




