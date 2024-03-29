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
    root.Flipdish.TipConfiguration = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipConfiguration model module.
   * @module model/TipConfiguration
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TipConfiguration</code>.
   * Describes the configuration of tipping
   * @alias module:model/TipConfiguration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TipConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipConfiguration} obj Optional instance to populate.
   * @return {module:model/TipConfiguration} The populated <code>TipConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('IsEnabled'))
        obj.IsEnabled = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
      if (data.hasOwnProperty('AllowCustomTips'))
        obj.AllowCustomTips = ApiClient.convertToType(data['AllowCustomTips'], 'Boolean');
      if (data.hasOwnProperty('AllowRoundUp'))
        obj.AllowRoundUp = ApiClient.convertToType(data['AllowRoundUp'], 'Boolean');
      if (data.hasOwnProperty('AllowEmojis'))
        obj.AllowEmojis = ApiClient.convertToType(data['AllowEmojis'], 'Boolean');
      if (data.hasOwnProperty('Percentages'))
        obj.Percentages = ApiClient.convertToType(data['Percentages'], ['Number']);
      if (data.hasOwnProperty('DefaultPercentage'))
        obj.DefaultPercentage = ApiClient.convertToType(data['DefaultPercentage'], 'Number');
    }
    return obj;
  }

  /**
   * Configuration is for this StoreId
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Are tips enabled?
   * @member {Boolean} IsEnabled
   */
  exports.prototype.IsEnabled = undefined;

  /**
   * Are custom tips allowed?
   * @member {Boolean} AllowCustomTips
   */
  exports.prototype.AllowCustomTips = undefined;

  /**
   * Is round up allowed?
   * @member {Boolean} AllowRoundUp
   */
  exports.prototype.AllowRoundUp = undefined;

  /**
   * Are emojis allowed?
   * @member {Boolean} AllowEmojis
   */
  exports.prototype.AllowEmojis = undefined;

  /**
   * Ordered list of tip breakpoints (smallest -&gt; largest)
   * @member {Array.<Number>} Percentages
   */
  exports.prototype.Percentages = undefined;

  /**
   * Defines a default percentage, it must be in the list of Percentages
   * @member {Number} DefaultPercentage
   */
  exports.prototype.DefaultPercentage = undefined;


  return exports;

}));
