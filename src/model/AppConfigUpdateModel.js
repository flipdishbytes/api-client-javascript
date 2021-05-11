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
    root.Flipdish.AppConfigUpdateModel = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppConfigUpdateModel model module.
   * @module model/AppConfigUpdateModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppConfigUpdateModel</code>.
   * Application configuration
   * @alias module:model/AppConfigUpdateModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppConfigUpdateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppConfigUpdateModel} obj Optional instance to populate.
   * @return {module:model/AppConfigUpdateModel} The populated <code>AppConfigUpdateModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('HostName'))
        obj.HostName = ApiClient.convertToType(data['HostName'], 'String');
      if (data.hasOwnProperty('MainColor'))
        obj.MainColor = ApiClient.convertToType(data['MainColor'], 'String');
      if (data.hasOwnProperty('ApplicationCategory'))
        obj.ApplicationCategory = ApiClient.convertToType(data['ApplicationCategory'], 'String');
      if (data.hasOwnProperty('IsPanaceaEnabled'))
        obj.IsPanaceaEnabled = ApiClient.convertToType(data['IsPanaceaEnabled'], 'Boolean');
      if (data.hasOwnProperty('CookieConsentPromptEnabled'))
        obj.CookieConsentPromptEnabled = ApiClient.convertToType(data['CookieConsentPromptEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * App name.   This is used in various places on the Apple App Store, Google Play Store, mobile apps and websites.
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * HostName on which the web-ordering system is allowed to be hosted or that a Flipdish website is hosted on.
   * @member {String} HostName
   */
  exports.prototype.HostName = undefined;

  /**
   * Main color of the web / Android / iOS applications
   * @member {String} MainColor
   */
  exports.prototype.MainColor = undefined;

  /**
   * Application Category
   * @member {module:model/AppConfigUpdateModel.ApplicationCategoryEnum} ApplicationCategory
   */
  exports.prototype.ApplicationCategory = undefined;

  /**
   * Panacea is the term used for websites that are hosted on the my.flipdish.com domain. This value is true when the App's website is hosted on this domain.  The aternative to using Panacea websites is to use a custom domain.
   * @member {Boolean} IsPanaceaEnabled
   */
  exports.prototype.IsPanaceaEnabled = undefined;

  /**
   * Cookie Consent Prompt Enabled
   * @member {Boolean} CookieConsentPromptEnabled
   */
  exports.prototype.CookieConsentPromptEnabled = undefined;



  /**
   * Allowed values for the <code>ApplicationCategory</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationCategoryEnum = {
    /**
     * value: "Restaurant"
     * @const
     */
    Restaurant: "Restaurant",

    /**
     * value: "Cafe"
     * @const
     */
    Cafe: "Cafe",

    /**
     * value: "Convenience"
     * @const
     */
    Convenience: "Convenience"
  };

  return exports;

}));