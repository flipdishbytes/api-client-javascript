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
    define(['ApiClient', 'model/StoreChannelStoreMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreChannelStoreMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiArrayResultStoreChannelStoreMapping = factory(root.Flipdish.ApiClient, root.Flipdish.StoreChannelStoreMapping);
  }
}(this, function(ApiClient, StoreChannelStoreMapping) {
  'use strict';

  /**
   * The RestApiArrayResultStoreChannelStoreMapping model module.
   * @module model/RestApiArrayResultStoreChannelStoreMapping
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiArrayResultStoreChannelStoreMapping</code>.
   * Rest api array result
   * @alias module:model/RestApiArrayResultStoreChannelStoreMapping
   * @class
   * @param Data {Array.<module:model/StoreChannelStoreMapping>} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiArrayResultStoreChannelStoreMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiArrayResultStoreChannelStoreMapping} obj Optional instance to populate.
   * @return {module:model/RestApiArrayResultStoreChannelStoreMapping} The populated <code>RestApiArrayResultStoreChannelStoreMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = ApiClient.convertToType(data['Data'], [StoreChannelStoreMapping]);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {Array.<module:model/StoreChannelStoreMapping>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
