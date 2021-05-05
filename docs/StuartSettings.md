# FlipdishOpenApiV10.StuartSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | Client Id | [optional] 
**clientSecret** | **String** | Client Secret | [optional] 
**enabled** | **Boolean** | Enabled | [optional] 
**webhookUrlBasicAuthentication** | **String** | Webhook url to settle in the Stuart portal | [optional] 
**minutesToPickupBeforeThanDeliveryTime** | **Number** | MinutesToPickupBeforeThanDeliveryTime | [optional] 
**packageType** | **String** | Package type | [optional] 
**transportType** | **String** | Transport type | [optional] 
**cancelOrderIfStuartCancelDelivery** | **Boolean** | Determines if Flipdish order should be cancel when Stuart cancels delivery | [optional] 
**transportPrices** | [**StuartSettingsTransportPrices**](StuartSettingsTransportPrices.md) |  | [optional] 


<a name="PackageTypeEnum"></a>
## Enum: PackageTypeEnum


* `xsmall` (value: `"Xsmall"`)

* `small` (value: `"Small"`)

* `medium` (value: `"Medium"`)

* `large` (value: `"Large"`)

* `xlarge` (value: `"Xlarge"`)




<a name="TransportTypeEnum"></a>
## Enum: TransportTypeEnum


* `bike` (value: `"Bike"`)

* `cargobike` (value: `"Cargobike"`)

* `cargobikexl` (value: `"Cargobikexl"`)

* `motorbike` (value: `"Motorbike"`)

* `motorbikexl` (value: `"Motorbikexl"`)

* `car` (value: `"Car"`)

* `van` (value: `"Van"`)




