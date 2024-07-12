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
    root.Flipdish.DeliveryZone = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeliveryZone model module.
   * @module model/DeliveryZone
   * @version 1.0.0
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
        obj.Id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('FeeChargedToStore'))
        obj.FeeChargedToStore = ApiClient.convertToType(data['FeeChargedToStore'], 'Number');
      if (data.hasOwnProperty('DeliveryFee'))
        obj.DeliveryFee = ApiClient.convertToType(data['DeliveryFee'], 'Number');
      if (data.hasOwnProperty('MinimumDeliveryOrderAmount'))
        obj.MinimumDeliveryOrderAmount = ApiClient.convertToType(data['MinimumDeliveryOrderAmount'], 'Number');
      if (data.hasOwnProperty('WellKnownText'))
        obj.WellKnownText = ApiClient.convertToType(data['WellKnownText'], 'String');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Delivery Fee Area Id
   * @member {Number} Id
   */
  exports.prototype.Id = undefined;

  /**
   * Delivery Fee charged to store
   * @member {Number} FeeChargedToStore
   */
  exports.prototype.FeeChargedToStore = undefined;

  /**
   * Delivery fee (will not be set below 0)
   * @member {Number} DeliveryFee
   */
  exports.prototype.DeliveryFee = undefined;

  /**
   * Minimum delivery order amount (will not be set below 0)
   * @member {Number} MinimumDeliveryOrderAmount
   */
  exports.prototype.MinimumDeliveryOrderAmount = undefined;

  /**
   * Spatial data in Well Known Text format  We also support CIRCLE((0 0, 200)) - (centerLong centerLat, radius in m)
   * @member {String} WellKnownText
   */
  exports.prototype.WellKnownText = undefined;

  /**
   * Is delivery zone enabled
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;


  return exports;

}));
