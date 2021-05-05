# FlipdishOpenApiV10.HydraDeviceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hydraConfigId** | **Number** | Flipdish internal device identifier | [optional] 
**deviceId** | **String** | Device Id or Serial Number | [optional] 
**deviceType** | **String** | Type of the device | [optional] 
**status** | **String** | Status of the device | [optional] 
**deviceName** | **String** | Device Name | [optional] 
**storeNames** | [**[HydraStoreData]**](HydraStoreData.md) | Store Names | [optional] 
**lastPollUtc** | **Date** | Last poll time in UTC | [optional] 
**version** | **String** | Version of the device | [optional] 
**buildNumber** | **String** | Build number of the device | [optional] 
**gitSha** | **String** | SHA of the commit | [optional] 
**gitBranch** | **String** | Build branch | [optional] 


<a name="DeviceTypeEnum"></a>
## Enum: DeviceTypeEnum


* `kiosk` (value: `"Kiosk"`)

* `terminal` (value: `"Terminal"`)

* `legacyPrinter` (value: `"LegacyPrinter"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `online` (value: `"Online"`)

* `possiblyOffline` (value: `"PossiblyOffline"`)

* `offline` (value: `"Offline"`)




