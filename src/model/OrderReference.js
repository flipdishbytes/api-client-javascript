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
    root.Flipdish.OrderReference = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderReference model module.
   * @module model/OrderReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderReference</code>.
   * A reference to an order.
   * @alias module:model/OrderReference
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderReference} obj Optional instance to populate.
   * @return {module:model/OrderReference} The populated <code>OrderReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
    }
    return obj;
  }

  /**
   * The ID of the order.
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;


  return exports;

}));
