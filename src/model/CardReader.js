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
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CardReader = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CardReader model module.
   * @module model/CardReader
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CardReader</code>.
   * Card reader
   * @alias module:model/CardReader
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CardReader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardReader} obj Optional instance to populate.
   * @return {module:model/CardReader} The populated <code>CardReader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('DeviceSoftwareVersion'))
        obj.DeviceSoftwareVersion = ApiClient.convertToType(data['DeviceSoftwareVersion'], 'String');
      if (data.hasOwnProperty('SerialNumber'))
        obj.SerialNumber = ApiClient.convertToType(data['SerialNumber'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('RegistrationCode'))
        obj.RegistrationCode = ApiClient.convertToType(data['RegistrationCode'], 'String');
      if (data.hasOwnProperty('DeviceType'))
        obj.DeviceType = ApiClient.convertToType(data['DeviceType'], 'String');
    }
    return obj;
  }

  /**
   * Stripe reader id
   * @member {String} Id
   */
  exports.prototype.Id = undefined;

  /**
   * Software version
   * @member {String} DeviceSoftwareVersion
   */
  exports.prototype.DeviceSoftwareVersion = undefined;

  /**
   * Device serial number
   * @member {String} SerialNumber
   */
  exports.prototype.SerialNumber = undefined;

  /**
   * Device status online or offline
   * @member {String} Status
   */
  exports.prototype.Status = undefined;

  /**
   * Registration code
   * @member {String} RegistrationCode
   */
  exports.prototype.RegistrationCode = undefined;

  /**
   * Device type
   * @member {String} DeviceType
   */
  exports.prototype.DeviceType = undefined;


  return exports;

}));