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
    root.Flipdish.PayoutReport3DetailsSalesLine = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PayoutReport3DetailsSalesLine model module.
   * @module model/PayoutReport3DetailsSalesLine
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutReport3DetailsSalesLine</code>.
   * @alias module:model/PayoutReport3DetailsSalesLine
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutReport3DetailsSalesLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutReport3DetailsSalesLine} obj Optional instance to populate.
   * @return {module:model/PayoutReport3DetailsSalesLine} The populated <code>PayoutReport3DetailsSalesLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Online'))
        obj.Online = ApiClient.convertToType(data['Online'], 'Number');
      if (data.hasOwnProperty('Pos'))
        obj.Pos = ApiClient.convertToType(data['Pos'], 'Number');
      if (data.hasOwnProperty('Other'))
        obj.Other = ApiClient.convertToType(data['Other'], 'Number');
      if (data.hasOwnProperty('Total'))
        obj.Total = ApiClient.convertToType(data['Total'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} Online
   */
  exports.prototype.Online = undefined;

  /**
   * @member {Number} Pos
   */
  exports.prototype.Pos = undefined;

  /**
   * @member {Number} Other
   */
  exports.prototype.Other = undefined;

  /**
   * @member {Number} Total
   */
  exports.prototype.Total = undefined;


  return exports;

}));
