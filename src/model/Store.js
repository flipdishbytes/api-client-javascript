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
    define(['ApiClient', 'model/BusinessHoursPeriod', 'model/DeliveryZone', 'model/StoreAddress', 'model/StoreNote'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessHoursPeriod'), require('./DeliveryZone'), require('./StoreAddress'), require('./StoreNote'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.Store = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.BusinessHoursPeriod, root.FlipdishOpenApiV10.DeliveryZone, root.FlipdishOpenApiV10.StoreAddress, root.FlipdishOpenApiV10.StoreNote);
  }
}(this, function(ApiClient, BusinessHoursPeriod, DeliveryZone, StoreAddress, StoreNote) {
  'use strict';

  /**
   * The Store model module.
   * @module model/Store
   * @version v1.0
   */

  /**
   * Constructs a new <code>Store</code>.
   * Store
   * @alias module:model/Store
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Store} obj Optional instance to populate.
   * @return {module:model/Store} The populated <code>Store</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.storeId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StoreGroupId'))
        obj.storeGroupId = ApiClient.convertToType(data['StoreGroupId'], 'Number');
      if (data.hasOwnProperty('Address'))
        obj.address = StoreAddress.constructFromObject(data['Address']);
      if (data.hasOwnProperty('DeliveryZones'))
        obj.deliveryZones = ApiClient.convertToType(data['DeliveryZones'], [DeliveryZone]);
      if (data.hasOwnProperty('ApmPhoneNumber'))
        obj.apmPhoneNumber = ApiClient.convertToType(data['ApmPhoneNumber'], 'String');
      if (data.hasOwnProperty('PickupHours'))
        obj.pickupHours = ApiClient.convertToType(data['PickupHours'], [BusinessHoursPeriod]);
      if (data.hasOwnProperty('DeliveryHours'))
        obj.deliveryHours = ApiClient.convertToType(data['DeliveryHours'], [BusinessHoursPeriod]);
      if (data.hasOwnProperty('MenuId'))
        obj.menuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('OrderConfirmationMessageOverrideDelivery'))
        obj.orderConfirmationMessageOverrideDelivery = ApiClient.convertToType(data['OrderConfirmationMessageOverrideDelivery'], 'String');
      if (data.hasOwnProperty('OrderConfirmationMessageOverridePickup'))
        obj.orderConfirmationMessageOverridePickup = ApiClient.convertToType(data['OrderConfirmationMessageOverridePickup'], 'String');
      if (data.hasOwnProperty('PrintoutLayoutType'))
        obj.printoutLayoutType = ApiClient.convertToType(data['PrintoutLayoutType'], 'String');
      if (data.hasOwnProperty('StoreNotes'))
        obj.storeNotes = ApiClient.convertToType(data['StoreNotes'], [StoreNote]);
      if (data.hasOwnProperty('MicrosoftTimeZone'))
        obj.microsoftTimeZone = ApiClient.convertToType(data['MicrosoftTimeZone'], 'String');
      if (data.hasOwnProperty('IanaTimeZone'))
        obj.ianaTimeZone = ApiClient.convertToType(data['IanaTimeZone'], 'String');
      if (data.hasOwnProperty('Currency'))
        obj.currency = ApiClient.convertToType(data['Currency'], 'String');
      if (data.hasOwnProperty('PreOrderDeliveryEnabled'))
        obj.preOrderDeliveryEnabled = ApiClient.convertToType(data['PreOrderDeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('PreOrderPickupEnabled'))
        obj.preOrderPickupEnabled = ApiClient.convertToType(data['PreOrderPickupEnabled'], 'Boolean');
      if (data.hasOwnProperty('LogoUrl'))
        obj.logoUrl = ApiClient.convertToType(data['LogoUrl'], 'String');
      if (data.hasOwnProperty('PhoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['PhoneNumber'], 'String');
      if (data.hasOwnProperty('AlwaysAppearOpen'))
        obj.alwaysAppearOpen = ApiClient.convertToType(data['AlwaysAppearOpen'], 'Boolean');
      if (data.hasOwnProperty('PreOrderEnabled'))
        obj.preOrderEnabled = ApiClient.convertToType(data['PreOrderEnabled'], 'Boolean');
      if (data.hasOwnProperty('TakeOutEnabled'))
        obj.takeOutEnabled = ApiClient.convertToType(data['TakeOutEnabled'], 'Boolean');
      if (data.hasOwnProperty('TableServiceEnabled'))
        obj.tableServiceEnabled = ApiClient.convertToType(data['TableServiceEnabled'], 'Boolean');
      if (data.hasOwnProperty('DineInEnabled'))
        obj.dineInEnabled = ApiClient.convertToType(data['DineInEnabled'], 'Boolean');
      if (data.hasOwnProperty('AllowPreOrdersAndTableService'))
        obj.allowPreOrdersAndTableService = ApiClient.convertToType(data['AllowPreOrdersAndTableService'], 'Boolean');
      if (data.hasOwnProperty('PickupEnabled'))
        obj.pickupEnabled = ApiClient.convertToType(data['PickupEnabled'], 'Boolean');
      if (data.hasOwnProperty('DeliveryEnabled'))
        obj.deliveryEnabled = ApiClient.convertToType(data['DeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('CardOrderDeliveryEnabled'))
        obj.cardOrderDeliveryEnabled = ApiClient.convertToType(data['CardOrderDeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('CashOrdersDeliveryEnabled'))
        obj.cashOrdersDeliveryEnabled = ApiClient.convertToType(data['CashOrdersDeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('CardOrdersPickupEnabled'))
        obj.cardOrdersPickupEnabled = ApiClient.convertToType(data['CardOrdersPickupEnabled'], 'Boolean');
      if (data.hasOwnProperty('CashOrdersPickupEnabled'))
        obj.cashOrdersPickupEnabled = ApiClient.convertToType(data['CashOrdersPickupEnabled'], 'Boolean');
      if (data.hasOwnProperty('TipsEnabled'))
        obj.tipsEnabled = ApiClient.convertToType(data['TipsEnabled'], 'Boolean');
      if (data.hasOwnProperty('AutomaticallyAcceptOrders'))
        obj.automaticallyAcceptOrders = ApiClient.convertToType(data['AutomaticallyAcceptOrders'], 'Boolean');
      if (data.hasOwnProperty('OpenForDelivery'))
        obj.openForDelivery = ApiClient.convertToType(data['OpenForDelivery'], 'Boolean');
      if (data.hasOwnProperty('OpenForPickup'))
        obj.openForPickup = ApiClient.convertToType(data['OpenForPickup'], 'Boolean');
      if (data.hasOwnProperty('MinimumPickupOrderAmount'))
        obj.minimumPickupOrderAmount = ApiClient.convertToType(data['MinimumPickupOrderAmount'], 'Number');
      if (data.hasOwnProperty('RequireCustomerNameForPickup'))
        obj.requireCustomerNameForPickup = ApiClient.convertToType(data['RequireCustomerNameForPickup'], 'Boolean');
      if (data.hasOwnProperty('GdprCustomerPhoneNumbers'))
        obj.gdprCustomerPhoneNumbers = ApiClient.convertToType(data['GdprCustomerPhoneNumbers'], 'Boolean');
      if (data.hasOwnProperty('RequireCustomerNameForDelivery'))
        obj.requireCustomerNameForDelivery = ApiClient.convertToType(data['RequireCustomerNameForDelivery'], 'Boolean');
      if (data.hasOwnProperty('AllowChefNotes'))
        obj.allowChefNotes = ApiClient.convertToType(data['AllowChefNotes'], 'Boolean');
      if (data.hasOwnProperty('EtaInPickupConfirmationSmsEnabled'))
        obj.etaInPickupConfirmationSmsEnabled = ApiClient.convertToType(data['EtaInPickupConfirmationSmsEnabled'], 'Boolean');
      if (data.hasOwnProperty('EtaInDeliveryConfirmationSmsEnabled'))
        obj.etaInDeliveryConfirmationSmsEnabled = ApiClient.convertToType(data['EtaInDeliveryConfirmationSmsEnabled'], 'Boolean');
      if (data.hasOwnProperty('IsArchived'))
        obj.isArchived = ApiClient.convertToType(data['IsArchived'], 'Boolean');
      if (data.hasOwnProperty('IsPublished'))
        obj.isPublished = ApiClient.convertToType(data['IsPublished'], 'Boolean');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('EmailAddress'))
        obj.emailAddress = ApiClient.convertToType(data['EmailAddress'], 'String');
      if (data.hasOwnProperty('StaffLanguage'))
        obj.staffLanguage = ApiClient.convertToType(data['StaffLanguage'], 'String');
    }
    return obj;
  }

  /**
   * Store identifier
   * @member {Number} storeId
   */
  exports.prototype.storeId = undefined;

  /**
   * Store group id to which this store belongs
   * @member {Number} storeGroupId
   */
  exports.prototype.storeGroupId = undefined;

  /**
   * Store address
   * @member {module:model/StoreAddress} address
   */
  exports.prototype.address = undefined;

  /**
   * Delivery zones
   * @member {Array.<module:model/DeliveryZone>} deliveryZones
   */
  exports.prototype.deliveryZones = undefined;

  /**
   * Automated Phone Marketing number
   * @member {String} apmPhoneNumber
   */
  exports.prototype.apmPhoneNumber = undefined;

  /**
   * Pickup hours
   * @member {Array.<module:model/BusinessHoursPeriod>} pickupHours
   */
  exports.prototype.pickupHours = undefined;

  /**
   * Delivery hours
   * @member {Array.<module:model/BusinessHoursPeriod>} deliveryHours
   */
  exports.prototype.deliveryHours = undefined;

  /**
   * Menu identifier
   * @member {Number} menuId
   */
  exports.prototype.menuId = undefined;

  /**
   * Overridden confirmation message for delivery orders
   * @member {String} orderConfirmationMessageOverrideDelivery
   */
  exports.prototype.orderConfirmationMessageOverrideDelivery = undefined;

  /**
   * Overridden confirmation message for pickup orders
   * @member {String} orderConfirmationMessageOverridePickup
   */
  exports.prototype.orderConfirmationMessageOverridePickup = undefined;

  /**
   * Printout layout
   * @member {module:model/Store.PrintoutLayoutTypeEnum} printoutLayoutType
   */
  exports.prototype.printoutLayoutType = undefined;

  /**
   * Store notes
   * @member {Array.<module:model/StoreNote>} storeNotes
   */
  exports.prototype.storeNotes = undefined;

  /**
   * Microsoft Time Zone Index Values (https://msdn.microsoft.com/en-us/library/ms912391)  (Editable through store coordinate change)
   * @member {String} microsoftTimeZone
   */
  exports.prototype.microsoftTimeZone = undefined;

  /**
   * IANA Time Zone (https://www.iana.org/time-zones)  (Editable through store coordinate change)
   * @member {String} ianaTimeZone
   */
  exports.prototype.ianaTimeZone = undefined;

  /**
   * Currency (derived from Store Group)
   * @member {module:model/Store.CurrencyEnum} currency
   */
  exports.prototype.currency = undefined;

  /**
   * Is PerOrder Enabled for Delivery
   * @member {Boolean} preOrderDeliveryEnabled
   */
  exports.prototype.preOrderDeliveryEnabled = undefined;

  /**
   * Is PerOrder Enabled for Pickup
   * @member {Boolean} preOrderPickupEnabled
   */
  exports.prototype.preOrderPickupEnabled = undefined;

  /**
   * Url for logo image
   * @member {String} logoUrl
   */
  exports.prototype.logoUrl = undefined;

  /**
   * Phone number
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * True if the store always appears open
   * @member {Boolean} alwaysAppearOpen
   */
  exports.prototype.alwaysAppearOpen = undefined;

  /**
   * True if the store accepts pre-orders
   * @member {Boolean} preOrderEnabled
   */
  exports.prototype.preOrderEnabled = undefined;

  /**
   * True if the store accepts take-out orders
   * @member {Boolean} takeOutEnabled
   */
  exports.prototype.takeOutEnabled = undefined;

  /**
   * True if the store has table service
   * @member {Boolean} tableServiceEnabled
   */
  exports.prototype.tableServiceEnabled = undefined;

  /**
   * True if the store accepts dine-in orders
   * @member {Boolean} dineInEnabled
   */
  exports.prototype.dineInEnabled = undefined;

  /**
   * True if both pre-orders and talbe service can be enabled
   * @member {Boolean} allowPreOrdersAndTableService
   */
  exports.prototype.allowPreOrdersAndTableService = undefined;

  /**
   * True if the store accepts pickup orders
   * @member {Boolean} pickupEnabled
   */
  exports.prototype.pickupEnabled = undefined;

  /**
   * True if the store accepts delivery orders
   * @member {Boolean} deliveryEnabled
   */
  exports.prototype.deliveryEnabled = undefined;

  /**
   * True if the store accepts card payment for delivery orders
   * @member {Boolean} cardOrderDeliveryEnabled
   */
  exports.prototype.cardOrderDeliveryEnabled = undefined;

  /**
   * True if the store accepts cash payment for delivery orders
   * @member {Boolean} cashOrdersDeliveryEnabled
   */
  exports.prototype.cashOrdersDeliveryEnabled = undefined;

  /**
   * True if the store accepts card payment for pickup orders
   * @member {Boolean} cardOrdersPickupEnabled
   */
  exports.prototype.cardOrdersPickupEnabled = undefined;

  /**
   * True if the store accepts cash payment for pickup orders
   * @member {Boolean} cashOrdersPickupEnabled
   */
  exports.prototype.cashOrdersPickupEnabled = undefined;

  /**
   * True if the store accepts tips
   * @member {Boolean} tipsEnabled
   */
  exports.prototype.tipsEnabled = undefined;

  /**
   * True if the stores orders are automatically accepted in Flipdish
   * @member {Boolean} automaticallyAcceptOrders
   */
  exports.prototype.automaticallyAcceptOrders = undefined;

  /**
   * True if the store is open for delivery
   * @member {Boolean} openForDelivery
   */
  exports.prototype.openForDelivery = undefined;

  /**
   * True if the store is open for pickup
   * @member {Boolean} openForPickup
   */
  exports.prototype.openForPickup = undefined;

  /**
   * Minimum pickup order amount
   * @member {Number} minimumPickupOrderAmount
   */
  exports.prototype.minimumPickupOrderAmount = undefined;

  /**
   * True if customer name required for pickup orders
   * @member {Boolean} requireCustomerNameForPickup
   */
  exports.prototype.requireCustomerNameForPickup = undefined;

  /**
   * Mask your customers phone numbers printed on receipts and reduce the amout of personally identifiable customer information that is exposed.
   * @member {Boolean} gdprCustomerPhoneNumbers
   */
  exports.prototype.gdprCustomerPhoneNumbers = undefined;

  /**
   * True if customer name required for delivery orders
   * @member {Boolean} requireCustomerNameForDelivery
   */
  exports.prototype.requireCustomerNameForDelivery = undefined;

  /**
   * True if the customer is allowed enter custom notes with their orders
   * @member {Boolean} allowChefNotes
   */
  exports.prototype.allowChefNotes = undefined;

  /**
   * True if order confirmation sms includes estimated time when order will be ready for collection
   * @member {Boolean} etaInPickupConfirmationSmsEnabled
   */
  exports.prototype.etaInPickupConfirmationSmsEnabled = undefined;

  /**
   * True if order confirmation sms includes estimated time when order will delivered
   * @member {Boolean} etaInDeliveryConfirmationSmsEnabled
   */
  exports.prototype.etaInDeliveryConfirmationSmsEnabled = undefined;

  /**
   * Is the Store Archived
   * @member {Boolean} isArchived
   */
  exports.prototype.isArchived = undefined;

  /**
   * Is the Store Published
   * @member {Boolean} isPublished
   */
  exports.prototype.isPublished = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Email address (visible to customers)
   * @member {String} emailAddress
   */
  exports.prototype.emailAddress = undefined;

  /**
   * Staff Language (used for communication with the staff)  Emails, Printouts etc
   * @member {String} staffLanguage
   */
  exports.prototype.staffLanguage = undefined;



  /**
   * Allowed values for the <code>printoutLayoutType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PrintoutLayoutTypeEnum = {
    /**
     * value: "Default"
     * @const
     */
    _default: "Default",

    /**
     * value: "Centra"
     * @const
     */
    centra: "Centra",

    /**
     * value: "SmallChefNotes"
     * @const
     */
    smallChefNotes: "SmallChefNotes",

    /**
     * value: "SmallChefNotesAndCentra"
     * @const
     */
    smallChefNotesAndCentra: "SmallChefNotesAndCentra"
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
