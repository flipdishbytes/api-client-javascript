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
    root.Flipdish.WebhookLog = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebhookLog model module.
   * @module model/WebhookLog
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebhookLog</code>.
   * Webhook log
   * @alias module:model/WebhookLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookLog} obj Optional instance to populate.
   * @return {module:model/WebhookLog} The populated <code>WebhookLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('WebhookSubscriptionOwnerUserId'))
        obj.WebhookSubscriptionOwnerUserId = ApiClient.convertToType(data['WebhookSubscriptionOwnerUserId'], 'Number');
      if (data.hasOwnProperty('EventCreated'))
        obj.EventCreated = ApiClient.convertToType(data['EventCreated'], 'String');
      if (data.hasOwnProperty('WebhookTriggered'))
        obj.WebhookTriggered = ApiClient.convertToType(data['WebhookTriggered'], 'String');
      if (data.hasOwnProperty('WebhookEventName'))
        obj.WebhookEventName = ApiClient.convertToType(data['WebhookEventName'], 'String');
      if (data.hasOwnProperty('WebhookSubscriptionCallbackUrl'))
        obj.WebhookSubscriptionCallbackUrl = ApiClient.convertToType(data['WebhookSubscriptionCallbackUrl'], 'String');
      if (data.hasOwnProperty('HttpResponseStatusCode'))
        obj.HttpResponseStatusCode = ApiClient.convertToType(data['HttpResponseStatusCode'], 'String');
      if (data.hasOwnProperty('HttpResponseStatus'))
        obj.HttpResponseStatus = ApiClient.convertToType(data['HttpResponseStatus'], 'String');
      if (data.hasOwnProperty('RequestHeaders'))
        obj.RequestHeaders = ApiClient.convertToType(data['RequestHeaders'], 'String');
      if (data.hasOwnProperty('RequestBody'))
        obj.RequestBody = ApiClient.convertToType(data['RequestBody'], 'String');
      if (data.hasOwnProperty('ResponseHeaders'))
        obj.ResponseHeaders = ApiClient.convertToType(data['ResponseHeaders'], 'String');
      if (data.hasOwnProperty('ResponseBody'))
        obj.ResponseBody = ApiClient.convertToType(data['ResponseBody'], 'String');
      if (data.hasOwnProperty('Duration'))
        obj.Duration = ApiClient.convertToType(data['Duration'], 'String');
      if (data.hasOwnProperty('RetryCount'))
        obj.RetryCount = ApiClient.convertToType(data['RetryCount'], 'Number');
      if (data.hasOwnProperty('FlipdishWebhookId'))
        obj.FlipdishWebhookId = ApiClient.convertToType(data['FlipdishWebhookId'], 'String');
      if (data.hasOwnProperty('Version'))
        obj.Version = ApiClient.convertToType(data['Version'], 'String');
    }
    return obj;
  }

  /**
   * Webhook subscription owner user identifier
   * @member {Number} WebhookSubscriptionOwnerUserId
   */
  exports.prototype.WebhookSubscriptionOwnerUserId = undefined;

  /**
   * Event created
   * @member {String} EventCreated
   */
  exports.prototype.EventCreated = undefined;

  /**
   * Webhook triggered
   * @member {String} WebhookTriggered
   */
  exports.prototype.WebhookTriggered = undefined;

  /**
   * Webhook event name
   * @member {String} WebhookEventName
   */
  exports.prototype.WebhookEventName = undefined;

  /**
   * Webhook subscription callback url
   * @member {String} WebhookSubscriptionCallbackUrl
   */
  exports.prototype.WebhookSubscriptionCallbackUrl = undefined;

  /**
   * Received HTTP repsonse status HTTP code
   * @member {String} HttpResponseStatusCode
   */
  exports.prototype.HttpResponseStatusCode = undefined;

  /**
   * Received HTTP repsonse status
   * @member {String} HttpResponseStatus
   */
  exports.prototype.HttpResponseStatus = undefined;

  /**
   * Request headers
   * @member {String} RequestHeaders
   */
  exports.prototype.RequestHeaders = undefined;

  /**
   * Request body
   * @member {String} RequestBody
   */
  exports.prototype.RequestBody = undefined;

  /**
   * Received response headers
   * @member {String} ResponseHeaders
   */
  exports.prototype.ResponseHeaders = undefined;

  /**
   * Received response body
   * @member {String} ResponseBody
   */
  exports.prototype.ResponseBody = undefined;

  /**
   * Duration of HTTP request
   * @member {String} Duration
   */
  exports.prototype.Duration = undefined;

  /**
   * Retry count
   * @member {Number} RetryCount
   */
  exports.prototype.RetryCount = undefined;

  /**
   * Flipdish webhook identifier
   * @member {String} FlipdishWebhookId
   */
  exports.prototype.FlipdishWebhookId = undefined;

  /**
   * Flipdish webhook version
   * @member {String} Version
   */
  exports.prototype.Version = undefined;


  return exports;

}));
