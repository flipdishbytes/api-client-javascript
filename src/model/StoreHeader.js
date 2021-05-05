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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.StoreHeader = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StoreHeader model module.
   * @module model/StoreHeader
   * @version v1.0
   */

  /**
   * Constructs a new <code>StoreHeader</code>.
   * Represents the most basic store information, used mostly for searches
   * @alias module:model/StoreHeader
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreHeader} obj Optional instance to populate.
   * @return {module:model/StoreHeader} The populated <code>StoreHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.storeId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
    }
    return obj;
  }

  /**
   * Store identifier
   * @member {Number} storeId
   */
  exports.prototype.storeId = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
