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
    define(['ApiClient', 'model/LocationAreaLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocationAreaLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.LocationAreaWithLocations = factory(root.Flipdish.ApiClient, root.Flipdish.LocationAreaLocation);
  }
}(this, function(ApiClient, LocationAreaLocation) {
  'use strict';

  /**
   * The LocationAreaWithLocations model module.
   * @module model/LocationAreaWithLocations
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LocationAreaWithLocations</code>.
   * Represents a LocationArea and its Location list
   * @alias module:model/LocationAreaWithLocations
   * @class
   * @param LocationAreaId {Number} Id of the LocationArea
   * @param StoreId {Number} Id of the Store that this LocationArea belongs to
   * @param LocationAreaName {String} Descriptive LocationArea name
   */
  var exports = function(LocationAreaId, StoreId, LocationAreaName) {
    this.LocationAreaId = LocationAreaId;
    this.StoreId = StoreId;
    this.LocationAreaName = LocationAreaName;
  };

  /**
   * Constructs a <code>LocationAreaWithLocations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationAreaWithLocations} obj Optional instance to populate.
   * @return {module:model/LocationAreaWithLocations} The populated <code>LocationAreaWithLocations</code> instance.
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
      if (data.hasOwnProperty('Locations'))
        obj.Locations = ApiClient.convertToType(data['Locations'], [LocationAreaLocation]);
      if (data.hasOwnProperty('IsDeleted'))
        obj.IsDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
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

  /**
   * List of Locations that belongs to this Location Area
   * @member {Array.<module:model/LocationAreaLocation>} Locations
   */
  exports.prototype.Locations = undefined;

  /**
   * Returns if the LocationArea is deleted or not
   * @member {Boolean} IsDeleted
   */
  exports.prototype.IsDeleted = undefined;


  return exports;

}));
