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
    define(['ApiClient', 'model/Menu', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Menu'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.MenuCheckpointCreatedEvent = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.Menu, root.FlipdishOpenApiV10.UserEventInfo);
  }
}(this, function(ApiClient, Menu, UserEventInfo) {
  'use strict';

  /**
   * The MenuCheckpointCreatedEvent model module.
   * @module model/MenuCheckpointCreatedEvent
   * @version v1.0
   */

  /**
   * Constructs a new <code>MenuCheckpointCreatedEvent</code>.
   * 
   * @alias module:model/MenuCheckpointCreatedEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuCheckpointCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuCheckpointCreatedEvent} obj Optional instance to populate.
   * @return {module:model/MenuCheckpointCreatedEvent} The populated <code>MenuCheckpointCreatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('User'))
        obj.user = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('Menu'))
        obj.menu = Menu.constructFromObject(data['Menu']);
      if (data.hasOwnProperty('EventName'))
        obj.eventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('FlipdishEventId'))
        obj.flipdishEventId = ApiClient.convertToType(data['FlipdishEventId'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.createTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('Position'))
        obj.position = ApiClient.convertToType(data['Position'], 'Number');
      if (data.hasOwnProperty('AppId'))
        obj.appId = ApiClient.convertToType(data['AppId'], 'String');
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * User who has created the menu
   * @member {module:model/UserEventInfo} user
   */
  exports.prototype.user = undefined;

  /**
   * Menu identifier
   * @member {module:model/Menu} menu
   */
  exports.prototype.menu = undefined;

  /**
   * The event name
   * @member {String} eventName
   */
  exports.prototype.eventName = undefined;

  /**
   * The identitfier of the event
   * @member {String} flipdishEventId
   */
  exports.prototype.flipdishEventId = undefined;

  /**
   * The time of creation of the event
   * @member {Date} createTime
   */
  exports.prototype.createTime = undefined;

  /**
   * Position
   * @member {Number} position
   */
  exports.prototype.position = undefined;

  /**
   * App id
   * @member {String} appId
   */
  exports.prototype.appId = undefined;


  return exports;

}));
