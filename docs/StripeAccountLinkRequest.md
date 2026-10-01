# Flipdish.StripeAccountLinkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StripeId** | **String** | Stripe&#39;s own connected account identifier | [optional] 
**ReturnUrl** | **String** | URL to be hit if link creation succeeds | [optional] 
**Collect** | **String** | Which information to collect from users at this stage | [optional] 
**Type** | **String** | Either onboarding or edit user information | [optional] 



## Enum: CollectEnum


* `CurrentlyDue` (value: `"CurrentlyDue"`)

* `EventuallyDue` (value: `"EventuallyDue"`)





## Enum: TypeEnum


* `Onboarding` (value: `"Onboarding"`)

* `Update` (value: `"Update"`)




