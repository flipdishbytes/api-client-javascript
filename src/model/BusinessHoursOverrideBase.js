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
    root.Flipdish.BusinessHoursOverrideBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BusinessHoursOverrideBase model module.
   * @module model/BusinessHoursOverrideBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BusinessHoursOverrideBase</code>.
   * 
   * @alias module:model/BusinessHoursOverrideBase
   * @class
   * @param StartTime {Date} Date and time in ISO 8601 format.
   * @param EndTime {Date} Date and time in ISO 8601 format.
   */
  var exports = function(StartTime, EndTime) {
    this.StartTime = StartTime;
    this.EndTime = EndTime;
  };

  /**
   * Constructs a <code>BusinessHoursOverrideBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessHoursOverrideBase} obj Optional instance to populate.
   * @return {module:model/BusinessHoursOverrideBase} The populated <code>BusinessHoursOverrideBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DeliveryType'))
        obj.DeliveryType = ApiClient.convertToType(data['DeliveryType'], 'String');
      if (data.hasOwnProperty('StartTime'))
        obj.StartTime = ApiClient.convertToType(data['StartTime'], 'Date');
      if (data.hasOwnProperty('EndTime'))
        obj.EndTime = ApiClient.convertToType(data['EndTime'], 'Date');
      if (data.hasOwnProperty('Type'))
        obj.Type = ApiClient.convertToType(data['Type'], 'String');
    }
    return obj;
  }

  /**
   * Delivery or Pickup
   * @member {module:model/BusinessHoursOverrideBase.DeliveryTypeEnum} DeliveryType
   */
  exports.prototype.DeliveryType = undefined;

  /**
   * Date and time in ISO 8601 format.
   * @member {Date} StartTime
   */
  exports.prototype.StartTime = undefined;

  /**
   * Date and time in ISO 8601 format.
   * @member {Date} EndTime
   */
  exports.prototype.EndTime = undefined;

  /**
   * Open, Closed or ClosedAllowPreOrders
   * @member {module:model/BusinessHoursOverrideBase.TypeEnum} Type
   */
  exports.prototype.Type = undefined;



  /**
   * Allowed values for the <code>DeliveryType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryTypeEnum = {
    /**
     * value: "Delivery"
     * @const
     */
    Delivery: "Delivery",

    /**
     * value: "Pickup"
     * @const
     */
    Pickup: "Pickup"
  };


  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Open"
     * @const
     */
    Open: "Open",

    /**
     * value: "Closed"
     * @const
     */
    Closed: "Closed",

    /**
     * value: "ClosedAllowPreOrders"
     * @const
     */
    ClosedAllowPreOrders: "ClosedAllowPreOrders"
  };

  return exports;

}));
