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
    define(['ApiClient', 'model/PayoutReport3Details'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PayoutReport3Details'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultPayoutReport3Details = factory(root.Flipdish.ApiClient, root.Flipdish.PayoutReport3Details);
  }
}(this, function(ApiClient, PayoutReport3Details) {
  'use strict';

  /**
   * The RestApiResultPayoutReport3Details model module.
   * @module model/RestApiResultPayoutReport3Details
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultPayoutReport3Details</code>.
   * Rest api result
   * @alias module:model/RestApiResultPayoutReport3Details
   * @class
   * @param Data {module:model/PayoutReport3Details} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultPayoutReport3Details</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultPayoutReport3Details} obj Optional instance to populate.
   * @return {module:model/RestApiResultPayoutReport3Details} The populated <code>RestApiResultPayoutReport3Details</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = PayoutReport3Details.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/PayoutReport3Details} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
