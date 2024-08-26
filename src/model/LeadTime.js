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
    root.Flipdish.LeadTime = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LeadTime model module.
   * @module model/LeadTime
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LeadTime</code>.
   * 
   * @alias module:model/LeadTime
   * @class
   * @param DispatchType {String} There are two valid values for this field - `collection` and `delivery`.
   * @param LeadTimeMinutes {Number} This must be a positive integer.
   */
  var exports = function(DispatchType, LeadTimeMinutes) {
    this.DispatchType = DispatchType;
    this.LeadTimeMinutes = LeadTimeMinutes;
  };

  /**
   * Constructs a <code>LeadTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LeadTime} obj Optional instance to populate.
   * @return {module:model/LeadTime} The populated <code>LeadTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DispatchType'))
        obj.DispatchType = ApiClient.convertToType(data['DispatchType'], 'String');
      if (data.hasOwnProperty('LeadTimeMinutes'))
        obj.LeadTimeMinutes = ApiClient.convertToType(data['LeadTimeMinutes'], 'Number');
    }
    return obj;
  }

  /**
   * There are two valid values for this field - `collection` and `delivery`.
   * @member {String} DispatchType
   */
  exports.prototype.DispatchType = undefined;

  /**
   * This must be a positive integer.
   * @member {Number} LeadTimeMinutes
   */
  exports.prototype.LeadTimeMinutes = undefined;


  return exports;

}));
