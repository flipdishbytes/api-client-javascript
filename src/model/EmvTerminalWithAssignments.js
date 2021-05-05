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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.EmvTerminalWithAssignments = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmvTerminalWithAssignments model module.
   * @module model/EmvTerminalWithAssignments
   * @version v1.0
   */

  /**
   * Constructs a new <code>EmvTerminalWithAssignments</code>.
   * EMV Payment Terminal
   * @alias module:model/EmvTerminalWithAssignments
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmvTerminalWithAssignments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmvTerminalWithAssignments} obj Optional instance to populate.
   * @return {module:model/EmvTerminalWithAssignments} The populated <code>EmvTerminalWithAssignments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EmvTerminalId'))
        obj.emvTerminalId = ApiClient.convertToType(data['EmvTerminalId'], 'String');
      if (data.hasOwnProperty('TerminalId'))
        obj.terminalId = ApiClient.convertToType(data['TerminalId'], 'String');
      if (data.hasOwnProperty('IsAssignedToHydraDevice'))
        obj.isAssignedToHydraDevice = ApiClient.convertToType(data['IsAssignedToHydraDevice'], 'Boolean');
      if (data.hasOwnProperty('HydraConfigId'))
        obj.hydraConfigId = ApiClient.convertToType(data['HydraConfigId'], 'Number');
      if (data.hasOwnProperty('HydraDeviceId'))
        obj.hydraDeviceId = ApiClient.convertToType(data['HydraDeviceId'], 'String');
      if (data.hasOwnProperty('HydraName'))
        obj.hydraName = ApiClient.convertToType(data['HydraName'], 'String');
    }
    return obj;
  }

  /**
   * Flipdish Internal identifier of the Terminal
   * @member {String} emvTerminalId
   */
  exports.prototype.emvTerminalId = undefined;

  /**
   * External Identifier of the Terminal
   * @member {String} terminalId
   */
  exports.prototype.terminalId = undefined;

  /**
   * true if the terminal is assigned to a hydra device (e.g. a kiosk)
   * @member {Boolean} isAssignedToHydraDevice
   */
  exports.prototype.isAssignedToHydraDevice = undefined;

  /**
   * hydra device id (null if the terminal is not assigned to any hydra device)
   * @member {Number} hydraConfigId
   */
  exports.prototype.hydraConfigId = undefined;

  /**
   * external hydra device id (null if the terminal is not assigned to any hydra device)
   * @member {String} hydraDeviceId
   */
  exports.prototype.hydraDeviceId = undefined;

  /**
   * hydra device name (null if the terminal is not assigned to any hydra device)
   * @member {String} hydraName
   */
  exports.prototype.hydraName = undefined;


  return exports;

}));
