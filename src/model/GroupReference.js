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
    define(['ApiClient', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.GroupReference = factory(root.Flipdish.ApiClient, root.Flipdish.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';

  /**
   * The GroupReference model module.
   * @module model/GroupReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GroupReference</code>.
   * Reference to an existing {Flipdish.PublicModels.V1.Catalog.Groups.Group}
   * @alias module:model/GroupReference
   * @class
   * @param CatalogItemId {String} Identifier of the ProductId to use as SubProduct
   * @param GroupType {module:model/GroupReference.GroupTypeEnum} Type of the SupProduct
   */
  var exports = function(CatalogItemId, GroupType) {
    this.CatalogItemId = CatalogItemId;
    this.GroupType = GroupType;
  };

  /**
   * Constructs a <code>GroupReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupReference} obj Optional instance to populate.
   * @return {module:model/GroupReference} The populated <code>GroupReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Group'))
        obj.Group = Group.constructFromObject(data['Group']);
      if (data.hasOwnProperty('CatalogItemId'))
        obj.CatalogItemId = ApiClient.convertToType(data['CatalogItemId'], 'String');
      if (data.hasOwnProperty('GroupType'))
        obj.GroupType = ApiClient.convertToType(data['GroupType'], 'String');
    }
    return obj;
  }

  /**
   * Details of the referenced {Flipdish.PublicModels.V1.Catalog.Products.GroupReference.Group}
   * @member {module:model/Group} Group
   */
  exports.prototype.Group = undefined;

  /**
   * Identifier of the ProductId to use as SubProduct
   * @member {String} CatalogItemId
   */
  exports.prototype.CatalogItemId = undefined;

  /**
   * Type of the SupProduct
   * @member {module:model/GroupReference.GroupTypeEnum} GroupType
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
