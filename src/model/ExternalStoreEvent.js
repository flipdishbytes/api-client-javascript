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
    define(['ApiClient', 'model/FieldChangeInformation', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldChangeInformation'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.ExternalStoreEvent = factory(root.Flipdish.ApiClient, root.Flipdish.FieldChangeInformation, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, FieldChangeInformation, UserEventInfo) {
  'use strict';

  /**
   * The ExternalStoreEvent model module.
   * @module model/ExternalStoreEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExternalStoreEvent</code>.
   * External event
   * @alias module:model/ExternalStoreEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExternalStoreEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalStoreEvent} obj Optional instance to populate.
   * @return {module:model/ExternalStoreEvent} The populated <code>ExternalStoreEvent</code> instance.
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
      if (data.hasOwnProperty('DescriptionFormat'))
        obj.DescriptionFormat = ApiClient.convertToType(data['DescriptionFormat'], 'String');
      if (data.hasOwnProperty('DescriptionFields'))
        obj.DescriptionFields = ApiClient.convertToType(data['DescriptionFields'], 'String');
      if (data.hasOwnProperty('DescriptionId'))
        obj.DescriptionId = ApiClient.convertToType(data['DescriptionId'], 'String');
      if (data.hasOwnProperty('Ref1'))
        obj.Ref1 = ApiClient.convertToType(data['Ref1'], 'String');
      if (data.hasOwnProperty('Ref2'))
        obj.Ref2 = ApiClient.convertToType(data['Ref2'], 'String');
      if (data.hasOwnProperty('Ref3'))
        obj.Ref3 = ApiClient.convertToType(data['Ref3'], 'String');
      if (data.hasOwnProperty('Ref4'))
        obj.Ref4 = ApiClient.convertToType(data['Ref4'], 'String');
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('Tags'))
        obj.Tags = ApiClient.convertToType(data['Tags'], ['String']);
      if (data.hasOwnProperty('FieldChanges'))
        obj.FieldChanges = ApiClient.convertToType(data['FieldChanges'], [FieldChangeInformation]);
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
   * User which did the action
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype.User = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Description with format placeholders
   * @member {String} DescriptionFormat
   */
  exports.prototype.DescriptionFormat = undefined;

  /**
   * Description with format placeholders
   * @member {String} DescriptionFields
   */
  exports.prototype.DescriptionFields = undefined;

  /**
   * Description
   * @member {String} DescriptionId
   */
  exports.prototype.DescriptionId = undefined;

  /**
   * Ref (reference field)
   * @member {String} Ref1
   */
  exports.prototype.Ref1 = undefined;

  /**
   * Ref2 (reference field)
   * @member {String} Ref2
   */
  exports.prototype.Ref2 = undefined;

  /**
   * Ref3 (reference field)
   * @member {String} Ref3
   */
  exports.prototype.Ref3 = undefined;

  /**
   * Ref4 (reference field)
   * @member {String} Ref4
   */
  exports.prototype.Ref4 = undefined;

  /**
   * Order Id
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * Tags
   * @member {Array.<String>} Tags
   */
  exports.prototype.Tags = undefined;

  /**
   * Field changes list
   * @member {Array.<module:model/FieldChangeInformation>} FieldChanges
   */
  exports.prototype.FieldChanges = undefined;

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
