# Flipdish.WebhookSubscription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Number** | Webhook subscription identifier | [optional] 
**OwnerUserId** | **Number** | Webhook subscription owner user identifier | [optional] 
**Version** | **String** | Webhook subscription owner user identifier | [optional] 
**EventNames** | **[String]** | Webhook subscription event names | [optional] 
**CallbackUrl** | **String** | Callback url. Flipdish system POST messages to this url. | [optional] 
**Enabled** | **Boolean** | Is webhook subscription enabled. | [optional] 
**VerifyToken** | **String** | This is your token which will be in the Header of each POST request from Flipdish with name: X-Verify-Token. | [optional] 


