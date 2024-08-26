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
    root.Flipdish.JobPricing = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobPricing model module.
   * @module model/JobPricing
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobPricing</code>.
   * Job Pricing
   * @alias module:model/JobPricing
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JobPricing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPricing} obj Optional instance to populate.
   * @return {module:model/JobPricing} The populated <code>JobPricing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Currency'))
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('TaxPercentage'))
        obj.TaxPercentage = ApiClient.convertToType(data['TaxPercentage'], 'Number');
      if (data.hasOwnProperty('PriceTaxIncluded'))
        obj.PriceTaxIncluded = ApiClient.convertToType(data['PriceTaxIncluded'], 'Number');
      if (data.hasOwnProperty('PriceTaxExcluded'))
        obj.PriceTaxExcluded = ApiClient.convertToType(data['PriceTaxExcluded'], 'Number');
      if (data.hasOwnProperty('TaxAmount'))
        obj.TaxAmount = ApiClient.convertToType(data['TaxAmount'], 'Number');
      if (data.hasOwnProperty('InvoiceUrl'))
        obj.InvoiceUrl = ApiClient.convertToType(data['InvoiceUrl'], 'String');
    }
    return obj;
  }

  /**
   * Currency
   * @member {String} Currency
   */
  exports.prototype.Currency = undefined;

  /**
   * Tax Percentage
   * @member {Number} TaxPercentage
   */
  exports.prototype.TaxPercentage = undefined;

  /**
   * Price Tax Included
   * @member {Number} PriceTaxIncluded
   */
  exports.prototype.PriceTaxIncluded = undefined;

  /**
   * Price Tax Excluded
   * @member {Number} PriceTaxExcluded
   */
  exports.prototype.PriceTaxExcluded = undefined;

  /**
   * Tax Amount
   * @member {Number} TaxAmount
   */
  exports.prototype.TaxAmount = undefined;

  /**
   * Invoice Url
   * @member {String} InvoiceUrl
   */
  exports.prototype.InvoiceUrl = undefined;


  return exports;

}));
