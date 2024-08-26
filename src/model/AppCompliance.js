/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.AppCompliance = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppCompliance model module.
   * @module model/AppCompliance
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppCompliance</code>.
   * Application compliance model
   * @alias module:model/AppCompliance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppCompliance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppCompliance} obj Optional instance to populate.
   * @return {module:model/AppCompliance} The populated <code>AppCompliance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('ComplianceType'))
        obj.ComplianceType = ApiClient.convertToType(data['ComplianceType'], 'String');
      if (data.hasOwnProperty('AllowDisablingOfGdpr'))
        obj.AllowDisablingOfGdpr = ApiClient.convertToType(data['AllowDisablingOfGdpr'], 'Boolean');
    }
    return obj;
  }

  /**
   * App ID
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * Type of compliance.  This controls if the Flipdish websites and apps display cookie consent banners and adjust cookies to be inline with various regulations.   You should set this correctly based on your region.
   * @member {module:model/AppCompliance.ComplianceTypeEnum} ComplianceType
   */
  exports.prototype.ComplianceType = undefined;

  /**
   * For EU countries, we should not allow to change the option to “Default banner”, but all other countries should be able to do so.
   * @member {Boolean} AllowDisablingOfGdpr
   */
  exports.prototype.AllowDisablingOfGdpr = undefined;



  /**
   * Allowed values for the <code>ComplianceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ComplianceTypeEnum = {
    /**
     * value: "Default"
     * @const
     */
    _Default: "Default",

    /**
     * value: "GdprCompliance"
     * @const
     */
    GdprCompliance: "GdprCompliance"
  };

  return exports;

}));
