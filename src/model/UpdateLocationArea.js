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
    root.Flipdish.UpdateLocationArea = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateLocationArea model module.
   * @module model/UpdateLocationArea
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateLocationArea</code>.
   * Input model for updating a LocationArea
   * @alias module:model/UpdateLocationArea
   * @class
   * @param LocationAreaId {Number} Location Area Id
   * @param LocationAreaName {String} Descriptive LocationArea name
   */
  var exports = function(LocationAreaId, LocationAreaName) {
    this.LocationAreaId = LocationAreaId;
    this.LocationAreaName = LocationAreaName;
  };

  /**
   * Constructs a <code>UpdateLocationArea</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateLocationArea} obj Optional instance to populate.
   * @return {module:model/UpdateLocationArea} The populated <code>UpdateLocationArea</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('LocationAreaId'))
        obj.LocationAreaId = ApiClient.convertToType(data['LocationAreaId'], 'Number');
      if (data.hasOwnProperty('LocationAreaName'))
        obj.LocationAreaName = ApiClient.convertToType(data['LocationAreaName'], 'String');
      if (data.hasOwnProperty('IsDeleted'))
        obj.IsDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * Location Area Id
   * @member {Number} LocationAreaId
   */
  exports.prototype.LocationAreaId = undefined;

  /**
   * Descriptive LocationArea name
   * @member {String} LocationAreaName
   */
  exports.prototype.LocationAreaName = undefined;

  /**
   * Sets if the Location Area should be soft deleted or not
   * @member {Boolean} IsDeleted
   */
  exports.prototype.IsDeleted = undefined;


  return exports;

}));
