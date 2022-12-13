# Flipdish.FulfillmentStatusConfigurationItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusId** | **String** | Status Id (no whitespaces) | [optional] 
**StatusName** | **String** | Status name | [optional] 
**Enabled** | **Boolean** | Is status enabled | [optional] 
**DisplayName** | **String** | The short status string that is displayed to users in apps, portal. If empty then Order Status Name is displayed instead | [optional] 
**Icon** | **String** | Icon/Image that represents that status visual | [optional] 
**PublicDescription** | **String** | A string which could be used in notification templates with a placeholder (SMS, email, push, web page with status) | [optional] 
**Internal** | **Boolean** | Is internal state (internal states not shown to customers) | [optional] 
**NextStatuses** | **[String]** | list of statuses that this status can move to (can be back or forth) | [optional] 
**DefaultNextStatus** | [**[NextStatusWithOrderType]**](NextStatusWithOrderType.md) | The default next status (on a dropdown or quick button on terminal or portal) | [optional] 
**ChangeType** | **String** | How will state change (manually or automated, including timed) | [optional] 
**IncludeInReports** | **Boolean** | Include in reports | [optional] 
**IsCustom** | **Boolean** | Is custom state. If not, then it's a system state | [optional] 
**OrderTypes** | **[String]** | If empty then applies to all ordertypes, otherwise a list of order types this state applies to | [optional] 
**Communication** | **Boolean** | Whether state should fire off a notification to the customer | [optional] 
**Image** | **String** | Image (image filename, relative, not absolute URL) | [optional] 


<a name="ChangeTypeEnum"></a>
## Enum: ChangeTypeEnum


* `Manual` (value: `"Manual"`)

* `Automated` (value: `"Automated"`)

* `Integrated` (value: `"Integrated"`)




<a name="[OrderTypesEnum]"></a>
## Enum: [OrderTypesEnum]


* `All` (value: `"All"`)

* `Delivery` (value: `"Delivery"`)

* `Collection` (value: `"Collection"`)

* `DineIn` (value: `"DineIn"`)




