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
    root.Flipdish.LocationAreaLocation = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LocationAreaLocation model module.
   * @module model/LocationAreaLocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LocationAreaLocation</code>.
   * Representation of a Location i.e: (Table, Hotel Room, Car Park, etc )
   * @alias module:model/LocationAreaLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LocationAreaLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationAreaLocation} obj Optional instance to populate.
   * @return {module:model/LocationAreaLocation} The populated <code>LocationAreaLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('LocationId'))
        obj.LocationId = ApiClient.convertToType(data['LocationId'], 'Number');
      if (data.hasOwnProperty('LocationName'))
        obj.LocationName = ApiClient.convertToType(data['LocationName'], 'String');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.DisplayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
      if (data.hasOwnProperty('ExternalLocationId'))
        obj.ExternalLocationId = ApiClient.convertToType(data['ExternalLocationId'], 'String');
      if (data.hasOwnProperty('IsDeleted'))
        obj.IsDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * Id of the Location
   * @member {Number} LocationId
   */
  exports.prototype.LocationId = undefined;

  /**
   * Name of the Location
   * @member {String} LocationName
   */
  exports.prototype.LocationName = undefined;

  /**
   * The order that the Location should be displayed on the screen
   * @member {Number} DisplayOrder
   */
  exports.prototype.DisplayOrder = undefined;

  /**
   * Id of the Location on an external system
   * @member {String} ExternalLocationId
   */
  exports.prototype.ExternalLocationId = undefined;

  /**
   * Shows if the Location is deleted or not
   * @member {Boolean} IsDeleted
   */
  exports.prototype.IsDeleted = undefined;


  return exports;

}));
