# Flipdish.HydraStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** |  | 
**StoreIds** | **[Number]** | Store to assign the hydra | [optional] 
**PropertyIds** | **[String]** | AuthZ Property ids for assigned stores | [optional] 
**IsRegistered** | **Boolean** | The device has been already registered | 
**PinCode** | **Number** | 6 digit PIN code (not starting with zero). | [optional] 
**Images** | **[String]** | Hydra images (covers) | [optional] 
**UserType** | **String** | Hydra User Type as integer. Prefer {Flipdish.PublicModels.V1.Hydra.HydraStatus.DeviceType}. | [optional] 
**DeviceType** | **String** | Hydra device type (Kiosk / Terminal), serialized as string. | [optional] 
**HydraUserId** | **Number** | Zeus Hydra user id | [optional] 



## Enum: UserTypeEnum


* `Kiosk` (value: `"Kiosk"`)

* `Terminal` (value: `"Terminal"`)

* `LegacyPrinter` (value: `"LegacyPrinter"`)





## Enum: DeviceTypeEnum


* `Kiosk` (value: `"Kiosk"`)

* `Terminal` (value: `"Terminal"`)

* `LegacyPrinter` (value: `"LegacyPrinter"`)




