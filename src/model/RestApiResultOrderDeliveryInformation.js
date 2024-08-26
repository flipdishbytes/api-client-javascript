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
    define(['ApiClient', 'model/OrderDeliveryInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderDeliveryInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultOrderDeliveryInformation = factory(root.Flipdish.ApiClient, root.Flipdish.OrderDeliveryInformation);
  }
}(this, function(ApiClient, OrderDeliveryInformation) {
  'use strict';

  /**
   * The RestApiResultOrderDeliveryInformation model module.
   * @module model/RestApiResultOrderDeliveryInformation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultOrderDeliveryInformation</code>.
   * Rest api result
   * @alias module:model/RestApiResultOrderDeliveryInformation
   * @class
   * @param Data {module:model/OrderDeliveryInformation} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultOrderDeliveryInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultOrderDeliveryInformation} obj Optional instance to populate.
   * @return {module:model/RestApiResultOrderDeliveryInformation} The populated <code>RestApiResultOrderDeliveryInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = OrderDeliveryInformation.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/OrderDeliveryInformation} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
