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
    define(['ApiClient', 'model/ApmDataPoint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApmDataPoint'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RestApiArrayResultApmDataPoint = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.ApmDataPoint);
  }
}(this, function(ApiClient, ApmDataPoint) {
  'use strict';

  /**
   * The RestApiArrayResultApmDataPoint model module.
   * @module model/RestApiArrayResultApmDataPoint
   * @version v1.0
   */

  /**
   * Constructs a new <code>RestApiArrayResultApmDataPoint</code>.
   * Rest api array result
   * @alias module:model/RestApiArrayResultApmDataPoint
   * @class
   * @param data {Array.<module:model/ApmDataPoint>} Generic data object.
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>RestApiArrayResultApmDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiArrayResultApmDataPoint} obj Optional instance to populate.
   * @return {module:model/RestApiArrayResultApmDataPoint} The populated <code>RestApiArrayResultApmDataPoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = ApiClient.convertToType(data['Data'], [ApmDataPoint]);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {Array.<module:model/ApmDataPoint>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
