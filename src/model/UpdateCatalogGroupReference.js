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
    root.Flipdish.UpdateCatalogGroupReference = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateCatalogGroupReference model module.
   * @module model/UpdateCatalogGroupReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateCatalogGroupReference</code>.
   * Data to update a {Flipdish.Menus.PublicModels.V1.Catalog.Items.CatalogGroupReference}
   * @alias module:model/UpdateCatalogGroupReference
   * @class
   * @param CatalogGroupId {String} Identifier of the ProductId to use as SubProduct
   * @param GroupType {module:model/UpdateCatalogGroupReference.GroupTypeEnum} Type of the SupProduct
   */
  var exports = function(CatalogGroupId, GroupType) {
    this.CatalogGroupId = CatalogGroupId;
    this.GroupType = GroupType;
  };

  /**
   * Constructs a <code>UpdateCatalogGroupReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCatalogGroupReference} obj Optional instance to populate.
   * @return {module:model/UpdateCatalogGroupReference} The populated <code>UpdateCatalogGroupReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogGroupId'))
        obj.CatalogGroupId = ApiClient.convertToType(data['CatalogGroupId'], 'String');
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('GroupType'))
        obj.GroupType = ApiClient.convertToType(data['GroupType'], 'String');
    }
    return obj;
  }

  /**
   * Identifier of the ProductId to use as SubProduct
   * @member {String} CatalogGroupId
   */
  exports.prototype.CatalogGroupId = undefined;

  /**
   * Identifier of the ProductId to use as SubProduct
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Type of the SupProduct
   * @member {module:model/UpdateCatalogGroupReference.GroupTypeEnum} GroupType
   */
  exports.prototype.GroupType = undefined;



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
