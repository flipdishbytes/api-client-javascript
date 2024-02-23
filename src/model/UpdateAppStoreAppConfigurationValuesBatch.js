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
    define(['ApiClient', 'model/Setting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Setting'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.UpdateAppStoreAppConfigurationValuesBatch = factory(root.Flipdish.ApiClient, root.Flipdish.Setting);
  }
}(this, function(ApiClient, Setting) {
  'use strict';

  /**
   * The UpdateAppStoreAppConfigurationValuesBatch model module.
   * @module model/UpdateAppStoreAppConfigurationValuesBatch
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateAppStoreAppConfigurationValuesBatch</code>.
   * @alias module:model/UpdateAppStoreAppConfigurationValuesBatch
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateAppStoreAppConfigurationValuesBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAppStoreAppConfigurationValuesBatch} obj Optional instance to populate.
   * @return {module:model/UpdateAppStoreAppConfigurationValuesBatch} The populated <code>UpdateAppStoreAppConfigurationValuesBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Settings'))
        obj.Settings = ApiClient.convertToType(data['Settings'], [Setting]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Setting>} Settings
   */
  exports.prototype.Settings = undefined;


  return exports;

}));
