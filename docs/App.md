# FlipdishOpenApiV10.App

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **String** | App Identifier | [optional] 
**hasIosApp** | **Boolean** | Has iOS app in Apple App Store. This is readonly. | [optional] 
**hasAndroidApp** | **Boolean** | Has Android app in Google Play Store. This is readonly. | [optional] 
**countryId** | **String** | Country identifier in ISO 3166-1 alpha-2 format.   This code is set automatically based on the locations of the Stores in the App.     The App Country is used    - to determine how to parse mobile phone numbers that are entered in their local numbering format   - to determine if country specific payment methods should be offered   - in various fraud checks | [optional] 
**logoImageUrl** | **String** | Application Logo. | [optional] 
**languages** | [**[Language]**](Language.md) | Languages that have been selected to be available to customers. | [optional] 
**availableAppLanguages** | [**[Language]**](Language.md) | Lists all languages that are supported by Flipdish. | [optional] 
**appAccessLevel** | **String** | App access level for the logged in user | [optional] 
**appResourceSet** | **[String]** | Constitutes a list of available resources | [optional] 
**features** | **[String]** | Feature flags. These cannot be set by 3rd parties. | [optional] 
**mapCenter** | [**Coordinates**](Coordinates.md) | Center of the map coordinates. This is used to center the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**mapNorthEast** | [**Coordinates**](Coordinates.md) | North East(Top Right) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**mapSouthWest** | [**Coordinates**](Coordinates.md) | South West (Bottom Left) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**name** | **String** | App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites. | [optional] 
**hostName** | **String** | HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on. | [optional] 
**mainColor** | **String** | Main color of the web / Android / iOS applications | [optional] 
**applicationCategory** | **String** | Application Category | [optional] 
**isPanaceaEnabled** | **Boolean** | Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App's website is hosted on this domain.  The aternative to using Panacea websites is to use a custom domain. | [optional] 
**cookieConsentPromptEnabled** | **Boolean** | Cookie Consent Prompt Enabled | [optional] 


<a name="AppAccessLevelEnum"></a>
## Enum: AppAccessLevelEnum


* `none` (value: `"None"`)

* `owner` (value: `"Owner"`)

* `storeOwner` (value: `"StoreOwner"`)

* `managedOwner` (value: `"ManagedOwner"`)

* `storeManager` (value: `"StoreManager"`)

* `storeStaff` (value: `"StoreStaff"`)

* `storeReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `financeManger` (value: `"FinanceManger"`)




<a name="[AppResourceSetEnum]"></a>
## Enum: [AppResourceSetEnum]


* `viewApp` (value: `"ViewApp"`)

* `createApp` (value: `"CreateApp"`)

* `updateApp` (value: `"UpdateApp"`)

* `editAppAssets` (value: `"EditAppAssets"`)

* `viewTeammates` (value: `"ViewTeammates"`)

* `editTeammates` (value: `"EditTeammates"`)

* `createTeammateOwner` (value: `"CreateTeammateOwner"`)

* `createTeammateManagedOwner` (value: `"CreateTeammateManagedOwner"`)

* `createTeammateStoreOwner` (value: `"CreateTeammateStoreOwner"`)

* `createTeammateStoreManager` (value: `"CreateTeammateStoreManager"`)

* `createTeammateStoreStaff` (value: `"CreateTeammateStoreStaff"`)

* `createTeammateStoreReadAccess` (value: `"CreateTeammateStoreReadAccess"`)

* `createTeammateFinanceManager` (value: `"CreateTeammateFinanceManager"`)

* `viewApmConfigurations` (value: `"ViewApmConfigurations"`)

* `editApmConfigurations` (value: `"EditApmConfigurations"`)

* `viewCampaignsConfigurations` (value: `"ViewCampaignsConfigurations"`)

* `createCampaignsConfigurations` (value: `"CreateCampaignsConfigurations"`)

* `updateCampaignsConfigurations` (value: `"UpdateCampaignsConfigurations"`)

* `deleteCampaignsConfigurations` (value: `"DeleteCampaignsConfigurations"`)

* `viewDevelopersSettings` (value: `"ViewDevelopersSettings"`)

* `editDevelopersSettings` (value: `"EditDevelopersSettings"`)

* `viewOrders` (value: `"ViewOrders"`)

* `updateOrdersAccept` (value: `"UpdateOrdersAccept"`)

* `updateOrdersReject` (value: `"UpdateOrdersReject"`)

* `updateOrdersRefund` (value: `"UpdateOrdersRefund"`)

* `updateOrdersDispatch` (value: `"UpdateOrdersDispatch"`)

* `viewStores` (value: `"ViewStores"`)

* `editStores` (value: `"EditStores"`)

* `viewStoresOpeningHours` (value: `"ViewStoresOpeningHours"`)

* `updateStoresOpenForCollectionOrDelivery` (value: `"UpdateStoresOpenForCollectionOrDelivery"`)

* `updateStoresOpeningHours` (value: `"UpdateStoresOpeningHours"`)

* `viewStoresOpeningHoursOverride` (value: `"ViewStoresOpeningHoursOverride"`)

* `editStoresOpeningHoursOverride` (value: `"EditStoresOpeningHoursOverride"`)

* `editStoresOpeningHoursOverrideTemporary` (value: `"EditStoresOpeningHoursOverrideTemporary"`)

* `updateStoresName` (value: `"UpdateStoresName"`)

* `editStoreKioskSettings` (value: `"EditStoreKioskSettings"`)

* `editStoreOrderCapacity` (value: `"EditStoreOrderCapacity"`)

* `updatePrinterTerminalsAssign` (value: `"UpdatePrinterTerminalsAssign"`)

* `updatePrinterTerminalsToggle` (value: `"UpdatePrinterTerminalsToggle"`)

* `editStoreNotifications` (value: `"EditStoreNotifications"`)

* `viewStoreGroups` (value: `"ViewStoreGroups"`)

* `createStoreGroups` (value: `"CreateStoreGroups"`)

* `updateStoreGroups` (value: `"UpdateStoreGroups"`)

* `deleteStoreGroups` (value: `"DeleteStoreGroups"`)

* `viewDeliveryZones` (value: `"ViewDeliveryZones"`)

* `createDeliveryZones` (value: `"CreateDeliveryZones"`)

* `updateDeliveryZones` (value: `"UpdateDeliveryZones"`)

* `deleteDeliveryZones` (value: `"DeleteDeliveryZones"`)

* `viewMenu` (value: `"ViewMenu"`)

* `createMenu` (value: `"CreateMenu"`)

* `updateMenu` (value: `"UpdateMenu"`)

* `deleteMenu` (value: `"DeleteMenu"`)

* `updateMenuLock` (value: `"UpdateMenuLock"`)

* `updateMenuItemsHideTemporarily` (value: `"UpdateMenuItemsHideTemporarily"`)

* `editMenuImage` (value: `"EditMenuImage"`)

* `viewVouchers` (value: `"ViewVouchers"`)

* `editVouchers` (value: `"EditVouchers"`)

* `updateVouchersExtendDisable` (value: `"UpdateVouchersExtendDisable"`)

* `viewWebsiteContent` (value: `"ViewWebsiteContent"`)

* `editWebsiteContent` (value: `"EditWebsiteContent"`)

* `viewWebsiteDnsVerified` (value: `"ViewWebsiteDnsVerified"`)

* `viewWebsiteCertificateCreated` (value: `"ViewWebsiteCertificateCreated"`)

* `viewWebsiteCertificateRenewed` (value: `"ViewWebsiteCertificateRenewed"`)

* `viewBankAccounts` (value: `"ViewBankAccounts"`)

* `createBankAccounts` (value: `"CreateBankAccounts"`)

* `updateBankAccounts` (value: `"UpdateBankAccounts"`)

* `updateBankAccountsAssign` (value: `"UpdateBankAccountsAssign"`)

* `viewAssignedBankAccount` (value: `"ViewAssignedBankAccount"`)

* `verifyBankAccounts` (value: `"VerifyBankAccounts"`)

* `viewFeesConfigurations` (value: `"ViewFeesConfigurations"`)

* `editFeesConfigurations` (value: `"EditFeesConfigurations"`)

* `viewHydraConfig` (value: `"ViewHydraConfig"`)

* `updateHydraConfigManage` (value: `"UpdateHydraConfigManage"`)

* `initiateBluetoothPairingMode` (value: `"InitiateBluetoothPairingMode"`)

* `viewCustomers` (value: `"ViewCustomers"`)

* `editCustomers` (value: `"EditCustomers"`)

* `viewAppStatistics` (value: `"ViewAppStatistics"`)

* `viewApmStatistics` (value: `"ViewApmStatistics"`)

* `viewCampaignsStatistics` (value: `"ViewCampaignsStatistics"`)

* `viewCustomerStatistics` (value: `"ViewCustomerStatistics"`)

* `viewLiveStatistics` (value: `"ViewLiveStatistics"`)

* `viewOrderStatistics` (value: `"ViewOrderStatistics"`)

* `viewSalesStatistics` (value: `"ViewSalesStatistics"`)

* `viewSalesEndOfDayStatistics` (value: `"ViewSalesEndOfDayStatistics"`)

* `viewVouchersStatistics` (value: `"ViewVouchersStatistics"`)

* `downloadCustomerCsvExport` (value: `"DownloadCustomerCsvExport"`)

* `viewApmAuditLogs` (value: `"ViewApmAuditLogs"`)

* `viewStoreAuditLogs` (value: `"ViewStoreAuditLogs"`)

* `viewMenuAuditLogs` (value: `"ViewMenuAuditLogs"`)

* `viewBankAccountAuditLogs` (value: `"ViewBankAccountAuditLogs"`)

* `viewFeeConfigurationsAuditLogs` (value: `"ViewFeeConfigurationsAuditLogs"`)

* `viewOrdersAuditLogs` (value: `"ViewOrdersAuditLogs"`)

* `viewVouchersAuditLogs` (value: `"ViewVouchersAuditLogs"`)

* `viewUserEventsAuditLogs` (value: `"ViewUserEventsAuditLogs"`)

* `viewCampaignsAuditLogs` (value: `"ViewCampaignsAuditLogs"`)

* `viewTeammatesAuditLogs` (value: `"ViewTeammatesAuditLogs"`)

* `viewAppAuditLogs` (value: `"ViewAppAuditLogs"`)

* `viewCustomerAuditLogs` (value: `"ViewCustomerAuditLogs"`)

* `viewPrinterAuditLogs` (value: `"ViewPrinterAuditLogs"`)

* `viewHydraAuditLogs` (value: `"ViewHydraAuditLogs"`)

* `viewPushNotificationAuditLogs` (value: `"ViewPushNotificationAuditLogs"`)

* `viewStripeCustomConnectedAccountAuditLogs` (value: `"ViewStripeCustomConnectedAccountAuditLogs"`)

* `viewKioskBluetoothDeviceAuditLogs` (value: `"ViewKioskBluetoothDeviceAuditLogs"`)

* `sendPushNotificationToCustomer` (value: `"SendPushNotificationToCustomer"`)

* `inviteDriverToApp` (value: `"InviteDriverToApp"`)

* `getDriverForApp` (value: `"GetDriverForApp"`)

* `removeDriverFromApp` (value: `"RemoveDriverFromApp"`)

* `assignDriverToOrder` (value: `"AssignDriverToOrder"`)

* `unassignDriverFromOrder` (value: `"UnassignDriverFromOrder"`)

* `updateOrdersDeliveryTrackingStatus` (value: `"UpdateOrdersDeliveryTrackingStatus"`)

* `viewPayouts` (value: `"ViewPayouts"`)




<a name="ApplicationCategoryEnum"></a>
## Enum: ApplicationCategoryEnum


* `restaurant` (value: `"Restaurant"`)

* `cafe` (value: `"Cafe"`)

* `convenience` (value: `"Convenience"`)




