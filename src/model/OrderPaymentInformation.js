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
    root.Flipdish.OrderPaymentInformation = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderPaymentInformation model module.
   * @module model/OrderPaymentInformation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderPaymentInformation</code>.
   * Order Payment Information
   * @alias module:model/OrderPaymentInformation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPaymentInformation} obj Optional instance to populate.
   * @return {module:model/OrderPaymentInformation} The populated <code>OrderPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('PaymentRefundable'))
        obj.PaymentRefundable = ApiClient.convertToType(data['PaymentRefundable'], 'Boolean');
    }
    return obj;
  }

  /**
   * ID of the Order
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * Signifies if the payment is refundable
   * @member {Boolean} PaymentRefundable
   */
  exports.prototype.PaymentRefundable = undefined;


  return exports;

}));
