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
    define(['ApiClient', 'model/CreateProductReference', 'model/Metafield'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateProductReference'), require('./Metafield'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateGroup = factory(root.Flipdish.ApiClient, root.Flipdish.CreateProductReference, root.Flipdish.Metafield);
  }
}(this, function(ApiClient, CreateProductReference, Metafield) {
  'use strict';

  /**
   * The CreateGroup model module.
   * @module model/CreateGroup
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateGroup</code>.
   * Create a Catalog Group
   * @alias module:model/CreateGroup
   * @class
   * @param GroupType {module:model/CreateGroup.GroupTypeEnum} Type of group (ModifierGroup, etc)
   * @param Sku {String} Stock Keeping Unit (SKU)
   * @param Name {String} Group name
   */
  var exports = function(GroupType, Sku, Name) {
    this.GroupType = GroupType;
    this.Sku = Sku;
    this.Name = Name;
  };

  /**
   * Constructs a <code>CreateGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateGroup} obj Optional instance to populate.
   * @return {module:model/CreateGroup} The populated <code>CreateGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MinSelectCount'))
        obj.MinSelectCount = ApiClient.convertToType(data['MinSelectCount'], 'Number');
      if (data.hasOwnProperty('MaxSelectCount'))
        obj.MaxSelectCount = ApiClient.convertToType(data['MaxSelectCount'], 'Number');
      if (data.hasOwnProperty('Products'))
        obj.Products = ApiClient.convertToType(data['Products'], [CreateProductReference]);
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
   * Collection of items associated with this group
   * @member {Array.<module:model/CreateProductReference>} Products
   */
  exports.prototype.Products = undefined;

  /**
   * Collection of metafields
   * @member {Array.<module:model/Metafield>} Metafields
   */
  exports.prototype.Metafields = undefined;

  /**
   * Type of group (ModifierGroup, etc)
   * @member {module:model/CreateGroup.GroupTypeEnum} GroupType
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