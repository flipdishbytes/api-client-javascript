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
    define(['ApiClient', 'model/AppStoreAppConfigurationSummary', 'model/AppStoreAppSubscriptionSummary', 'model/SubscriptionProductPriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppStoreAppConfigurationSummary'), require('./AppStoreAppSubscriptionSummary'), require('./SubscriptionProductPriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.AppStoreAppConfigurationsWithSubscriptions = factory(root.Flipdish.ApiClient, root.Flipdish.AppStoreAppConfigurationSummary, root.Flipdish.AppStoreAppSubscriptionSummary, root.Flipdish.SubscriptionProductPriceInfo);
  }
}(this, function(ApiClient, AppStoreAppConfigurationSummary, AppStoreAppSubscriptionSummary, SubscriptionProductPriceInfo) {
  'use strict';

  /**
   * The AppStoreAppConfigurationsWithSubscriptions model module.
   * @module model/AppStoreAppConfigurationsWithSubscriptions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AppStoreAppConfigurationsWithSubscriptions</code>.
   * App store configurations for a given AppId
   * @alias module:model/AppStoreAppConfigurationsWithSubscriptions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AppStoreAppConfigurationsWithSubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppStoreAppConfigurationsWithSubscriptions} obj Optional instance to populate.
   * @return {module:model/AppStoreAppConfigurationsWithSubscriptions} The populated <code>AppStoreAppConfigurationsWithSubscriptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Subscription'))
        obj.Subscription = AppStoreAppSubscriptionSummary.constructFromObject(data['Subscription']);
      if (data.hasOwnProperty('Configurations'))
        obj.Configurations = ApiClient.convertToType(data['Configurations'], [AppStoreAppConfigurationSummary]);
      if (data.hasOwnProperty('Prices'))
        obj.Prices = ApiClient.convertToType(data['Prices'], [SubscriptionProductPriceInfo]);
    }
    return obj;
  }

  /**
   * Subscription information for the AppId for the AppStoreApp
   * @member {module:model/AppStoreAppSubscriptionSummary} Subscription
   */
  exports.prototype.Subscription = undefined;

  /**
   * Configurations for the AppId for the AppStoreApp
   * @member {Array.<module:model/AppStoreAppConfigurationSummary>} Configurations
   */
  exports.prototype.Configurations = undefined;

  /**
   * Prices
   * @member {Array.<module:model/SubscriptionProductPriceInfo>} Prices
   */
  exports.prototype.Prices = undefined;


  return exports;

}));
