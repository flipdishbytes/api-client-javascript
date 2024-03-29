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
    root.Flipdish.BusinessHoursPeriodBase = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BusinessHoursPeriodBase model module.
   * @module model/BusinessHoursPeriodBase
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BusinessHoursPeriodBase</code>.
   * Business hours period
   * @alias module:model/BusinessHoursPeriodBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BusinessHoursPeriodBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessHoursPeriodBase} obj Optional instance to populate.
   * @return {module:model/BusinessHoursPeriodBase} The populated <code>BusinessHoursPeriodBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DayOfWeek'))
        obj.DayOfWeek = ApiClient.convertToType(data['DayOfWeek'], 'String');
      if (data.hasOwnProperty('StartTime'))
        obj.StartTime = ApiClient.convertToType(data['StartTime'], 'String');
      if (data.hasOwnProperty('Period'))
        obj.Period = ApiClient.convertToType(data['Period'], 'String');
      if (data.hasOwnProperty('StartTimeEarly'))
        obj.StartTimeEarly = ApiClient.convertToType(data['StartTimeEarly'], 'String');
      if (data.hasOwnProperty('PeriodEarly'))
        obj.PeriodEarly = ApiClient.convertToType(data['PeriodEarly'], 'String');
    }
    return obj;
  }

  /**
   * Day of week
   * @member {module:model/BusinessHoursPeriodBase.DayOfWeekEnum} DayOfWeek
   */
  exports.prototype.DayOfWeek = undefined;

  /**
   * Start time
   * @member {String} StartTime
   */
  exports.prototype.StartTime = undefined;

  /**
   * Period
   * @member {String} Period
   */
  exports.prototype.Period = undefined;

  /**
   * Start time early
   * @member {String} StartTimeEarly
   */
  exports.prototype.StartTimeEarly = undefined;

  /**
   * Period early
   * @member {String} PeriodEarly
   */
  exports.prototype.PeriodEarly = undefined;



  /**
   * Allowed values for the <code>DayOfWeek</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DayOfWeekEnum = {
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
