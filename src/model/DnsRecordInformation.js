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
    root.Flipdish.DnsRecordInformation = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DnsRecordInformation model module.
   * @module model/DnsRecordInformation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DnsRecordInformation</code>.
   * Holds the information for the A and CNAME Records of a domain.
   * @alias module:model/DnsRecordInformation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DnsRecordInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DnsRecordInformation} obj Optional instance to populate.
   * @return {module:model/DnsRecordInformation} The populated <code>DnsRecordInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('IsCNameReady'))
        obj.IsCNameReady = ApiClient.convertToType(data['IsCNameReady'], 'Boolean');
      if (data.hasOwnProperty('IsAReady'))
        obj.IsAReady = ApiClient.convertToType(data['IsAReady'], 'Boolean');
      if (data.hasOwnProperty('IsApiCNameReady'))
        obj.IsApiCNameReady = ApiClient.convertToType(data['IsApiCNameReady'], 'Boolean');
    }
    return obj;
  }

  /**
   * indicates whether the CNAME record is ready or not.
   * @member {Boolean} IsCNameReady
   */
  exports.prototype.IsCNameReady = undefined;

  /**
   * indicates whether the A record is ready or not.
   * @member {Boolean} IsAReady
   */
  exports.prototype.IsAReady = undefined;

  /**
   * indicates whether the API CNAME record is ready or not.
   * @member {Boolean} IsApiCNameReady
   */
  exports.prototype.IsApiCNameReady = undefined;


  return exports;

}));
