# FlipdishOpenApiV10.BankAccountDetailsUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAddress** | **String** | Address of the bank account | [optional] 
**accountHolderAddress** | **String** | Address of the payee | [optional] 
**vatNumber** | **String** | Account Holders Vat Number | [optional] 
**storeIds** | **[Number]** | List of stores to attach to Account | [optional] 
**bankName** | **String** | Name of Bank | [optional] 
**accountName** | **String** | Name of this account | [optional] 
**iban** | **String** | IBAN of this account | [optional] 
**swift** | **String** | SWIFT of this bank account | [optional] 
**nationalClearingCode** | **String** | National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ) | [optional] 
**populatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored. | [optional] 
**rejectionReason** | **String** | Reason for Rejection | [optional] 
**businessType** | **String** | Business Type | [optional] 


<a name="BusinessTypeEnum"></a>
## Enum: BusinessTypeEnum


* `individual` (value: `"Individual"`)

* `company` (value: `"Company"`)

* `nonProfit` (value: `"NonProfit"`)

* `governmentEntity` (value: `"GovernmentEntity"`)




