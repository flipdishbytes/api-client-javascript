/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.DashboardEmbed = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DashboardEmbed model module.
   * @module model/DashboardEmbed
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DashboardEmbed</code>.
   * SSO Embed URL Information
   * @alias module:model/DashboardEmbed
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DashboardEmbed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardEmbed} obj Optional instance to populate.
   * @return {module:model/DashboardEmbed} The populated <code>DashboardEmbed</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EmbedUrl'))
        obj.EmbedUrl = ApiClient.convertToType(data['EmbedUrl'], 'String');
    }
    return obj;
  }

  /**
   * SSO URL generated by Flipdish to embed Looker dashboard
   * @member {String} EmbedUrl
   */
  exports.prototype.EmbedUrl = undefined;


  return exports;

}));
