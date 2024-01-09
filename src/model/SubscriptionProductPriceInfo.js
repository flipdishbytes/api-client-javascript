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
    root.Flipdish.SubscriptionProductPriceInfo = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SubscriptionProductPriceInfo model module.
   * @module model/SubscriptionProductPriceInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubscriptionProductPriceInfo</code>.
   * Price info
   * @alias module:model/SubscriptionProductPriceInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SubscriptionProductPriceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProductPriceInfo} obj Optional instance to populate.
   * @return {module:model/SubscriptionProductPriceInfo} The populated <code>SubscriptionProductPriceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Amount'))
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('Currency'))
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('Scope'))
        obj.Scope = ApiClient.convertToType(data['Scope'], 'String');
    }
    return obj;
  }

  /**
   * Price amount
   * @member {Number} Amount
   */
  exports.prototype.Amount = undefined;

  /**
   * Currency code
   * @member {String} Currency
   */
  exports.prototype.Currency = undefined;

  /**
   * Scope (eg. per store or per whitelabel)
   * @member {module:model/SubscriptionProductPriceInfo.ScopeEnum} Scope
   */
  exports.prototype.Scope = undefined;



  /**
   * Allowed values for the <code>Scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "Store"
     * @const
     */
    Store: "Store",

    /**
     * value: "Whitelabel"
     * @const
     */
    Whitelabel: "Whitelabel"
  };

  return exports;

}));
