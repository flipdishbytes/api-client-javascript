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
    root.FlipdishOpenApiV10.Payout = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Payout model module.
   * @module model/Payout
   * @version v1.0
   */

  /**
   * Constructs a new <code>Payout</code>.
   * Holds the information for a whitelabel payout.
   * @alias module:model/Payout
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Payout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payout} obj Optional instance to populate.
   * @return {module:model/Payout} The populated <code>Payout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PayoutId'))
        obj.payoutId = ApiClient.convertToType(data['PayoutId'], 'Number');
      if (data.hasOwnProperty('PayeeBankAccountId'))
        obj.payeeBankAccountId = ApiClient.convertToType(data['PayeeBankAccountId'], 'Number');
      if (data.hasOwnProperty('AccountName'))
        obj.accountName = ApiClient.convertToType(data['AccountName'], 'String');
      if (data.hasOwnProperty('PayoutStatus'))
        obj.payoutStatus = ApiClient.convertToType(data['PayoutStatus'], 'String');
      if (data.hasOwnProperty('CreatedDate'))
        obj.createdDate = ApiClient.convertToType(data['CreatedDate'], 'Date');
      if (data.hasOwnProperty('PeriodStartTime'))
        obj.periodStartTime = ApiClient.convertToType(data['PeriodStartTime'], 'Date');
      if (data.hasOwnProperty('PeriodEndTime'))
        obj.periodEndTime = ApiClient.convertToType(data['PeriodEndTime'], 'Date');
      if (data.hasOwnProperty('DestinationBank'))
        obj.destinationBank = ApiClient.convertToType(data['DestinationBank'], 'String');
      if (data.hasOwnProperty('DestinationAccount'))
        obj.destinationAccount = ApiClient.convertToType(data['DestinationAccount'], 'String');
      if (data.hasOwnProperty('Amount'))
        obj.amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('PayoutType'))
        obj.payoutType = ApiClient.convertToType(data['PayoutType'], 'String');
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('CutoffDate'))
        obj.cutoffDate = ApiClient.convertToType(data['CutoffDate'], 'Date');
    }
    return obj;
  }

  /**
   * The id of the payout.
   * @member {Number} payoutId
   */
  exports.prototype.payoutId = undefined;

  /**
   * Bank account identifier
   * @member {Number} payeeBankAccountId
   */
  exports.prototype.payeeBankAccountId = undefined;

  /**
   * Account name of the payout destination
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Status of the payout
   * @member {module:model/Payout.PayoutStatusEnum} payoutStatus
   */
  exports.prototype.payoutStatus = undefined;

  /**
   * Date payout was created
   * @member {Date} createdDate
   */
  exports.prototype.createdDate = undefined;

  /**
   * This payout includes operations after at this date (inclusive)
   * @member {Date} periodStartTime
   */
  exports.prototype.periodStartTime = undefined;

  /**
   * This payout includes operations before at this date (exclusive)
   * @member {Date} periodEndTime
   */
  exports.prototype.periodEndTime = undefined;

  /**
   * Destination bank name
   * @member {String} destinationBank
   */
  exports.prototype.destinationBank = undefined;

  /**
   * Last 4 digits of the destination bank IBAN
   * @member {String} destinationAccount
   */
  exports.prototype.destinationAccount = undefined;

  /**
   * Payout amount
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Type of payout source
   * @member {module:model/Payout.PayoutTypeEnum} payoutType
   */
  exports.prototype.payoutType = undefined;

  /**
   * Payout currency
   * @member {module:model/Payout.CurrencyEnum} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Payouts before this date do not have a details breakdown
   * @member {Date} cutoffDate
   */
  exports.prototype.cutoffDate = undefined;



  /**
   * Allowed values for the <code>payoutStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PayoutStatusEnum = {
    /**
     * value: "Pending"
     * @const
     */
    pending: "Pending",

    /**
     * value: "InTransit"
     * @const
     */
    inTransit: "InTransit",

    /**
     * value: "Paid"
     * @const
     */
    paid: "Paid",

    /**
     * value: "Failed"
     * @const
     */
    failed: "Failed",

    /**
     * value: "Cancelled"
     * @const
     */
    cancelled: "Cancelled"
  };


  /**
   * Allowed values for the <code>payoutType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PayoutTypeEnum = {
    /**
     * value: "Internal"
     * @const
     */
    internal: "Internal",

    /**
     * value: "Stripe"
     * @const
     */
    stripe: "Stripe"
  };


  /**
   * Allowed values for the <code>currency</code> property.
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
