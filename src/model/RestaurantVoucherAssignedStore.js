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
    root.Flipdish.RestaurantVoucherAssignedStore = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RestaurantVoucherAssignedStore model module.
   * @module model/RestaurantVoucherAssignedStore
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestaurantVoucherAssignedStore</code>.
   * @alias module:model/RestaurantVoucherAssignedStore
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RestaurantVoucherAssignedStore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestaurantVoucherAssignedStore} obj Optional instance to populate.
   * @return {module:model/RestaurantVoucherAssignedStore} The populated <code>RestaurantVoucherAssignedStore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Active'))
        obj.Active = ApiClient.convertToType(data['Active'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * @member {Boolean} Active
   */
  exports.prototype.Active = undefined;


  return exports;

}));
