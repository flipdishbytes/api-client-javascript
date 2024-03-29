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
    root.Flipdish.PreOrderTime = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PreOrderTime model module.
   * @module model/PreOrderTime
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PreOrderTime</code>.
   * Time order can be placed
   * @alias module:model/PreOrderTime
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PreOrderTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreOrderTime} obj Optional instance to populate.
   * @return {module:model/PreOrderTime} The populated <code>PreOrderTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StartTime'))
        obj.StartTime = ApiClient.convertToType(data['StartTime'], 'Date');
      if (data.hasOwnProperty('EndTime'))
        obj.EndTime = ApiClient.convertToType(data['EndTime'], 'Date');
    }
    return obj;
  }

  /**
   * Start Time
   * @member {Date} StartTime
   */
  exports.prototype.StartTime = undefined;

  /**
   * End Time
   * @member {Date} EndTime
   */
  exports.prototype.EndTime = undefined;


  return exports;

}));
