# Flipdish.PaymentIntent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of payment intent | [optional] 
**Description** | **String** | An arbitrary string attached to the object. Often useful for displaying to users. | [optional] 
**Currency** | **String** | Three-letter <a href=\"https://www.iso.org/iso-4217-currency-codes.html\">ISO currency  code</a>, in lowercase. Must be a <a href=\"https://stripe.com/docs/currencies\">supported  currency</a>. | [optional] 
**Status** | **String** | Status of this PaymentIntent, one of requires_payment_method,  requires_confirmation, requires_action, processing,  requires_capture, canceled, or succeeded. Read more about each  PaymentIntent <a href=\"https://stripe.com/docs/payments/intents#intent-statuses\">status</a>.  One of: canceled, processing, requires_action,  requires_capture, requires_confirmation, requires_payment_method,  or succeeded. | [optional] 
**Created** | **Date** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**LastPaymentError** | [**LastPaymentError**](LastPaymentError.md) | Failed payment intent Errors | [optional] 


