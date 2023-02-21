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
    root.Flipdish.RevenueAdjustmentsDetails = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RevenueAdjustmentsDetails model module.
   * @module model/RevenueAdjustmentsDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RevenueAdjustmentsDetails</code>.
   * Revenue Adjustments breakdown
   * @alias module:model/RevenueAdjustmentsDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RevenueAdjustmentsDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevenueAdjustmentsDetails} obj Optional instance to populate.
   * @return {module:model/RevenueAdjustmentsDetails} The populated <code>RevenueAdjustmentsDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OnlineSalesRefundedAmount'))
        obj.OnlineSalesRefundedAmount = ApiClient.convertToType(data['OnlineSalesRefundedAmount'], 'Number');
      if (data.hasOwnProperty('PosSalesRefundedAmount'))
        obj.PosSalesRefundedAmount = ApiClient.convertToType(data['PosSalesRefundedAmount'], 'Number');
      if (data.hasOwnProperty('CashSalesRefundedAmount'))
        obj.CashSalesRefundedAmount = ApiClient.convertToType(data['CashSalesRefundedAmount'], 'Number');
      if (data.hasOwnProperty('CustomerCashFees'))
        obj.CustomerCashFees = ApiClient.convertToType(data['CustomerCashFees'], 'Number');
      if (data.hasOwnProperty('RefundsCount'))
        obj.RefundsCount = ApiClient.convertToType(data['RefundsCount'], 'Number');
      if (data.hasOwnProperty('PayGreenSalesAmount'))
        obj.PayGreenSalesAmount = ApiClient.convertToType(data['PayGreenSalesAmount'], 'Number');
      if (data.hasOwnProperty('PayGreenProcessingFees'))
        obj.PayGreenProcessingFees = ApiClient.convertToType(data['PayGreenProcessingFees'], 'Number');
      if (data.hasOwnProperty('TotalOnlineRevenueAdjustments'))
        obj.TotalOnlineRevenueAdjustments = ApiClient.convertToType(data['TotalOnlineRevenueAdjustments'], 'Number');
    }
    return obj;
  }

  /**
   * Online sales refunds
   * @member {Number} OnlineSalesRefundedAmount
   */
  exports.prototype.OnlineSalesRefundedAmount = undefined;

  /**
   * POS Online sales refunds
   * @member {Number} PosSalesRefundedAmount
   */
  exports.prototype.PosSalesRefundedAmount = undefined;

  /**
   * Cash sales refunds
   * @member {Number} CashSalesRefundedAmount
   */
  exports.prototype.CashSalesRefundedAmount = undefined;

  /**
   * Customer cash fees
   * @member {Number} CustomerCashFees
   */
  exports.prototype.CustomerCashFees = undefined;

  /**
   * Number of refunds
   * @member {Number} RefundsCount
   */
  exports.prototype.RefundsCount = undefined;

  /**
   * PayGreen sales
   * @member {Number} PayGreenSalesAmount
   */
  exports.prototype.PayGreenSalesAmount = undefined;

  /**
   * PayGreen processing fees charged to end-user
   * @member {Number} PayGreenProcessingFees
   */
  exports.prototype.PayGreenProcessingFees = undefined;

  /**
   * Total revenue adjustments
   * @member {Number} TotalOnlineRevenueAdjustments
   */
  exports.prototype.TotalOnlineRevenueAdjustments = undefined;


  return exports;

}));
