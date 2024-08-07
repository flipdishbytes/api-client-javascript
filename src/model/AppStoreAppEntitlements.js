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
    root.Flipdish.AppStoreAppEntitlements = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppStoreAppEntitlements model module.
   * @module model/AppStoreAppEntitlements
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppStoreAppEntitlements</code>.
   * @alias module:model/AppStoreAppEntitlements
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppStoreAppEntitlements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreAppEntitlements} obj Optional instance to populate.
   * @return {module:model/AppStoreAppEntitlements} The populated <code>AppStoreAppEntitlements</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EntitlementQuantity'))
        obj.EntitlementQuantity = ApiClient.convertToType(data['EntitlementQuantity'], 'Number');
      if (data.hasOwnProperty('CurrentUsage'))
        obj.CurrentUsage = ApiClient.convertToType(data['CurrentUsage'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} EntitlementQuantity
   */
  exports.prototype.EntitlementQuantity = undefined;

  /**
   * @member {Number} CurrentUsage
   */
  exports.prototype.CurrentUsage = undefined;


  return exports;

}));
