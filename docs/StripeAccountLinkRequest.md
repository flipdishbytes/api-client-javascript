# FlipdishOpenApiV10.StripeAccountLinkRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stripeId** | **String** | Stripe's own connected account identifier | [optional] 
**returnUrl** | **String** | URL to be hit if link creation succeeds | [optional] 
**collect** | **String** | Which information to collect from users at this stage | [optional] 
**type** | **String** | Either onboarding or edit user information | [optional] 


<a name="CollectEnum"></a>
## Enum: CollectEnum


* `currentlyDue` (value: `"CurrentlyDue"`)

* `eventuallyDue` (value: `"EventuallyDue"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `onboarding` (value: `"Onboarding"`)

* `update` (value: `"Update"`)




