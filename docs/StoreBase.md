# Flipdish.StoreBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PhoneNumber** | **String** | Phone number | [optional] 
**AlwaysAppearOpen** | **Boolean** | True if the store always appears open | [optional] 
**PreOrderEnabled** | **Boolean** | True if the store accepts pre-orders | [optional] 
**TakeOutEnabled** | **Boolean** | True if the store accepts take-out orders | [optional] 
**TableServiceEnabled** | **Boolean** | True if the store has table service | [optional] 
**DineInEnabled** | **Boolean** | True if the store accepts dine-in orders | [optional] 
**AllowPreOrdersAndTableService** | **Boolean** | True if both pre-orders and talbe service can be enabled | [optional] 
**PickupEnabled** | **Boolean** | True if the store accepts pickup orders | [optional] 
**DeliveryEnabled** | **Boolean** | True if the store accepts delivery orders | [optional] 
**CardOrderDeliveryEnabled** | **Boolean** | True if the store accepts card payment for delivery orders | [optional] 
**CashOrdersDeliveryEnabled** | **Boolean** | True if the store accepts cash payment for delivery orders | [optional] 
**CardOrdersPickupEnabled** | **Boolean** | True if the store accepts card payment for pickup orders | [optional] 
**CashOrdersPickupEnabled** | **Boolean** | True if the store accepts cash payment for pickup orders | [optional] 
**TipsEnabled** | **Boolean** | True if the store accepts tips | [optional] 
**AutomaticallyAcceptOrders** | **Boolean** | True if the stores orders are automatically accepted in Flipdish | [optional] 
**OpenForDelivery** | **Boolean** | True if the store is open for delivery | [optional] 
**OpenForPickup** | **Boolean** | True if the store is open for pickup | [optional] 
**MinimumPickupOrderAmount** | **Number** | Minimum pickup order amount | [optional] 
**RequireCustomerNameForPickup** | **Boolean** | True if customer name required for pickup orders | [optional] 
**GdprCustomerPhoneNumbers** | **Boolean** | Mask your customers phone numbers printed on receipts and reduce the amout of personally identifiable customer information that is exposed. | [optional] 
**RequireCustomerNameForDelivery** | **Boolean** | True if customer name required for delivery orders | [optional] 
**AllowChefNotes** | **Boolean** | True if the customer is allowed enter custom notes with their orders | [optional] 
**EtaInPickupConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will be ready for collection | [optional] 
**EtaInDeliveryConfirmationSmsEnabled** | **Boolean** | True if order confirmation sms includes estimated time when order will delivered | [optional] 
**IsArchived** | **Boolean** | Is the Store Archived | [optional] 
**IsPublished** | **Boolean** | Is the Store Published | [optional] 
**Name** | **String** | Name | [optional] 
**EmailAddress** | **String** | Email address (visible to customers) | [optional] 
**StaffLanguage** | **String** | Staff Language (used for communication with the staff)  Emails, Printouts etc | [optional] 
**SalesChannelTypes** | **[String]** | Sales Channel Types | [optional] 



## Enum: [SalesChannelTypesEnum]


* `Web` (value: `"Web"`)

* `App` (value: `"App"`)

* `Kiosk` (value: `"Kiosk"`)

* `Pos` (value: `"Pos"`)

* `None` (value: `"None"`)




