# Flipdish.UpdateVoucherUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsUsed** | **Boolean** | Flag indicating whether the voucher is used | [optional] 
**UsedByCustomerId** | **Number** | Indicates Customer that used the voucher. | [optional] 
**TransactionKey** | **String** | An opaque string, to ensure idempotency. This allows for safely retrying requests without accidentally performing the same stamp operation twice.   This will typically contain the the ID of the sale order. | [optional] 


