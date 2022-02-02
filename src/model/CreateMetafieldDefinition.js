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
    root.Flipdish.CreateMetafieldDefinition = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateMetafieldDefinition model module.
   * @module model/CreateMetafieldDefinition
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateMetafieldDefinition</code>.
   * Information to create a {Flipdish.PublicModels.V1.Metafields.MetafieldDefinition}
   * @alias module:model/CreateMetafieldDefinition
   * @class
   * @param Key {String} Key of the metafield.  Allowed characters: lowercase letters, numbers, hyphen, underscore and dot
   * @param Name {String} Field Name
   */
  var exports = function(Key, Name) {
    this.Key = Key;
    this.Name = Name;
  };

  /**
   * Constructs a <code>CreateMetafieldDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMetafieldDefinition} obj Optional instance to populate.
   * @return {module:model/CreateMetafieldDefinition} The populated <code>CreateMetafieldDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OwnerEntity'))
        obj.OwnerEntity = ApiClient.convertToType(data['OwnerEntity'], 'String');
      if (data.hasOwnProperty('Key'))
        obj.Key = ApiClient.convertToType(data['Key'], 'String');
      if (data.hasOwnProperty('IsReadOnly'))
        obj.IsReadOnly = ApiClient.convertToType(data['IsReadOnly'], 'Boolean');
      if (data.hasOwnProperty('ValueType'))
        obj.ValueType = ApiClient.convertToType(data['ValueType'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Behaviors'))
        obj.Behaviors = ApiClient.convertToType(data['Behaviors'], ['String']);
    }
    return obj;
  }

  /**
   * The Metafield will extend the specified {Flipdish.PublicModels.V1.Metafields.MetafieldDefinition.OwnerEntity}
   * @member {module:model/CreateMetafieldDefinition.OwnerEntityEnum} OwnerEntity
   */
  exports.prototype.OwnerEntity = undefined;

  /**
   * Key of the metafield.  Allowed characters: lowercase letters, numbers, hyphen, underscore and dot
   * @member {String} Key
   */
  exports.prototype.Key = undefined;

  /**
   * Indicates if a definition can be edited or not
   * @member {Boolean} IsReadOnly
   */
  exports.prototype.IsReadOnly = undefined;

  /**
   * The excepted type for the Value field
   * @member {module:model/CreateMetafieldDefinition.ValueTypeEnum} ValueType
   */
  exports.prototype.ValueType = undefined;

  /**
   * Field Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Field Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Enable Metafield Behaviors
   * @member {Array.<module:model/CreateMetafieldDefinition.BehaviorsEnum>} Behaviors
   */
  exports.prototype.Behaviors = undefined;



  /**
   * Allowed values for the <code>OwnerEntity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OwnerEntityEnum = {
    /**
     * value: "CatalogItem"
     * @const
     */
    CatalogItem: "CatalogItem",

    /**
     * value: "CatalogGroup"
     * @const
     */
    CatalogGroup: "CatalogGroup",

    /**
     * value: "Menu"
     * @const
     */
    Menu: "Menu"
  };


  /**
   * Allowed values for the <code>ValueType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValueTypeEnum = {
    /**
     * value: "Json"
     * @const
     */
    Json: "Json",

    /**
     * value: "SingleLineString"
     * @const
     */
    SingleLineString: "SingleLineString",

    /**
     * value: "MultiLineString"
     * @const
     */
    MultiLineString: "MultiLineString"
  };


  /**
   * Allowed values for the <code>Behaviors</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BehaviorsEnum = {
    /**
     * value: "SendToOrder"
     * @const
     */
    SendToOrder: "SendToOrder",

    /**
     * value: "SendToMenu"
     * @const
     */
    SendToMenu: "SendToMenu"
  };

  return exports;

}));
