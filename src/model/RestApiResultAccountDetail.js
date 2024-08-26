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
    define(['ApiClient', 'model/AccountDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.RestApiResultAccountDetail = factory(root.Flipdish.ApiClient, root.Flipdish.AccountDetail);
  }
}(this, function(ApiClient, AccountDetail) {
  'use strict';

  /**
   * The RestApiResultAccountDetail model module.
   * @module model/RestApiResultAccountDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestApiResultAccountDetail</code>.
   * Rest api result
   * @alias module:model/RestApiResultAccountDetail
   * @class
   * @param Data {module:model/AccountDetail} Generic data object.
   */
  var exports = function(Data) {
    this.Data = Data;
  };

  /**
   * Constructs a <code>RestApiResultAccountDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestApiResultAccountDetail} obj Optional instance to populate.
   * @return {module:model/RestApiResultAccountDetail} The populated <code>RestApiResultAccountDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.Data = AccountDetail.constructFromObject(data['Data']);
    }
    return obj;
  }

  /**
   * Generic data object.
   * @member {module:model/AccountDetail} Data
   */
  exports.prototype.Data = undefined;


  return exports;

}));
