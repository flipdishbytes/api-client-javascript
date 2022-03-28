/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Coordinates', 'model/Language'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coordinates'), require('./Language'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.App = factory(root.Flipdish.ApiClient, root.Flipdish.Coordinates, root.Flipdish.Language);
  }
}(this, function(ApiClient, Coordinates, Language) {
  'use strict';

  /**
   * The App model module.
   * @module model/App
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>App</code>.
   * App
   * @alias module:model/App
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/App} obj Optional instance to populate.
   * @return {module:model/App} The populated <code>App</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('HasIosApp'))
        obj.HasIosApp = ApiClient.convertToType(data['HasIosApp'], 'Boolean');
      if (data.hasOwnProperty('HasAndroidApp'))
        obj.HasAndroidApp = ApiClient.convertToType(data['HasAndroidApp'], 'Boolean');
      if (data.hasOwnProperty('CountryId'))
        obj.CountryId = ApiClient.convertToType(data['CountryId'], 'String');
      if (data.hasOwnProperty('LogoImageUrl'))
        obj.LogoImageUrl = ApiClient.convertToType(data['LogoImageUrl'], 'String');
      if (data.hasOwnProperty('Languages'))
        obj.Languages = ApiClient.convertToType(data['Languages'], [Language]);
      if (data.hasOwnProperty('AvailableAppLanguages'))
        obj.AvailableAppLanguages = ApiClient.convertToType(data['AvailableAppLanguages'], [Language]);
      if (data.hasOwnProperty('AppAccessLevel'))
        obj.AppAccessLevel = ApiClient.convertToType(data['AppAccessLevel'], 'String');
      if (data.hasOwnProperty('AppResourceSet'))
        obj.AppResourceSet = ApiClient.convertToType(data['AppResourceSet'], ['String']);
      if (data.hasOwnProperty('Features'))
        obj.Features = ApiClient.convertToType(data['Features'], ['String']);
      if (data.hasOwnProperty('MapCenter'))
        obj.MapCenter = Coordinates.constructFromObject(data['MapCenter']);
      if (data.hasOwnProperty('MapNorthEast'))
        obj.MapNorthEast = Coordinates.constructFromObject(data['MapNorthEast']);
      if (data.hasOwnProperty('MapSouthWest'))
        obj.MapSouthWest = Coordinates.constructFromObject(data['MapSouthWest']);
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('HostName'))
        obj.HostName = ApiClient.convertToType(data['HostName'], 'String');
      if (data.hasOwnProperty('MainColor'))
        obj.MainColor = ApiClient.convertToType(data['MainColor'], 'String');
      if (data.hasOwnProperty('ApplicationCategory'))
        obj.ApplicationCategory = ApiClient.convertToType(data['ApplicationCategory'], 'String');
      if (data.hasOwnProperty('IsPanaceaEnabled'))
        obj.IsPanaceaEnabled = ApiClient.convertToType(data['IsPanaceaEnabled'], 'Boolean');
      if (data.hasOwnProperty('CookieConsentPromptEnabled'))
        obj.CookieConsentPromptEnabled = ApiClient.convertToType(data['CookieConsentPromptEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * App Identifier
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * Has iOS app in Apple App Store. This is readonly.
   * @member {Boolean} HasIosApp
   */
  exports.prototype.HasIosApp = undefined;

  /**
   * Has Android app in Google Play Store. This is readonly.
   * @member {Boolean} HasAndroidApp
   */
  exports.prototype.HasAndroidApp = undefined;

  /**
   * Country identifier in ISO 3166-1 alpha-2 format.   This code is set automatically based on the locations of the Stores in the App.     The App Country is used    - to determine how to parse mobile phone numbers that are entered in their local numbering format   - to determine if country specific payment methods should be offered   - in various fraud checks
   * @member {String} CountryId
   */
  exports.prototype.CountryId = undefined;

  /**
   * Application Logo.
   * @member {String} LogoImageUrl
   */
  exports.prototype.LogoImageUrl = undefined;

  /**
   * Languages that have been selected to be available to customers.
   * @member {Array.<module:model/Language>} Languages
   */
  exports.prototype.Languages = undefined;

  /**
   * Lists all languages that are supported by Flipdish.
   * @member {Array.<module:model/Language>} AvailableAppLanguages
   */
  exports.prototype.AvailableAppLanguages = undefined;

  /**
   * App access level for the logged in user
   * @member {module:model/App.AppAccessLevelEnum} AppAccessLevel
   */
  exports.prototype.AppAccessLevel = undefined;

  /**
   * Constitutes a list of available resources
   * @member {Array.<module:model/App.AppResourceSetEnum>} AppResourceSet
   */
  exports.prototype.AppResourceSet = undefined;

  /**
   * Feature flags. These cannot be set by 3rd parties.
   * @member {Array.<String>} Features
   */
  exports.prototype.Features = undefined;

  /**
   * Center of the map coordinates. This is used to center the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App.
   * @member {module:model/Coordinates} MapCenter
   */
  exports.prototype.MapCenter = undefined;

  /**
   * North East(Top Right) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App.
   * @member {module:model/Coordinates} MapNorthEast
   */
  exports.prototype.MapNorthEast = undefined;

  /**
   * South West (Bottom Left) Corner of the map coordinates. This is used to frame the map when the iOS and Android app first open.  This value is automatically set based on the locations of the Stores in the App.
   * @member {module:model/Coordinates} MapSouthWest
   */
  exports.prototype.MapSouthWest = undefined;

  /**
   * App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites.
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on.
   * @member {String} HostName
   */
  exports.prototype.HostName = undefined;

  /**
   * Main color of the web / Android / iOS applications
   * @member {String} MainColor
   */
  exports.prototype.MainColor = undefined;

  /**
   * Application Category
   * @member {module:model/App.ApplicationCategoryEnum} ApplicationCategory
   */
  exports.prototype.ApplicationCategory = undefined;

  /**
   * Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App's website is hosted on this domain.  The aternative to using Panacea websites is to use a custom domain.
   * @member {Boolean} IsPanaceaEnabled
   */
  exports.prototype.IsPanaceaEnabled = undefined;

  /**
   * Cookie Consent Prompt Enabled
   * @member {Boolean} CookieConsentPromptEnabled
   */
  exports.prototype.CookieConsentPromptEnabled = undefined;



  /**
   * Allowed values for the <code>AppAccessLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppAccessLevelEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Owner"
     * @const
     */
    Owner: "Owner",

    /**
     * value: "StoreOwner"
     * @const
     */
    StoreOwner: "StoreOwner",

    /**
     * value: "ManagedOwner"
     * @const
     */
    ManagedOwner: "ManagedOwner",

    /**
     * value: "Integrator"
     * @const
     */
    Integrator: "Integrator",

    /**
     * value: "StoreManager"
     * @const
     */
    StoreManager: "StoreManager",

    /**
     * value: "StoreStaff"
     * @const
     */
    StoreStaff: "StoreStaff",

    /**
     * value: "StoreReadOnlyAccess"
     * @const
     */
    StoreReadOnlyAccess: "StoreReadOnlyAccess",

    /**
     * value: "FinanceManger"
     * @const
     */
    FinanceManger: "FinanceManger",

    /**
     * value: "Support"
     * @const
     */
    Support: "Support"
  };


  /**
   * Allowed values for the <code>AppResourceSet</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppResourceSetEnum = {
    /**
     * value: "ViewApp"
     * @const
     */
    ViewApp: "ViewApp",

    /**
     * value: "CreateApp"
     * @const
     */
    CreateApp: "CreateApp",

    /**
     * value: "UpdateApp"
     * @const
     */
    UpdateApp: "UpdateApp",

    /**
     * value: "EditAppAssets"
     * @const
     */
    EditAppAssets: "EditAppAssets",

    /**
     * value: "ViewTeammates"
     * @const
     */
    ViewTeammates: "ViewTeammates",

    /**
     * value: "EditTeammates"
     * @const
     */
    EditTeammates: "EditTeammates",

    /**
     * value: "CreateTeammateOwner"
     * @const
     */
    CreateTeammateOwner: "CreateTeammateOwner",

    /**
     * value: "CreateTeammateManagedOwner"
     * @const
     */
    CreateTeammateManagedOwner: "CreateTeammateManagedOwner",

    /**
     * value: "CreateTeammateStoreOwner"
     * @const
     */
    CreateTeammateStoreOwner: "CreateTeammateStoreOwner",

    /**
     * value: "CreateTeammateStoreManager"
     * @const
     */
    CreateTeammateStoreManager: "CreateTeammateStoreManager",

    /**
     * value: "CreateTeammateStoreStaff"
     * @const
     */
    CreateTeammateStoreStaff: "CreateTeammateStoreStaff",

    /**
     * value: "CreateTeammateStoreReadAccess"
     * @const
     */
    CreateTeammateStoreReadAccess: "CreateTeammateStoreReadAccess",

    /**
     * value: "CreateTeammateFinanceManager"
     * @const
     */
    CreateTeammateFinanceManager: "CreateTeammateFinanceManager",

    /**
     * value: "CreateTeammateIntegrator"
     * @const
     */
    CreateTeammateIntegrator: "CreateTeammateIntegrator",

    /**
     * value: "ViewApmConfigurations"
     * @const
     */
    ViewApmConfigurations: "ViewApmConfigurations",

    /**
     * value: "EditApmConfigurations"
     * @const
     */
    EditApmConfigurations: "EditApmConfigurations",

    /**
     * value: "ViewCampaignsConfigurations"
     * @const
     */
    ViewCampaignsConfigurations: "ViewCampaignsConfigurations",

    /**
     * value: "CreateCampaignsConfigurations"
     * @const
     */
    CreateCampaignsConfigurations: "CreateCampaignsConfigurations",

    /**
     * value: "UpdateCampaignsConfigurations"
     * @const
     */
    UpdateCampaignsConfigurations: "UpdateCampaignsConfigurations",

    /**
     * value: "DeleteCampaignsConfigurations"
     * @const
     */
    DeleteCampaignsConfigurations: "DeleteCampaignsConfigurations",

    /**
     * value: "ViewDevelopersSettings"
     * @const
     */
    ViewDevelopersSettings: "ViewDevelopersSettings",

    /**
     * value: "EditDevelopersSettings"
     * @const
     */
    EditDevelopersSettings: "EditDevelopersSettings",

    /**
     * value: "ViewOrders"
     * @const
     */
    ViewOrders: "ViewOrders",

    /**
     * value: "UpdateOrdersAccept"
     * @const
     */
    UpdateOrdersAccept: "UpdateOrdersAccept",

    /**
     * value: "UpdateOrdersReject"
     * @const
     */
    UpdateOrdersReject: "UpdateOrdersReject",

    /**
     * value: "UpdateOrdersRefund"
     * @const
     */
    UpdateOrdersRefund: "UpdateOrdersRefund",

    /**
     * value: "UpdateOrdersDispatch"
     * @const
     */
    UpdateOrdersDispatch: "UpdateOrdersDispatch",

    /**
     * value: "ViewStores"
     * @const
     */
    ViewStores: "ViewStores",

    /**
     * value: "EditStores"
     * @const
     */
    EditStores: "EditStores",

    /**
     * value: "ViewStoresOpeningHours"
     * @const
     */
    ViewStoresOpeningHours: "ViewStoresOpeningHours",

    /**
     * value: "UpdateStoresOpenForCollectionOrDelivery"
     * @const
     */
    UpdateStoresOpenForCollectionOrDelivery: "UpdateStoresOpenForCollectionOrDelivery",

    /**
     * value: "UpdateStoresOpeningHours"
     * @const
     */
    UpdateStoresOpeningHours: "UpdateStoresOpeningHours",

    /**
     * value: "ViewStoresOpeningHoursOverride"
     * @const
     */
    ViewStoresOpeningHoursOverride: "ViewStoresOpeningHoursOverride",

    /**
     * value: "EditStoresOpeningHoursOverride"
     * @const
     */
    EditStoresOpeningHoursOverride: "EditStoresOpeningHoursOverride",

    /**
     * value: "EditStoresOpeningHoursOverrideTemporary"
     * @const
     */
    EditStoresOpeningHoursOverrideTemporary: "EditStoresOpeningHoursOverrideTemporary",

    /**
     * value: "UpdateStoresName"
     * @const
     */
    UpdateStoresName: "UpdateStoresName",

    /**
     * value: "EditStoreKioskSettings"
     * @const
     */
    EditStoreKioskSettings: "EditStoreKioskSettings",

    /**
     * value: "EditStoreOrderCapacity"
     * @const
     */
    EditStoreOrderCapacity: "EditStoreOrderCapacity",

    /**
     * value: "UpdatePrinterTerminalsAssign"
     * @const
     */
    UpdatePrinterTerminalsAssign: "UpdatePrinterTerminalsAssign",

    /**
     * value: "UpdatePrinterTerminalsToggle"
     * @const
     */
    UpdatePrinterTerminalsToggle: "UpdatePrinterTerminalsToggle",

    /**
     * value: "EditStoreNotifications"
     * @const
     */
    EditStoreNotifications: "EditStoreNotifications",

    /**
     * value: "ViewStoreGroups"
     * @const
     */
    ViewStoreGroups: "ViewStoreGroups",

    /**
     * value: "CreateStoreGroups"
     * @const
     */
    CreateStoreGroups: "CreateStoreGroups",

    /**
     * value: "UpdateStoreGroups"
     * @const
     */
    UpdateStoreGroups: "UpdateStoreGroups",

    /**
     * value: "DeleteStoreGroups"
     * @const
     */
    DeleteStoreGroups: "DeleteStoreGroups",

    /**
     * value: "ViewDeliveryZones"
     * @const
     */
    ViewDeliveryZones: "ViewDeliveryZones",

    /**
     * value: "CreateDeliveryZones"
     * @const
     */
    CreateDeliveryZones: "CreateDeliveryZones",

    /**
     * value: "UpdateDeliveryZones"
     * @const
     */
    UpdateDeliveryZones: "UpdateDeliveryZones",

    /**
     * value: "DeleteDeliveryZones"
     * @const
     */
    DeleteDeliveryZones: "DeleteDeliveryZones",

    /**
     * value: "ViewMenu"
     * @const
     */
    ViewMenu: "ViewMenu",

    /**
     * value: "CreateMenu"
     * @const
     */
    CreateMenu: "CreateMenu",

    /**
     * value: "UpdateMenu"
     * @const
     */
    UpdateMenu: "UpdateMenu",

    /**
     * value: "DeleteMenu"
     * @const
     */
    DeleteMenu: "DeleteMenu",

    /**
     * value: "UpdateMenuLock"
     * @const
     */
    UpdateMenuLock: "UpdateMenuLock",

    /**
     * value: "UpdateMenuItemsHideTemporarily"
     * @const
     */
    UpdateMenuItemsHideTemporarily: "UpdateMenuItemsHideTemporarily",

    /**
     * value: "EditMenuImage"
     * @const
     */
    EditMenuImage: "EditMenuImage",

    /**
     * value: "ViewVouchers"
     * @const
     */
    ViewVouchers: "ViewVouchers",

    /**
     * value: "EditVouchers"
     * @const
     */
    EditVouchers: "EditVouchers",

    /**
     * value: "UpdateVouchersExtendDisable"
     * @const
     */
    UpdateVouchersExtendDisable: "UpdateVouchersExtendDisable",

    /**
     * value: "ViewWebsiteContent"
     * @const
     */
    ViewWebsiteContent: "ViewWebsiteContent",

    /**
     * value: "EditWebsiteContent"
     * @const
     */
    EditWebsiteContent: "EditWebsiteContent",

    /**
     * value: "ViewWebsiteDnsVerified"
     * @const
     */
    ViewWebsiteDnsVerified: "ViewWebsiteDnsVerified",

    /**
     * value: "ViewWebsiteCertificateCreated"
     * @const
     */
    ViewWebsiteCertificateCreated: "ViewWebsiteCertificateCreated",

    /**
     * value: "ViewWebsiteCertificateRenewed"
     * @const
     */
    ViewWebsiteCertificateRenewed: "ViewWebsiteCertificateRenewed",

    /**
     * value: "ViewBankAccounts"
     * @const
     */
    ViewBankAccounts: "ViewBankAccounts",

    /**
     * value: "CreateBankAccounts"
     * @const
     */
    CreateBankAccounts: "CreateBankAccounts",

    /**
     * value: "UpdateBankAccounts"
     * @const
     */
    UpdateBankAccounts: "UpdateBankAccounts",

    /**
     * value: "UpdateBankAccountsAssign"
     * @const
     */
    UpdateBankAccountsAssign: "UpdateBankAccountsAssign",

    /**
     * value: "ViewAssignedBankAccount"
     * @const
     */
    ViewAssignedBankAccount: "ViewAssignedBankAccount",

    /**
     * value: "VerifyBankAccounts"
     * @const
     */
    VerifyBankAccounts: "VerifyBankAccounts",

    /**
     * value: "ViewServiceChargeConfigurations"
     * @const
     */
    ViewServiceChargeConfigurations: "ViewServiceChargeConfigurations",

    /**
     * value: "EditServiceChargeConfigurations"
     * @const
     */
    EditServiceChargeConfigurations: "EditServiceChargeConfigurations",

    /**
     * value: "ViewHydraConfig"
     * @const
     */
    ViewHydraConfig: "ViewHydraConfig",

    /**
     * value: "UpdateHydraConfigManage"
     * @const
     */
    UpdateHydraConfigManage: "UpdateHydraConfigManage",

    /**
     * value: "InitiateBluetoothPairingMode"
     * @const
     */
    InitiateBluetoothPairingMode: "InitiateBluetoothPairingMode",

    /**
     * value: "ViewCustomers"
     * @const
     */
    ViewCustomers: "ViewCustomers",

    /**
     * value: "EditCustomers"
     * @const
     */
    EditCustomers: "EditCustomers",

    /**
     * value: "CreateCatalogElements"
     * @const
     */
    CreateCatalogElements: "CreateCatalogElements",

    /**
     * value: "UpdateCatalogElements"
     * @const
     */
    UpdateCatalogElements: "UpdateCatalogElements",

    /**
     * value: "ViewCatalogElements"
     * @const
     */
    ViewCatalogElements: "ViewCatalogElements",

    /**
     * value: "DeleteCatalogElements"
     * @const
     */
    DeleteCatalogElements: "DeleteCatalogElements",

    /**
     * value: "ViewMetafieldDefinitions"
     * @const
     */
    ViewMetafieldDefinitions: "ViewMetafieldDefinitions",

    /**
     * value: "CreateMetafieldDefinitions"
     * @const
     */
    CreateMetafieldDefinitions: "CreateMetafieldDefinitions",

    /**
     * value: "UpdateMetafieldDefinitions"
     * @const
     */
    UpdateMetafieldDefinitions: "UpdateMetafieldDefinitions",

    /**
     * value: "DeleteMetafieldDefinitions"
     * @const
     */
    DeleteMetafieldDefinitions: "DeleteMetafieldDefinitions",

    /**
     * value: "UpdateMetafields"
     * @const
     */
    UpdateMetafields: "UpdateMetafields",

    /**
     * value: "ViewCatalogMenuChanges"
     * @const
     */
    ViewCatalogMenuChanges: "ViewCatalogMenuChanges",

    /**
     * value: "PublishCatalogMenuChanges"
     * @const
     */
    PublishCatalogMenuChanges: "PublishCatalogMenuChanges",

    /**
     * value: "ViewAppStatistics"
     * @const
     */
    ViewAppStatistics: "ViewAppStatistics",

    /**
     * value: "ViewApmStatistics"
     * @const
     */
    ViewApmStatistics: "ViewApmStatistics",

    /**
     * value: "ViewCampaignsStatistics"
     * @const
     */
    ViewCampaignsStatistics: "ViewCampaignsStatistics",

    /**
     * value: "ViewCustomerStatistics"
     * @const
     */
    ViewCustomerStatistics: "ViewCustomerStatistics",

    /**
     * value: "ViewLiveStatistics"
     * @const
     */
    ViewLiveStatistics: "ViewLiveStatistics",

    /**
     * value: "ViewOrderStatistics"
     * @const
     */
    ViewOrderStatistics: "ViewOrderStatistics",

    /**
     * value: "ViewSalesStatistics"
     * @const
     */
    ViewSalesStatistics: "ViewSalesStatistics",

    /**
     * value: "ViewSalesEndOfDayStatistics"
     * @const
     */
    ViewSalesEndOfDayStatistics: "ViewSalesEndOfDayStatistics",

    /**
     * value: "ViewVouchersStatistics"
     * @const
     */
    ViewVouchersStatistics: "ViewVouchersStatistics",

    /**
     * value: "DownloadCustomerCsvExport"
     * @const
     */
    DownloadCustomerCsvExport: "DownloadCustomerCsvExport",

    /**
     * value: "ViewApmAuditLogs"
     * @const
     */
    ViewApmAuditLogs: "ViewApmAuditLogs",

    /**
     * value: "ViewStoreAuditLogs"
     * @const
     */
    ViewStoreAuditLogs: "ViewStoreAuditLogs",

    /**
     * value: "ViewMenuAuditLogs"
     * @const
     */
    ViewMenuAuditLogs: "ViewMenuAuditLogs",

    /**
     * value: "ViewBankAccountAuditLogs"
     * @const
     */
    ViewBankAccountAuditLogs: "ViewBankAccountAuditLogs",

    /**
     * value: "ViewFeeConfigurationsAuditLogs"
     * @const
     */
    ViewFeeConfigurationsAuditLogs: "ViewFeeConfigurationsAuditLogs",

    /**
     * value: "ViewOrdersAuditLogs"
     * @const
     */
    ViewOrdersAuditLogs: "ViewOrdersAuditLogs",

    /**
     * value: "ViewVouchersAuditLogs"
     * @const
     */
    ViewVouchersAuditLogs: "ViewVouchersAuditLogs",

    /**
     * value: "ViewUserEventsAuditLogs"
     * @const
     */
    ViewUserEventsAuditLogs: "ViewUserEventsAuditLogs",

    /**
     * value: "ViewCampaignsAuditLogs"
     * @const
     */
    ViewCampaignsAuditLogs: "ViewCampaignsAuditLogs",

    /**
     * value: "ViewTeammatesAuditLogs"
     * @const
     */
    ViewTeammatesAuditLogs: "ViewTeammatesAuditLogs",

    /**
     * value: "ViewAppAuditLogs"
     * @const
     */
    ViewAppAuditLogs: "ViewAppAuditLogs",

    /**
     * value: "ViewCustomerAuditLogs"
     * @const
     */
    ViewCustomerAuditLogs: "ViewCustomerAuditLogs",

    /**
     * value: "ViewPrinterAuditLogs"
     * @const
     */
    ViewPrinterAuditLogs: "ViewPrinterAuditLogs",

    /**
     * value: "ViewHydraAuditLogs"
     * @const
     */
    ViewHydraAuditLogs: "ViewHydraAuditLogs",

    /**
     * value: "ViewPushNotificationAuditLogs"
     * @const
     */
    ViewPushNotificationAuditLogs: "ViewPushNotificationAuditLogs",

    /**
     * value: "ViewStripeCustomConnectedAccountAuditLogs"
     * @const
     */
    ViewStripeCustomConnectedAccountAuditLogs: "ViewStripeCustomConnectedAccountAuditLogs",

    /**
     * value: "ViewKioskBluetoothDeviceAuditLogs"
     * @const
     */
    ViewKioskBluetoothDeviceAuditLogs: "ViewKioskBluetoothDeviceAuditLogs",

    /**
     * value: "ViewExternalAuditLogs"
     * @const
     */
    ViewExternalAuditLogs: "ViewExternalAuditLogs",

    /**
     * value: "CreateExternalAuditLogEvents"
     * @const
     */
    CreateExternalAuditLogEvents: "CreateExternalAuditLogEvents",

    /**
     * value: "ViewCatalogAuditLogs"
     * @const
     */
    ViewCatalogAuditLogs: "ViewCatalogAuditLogs",

    /**
     * value: "CreateAppStoreApp"
     * @const
     */
    CreateAppStoreApp: "CreateAppStoreApp",

    /**
     * value: "ViewAppStoreApp"
     * @const
     */
    ViewAppStoreApp: "ViewAppStoreApp",

    /**
     * value: "UpdateAppStoreApp"
     * @const
     */
    UpdateAppStoreApp: "UpdateAppStoreApp",

    /**
     * value: "DeleteAppStoreApp"
     * @const
     */
    DeleteAppStoreApp: "DeleteAppStoreApp",

    /**
     * value: "CreateAppStoreAppConfiguration"
     * @const
     */
    CreateAppStoreAppConfiguration: "CreateAppStoreAppConfiguration",

    /**
     * value: "ViewAppStoreAppConfiguration"
     * @const
     */
    ViewAppStoreAppConfiguration: "ViewAppStoreAppConfiguration",

    /**
     * value: "UpdateAppStoreAppConfiguration"
     * @const
     */
    UpdateAppStoreAppConfiguration: "UpdateAppStoreAppConfiguration",

    /**
     * value: "DeleteAppStoreAppConfiguration"
     * @const
     */
    DeleteAppStoreAppConfiguration: "DeleteAppStoreAppConfiguration",

    /**
     * value: "SendPushNotificationToCustomer"
     * @const
     */
    SendPushNotificationToCustomer: "SendPushNotificationToCustomer",

    /**
     * value: "InviteDriverToApp"
     * @const
     */
    InviteDriverToApp: "InviteDriverToApp",

    /**
     * value: "GetDriverForApp"
     * @const
     */
    GetDriverForApp: "GetDriverForApp",

    /**
     * value: "RemoveDriverFromApp"
     * @const
     */
    RemoveDriverFromApp: "RemoveDriverFromApp",

    /**
     * value: "AssignDriverToOrder"
     * @const
     */
    AssignDriverToOrder: "AssignDriverToOrder",

    /**
     * value: "UnassignDriverFromOrder"
     * @const
     */
    UnassignDriverFromOrder: "UnassignDriverFromOrder",

    /**
     * value: "UpdateOrdersDeliveryTrackingStatus"
     * @const
     */
    UpdateOrdersDeliveryTrackingStatus: "UpdateOrdersDeliveryTrackingStatus",

    /**
     * value: "ViewPayouts"
     * @const
     */
    ViewPayouts: "ViewPayouts",

    /**
     * value: "ViewChannels"
     * @const
     */
    ViewChannels: "ViewChannels",

    /**
     * value: "ViewOnboarding"
     * @const
     */
    ViewOnboarding: "ViewOnboarding",

    /**
     * value: "UpdateOnboarding"
     * @const
     */
    UpdateOnboarding: "UpdateOnboarding"
  };


  /**
   * Allowed values for the <code>ApplicationCategory</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationCategoryEnum = {
    /**
     * value: "Restaurant"
     * @const
     */
    Restaurant: "Restaurant",

    /**
     * value: "Cafe"
     * @const
     */
    Cafe: "Cafe",

    /**
     * value: "Convenience"
     * @const
     */
    Convenience: "Convenience"
  };

  return exports;

}));
