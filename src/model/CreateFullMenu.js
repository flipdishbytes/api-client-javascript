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
    define(['ApiClient', 'model/CreateFullMenuSection', 'model/CreateMenuTaxRate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateFullMenuSection'), require('./CreateMenuTaxRate'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateFullMenu = factory(root.Flipdish.ApiClient, root.Flipdish.CreateFullMenuSection, root.Flipdish.CreateMenuTaxRate);
  }
}(this, function(ApiClient, CreateFullMenuSection, CreateMenuTaxRate) {
  'use strict';

  /**
   * The CreateFullMenu model module.
   * @module model/CreateFullMenu
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFullMenu</code>.
   * Create menu object
   * @alias module:model/CreateFullMenu
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFullMenu</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFullMenu} obj Optional instance to populate.
   * @return {module:model/CreateFullMenu} The populated <code>CreateFullMenu</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('ImageUrl'))
        obj.ImageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
      if (data.hasOwnProperty('MenuSections'))
        obj.MenuSections = ApiClient.convertToType(data['MenuSections'], [CreateFullMenuSection]);
      if (data.hasOwnProperty('TaxRates'))
        obj.TaxRates = ApiClient.convertToType(data['TaxRates'], [CreateMenuTaxRate]);
      if (data.hasOwnProperty('DisplaySectionLinks'))
        obj.DisplaySectionLinks = ApiClient.convertToType(data['DisplaySectionLinks'], 'Boolean');
      if (data.hasOwnProperty('MenuSectionBehaviour'))
        obj.MenuSectionBehaviour = ApiClient.convertToType(data['MenuSectionBehaviour'], 'String');
      if (data.hasOwnProperty('TaxType'))
        obj.TaxType = ApiClient.convertToType(data['TaxType'], 'String');
    }
    return obj;
  }

  /**
   * Name of Menu, only shown in portal
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Image url
   * @member {String} ImageUrl
   */
  exports.prototype.ImageUrl = undefined;

  /**
   * Menu sections (starters, main etc)
   * @member {Array.<module:model/CreateFullMenuSection>} MenuSections
   */
  exports.prototype.MenuSections = undefined;

  /**
   * Menu tax rates
   * @member {Array.<module:model/CreateMenuTaxRate>} TaxRates
   */
  exports.prototype.TaxRates = undefined;

  /**
   * Display menu section link on UI
   * @member {Boolean} DisplaySectionLinks
   */
  exports.prototype.DisplaySectionLinks = undefined;

  /**
   * Menu section behaviour
   * @member {module:model/CreateFullMenu.MenuSectionBehaviourEnum} MenuSectionBehaviour
   */
  exports.prototype.MenuSectionBehaviour = undefined;

  /**
   * Tax type
   * @member {module:model/CreateFullMenu.TaxTypeEnum} TaxType
   */
  exports.prototype.TaxType = undefined;



  /**
   * Allowed values for the <code>MenuSectionBehaviour</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MenuSectionBehaviourEnum = {
    /**
     * value: "ExpandSingle"
     * @const
     */
    ExpandSingle: "ExpandSingle",

    /**
     * value: "ExpandMultiple"
     * @const
     */
    ExpandMultiple: "ExpandMultiple"
  };


  /**
   * Allowed values for the <code>TaxType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TaxTypeEnum = {
    /**
     * value: "IncludedInBasePrice"
     * @const
     */
    IncludedInBasePrice: "IncludedInBasePrice",

    /**
     * value: "ExcludedFromBasePrice"
     * @const
     */
    ExcludedFromBasePrice: "ExcludedFromBasePrice"
  };

  return exports;

}));
