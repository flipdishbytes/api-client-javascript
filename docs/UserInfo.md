# Flipdish.UserInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PhoneNumber** | **String** | The user&#39;s phone number. | [optional] 
**Email** | **String** | The user&#39;s email address. | [optional] 
**EmailConfirmed** | **Boolean** | Indicates if the user&#39;s email address has been confirmed. | [optional] 
**PreventFromUsingCards** | **Boolean** | Indicates if the user is prevented from using cards. | [optional] 
**IsUserPhoneNumberBlocked** | **Boolean** | Indicates if the user&#39;s phone number is blocked. | [optional] 
**UserWhiteLabels** | [**[UserWhiteLabelInfo]**](UserWhiteLabelInfo.md) | List of white label information associated with the user. | [optional] 
**UserId** | **Number** | The unique identifier for the user. | [optional] 
**UserName** | **String** | The user&#39;s username. | [optional] 
**CustomerName** | **String** | The customer&#39;s name. | [optional] 
**HasLoggedIn** | **Boolean** | Indicates if the user has logged in. | [optional] 
**DisableAppRatingControl** | **Boolean** | Indicates if the app rating control is disabled for the user. | [optional] 
**GloballyOptedOut** | **Boolean** | Indicates if the user has globally opted out. | [optional] 
**CompletedOrderCount** | **Number** | The number of completed orders by the user. | [optional] 
**CancelledOrderCount** | **Number** | The number of cancelled orders by the user. | [optional] 
**OrderTotalValue** | **Number** | The total value of orders placed by the user. | [optional] 
**TsMostRecentOrder** | **Date** | The timestamp of the user&#39;s most recent order. | [optional] 
**TsFirstOrder** | **Date** | The timestamp of the user&#39;s first order. | [optional] 
**IsRestaurantUser** | **Boolean** | Indicates if the user is a restaurant user. | [optional] 
**Installs** | [**[AppInstall]**](AppInstall.md) | List of app installs associated with the user. | [optional] 
**DeliveryLocations** | [**[DeliveryLocation]**](DeliveryLocation.md) | List of delivery locations associated with the user. | [optional] 
**PaymentAccounts** | [**[PaymentAccount]**](PaymentAccount.md) | List of payment accounts associated with the user. | [optional] 
**LanguageId** | **String** | The language identifier for the user. | [optional] 
**CurrentLanguageName** | **String** | Current language name for the user. | [optional] 
**Languages** | [**[Language]**](Language.md) | Available languages that the user can choose from. | [optional] 
**SalesForceContactId** | **String** | The Salesforce contact ID for the user. | [optional] 
**StripeCustomerId** | **String** | The Stripe customer ID for the user. | [optional] 
**UserMonthlyCommissions** | [**[UserMonthlyCommission]**](UserMonthlyCommission.md) | User&#39;s monthly commissions. | [optional] 


