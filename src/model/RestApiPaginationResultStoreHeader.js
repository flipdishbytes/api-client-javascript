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
    define(['ApiClient', 'model/StoreHeader'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreHeader'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiPaginationResultStoreHeader = factory(root.Flipdish.ApiClient, root.Flipdish.StoreHeader);
  }
}(this, function(ApiClient, StoreHeader) {
  'use strict';

  /**
   * The RestApiPaginationResultStoreHeader model module.
   * @module model/RestApiPaginationResultStoreHeader
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiPaginationResultStoreHeader</code>.
   * Rest api pagination result
   * @alias module:model/RestApiPaginationResultStoreHeader
   * @class
   * @param Page {Number} Current page index
   * @param Limit {Number} Current page size
   * @param TotalRecordCount {Number} Total record count
   * @param Data {Array.<module:model/StoreHeader>} Generic data object.
   */
  var exports = function(Page, Limit, TotalRecordCount, Data) {
    this.Page = Page;
    this.Limit = Limit;
    this.TotalRecordCount = TotalRecordCount;
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiPaginationResultStoreHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiPaginationResultStoreHeader} obj Optional instance to populate.
   * @return {module:model/RestApiPaginationResultStoreHeader} The populated <code>RestApiPaginationResultStoreHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Page'))
        obj.Page = ApiClient.convertToType(data['Page'], 'Number');
      if (data.hasOwnProperty('Limit'))
        obj.Limit = ApiClient.convertToType(data['Limit'], 'Number');
      if (data.hasOwnProperty('TotalRecordCount'))
        obj.TotalRecordCount = ApiClient.convertToType(data['TotalRecordCount'], 'Number');
      if (data.hasOwnProperty('Data'))
        obj.Data = ApiClient.convertToType(data['Data'], [StoreHeader]);
    }
    return obj;
  }

  /**
   * Current page index
   * @member {Number} Page
   */
  exports.prototype.Page = undefined;

  /**
   * Current page size
   * @member {Number} Limit
   */
  exports.prototype.Limit = undefined;

  /**
   * Total record count
   * @member {Number} TotalRecordCount
   */
  exports.prototype.TotalRecordCount = undefined;

  /**
   * Generic data object.
   * @member {Array.<module:model/StoreHeader>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
