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
    define(['ApiClient', 'model/CreateFullMenuItemOptionSetItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateFullMenuItemOptionSetItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateFullMenuItemOptionSet = factory(root.Flipdish.ApiClient, root.Flipdish.CreateFullMenuItemOptionSetItem);
  }
}(this, function(ApiClient, CreateFullMenuItemOptionSetItem) {
  'use strict';

  /**
   * The CreateFullMenuItemOptionSet model module.
   * @module model/CreateFullMenuItemOptionSet
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFullMenuItemOptionSet</code>.
   * Create menu item option set
   * @alias module:model/CreateFullMenuItemOptionSet
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFullMenuItemOptionSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFullMenuItemOptionSet} obj Optional instance to populate.
   * @return {module:model/CreateFullMenuItemOptionSet} The populated <code>CreateFullMenuItemOptionSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuItemOptionSetId'))
        obj.MenuItemOptionSetId = ApiClient.convertToType(data['MenuItemOptionSetId'], 'Number');
      if (data.hasOwnProperty('MenuItemOptionSetItems'))
        obj.MenuItemOptionSetItems = ApiClient.convertToType(data['MenuItemOptionSetItems'], [CreateFullMenuItemOptionSetItem]);
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
   * Option set items
   * @member {Array.<module:model/CreateFullMenuItemOptionSetItem>} MenuItemOptionSetItems
   */
  exports.prototype.MenuItemOptionSetItems = undefined;

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
   * @member {module:model/CreateFullMenuItemOptionSet.CellLayoutTypeEnum} CellLayoutType
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
