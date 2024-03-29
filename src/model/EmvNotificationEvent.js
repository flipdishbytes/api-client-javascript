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
    define(['ApiClient', 'model/Order'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Order'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.EmvNotificationEvent = factory(root.Flipdish.ApiClient, root.Flipdish.Order);
  }
}(this, function(ApiClient, Order) {
  'use strict';

  /**
   * The EmvNotificationEvent model module.
   * @module model/EmvNotificationEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EmvNotificationEvent</code>.
   * Order Terminal Notification
   * @alias module:model/EmvNotificationEvent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EmvNotificationEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmvNotificationEvent} obj Optional instance to populate.
   * @return {module:model/EmvNotificationEvent} The populated <code>EmvNotificationEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('EventName'))
        obj.EventName = ApiClient.convertToType(data['EventName'], 'String');
      if (data.hasOwnProperty('Notification'))
        obj.Notification = ApiClient.convertToType(data['Notification'], 'String');
      if (data.hasOwnProperty('Order'))
        obj.Order = Order.constructFromObject(data['Order']);
      if (data.hasOwnProperty('TerminalId'))
        obj.TerminalId = ApiClient.convertToType(data['TerminalId'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('ExpDate'))
        obj.ExpDate = ApiClient.convertToType(data['ExpDate'], 'String');
      if (data.hasOwnProperty('CardType'))
        obj.CardType = ApiClient.convertToType(data['CardType'], 'String');
      if (data.hasOwnProperty('PaymentMethod'))
        obj.PaymentMethod = ApiClient.convertToType(data['PaymentMethod'], 'String');
      if (data.hasOwnProperty('AccountNumber'))
        obj.AccountNumber = ApiClient.convertToType(data['AccountNumber'], 'String');
      if (data.hasOwnProperty('AuthCode'))
        obj.AuthCode = ApiClient.convertToType(data['AuthCode'], 'String');
      if (data.hasOwnProperty('ProviderMessage'))
        obj.ProviderMessage = ApiClient.convertToType(data['ProviderMessage'], 'String');
      if (data.hasOwnProperty('FlipdishEventId'))
        obj.FlipdishEventId = ApiClient.convertToType(data['FlipdishEventId'], 'String');
      if (data.hasOwnProperty('CreateTime'))
        obj.CreateTime = ApiClient.convertToType(data['CreateTime'], 'Date');
      if (data.hasOwnProperty('Position'))
        obj.Position = ApiClient.convertToType(data['Position'], 'Number');
      if (data.hasOwnProperty('AppId'))
        obj.AppId = ApiClient.convertToType(data['AppId'], 'String');
      if (data.hasOwnProperty('IpAddress'))
        obj.IpAddress = ApiClient.convertToType(data['IpAddress'], 'String');
    }
    return obj;
  }

  /**
   * The event name
   * @member {String} EventName
   */
  exports.prototype.EventName = undefined;

  /**
   * Notification Sent
   * @member {String} Notification
   */
  exports.prototype.Notification = undefined;

  /**
   * Order
   * @member {module:model/Order} Order
   */
  exports.prototype.Order = undefined;

  /**
   * TerminalId
   * @member {String} TerminalId
   */
  exports.prototype.TerminalId = undefined;

  /**
   * Description
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * Expirey Date
   * @member {String} ExpDate
   */
  exports.prototype.ExpDate = undefined;

  /**
   * Card Type
   * @member {String} CardType
   */
  exports.prototype.CardType = undefined;

  /**
   * Payment Method
   * @member {String} PaymentMethod
   */
  exports.prototype.PaymentMethod = undefined;

  /**
   * Masked Account Number
   * @member {String} AccountNumber
   */
  exports.prototype.AccountNumber = undefined;

  /**
   * Auth Code
   * @member {String} AuthCode
   */
  exports.prototype.AuthCode = undefined;

  /**
   * Payment Provider Message
   * @member {String} ProviderMessage
   */
  exports.prototype.ProviderMessage = undefined;

  /**
   * The identitfier of the event
   * @member {String} FlipdishEventId
   */
  exports.prototype.FlipdishEventId = undefined;

  /**
   * The time of creation of the event
   * @member {Date} CreateTime
   */
  exports.prototype.CreateTime = undefined;

  /**
   * Position
   * @member {Number} Position
   */
  exports.prototype.Position = undefined;

  /**
   * App id
   * @member {String} AppId
   */
  exports.prototype.AppId = undefined;

  /**
   * Ip Address
   * @member {String} IpAddress
   */
  exports.prototype.IpAddress = undefined;


  return exports;

}));
