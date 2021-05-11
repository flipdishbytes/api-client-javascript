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
    define(['ApiClient', 'model/MenuItemOptionSetItem', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuItemOptionSetItem'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MenuItemOptionSetItemCreatedEvent = factory(root.Flipdish.ApiClient, root.Flipdish.MenuItemOptionSetItem, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, MenuItemOptionSetItem, UserEventInfo) {
  'use strict';

  /**
   * The MenuItemOptionSetItemCreatedEvent model module.
   * @module model/MenuItemOptionSetItemCreatedEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuItemOptionSetItemCreatedEvent</code>.
   * 
   * @alias module:model/MenuItemOptionSetItemCreatedEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuItemOptionSetItemCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuItemOptionSetItemCreatedEvent} obj Optional instance to populate.
   * @return {module:model/MenuItemOptionSetItemCreatedEvent} The populated <code>MenuItemOptionSetItemCreatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuId'))
        obj.MenuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('User'))
        obj.User = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('MenuItemOptionSetItem'))
        obj.MenuItemOptionSetItem = MenuItemOptionSetItem.constructFromObject(data['MenuItemOptionSetItem']);
      if (data.hasOwnProperty('EventName'))
        obj.EventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('FlipdishEventId'))
        obj.FlipdishEventId = ApiClient.convertToType(data['FlipdishEventId'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.CreateTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('Position'))
        obj.Position = ApiClient.convertToType(data['Position'], 'Number');
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
    }
    return obj;
  }

  /**
   * Menu identifier
   * @member {Number} MenuId
   */
  exports.prototype.MenuId = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * User who has created the menu
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype.User = undefined;

  /**
   * Created menu item optionset item
   * @member {module:model/MenuItemOptionSetItem} MenuItemOptionSetItem
   */
  exports.prototype.MenuItemOptionSetItem = undefined;

  /**
   * The event name
   * @member {String} EventName
   */
  exports.prototype.EventName = undefined;

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


  return exports;

}));