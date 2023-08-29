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
    define(['ApiClient', 'model/NutritionInfoMenuItem', 'model/NutritionInfoMenuOptionSetItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NutritionInfoMenuItem'), require('./NutritionInfoMenuOptionSetItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.NutritionInfo = factory(root.Flipdish.ApiClient, root.Flipdish.NutritionInfoMenuItem, root.Flipdish.NutritionInfoMenuOptionSetItem);
  }
}(this, function(ApiClient, NutritionInfoMenuItem, NutritionInfoMenuOptionSetItem) {
  'use strict';

  /**
   * The NutritionInfo model module.
   * @module model/NutritionInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NutritionInfo</code>.
   * Menu Nutrition Information
   * @alias module:model/NutritionInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NutritionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NutritionInfo} obj Optional instance to populate.
   * @return {module:model/NutritionInfo} The populated <code>NutritionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Version'))
        obj.Version = ApiClient.convertToType(data['Version'], 'String');
      if (data.hasOwnProperty('MenuItems'))
        obj.MenuItems = ApiClient.convertToType(data['MenuItems'], [NutritionInfoMenuItem]);
      if (data.hasOwnProperty('MenuItemOptionSetItems'))
        obj.MenuItemOptionSetItems = ApiClient.convertToType(data['MenuItemOptionSetItems'], [NutritionInfoMenuOptionSetItem]);
    }
    return obj;
  }

  /**
   * Version of the nutrition information model
   * @member {String} Version
   */
  exports.prototype.Version = undefined;

  /**
   * List of menu item nutrition infos
   * @member {Array.<module:model/NutritionInfoMenuItem>} MenuItems
   */
  exports.prototype.MenuItems = undefined;

  /**
   * List of menu item option set nutrition infos
   * @member {Array.<module:model/NutritionInfoMenuOptionSetItem>} MenuItemOptionSetItems
   */
  exports.prototype.MenuItemOptionSetItems = undefined;


  return exports;

}));
