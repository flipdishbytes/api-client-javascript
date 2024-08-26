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
    define(['ApiClient', 'model/MenuSection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuSection'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiArrayResultMenuSection = factory(root.Flipdish.ApiClient, root.Flipdish.MenuSection);
  }
}(this, function(ApiClient, MenuSection) {
  'use strict';

  /**
   * The RestApiArrayResultMenuSection model module.
   * @module model/RestApiArrayResultMenuSection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiArrayResultMenuSection</code>.
   * Rest api array result
   * @alias module:model/RestApiArrayResultMenuSection
   * @class
   * @param Data {Array.<module:model/MenuSection>} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiArrayResultMenuSection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiArrayResultMenuSection} obj Optional instance to populate.
   * @return {module:model/RestApiArrayResultMenuSection} The populated <code>RestApiArrayResultMenuSection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = ApiClient.convertToType(data['Data'], [MenuSection]);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {Array.<module:model/MenuSection>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
