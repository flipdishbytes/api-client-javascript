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
    root.Flipdish.UpdateGroupReference = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateGroupReference model module.
   * @module model/UpdateGroupReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateGroupReference</code>.
   * Data to update a {Flipdish.Menus.PublicModels.V1.Catalog.Products.GroupReference}
   * @alias module:model/UpdateGroupReference
   * @class
   * @param CatalogItemId {String} Identifier of the ProductId to use as SubProduct
   * @param GroupType {module:model/UpdateGroupReference.GroupTypeEnum} Type of the SupProduct
   */
  var exports = function(CatalogItemId, GroupType) {
    this.CatalogItemId = CatalogItemId;
    this.GroupType = GroupType;
  };

  /**
   * Constructs a <code>UpdateGroupReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateGroupReference} obj Optional instance to populate.
   * @return {module:model/UpdateGroupReference} The populated <code>UpdateGroupReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('GroupType'))
        obj.GroupType = ApiClient.convertToType(data['GroupType'], 'String');
    }
    return obj;
  }

  /**
   * Identifier of the ProductId to use as SubProduct
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Type of the SupProduct
   * @member {module:model/UpdateGroupReference.GroupTypeEnum} GroupType
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
