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
    define(['ApiClient', 'model/PayoutReport3Overview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PayoutReport3Overview'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultPayoutReport3Overview = factory(root.Flipdish.ApiClient, root.Flipdish.PayoutReport3Overview);
  }
}(this, function(ApiClient, PayoutReport3Overview) {
  'use strict';

  /**
   * The RestApiResultPayoutReport3Overview model module.
   * @module model/RestApiResultPayoutReport3Overview
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultPayoutReport3Overview</code>.
   * Rest api result
   * @alias module:model/RestApiResultPayoutReport3Overview
   * @class
   * @param Data {module:model/PayoutReport3Overview} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultPayoutReport3Overview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultPayoutReport3Overview} obj Optional instance to populate.
   * @return {module:model/RestApiResultPayoutReport3Overview} The populated <code>RestApiResultPayoutReport3Overview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = PayoutReport3Overview.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/PayoutReport3Overview} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
