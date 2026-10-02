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
**DisabledReason** | **String** | If the Stripe connected account is disabled, this is Stripe&#39;s raw  requirements.disabled_reason describing why, as last recorded from a Stripe  connected-account webhook. Known values are requirements.fields_needed,  requirements.past_due, requirements.pending_verification,  rejected.fraud, rejected.terms_of_service, rejected.listed,  rejected.other and platform_paused, but Stripe can introduce new ones, so  the value is passed through unmapped (the same way  CapabilityRequirementsInfo.DisabledReason is). null when the account is  not disabled. Note that {Flipdish.PublicModels.V1.BankAccount.StripeConnectedAccountInfo.AccountStatus} is a deliberately lossy mapping of  this value and the two can legitimately disagree - do not derive one from the other. | [optional] 



## Enum: AccountStatusEnum


* `Disabled` (value: `"Disabled"`)

* `Enabled` (value: `"Enabled"`)

* `AdditionalInformationRequired` (value: `"AdditionalInformationRequired"`)

* `PendingVerification` (value: `"PendingVerification"`)

* `Unverified` (value: `"Unverified"`)

* `Rejected` (value: `"Rejected"`)

* `UpdateExternalAccount` (value: `"UpdateExternalAccount"`)

* `PlatformPaused` (value: `"PlatformPaused"`)





## Enum: CardPaymentStatusEnum


* `Inactive` (value: `"Inactive"`)

* `Pending` (value: `"Pending"`)

* `Active` (value: `"Active"`)

* `Unrequested` (value: `"Unrequested"`)





## Enum: PayoutScheduleIntervalEnum


* `Manual` (value: `"Manual"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)




