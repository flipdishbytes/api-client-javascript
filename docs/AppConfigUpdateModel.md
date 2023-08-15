# Flipdish.AppConfigUpdateModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites. | [optional] 
**HostName** | **String** | HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on. | [optional] 
**MainColor** | **String** | Main color of the web / Android / iOS applications | [optional] 
**KioskPrimaryColour** | **String** | Primary colour used on the Kiosk | [optional] 
**ApplicationCategory** | **String** | Application Category | [optional] 
**IsPanaceaEnabled** | **Boolean** | Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App's website is hosted on this domain.  The aternative to using Panacea websites is to use a custom domain. | [optional] 
**PanaceaVanityUrl** | **String** | In case of IsPanaceaEnabled is true, the app can be accessed via https://my.flipdish.com/{PanaceaVanityUrl} | [optional] 
**CookieConsentPromptEnabled** | **Boolean** | Cookie Consent Prompt Enabled | [optional] 


<a name="ApplicationCategoryEnum"></a>
## Enum: ApplicationCategoryEnum


* `Restaurant` (value: `"Restaurant"`)

* `Cafe` (value: `"Cafe"`)

* `Convenience` (value: `"Convenience"`)




