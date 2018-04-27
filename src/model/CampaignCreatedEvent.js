/**
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.Flipdish.CampaignCreatedEvent = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignCreatedEvent model module.
   * @module model/CampaignCreatedEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CampaignCreatedEvent</code>.
   * 
   * @alias module:model/CampaignCreatedEvent
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CampaignCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreatedEvent} obj Optional instance to populate.
   * @return {module:model/CampaignCreatedEvent} The populated <code>CampaignCreatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EventName')) {
        obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
      }
      if (data.hasOwnProperty('CampaignId')) {
        obj['CampaignId'] = ApiClient.convertToType(data['CampaignId'], 'Number');
      }
      if (data.hasOwnProperty('VirtualRestaurantName')) {
        obj['VirtualRestaurantName'] = ApiClient.convertToType(data['VirtualRestaurantName'], 'String');
      }
      if (data.hasOwnProperty('VirtualRestaurantId')) {
        obj['VirtualRestaurantId'] = ApiClient.convertToType(data['VirtualRestaurantId'], 'Number');
      }
      if (data.hasOwnProperty('FlipdishEventId')) {
        obj['FlipdishEventId'] = ApiClient.convertToType(data['FlipdishEventId'], 'String');
      }
      if (data.hasOwnProperty('CreateTime')) {
        obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
      }
      if (data.hasOwnProperty('Position')) {
        obj['Position'] = ApiClient.convertToType(data['Position'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The event name
   * @member {String} EventName
   */
  exports.prototype['EventName'] = undefined;
  /**
   * 
   * @member {Number} CampaignId
   */
  exports.prototype['CampaignId'] = undefined;
  /**
   * 
   * @member {String} VirtualRestaurantName
   */
  exports.prototype['VirtualRestaurantName'] = undefined;
  /**
   * 
   * @member {Number} VirtualRestaurantId
   */
  exports.prototype['VirtualRestaurantId'] = undefined;
  /**
   * The identitfier of the event
   * @member {String} FlipdishEventId
   */
  exports.prototype['FlipdishEventId'] = undefined;
  /**
   * The time of creation of the event
   * @member {Date} CreateTime
   */
  exports.prototype['CreateTime'] = undefined;
  /**
   * Position
   * @member {Number} Position
   */
  exports.prototype['Position'] = undefined;



  return exports;
}));


