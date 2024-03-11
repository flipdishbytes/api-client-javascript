# Flipdish.StripeConnectedAccountInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountStatus** | **String** | Stripe connected account status | [optional] 
**StripeId** | **String** | Stripe connected account id | [optional] 
**CardPaymentStatus** | **String** | Current status of the Card Payment capability of the account | [optional] 
**PayoutScheduleInterval** | **String** | Payouts Schedule Interval | [optional] 
**PayoutsEnabled** | **Boolean** | Payouts Enabled status | [optional] 
**PayoutsPaused** | **Boolean** | Flag indicating if payouts are paused | [optional] 
**PaymentsEnabled** | **Boolean** | Flag indicating if payments are enabled | [optional] 


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




<a name="PayoutScheduleIntervalEnum"></a>
## Enum: PayoutScheduleIntervalEnum


* `Manual` (value: `"Manual"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)




