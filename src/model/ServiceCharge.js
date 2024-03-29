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
    root.Flipdish.ServiceCharge = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ServiceCharge model module.
   * @module model/ServiceCharge
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ServiceCharge</code>.
   * Store Service Charge
   * @alias module:model/ServiceCharge
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ServiceCharge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceCharge} obj Optional instance to populate.
   * @return {module:model/ServiceCharge} The populated <code>ServiceCharge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('PercentageValue'))
        obj.PercentageValue = ApiClient.convertToType(data['PercentageValue'], 'Number');
      if (data.hasOwnProperty('Enabled'))
        obj.Enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('IsOptional'))
        obj.IsOptional = ApiClient.convertToType(data['IsOptional'], 'Boolean');
      if (data.hasOwnProperty('DisplayWithProcessingFee'))
        obj.DisplayWithProcessingFee = ApiClient.convertToType(data['DisplayWithProcessingFee'], 'Boolean');
      if (data.hasOwnProperty('IncludesVouchers'))
        obj.IncludesVouchers = ApiClient.convertToType(data['IncludesVouchers'], 'Boolean');
    }
    return obj;
  }

  /**
   * Store identifier
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * The Default Service Charge Value
   * @member {Number} PercentageValue
   */
  exports.prototype.PercentageValue = undefined;

  /**
   * Enable Service Charge for store true(on) / false(off)
   * @member {Boolean} Enabled
   */
  exports.prototype.Enabled = undefined;

  /**
   * Sets the service charge to be optional
   * @member {Boolean} IsOptional
   */
  exports.prototype.IsOptional = undefined;

  /**
   * Display service charge together with processing fee
   * @member {Boolean} DisplayWithProcessingFee
   */
  exports.prototype.DisplayWithProcessingFee = undefined;

  /**
   * If true, will include voucher value in calculation   i.e 10E order with 1E service charge and 5E voucher would have service charge at 0.5E
   * @member {Boolean} IncludesVouchers
   */
  exports.prototype.IncludesVouchers = undefined;


  return exports;

}));
