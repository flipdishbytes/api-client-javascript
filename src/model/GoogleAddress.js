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
    define(['ApiClient', 'model/GoogleAddressResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoogleAddressResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.GoogleAddress = factory(root.Flipdish.ApiClient, root.Flipdish.GoogleAddressResult);
  }
}(this, function(ApiClient, GoogleAddressResult) {
  'use strict';

  /**
   * The GoogleAddress model module.
   * @module model/GoogleAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoogleAddress</code>.
   * @alias module:model/GoogleAddress
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GoogleAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoogleAddress} obj Optional instance to populate.
   * @return {module:model/GoogleAddress} The populated <code>GoogleAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Results'))
        obj.Results = ApiClient.convertToType(data['Results'], [GoogleAddressResult]);
      if (data.hasOwnProperty('Result'))
        obj.Result = GoogleAddressResult.constructFromObject(data['Result']);
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GoogleAddressResult>} Results
   */
  exports.prototype.Results = undefined;

  /**
   * @member {module:model/GoogleAddressResult} Result
   */
  exports.prototype.Result = undefined;

  /**
   * @member {String} Status
   */
  exports.prototype.Status = undefined;


  return exports;

}));
