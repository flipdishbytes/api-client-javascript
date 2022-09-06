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
    root.Flipdish.PasswordResetModel = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PasswordResetModel model module.
   * @module model/PasswordResetModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PasswordResetModel</code>.
   * Password reset model
   * @alias module:model/PasswordResetModel
   * @class
   * @param Password {String} Password
   * @param PasswordConfirmation {String} Password confirmation
   */
  var exports = function(Password, PasswordConfirmation) {
    this.Password = Password;
    this.PasswordConfirmation = PasswordConfirmation;
  };

  /**
   * Constructs a <code>PasswordResetModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordResetModel} obj Optional instance to populate.
   * @return {module:model/PasswordResetModel} The populated <code>PasswordResetModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TokenId'))
        obj.TokenId = ApiClient.convertToType(data['TokenId'], 'String');
      if (data.hasOwnProperty('Email'))
        obj.Email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('Password'))
        obj.Password = ApiClient.convertToType(data['Password'], 'String');
      if (data.hasOwnProperty('PasswordConfirmation'))
        obj.PasswordConfirmation = ApiClient.convertToType(data['PasswordConfirmation'], 'String');
      if (data.hasOwnProperty('Token'))
        obj.Token = ApiClient.convertToType(data['Token'], 'String');
    }
    return obj;
  }

  /**
   * Token Id
   * @member {String} TokenId
   */
  exports.prototype.TokenId = undefined;

  /**
   * Email address
   * @member {String} Email
   */
  exports.prototype.Email = undefined;

  /**
   * Password
   * @member {String} Password
   */
  exports.prototype.Password = undefined;

  /**
   * Password confirmation
   * @member {String} PasswordConfirmation
   */
  exports.prototype.PasswordConfirmation = undefined;

  /**
   * Password reset token
   * @member {String} Token
   */
  exports.prototype.Token = undefined;


  return exports;

}));
