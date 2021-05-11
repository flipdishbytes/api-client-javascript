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
    define(['ApiClient', 'model/Metadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Metadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.AllMetadataResult = factory(root.Flipdish.ApiClient, root.Flipdish.Metadata);
  }
}(this, function(ApiClient, Metadata) {
  'use strict';

  /**
   * The AllMetadataResult model module.
   * @module model/AllMetadataResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllMetadataResult</code>.
   * 
   * @alias module:model/AllMetadataResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AllMetadataResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllMetadataResult} obj Optional instance to populate.
   * @return {module:model/AllMetadataResult} The populated <code>AllMetadataResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuItemMetadata'))
        obj.MenuItemMetadata = ApiClient.convertToType(data['MenuItemMetadata'], [Metadata]);
      if (data.hasOwnProperty('MenuItemOptionSetItemMetadata'))
        obj.MenuItemOptionSetItemMetadata = ApiClient.convertToType(data['MenuItemOptionSetItemMetadata'], [Metadata]);
    }
    return obj;
  }

  /**
   * Menu item metadata
   * @member {Array.<module:model/Metadata>} MenuItemMetadata
   */
  exports.prototype.MenuItemMetadata = undefined;

  /**
   * Menu item optionset item metadata
   * @member {Array.<module:model/Metadata>} MenuItemOptionSetItemMetadata
   */
  exports.prototype.MenuItemOptionSetItemMetadata = undefined;


  return exports;

}));