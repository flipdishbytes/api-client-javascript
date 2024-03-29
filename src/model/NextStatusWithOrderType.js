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
    root.Flipdish.NextStatusWithOrderType = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NextStatusWithOrderType model module.
   * @module model/NextStatusWithOrderType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NextStatusWithOrderType</code>.
   * Next status by order type
   * @alias module:model/NextStatusWithOrderType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NextStatusWithOrderType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NextStatusWithOrderType} obj Optional instance to populate.
   * @return {module:model/NextStatusWithOrderType} The populated <code>NextStatusWithOrderType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderType'))
        obj.OrderType = ApiClient.convertToType(data['OrderType'], 'String');
      if (data.hasOwnProperty('NextStatus'))
        obj.NextStatus = ApiClient.convertToType(data['NextStatus'], 'String');
    }
    return obj;
  }

  /**
   * Order type
   * @member {module:model/NextStatusWithOrderType.OrderTypeEnum} OrderType
   */
  exports.prototype.OrderType = undefined;

  /**
   * Next status id
   * @member {String} NextStatus
   */
  exports.prototype.NextStatus = undefined;



  /**
   * Allowed values for the <code>OrderType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderTypeEnum = {
    /**
     * value: "All"
     * @const
     */
    All: "All",

    /**
     * value: "Delivery"
     * @const
     */
    Delivery: "Delivery",

    /**
     * value: "Collection"
     * @const
     */
    Collection: "Collection",

    /**
     * value: "DineIn"
     * @const
     */
    DineIn: "DineIn"
  };

  return exports;

}));
