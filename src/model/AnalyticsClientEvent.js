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
    root.Flipdish.AnalyticsClientEvent = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnalyticsClientEvent model module.
   * @module model/AnalyticsClientEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AnalyticsClientEvent</code>.
   * Client Analytics event
   * @alias module:model/AnalyticsClientEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AnalyticsClientEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsClientEvent} obj Optional instance to populate.
   * @return {module:model/AnalyticsClientEvent} The populated <code>AnalyticsClientEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EventName'))
        obj.EventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('EventType'))
        obj.EventType = ApiClient.convertToType(data['EventType'], 'String');
      if (data.hasOwnProperty('AppType'))
        obj.AppType = ApiClient.convertToType(data['AppType'], 'String');
      if (data.hasOwnProperty('Metadata'))
        obj.Metadata = ApiClient.convertToType(data['Metadata'], 'String');
      if (data.hasOwnProperty('UserId'))
        obj.UserId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('Latitude'))
        obj.Latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.Longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('FlipdishEventId'))
        obj.FlipdishEventId = ApiClient.convertToType(data['FlipdishEventId'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.CreateTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('Position'))
        obj.Position = ApiClient.convertToType(data['Position'], 'Number');
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('IpAddress'))
        obj.IpAddress = ApiClient.convertToType(data['IpAddress'], 'String');
    }
    return obj;
  }

  /**
   * The event name
   * @member {String} EventName
   */
  exports.prototype.EventName = undefined;

  /**
   * Type of the event
   * @member {String} EventType
   */
  exports.prototype.EventType = undefined;

  /**
   * Type of the app the event is coming from
   * @member {String} AppType
   */
  exports.prototype.AppType = undefined;

  /**
   * JSON Metadata
   * @member {String} Metadata
   */
  exports.prototype.Metadata = undefined;

  /**
   * User Id
   * @member {Number} UserId
   */
  exports.prototype.UserId = undefined;

  /**
   * Latitude of the event
   * @member {Number} Latitude
   */
  exports.prototype.Latitude = undefined;

  /**
   * Longitude of the event
   * @member {Number} Longitude
   */
  exports.prototype.Longitude = undefined;

  /**
   * The identitfier of the event
   * @member {String} FlipdishEventId
   */
  exports.prototype.FlipdishEventId = undefined;

  /**
   * The time of creation of the event
   * @member {Date} CreateTime
   */
  exports.prototype.CreateTime = undefined;

  /**
   * Position
   * @member {Number} Position
   */
  exports.prototype.Position = undefined;

  /**
   * App id
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * Ip Address
   * @member {String} IpAddress
   */
  exports.prototype.IpAddress = undefined;


  return exports;

}));
