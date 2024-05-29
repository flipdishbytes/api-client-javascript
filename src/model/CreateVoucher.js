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
    define(['ApiClient', 'model/CreatePromotion', 'model/CreditNoteDetails', 'model/LumpDiscountDetails', 'model/PercentDiscountDetails', 'model/ValidityPeriod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatePromotion'), require('./CreditNoteDetails'), require('./LumpDiscountDetails'), require('./PercentDiscountDetails'), require('./ValidityPeriod'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateVoucher = factory(root.Flipdish.ApiClient, root.Flipdish.CreatePromotion, root.Flipdish.CreditNoteDetails, root.Flipdish.LumpDiscountDetails, root.Flipdish.PercentDiscountDetails, root.Flipdish.ValidityPeriod);
  }
}(this, function(ApiClient, CreatePromotion, CreditNoteDetails, LumpDiscountDetails, PercentDiscountDetails, ValidityPeriod) {
  'use strict';

  /**
   * The CreateVoucher model module.
   * @module model/CreateVoucher
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateVoucher</code>.
   * Create Voucher
   * @alias module:model/CreateVoucher
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateVoucher</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateVoucher} obj Optional instance to populate.
   * @return {module:model/CreateVoucher} The populated <code>CreateVoucher</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('VoucherType'))
        obj.VoucherType = ApiClient.convertToType(data['VoucherType'], 'String');
      if (data.hasOwnProperty('Promotion'))
        obj.Promotion = CreatePromotion.constructFromObject(data['Promotion']);
      if (data.hasOwnProperty('CreditNoteDetails'))
        obj.CreditNoteDetails = CreditNoteDetails.constructFromObject(data['CreditNoteDetails']);
      if (data.hasOwnProperty('LumpDiscountDetails'))
        obj.LumpDiscountDetails = LumpDiscountDetails.constructFromObject(data['LumpDiscountDetails']);
      if (data.hasOwnProperty('PercentDiscountDetails'))
        obj.PercentDiscountDetails = PercentDiscountDetails.constructFromObject(data['PercentDiscountDetails']);
      if (data.hasOwnProperty('Code'))
        obj.Code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Stores'))
        obj.Stores = ApiClient.convertToType(data['Stores'], ['Number']);
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
      if (data.hasOwnProperty('ChannelRestrictions'))
        obj.ChannelRestrictions = ApiClient.convertToType(data['ChannelRestrictions'], ['String']);
      if (data.hasOwnProperty('ValidityPeriods'))
        obj.ValidityPeriods = ApiClient.convertToType(data['ValidityPeriods'], [ValidityPeriod]);
      if (data.hasOwnProperty('VoucherSubType'))
        obj.VoucherSubType = ApiClient.convertToType(data['VoucherSubType'], 'String');
      if (data.hasOwnProperty('CustomerId'))
        obj.CustomerId = ApiClient.convertToType(data['CustomerId'], 'Number');
      if (data.hasOwnProperty('MaxRedemptions'))
        obj.MaxRedemptions = ApiClient.convertToType(data['MaxRedemptions'], 'Number');
    }
    return obj;
  }

  /**
   * Voucher Type
   * @member {module:model/CreateVoucher.VoucherTypeEnum} VoucherType
   */
  exports.prototype.VoucherType = undefined;

  /**
   * Create Promotion details
   * @member {module:model/CreatePromotion} Promotion
   */
  exports.prototype.Promotion = undefined;

  /**
   * Credit note details
   * @member {module:model/CreditNoteDetails} CreditNoteDetails
   */
  exports.prototype.CreditNoteDetails = undefined;

  /**
   * Lump discount details
   * @member {module:model/LumpDiscountDetails} LumpDiscountDetails
   */
  exports.prototype.LumpDiscountDetails = undefined;

  /**
   * Percent discount details
   * @member {module:model/PercentDiscountDetails} PercentDiscountDetails
   */
  exports.prototype.PercentDiscountDetails = undefined;

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
   * Stores that this voucher applies to
   * @member {Array.<Number>} Stores
   */
  exports.prototype.Stores = undefined;

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

  /**
   * Limit the channels this voucher can be used on
   * @member {Array.<module:model/CreateVoucher.ChannelRestrictionsEnum>} ChannelRestrictions
   */
  exports.prototype.ChannelRestrictions = undefined;

  /**
   * Periods in which the voucher is valid.  An empty list means the voucher is valid at all times.  When updating the voucher, if this is set to null, the validity periods won't be updated.
   * @member {Array.<module:model/ValidityPeriod>} ValidityPeriods
   */
  exports.prototype.ValidityPeriods = undefined;

  /**
   * Voucher Subtype
   * @member {module:model/CreateVoucher.VoucherSubTypeEnum} VoucherSubType
   */
  exports.prototype.VoucherSubType = undefined;

  /**
   * Customer UserID
   * @member {Number} CustomerId
   */
  exports.prototype.CustomerId = undefined;

  /**
   * Maximum number of times the voucher can be redeemed (used)
   * @member {Number} MaxRedemptions
   */
  exports.prototype.MaxRedemptions = undefined;



  /**
   * Allowed values for the <code>VoucherType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VoucherTypeEnum = {
    /**
     * value: "PercentageDiscount"
     * @const
     */
    PercentageDiscount: "PercentageDiscount",

    /**
     * value: "LumpDiscount"
     * @const
     */
    LumpDiscount: "LumpDiscount",

    /**
     * value: "AddItem"
     * @const
     */
    AddItem: "AddItem",

    /**
     * value: "CreditNote"
     * @const
     */
    CreditNote: "CreditNote",

    /**
     * value: "FreeDelivery"
     * @const
     */
    FreeDelivery: "FreeDelivery"
  };


  /**
   * Allowed values for the <code>ChannelRestrictions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChannelRestrictionsEnum = {
    /**
     * value: "Ios"
     * @const
     */
    Ios: "Ios",

    /**
     * value: "Android"
     * @const
     */
    Android: "Android",

    /**
     * value: "Web"
     * @const
     */
    Web: "Web",

    /**
     * value: "Kiosk"
     * @const
     */
    Kiosk: "Kiosk",

    /**
     * value: "Pos"
     * @const
     */
    Pos: "Pos",

    /**
     * value: "Google"
     * @const
     */
    Google: "Google"
  };


  /**
   * Allowed values for the <code>VoucherSubType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VoucherSubTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "SignUp"
     * @const
     */
    SignUp: "SignUp",

    /**
     * value: "Loyalty"
     * @const
     */
    Loyalty: "Loyalty",

    /**
     * value: "Loyalty25"
     * @const
     */
    Loyalty25: "Loyalty25",

    /**
     * value: "Retention"
     * @const
     */
    Retention: "Retention",

    /**
     * value: "SecondaryRetention"
     * @const
     */
    SecondaryRetention: "SecondaryRetention",

    /**
     * value: "Custom"
     * @const
     */
    Custom: "Custom"
  };

  return exports;

}));
