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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.JobCancellation = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JobCancellation model module.
   * @module model/JobCancellation
   * @version v1.0
   */

  /**
   * Constructs a new <code>JobCancellation</code>.
   * Job Cancellation
   * @alias module:model/JobCancellation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JobCancellation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobCancellation} obj Optional instance to populate.
   * @return {module:model/JobCancellation} The populated <code>JobCancellation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CanceledBy'))
        obj.canceledBy = ApiClient.convertToType(data['CanceledBy'], 'String');
      if (data.hasOwnProperty('ReasonKey'))
        obj.reasonKey = ApiClient.convertToType(data['ReasonKey'], 'String');
      if (data.hasOwnProperty('Comment'))
        obj.comment = ApiClient.convertToType(data['Comment'], 'String');
    }
    return obj;
  }

  /**
   * Canceled By
   * @member {String} canceledBy
   */
  exports.prototype.canceledBy = undefined;

  /**
   * Reason Key
   * @member {String} reasonKey
   */
  exports.prototype.reasonKey = undefined;

  /**
   * Comment
   * @member {String} comment
   */
  exports.prototype.comment = undefined;


  return exports;

}));
