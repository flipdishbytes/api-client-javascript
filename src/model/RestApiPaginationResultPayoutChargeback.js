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
    define(['ApiClient', 'model/PayoutChargeback'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PayoutChargeback'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RestApiPaginationResultPayoutChargeback = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.PayoutChargeback);
  }
}(this, function(ApiClient, PayoutChargeback) {
  'use strict';

  /**
   * The RestApiPaginationResultPayoutChargeback model module.
   * @module model/RestApiPaginationResultPayoutChargeback
   * @version v1.0
   */

  /**
   * Constructs a new <code>RestApiPaginationResultPayoutChargeback</code>.
   * Rest api pagination result
   * @alias module:model/RestApiPaginationResultPayoutChargeback
   * @class
   * @param page {Number} Current page index
   * @param limit {Number} Current page size
   * @param totalRecordCount {Number} Total record count
   * @param data {Array.<module:model/PayoutChargeback>} Generic data object.
   */
  var exports = function(page, limit, totalRecordCount, data) {
    this.page = page;
    this.limit = limit;
    this.totalRecordCount = totalRecordCount;
    this.data = data;
  };

  /**
   * Constructs a <code>RestApiPaginationResultPayoutChargeback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiPaginationResultPayoutChargeback} obj Optional instance to populate.
   * @return {module:model/RestApiPaginationResultPayoutChargeback} The populated <code>RestApiPaginationResultPayoutChargeback</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Page'))
        obj.page = ApiClient.convertToType(data['Page'], 'Number');
      if (data.hasOwnProperty('Limit'))
        obj.limit = ApiClient.convertToType(data['Limit'], 'Number');
      if (data.hasOwnProperty('TotalRecordCount'))
        obj.totalRecordCount = ApiClient.convertToType(data['TotalRecordCount'], 'Number');
      if (data.hasOwnProperty('Data'))
        obj.data = ApiClient.convertToType(data['Data'], [PayoutChargeback]);
    }
    return obj;
  }

  /**
   * Current page index
   * @member {Number} page
   */
  exports.prototype.page = undefined;

  /**
   * Current page size
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Total record count
   * @member {Number} totalRecordCount
   */
  exports.prototype.totalRecordCount = undefined;

  /**
   * Generic data object.
   * @member {Array.<module:model/PayoutChargeback>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
