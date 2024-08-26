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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.BluetoothTerminalStatus = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BluetoothTerminalStatus model module.
   * @module model/BluetoothTerminalStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BluetoothTerminalStatus</code>.
   * Status of the bluetooth terminal
   * @alias module:model/BluetoothTerminalStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BluetoothTerminalStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BluetoothTerminalStatus} obj Optional instance to populate.
   * @return {module:model/BluetoothTerminalStatus} The populated <code>BluetoothTerminalStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('SerialNumber'))
        obj.SerialNumber = ApiClient.convertToType(data['SerialNumber'], 'String');
      if (data.hasOwnProperty('SoftwareVersion'))
        obj.SoftwareVersion = ApiClient.convertToType(data['SoftwareVersion'], 'String');
      if (data.hasOwnProperty('DeviceType'))
        obj.DeviceType = ApiClient.convertToType(data['DeviceType'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('BatteryLevel'))
        obj.BatteryLevel = ApiClient.convertToType(data['BatteryLevel'], 'Number');
      if (data.hasOwnProperty('UpdateTime'))
        obj.UpdateTime = ApiClient.convertToType(data['UpdateTime'], 'Date');
      if (data.hasOwnProperty('ReaderId'))
        obj.ReaderId = ApiClient.convertToType(data['ReaderId'], 'String');
    }
    return obj;
  }

  /**
   * Serial Number
   * @member {String} SerialNumber
   */
  exports.prototype.SerialNumber = undefined;

  /**
   * Software Version
   * @member {String} SoftwareVersion
   */
  exports.prototype.SoftwareVersion = undefined;

  /**
   * Device Type
   * @member {module:model/BluetoothTerminalStatus.DeviceTypeEnum} DeviceType
   */
  exports.prototype.DeviceType = undefined;

  /**
   * Device Status
   * @member {module:model/BluetoothTerminalStatus.StatusEnum} Status
   */
  exports.prototype.Status = undefined;

  /**
   * Indication of the battery level from 0 to 1
   * @member {Number} BatteryLevel
   */
  exports.prototype.BatteryLevel = undefined;

  /**
   * Last time the status was updated
   * @member {Date} UpdateTime
   */
  exports.prototype.UpdateTime = undefined;

  /**
   * ReaderId for Stripe Terminal
   * @member {String} ReaderId
   */
  exports.prototype.ReaderId = undefined;



  /**
   * Allowed values for the <code>DeviceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeviceTypeEnum = {
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


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Not_Connected"
     * @const
     */
    Not_Connected: "Not_Connected",

    /**
     * value: "Connecting"
     * @const
     */
    Connecting: "Connecting",

    /**
     * value: "Connected"
     * @const
     */
    Connected: "Connected",

    /**
     * value: "Online"
     * @const
     */
    Online: "Online",

    /**
     * value: "Offline"
     * @const
     */
    Offline: "Offline"
  };

  return exports;

}));
