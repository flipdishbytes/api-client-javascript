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
    root.Flipdish.OrderDeliveryInformation = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderDeliveryInformation model module.
   * @module model/OrderDeliveryInformation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderDeliveryInformation</code>.
   * Order Delivery Status Information
   * @alias module:model/OrderDeliveryInformation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderDeliveryInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderDeliveryInformation} obj Optional instance to populate.
   * @return {module:model/OrderDeliveryInformation} The populated <code>OrderDeliveryInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('ExternalReferenceId'))
        obj.ExternalReferenceId = ApiClient.convertToType(data['ExternalReferenceId'], 'String');
      if (data.hasOwnProperty('TrackUrl'))
        obj.TrackUrl = ApiClient.convertToType(data['TrackUrl'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.Status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('DeliveryStatusNotes'))
        obj.DeliveryStatusNotes = ApiClient.convertToType(data['DeliveryStatusNotes'], 'String');
      if (data.hasOwnProperty('ErrorMessage'))
        obj.ErrorMessage = ApiClient.convertToType(data['ErrorMessage'], 'String');
      if (data.hasOwnProperty('IntegrationCode'))
        obj.IntegrationCode = ApiClient.convertToType(data['IntegrationCode'], 'String');
      if (data.hasOwnProperty('IntegrationName'))
        obj.IntegrationName = ApiClient.convertToType(data['IntegrationName'], 'String');
    }
    return obj;
  }

  /**
   * Order Id
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * External Reference Id
   * @member {String} ExternalReferenceId
   */
  exports.prototype.ExternalReferenceId = undefined;

  /**
   * Tracking Url
   * @member {String} TrackUrl
   */
  exports.prototype.TrackUrl = undefined;

  /**
   * Delivery Status
   * @member {module:model/OrderDeliveryInformation.StatusEnum} Status
   */
  exports.prototype.Status = undefined;

  /**
   * Delivery Status Notes
   * @member {String} DeliveryStatusNotes
   */
  exports.prototype.DeliveryStatusNotes = undefined;

  /**
   * Error Message
   * @member {String} ErrorMessage
   */
  exports.prototype.ErrorMessage = undefined;

  /**
   * Integration Code
   * @member {String} IntegrationCode
   */
  exports.prototype.IntegrationCode = undefined;

  /**
   * Integration Name
   * @member {String} IntegrationName
   */
  exports.prototype.IntegrationName = undefined;



  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Unassigned"
     * @const
     */
    Unassigned: "Unassigned",

    /**
     * value: "Unaccepted"
     * @const
     */
    Unaccepted: "Unaccepted",

    /**
     * value: "Accepted"
     * @const
     */
    Accepted: "Accepted",

    /**
     * value: "Carrying"
     * @const
     */
    Carrying: "Carrying",

    /**
     * value: "OnTheWay"
     * @const
     */
    OnTheWay: "OnTheWay",

    /**
     * value: "ArrivedAtLocation"
     * @const
     */
    ArrivedAtLocation: "ArrivedAtLocation",

    /**
     * value: "Delivered"
     * @const
     */
    Delivered: "Delivered",

    /**
     * value: "CannotDeliver"
     * @const
     */
    CannotDeliver: "CannotDeliver"
  };

  return exports;

}));
