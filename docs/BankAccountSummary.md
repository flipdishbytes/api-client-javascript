# FlipdishOpenApiV10.BankAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Id of this account | [optional] 
**storeNames** | **[String]** | Store Names that are attached to this account | [optional] 
**accountState** | **String** | Status of Account | [optional] 
**currencyCode** | **String** | Currency of Account | [optional] 
**stripeConnectedAccountInfo** | [**StripeConnectedAccountInfo**](StripeConnectedAccountInfo.md) | Information about the Stripe connected account associated with this bank account (if any) | [optional] 
**accountName** | **String** | Name of this account | [optional] 
**iban** | **String** | IBAN of this account | [optional] 
**swift** | **String** | SWIFT of this bank account | [optional] 
**nationalClearingCode** | **String** | National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ) | [optional] 
**populatedAccountFields** | [**[AccountFieldKeyValuePair]**](AccountFieldKeyValuePair.md) | A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored. | [optional] 
**rejectionReason** | **String** | Reason for Rejection | [optional] 
**businessType** | **String** | Business Type | [optional] 


<a name="AccountStateEnum"></a>
## Enum: AccountStateEnum


* `unverified` (value: `"Unverified"`)

* `awatingVerification` (value: `"AwatingVerification"`)

* `verified` (value: `"Verified"`)

* `grandfathered` (value: `"Grandfathered"`)




<a name="BusinessTypeEnum"></a>
## Enum: BusinessTypeEnum


* `individual` (value: `"Individual"`)

* `company` (value: `"Company"`)

* `nonProfit` (value: `"NonProfit"`)

* `governmentEntity` (value: `"GovernmentEntity"`)




