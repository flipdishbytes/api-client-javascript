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
    root.Flipdish.LocationArea = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LocationArea model module.
   * @module model/LocationArea
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LocationArea</code>.
   * Represents a LocationArea
   * @alias module:model/LocationArea
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LocationArea</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationArea} obj Optional instance to populate.
   * @return {module:model/LocationArea} The populated <code>LocationArea</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('LocationAreaId'))
        obj.LocationAreaId = ApiClient.convertToType(data['LocationAreaId'], 'Number');
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('LocationAreaName'))
        obj.LocationAreaName = ApiClient.convertToType(data['LocationAreaName'], 'String');
    }
    return obj;
  }

  /**
   * Id of the LocationArea
   * @member {Number} LocationAreaId
   */
  exports.prototype.LocationAreaId = undefined;

  /**
   * Id of the Store that this LocationArea belongs to
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Descriptive LocationArea name
   * @member {String} LocationAreaName
   */
  exports.prototype.LocationAreaName = undefined;


  return exports;

}));
