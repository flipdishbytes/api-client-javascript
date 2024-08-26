/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.KioskBluetoothTerminalInstallationStatusEvent = factory(root.Flipdish.ApiClient, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, UserEventInfo) {
  'use strict';

  /**
   * The KioskBluetoothTerminalInstallationStatusEvent model module.
   * @module model/KioskBluetoothTerminalInstallationStatusEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KioskBluetoothTerminalInstallationStatusEvent</code>.
   * Kiosk bluetooth terminal Installation Status
   * @alias module:model/KioskBluetoothTerminalInstallationStatusEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KioskBluetoothTerminalInstallationStatusEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KioskBluetoothTerminalInstallationStatusEvent} obj Optional instance to populate.
   * @return {module:model/KioskBluetoothTerminalInstallationStatusEvent} The populated <code>KioskBluetoothTerminalInstallationStatusEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DeviceId'))
        obj.DeviceId = ApiClient.convertToType(data['DeviceId'], 'String');
      if (data.hasOwnProperty('BluetoothTerminalType'))
        obj.BluetoothTerminalType = ApiClient.convertToType(data['BluetoothTerminalType'], 'String');
      if (data.hasOwnProperty('BluetoothTerminalSerialNumber'))
        obj.BluetoothTerminalSerialNumber = ApiClient.convertToType(data['BluetoothTerminalSerialNumber'], 'String');
      if (data.hasOwnProperty('User'))
        obj.User = UserEventInfo.constructFromObject(data['User']);
      if (data.hasOwnProperty('Progress'))
        obj.Progress = ApiClient.convertToType(data['Progress'], 'Number');
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
      if (data.hasOwnProperty('IpAddress'))
        obj.IpAddress = ApiClient.convertToType(data['IpAddress'], 'String');
    }
    return obj;
  }

  /**
   * Device Id of the Kiosk
   * @member {String} DeviceId
   */
  exports.prototype.DeviceId = undefined;

  /**
   * Terminal Type
   * @member {module:model/KioskBluetoothTerminalInstallationStatusEvent.BluetoothTerminalTypeEnum} BluetoothTerminalType
   */
  exports.prototype.BluetoothTerminalType = undefined;

  /**
   * Serial number of the terminal
   * @member {String} BluetoothTerminalSerialNumber
   */
  exports.prototype.BluetoothTerminalSerialNumber = undefined;

  /**
   * User who made the change
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype.User = undefined;

  /**
   * Update Install Progress for Card Reader
   * @member {Number} Progress
   */
  exports.prototype.Progress = undefined;

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
   * Ip Address
   * @member {String} IpAddress
   */
  exports.prototype.IpAddress = undefined;



  /**
   * Allowed values for the <code>BluetoothTerminalType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BluetoothTerminalTypeEnum = {
    /**
     * value: "CHIPPER_2X"
     * @const
     */
    CHIPPER_2X: "CHIPPER_2X",

    /**
     * value: "COTS_DEVICE"
     * @const
     */
    COTS_DEVICE: "COTS_DEVICE",

    /**
     * value: "VERIFONE_P400"
     * @const
     */
    VERIFONE_P400: "VERIFONE_P400",

    /**
     * value: "WISEPAD_3"
     * @const
     */
    WISEPAD_3: "WISEPAD_3",

    /**
     * value: "WISEPOS_E"
     * @const
     */
    WISEPOS_E: "WISEPOS_E"
  };

  return exports;

}));
