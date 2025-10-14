# Flipdish.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Number** | User Id | [optional] 
**PhoneNumber** | **String** | Phone Number | [optional] 
**Email** | **String** | Email | [optional] 
**CustomerName** | **String** | Customer Name | [optional] 
**HasLoggedIn** | **Boolean** | Has Logged In | [optional] 
**UserDiscriminator** | **String** | User Discriminator | [optional] 
**TsCreate** | **Date** | Timestamp Created | [optional] 
**WhiteLabelConfigs** | [**[UserWhiteLabelConfig]**](UserWhiteLabelConfig.md) | WhiteLabel Configs | [optional] 
**UserType** | **String** | User Type | [optional] [readonly] 



## Enum: UserDiscriminatorEnum


* `All` (value: `"All"`)

* `ApplicationUsers` (value: `"ApplicationUsers"`)

* `RestaurantUsers` (value: `"RestaurantUsers"`)

* `HydraUsers` (value: `"HydraUsers"`)




