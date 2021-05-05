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
    root.FlipdishOpenApiV10.RevenueDetail = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RevenueDetail model module.
   * @module model/RevenueDetail
   * @version v1.0
   */

  /**
   * Constructs a new <code>RevenueDetail</code>.
   * Sales information
   * @alias module:model/RevenueDetail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RevenueDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevenueDetail} obj Optional instance to populate.
   * @return {module:model/RevenueDetail} The populated <code>RevenueDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OnlineSalesAmount'))
        obj.onlineSalesAmount = ApiClient.convertToType(data['OnlineSalesAmount'], 'Number');
      if (data.hasOwnProperty('OnlineSalesTax'))
        obj.onlineSalesTax = ApiClient.convertToType(data['OnlineSalesTax'], 'Number');
      if (data.hasOwnProperty('OnlineSalesIncludingTax'))
        obj.onlineSalesIncludingTax = ApiClient.convertToType(data['OnlineSalesIncludingTax'], 'Number');
      if (data.hasOwnProperty('OnlineSalesFeesBaseAmount'))
        obj.onlineSalesFeesBaseAmount = ApiClient.convertToType(data['OnlineSalesFeesBaseAmount'], 'Number');
      if (data.hasOwnProperty('CashSalesAmount'))
        obj.cashSalesAmount = ApiClient.convertToType(data['CashSalesAmount'], 'Number');
      if (data.hasOwnProperty('CashSalesTax'))
        obj.cashSalesTax = ApiClient.convertToType(data['CashSalesTax'], 'Number');
      if (data.hasOwnProperty('CashSalesIncludingTax'))
        obj.cashSalesIncludingTax = ApiClient.convertToType(data['CashSalesIncludingTax'], 'Number');
      if (data.hasOwnProperty('CashSalesFeesBaseAmount'))
        obj.cashSalesFeesBaseAmount = ApiClient.convertToType(data['CashSalesFeesBaseAmount'], 'Number');
      if (data.hasOwnProperty('TotalSalesIncludingTax'))
        obj.totalSalesIncludingTax = ApiClient.convertToType(data['TotalSalesIncludingTax'], 'Number');
      if (data.hasOwnProperty('OnlineSalesDeliveryCharges'))
        obj.onlineSalesDeliveryCharges = ApiClient.convertToType(data['OnlineSalesDeliveryCharges'], 'Number');
      if (data.hasOwnProperty('OnlineSalesTips'))
        obj.onlineSalesTips = ApiClient.convertToType(data['OnlineSalesTips'], 'Number');
      if (data.hasOwnProperty('TotalOnlineRevenue'))
        obj.totalOnlineRevenue = ApiClient.convertToType(data['TotalOnlineRevenue'], 'Number');
    }
    return obj;
  }

  /**
   * Online sales amount
   * @member {Number} onlineSalesAmount
   */
  exports.prototype.onlineSalesAmount = undefined;

  /**
   * Online sales tax
   * @member {Number} onlineSalesTax
   */
  exports.prototype.onlineSalesTax = undefined;

  /**
   * Online sales amount plus online sales tax
   * @member {Number} onlineSalesIncludingTax
   */
  exports.prototype.onlineSalesIncludingTax = undefined;

  /**
   * Online sales base amount to calculate fees
   * @member {Number} onlineSalesFeesBaseAmount
   */
  exports.prototype.onlineSalesFeesBaseAmount = undefined;

  /**
   * Cash sales amount
   * @member {Number} cashSalesAmount
   */
  exports.prototype.cashSalesAmount = undefined;

  /**
   * Cash sales tax
   * @member {Number} cashSalesTax
   */
  exports.prototype.cashSalesTax = undefined;

  /**
   * Cash sales amount plus online sales tax
   * @member {Number} cashSalesIncludingTax
   */
  exports.prototype.cashSalesIncludingTax = undefined;

  /**
   * Online sales base amount to calculate fees
   * @member {Number} cashSalesFeesBaseAmount
   */
  exports.prototype.cashSalesFeesBaseAmount = undefined;

  /**
   * Total Sales (online and cash) including tax
   * @member {Number} totalSalesIncludingTax
   */
  exports.prototype.totalSalesIncludingTax = undefined;

  /**
   * Delivery charges on online sales
   * @member {Number} onlineSalesDeliveryCharges
   */
  exports.prototype.onlineSalesDeliveryCharges = undefined;

  /**
   * Tips for online sales
   * @member {Number} onlineSalesTips
   */
  exports.prototype.onlineSalesTips = undefined;

  /**
   * Online sales plus online delivery charges and tips
   * @member {Number} totalOnlineRevenue
   */
  exports.prototype.totalOnlineRevenue = undefined;


  return exports;

}));
