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
    root.Flipdish.HydraRegistrationRequest = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HydraRegistrationRequest model module.
   * @module model/HydraRegistrationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HydraRegistrationRequest</code>.
   * Hydra registration result
   * @alias module:model/HydraRegistrationRequest
   * @class
   * @param StoreIds {Array.<Number>} Stores to assign the hydra
   * @param DeviceName {String} Hydra device name
   */
  var exports = function(StoreIds, DeviceName) {
    this.StoreIds = StoreIds;
    this.DeviceName = DeviceName;
  };

  /**
   * Constructs a <code>HydraRegistrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HydraRegistrationRequest} obj Optional instance to populate.
   * @return {module:model/HydraRegistrationRequest} The populated <code>HydraRegistrationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
      if (data.hasOwnProperty('DeviceName'))
        obj.DeviceName = ApiClient.convertToType(data['DeviceName'], 'String');
      if (data.hasOwnProperty('PinCode'))
        obj.PinCode = ApiClient.convertToType(data['PinCode'], 'Number');
    }
    return obj;
  }

  /**
   * Stores to assign the hydra
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;

  /**
   * Hydra device name
   * @member {String} DeviceName
   */
  exports.prototype.DeviceName = undefined;

  /**
   * 6 digit PIN code (not starting with zero).
   * @member {Number} PinCode
   */
  exports.prototype.PinCode = undefined;


  return exports;

}));
