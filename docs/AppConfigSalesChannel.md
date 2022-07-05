# Flipdish.AppConfigSalesChannel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailRequestMode** | **String** | Display a popup to users requesting their email address | [optional] 
**WebToAppRedirect** | **String** | Sends users to their native apps or request them to install the pwa | [optional] 
**AddressEntryType** | **String** | Address entry type | [optional] 
**DisplayDeliveryRestaurantListScreen** | **Boolean** | Display Pickup Restaurant List Screen | [optional] 


<a name="EmailRequestModeEnum"></a>
## Enum: EmailRequestModeEnum


* `DoNotRequest` (value: `"DoNotRequest"`)

* `Request` (value: `"Request"`)

* `Require` (value: `"Require"`)




<a name="WebToAppRedirectEnum"></a>
## Enum: WebToAppRedirectEnum


* `NoRedirect` (value: `"NoRedirect"`)

* `RedirectOnce` (value: `"RedirectOnce"`)

* `RedirectAlways` (value: `"RedirectAlways"`)

* `SuggestPwa` (value: `"SuggestPwa"`)

* `ForcePwa` (value: `"ForcePwa"`)




<a name="AddressEntryTypeEnum"></a>
## Enum: AddressEntryTypeEnum


* `MapFirst` (value: `"MapFirst"`)

* `TextEntryManualAllowed` (value: `"TextEntryManualAllowed"`)

* `TextEntryManualDisallowed` (value: `"TextEntryManualDisallowed"`)




