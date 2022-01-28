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
    define(['ApiClient', 'model/AddItemDetails', 'model/CreditNoteDetails', 'model/LumpDiscountDetails', 'model/PercentDiscountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddItemDetails'), require('./CreditNoteDetails'), require('./LumpDiscountDetails'), require('./PercentDiscountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Voucher = factory(root.Flipdish.ApiClient, root.Flipdish.AddItemDetails, root.Flipdish.CreditNoteDetails, root.Flipdish.LumpDiscountDetails, root.Flipdish.PercentDiscountDetails);
  }
}(this, function(ApiClient, AddItemDetails, CreditNoteDetails, LumpDiscountDetails, PercentDiscountDetails) {
  'use strict';

  /**
   * The Voucher model module.
   * @module model/Voucher
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Voucher</code>.
   * Voucher
   * @alias module:model/Voucher
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Voucher</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Voucher} obj Optional instance to populate.
   * @return {module:model/Voucher} The populated <code>Voucher</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('VoucherId'))
        obj.VoucherId = ApiClient.convertToType(data['VoucherId'], 'Number');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('VoucherType'))
        obj.VoucherType = ApiClient.convertToType(data['VoucherType'], 'String');
      if (data.hasOwnProperty('VoucherSubType'))
        obj.VoucherSubType = ApiClient.convertToType(data['VoucherSubType'], 'String');
      if (data.hasOwnProperty('Currency'))
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('Stores'))
        obj.Stores = ApiClient.convertToType(data['Stores'], ['Number']);
      if (data.hasOwnProperty('StoreNames'))
        obj.StoreNames = ApiClient.convertToType(data['StoreNames'], ['String']);
      if (data.hasOwnProperty('AddItemDetails'))
        obj.AddItemDetails = AddItemDetails.constructFromObject(data['AddItemDetails']);
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
   * Voucher Id
   * @member {Number} VoucherId
   */
  exports.prototype.VoucherId = undefined;

  /**
   * Voucher Status
   * @member {module:model/Voucher.StatusEnum} Status
   */
  exports.prototype.Status = undefined;

  /**
   * Voucher Type
   * @member {module:model/Voucher.VoucherTypeEnum} VoucherType
   */
  exports.prototype.VoucherType = undefined;

  /**
   * Voucher Sub Type
   * @member {module:model/Voucher.VoucherSubTypeEnum} VoucherSubType
   */
  exports.prototype.VoucherSubType = undefined;

  /**
   * Currency of the voucher
   * @member {module:model/Voucher.CurrencyEnum} Currency
   */
  exports.prototype.Currency = undefined;

  /**
   * Stores that this voucher applies to
   * @member {Array.<Number>} Stores
   */
  exports.prototype.Stores = undefined;

  /**
   * Stores that this voucher applies to
   * @member {Array.<String>} StoreNames
   */
  exports.prototype.StoreNames = undefined;

  /**
   * Add item details
   * @member {module:model/AddItemDetails} AddItemDetails
   */
  exports.prototype.AddItemDetails = undefined;

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
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Valid"
     * @const
     */
    Valid: "Valid",

    /**
     * value: "NotYetValid"
     * @const
     */
    NotYetValid: "NotYetValid",

    /**
     * value: "Expired"
     * @const
     */
    Expired: "Expired",

    /**
     * value: "Used"
     * @const
     */
    Used: "Used",

    /**
     * value: "Disabled"
     * @const
     */
    Disabled: "Disabled"
  };


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
    CreditNote: "CreditNote"
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


  /**
   * Allowed values for the <code>Currency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrencyEnum = {
    /**
     * value: "EUR"
     * @const
     */
    EUR: "EUR",

    /**
     * value: "USD"
     * @const
     */
    USD: "USD",

    /**
     * value: "GBP"
     * @const
     */
    GBP: "GBP",

    /**
     * value: "CAD"
     * @const
     */
    CAD: "CAD",

    /**
     * value: "AUD"
     * @const
     */
    AUD: "AUD",

    /**
     * value: "DJF"
     * @const
     */
    DJF: "DJF",

    /**
     * value: "ZAR"
     * @const
     */
    ZAR: "ZAR",

    /**
     * value: "ETB"
     * @const
     */
    ETB: "ETB",

    /**
     * value: "AED"
     * @const
     */
    AED: "AED",

    /**
     * value: "BHD"
     * @const
     */
    BHD: "BHD",

    /**
     * value: "DZD"
     * @const
     */
    DZD: "DZD",

    /**
     * value: "EGP"
     * @const
     */
    EGP: "EGP",

    /**
     * value: "IQD"
     * @const
     */
    IQD: "IQD",

    /**
     * value: "JOD"
     * @const
     */
    JOD: "JOD",

    /**
     * value: "KWD"
     * @const
     */
    KWD: "KWD",

    /**
     * value: "LBP"
     * @const
     */
    LBP: "LBP",

    /**
     * value: "LYD"
     * @const
     */
    LYD: "LYD",

    /**
     * value: "MAD"
     * @const
     */
    MAD: "MAD",

    /**
     * value: "OMR"
     * @const
     */
    OMR: "OMR",

    /**
     * value: "QAR"
     * @const
     */
    QAR: "QAR",

    /**
     * value: "SAR"
     * @const
     */
    SAR: "SAR",

    /**
     * value: "SYP"
     * @const
     */
    SYP: "SYP",

    /**
     * value: "TND"
     * @const
     */
    TND: "TND",

    /**
     * value: "YER"
     * @const
     */
    YER: "YER",

    /**
     * value: "CLP"
     * @const
     */
    CLP: "CLP",

    /**
     * value: "INR"
     * @const
     */
    INR: "INR",

    /**
     * value: "AZN"
     * @const
     */
    AZN: "AZN",

    /**
     * value: "RUB"
     * @const
     */
    RUB: "RUB",

    /**
     * value: "BYN"
     * @const
     */
    BYN: "BYN",

    /**
     * value: "BGN"
     * @const
     */
    BGN: "BGN",

    /**
     * value: "NGN"
     * @const
     */
    NGN: "NGN",

    /**
     * value: "BDT"
     * @const
     */
    BDT: "BDT",

    /**
     * value: "CNY"
     * @const
     */
    CNY: "CNY",

    /**
     * value: "BAM"
     * @const
     */
    BAM: "BAM",

    /**
     * value: "CZK"
     * @const
     */
    CZK: "CZK",

    /**
     * value: "DKK"
     * @const
     */
    DKK: "DKK",

    /**
     * value: "CHF"
     * @const
     */
    CHF: "CHF",

    /**
     * value: "MVR"
     * @const
     */
    MVR: "MVR",

    /**
     * value: "BTN"
     * @const
     */
    BTN: "BTN",

    /**
     * value: "XCD"
     * @const
     */
    XCD: "XCD",

    /**
     * value: "BZD"
     * @const
     */
    BZD: "BZD",

    /**
     * value: "HKD"
     * @const
     */
    HKD: "HKD",

    /**
     * value: "IDR"
     * @const
     */
    IDR: "IDR",

    /**
     * value: "JMD"
     * @const
     */
    JMD: "JMD",

    /**
     * value: "MYR"
     * @const
     */
    MYR: "MYR",

    /**
     * value: "NZD"
     * @const
     */
    NZD: "NZD",

    /**
     * value: "PHP"
     * @const
     */
    PHP: "PHP",

    /**
     * value: "SGD"
     * @const
     */
    SGD: "SGD",

    /**
     * value: "TTD"
     * @const
     */
    TTD: "TTD",

    /**
     * value: "XDR"
     * @const
     */
    XDR: "XDR",

    /**
     * value: "ARS"
     * @const
     */
    ARS: "ARS",

    /**
     * value: "BOB"
     * @const
     */
    BOB: "BOB",

    /**
     * value: "COP"
     * @const
     */
    COP: "COP",

    /**
     * value: "CRC"
     * @const
     */
    CRC: "CRC",

    /**
     * value: "CUP"
     * @const
     */
    CUP: "CUP",

    /**
     * value: "DOP"
     * @const
     */
    DOP: "DOP",

    /**
     * value: "GTQ"
     * @const
     */
    GTQ: "GTQ",

    /**
     * value: "HNL"
     * @const
     */
    HNL: "HNL",

    /**
     * value: "MXN"
     * @const
     */
    MXN: "MXN",

    /**
     * value: "NIO"
     * @const
     */
    NIO: "NIO",

    /**
     * value: "PAB"
     * @const
     */
    PAB: "PAB",

    /**
     * value: "PEN"
     * @const
     */
    PEN: "PEN",

    /**
     * value: "PYG"
     * @const
     */
    PYG: "PYG",

    /**
     * value: "UYU"
     * @const
     */
    UYU: "UYU",

    /**
     * value: "VEF"
     * @const
     */
    VEF: "VEF",

    /**
     * value: "IRR"
     * @const
     */
    IRR: "IRR",

    /**
     * value: "XOF"
     * @const
     */
    XOF: "XOF",

    /**
     * value: "CDF"
     * @const
     */
    CDF: "CDF",

    /**
     * value: "XAF"
     * @const
     */
    XAF: "XAF",

    /**
     * value: "HTG"
     * @const
     */
    HTG: "HTG",

    /**
     * value: "ILS"
     * @const
     */
    ILS: "ILS",

    /**
     * value: "HRK"
     * @const
     */
    HRK: "HRK",

    /**
     * value: "HUF"
     * @const
     */
    HUF: "HUF",

    /**
     * value: "AMD"
     * @const
     */
    AMD: "AMD",

    /**
     * value: "ISK"
     * @const
     */
    ISK: "ISK",

    /**
     * value: "JPY"
     * @const
     */
    JPY: "JPY",

    /**
     * value: "GEL"
     * @const
     */
    GEL: "GEL",

    /**
     * value: "KZT"
     * @const
     */
    KZT: "KZT",

    /**
     * value: "KHR"
     * @const
     */
    KHR: "KHR",

    /**
     * value: "KRW"
     * @const
     */
    KRW: "KRW",

    /**
     * value: "KGS"
     * @const
     */
    KGS: "KGS",

    /**
     * value: "LAK"
     * @const
     */
    LAK: "LAK",

    /**
     * value: "MKD"
     * @const
     */
    MKD: "MKD",

    /**
     * value: "MNT"
     * @const
     */
    MNT: "MNT",

    /**
     * value: "BND"
     * @const
     */
    BND: "BND",

    /**
     * value: "MMK"
     * @const
     */
    MMK: "MMK",

    /**
     * value: "NOK"
     * @const
     */
    NOK: "NOK",

    /**
     * value: "NPR"
     * @const
     */
    NPR: "NPR",

    /**
     * value: "PKR"
     * @const
     */
    PKR: "PKR",

    /**
     * value: "PLN"
     * @const
     */
    PLN: "PLN",

    /**
     * value: "AFN"
     * @const
     */
    AFN: "AFN",

    /**
     * value: "BRL"
     * @const
     */
    BRL: "BRL",

    /**
     * value: "MDL"
     * @const
     */
    MDL: "MDL",

    /**
     * value: "RON"
     * @const
     */
    RON: "RON",

    /**
     * value: "RWF"
     * @const
     */
    RWF: "RWF",

    /**
     * value: "SEK"
     * @const
     */
    SEK: "SEK",

    /**
     * value: "LKR"
     * @const
     */
    LKR: "LKR",

    /**
     * value: "SOS"
     * @const
     */
    SOS: "SOS",

    /**
     * value: "ALL"
     * @const
     */
    ALL: "ALL",

    /**
     * value: "RSD"
     * @const
     */
    RSD: "RSD",

    /**
     * value: "KES"
     * @const
     */
    KES: "KES",

    /**
     * value: "TJS"
     * @const
     */
    TJS: "TJS",

    /**
     * value: "THB"
     * @const
     */
    THB: "THB",

    /**
     * value: "ERN"
     * @const
     */
    ERN: "ERN",

    /**
     * value: "TMT"
     * @const
     */
    TMT: "TMT",

    /**
     * value: "BWP"
     * @const
     */
    BWP: "BWP",

    /**
     * value: "TRY"
     * @const
     */
    TRY: "TRY",

    /**
     * value: "UAH"
     * @const
     */
    UAH: "UAH",

    /**
     * value: "UZS"
     * @const
     */
    UZS: "UZS",

    /**
     * value: "VND"
     * @const
     */
    VND: "VND",

    /**
     * value: "MOP"
     * @const
     */
    MOP: "MOP",

    /**
     * value: "TWD"
     * @const
     */
    TWD: "TWD",

    /**
     * value: "BMD"
     * @const
     */
    BMD: "BMD"
  };

  return exports;

}));
