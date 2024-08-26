/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.CoordinatesDm = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CoordinatesDm model module.
   * @module model/CoordinatesDm
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CoordinatesDm</code>.
   * @alias module:model/CoordinatesDm
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CoordinatesDm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoordinatesDm} obj Optional instance to populate.
   * @return {module:model/CoordinatesDm} The populated <code>CoordinatesDm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Latitude'))
        obj.Latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.Longitude = ApiClient.convertToType(data['Longitude'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} Latitude
   */
  exports.prototype.Latitude = undefined;

  /**
   * @member {Number} Longitude
   */
  exports.prototype.Longitude = undefined;


  return exports;

}));
