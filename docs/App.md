# Flipdish.App

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | App Identifier | [optional] 
**HasIosApp** | **Boolean** | Has iOS app in Apple App Store. This is readonly. | [optional] 
**HasAndroidApp** | **Boolean** | Has Android app in Google Play Store. This is readonly. | [optional] 
**CountryId** | **String** | Country identifier in ISO 3166-1 alpha-2 format.   This code is set automatically based on the locations of the Stores in the App.     The App Country is used    - to determine how to parse mobile phone numbers that are entered in their local numbering format   - to determine if country specific payment methods should be offered   - in various fraud checks | [optional] 
**LogoImageUrl** | **String** | Application Logo. | [optional] 
**Languages** | [**[Language]**](Language.md) | Languages that have been selected to be available to customers. | [optional] 
**AvailableAppLanguages** | [**[Language]**](Language.md) | Lists all languages that are supported by Flipdish. | [optional] 
**AppAccessLevel** | **String** | App access level for the logged in user | [optional] 
**AppResourceSet** | **[String]** | Constitutes a list of available resources | [optional] 
**Features** | **[String]** | Feature flags. These cannot be set by 3rd parties. | [optional] 
**MapCenter** | [**Coordinates**](Coordinates.md) | Center of the map coordinates. This is used to center the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**MapNorthEast** | [**Coordinates**](Coordinates.md) | North East(Top Right) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**MapSouthWest** | [**Coordinates**](Coordinates.md) | South West (Bottom Left) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App. | [optional] 
**Name** | **String** | App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites. | [optional] 
**HostName** | **String** | HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on. | [optional] 
**MainColor** | **String** | Main color of the web / Android / iOS applications | [optional] 
**ApplicationCategory** | **String** | Application Category | [optional] 
**IsPanaceaEnabled** | **Boolean** | Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App's website is hosted on this domain.  The aternative to using Panacea websites is to use a custom domain. | [optional] 
**CookieConsentPromptEnabled** | **Boolean** | Cookie Consent Prompt Enabled | [optional] 


<a name="AppAccessLevelEnum"></a>
## Enum: AppAccessLevelEnum


* `None` (value: `"None"`)

* `Owner` (value: `"Owner"`)

* `StoreOwner` (value: `"StoreOwner"`)

* `ManagedOwner` (value: `"ManagedOwner"`)

* `Integrator` (value: `"Integrator"`)

* `StoreManager` (value: `"StoreManager"`)

* `StoreStaff` (value: `"StoreStaff"`)

* `StoreReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `FinanceManger` (value: `"FinanceManger"`)

* `Support` (value: `"Support"`)




<a name="[AppResourceSetEnum]"></a>
## Enum: [AppResourceSetEnum]


* `ViewApp` (value: `"ViewApp"`)

* `CreateApp` (value: `"CreateApp"`)

* `UpdateApp` (value: `"UpdateApp"`)

* `EditAppAssets` (value: `"EditAppAssets"`)

* `ViewTeammates` (value: `"ViewTeammates"`)

* `EditTeammates` (value: `"EditTeammates"`)

* `CreateTeammateOwner` (value: `"CreateTeammateOwner"`)

* `CreateTeammateManagedOwner` (value: `"CreateTeammateManagedOwner"`)

* `CreateTeammateStoreOwner` (value: `"CreateTeammateStoreOwner"`)

* `CreateTeammateStoreManager` (value: `"CreateTeammateStoreManager"`)

* `CreateTeammateStoreStaff` (value: `"CreateTeammateStoreStaff"`)

* `CreateTeammateStoreReadAccess` (value: `"CreateTeammateStoreReadAccess"`)

* `CreateTeammateFinanceManager` (value: `"CreateTeammateFinanceManager"`)

* `CreateTeammateIntegrator` (value: `"CreateTeammateIntegrator"`)

* `ViewApmConfigurations` (value: `"ViewApmConfigurations"`)

* `EditApmConfigurations` (value: `"EditApmConfigurations"`)

* `ViewCampaignsConfigurations` (value: `"ViewCampaignsConfigurations"`)

* `CreateCampaignsConfigurations` (value: `"CreateCampaignsConfigurations"`)

* `UpdateCampaignsConfigurations` (value: `"UpdateCampaignsConfigurations"`)

* `DeleteCampaignsConfigurations` (value: `"DeleteCampaignsConfigurations"`)

* `ViewDevelopersSettings` (value: `"ViewDevelopersSettings"`)

* `EditDevelopersSettings` (value: `"EditDevelopersSettings"`)

* `ViewOrders` (value: `"ViewOrders"`)

* `UpdateOrdersAccept` (value: `"UpdateOrdersAccept"`)

* `UpdateOrdersReject` (value: `"UpdateOrdersReject"`)

* `UpdateOrdersRefund` (value: `"UpdateOrdersRefund"`)

* `UpdateOrdersDispatch` (value: `"UpdateOrdersDispatch"`)

* `ViewStores` (value: `"ViewStores"`)

* `EditStores` (value: `"EditStores"`)

* `ViewStoresOpeningHours` (value: `"ViewStoresOpeningHours"`)

* `UpdateStoresOpenForCollectionOrDelivery` (value: `"UpdateStoresOpenForCollectionOrDelivery"`)

* `UpdateStoresOpeningHours` (value: `"UpdateStoresOpeningHours"`)

* `ViewStoresOpeningHoursOverride` (value: `"ViewStoresOpeningHoursOverride"`)

* `EditStoresOpeningHoursOverride` (value: `"EditStoresOpeningHoursOverride"`)

* `EditStoresOpeningHoursOverrideTemporary` (value: `"EditStoresOpeningHoursOverrideTemporary"`)

* `UpdateStoresName` (value: `"UpdateStoresName"`)

* `EditStoreKioskSettings` (value: `"EditStoreKioskSettings"`)

* `EditStoreOrderCapacity` (value: `"EditStoreOrderCapacity"`)

* `UpdatePrinterTerminalsAssign` (value: `"UpdatePrinterTerminalsAssign"`)

* `UpdatePrinterTerminalsToggle` (value: `"UpdatePrinterTerminalsToggle"`)

* `EditStoreNotifications` (value: `"EditStoreNotifications"`)

* `ViewStoreGroups` (value: `"ViewStoreGroups"`)

* `CreateStoreGroups` (value: `"CreateStoreGroups"`)

* `UpdateStoreGroups` (value: `"UpdateStoreGroups"`)

* `DeleteStoreGroups` (value: `"DeleteStoreGroups"`)

* `ViewDeliveryZones` (value: `"ViewDeliveryZones"`)

* `CreateDeliveryZones` (value: `"CreateDeliveryZones"`)

* `UpdateDeliveryZones` (value: `"UpdateDeliveryZones"`)

* `DeleteDeliveryZones` (value: `"DeleteDeliveryZones"`)

* `ViewMenu` (value: `"ViewMenu"`)

* `CreateMenu` (value: `"CreateMenu"`)

* `UpdateMenu` (value: `"UpdateMenu"`)

* `DeleteMenu` (value: `"DeleteMenu"`)

* `UpdateMenuLock` (value: `"UpdateMenuLock"`)

* `UpdateMenuItemsHideTemporarily` (value: `"UpdateMenuItemsHideTemporarily"`)

* `EditMenuImage` (value: `"EditMenuImage"`)

* `ViewVouchers` (value: `"ViewVouchers"`)

* `EditVouchers` (value: `"EditVouchers"`)

* `UpdateVouchersExtendDisable` (value: `"UpdateVouchersExtendDisable"`)

* `ViewWebsiteContent` (value: `"ViewWebsiteContent"`)

* `EditWebsiteContent` (value: `"EditWebsiteContent"`)

* `ViewWebsiteDnsVerified` (value: `"ViewWebsiteDnsVerified"`)

* `ViewWebsiteCertificateCreated` (value: `"ViewWebsiteCertificateCreated"`)

* `ViewWebsiteCertificateRenewed` (value: `"ViewWebsiteCertificateRenewed"`)

* `ViewBankAccounts` (value: `"ViewBankAccounts"`)

* `CreateBankAccounts` (value: `"CreateBankAccounts"`)

* `UpdateBankAccounts` (value: `"UpdateBankAccounts"`)

* `UpdateBankAccountsAssign` (value: `"UpdateBankAccountsAssign"`)

* `ViewAssignedBankAccount` (value: `"ViewAssignedBankAccount"`)

* `VerifyBankAccounts` (value: `"VerifyBankAccounts"`)

* `ViewServiceChargeConfigurations` (value: `"ViewServiceChargeConfigurations"`)

* `EditServiceChargeConfigurations` (value: `"EditServiceChargeConfigurations"`)

* `ViewHydraConfig` (value: `"ViewHydraConfig"`)

* `UpdateHydraConfigManage` (value: `"UpdateHydraConfigManage"`)

* `InitiateBluetoothPairingMode` (value: `"InitiateBluetoothPairingMode"`)

* `ViewCustomers` (value: `"ViewCustomers"`)

* `EditCustomers` (value: `"EditCustomers"`)

* `CreateProduct` (value: `"CreateProduct"`)

* `UpdateProduct` (value: `"UpdateProduct"`)

* `ViewProduct` (value: `"ViewProduct"`)

* `DeleteProduct` (value: `"DeleteProduct"`)

* `CreateCatalogElements` (value: `"CreateCatalogElements"`)

* `UpdateCatalogElements` (value: `"UpdateCatalogElements"`)

* `ViewCatalogElements` (value: `"ViewCatalogElements"`)

* `DeleteCatalogElements` (value: `"DeleteCatalogElements"`)

* `ViewMetafieldDefinitions` (value: `"ViewMetafieldDefinitions"`)

* `CreateMetafieldDefinitions` (value: `"CreateMetafieldDefinitions"`)

* `UpdateMetafieldDefinitions` (value: `"UpdateMetafieldDefinitions"`)

* `DeleteMetafieldDefinitions` (value: `"DeleteMetafieldDefinitions"`)

* `UpdateMetafields` (value: `"UpdateMetafields"`)

* `ViewAppStatistics` (value: `"ViewAppStatistics"`)

* `ViewApmStatistics` (value: `"ViewApmStatistics"`)

* `ViewCampaignsStatistics` (value: `"ViewCampaignsStatistics"`)

* `ViewCustomerStatistics` (value: `"ViewCustomerStatistics"`)

* `ViewLiveStatistics` (value: `"ViewLiveStatistics"`)

* `ViewOrderStatistics` (value: `"ViewOrderStatistics"`)

* `ViewSalesStatistics` (value: `"ViewSalesStatistics"`)

* `ViewSalesEndOfDayStatistics` (value: `"ViewSalesEndOfDayStatistics"`)

* `ViewVouchersStatistics` (value: `"ViewVouchersStatistics"`)

* `DownloadCustomerCsvExport` (value: `"DownloadCustomerCsvExport"`)

* `ViewApmAuditLogs` (value: `"ViewApmAuditLogs"`)

* `ViewStoreAuditLogs` (value: `"ViewStoreAuditLogs"`)

* `ViewMenuAuditLogs` (value: `"ViewMenuAuditLogs"`)

* `ViewBankAccountAuditLogs` (value: `"ViewBankAccountAuditLogs"`)

* `ViewFeeConfigurationsAuditLogs` (value: `"ViewFeeConfigurationsAuditLogs"`)

* `ViewOrdersAuditLogs` (value: `"ViewOrdersAuditLogs"`)

* `ViewVouchersAuditLogs` (value: `"ViewVouchersAuditLogs"`)

* `ViewUserEventsAuditLogs` (value: `"ViewUserEventsAuditLogs"`)

* `ViewCampaignsAuditLogs` (value: `"ViewCampaignsAuditLogs"`)

* `ViewTeammatesAuditLogs` (value: `"ViewTeammatesAuditLogs"`)

* `ViewAppAuditLogs` (value: `"ViewAppAuditLogs"`)

* `ViewCustomerAuditLogs` (value: `"ViewCustomerAuditLogs"`)

* `ViewPrinterAuditLogs` (value: `"ViewPrinterAuditLogs"`)

* `ViewHydraAuditLogs` (value: `"ViewHydraAuditLogs"`)

* `ViewPushNotificationAuditLogs` (value: `"ViewPushNotificationAuditLogs"`)

* `ViewStripeCustomConnectedAccountAuditLogs` (value: `"ViewStripeCustomConnectedAccountAuditLogs"`)

* `ViewKioskBluetoothDeviceAuditLogs` (value: `"ViewKioskBluetoothDeviceAuditLogs"`)

* `ViewExternalAuditLogs` (value: `"ViewExternalAuditLogs"`)

* `CreateExternalAuditLogEvents` (value: `"CreateExternalAuditLogEvents"`)

* `ViewCatalogAuditLogs` (value: `"ViewCatalogAuditLogs"`)

* `CreateAppStoreApp` (value: `"CreateAppStoreApp"`)

* `ViewAppStoreApp` (value: `"ViewAppStoreApp"`)

* `UpdateAppStoreApp` (value: `"UpdateAppStoreApp"`)

* `DeleteAppStoreApp` (value: `"DeleteAppStoreApp"`)

* `CreateAppStoreAppConfiguration` (value: `"CreateAppStoreAppConfiguration"`)

* `ViewAppStoreAppConfiguration` (value: `"ViewAppStoreAppConfiguration"`)

* `UpdateAppStoreAppConfiguration` (value: `"UpdateAppStoreAppConfiguration"`)

* `DeleteAppStoreAppConfiguration` (value: `"DeleteAppStoreAppConfiguration"`)

* `SendPushNotificationToCustomer` (value: `"SendPushNotificationToCustomer"`)

* `InviteDriverToApp` (value: `"InviteDriverToApp"`)

* `GetDriverForApp` (value: `"GetDriverForApp"`)

* `RemoveDriverFromApp` (value: `"RemoveDriverFromApp"`)

* `AssignDriverToOrder` (value: `"AssignDriverToOrder"`)

* `UnassignDriverFromOrder` (value: `"UnassignDriverFromOrder"`)

* `UpdateOrdersDeliveryTrackingStatus` (value: `"UpdateOrdersDeliveryTrackingStatus"`)

* `ViewPayouts` (value: `"ViewPayouts"`)

* `ViewChannels` (value: `"ViewChannels"`)

* `ViewOnboarding` (value: `"ViewOnboarding"`)

* `UpdateOnboarding` (value: `"UpdateOnboarding"`)




<a name="ApplicationCategoryEnum"></a>
## Enum: ApplicationCategoryEnum


* `Restaurant` (value: `"Restaurant"`)

* `Cafe` (value: `"Cafe"`)

* `Convenience` (value: `"Convenience"`)




