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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderFulfillmentStatus = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderFulfillmentStatus model module.
   * @module model/OrderFulfillmentStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderFulfillmentStatus</code>.
   * Order Fulfillment Status Information
   * @alias module:model/OrderFulfillmentStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderFulfillmentStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderFulfillmentStatus} obj Optional instance to populate.
   * @return {module:model/OrderFulfillmentStatus} The populated <code>OrderFulfillmentStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('StatusId'))
        obj.StatusId = ApiClient.convertToType(data['StatusId'], 'String');
      if (data.hasOwnProperty('StatusName'))
        obj.StatusName = ApiClient.convertToType(data['StatusName'], 'String');
      if (data.hasOwnProperty('Icon'))
        obj.Icon = ApiClient.convertToType(data['Icon'], 'String');
    }
    return obj;
  }

  /**
   * Order Id
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * Fulfillment Status Id
   * @member {String} StatusId
   */
  exports.prototype.StatusId = undefined;

  /**
   * Fulfillment Status Name
   * @member {String} StatusName
   */
  exports.prototype.StatusName = undefined;

  /**
   * Status Icon
   * @member {String} Icon
   */
  exports.prototype.Icon = undefined;


  return exports;

}));