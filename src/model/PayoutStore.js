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
    define(['ApiClient', 'model/BalanceDetails', 'model/ChargebackDetails', 'model/FlipdishFeesDetails', 'model/OtherChargesDetails', 'model/PosRevenueDetails', 'model/RevenueAdjustmentsDetails', 'model/RevenueDetail', 'model/ThirdPartyFeesDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BalanceDetails'), require('./ChargebackDetails'), require('./FlipdishFeesDetails'), require('./OtherChargesDetails'), require('./PosRevenueDetails'), require('./RevenueAdjustmentsDetails'), require('./RevenueDetail'), require('./ThirdPartyFeesDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.PayoutStore = factory(root.Flipdish.ApiClient, root.Flipdish.BalanceDetails, root.Flipdish.ChargebackDetails, root.Flipdish.FlipdishFeesDetails, root.Flipdish.OtherChargesDetails, root.Flipdish.PosRevenueDetails, root.Flipdish.RevenueAdjustmentsDetails, root.Flipdish.RevenueDetail, root.Flipdish.ThirdPartyFeesDetails);
  }
}(this, function(ApiClient, BalanceDetails, ChargebackDetails, FlipdishFeesDetails, OtherChargesDetails, PosRevenueDetails, RevenueAdjustmentsDetails, RevenueDetail, ThirdPartyFeesDetails) {
  'use strict';

  /**
   * The PayoutStore model module.
   * @module model/PayoutStore
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutStore</code>.
   * Payout details for a single store
   * @alias module:model/PayoutStore
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutStore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutStore} obj Optional instance to populate.
   * @return {module:model/PayoutStore} The populated <code>PayoutStore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StoreName'))
        obj.StoreName = ApiClient.convertToType(data['StoreName'], 'String');
      if (data.hasOwnProperty('Amount'))
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('OnlineRevenue'))
        obj.OnlineRevenue = RevenueDetail.constructFromObject(data['OnlineRevenue']);
      if (data.hasOwnProperty('Revenue'))
        obj.Revenue = RevenueDetail.constructFromObject(data['Revenue']);
      if (data.hasOwnProperty('RevenueAdjustments'))
        obj.RevenueAdjustments = RevenueAdjustmentsDetails.constructFromObject(data['RevenueAdjustments']);
      if (data.hasOwnProperty('FlipdishFees'))
        obj.FlipdishFees = FlipdishFeesDetails.constructFromObject(data['FlipdishFees']);
      if (data.hasOwnProperty('Chargebacks'))
        obj.Chargebacks = ChargebackDetails.constructFromObject(data['Chargebacks']);
      if (data.hasOwnProperty('OtherCharges'))
        obj.OtherCharges = OtherChargesDetails.constructFromObject(data['OtherCharges']);
      if (data.hasOwnProperty('Balance'))
        obj.Balance = BalanceDetails.constructFromObject(data['Balance']);
      if (data.hasOwnProperty('PosRevenue'))
        obj.PosRevenue = PosRevenueDetails.constructFromObject(data['PosRevenue']);
      if (data.hasOwnProperty('ThirdPartyFees'))
        obj.ThirdPartyFees = ThirdPartyFeesDetails.constructFromObject(data['ThirdPartyFees']);
    }
    return obj;
  }

  /**
   * The id of the Store.
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Name of the store
   * @member {String} StoreName
   */
  exports.prototype.StoreName = undefined;

  /**
   * Amount of the payout for this Store
   * @member {Number} Amount
   */
  exports.prototype.Amount = undefined;

  /**
   * Revenue details (DEPRECATED: Use Revenue)
   * @member {module:model/RevenueDetail} OnlineRevenue
   */
  exports.prototype.OnlineRevenue = undefined;

  /**
   * Revenue details
   * @member {module:model/RevenueDetail} Revenue
   */
  exports.prototype.Revenue = undefined;

  /**
   * Revenue Adjustments breakdown
   * @member {module:model/RevenueAdjustmentsDetails} RevenueAdjustments
   */
  exports.prototype.RevenueAdjustments = undefined;

  /**
   * Fees breakdown
   * @member {module:model/FlipdishFeesDetails} FlipdishFees
   */
  exports.prototype.FlipdishFees = undefined;

  /**
   * Chargebacks breakdown
   * @member {module:model/ChargebackDetails} Chargebacks
   */
  exports.prototype.Chargebacks = undefined;

  /**
   * Breakdown of other charges
   * @member {module:model/OtherChargesDetails} OtherCharges
   */
  exports.prototype.OtherCharges = undefined;

  /**
   * Period opening and closing balance
   * @member {module:model/BalanceDetails} Balance
   */
  exports.prototype.Balance = undefined;

  /**
   * Breakdown of POS charges
   * @member {module:model/PosRevenueDetails} PosRevenue
   */
  exports.prototype.PosRevenue = undefined;

  /**
   * Third party integration fees
   * @member {module:model/ThirdPartyFeesDetails} ThirdPartyFees
   */
  exports.prototype.ThirdPartyFees = undefined;


  return exports;

}));
