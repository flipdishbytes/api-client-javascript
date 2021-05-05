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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.PushNotificationRequest = factory(root.FlipdishOpenApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PushNotificationRequest model module.
   * @module model/PushNotificationRequest
   * @version v1.0
   */

  /**
   * Constructs a new <code>PushNotificationRequest</code>.
   * Push Notification Details
   * @alias module:model/PushNotificationRequest
   * @class
   * @param message {String} Message of the notification
   */
  var exports = function(message) {
    this.message = message;
  };

  /**
   * Constructs a <code>PushNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushNotificationRequest} obj Optional instance to populate.
   * @return {module:model/PushNotificationRequest} The populated <code>PushNotificationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ScheduledTime'))
        obj.scheduledTime = ApiClient.convertToType(data['ScheduledTime'], 'Date');
      if (data.hasOwnProperty('Title'))
        obj.title = ApiClient.convertToType(data['Title'], 'String');
      if (data.hasOwnProperty('Message'))
        obj.message = ApiClient.convertToType(data['Message'], 'String');
    }
    return obj;
  }

  /**
   * UTC Time at which to send the push notification
   * @member {Date} scheduledTime
   */
  exports.prototype.scheduledTime = undefined;

  /**
   * Title of the notification
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * Message of the notification
   * @member {String} message
   */
  exports.prototype.message = undefined;


  return exports;

}));
