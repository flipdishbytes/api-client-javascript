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
    define(['ApiClient', 'model/MenuSectionItem', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuSectionItem'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.MenuSectionItemUpdatedEvent = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.MenuSectionItem, root.FlipdishOpenApiV10.UserEventInfo);
  }
}(this, function(ApiClient, MenuSectionItem, UserEventInfo) {
  'use strict';

  /**
   * The MenuSectionItemUpdatedEvent model module.
   * @module model/MenuSectionItemUpdatedEvent
   * @version v1.0
   */

  /**
   * Constructs a new <code>MenuSectionItemUpdatedEvent</code>.
   * 
   * @alias module:model/MenuSectionItemUpdatedEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuSectionItemUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuSectionItemUpdatedEvent} obj Optional instance to populate.
   * @return {module:model/MenuSectionItemUpdatedEvent} The populated <code>MenuSectionItemUpdatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuId'))
        obj.menuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('User'))
        obj.user = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('MenuSectionItem'))
        obj.menuSectionItem = MenuSectionItem.constructFromObject(data['MenuSectionItem']);
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
   * Menu identifier
   * @member {Number} menuId
   */
  exports.prototype.menuId = undefined;

  /**
   * Event description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Updated by user
   * @member {module:model/UserEventInfo} user
   */
  exports.prototype.user = undefined;

  /**
   * Updated menu section item
   * @member {module:model/MenuSectionItem} menuSectionItem
   */
  exports.prototype.menuSectionItem = undefined;

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
