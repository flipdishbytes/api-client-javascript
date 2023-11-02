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
    define(['ApiClient', 'model/CreateFullMenuItemOptionSet', 'model/CreateMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateFullMenuItemOptionSet'), require('./CreateMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateFullMenuSectionItem = factory(root.Flipdish.ApiClient, root.Flipdish.CreateFullMenuItemOptionSet, root.Flipdish.CreateMetadata);
  }
}(this, function(ApiClient, CreateFullMenuItemOptionSet, CreateMetadata) {
  'use strict';

  /**
   * The CreateFullMenuSectionItem model module.
   * @module model/CreateFullMenuSectionItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFullMenuSectionItem</code>.
   * Create menu section item
   * @alias module:model/CreateFullMenuSectionItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFullMenuSectionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFullMenuSectionItem} obj Optional instance to populate.
   * @return {module:model/CreateFullMenuSectionItem} The populated <code>CreateFullMenuSectionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuItemOptionSets'))
        obj.MenuItemOptionSets = ApiClient.convertToType(data['MenuItemOptionSets'], [CreateFullMenuItemOptionSet]);
      if (data.hasOwnProperty('Metadata'))
        obj.Metadata = ApiClient.convertToType(data['Metadata'], [CreateMetadata]);
      if (data.hasOwnProperty('TaxRateName'))
        obj.TaxRateName = ApiClient.convertToType(data['TaxRateName'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('SpicinessRating'))
        obj.SpicinessRating = ApiClient.convertToType(data['SpicinessRating'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.Price = ApiClient.convertToType(data['Price'], 'Number');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.DisplayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
      if (data.hasOwnProperty('Alcohol'))
        obj.Alcohol = ApiClient.convertToType(data['Alcohol'], 'Boolean');
      if (data.hasOwnProperty('IsAvailable'))
        obj.IsAvailable = ApiClient.convertToType(data['IsAvailable'], 'Boolean');
      if (data.hasOwnProperty('CellLayoutType'))
        obj.CellLayoutType = ApiClient.convertToType(data['CellLayoutType'], 'String');
      if (data.hasOwnProperty('DisableVouchers'))
        obj.DisableVouchers = ApiClient.convertToType(data['DisableVouchers'], 'Boolean');
      if (data.hasOwnProperty('ImageName'))
        obj.ImageName = ApiClient.convertToType(data['ImageName'], 'String');
      if (data.hasOwnProperty('ImageUrl'))
        obj.ImageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
      if (data.hasOwnProperty('MenuItemId'))
        obj.MenuItemId = ApiClient.convertToType(data['MenuItemId'], 'Number');
      if (data.hasOwnProperty('ExcludeFromVoucherDiscounting'))
        obj.ExcludeFromVoucherDiscounting = ApiClient.convertToType(data['ExcludeFromVoucherDiscounting'], 'Boolean');
    }
    return obj;
  }

  /**
   * Menu item option sets
   * @member {Array.<module:model/CreateFullMenuItemOptionSet>} MenuItemOptionSets
   */
  exports.prototype.MenuItemOptionSets = undefined;

  /**
   * List of metadata
   * @member {Array.<module:model/CreateMetadata>} Metadata
   */
  exports.prototype.Metadata = undefined;

  /**
   * Tax rate name
   * @member {String} TaxRateName
   */
  exports.prototype.TaxRateName = undefined;

  /**
   * Menu item name (like \"Korma\")
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Description (like \"A lovely dish from the east\")
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Spiciness rating
   * @member {module:model/CreateFullMenuSectionItem.SpicinessRatingEnum} SpicinessRating
   */
  exports.prototype.SpicinessRating = undefined;

  /**
   * Price - this is only used when there is no master option set and should be set to 0 if a master option set exists.
   * @member {Number} Price
   */
  exports.prototype.Price = undefined;

  /**
   * Display order
   * @member {Number} DisplayOrder
   */
  exports.prototype.DisplayOrder = undefined;

  /**
   * To be set true if the item or an option of the item contains an alcoholic drink.
   * @member {Boolean} Alcohol
   */
  exports.prototype.Alcohol = undefined;

  /**
   * True if we accept orders for this item still
   * @member {Boolean} IsAvailable
   */
  exports.prototype.IsAvailable = undefined;

  /**
   * Small | Medium | Large  Affects the layout of the menu.
   * @member {module:model/CreateFullMenuSectionItem.CellLayoutTypeEnum} CellLayoutType
   */
  exports.prototype.CellLayoutType = undefined;

  /**
   * If true, then vouchers won't be applied for this item
   * @member {Boolean} DisableVouchers
   */
  exports.prototype.DisableVouchers = undefined;

  /**
   * Image url
   * @member {String} ImageName
   */
  exports.prototype.ImageName = undefined;

  /**
   * Image url
   * @member {String} ImageUrl
   */
  exports.prototype.ImageUrl = undefined;

  /**
   * Menu Item Id
   * @member {Number} MenuItemId
   */
  exports.prototype.MenuItemId = undefined;

  /**
   * If true, the item is excluded from voucher discount calculations
   * @member {Boolean} ExcludeFromVoucherDiscounting
   */
  exports.prototype.ExcludeFromVoucherDiscounting = undefined;



  /**
   * Allowed values for the <code>SpicinessRating</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SpicinessRatingEnum = {
    /**
     * value: "NotRated"
     * @const
     */
    NotRated: "NotRated",

    /**
     * value: "Mild"
     * @const
     */
    Mild: "Mild",

    /**
     * value: "Medium"
     * @const
     */
    Medium: "Medium",

    /**
     * value: "Hot"
     * @const
     */
    Hot: "Hot"
  };


  /**
   * Allowed values for the <code>CellLayoutType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CellLayoutTypeEnum = {
    /**
     * value: "Small"
     * @const
     */
    Small: "Small",

    /**
     * value: "Medium"
     * @const
     */
    Medium: "Medium",

    /**
     * value: "Large"
     * @const
     */
    Large: "Large",

    /**
     * value: "HiddenImage"
     * @const
     */
    HiddenImage: "HiddenImage"
  };

  return exports;

}));
