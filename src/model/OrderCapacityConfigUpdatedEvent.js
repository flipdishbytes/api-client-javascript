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
    define(['ApiClient', 'model/StoreOrderCapacityConfigEditModel', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreOrderCapacityConfigEditModel'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderCapacityConfigUpdatedEvent = factory(root.Flipdish.ApiClient, root.Flipdish.StoreOrderCapacityConfigEditModel, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, StoreOrderCapacityConfigEditModel, UserEventInfo) {
  'use strict';

  /**
   * The OrderCapacityConfigUpdatedEvent model module.
   * @module model/OrderCapacityConfigUpdatedEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderCapacityConfigUpdatedEvent</code>.
   * Store's Order Capacity Configuration Updated
   * @alias module:model/OrderCapacityConfigUpdatedEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderCapacityConfigUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderCapacityConfigUpdatedEvent} obj Optional instance to populate.
   * @return {module:model/OrderCapacityConfigUpdatedEvent} The populated <code>OrderCapacityConfigUpdatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EventName'))
        obj.EventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('User'))
        obj.User = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('OrderCapacityConfig'))
        obj.OrderCapacityConfig = StoreOrderCapacityConfigEditModel.constructFromObject(data['OrderCapacityConfig']);
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
   * Id of the store whose order capacity configuration has been updated
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * User which updated order capacity configuration for this store
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype.User = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Updated order capacity configuration
   * @member {module:model/StoreOrderCapacityConfigEditModel} OrderCapacityConfig
   */
  exports.prototype.OrderCapacityConfig = undefined;

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
