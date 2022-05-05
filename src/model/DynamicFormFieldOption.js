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
    root.Flipdish.DynamicFormFieldOption = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DynamicFormFieldOption model module.
   * @module model/DynamicFormFieldOption
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DynamicFormFieldOption</code>.
   * @alias module:model/DynamicFormFieldOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DynamicFormFieldOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynamicFormFieldOption} obj Optional instance to populate.
   * @return {module:model/DynamicFormFieldOption} The populated <code>DynamicFormFieldOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Display'))
        obj.Display = ApiClient.convertToType(data['Display'], 'String');
      if (data.hasOwnProperty('Value'))
        obj.Value = ApiClient.convertToType(data['Value'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} Display
   */
  exports.prototype.Display = undefined;

  /**
   * @member {String} Value
   */
  exports.prototype.Value = undefined;


  return exports;

}));