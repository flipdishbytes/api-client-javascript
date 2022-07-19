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
    root.Flipdish.MobileAppConfig = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MobileAppConfig model module.
   * @module model/MobileAppConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MobileAppConfig</code>.
   * Mobile Apps form submission
   * @alias module:model/MobileAppConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MobileAppConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileAppConfig} obj Optional instance to populate.
   * @return {module:model/MobileAppConfig} The populated <code>MobileAppConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AutoPublish'))
        obj.AutoPublish = ApiClient.convertToType(data['AutoPublish'], 'Boolean');
    }
    return obj;
  }

  /**
   * App Name
   * @member {Boolean} AutoPublish
   */
  exports.prototype.AutoPublish = undefined;


  return exports;

}));
