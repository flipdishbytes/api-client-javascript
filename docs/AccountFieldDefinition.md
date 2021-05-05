# FlipdishOpenApiV10.AccountFieldDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | Depending on the Key, the field's value will be stored in a different field in PayeeBankAccountData | [optional] 
**displayName** | **String** | Display name of the field | [optional] 
**type** | **String** | There are some fields that are of type known to the frontend (IBAN, Swift) -- for those frontend should use its own validation library, e.g. ibantools | [optional] 
**minLength** | **Number** | Minimum length of the field | [optional] 
**maxLength** | **Number** | Maximum length of the field | [optional] 
**digitsOnly** | **Boolean** | Is the field digits (numeric) only | [optional] 
**regex** | **String** | Regex for validating the field (if specified) | [optional] 


<a name="KeyEnum"></a>
## Enum: KeyEnum


* `iban` (value: `"Iban"`)

* `accountNumber` (value: `"AccountNumber"`)

* `routingNumber` (value: `"RoutingNumber"`)

* `BSB` (value: `"BSB"`)

* `branchCode` (value: `"BranchCode"`)

* `bankCode` (value: `"BankCode"`)

* `institutionNumber` (value: `"InstitutionNumber"`)

* `transitNumber` (value: `"TransitNumber"`)

* `clearingCode` (value: `"ClearingCode"`)

* `ifscCode` (value: `"IfscCode"`)

* `clabe` (value: `"Clabe"`)

* `sortCode` (value: `"SortCode"`)

* `swift` (value: `"Swift"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `none` (value: `"None"`)

* `iban` (value: `"Iban"`)




