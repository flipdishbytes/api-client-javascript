# FlipdishOpenApiV10.StripeConnectedAccountInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountStatus** | **String** | Stripe connected account status | [optional] 
**stripeId** | **String** | Stripe connected account id | [optional] 
**cardPaymentStatus** | **String** | Current status of the Card Payment capability of the account | [optional] 


<a name="AccountStatusEnum"></a>
## Enum: AccountStatusEnum


* `disabled` (value: `"Disabled"`)

* `enabled` (value: `"Enabled"`)

* `additionalInformationRequired` (value: `"AdditionalInformationRequired"`)

* `pendingVerification` (value: `"PendingVerification"`)

* `unverified` (value: `"Unverified"`)

* `rejected` (value: `"Rejected"`)

* `updateExternalAccount` (value: `"UpdateExternalAccount"`)




<a name="CardPaymentStatusEnum"></a>
## Enum: CardPaymentStatusEnum


* `inactive` (value: `"Inactive"`)

* `pending` (value: `"Pending"`)

* `active` (value: `"Active"`)

* `unrequested` (value: `"Unrequested"`)




