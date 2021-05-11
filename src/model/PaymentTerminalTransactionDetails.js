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
    root.Flipdish.PaymentTerminalTransactionDetails = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaymentTerminalTransactionDetails model module.
   * @module model/PaymentTerminalTransactionDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PaymentTerminalTransactionDetails</code>.
   * Details of Payment Terminal Transaction
   * @alias module:model/PaymentTerminalTransactionDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PaymentTerminalTransactionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentTerminalTransactionDetails} obj Optional instance to populate.
   * @return {module:model/PaymentTerminalTransactionDetails} The populated <code>PaymentTerminalTransactionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CardSchemeName'))
        obj.CardSchemeName = ApiClient.convertToType(data['CardSchemeName'], 'String');
      if (data.hasOwnProperty('DateOfExpiry'))
        obj.DateOfExpiry = ApiClient.convertToType(data['DateOfExpiry'], 'String');
      if (data.hasOwnProperty('AuthCode'))
        obj.AuthCode = ApiClient.convertToType(data['AuthCode'], 'String');
      if (data.hasOwnProperty('TransactionResult'))
        obj.TransactionResult = ApiClient.convertToType(data['TransactionResult'], 'String');
      if (data.hasOwnProperty('PrimaryAccountNumber'))
        obj.PrimaryAccountNumber = ApiClient.convertToType(data['PrimaryAccountNumber'], 'String');
      if (data.hasOwnProperty('CardholderVerificationMethod'))
        obj.CardholderVerificationMethod = ApiClient.convertToType(data['CardholderVerificationMethod'], 'String');
    }
    return obj;
  }

  /**
   * Card Type
   * @member {String} CardSchemeName
   */
  exports.prototype.CardSchemeName = undefined;

  /**
   * Expirey Date on Card
   * @member {String} DateOfExpiry
   */
  exports.prototype.DateOfExpiry = undefined;

  /**
   * AuthCode
   * @member {String} AuthCode
   */
  exports.prototype.AuthCode = undefined;

  /**
   * State of Request, \"PENDING\" is not yet completed
   * @member {String} TransactionResult
   */
  exports.prototype.TransactionResult = undefined;

  /**
   * Masked PAN
   * @member {String} PrimaryAccountNumber
   */
  exports.prototype.PrimaryAccountNumber = undefined;

  /**
   * Type of Verification.
   * @member {String} CardholderVerificationMethod
   */
  exports.prototype.CardholderVerificationMethod = undefined;


  return exports;

}));