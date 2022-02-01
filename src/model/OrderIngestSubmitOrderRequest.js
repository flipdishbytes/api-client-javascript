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
    define(['ApiClient', 'model/Cart', 'model/Contact', 'model/FulfillmentInfo', 'model/PaymentInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cart'), require('./Contact'), require('./FulfillmentInfo'), require('./PaymentInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderIngestSubmitOrderRequest = factory(root.Flipdish.ApiClient, root.Flipdish.Cart, root.Flipdish.Contact, root.Flipdish.FulfillmentInfo, root.Flipdish.PaymentInfo);
  }
}(this, function(ApiClient, Cart, Contact, FulfillmentInfo, PaymentInfo) {
  'use strict';

  /**
   * The OrderIngestSubmitOrderRequest model module.
   * @module model/OrderIngestSubmitOrderRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderIngestSubmitOrderRequest</code>.
   * Generic model for ingesting external orders from   3rd parties into the system
   * @alias module:model/OrderIngestSubmitOrderRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderIngestSubmitOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIngestSubmitOrderRequest} obj Optional instance to populate.
   * @return {module:model/OrderIngestSubmitOrderRequest} The populated <code>OrderIngestSubmitOrderRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AppType'))
        obj.AppType = ApiClient.convertToType(data['AppType'], 'String');
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('CurrencyCode'))
        obj.CurrencyCode = ApiClient.convertToType(data['CurrencyCode'], 'String');
      if (data.hasOwnProperty('Cart'))
        obj.Cart = Cart.constructFromObject(data['Cart']);
      if (data.hasOwnProperty('FulfillmentInfo'))
        obj.FulfillmentInfo = FulfillmentInfo.constructFromObject(data['FulfillmentInfo']);
      if (data.hasOwnProperty('ChannelOrderId'))
        obj.ChannelOrderId = ApiClient.convertToType(data['ChannelOrderId'], 'String');
      if (data.hasOwnProperty('ChannelPublicOrderId'))
        obj.ChannelPublicOrderId = ApiClient.convertToType(data['ChannelPublicOrderId'], 'String');
      if (data.hasOwnProperty('OrderDateUtc'))
        obj.OrderDateUtc = ApiClient.convertToType(data['OrderDateUtc'], 'Date');
      if (data.hasOwnProperty('PaymentInfo'))
        obj.PaymentInfo = PaymentInfo.constructFromObject(data['PaymentInfo']);
      if (data.hasOwnProperty('Contact'))
        obj.Contact = Contact.constructFromObject(data['Contact']);
      if (data.hasOwnProperty('TipAmount'))
        obj.TipAmount = ApiClient.convertToType(data['TipAmount'], 'Number');
    }
    return obj;
  }

  /**
   * [Required] Indicated the name from where the request is coming from
   * @member {module:model/OrderIngestSubmitOrderRequest.AppTypeEnum} AppType
   */
  exports.prototype.AppType = undefined;

  /**
   * [Required] Store Id
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * [Required] Currency Code  These must match three letter codes ISO 4127 http://en.wikipedia.org/wiki/ISO_4217
   * @member {module:model/OrderIngestSubmitOrderRequest.CurrencyCodeEnum} CurrencyCode
   */
  exports.prototype.CurrencyCode = undefined;

  /**
   * [Required] Cart of the user
   * @member {module:model/Cart} Cart
   */
  exports.prototype.Cart = undefined;

  /**
   * [Required] Relevant fulfillment Information
   * @member {module:model/FulfillmentInfo} FulfillmentInfo
   */
  exports.prototype.FulfillmentInfo = undefined;

  /**
   * [Required] Order ID in the external System
   * @member {String} ChannelOrderId
   */
  exports.prototype.ChannelOrderId = undefined;

  /**
   * [Optional] Public Order ID in the external System
   * @member {String} ChannelPublicOrderId
   */
  exports.prototype.ChannelPublicOrderId = undefined;

  /**
   * Date the order was placed at in UTC  [Required]
   * @member {Date} OrderDateUtc
   */
  exports.prototype.OrderDateUtc = undefined;

  /**
   * Payment Information  [Required]
   * @member {module:model/PaymentInfo} PaymentInfo
   */
  exports.prototype.PaymentInfo = undefined;

  /**
   * Contact Information  [Required]
   * @member {module:model/Contact} Contact
   */
  exports.prototype.Contact = undefined;

  /**
   * Tip amount
   * @member {Number} TipAmount
   */
  exports.prototype.TipAmount = undefined;



  /**
   * Allowed values for the <code>AppType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppTypeEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

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
     * value: "TelephoneCall"
     * @const
     */
    TelephoneCall: "TelephoneCall",

    /**
     * value: "Sms"
     * @const
     */
    Sms: "Sms",

    /**
     * value: "PwaAndroid"
     * @const
     */
    PwaAndroid: "PwaAndroid",

    /**
     * value: "PwaIos"
     * @const
     */
    PwaIos: "PwaIos",

    /**
     * value: "Google"
     * @const
     */
    Google: "Google"
  };


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

  return exports;

}));