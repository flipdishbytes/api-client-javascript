# Flipdish.StripeConnectedAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FlipdishConnectedAccountId** | **Number** | Flipdish connected account identifier | [optional] 
**StripeId** | **String** | Stripe's own connected account identifier | [optional] 
**WhitelabelConfigId** | **Number** | Id of the WhitelabelConfig the connected account is assigned to | [optional] 
**CardPaymentsStatus** | **String** | Card payments capability status (Inactive, Pending, Active, Unrequested) | [optional] 
**TransfersStatus** | **String** | Transfers capability status (Inactive, Pending, Active, Unrequested) | [optional] 
**AccountStatus** | **String** | Current status of the account | [optional] 
**PayoutsEnabled** | **Boolean** | Payouts Enabled status | [optional] 
**PaymentsEnabled** | **Boolean** | Payments Enabled status | [optional] 


<a name="CardPaymentsStatusEnum"></a>
## Enum: CardPaymentsStatusEnum


* `Inactive` (value: `"Inactive"`)

* `Pending` (value: `"Pending"`)

* `Active` (value: `"Active"`)

* `Unrequested` (value: `"Unrequested"`)




<a name="TransfersStatusEnum"></a>
## Enum: TransfersStatusEnum


* `Inactive` (value: `"Inactive"`)

* `Pending` (value: `"Pending"`)

* `Active` (value: `"Active"`)

* `Unrequested` (value: `"Unrequested"`)




<a name="AccountStatusEnum"></a>
## Enum: AccountStatusEnum


* `Disabled` (value: `"Disabled"`)

* `Enabled` (value: `"Enabled"`)

* `AdditionalInformationRequired` (value: `"AdditionalInformationRequired"`)

* `PendingVerification` (value: `"PendingVerification"`)

* `Unverified` (value: `"Unverified"`)

* `Rejected` (value: `"Rejected"`)

* `UpdateExternalAccount` (value: `"UpdateExternalAccount"`)




