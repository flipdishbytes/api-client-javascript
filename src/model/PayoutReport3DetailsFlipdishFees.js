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
    root.Flipdish.PayoutReport3DetailsFlipdishFees = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PayoutReport3DetailsFlipdishFees model module.
   * @module model/PayoutReport3DetailsFlipdishFees
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutReport3DetailsFlipdishFees</code>.
   * @alias module:model/PayoutReport3DetailsFlipdishFees
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutReport3DetailsFlipdishFees</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutReport3DetailsFlipdishFees} obj Optional instance to populate.
   * @return {module:model/PayoutReport3DetailsFlipdishFees} The populated <code>PayoutReport3DetailsFlipdishFees</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('WebAndAppCash'))
        obj.WebAndAppCash = ApiClient.convertToType(data['WebAndAppCash'], 'Number');
      if (data.hasOwnProperty('WebAndAppCard'))
        obj.WebAndAppCard = ApiClient.convertToType(data['WebAndAppCard'], 'Number');
      if (data.hasOwnProperty('KioskCash'))
        obj.KioskCash = ApiClient.convertToType(data['KioskCash'], 'Number');
      if (data.hasOwnProperty('KioskCard'))
        obj.KioskCard = ApiClient.convertToType(data['KioskCard'], 'Number');
      if (data.hasOwnProperty('QropCash'))
        obj.QropCash = ApiClient.convertToType(data['QropCash'], 'Number');
      if (data.hasOwnProperty('QropCard'))
        obj.QropCard = ApiClient.convertToType(data['QropCard'], 'Number');
      if (data.hasOwnProperty('PosCard'))
        obj.PosCard = ApiClient.convertToType(data['PosCard'], 'Number');
      if (data.hasOwnProperty('PosCardOnFlipdishOrders'))
        obj.PosCardOnFlipdishOrders = ApiClient.convertToType(data['PosCardOnFlipdishOrders'], 'Number');
      if (data.hasOwnProperty('OtherIntegrationFees'))
        obj.OtherIntegrationFees = ApiClient.convertToType(data['OtherIntegrationFees'], 'Number');
      if (data.hasOwnProperty('OtherIntegrationTips'))
        obj.OtherIntegrationTips = ApiClient.convertToType(data['OtherIntegrationTips'], 'Number');
      if (data.hasOwnProperty('Vat'))
        obj.Vat = ApiClient.convertToType(data['Vat'], 'Number');
      if (data.hasOwnProperty('Total'))
        obj.Total = ApiClient.convertToType(data['Total'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} WebAndAppCash
   */
  exports.prototype.WebAndAppCash = undefined;

  /**
   * @member {Number} WebAndAppCard
   */
  exports.prototype.WebAndAppCard = undefined;

  /**
   * @member {Number} KioskCash
   */
  exports.prototype.KioskCash = undefined;

  /**
   * @member {Number} KioskCard
   */
  exports.prototype.KioskCard = undefined;

  /**
   * @member {Number} QropCash
   */
  exports.prototype.QropCash = undefined;

  /**
   * @member {Number} QropCard
   */
  exports.prototype.QropCard = undefined;

  /**
   * @member {Number} PosCard
   */
  exports.prototype.PosCard = undefined;

  /**
   * @member {Number} PosCardOnFlipdishOrders
   */
  exports.prototype.PosCardOnFlipdishOrders = undefined;

  /**
   * @member {Number} OtherIntegrationFees
   */
  exports.prototype.OtherIntegrationFees = undefined;

  /**
   * @member {Number} OtherIntegrationTips
   */
  exports.prototype.OtherIntegrationTips = undefined;

  /**
   * @member {Number} Vat
   */
  exports.prototype.Vat = undefined;

  /**
   * @member {Number} Total
   */
  exports.prototype.Total = undefined;


  return exports;

}));
