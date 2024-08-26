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
    root.Flipdish.JobAddress = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobAddress model module.
   * @module model/JobAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobAddress</code>.
   * Job Address
   * @alias module:model/JobAddress
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JobAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobAddress} obj Optional instance to populate.
   * @return {module:model/JobAddress} The populated <code>JobAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Street'))
        obj.Street = ApiClient.convertToType(data['Street'], 'String');
      if (data.hasOwnProperty('Postcode'))
        obj.Postcode = ApiClient.convertToType(data['Postcode'], 'String');
      if (data.hasOwnProperty('City'))
        obj.City = ApiClient.convertToType(data['City'], 'String');
      if (data.hasOwnProperty('Country'))
        obj.Country = ApiClient.convertToType(data['Country'], 'String');
      if (data.hasOwnProperty('Zone'))
        obj.Zone = ApiClient.convertToType(data['Zone'], 'String');
      if (data.hasOwnProperty('FormattedAddress'))
        obj.FormattedAddress = ApiClient.convertToType(data['FormattedAddress'], 'String');
    }
    return obj;
  }

  /**
   * Street
   * @member {String} Street
   */
  exports.prototype.Street = undefined;

  /**
   * Postcode
   * @member {String} Postcode
   */
  exports.prototype.Postcode = undefined;

  /**
   * City
   * @member {String} City
   */
  exports.prototype.City = undefined;

  /**
   * Country
   * @member {String} Country
   */
  exports.prototype.Country = undefined;

  /**
   * Zone
   * @member {String} Zone
   */
  exports.prototype.Zone = undefined;

  /**
   * Formatted Address
   * @member {String} FormattedAddress
   */
  exports.prototype.FormattedAddress = undefined;


  return exports;

}));
