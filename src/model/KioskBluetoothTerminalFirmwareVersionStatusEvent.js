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
    define(['ApiClient', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.KioskBluetoothTerminalFirmwareVersionStatusEvent = factory(root.Flipdish.ApiClient, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, UserEventInfo) {
  'use strict';

  /**
   * The KioskBluetoothTerminalFirmwareVersionStatusEvent model module.
   * @module model/KioskBluetoothTerminalFirmwareVersionStatusEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KioskBluetoothTerminalFirmwareVersionStatusEvent</code>.
   * Kiosk Stripe Terminal Update info received event
   * @alias module:model/KioskBluetoothTerminalFirmwareVersionStatusEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KioskBluetoothTerminalFirmwareVersionStatusEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KioskBluetoothTerminalFirmwareVersionStatusEvent} obj Optional instance to populate.
   * @return {module:model/KioskBluetoothTerminalFirmwareVersionStatusEvent} The populated <code>KioskBluetoothTerminalFirmwareVersionStatusEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DeviceId'))
        obj.DeviceId = ApiClient.convertToType(data['DeviceId'], 'String');
      if (data.hasOwnProperty('SerialNumber'))
        obj.SerialNumber = ApiClient.convertToType(data['SerialNumber'], 'String');
      if (data.hasOwnProperty('HasFirmwareUpdate'))
        obj.HasFirmwareUpdate = ApiClient.convertToType(data['HasFirmwareUpdate'], 'Boolean');
      if (data.hasOwnProperty('HasConfigUpdate'))
        obj.HasConfigUpdate = ApiClient.convertToType(data['HasConfigUpdate'], 'Boolean');
      if (data.hasOwnProperty('HasKeyUpdate'))
        obj.HasKeyUpdate = ApiClient.convertToType(data['HasKeyUpdate'], 'Boolean');
      if (data.hasOwnProperty('UpdateTimeEstimate'))
        obj.UpdateTimeEstimate = ApiClient.convertToType(data['UpdateTimeEstimate'], 'String');
      if (data.hasOwnProperty('UserEventInfo'))
        obj.UserEventInfo = UserEventInfo.constructFromObject(data['UserEventInfo']);
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
   * Device Id of the Kiosk
   * @member {String} DeviceId
   */
  exports.prototype.DeviceId = undefined;

  /**
   * Serial Number of the device
   * @member {String} SerialNumber
   */
  exports.prototype.SerialNumber = undefined;

  /**
   * Indicates if Payment Terminal has Firmware Update
   * @member {Boolean} HasFirmwareUpdate
   */
  exports.prototype.HasFirmwareUpdate = undefined;

  /**
   * Indicates if Payment Terminal has Config Update
   * @member {Boolean} HasConfigUpdate
   */
  exports.prototype.HasConfigUpdate = undefined;

  /**
   * Indicates if Payment Terminal has Key Update
   * @member {Boolean} HasKeyUpdate
   */
  exports.prototype.HasKeyUpdate = undefined;

  /**
   * ETA to install the update
   * @member {module:model/KioskBluetoothTerminalFirmwareVersionStatusEvent.UpdateTimeEstimateEnum} UpdateTimeEstimate
   */
  exports.prototype.UpdateTimeEstimate = undefined;

  /**
   * User who made the changes
   * @member {module:model/UserEventInfo} UserEventInfo
   */
  exports.prototype.UserEventInfo = undefined;

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



  /**
   * Allowed values for the <code>UpdateTimeEstimate</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UpdateTimeEstimateEnum = {
    /**
     * value: "LessThanOneMinute"
     * @const
     */
    LessThanOneMinute: "LessThanOneMinute",

    /**
     * value: "OneToTwoMinutes"
     * @const
     */
    OneToTwoMinutes: "OneToTwoMinutes",

    /**
     * value: "TwoToFiveMinutes"
     * @const
     */
    TwoToFiveMinutes: "TwoToFiveMinutes",

    /**
     * value: "FiveToFifteenMinutes"
     * @const
     */
    FiveToFifteenMinutes: "FiveToFifteenMinutes"
  };

  return exports;

}));