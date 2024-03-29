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
    define(['ApiClient', 'model/StoreConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.StoreValidationConfig = factory(root.Flipdish.ApiClient, root.Flipdish.StoreConfig);
  }
}(this, function(ApiClient, StoreConfig) {
  'use strict';

  /**
   * The StoreValidationConfig model module.
   * @module model/StoreValidationConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StoreValidationConfig</code>.
   * Hey
   * @alias module:model/StoreValidationConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreValidationConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreValidationConfig} obj Optional instance to populate.
   * @return {module:model/StoreValidationConfig} The populated <code>StoreValidationConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('IsValid'))
        obj.IsValid = ApiClient.convertToType(data['IsValid'], 'Boolean');
      if (data.hasOwnProperty('StoreGroupId'))
        obj.StoreGroupId = ApiClient.convertToType(data['StoreGroupId'], 'Number');
      if (data.hasOwnProperty('ConfigValidation'))
        obj.ConfigValidation = StoreConfig.constructFromObject(data['ConfigValidation']);
    }
    return obj;
  }

  /**
   * Store identifier
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Is Store Valid for Kiosk
   * @member {Boolean} IsValid
   */
  exports.prototype.IsValid = undefined;

  /**
   * Store group Id
   * @member {Number} StoreGroupId
   */
  exports.prototype.StoreGroupId = undefined;

  /**
   * Store list of validations
   * @member {module:model/StoreConfig} ConfigValidation
   */
  exports.prototype.ConfigValidation = undefined;


  return exports;

}));
