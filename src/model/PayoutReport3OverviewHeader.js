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
    root.Flipdish.PayoutReport3OverviewHeader = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PayoutReport3OverviewHeader model module.
   * @module model/PayoutReport3OverviewHeader
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutReport3OverviewHeader</code>.
   * @alias module:model/PayoutReport3OverviewHeader
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutReport3OverviewHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutReport3OverviewHeader} obj Optional instance to populate.
   * @return {module:model/PayoutReport3OverviewHeader} The populated <code>PayoutReport3OverviewHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PayoutId'))
        obj.PayoutId = ApiClient.convertToType(data['PayoutId'], 'Number');
      if (data.hasOwnProperty('BankAccountId'))
        obj.BankAccountId = ApiClient.convertToType(data['BankAccountId'], 'Number');
      if (data.hasOwnProperty('AccountName'))
        obj.AccountName = ApiClient.convertToType(data['AccountName'], 'String');
      if (data.hasOwnProperty('PayoutStatus'))
        obj.PayoutStatus = ApiClient.convertToType(data['PayoutStatus'], 'String');
      if (data.hasOwnProperty('CreatedDate'))
        obj.CreatedDate = ApiClient.convertToType(data['CreatedDate'], 'Date');
      if (data.hasOwnProperty('PeriodStartTime'))
        obj.PeriodStartTime = ApiClient.convertToType(data['PeriodStartTime'], 'Date');
      if (data.hasOwnProperty('PeriodEndTime'))
        obj.PeriodEndTime = ApiClient.convertToType(data['PeriodEndTime'], 'Date');
      if (data.hasOwnProperty('DestinationBank'))
        obj.DestinationBank = ApiClient.convertToType(data['DestinationBank'], 'String');
      if (data.hasOwnProperty('DestinationAccount'))
        obj.DestinationAccount = ApiClient.convertToType(data['DestinationAccount'], 'String');
      if (data.hasOwnProperty('Amount'))
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('Currency'))
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} PayoutId
   */
  exports.prototype.PayoutId = undefined;

  /**
   * @member {Number} BankAccountId
   */
  exports.prototype.BankAccountId = undefined;

  /**
   * @member {String} AccountName
   */
  exports.prototype.AccountName = undefined;

  /**
   * @member {String} PayoutStatus
   */
  exports.prototype.PayoutStatus = undefined;

  /**
   * @member {Date} CreatedDate
   */
  exports.prototype.CreatedDate = undefined;

  /**
   * @member {Date} PeriodStartTime
   */
  exports.prototype.PeriodStartTime = undefined;

  /**
   * @member {Date} PeriodEndTime
   */
  exports.prototype.PeriodEndTime = undefined;

  /**
   * @member {String} DestinationBank
   */
  exports.prototype.DestinationBank = undefined;

  /**
   * @member {String} DestinationAccount
   */
  exports.prototype.DestinationAccount = undefined;

  /**
   * @member {Number} Amount
   */
  exports.prototype.Amount = undefined;

  /**
   * @member {String} Currency
   */
  exports.prototype.Currency = undefined;


  return exports;

}));
