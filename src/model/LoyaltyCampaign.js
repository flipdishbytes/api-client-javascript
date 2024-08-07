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
    define(['ApiClient', 'model/CampaignStatistics', 'model/StoreCampaignStartTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignStatistics'), require('./StoreCampaignStartTime'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.LoyaltyCampaign = factory(root.Flipdish.ApiClient, root.Flipdish.CampaignStatistics, root.Flipdish.StoreCampaignStartTime);
  }
}(this, function(ApiClient, CampaignStatistics, StoreCampaignStartTime) {
  'use strict';

  /**
   * The LoyaltyCampaign model module.
   * @module model/LoyaltyCampaign
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LoyaltyCampaign</code>.
   * Loyalty campaign
   * @alias module:model/LoyaltyCampaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LoyaltyCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoyaltyCampaign} obj Optional instance to populate.
   * @return {module:model/LoyaltyCampaign} The populated <code>LoyaltyCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CampaignId'))
        obj.CampaignId = ApiClient.convertToType(data['CampaignId'], 'Number');
      if (data.hasOwnProperty('Statistics'))
        obj.Statistics = CampaignStatistics.constructFromObject(data['Statistics']);
      if (data.hasOwnProperty('Stores'))
        obj.Stores = ApiClient.convertToType(data['Stores'], [StoreCampaignStartTime]);
      if (data.hasOwnProperty('PublicId'))
        obj.PublicId = ApiClient.convertToType(data['PublicId'], 'String');
      if (data.hasOwnProperty('OrdersBeforeReceivingVoucher'))
        obj.OrdersBeforeReceivingVoucher = ApiClient.convertToType(data['OrdersBeforeReceivingVoucher'], 'Number');
      if (data.hasOwnProperty('PercentDiscountAmount'))
        obj.PercentDiscountAmount = ApiClient.convertToType(data['PercentDiscountAmount'], 'Number');
      if (data.hasOwnProperty('RoundingStrategy'))
        obj.RoundingStrategy = ApiClient.convertToType(data['RoundingStrategy'], 'Number');
      if (data.hasOwnProperty('ShouldIncludeOrdersWithLoyaltyVoucher'))
        obj.ShouldIncludeOrdersWithLoyaltyVoucher = ApiClient.convertToType(data['ShouldIncludeOrdersWithLoyaltyVoucher'], 'Boolean');
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
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('ForceDiscount'))
        obj.ForceDiscount = ApiClient.convertToType(data['ForceDiscount'], 'Boolean');
    }
    return obj;
  }

  /**
   * Id of campaign
   * @member {Number} CampaignId
   */
  exports.prototype.CampaignId = undefined;

  /**
   * Statistics of campaign
   * @member {module:model/CampaignStatistics} Statistics
   */
  exports.prototype.Statistics = undefined;

  /**
   * Stores this campaign applies to with campaign start time in Utc
   * @member {Array.<module:model/StoreCampaignStartTime>} Stores
   */
  exports.prototype.Stores = undefined;

  /**
   * Permanent reference to the item.
   * @member {String} PublicId
   */
  exports.prototype.PublicId = undefined;

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
   * Controls how the loyalty voucher's amount is rounded
   * @member {Number} RoundingStrategy
   */
  exports.prototype.RoundingStrategy = undefined;

  /**
   * Controls whether we should include orders with loyalty vouchers in the campaign calculation
   * @member {Boolean} ShouldIncludeOrdersWithLoyaltyVoucher
   */
  exports.prototype.ShouldIncludeOrdersWithLoyaltyVoucher = undefined;

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

  /**
   * The app that this campaign belongs to.
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * Controls whether the voucher generated from this campaign will override discount exclusions
   * @member {Boolean} ForceDiscount
   */
  exports.prototype.ForceDiscount = undefined;


  return exports;

}));
