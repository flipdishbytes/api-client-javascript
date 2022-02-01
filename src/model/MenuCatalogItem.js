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
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MenuCatalogItem = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuCatalogItem model module.
   * @module model/MenuCatalogItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuCatalogItem</code>.
   * Information to add a CatalogItem to a Menu
   * @alias module:model/MenuCatalogItem
   * @class
   * @param CatalogItemId {String} Product Id to the product to add as Menu Item
   */
  var exports = function(CatalogItemId) {
    this.CatalogItemId = CatalogItemId;
  };

  /**
   * Constructs a <code>MenuCatalogItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuCatalogItem} obj Optional instance to populate.
   * @return {module:model/MenuCatalogItem} The populated <code>MenuCatalogItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('CellLayoutType'))
        obj.CellLayoutType = ApiClient.convertToType(data['CellLayoutType'], 'String');
    }
    return obj;
  }

  /**
   * Product Id to the product to add as Menu Item
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Small | Medium | Large | HiddenImage  Affects the layout of the menu.
   * @member {module:model/MenuCatalogItem.CellLayoutTypeEnum} CellLayoutType
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