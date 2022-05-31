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
    define(['ApiClient', 'model/GroupReference', 'model/Metafield'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupReference'), require('./Metafield'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Product = factory(root.Flipdish.ApiClient, root.Flipdish.GroupReference, root.Flipdish.Metafield);
  }
}(this, function(ApiClient, GroupReference, Metafield) {
  'use strict';

  /**
   * The Product model module.
   * @module model/Product
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * Product
   * @alias module:model/Product
   * @class
   * @param ProductType {module:model/Product.ProductTypeEnum} Type of item (Product, Modifier, etc)
   * @param Sku {String} Stock Keeping Unit (SKU)
   * @param Name {String} Item name
   * @param Price {Number} Item price
   */
  var exports = function(ProductType, Sku, Name, Price) {
    this.ProductType = ProductType;
    this.Sku = Sku;
    this.Name = Name;
    this.Price = Price;
  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('IsArchived'))
        obj.IsArchived = ApiClient.convertToType(data['IsArchived'], 'Boolean');
      if (data.hasOwnProperty('Groups'))
        obj.Groups = ApiClient.convertToType(data['Groups'], [GroupReference]);
      if (data.hasOwnProperty('Metafields'))
        obj.Metafields = ApiClient.convertToType(data['Metafields'], [Metafield]);
      if (data.hasOwnProperty('ProductType'))
        obj.ProductType = ApiClient.convertToType(data['ProductType'], 'String');
      if (data.hasOwnProperty('Sku'))
        obj.Sku = ApiClient.convertToType(data['Sku'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.Price = ApiClient.convertToType(data['Price'], 'Number');
      if (data.hasOwnProperty('ImageFileName'))
        obj.ImageFileName = ApiClient.convertToType(data['ImageFileName'], 'String');
      if (data.hasOwnProperty('Alcohol'))
        obj.Alcohol = ApiClient.convertToType(data['Alcohol'], 'Boolean');
    }
    return obj;
  }

  /**
   * Unique catalog Item id
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Returns true if the item is archived
   * @member {Boolean} IsArchived
   */
  exports.prototype.IsArchived = undefined;

  /**
   * Collection of groups associated with this item
   * @member {Array.<module:model/GroupReference>} Groups
   */
  exports.prototype.Groups = undefined;

  /**
   * Collection of metafields
   * @member {Array.<module:model/Metafield>} Metafields
   */
  exports.prototype.Metafields = undefined;

  /**
   * Type of item (Product, Modifier, etc)
   * @member {module:model/Product.ProductTypeEnum} ProductType
   */
  exports.prototype.ProductType = undefined;

  /**
   * Stock Keeping Unit (SKU)
   * @member {String} Sku
   */
  exports.prototype.Sku = undefined;

  /**
   * Item name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Item description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Item price
   * @member {Number} Price
   */
  exports.prototype.Price = undefined;

  /**
   * Image File Name
   * @member {String} ImageFileName
   */
  exports.prototype.ImageFileName = undefined;

  /**
   * item contains alcohol
   * @member {Boolean} Alcohol
   */
  exports.prototype.Alcohol = undefined;



  /**
   * Allowed values for the <code>ProductType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProductTypeEnum = {
    /**
     * value: "Product"
     * @const
     */
    Product: "Product",

    /**
     * value: "Modifier"
     * @const
     */
    Modifier: "Modifier"
  };

  return exports;

}));
