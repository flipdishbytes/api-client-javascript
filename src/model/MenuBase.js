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
    root.Flipdish.MenuBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuBase model module.
   * @module model/MenuBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuBase</code>.
   * Menu base
   * @alias module:model/MenuBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuBase} obj Optional instance to populate.
   * @return {module:model/MenuBase} The populated <code>MenuBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
   * Display menu section link on UI
   * @member {Boolean} DisplaySectionLinks
   */
  exports.prototype.DisplaySectionLinks = undefined;

  /**
   * Menu section behaviour
   * @member {module:model/MenuBase.MenuSectionBehaviourEnum} MenuSectionBehaviour
   */
  exports.prototype.MenuSectionBehaviour = undefined;

  /**
   * Tax type
   * @member {module:model/MenuBase.TaxTypeEnum} TaxType
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
