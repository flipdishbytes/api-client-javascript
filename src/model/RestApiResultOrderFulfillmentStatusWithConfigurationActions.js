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
    define(['ApiClient', 'model/OrderFulfillmentStatusWithConfigurationActions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderFulfillmentStatusWithConfigurationActions'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultOrderFulfillmentStatusWithConfigurationActions = factory(root.Flipdish.ApiClient, root.Flipdish.OrderFulfillmentStatusWithConfigurationActions);
  }
}(this, function(ApiClient, OrderFulfillmentStatusWithConfigurationActions) {
  'use strict';

  /**
   * The RestApiResultOrderFulfillmentStatusWithConfigurationActions model module.
   * @module model/RestApiResultOrderFulfillmentStatusWithConfigurationActions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultOrderFulfillmentStatusWithConfigurationActions</code>.
   * Rest api result
   * @alias module:model/RestApiResultOrderFulfillmentStatusWithConfigurationActions
   * @class
   * @param Data {module:model/OrderFulfillmentStatusWithConfigurationActions} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultOrderFulfillmentStatusWithConfigurationActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultOrderFulfillmentStatusWithConfigurationActions} obj Optional instance to populate.
   * @return {module:model/RestApiResultOrderFulfillmentStatusWithConfigurationActions} The populated <code>RestApiResultOrderFulfillmentStatusWithConfigurationActions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = OrderFulfillmentStatusWithConfigurationActions.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/OrderFulfillmentStatusWithConfigurationActions} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
