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
    root.Flipdish.MaskedPhoneNumber = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MaskedPhoneNumber model module.
   * @module model/MaskedPhoneNumber
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MaskedPhoneNumber</code>.
   * Represents a masked phone number
   * @alias module:model/MaskedPhoneNumber
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MaskedPhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MaskedPhoneNumber} obj Optional instance to populate.
   * @return {module:model/MaskedPhoneNumber} The populated <code>MaskedPhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('PhoneNumber'))
        obj.PhoneNumber = ApiClient.convertToType(data['PhoneNumber'], 'String');
      if (data.hasOwnProperty('Code'))
        obj.Code = ApiClient.convertToType(data['Code'], 'String');
    }
    return obj;
  }

  /**
   * Defines if the feature is enabled
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * Defines the phone number to call
   * @member {String} PhoneNumber
   */
  exports.prototype.PhoneNumber = undefined;

  /**
   * Defines the code to enter
   * @member {String} Code
   */
  exports.prototype.Code = undefined;


  return exports;

}));
