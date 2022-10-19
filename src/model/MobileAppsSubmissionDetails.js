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
    define(['ApiClient', 'model/MobileAppsSubmissionStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MobileAppsSubmissionStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.MobileAppsSubmissionDetails = factory(root.Flipdish.ApiClient, root.Flipdish.MobileAppsSubmissionStatus);
  }
}(this, function(ApiClient, MobileAppsSubmissionStatus) {
  'use strict';

  /**
   * The MobileAppsSubmissionDetails model module.
   * @module model/MobileAppsSubmissionDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MobileAppsSubmissionDetails</code>.
   * Mobile Apps form submission
   * @alias module:model/MobileAppsSubmissionDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MobileAppsSubmissionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileAppsSubmissionDetails} obj Optional instance to populate.
   * @return {module:model/MobileAppsSubmissionDetails} The populated <code>MobileAppsSubmissionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MobileAppsSubmissionId'))
        obj.MobileAppsSubmissionId = ApiClient.convertToType(data['MobileAppsSubmissionId'], 'Number');
      if (data.hasOwnProperty('AppName'))
        obj.AppName = ApiClient.convertToType(data['AppName'], 'String');
      if (data.hasOwnProperty('AppDescription'))
        obj.AppDescription = ApiClient.convertToType(data['AppDescription'], 'String');
      if (data.hasOwnProperty('AppShortDescription'))
        obj.AppShortDescription = ApiClient.convertToType(data['AppShortDescription'], 'String');
      if (data.hasOwnProperty('Keywords'))
        obj.Keywords = ApiClient.convertToType(data['Keywords'], ['String']);
      if (data.hasOwnProperty('AppLogoUrl'))
        obj.AppLogoUrl = ApiClient.convertToType(data['AppLogoUrl'], 'String');
      if (data.hasOwnProperty('AutoPublish'))
        obj.AutoPublish = ApiClient.convertToType(data['AutoPublish'], 'Boolean');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], [MobileAppsSubmissionStatus]);
    }
    return obj;
  }

  /**
   * Mobile Apps Submission Id
   * @member {Number} MobileAppsSubmissionId
   */
  exports.prototype.MobileAppsSubmissionId = undefined;

  /**
   * App Name
   * @member {String} AppName
   */
  exports.prototype.AppName = undefined;

  /**
   * App Description
   * @member {String} AppDescription
   */
  exports.prototype.AppDescription = undefined;

  /**
   * App Description
   * @member {String} AppShortDescription
   */
  exports.prototype.AppShortDescription = undefined;

  /**
   * Keywords
   * @member {Array.<String>} Keywords
   */
  exports.prototype.Keywords = undefined;

  /**
   * Logo URL
   * @member {String} AppLogoUrl
   */
  exports.prototype.AppLogoUrl = undefined;

  /**
   * Publish automatically
   * @member {Boolean} AutoPublish
   */
  exports.prototype.AutoPublish = undefined;

  /**
   * Mobile App Status
   * @member {Array.<module:model/MobileAppsSubmissionStatus>} Status
   */
  exports.prototype.Status = undefined;


  return exports;

}));