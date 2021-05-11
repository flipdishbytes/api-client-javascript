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
    root.Flipdish.GroupedCoordinates = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupedCoordinates model module.
   * @module model/GroupedCoordinates
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GroupedCoordinates</code>.
   * Describes coordinates that have a group
   * @alias module:model/GroupedCoordinates
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GroupedCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupedCoordinates} obj Optional instance to populate.
   * @return {module:model/GroupedCoordinates} The populated <code>GroupedCoordinates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Latitude'))
        obj.Latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.Longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('Count'))
        obj.Count = ApiClient.convertToType(data['Count'], 'Number');
    }
    return obj;
  }

  /**
   * Latitude of this coordinate
   * @member {Number} Latitude
   */
  exports.prototype.Latitude = undefined;

  /**
   * Longitude of this coordinate
   * @member {Number} Longitude
   */
  exports.prototype.Longitude = undefined;

  /**
   * Count of members in the group
   * @member {Number} Count
   */
  exports.prototype.Count = undefined;


  return exports;

}));