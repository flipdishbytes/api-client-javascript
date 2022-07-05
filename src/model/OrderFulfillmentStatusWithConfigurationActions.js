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
    define(['ApiClient', 'model/FulfillentStatusActionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FulfillentStatusActionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.OrderFulfillmentStatusWithConfigurationActions = factory(root.Flipdish.ApiClient, root.Flipdish.FulfillentStatusActionItem);
  }
}(this, function(ApiClient, FulfillentStatusActionItem) {
  'use strict';

  /**
   * The OrderFulfillmentStatusWithConfigurationActions model module.
   * @module model/OrderFulfillmentStatusWithConfigurationActions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderFulfillmentStatusWithConfigurationActions</code>.
   * Order Fulfillment status with configured next actions
   * @alias module:model/OrderFulfillmentStatusWithConfigurationActions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderFulfillmentStatusWithConfigurationActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderFulfillmentStatusWithConfigurationActions} obj Optional instance to populate.
   * @return {module:model/OrderFulfillmentStatusWithConfigurationActions} The populated <code>OrderFulfillmentStatusWithConfigurationActions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('DefaultNextStatus'))
        obj.DefaultNextStatus = ApiClient.convertToType(data['DefaultNextStatus'], 'String');
      if (data.hasOwnProperty('NextStatuses'))
        obj.NextStatuses = ApiClient.convertToType(data['NextStatuses'], [FulfillentStatusActionItem]);
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('StatusId'))
        obj.StatusId = ApiClient.convertToType(data['StatusId'], 'String');
      if (data.hasOwnProperty('StatusName'))
        obj.StatusName = ApiClient.convertToType(data['StatusName'], 'String');
      if (data.hasOwnProperty('Icon'))
        obj.Icon = ApiClient.convertToType(data['Icon'], 'String');
    }
    return obj;
  }

  /**
   * Default next status (id)
   * @member {String} DefaultNextStatus
   */
  exports.prototype.DefaultNextStatus = undefined;

  /**
   * Possible next statuses
   * @member {Array.<module:model/FulfillentStatusActionItem>} NextStatuses
   */
  exports.prototype.NextStatuses = undefined;

  /**
   * Order Id
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * Fulfillment Status Id
   * @member {String} StatusId
   */
  exports.prototype.StatusId = undefined;

  /**
   * Fulfillment Status Name
   * @member {String} StatusName
   */
  exports.prototype.StatusName = undefined;

  /**
   * Status Icon
   * @member {String} Icon
   */
  exports.prototype.Icon = undefined;


  return exports;

}));
