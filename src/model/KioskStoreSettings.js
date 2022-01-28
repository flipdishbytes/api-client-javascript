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
    define(['ApiClient', 'model/StoreKioskSetting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StoreKioskSetting'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.KioskStoreSettings = factory(root.Flipdish.ApiClient, root.Flipdish.StoreKioskSetting);
  }
}(this, function(ApiClient, StoreKioskSetting) {
  'use strict';

  /**
   * The KioskStoreSettings model module.
   * @module model/KioskStoreSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KioskStoreSettings</code>.
   * Details of a kiosks store settings
   * @alias module:model/KioskStoreSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KioskStoreSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KioskStoreSettings} obj Optional instance to populate.
   * @return {module:model/KioskStoreSettings} The populated <code>KioskStoreSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreKioskSettings'))
        obj.StoreKioskSettings = ApiClient.convertToType(data['StoreKioskSettings'], [StoreKioskSetting]);
      if (data.hasOwnProperty('Timezone'))
        obj.Timezone = ApiClient.convertToType(data['Timezone'], 'String');
      if (data.hasOwnProperty('CurrentUtcTime'))
        obj.CurrentUtcTime = ApiClient.convertToType(data['CurrentUtcTime'], 'Date');
    }
    return obj;
  }

  /**
   * Kiosks store settings
   * @member {Array.<module:model/StoreKioskSetting>} StoreKioskSettings
   */
  exports.prototype.StoreKioskSettings = undefined;

  /**
   * Kiosks timezone
   * @member {String} Timezone
   */
  exports.prototype.Timezone = undefined;

  /**
   * Servers current Utc time
   * @member {Date} CurrentUtcTime
   */
  exports.prototype.CurrentUtcTime = undefined;


  return exports;

}));
