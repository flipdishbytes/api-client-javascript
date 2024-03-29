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
    define(['ApiClient', 'model/TelemetrySeriesProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelemetrySeriesProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.TelemetrySeriesResult = factory(root.Flipdish.ApiClient, root.Flipdish.TelemetrySeriesProperty);
  }
}(this, function(ApiClient, TelemetrySeriesProperty) {
  'use strict';

  /**
   * The TelemetrySeriesResult model module.
   * @module model/TelemetrySeriesResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TelemetrySeriesResult</code>.
   * @alias module:model/TelemetrySeriesResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TelemetrySeriesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelemetrySeriesResult} obj Optional instance to populate.
   * @return {module:model/TelemetrySeriesResult} The populated <code>TelemetrySeriesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Timestamps'))
        obj.Timestamps = ApiClient.convertToType(data['Timestamps'], ['Date']);
      if (data.hasOwnProperty('Properties'))
        obj.Properties = ApiClient.convertToType(data['Properties'], [TelemetrySeriesProperty]);
    }
    return obj;
  }

  /**
   * @member {Array.<Date>} Timestamps
   */
  exports.prototype.Timestamps = undefined;

  /**
   * @member {Array.<module:model/TelemetrySeriesProperty>} Properties
   */
  exports.prototype.Properties = undefined;


  return exports;

}));
