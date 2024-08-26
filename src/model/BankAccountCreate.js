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
    define(['ApiClient', 'model/AccountFieldKeyValuePair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountFieldKeyValuePair'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.BankAccountCreate = factory(root.Flipdish.ApiClient, root.Flipdish.AccountFieldKeyValuePair);
  }
}(this, function(ApiClient, AccountFieldKeyValuePair) {
  'use strict';

  /**
   * The BankAccountCreate model module.
   * @module model/BankAccountCreate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BankAccountCreate</code>.
   * 
   * @alias module:model/BankAccountCreate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BankAccountCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccountCreate} obj Optional instance to populate.
   * @return {module:model/BankAccountCreate} The populated <code>BankAccountCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BankAddress'))
        obj.BankAddress = ApiClient.convertToType(data['BankAddress'], 'String');
      if (data.hasOwnProperty('BankCountryCode'))
        obj.BankCountryCode = ApiClient.convertToType(data['BankCountryCode'], 'String');
      if (data.hasOwnProperty('AccountHolderAddress'))
        obj.AccountHolderAddress = ApiClient.convertToType(data['AccountHolderAddress'], 'String');
      if (data.hasOwnProperty('AccountHolderCountryCode'))
        obj.AccountHolderCountryCode = ApiClient.convertToType(data['AccountHolderCountryCode'], 'String');
      if (data.hasOwnProperty('VatNumber'))
        obj.VatNumber = ApiClient.convertToType(data['VatNumber'], 'String');
      if (data.hasOwnProperty('CurrencyCode'))
        obj.CurrencyCode = ApiClient.convertToType(data['CurrencyCode'], 'String');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
      if (data.hasOwnProperty('BankName'))
        obj.BankName = ApiClient.convertToType(data['BankName'], 'String');
      if (data.hasOwnProperty('AccountName'))
        obj.AccountName = ApiClient.convertToType(data['AccountName'], 'String');
      if (data.hasOwnProperty('Iban'))
        obj.Iban = ApiClient.convertToType(data['Iban'], 'String');
      if (data.hasOwnProperty('Swift'))
        obj.Swift = ApiClient.convertToType(data['Swift'], 'String');
      if (data.hasOwnProperty('NationalClearingCode'))
        obj.NationalClearingCode = ApiClient.convertToType(data['NationalClearingCode'], 'String');
      if (data.hasOwnProperty('PopulatedAccountFields'))
        obj.PopulatedAccountFields = ApiClient.convertToType(data['PopulatedAccountFields'], [AccountFieldKeyValuePair]);
      if (data.hasOwnProperty('RejectionReason'))
        obj.RejectionReason = ApiClient.convertToType(data['RejectionReason'], 'String');
      if (data.hasOwnProperty('BusinessType'))
        obj.BusinessType = ApiClient.convertToType(data['BusinessType'], 'String');
    }
    return obj;
  }

  /**
   * Address lf the bank
   * @member {String} BankAddress
   */
  exports.prototype.BankAddress = undefined;

  /**
   * CountryCode of the Bank Account
   * @member {String} BankCountryCode
   */
  exports.prototype.BankCountryCode = undefined;

  /**
   * Account Holders Address
   * @member {String} AccountHolderAddress
   */
  exports.prototype.AccountHolderAddress = undefined;

  /**
   * Account Holders Country Code
   * @member {String} AccountHolderCountryCode
   */
  exports.prototype.AccountHolderCountryCode = undefined;

  /**
   * Account Holders Vat Number
   * @member {String} VatNumber
   */
  exports.prototype.VatNumber = undefined;

  /**
   * Currency of Account
   * @member {module:model/BankAccountCreate.CurrencyCodeEnum} CurrencyCode
   */
  exports.prototype.CurrencyCode = undefined;

  /**
   * List of stores to attach to Account
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;

  /**
   * Name of Bank
   * @member {String} BankName
   */
  exports.prototype.BankName = undefined;

  /**
   * Name of this account
   * @member {String} AccountName
   */
  exports.prototype.AccountName = undefined;

  /**
   * IBAN of this account
   * @member {String} Iban
   */
  exports.prototype.Iban = undefined;

  /**
   * SWIFT of this bank account
   * @member {String} Swift
   */
  exports.prototype.Swift = undefined;

  /**
   * National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ)
   * @member {String} NationalClearingCode
   */
  exports.prototype.NationalClearingCode = undefined;

  /**
   * A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored.
   * @member {Array.<module:model/AccountFieldKeyValuePair>} PopulatedAccountFields
   */
  exports.prototype.PopulatedAccountFields = undefined;

  /**
   * Reason for Rejection
   * @member {String} RejectionReason
   */
  exports.prototype.RejectionReason = undefined;

  /**
   * Business Type
   * @member {module:model/BankAccountCreate.BusinessTypeEnum} BusinessType
   */
  exports.prototype.BusinessType = undefined;



  /**
   * Allowed values for the <code>CurrencyCode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrencyCodeEnum = {
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


  /**
   * Allowed values for the <code>BusinessType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessTypeEnum = {
    /**
     * value: "Individual"
     * @const
     */
    Individual: "Individual",

    /**
     * value: "Company"
     * @const
     */
    Company: "Company",

    /**
     * value: "NonProfit"
     * @const
     */
    NonProfit: "NonProfit",

    /**
     * value: "GovernmentEntity"
     * @const
     */
    GovernmentEntity: "GovernmentEntity"
  };

  return exports;

}));
