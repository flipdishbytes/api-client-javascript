# Flipdish.BluetoothTerminalStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SerialNumber** | **String** | Serial Number | [optional] 
**SoftwareVersion** | **String** | Software Version | [optional] 
**DeviceType** | **String** | Device Type | [optional] 
**Status** | **String** | Device Status | [optional] 
**BatteryLevel** | **Number** | Indication of the battery level from 0 to 1 | [optional] 
**UpdateTime** | **Date** | Last time the status was updated | [optional] 
**ReaderId** | **String** | ReaderId for Stripe Terminal | [optional] 


<a name="DeviceTypeEnum"></a>
## Enum: DeviceTypeEnum


* `CHIPPER_2X` (value: `"CHIPPER_2X"`)

* `COTS_DEVICE` (value: `"COTS_DEVICE"`)

* `VERIFONE_P400` (value: `"VERIFONE_P400"`)

* `WISEPAD_3` (value: `"WISEPAD_3"`)

* `WISEPOS_E` (value: `"WISEPOS_E"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Not_Connected` (value: `"Not_Connected"`)

* `Connecting` (value: `"Connecting"`)

* `Connected` (value: `"Connected"`)

* `Online` (value: `"Online"`)

* `Offline` (value: `"Offline"`)




