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
    root.Flipdish.UpdateMetafieldDefinition = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateMetafieldDefinition model module.
   * @module model/UpdateMetafieldDefinition
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateMetafieldDefinition</code>.
   * Information to update a {Flipdish.PublicModels.V1.Metafields.MetafieldDefinition}
   * @alias module:model/UpdateMetafieldDefinition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateMetafieldDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMetafieldDefinition} obj Optional instance to populate.
   * @return {module:model/UpdateMetafieldDefinition} The populated <code>UpdateMetafieldDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
   * @member {Array.<module:model/UpdateMetafieldDefinition.BehaviorsEnum>} Behaviors
   */
  exports.prototype.Behaviors = undefined;



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
