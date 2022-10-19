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
    root.Flipdish.MobileAppsStatistics = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MobileAppsStatistics model module.
   * @module model/MobileAppsStatistics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MobileAppsStatistics</code>.
   * Mobile Apps Statistics
   * @alias module:model/MobileAppsStatistics
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MobileAppsStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileAppsStatistics} obj Optional instance to populate.
   * @return {module:model/MobileAppsStatistics} The populated <code>MobileAppsStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NumberDownload'))
        obj.NumberDownload = ApiClient.convertToType(data['NumberDownload'], 'Number');
      if (data.hasOwnProperty('CurrentRate'))
        obj.CurrentRate = ApiClient.convertToType(data['CurrentRate'], 'Number');
      if (data.hasOwnProperty('CurrentVersion'))
        obj.CurrentVersion = ApiClient.convertToType(data['CurrentVersion'], 'String');
      if (data.hasOwnProperty('PlayStoreLink'))
        obj.PlayStoreLink = ApiClient.convertToType(data['PlayStoreLink'], 'String');
      if (data.hasOwnProperty('AppBundleId'))
        obj.AppBundleId = ApiClient.convertToType(data['AppBundleId'], 'String');
      if (data.hasOwnProperty('LastUpdated'))
        obj.LastUpdated = ApiClient.convertToType(data['LastUpdated'], 'Date');
      if (data.hasOwnProperty('Notes'))
        obj.Notes = ApiClient.convertToType(data['Notes'], 'String');
      if (data.hasOwnProperty('Published'))
        obj.Published = ApiClient.convertToType(data['Published'], 'Boolean');
      if (data.hasOwnProperty('PlatformType'))
        obj.PlatformType = ApiClient.convertToType(data['PlatformType'], 'String');
    }
    return obj;
  }

  /**
   * Number Download
   * @member {Number} NumberDownload
   */
  exports.prototype.NumberDownload = undefined;

  /**
   * Current Rate
   * @member {Number} CurrentRate
   */
  exports.prototype.CurrentRate = undefined;

  /**
   * Current Version
   * @member {String} CurrentVersion
   */
  exports.prototype.CurrentVersion = undefined;

  /**
   * Play Store Link
   * @member {String} PlayStoreLink
   */
  exports.prototype.PlayStoreLink = undefined;

  /**
   * App Bundle Id
   * @member {String} AppBundleId
   */
  exports.prototype.AppBundleId = undefined;

  /**
   * Last Updated
   * @member {Date} LastUpdated
   */
  exports.prototype.LastUpdated = undefined;

  /**
   * Last Updated
   * @member {String} Notes
   */
  exports.prototype.Notes = undefined;

  /**
   * Published
   * @member {Boolean} Published
   */
  exports.prototype.Published = undefined;

  /**
   * Platform Type
   * @member {module:model/MobileAppsStatistics.PlatformTypeEnum} PlatformType
   */
  exports.prototype.PlatformType = undefined;



  /**
   * Allowed values for the <code>PlatformType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PlatformTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Android"
     * @const
     */
    Android: "Android",

    /**
     * value: "IOS"
     * @const
     */
    IOS: "IOS"
  };

  return exports;

}));