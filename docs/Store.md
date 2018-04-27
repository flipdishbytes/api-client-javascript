# Flipdish.Store

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **Number** | Store identifier | [optional] 
**name** | **String** | Name | [optional] 
**apmPhoneNumber** | **String** | Automated Phone Marketing number | [optional] 
**phoneNumber** | **String** | Phone number | [optional] 
**emailAddress** | **String** | Email address (visible to customers) | [optional] 
**address** | [**StoreAddress**](StoreAddress.md) | Store address | [optional] 
**preOrderEnabled** | **Boolean** | True if the store accepts pre-orders | [optional] 
**takeOutEnabled** | **Boolean** | True if the store accepts take-out orders | [optional] 
**tableServiceEnabled** | **Boolean** | True if the store has table service | [optional] 
**dineInEnabled** | **Boolean** | True if the store accepts dine-in orders | [optional] 
**allowPreOrdersAndTableService** | **Boolean** | True if both pre-orders and talbe service can be enabled | [optional] 
**pickupEnabled** | **Boolean** | True if the store accepts pickup orders | [optional] 
**deliveryEnabled** | **Boolean** | True if the store accepts delivery orders | [optional] 
**cardOrderDeliveryEnabled** | **Boolean** | True if the store accepts card payment for delivery orders | [optional] 
**cashOrdersDeliveryEnabled** | **Boolean** | True if the store accepts cash payment for delivery orders | [optional] 
**cardOrdersPickupEnabled** | **Boolean** | True if the store accepts card payment for pickup orders | [optional] 
**cashOrdersPickupEnabled** | **Boolean** | True if the store accepts cash payment for pickup orders | [optional] 
**tipsEnabled** | **Boolean** | True if the store accepts tips | [optional] 
**automaticallyAcceptOrders** | **Boolean** | True if the stores orders are automatically accepted in Flipdish | [optional] 
**openForDelivery** | **Boolean** | True if the store is open for delivery | [optional] 
**openForPickup** | **Boolean** | True if the store is open for pickup | [optional] 
**minimumPickupOrderAmount** | **Number** | Minimum pickup order amount | [optional] 
**deliveryFeeAreas** | [**[DeliveryFeeArea]**](DeliveryFeeArea.md) | Delivery fee areas | [optional] 
**requireCustomerNameForPickup** | **Boolean** | True if customer name required for pickup orders | [optional] 
**requireCustomerNameForDelivery** | **Boolean** | True if customer name required for delivery orders | [optional] 
**pickupHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Pickup hours | [optional] 
**deliveryHours** | [**[BusinessHoursPeriod]**](BusinessHoursPeriod.md) | Delivery hours | [optional] 
**microsoftTimeZone** | **String** | Microsoft Time Zone Index Values (https://msdn.microsoft.com/en-us/library/ms912391) | [optional] 
**ianaTimeZone** | **String** | IANA Time Zone (https://www.iana.org/time-zones) | [optional] 
**menuId** | **Number** | Menu identifier | [optional] 
**orderConfirmationMessageOverrideDelivery** | **String** | Overridden confirmation message for delivery orders | [optional] 
**orderConfirmationMessageOverridePickup** | **String** | Overridden confirmation message for pickup orders | [optional] 
**printoutLayoutType** | **String** | Printout layout | [optional] 
**storeNotes** | [**[StoreNote]**](StoreNote.md) | Store notes | [optional] 


<a name="PrintoutLayoutTypeEnum"></a>
## Enum: PrintoutLayoutTypeEnum


* `Default` (value: `"Default"`)

* `Centra` (value: `"Centra"`)




