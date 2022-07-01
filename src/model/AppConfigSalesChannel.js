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
    root.Flipdish.AppConfigSalesChannel = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppConfigSalesChannel model module.
   * @module model/AppConfigSalesChannel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppConfigSalesChannel</code>.
   * App Config Sales Channel
   * @alias module:model/AppConfigSalesChannel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppConfigSalesChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppConfigSalesChannel} obj Optional instance to populate.
   * @return {module:model/AppConfigSalesChannel} The populated <code>AppConfigSalesChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EmailRequestMode'))
        obj.EmailRequestMode = ApiClient.convertToType(data['EmailRequestMode'], 'String');
      if (data.hasOwnProperty('WebToAppRedirect'))
        obj.WebToAppRedirect = ApiClient.convertToType(data['WebToAppRedirect'], 'String');
      if (data.hasOwnProperty('DisplayDeliveryRestaurantListScreen'))
        obj.DisplayDeliveryRestaurantListScreen = ApiClient.convertToType(data['DisplayDeliveryRestaurantListScreen'], 'Boolean');
    }
    return obj;
  }

  /**
   * Display a popup to users requesting their email address
   * @member {module:model/AppConfigSalesChannel.EmailRequestModeEnum} EmailRequestMode
   */
  exports.prototype.EmailRequestMode = undefined;

  /**
   * Sends users to their native apps or request them to install the pwa
   * @member {module:model/AppConfigSalesChannel.WebToAppRedirectEnum} WebToAppRedirect
   */
  exports.prototype.WebToAppRedirect = undefined;

  /**
   * Display Pickup Restaurant List Screen
   * @member {Boolean} DisplayDeliveryRestaurantListScreen
   */
  exports.prototype.DisplayDeliveryRestaurantListScreen = undefined;



  /**
   * Allowed values for the <code>EmailRequestMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EmailRequestModeEnum = {
    /**
     * value: "DoNotRequest"
     * @const
     */
    DoNotRequest: "DoNotRequest",

    /**
     * value: "Request"
     * @const
     */
    Request: "Request",

    /**
     * value: "Require"
     * @const
     */
    Require: "Require"
  };


  /**
   * Allowed values for the <code>WebToAppRedirect</code> property.
   * @enum {String}
   * @readonly
   */
  exports.WebToAppRedirectEnum = {
    /**
     * value: "NoRedirect"
     * @const
     */
    NoRedirect: "NoRedirect",

    /**
     * value: "RedirectOnce"
     * @const
     */
    RedirectOnce: "RedirectOnce",

    /**
     * value: "RedirectAlways"
     * @const
     */
    RedirectAlways: "RedirectAlways",

    /**
     * value: "SuggestPwa"
     * @const
     */
    SuggestPwa: "SuggestPwa",

    /**
     * value: "ForcePwa"
     * @const
     */
    ForcePwa: "ForcePwa"
  };

  return exports;

}));
