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
    define(['ApiClient', 'model/OrderBatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderBatch'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultOrderBatch = factory(root.Flipdish.ApiClient, root.Flipdish.OrderBatch);
  }
}(this, function(ApiClient, OrderBatch) {
  'use strict';

  /**
   * The RestApiResultOrderBatch model module.
   * @module model/RestApiResultOrderBatch
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultOrderBatch</code>.
   * Rest api result
   * @alias module:model/RestApiResultOrderBatch
   * @class
   * @param Data {module:model/OrderBatch} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultOrderBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultOrderBatch} obj Optional instance to populate.
   * @return {module:model/RestApiResultOrderBatch} The populated <code>RestApiResultOrderBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = OrderBatch.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/OrderBatch} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
