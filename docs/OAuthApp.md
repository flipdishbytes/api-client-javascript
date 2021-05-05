# FlipdishOpenApiV10.OAuthApp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauthAppId** | **String** | OAuth App Identifier | [optional] 
**oauthAppName** | **String** | OAuth App Name | [optional] 
**ownerUserId** | **Number** | OAuth App owner user identifier | [optional] 
**logoUri** | **String** | OAuth App logo uri | [optional] 
**flow** | **String** | Supported OpenID Connect flows | [optional] 
**refreshTokenUsage** | **String** | ReUse: the refresh token handle will stay the same when refreshing tokens   OneTime: the refresh token handle will be updated when refreshing tokens | [optional] 
**accessTokenLifetime** | **Number** | Timem it takes for the IdentityToken to expire in seconds | [optional] 
**absoluteRefreshTokenLifetime** | **Number** | Maximum lifetime of a refresh token in seconds | [optional] 


<a name="FlowEnum"></a>
## Enum: FlowEnum


* `authorizationCode` (value: `"AuthorizationCode"`)

* `implicit` (value: `"Implicit"`)

* `hybrid` (value: `"Hybrid"`)

* `clientCredentials` (value: `"ClientCredentials"`)




<a name="RefreshTokenUsageEnum"></a>
## Enum: RefreshTokenUsageEnum


* `reUse` (value: `"ReUse"`)

* `oneTimeOnly` (value: `"OneTimeOnly"`)




