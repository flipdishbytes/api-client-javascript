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
    root.Flipdish.VoucherDataPoint = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VoucherDataPoint model module.
   * @module model/VoucherDataPoint
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoucherDataPoint</code>.
   * A single data point in timeline graphs related to Vouchers
   * @alias module:model/VoucherDataPoint
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VoucherDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherDataPoint} obj Optional instance to populate.
   * @return {module:model/VoucherDataPoint} The populated <code>VoucherDataPoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PeriodStart'))
        obj.PeriodStart = ApiClient.convertToType(data['PeriodStart'], 'Date');
      if (data.hasOwnProperty('PeriodLengthInDays'))
        obj.PeriodLengthInDays = ApiClient.convertToType(data['PeriodLengthInDays'], 'Number');
      if (data.hasOwnProperty('Value'))
        obj.Value = ApiClient.convertToType(data['Value'], 'Number');
    }
    return obj;
  }

  /**
   * Date from which the data point starts
   * @member {Date} PeriodStart
   */
  exports.prototype.PeriodStart = undefined;

  /**
   * The length in days that this data point covers
   * @member {Number} PeriodLengthInDays
   */
  exports.prototype.PeriodLengthInDays = undefined;

  /**
   * The value of this data point
   * @member {Number} Value
   */
  exports.prototype.Value = undefined;


  return exports;

}));
