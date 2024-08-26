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
    root.Flipdish.ChargebackDetails = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChargebackDetails model module.
   * @module model/ChargebackDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ChargebackDetails</code>.
   * Chargebacks breakdown
   * @alias module:model/ChargebackDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChargebackDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChargebackDetails} obj Optional instance to populate.
   * @return {module:model/ChargebackDetails} The populated <code>ChargebackDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ChargebackAmount'))
        obj.ChargebackAmount = ApiClient.convertToType(data['ChargebackAmount'], 'Number');
      if (data.hasOwnProperty('PosSalesChargebackAmount'))
        obj.PosSalesChargebackAmount = ApiClient.convertToType(data['PosSalesChargebackAmount'], 'Number');
      if (data.hasOwnProperty('ChargebackRefundedFees'))
        obj.ChargebackRefundedFees = ApiClient.convertToType(data['ChargebackRefundedFees'], 'Number');
      if (data.hasOwnProperty('ChargebacksCount'))
        obj.ChargebacksCount = ApiClient.convertToType(data['ChargebacksCount'], 'Number');
      if (data.hasOwnProperty('TotalChargebackCost'))
        obj.TotalChargebackCost = ApiClient.convertToType(data['TotalChargebackCost'], 'Number');
    }
    return obj;
  }

  /**
   * Chargeback amount
   * @member {Number} ChargebackAmount
   */
  exports.prototype.ChargebackAmount = undefined;

  /**
   * POS Chargeback amount
   * @member {Number} PosSalesChargebackAmount
   */
  exports.prototype.PosSalesChargebackAmount = undefined;

  /**
   * Chargeback refunded feeds
   * @member {Number} ChargebackRefundedFees
   */
  exports.prototype.ChargebackRefundedFees = undefined;

  /**
   * Number of chargebacks
   * @member {Number} ChargebacksCount
   */
  exports.prototype.ChargebacksCount = undefined;

  /**
   * Total amount
   * @member {Number} TotalChargebackCost
   */
  exports.prototype.TotalChargebackCost = undefined;


  return exports;

}));
