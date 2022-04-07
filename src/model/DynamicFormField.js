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
    define(['ApiClient', 'model/DynamicFormRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DynamicFormRules'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.DynamicFormField = factory(root.Flipdish.ApiClient, root.Flipdish.DynamicFormRules);
  }
}(this, function(ApiClient, DynamicFormRules) {
  'use strict';

  /**
   * The DynamicFormField model module.
   * @module model/DynamicFormField
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DynamicFormField</code>.
   * @alias module:model/DynamicFormField
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DynamicFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynamicFormField} obj Optional instance to populate.
   * @return {module:model/DynamicFormField} The populated <code>DynamicFormField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Identifier'))
        obj.Identifier = ApiClient.convertToType(data['Identifier'], 'String');
      if (data.hasOwnProperty('Label'))
        obj.Label = ApiClient.convertToType(data['Label'], 'String');
      if (data.hasOwnProperty('Placeholder'))
        obj.Placeholder = ApiClient.convertToType(data['Placeholder'], 'String');
      if (data.hasOwnProperty('Rules'))
        obj.Rules = DynamicFormRules.constructFromObject(data['Rules']);
      if (data.hasOwnProperty('Mapping'))
        obj.Mapping = ApiClient.convertToType(data['Mapping'], {'String': 'String'});
      if (data.hasOwnProperty('Modifiers'))
        obj.Modifiers = ApiClient.convertToType(data['Modifiers'], ['String']);
      if (data.hasOwnProperty('Value'))
        obj.Value = ApiClient.convertToType(data['Value'], Object);
    }
    return obj;
  }

  /**
   * @member {String} Identifier
   */
  exports.prototype.Identifier = undefined;

  /**
   * @member {String} Label
   */
  exports.prototype.Label = undefined;

  /**
   * @member {String} Placeholder
   */
  exports.prototype.Placeholder = undefined;

  /**
   * @member {module:model/DynamicFormRules} Rules
   */
  exports.prototype.Rules = undefined;

  /**
   * @member {Object.<String, String>} Mapping
   */
  exports.prototype.Mapping = undefined;

  /**
   * @member {Array.<String>} Modifiers
   */
  exports.prototype.Modifiers = undefined;

  /**
   * @member {Object} Value
   */
  exports.prototype.Value = undefined;


  return exports;

}));
