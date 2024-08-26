/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Metafield', 'model/UpdateGroupReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Metafield'), require('./UpdateGroupReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.UpdateProduct = factory(root.Flipdish.ApiClient, root.Flipdish.Metafield, root.Flipdish.UpdateGroupReference);
  }
}(this, function(ApiClient, Metafield, UpdateGroupReference) {
  'use strict';

  /**
   * The UpdateProduct model module.
   * @module model/UpdateProduct
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateProduct</code>.
   * Update Product
   * @alias module:model/UpdateProduct
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateProduct} obj Optional instance to populate.
   * @return {module:model/UpdateProduct} The populated <code>UpdateProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
      if (data.hasOwnProperty('Groups'))
        obj.Groups = ApiClient.convertToType(data['Groups'], [UpdateGroupReference]);
      if (data.hasOwnProperty('Metafields'))
        obj.Metafields = ApiClient.convertToType(data['Metafields'], [Metafield]);
    }
    return obj;
  }

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
   * Collection of groups associated with this item
   * @member {Array.<module:model/UpdateGroupReference>} Groups
   */
  exports.prototype.Groups = undefined;

  /**
   * Collection of metafields
   * @member {Array.<module:model/Metafield>} Metafields
   */
  exports.prototype.Metafields = undefined;


  return exports;

}));
