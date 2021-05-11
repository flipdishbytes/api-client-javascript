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
    root.Flipdish.MenuStoreNames = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuStoreNames model module.
   * @module model/MenuStoreNames
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuStoreNames</code>.
   * Menu Store Names
   * @alias module:model/MenuStoreNames
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuStoreNames</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuStoreNames} obj Optional instance to populate.
   * @return {module:model/MenuStoreNames} The populated <code>MenuStoreNames</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreNames'))
        obj.StoreNames = ApiClient.convertToType(data['StoreNames'], ['String']);
    }
    return obj;
  }

  /**
   * Names of stores associated with menu
   * @member {Array.<String>} StoreNames
   */
  exports.prototype.StoreNames = undefined;


  return exports;

}));
