# Flipdish.SupportedCountry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountryCode** | **String** | Country code | [optional] 
**Name** | **String** | Nice display name for a country | [optional] 
**PhoneCode** | **Number** | Country internatinoal phone code prefix | [optional] 
**LanguageCode** | **String** | Language code | [optional] 
**LanguageName** | **String** | Language name | [optional] 
**OtpNumber** | **String** | The phone number provided to Store staff which, in conjunction with a one-time-code, will connect them to the customer. | [optional] 
**SupportNumber** | **String** | The store's support phone number, displayed to customers. | [optional] 
**AddressLayout** | **String** | Address layout format. This changes the layout of address entry forms on the web app, iOS and Android app and should be set based on local custom. | [optional] 
**PostCodeType** | **String** | Post code type | [optional] 
**SupportRegion** | **String** | Supported region. This is not used. | [optional] 


<a name="AddressLayoutEnum"></a>
## Enum: AddressLayoutEnum


* `BuildingFirst` (value: `"BuildingFirst"`)

* `AddressFirst` (value: `"AddressFirst"`)

* `FullStreetAddressFirst` (value: `"FullStreetAddressFirst"`)




<a name="PostCodeTypeEnum"></a>
## Enum: PostCodeTypeEnum


* `None` (value: `"None"`)

* `PostCode` (value: `"PostCode"`)

* `Zip` (value: `"Zip"`)




<a name="SupportRegionEnum"></a>
## Enum: SupportRegionEnum


* `_Default` (value: `"Default"`)

* `Spain` (value: `"Spain"`)

* `Benelux` (value: `"Benelux"`)




