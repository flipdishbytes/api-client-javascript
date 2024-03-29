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
    define(['ApiClient', 'model/Metafield', 'model/ProductReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Metafield'), require('./ProductReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Group = factory(root.Flipdish.ApiClient, root.Flipdish.Metafield, root.Flipdish.ProductReference);
  }
}(this, function(ApiClient, Metafield, ProductReference) {
  'use strict';

  /**
   * The Group model module.
   * @module model/Group
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Group</code>.
   * CatalogGroup
   * @alias module:model/Group
   * @class
   * @param GroupType {module:model/Group.GroupTypeEnum} Type of group (ModifierGroup, etc)
   * @param Sku {String} Stock Keeping Unit (SKU)
   * @param Name {String} Group name
   */
  var exports = function(GroupType, Sku, Name) {
    this.GroupType = GroupType;
    this.Sku = Sku;
    this.Name = Name;
  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogGroupId'))
        obj.CatalogGroupId = ApiClient.convertToType(data['CatalogGroupId'], 'String');
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('IsArchived'))
        obj.IsArchived = ApiClient.convertToType(data['IsArchived'], 'Boolean');
      if (data.hasOwnProperty('MinSelectCount'))
        obj.MinSelectCount = ApiClient.convertToType(data['MinSelectCount'], 'Number');
      if (data.hasOwnProperty('MaxSelectCount'))
        obj.MaxSelectCount = ApiClient.convertToType(data['MaxSelectCount'], 'Number');
      if (data.hasOwnProperty('Products'))
        obj.Products = ApiClient.convertToType(data['Products'], [ProductReference]);
      if (data.hasOwnProperty('Metafields'))
        obj.Metafields = ApiClient.convertToType(data['Metafields'], [Metafield]);
      if (data.hasOwnProperty('GroupType'))
        obj.GroupType = ApiClient.convertToType(data['GroupType'], 'String');
      if (data.hasOwnProperty('Sku'))
        obj.Sku = ApiClient.convertToType(data['Sku'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('AutogenerateDisplayText'))
        obj.AutogenerateDisplayText = ApiClient.convertToType(data['AutogenerateDisplayText'], 'Boolean');
      if (data.hasOwnProperty('ImageFileName'))
        obj.ImageFileName = ApiClient.convertToType(data['ImageFileName'], 'String');
    }
    return obj;
  }

  /**
   * Unique catalog group id
   * @member {String} CatalogGroupId
   */
  exports.prototype.CatalogGroupId = undefined;

  /**
   * Unique catalog item id
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Returns true if the group is archived
   * @member {Boolean} IsArchived
   */
  exports.prototype.IsArchived = undefined;

  /**
   * Minimum number of items that the user has to select
   * @member {Number} MinSelectCount
   */
  exports.prototype.MinSelectCount = undefined;

  /**
   * Maximum number of items that the user has to select
   * @member {Number} MaxSelectCount
   */
  exports.prototype.MaxSelectCount = undefined;

  /**
   * Collection of items associated with this product
   * @member {Array.<module:model/ProductReference>} Products
   */
  exports.prototype.Products = undefined;

  /**
   * Collection of metafields
   * @member {Array.<module:model/Metafield>} Metafields
   */
  exports.prototype.Metafields = undefined;

  /**
   * Type of group (ModifierGroup, etc)
   * @member {module:model/Group.GroupTypeEnum} GroupType
   */
  exports.prototype.GroupType = undefined;

  /**
   * Stock Keeping Unit (SKU)
   * @member {String} Sku
   */
  exports.prototype.Sku = undefined;

  /**
   * Group name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Autogenerate display text in ordering applications
   * @member {Boolean} AutogenerateDisplayText
   */
  exports.prototype.AutogenerateDisplayText = undefined;

  /**
   * Image File Name
   * @member {String} ImageFileName
   */
  exports.prototype.ImageFileName = undefined;



  /**
   * Allowed values for the <code>GroupType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GroupTypeEnum = {
    /**
     * value: "ModifierGroup"
     * @const
     */
    ModifierGroup: "ModifierGroup"
  };

  return exports;

}));
