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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RetentionCampaign = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.CampaignStatistics, root.FlipdishOpenApiV10.StoreCampaignStartTime);
  }
}(this, function(ApiClient, CampaignStatistics, StoreCampaignStartTime) {
  'use strict';

  /**
   * The RetentionCampaign model module.
   * @module model/RetentionCampaign
   * @version v1.0
   */

  /**
   * Constructs a new <code>RetentionCampaign</code>.
   * Retention campaign
   * @alias module:model/RetentionCampaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RetentionCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RetentionCampaign} obj Optional instance to populate.
   * @return {module:model/RetentionCampaign} The populated <code>RetentionCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CampaignId'))
        obj.campaignId = ApiClient.convertToType(data['CampaignId'], 'Number');
      if (data.hasOwnProperty('Statistics'))
        obj.statistics = CampaignStatistics.constructFromObject(data['Statistics']);
      if (data.hasOwnProperty('Stores'))
        obj.stores = ApiClient.convertToType(data['Stores'], [StoreCampaignStartTime]);
      if (data.hasOwnProperty('NotifyCustomerAfterMinutes'))
        obj.notifyCustomerAfterMinutes = ApiClient.convertToType(data['NotifyCustomerAfterMinutes'], 'Number');
      if (data.hasOwnProperty('PercentDiscountAmount'))
        obj.percentDiscountAmount = ApiClient.convertToType(data['PercentDiscountAmount'], 'Number');
      if (data.hasOwnProperty('LumpDiscountAmount'))
        obj.lumpDiscountAmount = ApiClient.convertToType(data['LumpDiscountAmount'], 'Number');
      if (data.hasOwnProperty('VoucherValidPeriodDays'))
        obj.voucherValidPeriodDays = ApiClient.convertToType(data['VoucherValidPeriodDays'], 'Number');
      if (data.hasOwnProperty('IncludeDeliveryFee'))
        obj.includeDeliveryFee = ApiClient.convertToType(data['IncludeDeliveryFee'], 'Boolean');
      if (data.hasOwnProperty('AutoApplyResultingVouchers'))
        obj.autoApplyResultingVouchers = ApiClient.convertToType(data['AutoApplyResultingVouchers'], 'Boolean');
      if (data.hasOwnProperty('IncludeExistingOrders'))
        obj.includeExistingOrders = ApiClient.convertToType(data['IncludeExistingOrders'], 'Boolean');
      if (data.hasOwnProperty('IsEnabled'))
        obj.isEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('StoreIds'))
        obj.storeIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
    }
    return obj;
  }

  /**
   * Id of campaign
   * @member {Number} campaignId
   */
  exports.prototype.campaignId = undefined;

  /**
   * Statistics of campaign
   * @member {module:model/CampaignStatistics} statistics
   */
  exports.prototype.statistics = undefined;

  /**
   * Stores this campaign applies to with campaign start time in Utc
   * @member {Array.<module:model/StoreCampaignStartTime>} stores
   */
  exports.prototype.stores = undefined;

  /**
   * Time in minutes, after which customer will receive retention voucher if he/she does not order
   * @member {Number} notifyCustomerAfterMinutes
   */
  exports.prototype.notifyCustomerAfterMinutes = undefined;

  /**
   * Discount amount in percents
   * @member {Number} percentDiscountAmount
   */
  exports.prototype.percentDiscountAmount = undefined;

  /**
   * Discount amount in sum of money
   * @member {Number} lumpDiscountAmount
   */
  exports.prototype.lumpDiscountAmount = undefined;

  /**
   * Number of days for which the voucher will be valid.
   * @member {Number} voucherValidPeriodDays
   */
  exports.prototype.voucherValidPeriodDays = undefined;

  /**
   * Discount will include delivery fee
   * @member {Boolean} includeDeliveryFee
   */
  exports.prototype.includeDeliveryFee = undefined;

  /**
   * Automatically apply resulting vouchers
   * @member {Boolean} autoApplyResultingVouchers
   */
  exports.prototype.autoApplyResultingVouchers = undefined;

  /**
   * Campaign will apply to existing orders
   * @member {Boolean} includeExistingOrders
   */
  exports.prototype.includeExistingOrders = undefined;

  /**
   * Is campaign enabled
   * @member {Boolean} isEnabled
   */
  exports.prototype.isEnabled = undefined;

  /**
   * Ids of stores this campaign applies to
   * @member {Array.<Number>} storeIds
   */
  exports.prototype.storeIds = undefined;


  return exports;

}));
