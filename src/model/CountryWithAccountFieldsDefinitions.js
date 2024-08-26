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
    define(['ApiClient', 'model/AccountFieldDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountFieldDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CountryWithAccountFieldsDefinitions = factory(root.Flipdish.ApiClient, root.Flipdish.AccountFieldDefinition);
  }
}(this, function(ApiClient, AccountFieldDefinition) {
  'use strict';

  /**
   * The CountryWithAccountFieldsDefinitions model module.
   * @module model/CountryWithAccountFieldsDefinitions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CountryWithAccountFieldsDefinitions</code>.
   * List of field definitions per country
   * @alias module:model/CountryWithAccountFieldsDefinitions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CountryWithAccountFieldsDefinitions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryWithAccountFieldsDefinitions} obj Optional instance to populate.
   * @return {module:model/CountryWithAccountFieldsDefinitions} The populated <code>CountryWithAccountFieldsDefinitions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CountryCode'))
        obj.CountryCode = ApiClient.convertToType(data['CountryCode'], 'String');
      if (data.hasOwnProperty('DisplayName'))
        obj.DisplayName = ApiClient.convertToType(data['DisplayName'], 'String');
      if (data.hasOwnProperty('SupportType'))
        obj.SupportType = ApiClient.convertToType(data['SupportType'], 'String');
      if (data.hasOwnProperty('FieldDefinitions'))
        obj.FieldDefinitions = ApiClient.convertToType(data['FieldDefinitions'], [AccountFieldDefinition]);
    }
    return obj;
  }

  /**
   * Country 2-letter ISO code
   * @member {String} CountryCode
   */
  exports.prototype.CountryCode = undefined;

  /**
   * Display name of the country
   * @member {String} DisplayName
   */
  exports.prototype.DisplayName = undefined;

  /**
   * Country support type (supported-by-stripe-cc, supported-by-flipdish,not-supported)
   * @member {String} SupportType
   */
  exports.prototype.SupportType = undefined;

  /**
   * Bank Account field definitions
   * @member {Array.<module:model/AccountFieldDefinition>} FieldDefinitions
   */
  exports.prototype.FieldDefinitions = undefined;


  return exports;

}));
