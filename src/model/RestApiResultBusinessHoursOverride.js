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
    define(['ApiClient', 'model/BusinessHoursOverride'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessHoursOverride'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RestApiResultBusinessHoursOverride = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.BusinessHoursOverride);
  }
}(this, function(ApiClient, BusinessHoursOverride) {
  'use strict';

  /**
   * The RestApiResultBusinessHoursOverride model module.
   * @module model/RestApiResultBusinessHoursOverride
   * @version v1.0
   */

  /**
   * Constructs a new <code>RestApiResultBusinessHoursOverride</code>.
   * Rest api result
   * @alias module:model/RestApiResultBusinessHoursOverride
   * @class
   * @param data {module:model/BusinessHoursOverride} Generic data object.
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>RestApiResultBusinessHoursOverride</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultBusinessHoursOverride} obj Optional instance to populate.
   * @return {module:model/RestApiResultBusinessHoursOverride} The populated <code>RestApiResultBusinessHoursOverride</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = BusinessHoursOverride.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/BusinessHoursOverride} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
