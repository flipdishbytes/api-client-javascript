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
    root.FlipdishOpenApiV10.LightspeedSettings = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LightspeedSettings model module.
   * @module model/LightspeedSettings
   * @version v1.0
   */

  /**
   * Constructs a new <code>LightspeedSettings</code>.
   * Ligthspeed store settings
   * @alias module:model/LightspeedSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LightspeedSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LightspeedSettings} obj Optional instance to populate.
   * @return {module:model/LightspeedSettings} The populated <code>LightspeedSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CompanyId'))
        obj.companyId = ApiClient.convertToType(data['CompanyId'], 'String');
      if (data.hasOwnProperty('UseOAuth'))
        obj.useOAuth = ApiClient.convertToType(data['UseOAuth'], 'Boolean');
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('EstimatedMinutesForDelivery'))
        obj.estimatedMinutesForDelivery = ApiClient.convertToType(data['EstimatedMinutesForDelivery'], 'Number');
      if (data.hasOwnProperty('EstimatedMinutesForCollection'))
        obj.estimatedMinutesForCollection = ApiClient.convertToType(data['EstimatedMinutesForCollection'], 'Number');
      if (data.hasOwnProperty('GeographicLocation'))
        obj.geographicLocation = ApiClient.convertToType(data['GeographicLocation'], 'String');
      if (data.hasOwnProperty('Establishment'))
        obj.establishment = ApiClient.convertToType(data['Establishment'], 'Boolean');
      if (data.hasOwnProperty('VoucherId'))
        obj.voucherId = ApiClient.convertToType(data['VoucherId'], 'String');
      if (data.hasOwnProperty('DeliveryFeeId'))
        obj.deliveryFeeId = ApiClient.convertToType(data['DeliveryFeeId'], 'String');
      if (data.hasOwnProperty('ProcessingFeeId'))
        obj.processingFeeId = ApiClient.convertToType(data['ProcessingFeeId'], 'String');
      if (data.hasOwnProperty('PriceType'))
        obj.priceType = ApiClient.convertToType(data['PriceType'], 'String');
      if (data.hasOwnProperty('MenuId'))
        obj.menuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('CollectionTableId'))
        obj.collectionTableId = ApiClient.convertToType(data['CollectionTableId'], 'Number');
      if (data.hasOwnProperty('DeliveryTableId'))
        obj.deliveryTableId = ApiClient.convertToType(data['DeliveryTableId'], 'Number');
      if (data.hasOwnProperty('CollectionTableIds'))
        obj.collectionTableIds = ApiClient.convertToType(data['CollectionTableIds'], {'String': 'String'});
      if (data.hasOwnProperty('DeliveryTableIds'))
        obj.deliveryTableIds = ApiClient.convertToType(data['DeliveryTableIds'], {'String': 'String'});
      if (data.hasOwnProperty('UseTaxInclusivePrices'))
        obj.useTaxInclusivePrices = ApiClient.convertToType(data['UseTaxInclusivePrices'], 'Boolean');
      if (data.hasOwnProperty('SkipStatusCheckAndAcceptOrderAfterSending'))
        obj.skipStatusCheckAndAcceptOrderAfterSending = ApiClient.convertToType(data['SkipStatusCheckAndAcceptOrderAfterSending'], 'Boolean');
    }
    return obj;
  }

  /**
   * Company Id
   * @member {String} companyId
   */
  exports.prototype.companyId = undefined;

  /**
   * Use OAuth for authentication
   * @member {Boolean} useOAuth
   */
  exports.prototype.useOAuth = undefined;

  /**
   * Enabled
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * Estimated minutes for delivery
   * @member {Number} estimatedMinutesForDelivery
   */
  exports.prototype.estimatedMinutesForDelivery = undefined;

  /**
   * Estimated minutes for collection
   * @member {Number} estimatedMinutesForCollection
   */
  exports.prototype.estimatedMinutesForCollection = undefined;

  /**
   * Geographic location (euc1, nae1, euw2, ....))
   * @member {String} geographicLocation
   */
  exports.prototype.geographicLocation = undefined;

  /**
   * Is the CompanyId an establishment (kind of the store of a group of store)
   * @member {Boolean} establishment
   */
  exports.prototype.establishment = undefined;

  /**
   * The Lightspeed voucher identifier to map with our
   * @member {String} voucherId
   */
  exports.prototype.voucherId = undefined;

  /**
   * The Lightspeed delivery fee identifier to map with our
   * @member {String} deliveryFeeId
   */
  exports.prototype.deliveryFeeId = undefined;

  /**
   * The Lightspeed processing fee identifier to map with our
   * @member {String} processingFeeId
   */
  exports.prototype.processingFeeId = undefined;

  /**
   * Which price to choose from Lightspeed menu
   * @member {module:model/LightspeedSettings.PriceTypeEnum} priceType
   */
  exports.prototype.priceType = undefined;

  /**
   * The menu id of the store
   * @member {Number} menuId
   */
  exports.prototype.menuId = undefined;

  /**
   * Collection Table ID to send orders
   * @member {Number} collectionTableId
   */
  exports.prototype.collectionTableId = undefined;

  /**
   * Delivery Table ID to send orders
   * @member {Number} deliveryTableId
   */
  exports.prototype.deliveryTableId = undefined;

  /**
   * Collection Table IDs to send orders to
   * @member {Object.<String, String>} collectionTableIds
   */
  exports.prototype.collectionTableIds = undefined;

  /**
   * Delivery Table IDs to send orders to
   * @member {Object.<String, String>} deliveryTableIds
   */
  exports.prototype.deliveryTableIds = undefined;

  /**
   * Exclude tax
   * @member {Boolean} useTaxInclusivePrices
   */
  exports.prototype.useTaxInclusivePrices = undefined;

  /**
   * WARNING: only use this option if the Liteserver is not synchronizing within max 5 minutes with Lightspeed cloud!
   * @member {Boolean} skipStatusCheckAndAcceptOrderAfterSending
   */
  exports.prototype.skipStatusCheckAndAcceptOrderAfterSending = undefined;



  /**
   * Allowed values for the <code>priceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriceTypeEnum = {
    /**
     * value: "Default"
     * @const
     */
    _default: "Default",

    /**
     * value: "Takeaway"
     * @const
     */
    takeaway: "Takeaway",

    /**
     * value: "Delivery"
     * @const
     */
    delivery: "Delivery"
  };

  return exports;

}));
