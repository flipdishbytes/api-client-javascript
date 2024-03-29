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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderBatchSummary = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderBatchSummary model module.
   * @module model/OrderBatchSummary
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderBatchSummary</code>.
   * Order batch info
   * @alias module:model/OrderBatchSummary
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderBatchSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderBatchSummary} obj Optional instance to populate.
   * @return {module:model/OrderBatchSummary} The populated <code>OrderBatchSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('DisplayCode'))
        obj.DisplayCode = ApiClient.convertToType(data['DisplayCode'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.CreateTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('IsPublished'))
        obj.IsPublished = ApiClient.convertToType(data['IsPublished'], 'Boolean');
    }
    return obj;
  }

  /**
   * Order batch id
   * @member {Number} Id
   */
  exports.prototype.Id = undefined;

  /**
   * Order batch 6-sign human readable code
   * @member {String} DisplayCode
   */
  exports.prototype.DisplayCode = undefined;

  /**
   * Batch creation date and time
   * @member {Date} CreateTime
   */
  exports.prototype.CreateTime = undefined;

  /**
   * If the batch is already published
   * @member {Boolean} IsPublished
   */
  exports.prototype.IsPublished = undefined;


  return exports;

}));
