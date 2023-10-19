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
    root.Flipdish.PercentDiscountDetails = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PercentDiscountDetails model module.
   * @module model/PercentDiscountDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PercentDiscountDetails</code>.
   * Percent discount details
   * @alias module:model/PercentDiscountDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PercentDiscountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PercentDiscountDetails} obj Optional instance to populate.
   * @return {module:model/PercentDiscountDetails} The populated <code>PercentDiscountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PercentageDiscount'))
        obj.PercentageDiscount = ApiClient.convertToType(data['PercentageDiscount'], 'Number');
      if (data.hasOwnProperty('MaxDiscountAmount'))
        obj.MaxDiscountAmount = ApiClient.convertToType(data['MaxDiscountAmount'], 'Number');
    }
    return obj;
  }

  /**
   * Percentage discount
   * @member {Number} PercentageDiscount
   */
  exports.prototype.PercentageDiscount = undefined;

  /**
   * The maximum amount that the percentage discount value can be.  If not set then there is no maximum.  If set to e.g. 20 euro, and the percentage discount is 25%, and the order total is 100 euro, then the discount will be 20 euro (not 25 euro).
   * @member {Number} MaxDiscountAmount
   */
  exports.prototype.MaxDiscountAmount = undefined;


  return exports;

}));
