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
    root.Flipdish.AppChannelAssignment = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppChannelAssignment model module.
   * @module model/AppChannelAssignment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppChannelAssignment</code>.
   * Describes a ChannelAssignment which is   when a AppId is assigned to a Sales Channel
   * @alias module:model/AppChannelAssignment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppChannelAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppChannelAssignment} obj Optional instance to populate.
   * @return {module:model/AppChannelAssignment} The populated <code>AppChannelAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ChannelId'))
        obj.ChannelId = ApiClient.convertToType(data['ChannelId'], 'Number');
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
    }
    return obj;
  }

  /**
   * Id of the channel on the assignment
   * @member {Number} ChannelId
   */
  exports.prototype.ChannelId = undefined;

  /**
   * AppId of the assignment
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;


  return exports;

}));
