# Flipdish.App

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | App Identifier | [optional] 
**HasIosApp** | **Boolean** | Has iOS app in Apple App Store. This is readonly. | [optional] 
**IosAppStoreUrl** | **String** | IOS App Store URL | [optional] 
**HasAndroidApp** | **Boolean** | Has Android app in Google Play Store. This is readonly. | [optional] 
**AndroidPlayStoreUrl** | **String** | Android Play Store URL | [optional] 
**DisplayDeliveryRestaurantScreen** | **Boolean** | Display delivery restaurant screen | [optional] 
**LogoImageUrl** | **String** | Application Logo. | [optional] 
**Languages** | [**[Language]**](Language.md) | Languages that have been selected to be available to customers. | [optional] 
**AvailableAppLanguages** | [**[Language]**](Language.md) | Lists all languages that are supported by Flipdish. | [optional] 
**AppAccessLevel** | **String** | App access level for the logged in user | [optional] 
**AppResourceSet** | **[String]** | Constitutes a list of available resources | [optional] 
**Features** | **[String]** | Feature flags. These cannot be set by 3rd parties. | [optional] 
**MapCenter** | [**Coordinates**](Coordinates.md) |  | [optional] 
**MapNorthEast** | [**Coordinates**](Coordinates.md) |  | [optional] 
**MapSouthWest** | [**Coordinates**](Coordinates.md) |  | [optional] 
**GoogleMapsApiKeyWeb** | **String** | Key to be passed with Google Maps requests | [optional] 
**OrgId** | **String** | Org Id | [optional] 
**SmsRestaurantName** | **String** | SMS Restaurant Name | [optional] 
**Name** | **String** | App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites. | [optional] 
**HostName** | **String** | HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on. | [optional] 
**MainColor** | **String** | Main color of the web / Android / iOS applications | [optional] 
**KioskPrimaryColour** | **String** | Primary colour used on the Kiosk | [optional] 
**ApplicationCategory** | **String** | Application Category | [optional] 
**IsPanaceaEnabled** | **Boolean** | Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App&#39;s website is hosted on this domain.  The alternative to using Panacea websites is to use a custom domain. | [optional] 
**PanaceaVanityUrl** | **String** | In case of IsPanaceaEnabled is true, the app can be accessed via https://my.flipdish.com/{PanaceaVanityUrl} | [optional] 
**CookieConsentPromptEnabled** | **Boolean** | Cookie Consent Prompt Enabled | [optional] 
**CountryId** | **String** | Country identifier in ISO 3166-1 alpha-2 format.   This code is set automatically based on the locations of the Stores in the App.     The App Country is used    - to determine how to parse mobile phone numbers that are entered in their local numbering format   - to determine if country specific payment methods should be offered   - in various fraud checks | [optional] 



## Enum: AppAccessLevelEnum


* `None` (value: `"None"`)

* `Owner` (value: `"Owner"`)

* `StoreOwner` (value: `"StoreOwner"`)

* `PropertyOwner` (value: `"PropertyOwner"`)

* `ManagedOwner` (value: `"ManagedOwner"`)

* `Integrator` (value: `"Integrator"`)

* `PropertyManager` (value: `"PropertyManager"`)

* `StoreManager` (value: `"StoreManager"`)

* `StoreStaff` (value: `"StoreStaff"`)

* `StoreReadOnlyAccess` (value: `"StoreReadOnlyAccess"`)

* `FinanceManger` (value: `"FinanceManger"`)

* `Onboarding` (value: `"Onboarding"`)

* `Support` (value: `"Support"`)





## Enum: [AppResourceSetEnum]


* `ViewApp` (value: `"ViewApp"`)

* `CreateApp` (value: `"CreateApp"`)

* `UpdateApp` (value: `"UpdateApp"`)

* `ViewAppName` (value: `"ViewAppName"`)

* `EditAppAssets` (value: `"EditAppAssets"`)

* `EditAppFeatures` (value: `"EditAppFeatures"`)

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

* `CreateTeammateOnboarding` (value: `"CreateTeammateOnboarding"`)

* `CreateTeammatePropertyManager` (value: `"CreateTeammatePropertyManager"`)

* `CreateTeammatePropertyOwner` (value: `"CreateTeammatePropertyOwner"`)

* `ViewApmConfigurations` (value: `"ViewApmConfigurations"`)

* `EditApmConfigurations` (value: `"EditApmConfigurations"`)

* `ViewCampaignsConfigurations` (value: `"ViewCampaignsConfigurations"`)

* `CreateCampaignsConfigurations` (value: `"CreateCampaignsConfigurations"`)

* `UpdateCampaignsConfigurations` (value: `"UpdateCampaignsConfigurations"`)

* `DeleteCampaignsConfigurations` (value: `"DeleteCampaignsConfigurations"`)

* `StampLoyaltyCardAgainstCampaignsConfigurations` (value: `"StampLoyaltyCardAgainstCampaignsConfigurations"`)

* `ViewDevelopersSettings` (value: `"ViewDevelopersSettings"`)

* `EditDevelopersSettings` (value: `"EditDevelopersSettings"`)

* `ViewOrders` (value: `"ViewOrders"`)

* `UpdateOrdersAccept` (value: `"UpdateOrdersAccept"`)

* `UpdateOrdersReject` (value: `"UpdateOrdersReject"`)

* `UpdateOrdersRefund` (value: `"UpdateOrdersRefund"`)

* `UpdateOrdersDispatch` (value: `"UpdateOrdersDispatch"`)

* `ViewStores` (value: `"ViewStores"`)

* `CreateStores` (value: `"CreateStores"`)

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

* `ArchiveStores` (value: `"ArchiveStores"`)

* `PublishStores` (value: `"PublishStores"`)

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

* `EditStoreDeliveryZoneFees` (value: `"EditStoreDeliveryZoneFees"`)

* `EditStoreDeliveryFeesLimited` (value: `"EditStoreDeliveryFeesLimited"`)

* `ViewHydraConfig` (value: `"ViewHydraConfig"`)

* `UpdateHydraConfigManage` (value: `"UpdateHydraConfigManage"`)

* `InitiateBluetoothPairingMode` (value: `"InitiateBluetoothPairingMode"`)

* `DeleteTerminal` (value: `"DeleteTerminal"`)

* `ViewKioskTelemetry` (value: `"ViewKioskTelemetry"`)

* `ViewCustomers` (value: `"ViewCustomers"`)

* `EditCustomers` (value: `"EditCustomers"`)

* `CreateCustomers` (value: `"CreateCustomers"`)

* `CreateCatalogElements` (value: `"CreateCatalogElements"`)

* `UpdateCatalogElements` (value: `"UpdateCatalogElements"`)

* `ViewCatalogElements` (value: `"ViewCatalogElements"`)

* `DeleteCatalogElements` (value: `"DeleteCatalogElements"`)

* `ViewMetafieldDefinitions` (value: `"ViewMetafieldDefinitions"`)

* `CreateMetafieldDefinitions` (value: `"CreateMetafieldDefinitions"`)

* `UpdateMetafieldDefinitions` (value: `"UpdateMetafieldDefinitions"`)

* `DeleteMetafieldDefinitions` (value: `"DeleteMetafieldDefinitions"`)

* `UpdateMetafields` (value: `"UpdateMetafields"`)

* `ViewCatalogMenuChanges` (value: `"ViewCatalogMenuChanges"`)

* `PublishCatalogMenuChanges` (value: `"PublishCatalogMenuChanges"`)

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

* `ViewOrderFulfillmentAuditLogs` (value: `"ViewOrderFulfillmentAuditLogs"`)

* `ViewChannelAuditLogs` (value: `"ViewChannelAuditLogs"`)

* `ViewAppStoreAuditLogs` (value: `"ViewAppStoreAuditLogs"`)

* `SendPushNotificationToCustomer` (value: `"SendPushNotificationToCustomer"`)

* `InviteDriverToApp` (value: `"InviteDriverToApp"`)

* `GetDriverForApp` (value: `"GetDriverForApp"`)

* `RemoveDriverFromApp` (value: `"RemoveDriverFromApp"`)

* `AssignDriverToOrder` (value: `"AssignDriverToOrder"`)

* `UnassignDriverFromOrder` (value: `"UnassignDriverFromOrder"`)

* `UpdateOrdersDeliveryTrackingStatus` (value: `"UpdateOrdersDeliveryTrackingStatus"`)

* `UpdateOrderFulfillmentStatus` (value: `"UpdateOrderFulfillmentStatus"`)

* `ViewFulfillmentStatesConfiguration` (value: `"ViewFulfillmentStatesConfiguration"`)

* `CreateFulfillmentStatesConfiguration` (value: `"CreateFulfillmentStatesConfiguration"`)

* `UpdateFulfillmentStatesConfiguration` (value: `"UpdateFulfillmentStatesConfiguration"`)

* `DeleteFulfillmentStatesConfiguration` (value: `"DeleteFulfillmentStatesConfiguration"`)

* `ViewPayouts` (value: `"ViewPayouts"`)

* `ViewChannels` (value: `"ViewChannels"`)

* `ViewOnboarding` (value: `"ViewOnboarding"`)

* `UpdateOnboarding` (value: `"UpdateOnboarding"`)

* `ViewClientDevices` (value: `"ViewClientDevices"`)

* `UpdateClientDevices` (value: `"UpdateClientDevices"`)

* `EnrollClientDevices` (value: `"EnrollClientDevices"`)

* `AssignClientDevices` (value: `"AssignClientDevices"`)

* `ViewClientAuditLogs` (value: `"ViewClientAuditLogs"`)

* `CreateAppStoreAppConfiguration` (value: `"CreateAppStoreAppConfiguration"`)

* `ViewAppStoreAppConfiguration` (value: `"ViewAppStoreAppConfiguration"`)

* `UpdateAppStoreAppConfiguration` (value: `"UpdateAppStoreAppConfiguration"`)

* `DeleteAppStoreAppConfiguration` (value: `"DeleteAppStoreAppConfiguration"`)

* `UpdateAppStoreAppConfigurationSettings` (value: `"UpdateAppStoreAppConfigurationSettings"`)

* `CreateAppStoreSubscription` (value: `"CreateAppStoreSubscription"`)

* `UpdateAppStoreSubscription` (value: `"UpdateAppStoreSubscription"`)

* `DeleteAppStoreSubscription` (value: `"DeleteAppStoreSubscription"`)

* `ViewSalesChannels` (value: `"ViewSalesChannels"`)

* `EditSalesChannels` (value: `"EditSalesChannels"`)

* `ViewPayGreenWhiteLabelConfiguration` (value: `"ViewPayGreenWhiteLabelConfiguration"`)

* `CreatePayGreenWhiteLabelConfiguration` (value: `"CreatePayGreenWhiteLabelConfiguration"`)

* `UpdatePayGreenWhiteLabelConfiguration` (value: `"UpdatePayGreenWhiteLabelConfiguration"`)

* `UpdatePayGreenStoreConfiguration` (value: `"UpdatePayGreenStoreConfiguration"`)

* `ViewSubscriptions` (value: `"ViewSubscriptions"`)

* `ViewInvoices` (value: `"ViewInvoices"`)

* `EditAccountsBills` (value: `"EditAccountsBills"`)

* `ViewAccountsBills` (value: `"ViewAccountsBills"`)

* `EditAccountsCategories` (value: `"EditAccountsCategories"`)

* `ViewAccountsCategories` (value: `"ViewAccountsCategories"`)

* `EditAccountsCreditAccounts` (value: `"EditAccountsCreditAccounts"`)

* `ViewAccountsCreditAccounts` (value: `"ViewAccountsCreditAccounts"`)

* `EditAccountsCreditBooks` (value: `"EditAccountsCreditBooks"`)

* `ViewAccountsCreditBooks` (value: `"ViewAccountsCreditBooks"`)

* `EditAccountsExpenses` (value: `"EditAccountsExpenses"`)

* `ViewAccountsExpenses` (value: `"ViewAccountsExpenses"`)

* `EditAccountsTransactionAccounts` (value: `"EditAccountsTransactionAccounts"`)

* `ViewAccountsTransactionAccounts` (value: `"ViewAccountsTransactionAccounts"`)

* `EditDocumentExplorer` (value: `"EditDocumentExplorer"`)

* `ViewDocumentExplorer` (value: `"ViewDocumentExplorer"`)

* `ViewInventoryReports` (value: `"ViewInventoryReports"`)

* `EditInventoryPurchaseOrders` (value: `"EditInventoryPurchaseOrders"`)

* `ViewInventoryPurchaseOrders` (value: `"ViewInventoryPurchaseOrders"`)

* `EditInventoryStockItems` (value: `"EditInventoryStockItems"`)

* `ViewInventoryStockItems` (value: `"ViewInventoryStockItems"`)

* `EditInventorySupplier` (value: `"EditInventorySupplier"`)

* `ViewInventorySupplier` (value: `"ViewInventorySupplier"`)

* `EditInventoryTrackingProfiles` (value: `"EditInventoryTrackingProfiles"`)

* `ViewInventoryTrackingProfiles` (value: `"ViewInventoryTrackingProfiles"`)

* `ViewPayrollReports` (value: `"ViewPayrollReports"`)

* `EditPayrollHoliday` (value: `"EditPayrollHoliday"`)

* `ViewPayrollHoliday` (value: `"ViewPayrollHoliday"`)

* `EditPayrollRota` (value: `"EditPayrollRota"`)

* `ViewPayrollRota` (value: `"ViewPayrollRota"`)

* `EditPayrollStaff` (value: `"EditPayrollStaff"`)

* `ViewPayrollStaff` (value: `"ViewPayrollStaff"`)

* `ViewSalesReports` (value: `"ViewSalesReports"`)

* `ViewCostReports` (value: `"ViewCostReports"`)

* `ViewMenuReports` (value: `"ViewMenuReports"`)





## Enum: ApplicationCategoryEnum


* `Restaurant` (value: `"Restaurant"`)

* `Cafe` (value: `"Cafe"`)

* `Convenience` (value: `"Convenience"`)




