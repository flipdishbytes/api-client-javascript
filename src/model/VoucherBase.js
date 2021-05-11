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
    root.Flipdish.VoucherBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VoucherBase model module.
   * @module model/VoucherBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoucherBase</code>.
   * Voucher Base
   * @alias module:model/VoucherBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VoucherBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherBase} obj Optional instance to populate.
   * @return {module:model/VoucherBase} The populated <code>VoucherBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code'))
        obj.Code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('ValidOnOrdersOver'))
        obj.ValidOnOrdersOver = ApiClient.convertToType(data['ValidOnOrdersOver'], 'Number');
      if (data.hasOwnProperty('TakesPriority'))
        obj.TakesPriority = ApiClient.convertToType(data['TakesPriority'], 'Boolean');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('IsAutomaticallyApplied'))
        obj.IsAutomaticallyApplied = ApiClient.convertToType(data['IsAutomaticallyApplied'], 'Boolean');
      if (data.hasOwnProperty('IncludeDeliveryFee'))
        obj.IncludeDeliveryFee = ApiClient.convertToType(data['IncludeDeliveryFee'], 'Boolean');
      if (data.hasOwnProperty('IsValidForDeliveryOrders'))
        obj.IsValidForDeliveryOrders = ApiClient.convertToType(data['IsValidForDeliveryOrders'], 'Boolean');
      if (data.hasOwnProperty('IsValidForPickupOrders'))
        obj.IsValidForPickupOrders = ApiClient.convertToType(data['IsValidForPickupOrders'], 'Boolean');
      if (data.hasOwnProperty('IsValidForOrdersPayedOnline'))
        obj.IsValidForOrdersPayedOnline = ApiClient.convertToType(data['IsValidForOrdersPayedOnline'], 'Boolean');
      if (data.hasOwnProperty('IsValidForOrdersPayedByCash'))
        obj.IsValidForOrdersPayedByCash = ApiClient.convertToType(data['IsValidForOrdersPayedByCash'], 'Boolean');
      if (data.hasOwnProperty('IsValidForFirstOrderOnly'))
        obj.IsValidForFirstOrderOnly = ApiClient.convertToType(data['IsValidForFirstOrderOnly'], 'Boolean');
      if (data.hasOwnProperty('IsValidOncePerCustomer'))
        obj.IsValidOncePerCustomer = ApiClient.convertToType(data['IsValidOncePerCustomer'], 'Boolean');
      if (data.hasOwnProperty('IsValidOnlyOnce'))
        obj.IsValidOnlyOnce = ApiClient.convertToType(data['IsValidOnlyOnce'], 'Boolean');
      if (data.hasOwnProperty('StartDate'))
        obj.StartDate = ApiClient.convertToType(data['StartDate'], 'Date');
      if (data.hasOwnProperty('ExpiryDate'))
        obj.ExpiryDate = ApiClient.convertToType(data['ExpiryDate'], 'Date');
    }
    return obj;
  }

  /**
   * Voucher Code
   * @member {String} Code
   */
  exports.prototype.Code = undefined;

  /**
   * Voucher Description (Visible on printout)
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Valid on orders on or above
   * @member {Number} ValidOnOrdersOver
   */
  exports.prototype.ValidOnOrdersOver = undefined;

  /**
   * Takes priority
   * @member {Boolean} TakesPriority
   */
  exports.prototype.TakesPriority = undefined;

  /**
   * Is voucher enabled
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * Is voucher automatically applied
   * @member {Boolean} IsAutomaticallyApplied
   */
  exports.prototype.IsAutomaticallyApplied = undefined;

  /**
   * Include delivery fees
   * @member {Boolean} IncludeDeliveryFee
   */
  exports.prototype.IncludeDeliveryFee = undefined;

  /**
   * Valid for delivery orders
   * @member {Boolean} IsValidForDeliveryOrders
   */
  exports.prototype.IsValidForDeliveryOrders = undefined;

  /**
   * Valid for pickup orders
   * @member {Boolean} IsValidForPickupOrders
   */
  exports.prototype.IsValidForPickupOrders = undefined;

  /**
   * Valid for orders payed online
   * @member {Boolean} IsValidForOrdersPayedOnline
   */
  exports.prototype.IsValidForOrdersPayedOnline = undefined;

  /**
   * Valid for orders payed in cash
   * @member {Boolean} IsValidForOrdersPayedByCash
   */
  exports.prototype.IsValidForOrdersPayedByCash = undefined;

  /**
   * Valid only on the first order by the customer
   * @member {Boolean} IsValidForFirstOrderOnly
   */
  exports.prototype.IsValidForFirstOrderOnly = undefined;

  /**
   * Valid once per customer
   * @member {Boolean} IsValidOncePerCustomer
   */
  exports.prototype.IsValidOncePerCustomer = undefined;

  /**
   * Valid only once, by any customer (once used cannot be used again by any other customer)
   * @member {Boolean} IsValidOnlyOnce
   */
  exports.prototype.IsValidOnlyOnce = undefined;

  /**
   * Voucher Starts On (Time in UTC)
   * @member {Date} StartDate
   */
  exports.prototype.StartDate = undefined;

  /**
   * Voucher Expires On (Time in UTC)
   * @member {Date} ExpiryDate
   */
  exports.prototype.ExpiryDate = undefined;


  return exports;

}));
