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
    root.Flipdish.MobileAppsSubmissionStatus = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MobileAppsSubmissionStatus model module.
   * @module model/MobileAppsSubmissionStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MobileAppsSubmissionStatus</code>.
   * Mobile Apps Status
   * @alias module:model/MobileAppsSubmissionStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MobileAppsSubmissionStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileAppsSubmissionStatus} obj Optional instance to populate.
   * @return {module:model/MobileAppsSubmissionStatus} The populated <code>MobileAppsSubmissionStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
    }
    return obj;
  }

  /**
   * Mobile App Status
   * @member {module:model/MobileAppsSubmissionStatus.StatusEnum} Status
   */
  exports.prototype.Status = undefined;



  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Submitted"
     * @const
     */
    Submitted: "Submitted",

    /**
     * value: "AppStoreReview"
     * @const
     */
    AppStoreReview: "AppStoreReview",

    /**
     * value: "Sucessfull"
     * @const
     */
    Sucessfull: "Sucessfull",

    /**
     * value: "Unsuccesful"
     * @const
     */
    Unsuccesful: "Unsuccesful"
  };

  return exports;

}));
