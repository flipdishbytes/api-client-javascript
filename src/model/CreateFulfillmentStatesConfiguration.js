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
    define(['ApiClient', 'model/FulfillmentStatusConfigurationItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FulfillmentStatusConfigurationItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreateFulfillmentStatesConfiguration = factory(root.Flipdish.ApiClient, root.Flipdish.FulfillmentStatusConfigurationItem);
  }
}(this, function(ApiClient, FulfillmentStatusConfigurationItem) {
  'use strict';

  /**
   * The CreateFulfillmentStatesConfiguration model module.
   * @module model/CreateFulfillmentStatesConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFulfillmentStatesConfiguration</code>.
   * Create fulfillment states configuration
   * @alias module:model/CreateFulfillmentStatesConfiguration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFulfillmentStatesConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFulfillmentStatesConfiguration} obj Optional instance to populate.
   * @return {module:model/CreateFulfillmentStatesConfiguration} The populated <code>CreateFulfillmentStatesConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
      if (data.hasOwnProperty('StoreSelectorType'))
        obj.StoreSelectorType = ApiClient.convertToType(data['StoreSelectorType'], 'String');
      if (data.hasOwnProperty('States'))
        obj.States = ApiClient.convertToType(data['States'], [FulfillmentStatusConfigurationItem]);
      if (data.hasOwnProperty('AutomaticTransitionsEnabled'))
        obj.AutomaticTransitionsEnabled = ApiClient.convertToType(data['AutomaticTransitionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
    }
    return obj;
  }

  /**
   * Stores id's
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;

  /**
   * Store Selector Type
   * @member {module:model/CreateFulfillmentStatesConfiguration.StoreSelectorTypeEnum} StoreSelectorType
   */
  exports.prototype.StoreSelectorType = undefined;

  /**
   * Settings
   * @member {Array.<module:model/FulfillmentStatusConfigurationItem>} States
   */
  exports.prototype.States = undefined;

  /**
   * Enable automatic transitions
   * @member {Boolean} AutomaticTransitionsEnabled
   */
  exports.prototype.AutomaticTransitionsEnabled = undefined;

  /**
   * Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;



  /**
   * Allowed values for the <code>StoreSelectorType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StoreSelectorTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Single"
     * @const
     */
    Single: "Single",

    /**
     * value: "Multiple"
     * @const
     */
    Multiple: "Multiple"
  };

  return exports;

}));