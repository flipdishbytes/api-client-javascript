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
    root.Flipdish.SetPasswordWithPinModel = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SetPasswordWithPinModel model module.
   * @module model/SetPasswordWithPinModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SetPasswordWithPinModel</code>.
   * Set password with PIN model
   * @alias module:model/SetPasswordWithPinModel
   * @class
   * @param Pin {Number} PIN code (received via email)
   * @param NewPassword {String} New Password
   */
  var exports = function(Pin, NewPassword) {
    this.Pin = Pin;
    this.NewPassword = NewPassword;
  };

  /**
   * Constructs a <code>SetPasswordWithPinModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetPasswordWithPinModel} obj Optional instance to populate.
   * @return {module:model/SetPasswordWithPinModel} The populated <code>SetPasswordWithPinModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Pin'))
        obj.Pin = ApiClient.convertToType(data['Pin'], 'Number');
      if (data.hasOwnProperty('NewPassword'))
        obj.NewPassword = ApiClient.convertToType(data['NewPassword'], 'String');
      if (data.hasOwnProperty('RecaptchaToken'))
        obj.RecaptchaToken = ApiClient.convertToType(data['RecaptchaToken'], 'String');
    }
    return obj;
  }

  /**
   * PIN code (received via email)
   * @member {Number} Pin
   */
  exports.prototype.Pin = undefined;

  /**
   * New Password
   * @member {String} NewPassword
   */
  exports.prototype.NewPassword = undefined;

  /**
   * Google Recaptcha Token
   * @member {String} RecaptchaToken
   */
  exports.prototype.RecaptchaToken = undefined;


  return exports;

}));
