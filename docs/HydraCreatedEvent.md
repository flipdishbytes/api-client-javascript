# Flipdish.HydraCreatedEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | [**UserEventInfo**](UserEventInfo.md) |  | [optional] 
**DeviceId** | **String** | Device id | [optional] 
**HydraUserId** | **Number** | Zeus Hydra user id | [optional] 
**UserType** | **String** | Hydra user type (Kiosk / Terminal) as integer. Prefer {Flipdish.PublicModels.V1.Events.Hydra.HydraCreatedEvent.DeviceType}. | [optional] 
**DeviceType** | **String** | Hydra device type (Kiosk / Terminal), serialized as string. | [optional] 
**EventName** | **String** | The event name | [optional] 
**FlipdishEventId** | **String** | The identitfier of the event | [optional] 
**CreateTime** | **Date** | The time of creation of the event | [optional] 
**Position** | **Number** | Position | [optional] 
**AppId** | **String** | App id | [optional] 
**OrgId** | **String** | Org id | [optional] 
**IpAddress** | **String** | Ip Address | [optional] 
**ActivityId** | **String** | Activity Id | [optional] 
**ActivityType** | **String** | Activity Type | [optional] 



## Enum: UserTypeEnum


* `Kiosk` (value: `"Kiosk"`)

* `Terminal` (value: `"Terminal"`)

* `LegacyPrinter` (value: `"LegacyPrinter"`)





## Enum: DeviceTypeEnum


* `Kiosk` (value: `"Kiosk"`)

* `Terminal` (value: `"Terminal"`)

* `LegacyPrinter` (value: `"LegacyPrinter"`)




