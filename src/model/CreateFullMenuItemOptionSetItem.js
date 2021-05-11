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
    define(['ApiClient', 'model/CreateMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateFullMenuItemOptionSetItem = factory(root.Flipdish.ApiClient, root.Flipdish.CreateMetadata);
  }
}(this, function(ApiClient, CreateMetadata) {
  'use strict';

  /**
   * The CreateFullMenuItemOptionSetItem model module.
   * @module model/CreateFullMenuItemOptionSetItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFullMenuItemOptionSetItem</code>.
   * Create menu item option set item
   * @alias module:model/CreateFullMenuItemOptionSetItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFullMenuItemOptionSetItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFullMenuItemOptionSetItem} obj Optional instance to populate.
   * @return {module:model/CreateFullMenuItemOptionSetItem} The populated <code>CreateFullMenuItemOptionSetItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Metadata'))
        obj.Metadata = ApiClient.convertToType(data['Metadata'], [CreateMetadata]);
      if (data.hasOwnProperty('TaxRateName'))
        obj.TaxRateName = ApiClient.convertToType(data['TaxRateName'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.Price = ApiClient.convertToType(data['Price'], 'Number');
      if (data.hasOwnProperty('IsAvailable'))
        obj.IsAvailable = ApiClient.convertToType(data['IsAvailable'], 'Boolean');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.DisplayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
      if (data.hasOwnProperty('CellLayoutType'))
        obj.CellLayoutType = ApiClient.convertToType(data['CellLayoutType'], 'String');
      if (data.hasOwnProperty('ImageUrl'))
        obj.ImageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
    }
    return obj;
  }

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
   * Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Price
   * @member {Number} Price
   */
  exports.prototype.Price = undefined;

  /**
   * Is available
   * @member {Boolean} IsAvailable
   */
  exports.prototype.IsAvailable = undefined;

  /**
   * Display order. Displayed in ascending order.
   * @member {Number} DisplayOrder
   */
  exports.prototype.DisplayOrder = undefined;

  /**
   * Small | Medium | Large  Affects the layout of the menu.
   * @member {module:model/CreateFullMenuItemOptionSetItem.CellLayoutTypeEnum} CellLayoutType
   */
  exports.prototype.CellLayoutType = undefined;

  /**
   * Image url
   * @member {String} ImageUrl
   */
  exports.prototype.ImageUrl = undefined;



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
