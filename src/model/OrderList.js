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
    define(['ApiClient', 'model/OrderReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderList = factory(root.Flipdish.ApiClient, root.Flipdish.OrderReference);
  }
}(this, function(ApiClient, OrderReference) {
  'use strict';

  /**
   * The OrderList model module.
   * @module model/OrderList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderList</code>.
   * A list of orders.
   * @alias module:model/OrderList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderList} obj Optional instance to populate.
   * @return {module:model/OrderList} The populated <code>OrderList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Orders'))
        obj.Orders = ApiClient.convertToType(data['Orders'], [OrderReference]);
    }
    return obj;
  }

  /**
   * A list of orders.
   * @member {Array.<module:model/OrderReference>} Orders
   */
  exports.prototype.Orders = undefined;


  return exports;

}));
