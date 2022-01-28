# Flipdish.HydraDeviceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HydraConfigId** | **Number** | Flipdish internal device identifier | [optional] 
**DeviceId** | **String** | Device Id or Serial Number | [optional] 
**DeviceType** | **String** | Type of the device | [optional] 
**Status** | **String** | Status of the device | [optional] 
**DeviceName** | **String** | Device Name | [optional] 
**StoreNames** | [**[HydraStoreData]**](HydraStoreData.md) | Store Names | [optional] 
**LastPollUtc** | **Date** | Last poll time in UTC | [optional] 
**Version** | **String** | Version of the device | [optional] 
**BuildNumber** | **String** | Build number of the device | [optional] 
**GitSha** | **String** | SHA of the commit | [optional] 
**GitBranch** | **String** | Build branch | [optional] 


<a name="DeviceTypeEnum"></a>
## Enum: DeviceTypeEnum


* `Kiosk` (value: `"Kiosk"`)

* `Terminal` (value: `"Terminal"`)

* `LegacyPrinter` (value: `"LegacyPrinter"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Online` (value: `"Online"`)

* `PossiblyOffline` (value: `"PossiblyOffline"`)

* `Offline` (value: `"Offline"`)




