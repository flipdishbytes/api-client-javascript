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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.ApmHourlyDataPoint = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApmHourlyDataPoint model module.
   * @module model/ApmHourlyDataPoint
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ApmHourlyDataPoint</code>.
   * Provides an average value for a single hour of day of the week
   * @alias module:model/ApmHourlyDataPoint
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApmHourlyDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApmHourlyDataPoint} obj Optional instance to populate.
   * @return {module:model/ApmHourlyDataPoint} The populated <code>ApmHourlyDataPoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Day'))
        obj.Day = ApiClient.convertToType(data['Day'], 'String');
      if (data.hasOwnProperty('Hour'))
        obj.Hour = ApiClient.convertToType(data['Hour'], 'Number');
      if (data.hasOwnProperty('TotalValue'))
        obj.TotalValue = ApiClient.convertToType(data['TotalValue'], 'Number');
    }
    return obj;
  }

  /**
   * Day of the week
   * @member {module:model/ApmHourlyDataPoint.DayEnum} Day
   */
  exports.prototype.Day = undefined;

  /**
   * Hour in the day
   * @member {Number} Hour
   */
  exports.prototype.Hour = undefined;

  /**
   * Total Value
   * @member {Number} TotalValue
   */
  exports.prototype.TotalValue = undefined;



  /**
   * Allowed values for the <code>Day</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DayEnum = {
    /**
     * value: "Sunday"
     * @const
     */
    Sunday: "Sunday",

    /**
     * value: "Monday"
     * @const
     */
    Monday: "Monday",

    /**
     * value: "Tuesday"
     * @const
     */
    Tuesday: "Tuesday",

    /**
     * value: "Wednesday"
     * @const
     */
    Wednesday: "Wednesday",

    /**
     * value: "Thursday"
     * @const
     */
    Thursday: "Thursday",

    /**
     * value: "Friday"
     * @const
     */
    Friday: "Friday",

    /**
     * value: "Saturday"
     * @const
     */
    Saturday: "Saturday"
  };

  return exports;

}));
