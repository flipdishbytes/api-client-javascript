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
    root.Flipdish.ExecuteConfigurationActionResult = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExecuteConfigurationActionResult model module.
   * @module model/ExecuteConfigurationActionResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExecuteConfigurationActionResult</code>.
   * @alias module:model/ExecuteConfigurationActionResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExecuteConfigurationActionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExecuteConfigurationActionResult} obj Optional instance to populate.
   * @return {module:model/ExecuteConfigurationActionResult} The populated <code>ExecuteConfigurationActionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ErrorMessage'))
        obj.ErrorMessage = ApiClient.convertToType(data['ErrorMessage'], 'String');
      if (data.hasOwnProperty('InfoMessage'))
        obj.InfoMessage = ApiClient.convertToType(data['InfoMessage'], 'String');
      if (data.hasOwnProperty('RedirectUrl'))
        obj.RedirectUrl = ApiClient.convertToType(data['RedirectUrl'], 'String');
      if (data.hasOwnProperty('RedirectTarget'))
        obj.RedirectTarget = ApiClient.convertToType(data['RedirectTarget'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} ErrorMessage
   */
  exports.prototype.ErrorMessage = undefined;

  /**
   * @member {String} InfoMessage
   */
  exports.prototype.InfoMessage = undefined;

  /**
   * @member {String} RedirectUrl
   */
  exports.prototype.RedirectUrl = undefined;

  /**
   * @member {module:model/ExecuteConfigurationActionResult.RedirectTargetEnum} RedirectTarget
   */
  exports.prototype.RedirectTarget = undefined;



  /**
   * Allowed values for the <code>RedirectTarget</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RedirectTargetEnum = {
    /**
     * value: "Default"
     * @const
     */
    _Default: "Default",

    /**
     * value: "NewWindow"
     * @const
     */
    NewWindow: "NewWindow",

    /**
     * value: "Popup"
     * @const
     */
    Popup: "Popup"
  };

  return exports;

}));
