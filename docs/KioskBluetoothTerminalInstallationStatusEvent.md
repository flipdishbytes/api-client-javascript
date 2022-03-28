# Flipdish.KioskBluetoothTerminalInstallationStatusEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeviceId** | **String** | Device Id of the Kiosk | [optional] 
**BluetoothTerminalType** | **String** | Terminal Type | [optional] 
**BluetoothTerminalSerialNumber** | **String** | Serial number of the terminal | [optional] 
**User** | [**UserEventInfo**](UserEventInfo.md) | User who made the change | [optional] 
**Progress** | **Number** | Update Install Progress for Card Reader | [optional] 
**EventName** | **String** | The event name | [optional] 
**FlipdishEventId** | **String** | The identitfier of the event | [optional] 
**CreateTime** | **Date** | The time of creation of the event | [optional] 
**Position** | **Number** | Position | [optional] 
**AppId** | **String** | App id | [optional] 
**IpAddress** | **String** | Ip Address | [optional] 


<a name="BluetoothTerminalTypeEnum"></a>
## Enum: BluetoothTerminalTypeEnum


* `CHIPPER_2X` (value: `"CHIPPER_2X"`)

* `COTS_DEVICE` (value: `"COTS_DEVICE"`)

* `VERIFONE_P400` (value: `"VERIFONE_P400"`)

* `WISEPAD_3` (value: `"WISEPAD_3"`)




