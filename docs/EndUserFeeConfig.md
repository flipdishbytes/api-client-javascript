# Flipdish.EndUserFeeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | **String** | The order channel this fee config applies to | [optional] 
**PaymentMethod** | **String** | The payment method this fee config applies to | [optional] 
**MinOrderAmount** | **Number** | Order amount below which MinFixedFee is charged instead of the percent/fixed calculation | [optional] 
**MinFixedFee** | **Number** | Fixed fee charged for orders at or below MinOrderAmount | [optional] 
**PercentFee** | **Number** | Percentage fee applied to the order amount | [optional] 
**FixedFee** | **Number** | Fixed fee compared against the percentage fee - the greater of the two is charged | [optional] 
**Cap** | **Number** | Maximum fee that can be charged | [optional] 



## Enum: ChannelEnum


* `WebApp` (value: `"WebApp"`)

* `InStore` (value: `"InStore"`)

* `Kiosk` (value: `"Kiosk"`)





## Enum: PaymentMethodEnum


* `Cash` (value: `"Cash"`)

* `Card` (value: `"Card"`)




