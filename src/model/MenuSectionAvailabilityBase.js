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
    root.FlipdishOpenApiV10.MenuSectionAvailabilityBase = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuSectionAvailabilityBase model module.
   * @module model/MenuSectionAvailabilityBase
   * @version v1.0
   */

  /**
   * Constructs a new <code>MenuSectionAvailabilityBase</code>.
   * Menu section availability
   * @alias module:model/MenuSectionAvailabilityBase
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuSectionAvailabilityBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuSectionAvailabilityBase} obj Optional instance to populate.
   * @return {module:model/MenuSectionAvailabilityBase} The populated <code>MenuSectionAvailabilityBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AvailabilityMode'))
        obj.availabilityMode = ApiClient.convertToType(data['AvailabilityMode'], 'String');
    }
    return obj;
  }

  /**
   * Availability mode
   * @member {module:model/MenuSectionAvailabilityBase.AvailabilityModeEnum} availabilityMode
   */
  exports.prototype.availabilityMode = undefined;



  /**
   * Allowed values for the <code>availabilityMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AvailabilityModeEnum = {
    /**
     * value: "DisplayAlways"
     * @const
     */
    displayAlways: "DisplayAlways",

    /**
     * value: "DisplayBasedOnTimes"
     * @const
     */
    displayBasedOnTimes: "DisplayBasedOnTimes",

    /**
     * value: "DisplayAlwaysStartCollapsed"
     * @const
     */
    displayAlwaysStartCollapsed: "DisplayAlwaysStartCollapsed",

    /**
     * value: "DisplayAlwaysStartCollapsedBasedOnTimes"
     * @const
     */
    displayAlwaysStartCollapsedBasedOnTimes: "DisplayAlwaysStartCollapsedBasedOnTimes"
  };

  return exports;

}));
