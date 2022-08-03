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
    define(['ApiClient', 'model/OrderBatchingConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderBatchingConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultOrderBatchingConfiguration = factory(root.Flipdish.ApiClient, root.Flipdish.OrderBatchingConfiguration);
  }
}(this, function(ApiClient, OrderBatchingConfiguration) {
  'use strict';

  /**
   * The RestApiResultOrderBatchingConfiguration model module.
   * @module model/RestApiResultOrderBatchingConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultOrderBatchingConfiguration</code>.
   * Rest api result
   * @alias module:model/RestApiResultOrderBatchingConfiguration
   * @class
   * @param Data {module:model/OrderBatchingConfiguration} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultOrderBatchingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultOrderBatchingConfiguration} obj Optional instance to populate.
   * @return {module:model/RestApiResultOrderBatchingConfiguration} The populated <code>RestApiResultOrderBatchingConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = OrderBatchingConfiguration.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/OrderBatchingConfiguration} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
