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
    root.Flipdish.CreateProductReference = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateProductReference model module.
   * @module model/CreateProductReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateProductReference</code>.
   * Information to create a reference to a {Flipdish.Menus.PublicModels.V1.Catalog.Product}
   * @alias module:model/CreateProductReference
   * @class
   * @param CatalogItemId {String} Identifier of the CatalogItemId to use as SubProduct
   * @param ProductType {module:model/CreateProductReference.ProductTypeEnum} Type of the SupProduct
   */
  var exports = function(CatalogItemId, ProductType) {
    this.CatalogItemId = CatalogItemId;
    this.ProductType = ProductType;
  };

  /**
   * Constructs a <code>CreateProductReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateProductReference} obj Optional instance to populate.
   * @return {module:model/CreateProductReference} The populated <code>CreateProductReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('ProductType'))
        obj.ProductType = ApiClient.convertToType(data['ProductType'], 'String');
      if (data.hasOwnProperty('PreselectedQuantity'))
        obj.PreselectedQuantity = ApiClient.convertToType(data['PreselectedQuantity'], 'Number');
    }
    return obj;
  }

  /**
   * Identifier of the CatalogItemId to use as SubProduct
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Type of the SupProduct
   * @member {module:model/CreateProductReference.ProductTypeEnum} ProductType
   */
  exports.prototype.ProductType = undefined;

  /**
   * Quantity of the modifier that will be set when the parent product is placed in the basket
   * @member {Number} PreselectedQuantity
   */
  exports.prototype.PreselectedQuantity = undefined;



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
