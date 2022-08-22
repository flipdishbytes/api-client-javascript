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
    root.Flipdish.UpdateMobileAppsSubmissionStatus = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateMobileAppsSubmissionStatus model module.
   * @module model/UpdateMobileAppsSubmissionStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateMobileAppsSubmissionStatus</code>.
   * Update Mobile Apps Status
   * @alias module:model/UpdateMobileAppsSubmissionStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateMobileAppsSubmissionStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMobileAppsSubmissionStatus} obj Optional instance to populate.
   * @return {module:model/UpdateMobileAppsSubmissionStatus} The populated <code>UpdateMobileAppsSubmissionStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MobileAppsSubmissionStatusId'))
        obj.MobileAppsSubmissionStatusId = ApiClient.convertToType(data['MobileAppsSubmissionStatusId'], 'Number');
      if (data.hasOwnProperty('Type'))
        obj.Type = ApiClient.convertToType(data['Type'], 'String');
      if (data.hasOwnProperty('AppStatus'))
        obj.AppStatus = ApiClient.convertToType(data['AppStatus'], 'String');
      if (data.hasOwnProperty('UpdateStatus'))
        obj.UpdateStatus = ApiClient.convertToType(data['UpdateStatus'], 'String');
      if (data.hasOwnProperty('LastUpdateStatusTime'))
        obj.LastUpdateStatusTime = ApiClient.convertToType(data['LastUpdateStatusTime'], 'Date');
      if (data.hasOwnProperty('Notes'))
        obj.Notes = ApiClient.convertToType(data['Notes'], 'String');
    }
    return obj;
  }

  /**
   * Mobile Apps Submission Status Id
   * @member {Number} MobileAppsSubmissionStatusId
   */
  exports.prototype.MobileAppsSubmissionStatusId = undefined;

  /**
   * Mobile Type
   * @member {module:model/UpdateMobileAppsSubmissionStatus.TypeEnum} Type
   */
  exports.prototype.Type = undefined;

  /**
   * Mobile App Status
   * @member {module:model/UpdateMobileAppsSubmissionStatus.AppStatusEnum} AppStatus
   */
  exports.prototype.AppStatus = undefined;

  /**
   * Mobile App Status
   * @member {module:model/UpdateMobileAppsSubmissionStatus.UpdateStatusEnum} UpdateStatus
   */
  exports.prototype.UpdateStatus = undefined;

  /**
   * Mobile LastUpdateStatusTime
   * @member {Date} LastUpdateStatusTime
   */
  exports.prototype.LastUpdateStatusTime = undefined;

  /**
   * Mobile Notes
   * @member {String} Notes
   */
  exports.prototype.Notes = undefined;



  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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


  /**
   * Allowed values for the <code>AppStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppStatusEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Published"
     * @const
     */
    Published: "Published",

    /**
     * value: "Unpublished"
     * @const
     */
    Unpublished: "Unpublished"
  };


  /**
   * Allowed values for the <code>UpdateStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UpdateStatusEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Submitted"
     * @const
     */
    Submitted: "Submitted",

    /**
     * value: "InReview"
     * @const
     */
    InReview: "InReview",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "Approved"
     * @const
     */
    Approved: "Approved",

    /**
     * value: "Published"
     * @const
     */
    Published: "Published"
  };

  return exports;

}));
