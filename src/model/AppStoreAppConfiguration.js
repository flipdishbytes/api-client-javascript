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
    define(['ApiClient', 'model/AppStoreAppSupportInfo', 'model/FieldGroup', 'model/Setting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppStoreAppSupportInfo'), require('./FieldGroup'), require('./Setting'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.AppStoreAppConfiguration = factory(root.Flipdish.ApiClient, root.Flipdish.AppStoreAppSupportInfo, root.Flipdish.FieldGroup, root.Flipdish.Setting);
  }
}(this, function(ApiClient, AppStoreAppSupportInfo, FieldGroup, Setting) {
  'use strict';

  /**
   * The AppStoreAppConfiguration model module.
   * @module model/AppStoreAppConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppStoreAppConfiguration</code>.
   * @alias module:model/AppStoreAppConfiguration
   * @class
   * @param Id {String} 
   * @param AppId {String} 
   * @param AppStoreAppId {String} 
   * @param IsEnabled {Boolean} 
   * @param VerificationStatus {module:model/AppStoreAppConfiguration.VerificationStatusEnum} 
   * @param OAuthAppId {String} 
   * @param Internal {Boolean} 
   * @param Details {String} 
   * @param ConfigurationType {module:model/AppStoreAppConfiguration.ConfigurationTypeEnum} 
   * @param StoreSelectorType {module:model/AppStoreAppConfiguration.StoreSelectorTypeEnum} 
   * @param PermissionsType {module:model/AppStoreAppConfiguration.PermissionsTypeEnum} 
   * @param Name {String} 
   * @param Description {String} 
   * @param Categories {Array.<module:model/AppStoreAppConfiguration.CategoriesEnum>} 
   * @param Countries {Array.<module:model/AppStoreAppConfiguration.CountriesEnum>} 
   */
  var exports = function(Id, AppId, AppStoreAppId, IsEnabled, VerificationStatus, OAuthAppId, Internal, Details, ConfigurationType, StoreSelectorType, PermissionsType, Name, Description, Categories, Countries) {
    this.Id = Id;
    this.AppId = AppId;
    this.AppStoreAppId = AppStoreAppId;
    this.IsEnabled = IsEnabled;
    this.VerificationStatus = VerificationStatus;
    this.OAuthAppId = OAuthAppId;
    this.Internal = Internal;
    this.Details = Details;
    this.ConfigurationType = ConfigurationType;
    this.StoreSelectorType = StoreSelectorType;
    this.PermissionsType = PermissionsType;
    this.Name = Name;
    this.Description = Description;
    this.Categories = Categories;
    this.Countries = Countries;
  };

  /**
   * Constructs a <code>AppStoreAppConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreAppConfiguration} obj Optional instance to populate.
   * @return {module:model/AppStoreAppConfiguration} The populated <code>AppStoreAppConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('AppStoreAppId'))
        obj.AppStoreAppId = ApiClient.convertToType(data['AppStoreAppId'], 'String');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
      if (data.hasOwnProperty('Settings'))
        obj.Settings = ApiClient.convertToType(data['Settings'], [Setting]);
      if (data.hasOwnProperty('VerificationStatus'))
        obj.VerificationStatus = ApiClient.convertToType(data['VerificationStatus'], 'String');
      if (data.hasOwnProperty('Logo'))
        obj.Logo = ApiClient.convertToType(data['Logo'], 'String');
      if (data.hasOwnProperty('OAuthAppId'))
        obj.OAuthAppId = ApiClient.convertToType(data['OAuthAppId'], 'String');
      if (data.hasOwnProperty('Internal'))
        obj.Internal = ApiClient.convertToType(data['Internal'], 'Boolean');
      if (data.hasOwnProperty('Details'))
        obj.Details = ApiClient.convertToType(data['Details'], 'String');
      if (data.hasOwnProperty('ConfigurationType'))
        obj.ConfigurationType = ApiClient.convertToType(data['ConfigurationType'], 'String');
      if (data.hasOwnProperty('StoreSelectorType'))
        obj.StoreSelectorType = ApiClient.convertToType(data['StoreSelectorType'], 'String');
      if (data.hasOwnProperty('FieldGroups'))
        obj.FieldGroups = ApiClient.convertToType(data['FieldGroups'], [FieldGroup]);
      if (data.hasOwnProperty('SetupInstructions'))
        obj.SetupInstructions = ApiClient.convertToType(data['SetupInstructions'], 'String');
      if (data.hasOwnProperty('ExternalSetupLink'))
        obj.ExternalSetupLink = ApiClient.convertToType(data['ExternalSetupLink'], 'String');
      if (data.hasOwnProperty('TeammateAppAccessLevel'))
        obj.TeammateAppAccessLevel = ApiClient.convertToType(data['TeammateAppAccessLevel'], 'String');
      if (data.hasOwnProperty('PermissionsType'))
        obj.PermissionsType = ApiClient.convertToType(data['PermissionsType'], 'String');
      if (data.hasOwnProperty('Support'))
        obj.Support = AppStoreAppSupportInfo.constructFromObject(data['Support']);
      if (data.hasOwnProperty('ExternalFunctionActionUrl'))
        obj.ExternalFunctionActionUrl = ApiClient.convertToType(data['ExternalFunctionActionUrl'], 'String');
      if (data.hasOwnProperty('ExternalFunctionSignatureKey'))
        obj.ExternalFunctionSignatureKey = ApiClient.convertToType(data['ExternalFunctionSignatureKey'], 'String');
      if (data.hasOwnProperty('IsPaid'))
        obj.IsPaid = ApiClient.convertToType(data['IsPaid'], 'Boolean');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Categories'))
        obj.Categories = ApiClient.convertToType(data['Categories'], ['String']);
      if (data.hasOwnProperty('Countries'))
        obj.Countries = ApiClient.convertToType(data['Countries'], ['String']);
      if (data.hasOwnProperty('DeveloperName'))
        obj.DeveloperName = ApiClient.convertToType(data['DeveloperName'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} Id
   */
  exports.prototype.Id = undefined;

  /**
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * @member {String} AppStoreAppId
   */
  exports.prototype.AppStoreAppId = undefined;

  /**
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;

  /**
   * @member {Array.<module:model/Setting>} Settings
   */
  exports.prototype.Settings = undefined;

  /**
   * @member {module:model/AppStoreAppConfiguration.VerificationStatusEnum} VerificationStatus
   */
  exports.prototype.VerificationStatus = undefined;

  /**
   * @member {String} Logo
   */
  exports.prototype.Logo = undefined;

  /**
   * @member {String} OAuthAppId
   */
  exports.prototype.OAuthAppId = undefined;

  /**
   * @member {Boolean} Internal
   */
  exports.prototype.Internal = undefined;

  /**
   * @member {String} Details
   */
  exports.prototype.Details = undefined;

  /**
   * @member {module:model/AppStoreAppConfiguration.ConfigurationTypeEnum} ConfigurationType
   */
  exports.prototype.ConfigurationType = undefined;

  /**
   * @member {module:model/AppStoreAppConfiguration.StoreSelectorTypeEnum} StoreSelectorType
   */
  exports.prototype.StoreSelectorType = undefined;

  /**
   * @member {Array.<module:model/FieldGroup>} FieldGroups
   */
  exports.prototype.FieldGroups = undefined;

  /**
   * @member {String} SetupInstructions
   */
  exports.prototype.SetupInstructions = undefined;

  /**
   * @member {String} ExternalSetupLink
   */
  exports.prototype.ExternalSetupLink = undefined;

  /**
   * @member {module:model/AppStoreAppConfiguration.TeammateAppAccessLevelEnum} TeammateAppAccessLevel
   */
  exports.prototype.TeammateAppAccessLevel = undefined;

  /**
   * @member {module:model/AppStoreAppConfiguration.PermissionsTypeEnum} PermissionsType
   */
  exports.prototype.PermissionsType = undefined;

  /**
   * @member {module:model/AppStoreAppSupportInfo} Support
   */
  exports.prototype.Support = undefined;

  /**
   * @member {String} ExternalFunctionActionUrl
   */
  exports.prototype.ExternalFunctionActionUrl = undefined;

  /**
   * @member {String} ExternalFunctionSignatureKey
   */
  exports.prototype.ExternalFunctionSignatureKey = undefined;

  /**
   * @member {Boolean} IsPaid
   */
  exports.prototype.IsPaid = undefined;

  /**
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * @member {Array.<module:model/AppStoreAppConfiguration.CategoriesEnum>} Categories
   */
  exports.prototype.Categories = undefined;

  /**
   * @member {Array.<module:model/AppStoreAppConfiguration.CountriesEnum>} Countries
   */
  exports.prototype.Countries = undefined;

  /**
   * @member {String} DeveloperName
   */
  exports.prototype.DeveloperName = undefined;



  /**
   * Allowed values for the <code>VerificationStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VerificationStatusEnum = {
    /**
     * value: "Draft"
     * @const
     */
    Draft: "Draft",

    /**
     * value: "Submitted"
     * @const
     */
    Submitted: "Submitted",

    /**
     * value: "Verified"
     * @const
     */
    Verified: "Verified"
  };


  /**
   * Allowed values for the <code>ConfigurationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ConfigurationTypeEnum = {
    /**
     * value: "ExternalLink"
     * @const
     */
    ExternalLink: "ExternalLink",

    /**
     * value: "FlipdishHosted"
     * @const
     */
    FlipdishHosted: "FlipdishHosted"
  };


  /**
   * Allowed values for the <code>StoreSelectorType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StoreSelectorTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Single"
     * @const
     */
    Single: "Single",

    /**
     * value: "Multiple"
     * @const
     */
    Multiple: "Multiple"
  };


  /**
   * Allowed values for the <code>TeammateAppAccessLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TeammateAppAccessLevelEnum = {
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
    FinanceManger: "FinanceManger"
  };


  /**
   * Allowed values for the <code>PermissionsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionsTypeEnum = {
    /**
     * value: "Teammate"
     * @const
     */
    Teammate: "Teammate"
  };


  /**
   * Allowed values for the <code>Categories</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoriesEnum = {
    /**
     * value: "PointOfSale"
     * @const
     */
    PointOfSale: "PointOfSale",

    /**
     * value: "DeliveryAndLogistics"
     * @const
     */
    DeliveryAndLogistics: "DeliveryAndLogistics",

    /**
     * value: "CRM"
     * @const
     */
    CRM: "CRM",

    /**
     * value: "GiftCard"
     * @const
     */
    GiftCard: "GiftCard",

    /**
     * value: "Accounting"
     * @const
     */
    Accounting: "Accounting",

    /**
     * value: "LoyaltyAndMarketing"
     * @const
     */
    LoyaltyAndMarketing: "LoyaltyAndMarketing",

    /**
     * value: "Other"
     * @const
     */
    Other: "Other"
  };


  /**
   * Allowed values for the <code>Countries</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CountriesEnum = {
    /**
     * value: "GB"
     * @const
     */
    GB: "GB",

    /**
     * value: "IE"
     * @const
     */
    IE: "IE",

    /**
     * value: "FR"
     * @const
     */
    FR: "FR",

    /**
     * value: "ES"
     * @const
     */
    ES: "ES",

    /**
     * value: "PT"
     * @const
     */
    PT: "PT",

    /**
     * value: "IT"
     * @const
     */
    IT: "IT",

    /**
     * value: "DE"
     * @const
     */
    DE: "DE",

    /**
     * value: "PL"
     * @const
     */
    PL: "PL",

    /**
     * value: "BE"
     * @const
     */
    BE: "BE",

    /**
     * value: "LU"
     * @const
     */
    LU: "LU",

    /**
     * value: "NL"
     * @const
     */
    NL: "NL",

    /**
     * value: "US"
     * @const
     */
    US: "US",

    /**
     * value: "CA"
     * @const
     */
    CA: "CA",

    /**
     * value: "BG"
     * @const
     */
    BG: "BG",

    /**
     * value: "MX"
     * @const
     */
    MX: "MX",

    /**
     * value: "AU"
     * @const
     */
    AU: "AU",

    /**
     * value: "NZ"
     * @const
     */
    NZ: "NZ"
  };

  return exports;

}));
