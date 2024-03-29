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
    define(['ApiClient', 'model/WebhookLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebhookLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiPaginationResultWebhookLog = factory(root.Flipdish.ApiClient, root.Flipdish.WebhookLog);
  }
}(this, function(ApiClient, WebhookLog) {
  'use strict';

  /**
   * The RestApiPaginationResultWebhookLog model module.
   * @module model/RestApiPaginationResultWebhookLog
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiPaginationResultWebhookLog</code>.
   * Rest api pagination result
   * @alias module:model/RestApiPaginationResultWebhookLog
   * @class
   * @param Page {Number} Current page index
   * @param Limit {Number} Current page size
   * @param TotalRecordCount {Number} Total record count
   * @param Data {Array.<module:model/WebhookLog>} Generic data object.
   */
  var exports = function(Page, Limit, TotalRecordCount, Data) {
    this.Page = Page;
    this.Limit = Limit;
    this.TotalRecordCount = TotalRecordCount;
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiPaginationResultWebhookLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiPaginationResultWebhookLog} obj Optional instance to populate.
   * @return {module:model/RestApiPaginationResultWebhookLog} The populated <code>RestApiPaginationResultWebhookLog</code> instance.
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
        obj.Data = ApiClient.convertToType(data['Data'], [WebhookLog]);
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
   * @member {Array.<module:model/WebhookLog>} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
