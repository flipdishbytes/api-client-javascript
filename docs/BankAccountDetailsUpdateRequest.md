# Flipdish.BankAccountDetailsUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAddress** | **String** | Address of the bank account | [optional] 
**AccountHolderAddress** | **String** | Address of the payee | [optional] 
**VatNumber** | **String** | Account Holders Vat Number | [optional] 
**StoreIds** | **[Number]** | List of stores to attach to Account | [optional] 
**BankName** | **String** | Name of Bank | [optional] 
**AccountName** | **String** | Name of this account | [optional] 
**Iban** | **String** | IBAN of this account | [optional] 
**Swift** | **String** | SWIFT of this bank account | [optional] 
**NationalClearingCode** | **String** | National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ) | [optional] 
**PopulatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored. | [optional] 
**RejectionReason** | **String** | Reason for Rejection | [optional] 
**BusinessType** | **String** | Business Type | [optional] 


<a name="BusinessTypeEnum"></a>
## Enum: BusinessTypeEnum


* `Individual` (value: `"Individual"`)

* `Company` (value: `"Company"`)

* `NonProfit` (value: `"NonProfit"`)

* `GovernmentEntity` (value: `"GovernmentEntity"`)




