# FlipdishOpenApiV10.StripeConnectedAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flipdishConnectedAccountId** | **Number** | Flipdish connected account identifier | [optional] 
**stripeId** | **String** | Stripe's own connected account identifier | [optional] 
**whitelabelConfigId** | **Number** | Id of the WhitelabelConfig the connected account is assigned to | [optional] 
**cardPaymentsStatus** | **String** | Card payments capability status (Inactive, Pending, Active, Unrequested) | [optional] 
**transfersStatus** | **String** | Transfers capability status (Inactive, Pending, Active, Unrequested) | [optional] 
**accountStatus** | **String** | Current status of the account | [optional] 


<a name="CardPaymentsStatusEnum"></a>
## Enum: CardPaymentsStatusEnum


* `inactive` (value: `"Inactive"`)

* `pending` (value: `"Pending"`)

* `active` (value: `"Active"`)

* `unrequested` (value: `"Unrequested"`)




<a name="TransfersStatusEnum"></a>
## Enum: TransfersStatusEnum


* `inactive` (value: `"Inactive"`)

* `pending` (value: `"Pending"`)

* `active` (value: `"Active"`)

* `unrequested` (value: `"Unrequested"`)




<a name="AccountStatusEnum"></a>
## Enum: AccountStatusEnum


* `disabled` (value: `"Disabled"`)

* `enabled` (value: `"Enabled"`)

* `additionalInformationRequired` (value: `"AdditionalInformationRequired"`)

* `pendingVerification` (value: `"PendingVerification"`)

* `unverified` (value: `"Unverified"`)

* `rejected` (value: `"Rejected"`)

* `updateExternalAccount` (value: `"UpdateExternalAccount"`)




