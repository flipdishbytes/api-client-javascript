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
    root.Flipdish.OAuthApp = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OAuthApp model module.
   * @module model/OAuthApp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OAuthApp</code>.
   * Oauth client (also knowns as 'app')
   * @alias module:model/OAuthApp
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OAuthApp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuthApp} obj Optional instance to populate.
   * @return {module:model/OAuthApp} The populated <code>OAuthApp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OauthAppId'))
        obj.OauthAppId = ApiClient.convertToType(data['OauthAppId'], 'String');
      if (data.hasOwnProperty('OauthAppName'))
        obj.OauthAppName = ApiClient.convertToType(data['OauthAppName'], 'String');
      if (data.hasOwnProperty('OwnerUserId'))
        obj.OwnerUserId = ApiClient.convertToType(data['OwnerUserId'], 'Number');
      if (data.hasOwnProperty('LogoUri'))
        obj.LogoUri = ApiClient.convertToType(data['LogoUri'], 'String');
      if (data.hasOwnProperty('Flow'))
        obj.Flow = ApiClient.convertToType(data['Flow'], 'String');
      if (data.hasOwnProperty('RefreshTokenUsage'))
        obj.RefreshTokenUsage = ApiClient.convertToType(data['RefreshTokenUsage'], 'String');
      if (data.hasOwnProperty('AccessTokenLifetime'))
        obj.AccessTokenLifetime = ApiClient.convertToType(data['AccessTokenLifetime'], 'Number');
      if (data.hasOwnProperty('AbsoluteRefreshTokenLifetime'))
        obj.AbsoluteRefreshTokenLifetime = ApiClient.convertToType(data['AbsoluteRefreshTokenLifetime'], 'Number');
    }
    return obj;
  }

  /**
   * OAuth App Identifier
   * @member {String} OauthAppId
   */
  exports.prototype.OauthAppId = undefined;

  /**
   * OAuth App Name
   * @member {String} OauthAppName
   */
  exports.prototype.OauthAppName = undefined;

  /**
   * OAuth App owner user identifier
   * @member {Number} OwnerUserId
   */
  exports.prototype.OwnerUserId = undefined;

  /**
   * OAuth App logo uri
   * @member {String} LogoUri
   */
  exports.prototype.LogoUri = undefined;

  /**
   * Supported OpenID Connect flows
   * @member {module:model/OAuthApp.FlowEnum} Flow
   */
  exports.prototype.Flow = undefined;

  /**
   * ReUse: the refresh token handle will stay the same when refreshing tokens   OneTime: the refresh token handle will be updated when refreshing tokens
   * @member {module:model/OAuthApp.RefreshTokenUsageEnum} RefreshTokenUsage
   */
  exports.prototype.RefreshTokenUsage = undefined;

  /**
   * Timem it takes for the IdentityToken to expire in seconds
   * @member {Number} AccessTokenLifetime
   */
  exports.prototype.AccessTokenLifetime = undefined;

  /**
   * Maximum lifetime of a refresh token in seconds
   * @member {Number} AbsoluteRefreshTokenLifetime
   */
  exports.prototype.AbsoluteRefreshTokenLifetime = undefined;



  /**
   * Allowed values for the <code>Flow</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FlowEnum = {
    /**
     * value: "AuthorizationCode"
     * @const
     */
    AuthorizationCode: "AuthorizationCode",

    /**
     * value: "Implicit"
     * @const
     */
    Implicit: "Implicit",

    /**
     * value: "Hybrid"
     * @const
     */
    Hybrid: "Hybrid",

    /**
     * value: "ClientCredentials"
     * @const
     */
    ClientCredentials: "ClientCredentials"
  };


  /**
   * Allowed values for the <code>RefreshTokenUsage</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RefreshTokenUsageEnum = {
    /**
     * value: "ReUse"
     * @const
     */
    ReUse: "ReUse",

    /**
     * value: "OneTimeOnly"
     * @const
     */
    OneTimeOnly: "OneTimeOnly"
  };

  return exports;

}));
