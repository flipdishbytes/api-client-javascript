# Flipdish.AccountFieldDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Depending on the Key, the field&#39;s value will be stored in a different field in PayeeBankAccountData | [optional] 
**DisplayName** | **String** | Display name of the field | [optional] 
**Type** | **String** | There are some fields that are of type known to the frontend (IBAN, Swift) -- for those frontend should use its own validation library, e.g. ibantools | [optional] 
**MinLength** | **Number** | Minimum length of the field | [optional] 
**MaxLength** | **Number** | Maximum length of the field | [optional] 
**DigitsOnly** | **Boolean** | Is the field digits (numeric) only | [optional] 
**Regex** | **String** | Regex for validating the field (if specified) | [optional] 



## Enum: KeyEnum


* `Iban` (value: `"Iban"`)

* `AccountNumber` (value: `"AccountNumber"`)

* `RoutingNumber` (value: `"RoutingNumber"`)

* `BSB` (value: `"BSB"`)

* `BranchCode` (value: `"BranchCode"`)

* `BankCode` (value: `"BankCode"`)

* `InstitutionNumber` (value: `"InstitutionNumber"`)

* `TransitNumber` (value: `"TransitNumber"`)

* `ClearingCode` (value: `"ClearingCode"`)

* `IfscCode` (value: `"IfscCode"`)

* `Clabe` (value: `"Clabe"`)

* `SortCode` (value: `"SortCode"`)

* `Swift` (value: `"Swift"`)





## Enum: TypeEnum


* `None` (value: `"None"`)

* `Iban` (value: `"Iban"`)




