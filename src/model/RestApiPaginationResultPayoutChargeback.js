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
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiPaginationResultPayoutChargeback = factory(root.Flipdish.ApiClient, root.Flipdish.PayoutChargeback);
  }
}(this, function(ApiClient, PayoutChargeback) {
  'use strict';

  /**
   * The RestApiPaginationResultPayoutChargeback model module.
   * @module model/RestApiPaginationResultPayoutChargeback
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiPaginationResultPayoutChargeback</code>.
   * Rest api pagination result
   * @alias module:model/RestApiPaginationResultPayoutChargeback
   * @class
   * @param Page {Number} Current page index
   * @param Limit {Number} Current page size
   * @param TotalRecordCount {Number} Total record count
   * @param Data {Array.<module:model/PayoutChargeback>} Generic data object.
   */
  var exports = function(Page, Limit, TotalRecordCount, Data) {
    this.Page = Page;
    this.Limit = Limit;
    this.TotalRecordCount = TotalRecordCount;
    this.Data = Data;
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
        obj.Page = ApiClient.convertToType(data['Page'], 'Number');
      if (data.hasOwnProperty('Limit'))
        obj.Limit = ApiClient.convertToType(data['Limit'], 'Number');
      if (data.hasOwnProperty('TotalRecordCount'))
        obj.TotalRecordCount = ApiClient.convertToType(data['TotalRecordCount'], 'Number');
      if (data.hasOwnProperty('Data'))
        obj.Data = ApiClient.convertToType(data['Data'], [PayoutChargeback]);
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
   * @member {Array.<module:model/PayoutChargeback>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
