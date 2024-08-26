# Flipdish.BankAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Number** | Id of this account | [optional] 
**AccountName** | **String** | Name of this account | [optional] 
**Iban** | **String** | IBAN of this account | [optional] 
**Swift** | **String** | SWIFT of this bank account | [optional] 
**PopulatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields should be ignored. | [optional] 
**AccountState** | **String** | Status of Account | [optional] 
**StoreNames** | **[String]** | Store Names that are attached to this account | [optional] 
**BankAddress** | **String** | Address lf the bank | [optional] 
**BankCountryCode** | **String** | CountryCode of the Bank Account | [optional] 
**AccountHolderAddress** | **String** | Account Holders Address | [optional] 
**AccountHolderCountryCode** | **String** | Account Holders Country Code | [optional] 
**VatNumber** | **String** | Account Holders Vat Number | [optional] 



## Enum: AccountStateEnum


* `Unverified` (value: `"Unverified"`)

* `AwatingVerification` (value: `"AwatingVerification"`)

* `Verified` (value: `"Verified"`)

* `Grandfathered` (value: `"Grandfathered"`)




