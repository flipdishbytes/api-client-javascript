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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.LightspeedSettings = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LightspeedSettings model module.
   * @module model/LightspeedSettings
   * @version 1.0.0
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
        obj.CompanyId = ApiClient.convertToType(data['CompanyId'], 'String');
      if (data.hasOwnProperty('UseOAuth'))
        obj.UseOAuth = ApiClient.convertToType(data['UseOAuth'], 'Boolean');
      if (data.hasOwnProperty('Enabled'))
        obj.Enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('EstimatedMinutesForDelivery'))
        obj.EstimatedMinutesForDelivery = ApiClient.convertToType(data['EstimatedMinutesForDelivery'], 'Number');
      if (data.hasOwnProperty('EstimatedMinutesForCollection'))
        obj.EstimatedMinutesForCollection = ApiClient.convertToType(data['EstimatedMinutesForCollection'], 'Number');
      if (data.hasOwnProperty('GeographicLocation'))
        obj.GeographicLocation = ApiClient.convertToType(data['GeographicLocation'], 'String');
      if (data.hasOwnProperty('Establishment'))
        obj.Establishment = ApiClient.convertToType(data['Establishment'], 'Boolean');
      if (data.hasOwnProperty('VoucherId'))
        obj.VoucherId = ApiClient.convertToType(data['VoucherId'], 'String');
      if (data.hasOwnProperty('DeliveryFeeId'))
        obj.DeliveryFeeId = ApiClient.convertToType(data['DeliveryFeeId'], 'String');
      if (data.hasOwnProperty('ProcessingFeeId'))
        obj.ProcessingFeeId = ApiClient.convertToType(data['ProcessingFeeId'], 'String');
      if (data.hasOwnProperty('PriceType'))
        obj.PriceType = ApiClient.convertToType(data['PriceType'], 'String');
      if (data.hasOwnProperty('MenuId'))
        obj.MenuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('CollectionTableId'))
        obj.CollectionTableId = ApiClient.convertToType(data['CollectionTableId'], 'Number');
      if (data.hasOwnProperty('DeliveryTableId'))
        obj.DeliveryTableId = ApiClient.convertToType(data['DeliveryTableId'], 'Number');
      if (data.hasOwnProperty('CollectionTableIds'))
        obj.CollectionTableIds = ApiClient.convertToType(data['CollectionTableIds'], {'String': 'String'});
      if (data.hasOwnProperty('DeliveryTableIds'))
        obj.DeliveryTableIds = ApiClient.convertToType(data['DeliveryTableIds'], {'String': 'String'});
      if (data.hasOwnProperty('UseTaxInclusivePrices'))
        obj.UseTaxInclusivePrices = ApiClient.convertToType(data['UseTaxInclusivePrices'], 'Boolean');
      if (data.hasOwnProperty('SkipStatusCheckAndAcceptOrderAfterSending'))
        obj.SkipStatusCheckAndAcceptOrderAfterSending = ApiClient.convertToType(data['SkipStatusCheckAndAcceptOrderAfterSending'], 'Boolean');
      if (data.hasOwnProperty('SendTableNumberToTableId'))
        obj.SendTableNumberToTableId = ApiClient.convertToType(data['SendTableNumberToTableId'], 'Boolean');
      if (data.hasOwnProperty('AddChefNoteToProduct'))
        obj.AddChefNoteToProduct = ApiClient.convertToType(data['AddChefNoteToProduct'], 'Boolean');
      if (data.hasOwnProperty('ChefNoteItemId'))
        obj.ChefNoteItemId = ApiClient.convertToType(data['ChefNoteItemId'], 'String');
      if (data.hasOwnProperty('ChefNoteModifierId'))
        obj.ChefNoteModifierId = ApiClient.convertToType(data['ChefNoteModifierId'], 'String');
      if (data.hasOwnProperty('ServiceChargeId'))
        obj.ServiceChargeId = ApiClient.convertToType(data['ServiceChargeId'], 'String');
    }
    return obj;
  }

  /**
   * Company Id
   * @member {String} CompanyId
   */
  exports.prototype.CompanyId = undefined;

  /**
   * Use OAuth for authentication
   * @member {Boolean} UseOAuth
   */
  exports.prototype.UseOAuth = undefined;

  /**
   * Enabled
   * @member {Boolean} Enabled
   */
  exports.prototype.Enabled = undefined;

  /**
   * Estimated minutes for delivery
   * @member {Number} EstimatedMinutesForDelivery
   */
  exports.prototype.EstimatedMinutesForDelivery = undefined;

  /**
   * Estimated minutes for collection
   * @member {Number} EstimatedMinutesForCollection
   */
  exports.prototype.EstimatedMinutesForCollection = undefined;

  /**
   * Geographic location (euc1, nae1, euw2, ....))
   * @member {String} GeographicLocation
   */
  exports.prototype.GeographicLocation = undefined;

  /**
   * Is the CompanyId an establishment (kind of the store of a group of store)
   * @member {Boolean} Establishment
   */
  exports.prototype.Establishment = undefined;

  /**
   * The Lightspeed voucher identifier to map with our
   * @member {String} VoucherId
   */
  exports.prototype.VoucherId = undefined;

  /**
   * The Lightspeed delivery fee identifier to map with our
   * @member {String} DeliveryFeeId
   */
  exports.prototype.DeliveryFeeId = undefined;

  /**
   * The Lightspeed processing fee identifier to map with our
   * @member {String} ProcessingFeeId
   */
  exports.prototype.ProcessingFeeId = undefined;

  /**
   * Which price to choose from Lightspeed menu
   * @member {module:model/LightspeedSettings.PriceTypeEnum} PriceType
   */
  exports.prototype.PriceType = undefined;

  /**
   * The menu id of the store
   * @member {Number} MenuId
   */
  exports.prototype.MenuId = undefined;

  /**
   * Collection Table ID to send orders
   * @member {Number} CollectionTableId
   */
  exports.prototype.CollectionTableId = undefined;

  /**
   * Delivery Table ID to send orders
   * @member {Number} DeliveryTableId
   */
  exports.prototype.DeliveryTableId = undefined;

  /**
   * Collection Table IDs to send orders to
   * @member {Object.<String, String>} CollectionTableIds
   */
  exports.prototype.CollectionTableIds = undefined;

  /**
   * Delivery Table IDs to send orders to
   * @member {Object.<String, String>} DeliveryTableIds
   */
  exports.prototype.DeliveryTableIds = undefined;

  /**
   * Exclude tax
   * @member {Boolean} UseTaxInclusivePrices
   */
  exports.prototype.UseTaxInclusivePrices = undefined;

  /**
   * WARNING: only use this option if the Liteserver is not synchronizing within max 5 minutes with Lightspeed cloud!
   * @member {Boolean} SkipStatusCheckAndAcceptOrderAfterSending
   */
  exports.prototype.SkipStatusCheckAndAcceptOrderAfterSending = undefined;

  /**
   * Send Table Number to Table Id
   * @member {Boolean} SendTableNumberToTableId
   */
  exports.prototype.SendTableNumberToTableId = undefined;

  /**
   * Add ChefNote To Product
   * @member {Boolean} AddChefNoteToProduct
   */
  exports.prototype.AddChefNoteToProduct = undefined;

  /**
   * The Lightspeed Chef Note Item Id to map
   * @member {String} ChefNoteItemId
   */
  exports.prototype.ChefNoteItemId = undefined;

  /**
   * The Lightspeed Chef Note Modifier Id to map
   * @member {String} ChefNoteModifierId
   */
  exports.prototype.ChefNoteModifierId = undefined;

  /**
   * The Lightspeed Service Charge Id to map
   * @member {String} ServiceChargeId
   */
  exports.prototype.ServiceChargeId = undefined;



  /**
   * Allowed values for the <code>PriceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriceTypeEnum = {
    /**
     * value: "Default"
     * @const
     */
    _Default: "Default",

    /**
     * value: "Takeaway"
     * @const
     */
    Takeaway: "Takeaway",

    /**
     * value: "Delivery"
     * @const
     */
    Delivery: "Delivery"
  };

  return exports;

}));
