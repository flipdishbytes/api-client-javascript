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
    root.Flipdish.LoyaltyCampaignBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoyaltyCampaignBase model module.
   * @module model/LoyaltyCampaignBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LoyaltyCampaignBase</code>.
   * Loyalty campaign base
   * @alias module:model/LoyaltyCampaignBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LoyaltyCampaignBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoyaltyCampaignBase} obj Optional instance to populate.
   * @return {module:model/LoyaltyCampaignBase} The populated <code>LoyaltyCampaignBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrdersBeforeReceivingVoucher'))
        obj.OrdersBeforeReceivingVoucher = ApiClient.convertToType(data['OrdersBeforeReceivingVoucher'], 'Number');
      if (data.hasOwnProperty('PercentDiscountAmount'))
        obj.PercentDiscountAmount = ApiClient.convertToType(data['PercentDiscountAmount'], 'Number');
      if (data.hasOwnProperty('VoucherValidPeriodDays'))
        obj.VoucherValidPeriodDays = ApiClient.convertToType(data['VoucherValidPeriodDays'], 'Number');
      if (data.hasOwnProperty('IncludeDeliveryFee'))
        obj.IncludeDeliveryFee = ApiClient.convertToType(data['IncludeDeliveryFee'], 'Boolean');
      if (data.hasOwnProperty('AutoApplyResultingVouchers'))
        obj.AutoApplyResultingVouchers = ApiClient.convertToType(data['AutoApplyResultingVouchers'], 'Boolean');
      if (data.hasOwnProperty('IncludeExistingOrders'))
        obj.IncludeExistingOrders = ApiClient.convertToType(data['IncludeExistingOrders'], 'Boolean');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
    }
    return obj;
  }

  /**
   * Number of orders customer needs to make, before receiving voucher
   * @member {Number} OrdersBeforeReceivingVoucher
   */
  exports.prototype.OrdersBeforeReceivingVoucher = undefined;

  /**
   * Discount amount in percents
   * @member {Number} PercentDiscountAmount
   */
  exports.prototype.PercentDiscountAmount = undefined;

  /**
   * Number of days for which the voucher will be valid.
   * @member {Number} VoucherValidPeriodDays
   */
  exports.prototype.VoucherValidPeriodDays = undefined;

  /**
   * Discount will include delivery fee
   * @member {Boolean} IncludeDeliveryFee
   */
  exports.prototype.IncludeDeliveryFee = undefined;

  /**
   * Automatically apply resulting vouchers
   * @member {Boolean} AutoApplyResultingVouchers
   */
  exports.prototype.AutoApplyResultingVouchers = undefined;

  /**
   * Campaign will apply to existing orders
   * @member {Boolean} IncludeExistingOrders
   */
  exports.prototype.IncludeExistingOrders = undefined;

  /**
   * Is campaign enabled
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * Ids of stores this campaign applies to
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;


  return exports;

}));
