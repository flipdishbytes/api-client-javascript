# Flipdish.BankAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Number** | Id of this account | [optional] 
**StoreNames** | **[String]** | Store Names that are attached to this account | [optional] 
**AccountState** | **String** | Status of Account | [optional] 
**CurrencyCode** | **String** | Currency of Account | [optional] 
**StripeConnectedAccountInfo** | [**StripeConnectedAccountInfo**](StripeConnectedAccountInfo.md) | Information about the Stripe connected account associated with this bank account (if any) | [optional] 
**AccountName** | **String** | Name of this account | [optional] 
**Iban** | **String** | IBAN of this account | [optional] 
**Swift** | **String** | SWIFT of this bank account | [optional] 
**NationalClearingCode** | **String** | National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ) | [optional] 
**PopulatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored. | [optional] 
**RejectionReason** | **String** | Reason for Rejection | [optional] 
**BusinessType** | **String** | Business Type | [optional] 


<a name="AccountStateEnum"></a>
## Enum: AccountStateEnum


* `Unverified` (value: `"Unverified"`)

* `AwatingVerification` (value: `"AwatingVerification"`)

* `Verified` (value: `"Verified"`)

* `Grandfathered` (value: `"Grandfathered"`)




<a name="BusinessTypeEnum"></a>
## Enum: BusinessTypeEnum


* `Individual` (value: `"Individual"`)

* `Company` (value: `"Company"`)

* `NonProfit` (value: `"NonProfit"`)

* `GovernmentEntity` (value: `"GovernmentEntity"`)




