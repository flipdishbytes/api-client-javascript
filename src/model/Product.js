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
    root.Flipdish.Product = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Product model module.
   * @module model/Product
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * Product Information
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
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
      if (data.hasOwnProperty('ProductId'))
        obj.ProductId = ApiClient.convertToType(data['ProductId'], 'String');
      if (data.hasOwnProperty('Sku'))
        obj.Sku = ApiClient.convertToType(data['Sku'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.Price = ApiClient.convertToType(data['Price'], 'Number');
      if (data.hasOwnProperty('ProductType'))
        obj.ProductType = ApiClient.convertToType(data['ProductType'], 'String');
      if (data.hasOwnProperty('ImageFileName'))
        obj.ImageFileName = ApiClient.convertToType(data['ImageFileName'], 'String');
      if (data.hasOwnProperty('IsArchived'))
        obj.IsArchived = ApiClient.convertToType(data['IsArchived'], 'Boolean');
      if (data.hasOwnProperty('Alcohol'))
        obj.Alcohol = ApiClient.convertToType(data['Alcohol'], 'Boolean');
    }
    return obj;
  }

  /**
   * Unique product id
   * @member {String} ProductId
   */
  exports.prototype.ProductId = undefined;

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
   * Product Type (SimpleProduct, Modifier, ModifierGroup, etc)
   * @member {module:model/Product.ProductTypeEnum} ProductType
   */
  exports.prototype.ProductType = undefined;

  /**
   * Image File Name
   * @member {String} ImageFileName
   */
  exports.prototype.ImageFileName = undefined;

  /**
   * Returns true if the product is archived
   * @member {Boolean} IsArchived
   */
  exports.prototype.IsArchived = undefined;

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
     * value: "SimpleProduct"
     * @const
     */
    SimpleProduct: "SimpleProduct",

    /**
     * value: "Modifier"
     * @const
     */
    Modifier: "Modifier",

    /**
     * value: "ModifierGroup"
     * @const
     */
    ModifierGroup: "ModifierGroup"
  };

  return exports;

}));