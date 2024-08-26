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
    define(['ApiClient', 'model/MenuTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiArrayResultMenuTaxDetails = factory(root.Flipdish.ApiClient, root.Flipdish.MenuTaxDetails);
  }
}(this, function(ApiClient, MenuTaxDetails) {
  'use strict';

  /**
   * The RestApiArrayResultMenuTaxDetails model module.
   * @module model/RestApiArrayResultMenuTaxDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiArrayResultMenuTaxDetails</code>.
   * Rest api array result
   * @alias module:model/RestApiArrayResultMenuTaxDetails
   * @class
   * @param Data {Array.<module:model/MenuTaxDetails>} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiArrayResultMenuTaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiArrayResultMenuTaxDetails} obj Optional instance to populate.
   * @return {module:model/RestApiArrayResultMenuTaxDetails} The populated <code>RestApiArrayResultMenuTaxDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = ApiClient.convertToType(data['Data'], [MenuTaxDetails]);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {Array.<module:model/MenuTaxDetails>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
