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
    root.Flipdish.KioskCashSetting = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The KioskCashSetting model module.
   * @module model/KioskCashSetting
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KioskCashSetting</code>.
   * Model containing result of Kiosk cash setting
   * @alias module:model/KioskCashSetting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KioskCashSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KioskCashSetting} obj Optional instance to populate.
   * @return {module:model/KioskCashSetting} The populated <code>KioskCashSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CashPaymentEnabled'))
        obj.CashPaymentEnabled = ApiClient.convertToType(data['CashPaymentEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Indicated whether cash payment is enabled or not eg: true
   * @member {Boolean} CashPaymentEnabled
   */
  exports.prototype.CashPaymentEnabled = undefined;


  return exports;

}));
