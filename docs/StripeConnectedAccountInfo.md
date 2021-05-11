# Flipdish.StripeConnectedAccountInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountStatus** | **String** | Stripe connected account status | [optional] 
**StripeId** | **String** | Stripe connected account id | [optional] 
**CardPaymentStatus** | **String** | Current status of the Card Payment capability of the account | [optional] 


<a name="AccountStatusEnum"></a>
## Enum: AccountStatusEnum


* `Disabled` (value: `"Disabled"`)

* `Enabled` (value: `"Enabled"`)

* `AdditionalInformationRequired` (value: `"AdditionalInformationRequired"`)

* `PendingVerification` (value: `"PendingVerification"`)

* `Unverified` (value: `"Unverified"`)

* `Rejected` (value: `"Rejected"`)

* `UpdateExternalAccount` (value: `"UpdateExternalAccount"`)




<a name="CardPaymentStatusEnum"></a>
## Enum: CardPaymentStatusEnum


* `Inactive` (value: `"Inactive"`)

* `Pending` (value: `"Pending"`)

* `Active` (value: `"Active"`)

* `Unrequested` (value: `"Unrequested"`)




