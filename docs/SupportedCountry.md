# FlipdishOpenApiV10.SupportedCountry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **String** | Country code | [optional] 
**name** | **String** | Nice display name for a country | [optional] 
**phoneCode** | **Number** | Country internatinoal phone code prefix | [optional] 
**languageCode** | **String** | Language code | [optional] 
**languageName** | **String** | Language name | [optional] 
**otpNumber** | **String** | The phone number provided to Store staff which, in conjunction with a one-time-code, will connect them to the customer. | [optional] 
**supportNumber** | **String** | The store's support phone number, displayed to customers. | [optional] 
**addressLayout** | **String** | Address layout format. This changes the layout of address entry forms on the web app, iOS and Android app and should be set based on local custom. | [optional] 
**postCodeType** | **String** | Post code type | [optional] 
**supportRegion** | **String** | Supported region. This is not used. | [optional] 


<a name="AddressLayoutEnum"></a>
## Enum: AddressLayoutEnum


* `buildingFirst` (value: `"BuildingFirst"`)

* `addressFirst` (value: `"AddressFirst"`)

* `fullStreetAddressFirst` (value: `"FullStreetAddressFirst"`)




<a name="PostCodeTypeEnum"></a>
## Enum: PostCodeTypeEnum


* `none` (value: `"None"`)

* `postCode` (value: `"PostCode"`)

* `zip` (value: `"Zip"`)




<a name="SupportRegionEnum"></a>
## Enum: SupportRegionEnum


* `_default` (value: `"Default"`)

* `spain` (value: `"Spain"`)

* `benelux` (value: `"Benelux"`)




