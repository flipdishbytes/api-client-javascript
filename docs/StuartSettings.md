# Flipdish.StuartSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Client Id | [optional] 
**ClientSecret** | **String** | Client Secret | [optional] 
**Enabled** | **Boolean** | Enabled | [optional] 
**WebhookUrlBasicAuthentication** | **String** | Webhook url to settle in the Stuart portal | [optional] 
**MinutesToPickupBeforeThanDeliveryTime** | **Number** | MinutesToPickupBeforeThanDeliveryTime | [optional] 
**PackageType** | **String** | Package type | [optional] 
**TransportType** | **String** | Transport type | [optional] 
**CancelOrderIfStuartCancelDelivery** | **Boolean** | Determines if Flipdish order should be cancel when Stuart cancels delivery | [optional] 
**TransportPrices** | [**StuartSettingsTransportPrices**](StuartSettingsTransportPrices.md) |  | [optional] 


<a name="PackageTypeEnum"></a>
## Enum: PackageTypeEnum


* `Xsmall` (value: `"Xsmall"`)

* `Small` (value: `"Small"`)

* `Medium` (value: `"Medium"`)

* `Large` (value: `"Large"`)

* `Xlarge` (value: `"Xlarge"`)




<a name="TransportTypeEnum"></a>
## Enum: TransportTypeEnum


* `Bike` (value: `"Bike"`)

* `Cargobike` (value: `"Cargobike"`)

* `Cargobikexl` (value: `"Cargobikexl"`)

* `Motorbike` (value: `"Motorbike"`)

* `Motorbikexl` (value: `"Motorbikexl"`)

* `Car` (value: `"Car"`)

* `Van` (value: `"Van"`)




