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
    root.Flipdish.Metadata = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Metadata model module.
   * @module model/Metadata
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Metadata</code>.
   * Metadata
   * @alias module:model/Metadata
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Metadata} obj Optional instance to populate.
   * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuEntityId'))
        obj.MenuEntityId = ApiClient.convertToType(data['MenuEntityId'], 'Number');
      if (data.hasOwnProperty('Key'))
        obj.Key = ApiClient.convertToType(data['Key'], 'String');
      if (data.hasOwnProperty('Value'))
        obj.Value = ApiClient.convertToType(data['Value'], 'String');
    }
    return obj;
  }

  /**
   * Menu entity identifier (eg: MenuItemId, MenuItemOptionSetItemId)
   * @member {Number} MenuEntityId
   */
  exports.prototype.MenuEntityId = undefined;

  /**
   * Metadata key (Unique identifier)
   * @member {String} Key
   */
  exports.prototype.Key = undefined;

  /**
   * Metadata value
   * @member {String} Value
   */
  exports.prototype.Value = undefined;


  return exports;

}));
