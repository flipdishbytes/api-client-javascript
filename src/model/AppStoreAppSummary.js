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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.AppStoreAppSummary = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppStoreAppSummary model module.
   * @module model/AppStoreAppSummary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppStoreAppSummary</code>.
   * App store app summary information
   * @alias module:model/AppStoreAppSummary
   * @class
   * @param VerificationStatus {module:model/AppStoreAppSummary.VerificationStatusEnum} Application verification status
   * @param Name {String} Name
   * @param Description {String} Description
   * @param Categories {Array.<module:model/AppStoreAppSummary.CategoriesEnum>} Categories
   * @param Countries {Array.<module:model/AppStoreAppSummary.CountriesEnum>} Countries
   */
  var exports = function(VerificationStatus, Name, Description, Categories, Countries) {
    this.VerificationStatus = VerificationStatus;
    this.Name = Name;
    this.Description = Description;
    this.Categories = Categories;
    this.Countries = Countries;
  };

  /**
   * Constructs a <code>AppStoreAppSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreAppSummary} obj Optional instance to populate.
   * @return {module:model/AppStoreAppSummary} The populated <code>AppStoreAppSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('VerificationStatus'))
        obj.VerificationStatus = ApiClient.convertToType(data['VerificationStatus'], 'String');
      if (data.hasOwnProperty('Logo'))
        obj.Logo = ApiClient.convertToType(data['Logo'], 'String');
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
   * Unique App store app id
   * @member {String} Id
   */
  exports.prototype.Id = undefined;

  /**
   * Application verification status
   * @member {module:model/AppStoreAppSummary.VerificationStatusEnum} VerificationStatus
   */
  exports.prototype.VerificationStatus = undefined;

  /**
   * Logo
   * @member {String} Logo
   */
  exports.prototype.Logo = undefined;

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
   * @member {Array.<module:model/AppStoreAppSummary.CategoriesEnum>} Categories
   */
  exports.prototype.Categories = undefined;

  /**
   * Countries
   * @member {Array.<module:model/AppStoreAppSummary.CountriesEnum>} Countries
   */
  exports.prototype.Countries = undefined;

  /**
   * Developer Name
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
