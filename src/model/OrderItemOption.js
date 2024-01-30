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
    root.Flipdish.OrderItemOption = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderItemOption model module.
   * @module model/OrderItemOption
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderItemOption</code>.
   * Order item option
   * @alias module:model/OrderItemOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderItemOption} obj Optional instance to populate.
   * @return {module:model/OrderItemOption} The populated <code>OrderItemOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Metadata'))
        obj.Metadata = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
      if (data.hasOwnProperty('MenuItemOptionPublicId'))
        obj.MenuItemOptionPublicId = ApiClient.convertToType(data['MenuItemOptionPublicId'], 'String');
      if (data.hasOwnProperty('MenuItemOptionId'))
        obj.MenuItemOptionId = ApiClient.convertToType(data['MenuItemOptionId'], 'Number');
      if (data.hasOwnProperty('IsMasterOptionSetItem'))
        obj.IsMasterOptionSetItem = ApiClient.convertToType(data['IsMasterOptionSetItem'], 'Boolean');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.Price = ApiClient.convertToType(data['Price'], 'Number');
      if (data.hasOwnProperty('MenuItemOptionDisplayOrder'))
        obj.MenuItemOptionDisplayOrder = ApiClient.convertToType(data['MenuItemOptionDisplayOrder'], 'Number');
      if (data.hasOwnProperty('MenuItemOptionSetDisplayOrder'))
        obj.MenuItemOptionSetDisplayOrder = ApiClient.convertToType(data['MenuItemOptionSetDisplayOrder'], 'Number');
      if (data.hasOwnProperty('DepositReturnFee'))
        obj.DepositReturnFee = ApiClient.convertToType(data['DepositReturnFee'], 'Number');
    }
    return obj;
  }

  /**
   * Metadata
   * @member {Object.<String, String>} Metadata
   */
  exports.prototype.Metadata = undefined;

  /**
   * Public id of the Menu Item Option
   * @member {String} MenuItemOptionPublicId
   */
  exports.prototype.MenuItemOptionPublicId = undefined;

  /**
   * Menu item option identifier
   * @member {Number} MenuItemOptionId
   */
  exports.prototype.MenuItemOptionId = undefined;

  /**
   * Is master option set item
   * @member {Boolean} IsMasterOptionSetItem
   */
  exports.prototype.IsMasterOptionSetItem = undefined;

  /**
   * Name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Price
   * @member {Number} Price
   */
  exports.prototype.Price = undefined;

  /**
   * Menu item option display order
   * @member {Number} MenuItemOptionDisplayOrder
   */
  exports.prototype.MenuItemOptionDisplayOrder = undefined;

  /**
   * Menu item option set display order
   * @member {Number} MenuItemOptionSetDisplayOrder
   */
  exports.prototype.MenuItemOptionSetDisplayOrder = undefined;

  /**
   * Deposit return fee
   * @member {Number} DepositReturnFee
   */
  exports.prototype.DepositReturnFee = undefined;


  return exports;

}));
