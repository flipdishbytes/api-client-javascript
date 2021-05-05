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
    define(['ApiClient', 'model/PreOrderTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PreOrderTime'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RestApiArrayResultPreOrderTime = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.PreOrderTime);
  }
}(this, function(ApiClient, PreOrderTime) {
  'use strict';

  /**
   * The RestApiArrayResultPreOrderTime model module.
   * @module model/RestApiArrayResultPreOrderTime
   * @version v1.0
   */

  /**
   * Constructs a new <code>RestApiArrayResultPreOrderTime</code>.
   * Rest api array result
   * @alias module:model/RestApiArrayResultPreOrderTime
   * @class
   * @param data {Array.<module:model/PreOrderTime>} Generic data object.
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>RestApiArrayResultPreOrderTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiArrayResultPreOrderTime} obj Optional instance to populate.
   * @return {module:model/RestApiArrayResultPreOrderTime} The populated <code>RestApiArrayResultPreOrderTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = ApiClient.convertToType(data['Data'], [PreOrderTime]);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {Array.<module:model/PreOrderTime>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
