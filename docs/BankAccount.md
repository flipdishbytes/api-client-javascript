# FlipdishOpenApiV10.BankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Id of this account | [optional] 
**accountName** | **String** | Name of this account | [optional] 
**iban** | **String** | IBAN of this account | [optional] 
**swift** | **String** | SWIFT of this bank account | [optional] 
**populatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields should be ignored. | [optional] 
**accountState** | **String** | Status of Account | [optional] 
**storeNames** | **[String]** | Store Names that are attached to this account | [optional] 
**bankAddress** | **String** | Address lf the bank | [optional] 
**bankCountryCode** | **String** | CountryCode of the Bank Account | [optional] 
**accountHolderAddress** | **String** | Account Holders Address | [optional] 
**accountHolderCountryCode** | **String** | Account Holders Country Code | [optional] 
**vatNumber** | **String** | Account Holders Vat Number | [optional] 


<a name="AccountStateEnum"></a>
## Enum: AccountStateEnum


* `unverified` (value: `"Unverified"`)

* `awatingVerification` (value: `"AwatingVerification"`)

* `verified` (value: `"Verified"`)

* `grandfathered` (value: `"Grandfathered"`)




