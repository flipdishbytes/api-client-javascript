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
    define(['ApiClient', 'model/PayoutReport3OverviewHeader', 'model/PayoutReport3Store'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PayoutReport3OverviewHeader'), require('./PayoutReport3Store'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.PayoutReport3Overview = factory(root.Flipdish.ApiClient, root.Flipdish.PayoutReport3OverviewHeader, root.Flipdish.PayoutReport3Store);
  }
}(this, function(ApiClient, PayoutReport3OverviewHeader, PayoutReport3Store) {
  'use strict';

  /**
   * The PayoutReport3Overview model module.
   * @module model/PayoutReport3Overview
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutReport3Overview</code>.
   * @alias module:model/PayoutReport3Overview
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutReport3Overview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutReport3Overview} obj Optional instance to populate.
   * @return {module:model/PayoutReport3Overview} The populated <code>PayoutReport3Overview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PayoutReport3OverviewHeader'))
        obj.PayoutReport3OverviewHeader = PayoutReport3OverviewHeader.constructFromObject(data['PayoutReport3OverviewHeader']);
      if (data.hasOwnProperty('PayoutStores'))
        obj.PayoutStores = ApiClient.convertToType(data['PayoutStores'], [PayoutReport3Store]);
    }
    return obj;
  }

  /**
   * @member {module:model/PayoutReport3OverviewHeader} PayoutReport3OverviewHeader
   */
  exports.prototype.PayoutReport3OverviewHeader = undefined;

  /**
   * @member {Array.<module:model/PayoutReport3Store>} PayoutStores
   */
  exports.prototype.PayoutStores = undefined;


  return exports;

}));
