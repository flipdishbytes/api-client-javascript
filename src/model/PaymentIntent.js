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
    root.Flipdish.PaymentIntent = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaymentIntent model module.
   * @module model/PaymentIntent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PaymentIntent</code>.
   * Represents stripe PaymentIntent
   * @alias module:model/PaymentIntent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentIntent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentIntent} obj Optional instance to populate.
   * @return {module:model/PaymentIntent} The populated <code>PaymentIntent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Currency'))
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.Created = ApiClient.convertToType(data['Created'], 'Date');
    }
    return obj;
  }

  /**
   * Id of payment intent
   * @member {String} Id
   */
  exports.prototype.Id = undefined;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Three-letter <a href=\"https://www.iso.org/iso-4217-currency-codes.html\">ISO currency  code</a>, in lowercase. Must be a <a href=\"https://stripe.com/docs/currencies\">supported  currency</a>.
   * @member {String} Currency
   */
  exports.prototype.Currency = undefined;

  /**
   * Status of this PaymentIntent, one of requires_payment_method,  requires_confirmation, requires_action, processing,  requires_capture, canceled, or succeeded. Read more about each  PaymentIntent <a href=\"https://stripe.com/docs/payments/intents#intent-statuses\">status</a>.  One of: canceled, processing, requires_action,  requires_capture, requires_confirmation, requires_payment_method,  or succeeded.
   * @member {String} Status
   */
  exports.prototype.Status = undefined;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   * @member {Date} Created
   */
  exports.prototype.Created = undefined;


  return exports;

}));
