# Flipdish.OAuthApp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OauthAppId** | **String** | OAuth App Identifier | [optional] 
**OauthAppName** | **String** | OAuth App Name | [optional] 
**OwnerUserId** | **Number** | OAuth App owner user identifier | [optional] 
**LogoUri** | **String** | OAuth App logo uri | [optional] 
**Flow** | **String** | Supported OpenID Connect flows | [optional] 
**RefreshTokenUsage** | **String** | ReUse: the refresh token handle will stay the same when refreshing tokens   OneTime: the refresh token handle will be updated when refreshing tokens | [optional] 
**AccessTokenLifetime** | **Number** | Timem it takes for the IdentityToken to expire in seconds | [optional] 
**AbsoluteRefreshTokenLifetime** | **Number** | Maximum lifetime of a refresh token in seconds | [optional] 


<a name="FlowEnum"></a>
## Enum: FlowEnum


* `AuthorizationCode` (value: `"AuthorizationCode"`)

* `Implicit` (value: `"Implicit"`)

* `Hybrid` (value: `"Hybrid"`)

* `ClientCredentials` (value: `"ClientCredentials"`)




<a name="RefreshTokenUsageEnum"></a>
## Enum: RefreshTokenUsageEnum


* `ReUse` (value: `"ReUse"`)

* `OneTimeOnly` (value: `"OneTimeOnly"`)




