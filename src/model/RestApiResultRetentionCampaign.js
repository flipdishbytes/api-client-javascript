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
    define(['ApiClient', 'model/RetentionCampaign'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RetentionCampaign'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.RestApiResultRetentionCampaign = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.RetentionCampaign);
  }
}(this, function(ApiClient, RetentionCampaign) {
  'use strict';

  /**
   * The RestApiResultRetentionCampaign model module.
   * @module model/RestApiResultRetentionCampaign
   * @version v1.0
   */

  /**
   * Constructs a new <code>RestApiResultRetentionCampaign</code>.
   * Rest api result
   * @alias module:model/RestApiResultRetentionCampaign
   * @class
   * @param data {module:model/RetentionCampaign} Generic data object.
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>RestApiResultRetentionCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultRetentionCampaign} obj Optional instance to populate.
   * @return {module:model/RestApiResultRetentionCampaign} The populated <code>RestApiResultRetentionCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = RetentionCampaign.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/RetentionCampaign} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
