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
    define(['ApiClient', 'model/Printer', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Printer'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.PrinterUnassignedFromStoreEvent = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.Printer, root.FlipdishOpenApiV10.UserEventInfo);
  }
}(this, function(ApiClient, Printer, UserEventInfo) {
  'use strict';

  /**
   * The PrinterUnassignedFromStoreEvent model module.
   * @module model/PrinterUnassignedFromStoreEvent
   * @version v1.0
   */

  /**
   * Constructs a new <code>PrinterUnassignedFromStoreEvent</code>.
   * Printer assigned from store event
   * @alias module:model/PrinterUnassignedFromStoreEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PrinterUnassignedFromStoreEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrinterUnassignedFromStoreEvent} obj Optional instance to populate.
   * @return {module:model/PrinterUnassignedFromStoreEvent} The populated <code>PrinterUnassignedFromStoreEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EventName'))
        obj.eventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('StoreId'))
        obj.storeId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StoreGroupId'))
        obj.storeGroupId = ApiClient.convertToType(data['StoreGroupId'], 'Number');
      if (data.hasOwnProperty('User'))
        obj.user = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('Printer'))
        obj.printer = Printer.constructFromObject(data['Printer']);
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
   * The event name
   * @member {String} eventName
   */
  exports.prototype.eventName = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Store Id
   * @member {Number} storeId
   */
  exports.prototype.storeId = undefined;

  /**
   * Store group Id
   * @member {Number} storeGroupId
   */
  exports.prototype.storeGroupId = undefined;

  /**
   * Info User
   * @member {module:model/UserEventInfo} user
   */
  exports.prototype.user = undefined;

  /**
   * The printer
   * @member {module:model/Printer} printer
   */
  exports.prototype.printer = undefined;

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
