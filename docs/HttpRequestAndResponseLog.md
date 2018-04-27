# Flipdish.HttpRequestAndResponseLog

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verb** | **String** | Verb associated with the HTTP call. | [optional] 
**requestUri** | **String** | Http request URI. | [optional] 
**statusCode** | **Number** | Http response status code. | [optional] 
**reasonPhrase** | **String** | Http response status line. | [optional] 
**callDurationInMilliseconds** | **Number** | Call duration representing the duration of the HTTP call in milliseconds. | [optional] 
**userId** | **String** | Identity of the caller. | [optional] 
**ipAddress** | **String** | Ip address of the caller | [optional] 
**createdDateTime** | **String** | Timestamp at which the HTTP call took place. | [optional] 
**requestHeaders** | **{String: String}** | Http request headers. | [optional] 
**requestBody** | **String** | Http request body, if any. | [optional] 
**requestLength** | **Number** | Http request content-length | [optional] 
**responseHeaders** | **{String: String}** | Http response headers. | [optional] 
**responseBody** | **String** | Http response body. | [optional] 
**responseLength** | **Number** | Http response content-length | [optional] 


