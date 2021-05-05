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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.ProcessingFeeConfig = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessingFeeConfig model module.
   * @module model/ProcessingFeeConfig
   * @version v1.0
   */

  /**
   * Constructs a new <code>ProcessingFeeConfig</code>.
   * Processing fee config
   * @alias module:model/ProcessingFeeConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProcessingFeeConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessingFeeConfig} obj Optional instance to populate.
   * @return {module:model/ProcessingFeeConfig} The populated <code>ProcessingFeeConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.storeId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('PaymentAccountType'))
        obj.paymentAccountType = ApiClient.convertToType(data['PaymentAccountType'], 'String');
      if (data.hasOwnProperty('PercentFee'))
        obj.percentFee = ApiClient.convertToType(data['PercentFee'], 'Number');
      if (data.hasOwnProperty('FixedFee'))
        obj.fixedFee = ApiClient.convertToType(data['FixedFee'], 'Number');
    }
    return obj;
  }

  /**
   * Store Id
   * @member {Number} storeId
   */
  exports.prototype.storeId = undefined;

  /**
   * Payment account type
   * @member {module:model/ProcessingFeeConfig.PaymentAccountTypeEnum} paymentAccountType
   */
  exports.prototype.paymentAccountType = undefined;

  /**
   * Percent fee to customer, including VAT
   * @member {Number} percentFee
   */
  exports.prototype.percentFee = undefined;

  /**
   * Fixed fee to customer, including VAT
   * @member {Number} fixedFee
   */
  exports.prototype.fixedFee = undefined;



  /**
   * Allowed values for the <code>paymentAccountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentAccountTypeEnum = {
    /**
     * value: "Card"
     * @const
     */
    card: "Card",

    /**
     * value: "Cash"
     * @const
     */
    cash: "Cash",

    /**
     * value: "Ideal"
     * @const
     */
    ideal: "Ideal",

    /**
     * value: "Bancontact"
     * @const
     */
    bancontact: "Bancontact",

    /**
     * value: "Giropay"
     * @const
     */
    giropay: "Giropay",

    /**
     * value: "Eps"
     * @const
     */
    eps: "Eps",

    /**
     * value: "Emv"
     * @const
     */
    emv: "Emv",

    /**
     * value: "PayPal"
     * @const
     */
    payPal: "PayPal"
  };

  return exports;

}));
