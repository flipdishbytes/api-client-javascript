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
    define(['ApiClient', 'model/MenuItemOptionSetItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuItemOptionSetItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MenuItemOptionSet = factory(root.Flipdish.ApiClient, root.Flipdish.MenuItemOptionSetItem);
  }
}(this, function(ApiClient, MenuItemOptionSetItem) {
  'use strict';

  /**
   * The MenuItemOptionSet model module.
   * @module model/MenuItemOptionSet
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuItemOptionSet</code>.
   * Menu item option set
   * @alias module:model/MenuItemOptionSet
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuItemOptionSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuItemOptionSet} obj Optional instance to populate.
   * @return {module:model/MenuItemOptionSet} The populated <code>MenuItemOptionSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuItemOptionSetId'))
        obj.MenuItemOptionSetId = ApiClient.convertToType(data['MenuItemOptionSetId'], 'Number');
      if (data.hasOwnProperty('ImageName'))
        obj.ImageName = ApiClient.convertToType(data['ImageName'], 'String');
      if (data.hasOwnProperty('ImageUrl'))
        obj.ImageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
      if (data.hasOwnProperty('MenuItemOptionSetItems'))
        obj.MenuItemOptionSetItems = ApiClient.convertToType(data['MenuItemOptionSetItems'], [MenuItemOptionSetItem]);
      if (data.hasOwnProperty('PublicId'))
        obj.PublicId = ApiClient.convertToType(data['PublicId'], 'String');
      if (data.hasOwnProperty('ProductId'))
        obj.ProductId = ApiClient.convertToType(data['ProductId'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('IsMasterOptionSet'))
        obj.IsMasterOptionSet = ApiClient.convertToType(data['IsMasterOptionSet'], 'Boolean');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.DisplayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
      if (data.hasOwnProperty('MinSelectCount'))
        obj.MinSelectCount = ApiClient.convertToType(data['MinSelectCount'], 'Number');
      if (data.hasOwnProperty('MaxSelectCount'))
        obj.MaxSelectCount = ApiClient.convertToType(data['MaxSelectCount'], 'Number');
      if (data.hasOwnProperty('CellLayoutType'))
        obj.CellLayoutType = ApiClient.convertToType(data['CellLayoutType'], 'String');
    }
    return obj;
  }

  /**
   * Menu item option set identifier
   * @member {Number} MenuItemOptionSetId
   */
  exports.prototype.MenuItemOptionSetId = undefined;

  /**
   * Image Name
   * @member {String} ImageName
   */
  exports.prototype.ImageName = undefined;

  /**
   * Image url
   * @member {String} ImageUrl
   */
  exports.prototype.ImageUrl = undefined;

  /**
   * Option set items
   * @member {Array.<module:model/MenuItemOptionSetItem>} MenuItemOptionSetItems
   */
  exports.prototype.MenuItemOptionSetItems = undefined;

  /**
   * Permanent reference to the item.
   * @member {String} PublicId
   */
  exports.prototype.PublicId = undefined;

  /**
   * Product Id when the OptionSet is associated to a Product
   * @member {String} ProductId
   */
  exports.prototype.ProductId = undefined;

  /**
   * Menu item option set name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\"with ketchup\") or modifier (\"large\").
   * @member {Boolean} IsMasterOptionSet
   */
  exports.prototype.IsMasterOptionSet = undefined;

  /**
   * Display order. Displayed in ascending order.
   * @member {Number} DisplayOrder
   */
  exports.prototype.DisplayOrder = undefined;

  /**
   * Minimum items must be selected
   * @member {Number} MinSelectCount
   */
  exports.prototype.MinSelectCount = undefined;

  /**
   * Maximum number of items can be selected
   * @member {Number} MaxSelectCount
   */
  exports.prototype.MaxSelectCount = undefined;

  /**
   * Small | Medium | Large  Affects the layout of the menu.
   * @member {module:model/MenuItemOptionSet.CellLayoutTypeEnum} CellLayoutType
   */
  exports.prototype.CellLayoutType = undefined;



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
