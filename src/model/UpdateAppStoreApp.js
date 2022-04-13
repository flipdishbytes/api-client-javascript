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
    define(['ApiClient', 'model/FieldGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.UpdateAppStoreApp = factory(root.Flipdish.ApiClient, root.Flipdish.FieldGroup);
  }
}(this, function(ApiClient, FieldGroup) {
  'use strict';

  /**
   * The UpdateAppStoreApp model module.
   * @module model/UpdateAppStoreApp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateAppStoreApp</code>.
   * Update App store app
   * @alias module:model/UpdateAppStoreApp
   * @class
   * @param Details {String} Details
   * @param ConfigurationType {module:model/UpdateAppStoreApp.ConfigurationTypeEnum} Configuration type  <example>External link</example><example>Flipdish hosted</example>
   * @param StoreSelectorType {module:model/UpdateAppStoreApp.StoreSelectorTypeEnum} Store selector type
   * @param PermissionsType {module:model/UpdateAppStoreApp.PermissionsTypeEnum} Permissions type
   * @param Name {String} Name
   * @param Description {String} Description
   * @param Categories {Array.<module:model/UpdateAppStoreApp.CategoriesEnum>} Categories
   * @param Countries {Array.<module:model/UpdateAppStoreApp.CountriesEnum>} Countries
   */
  var exports = function(Details, ConfigurationType, StoreSelectorType, PermissionsType, Name, Description, Categories, Countries) {
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
   * Constructs a <code>UpdateAppStoreApp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAppStoreApp} obj Optional instance to populate.
   * @return {module:model/UpdateAppStoreApp} The populated <code>UpdateAppStoreApp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
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
   * Details
   * @member {String} Details
   */
  exports.prototype.Details = undefined;

  /**
   * Configuration type  <example>External link</example><example>Flipdish hosted</example>
   * @member {module:model/UpdateAppStoreApp.ConfigurationTypeEnum} ConfigurationType
   */
  exports.prototype.ConfigurationType = undefined;

  /**
   * Store selector type
   * @member {module:model/UpdateAppStoreApp.StoreSelectorTypeEnum} StoreSelectorType
   */
  exports.prototype.StoreSelectorType = undefined;

  /**
   * Field groups
   * @member {Array.<module:model/FieldGroup>} FieldGroups
   */
  exports.prototype.FieldGroups = undefined;

  /**
   * Setup instructions
   * @member {String} SetupInstructions
   */
  exports.prototype.SetupInstructions = undefined;

  /**
   * External setup link
   * @member {String} ExternalSetupLink
   */
  exports.prototype.ExternalSetupLink = undefined;

  /**
   * Teammate app access level
   * @member {module:model/UpdateAppStoreApp.TeammateAppAccessLevelEnum} TeammateAppAccessLevel
   */
  exports.prototype.TeammateAppAccessLevel = undefined;

  /**
   * Permissions type
   * @member {module:model/UpdateAppStoreApp.PermissionsTypeEnum} PermissionsType
   */
  exports.prototype.PermissionsType = undefined;

  /**
   * Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Is application enabled
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * Categories
   * @member {Array.<module:model/UpdateAppStoreApp.CategoriesEnum>} Categories
   */
  exports.prototype.Categories = undefined;

  /**
   * Countries
   * @member {Array.<module:model/UpdateAppStoreApp.CountriesEnum>} Countries
   */
  exports.prototype.Countries = undefined;

  /**
   * Developer Name
   * @member {String} DeveloperName
   */
  exports.prototype.DeveloperName = undefined;



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
