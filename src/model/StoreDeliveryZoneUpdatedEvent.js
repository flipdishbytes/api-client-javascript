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
    define(['ApiClient', 'model/UserEventInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserEventInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.StoreDeliveryZoneUpdatedEvent = factory(root.Flipdish.ApiClient, root.Flipdish.UserEventInfo);
  }
}(this, function(ApiClient, UserEventInfo) {
  'use strict';




  /**
   * The StoreDeliveryZoneUpdatedEvent model module.
   * @module model/StoreDeliveryZoneUpdatedEvent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StoreDeliveryZoneUpdatedEvent</code>.
   * Store Delivery Zone Updated Event
   * @alias module:model/StoreDeliveryZoneUpdatedEvent
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>StoreDeliveryZoneUpdatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreDeliveryZoneUpdatedEvent} obj Optional instance to populate.
   * @return {module:model/StoreDeliveryZoneUpdatedEvent} The populated <code>StoreDeliveryZoneUpdatedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EventName')) {
        obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
      }
      if (data.hasOwnProperty('StoreId')) {
        obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
      }
      if (data.hasOwnProperty('User')) {
        obj['User'] = UserEventInfo.constructFromObject(data['User']);
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
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
   * Store Id
   * @member {Number} StoreId
   */
  exports.prototype['StoreId'] = undefined;
  /**
   * Info User
   * @member {module:model/UserEventInfo} User
   */
  exports.prototype['User'] = undefined;
  /**
   * Description
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
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


