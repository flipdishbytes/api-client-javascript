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
    root.FlipdishOpenApiV10.StatisticsCurrencyDataPoint = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatisticsCurrencyDataPoint model module.
   * @module model/StatisticsCurrencyDataPoint
   * @version v1.0
   */

  /**
   * Constructs a new <code>StatisticsCurrencyDataPoint</code>.
   * A single currency data point, with no date
   * @alias module:model/StatisticsCurrencyDataPoint
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StatisticsCurrencyDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsCurrencyDataPoint} obj Optional instance to populate.
   * @return {module:model/StatisticsCurrencyDataPoint} The populated <code>StatisticsCurrencyDataPoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('UserCount'))
        obj.userCount = ApiClient.convertToType(data['UserCount'], 'Number');
      if (data.hasOwnProperty('OrderCount'))
        obj.orderCount = ApiClient.convertToType(data['OrderCount'], 'Number');
      if (data.hasOwnProperty('OrderValue'))
        obj.orderValue = ApiClient.convertToType(data['OrderValue'], 'Number');
    }
    return obj;
  }

  /**
   * Currency
   * @member {module:model/StatisticsCurrencyDataPoint.CurrencyEnum} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Amount of users for this currency
   * @member {Number} userCount
   */
  exports.prototype.userCount = undefined;

  /**
   * Amount of orders for this currency
   * @member {Number} orderCount
   */
  exports.prototype.orderCount = undefined;

  /**
   * Value of orders for this currency
   * @member {Number} orderValue
   */
  exports.prototype.orderValue = undefined;



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
