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
    define(['ApiClient', 'model/FlipdishEventBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FlipdishEventBase'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.WebhookEventSample = factory(root.Flipdish.ApiClient, root.Flipdish.FlipdishEventBase);
  }
}(this, function(ApiClient, FlipdishEventBase) {
  'use strict';

  /**
   * The WebhookEventSample model module.
   * @module model/WebhookEventSample
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WebhookEventSample</code>.
   * Sample payload of a webhook event
   * @alias module:model/WebhookEventSample
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookEventSample</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookEventSample} obj Optional instance to populate.
   * @return {module:model/WebhookEventSample} The populated <code>WebhookEventSample</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Type'))
        obj.Type = ApiClient.convertToType(data['Type'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.CreateTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('Body'))
        obj.Body = FlipdishEventBase.constructFromObject(data['Body']);
    }
    return obj;
  }

  /**
   * Event name
   * @member {String} Type
   */
  exports.prototype.Type = undefined;

  /**
   * Sample event creation date and time
   * @member {Date} CreateTime
   */
  exports.prototype.CreateTime = undefined;

  /**
   * Sample event body
   * @member {module:model/FlipdishEventBase} Body
   */
  exports.prototype.Body = undefined;


  return exports;

}));