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
    define(['ApiClient', 'model/Range'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Range'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.BusinessHoursPeriod = factory(root.Flipdish.ApiClient, root.Flipdish.Range);
  }
}(this, function(ApiClient, Range) {
  'use strict';

  /**
   * The BusinessHoursPeriod model module.
   * @module model/BusinessHoursPeriod
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BusinessHoursPeriod</code>.
   * Business hours period
   * @alias module:model/BusinessHoursPeriod
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BusinessHoursPeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessHoursPeriod} obj Optional instance to populate.
   * @return {module:model/BusinessHoursPeriod} The populated <code>BusinessHoursPeriod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Early'))
        obj.Early = Range.constructFromObject(data['Early']);
      if (data.hasOwnProperty('Late'))
        obj.Late = Range.constructFromObject(data['Late']);
      if (data.hasOwnProperty('Ranges'))
        obj.Ranges = ApiClient.convertToType(data['Ranges'], [Range]);
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
   * Early
   * @member {module:model/Range} Early
   */
  exports.prototype.Early = undefined;

  /**
   * Late
   * @member {module:model/Range} Late
   */
  exports.prototype.Late = undefined;

  /**
   * Ranges
   * @member {Array.<module:model/Range>} Ranges
   */
  exports.prototype.Ranges = undefined;

  /**
   * Day of week
   * @member {module:model/BusinessHoursPeriod.DayOfWeekEnum} DayOfWeek
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
