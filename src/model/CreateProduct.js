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
    define(['ApiClient', 'model/CreateGroupReference', 'model/Metafield'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateGroupReference'), require('./Metafield'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateProduct = factory(root.Flipdish.ApiClient, root.Flipdish.CreateGroupReference, root.Flipdish.Metafield);
  }
}(this, function(ApiClient, CreateGroupReference, Metafield) {
  'use strict';

  /**
   * The CreateProduct model module.
   * @module model/CreateProduct
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateProduct</code>.
   * Create a Catalog Item
   * @alias module:model/CreateProduct
   * @class
   * @param ProductType {module:model/CreateProduct.ProductTypeEnum} Type of item (Product, Modifier, etc)
   * @param Sku {String} Stock Keeping Unit (SKU)
   * @param Name {String} Product name
   * @param Price {Number} Product price
   */
  var exports = function(ProductType, Sku, Name, Price) {
    this.ProductType = ProductType;
    this.Sku = Sku;
    this.Name = Name;
    this.Price = Price;
  };

  /**
   * Constructs a <code>CreateProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateProduct} obj Optional instance to populate.
   * @return {module:model/CreateProduct} The populated <code>CreateProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Groups'))
        obj.Groups = ApiClient.convertToType(data['Groups'], [CreateGroupReference]);
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
   * Collection of groups associated with this item
   * @member {Array.<module:model/CreateGroupReference>} Groups
   */
  exports.prototype.Groups = undefined;

  /**
   * Collection of metafields
   * @member {Array.<module:model/Metafield>} Metafields
   */
  exports.prototype.Metafields = undefined;

  /**
   * Type of item (Product, Modifier, etc)
   * @member {module:model/CreateProduct.ProductTypeEnum} ProductType
   */
  exports.prototype.ProductType = undefined;

  /**
   * Stock Keeping Unit (SKU)
   * @member {String} Sku
   */
  exports.prototype.Sku = undefined;

  /**
   * Product name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Product description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Product price
   * @member {Number} Price
   */
  exports.prototype.Price = undefined;

  /**
   * Image File Name
   * @member {String} ImageFileName
   */
  exports.prototype.ImageFileName = undefined;

  /**
   * Product contains alcohol
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
