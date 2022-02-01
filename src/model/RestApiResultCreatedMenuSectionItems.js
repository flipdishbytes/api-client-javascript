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
    define(['ApiClient', 'model/CreatedMenuSectionItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatedMenuSectionItems'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultCreatedMenuSectionItems = factory(root.Flipdish.ApiClient, root.Flipdish.CreatedMenuSectionItems);
  }
}(this, function(ApiClient, CreatedMenuSectionItems) {
  'use strict';

  /**
   * The RestApiResultCreatedMenuSectionItems model module.
   * @module model/RestApiResultCreatedMenuSectionItems
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultCreatedMenuSectionItems</code>.
   * Rest api result
   * @alias module:model/RestApiResultCreatedMenuSectionItems
   * @class
   * @param Data {module:model/CreatedMenuSectionItems} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultCreatedMenuSectionItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultCreatedMenuSectionItems} obj Optional instance to populate.
   * @return {module:model/RestApiResultCreatedMenuSectionItems} The populated <code>RestApiResultCreatedMenuSectionItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = CreatedMenuSectionItems.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/CreatedMenuSectionItems} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));