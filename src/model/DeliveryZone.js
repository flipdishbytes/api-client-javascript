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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.DeliveryZone = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeliveryZone model module.
   * @module model/DeliveryZone
   * @version v1.0
   */

  /**
   * Constructs a new <code>DeliveryZone</code>.
   * Delivery Zone
   * @alias module:model/DeliveryZone
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DeliveryZone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryZone} obj Optional instance to populate.
   * @return {module:model/DeliveryZone} The populated <code>DeliveryZone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('DeliveryFee'))
        obj.deliveryFee = ApiClient.convertToType(data['DeliveryFee'], 'Number');
      if (data.hasOwnProperty('MinimumDeliveryOrderAmount'))
        obj.minimumDeliveryOrderAmount = ApiClient.convertToType(data['MinimumDeliveryOrderAmount'], 'Number');
      if (data.hasOwnProperty('WellKnownText'))
        obj.wellKnownText = ApiClient.convertToType(data['WellKnownText'], 'String');
      if (data.hasOwnProperty('IsEnabled'))
        obj.isEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Delivery Fee Area Id
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Delivery fee (will not be set below 0)
   * @member {Number} deliveryFee
   */
  exports.prototype.deliveryFee = undefined;

  /**
   * Minimum delivery order amount (will not be set below 0)
   * @member {Number} minimumDeliveryOrderAmount
   */
  exports.prototype.minimumDeliveryOrderAmount = undefined;

  /**
   * Spatial data in Well Known Text format  We also support CIRCLE((0 0, 200)) - (centerLong centerLat, radius in m)
   * @member {String} wellKnownText
   */
  exports.prototype.wellKnownText = undefined;

  /**
   * Is delivery zone enabled
   * @member {Boolean} isEnabled
   */
  exports.prototype.isEnabled = undefined;


  return exports;

}));
