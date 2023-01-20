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
    define(['ApiClient', 'model/StoreFeeConfig', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreFeeConfig'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.StoreFeeConfigUpdatedEvent = factory(root.Flipdish.ApiClient, root.Flipdish.StoreFeeConfig, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, StoreFeeConfig, UserEventInfo) {
  'use strict';

  /**
   * The StoreFeeConfigUpdatedEvent model module.
   * @module model/StoreFeeConfigUpdatedEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StoreFeeConfigUpdatedEvent</code>.
   * Fee Config Updated Event
   * @alias module:model/StoreFeeConfigUpdatedEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreFeeConfigUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreFeeConfigUpdatedEvent} obj Optional instance to populate.
   * @return {module:model/StoreFeeConfigUpdatedEvent} The populated <code>StoreFeeConfigUpdatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EventName'))
        obj.EventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StoreGroupId'))
        obj.StoreGroupId = ApiClient.convertToType(data['StoreGroupId'], 'Number');
      if (data.hasOwnProperty('User'))
        obj.User = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('Changes'))
        obj.Changes = ApiClient.convertToType(data['Changes'], 'String');
      if (data.hasOwnProperty('StoreFeeConfig'))
        obj.StoreFeeConfig = StoreFeeConfig.constructFromObject(data['StoreFeeConfig']);
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
   * Store Id
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Store group Id
   * @member {Number} StoreGroupId
   */
  exports.prototype.StoreGroupId = undefined;

  /**
   * User which updated this store address
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype.User = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Diff between before and after
   * @member {String} Changes
   */
  exports.prototype.Changes = undefined;

  /**
   * Store fee config
   * @member {module:model/StoreFeeConfig} StoreFeeConfig
   */
  exports.prototype.StoreFeeConfig = undefined;

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
