# Flipdish.PaymentIntent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of payment intent | [optional] 
**Description** | **String** | An arbitrary string attached to the object. Often useful for displaying to users. | [optional] 
**Currency** | **String** | Three-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot;&gt;ISO currency  code&lt;/a&gt;, in lowercase. Must be a &lt;a href&#x3D;\&quot;https://stripe.com/docs/currencies\&quot;&gt;supported  currency&lt;/a&gt;. | [optional] 
**Status** | **String** | Status of this PaymentIntent, one of requires_payment_method,  requires_confirmation, requires_action, processing,  requires_capture, canceled, or succeeded. Read more about each  PaymentIntent &lt;a href&#x3D;\&quot;https://stripe.com/docs/payments/intents#intent-statuses\&quot;&gt;status&lt;/a&gt;.  One of: canceled, processing, requires_action,  requires_capture, requires_confirmation, requires_payment_method,  or succeeded. | [optional] 
**Created** | **Date** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**LastPaymentError** | [**LastPaymentError**](LastPaymentError.md) |  | [optional] 


