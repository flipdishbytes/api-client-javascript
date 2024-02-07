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
    root.Flipdish.RetentionCampaignBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RetentionCampaignBase model module.
   * @module model/RetentionCampaignBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RetentionCampaignBase</code>.
   * Retention campaign base
   * @alias module:model/RetentionCampaignBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RetentionCampaignBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RetentionCampaignBase} obj Optional instance to populate.
   * @return {module:model/RetentionCampaignBase} The populated <code>RetentionCampaignBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NotifyCustomerAfterMinutes'))
        obj.NotifyCustomerAfterMinutes = ApiClient.convertToType(data['NotifyCustomerAfterMinutes'], 'Number');
      if (data.hasOwnProperty('PercentDiscountAmount'))
        obj.PercentDiscountAmount = ApiClient.convertToType(data['PercentDiscountAmount'], 'Number');
      if (data.hasOwnProperty('LumpDiscountAmount'))
        obj.LumpDiscountAmount = ApiClient.convertToType(data['LumpDiscountAmount'], 'Number');
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
    }
    return obj;
  }

  /**
   * Time in minutes, after which customer will receive retention voucher if he/she does not order
   * @member {Number} NotifyCustomerAfterMinutes
   */
  exports.prototype.NotifyCustomerAfterMinutes = undefined;

  /**
   * Discount amount in percents
   * @member {Number} PercentDiscountAmount
   */
  exports.prototype.PercentDiscountAmount = undefined;

  /**
   * Discount amount in sum of money
   * @member {Number} LumpDiscountAmount
   */
  exports.prototype.LumpDiscountAmount = undefined;

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


  return exports;

}));
