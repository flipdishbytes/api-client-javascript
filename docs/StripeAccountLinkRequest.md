# Flipdish.StripeAccountLinkRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StripeId** | **String** | Stripe's own connected account identifier | [optional] 
**ReturnUrl** | **String** | URL to be hit if link creation succeeds | [optional] 
**Collect** | **String** | Which information to collect from users at this stage | [optional] 
**Type** | **String** | Either onboarding or edit user information | [optional] 


<a name="CollectEnum"></a>
## Enum: CollectEnum


* `CurrentlyDue` (value: `"CurrentlyDue"`)

* `EventuallyDue` (value: `"EventuallyDue"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Onboarding` (value: `"Onboarding"`)

* `Update` (value: `"Update"`)




