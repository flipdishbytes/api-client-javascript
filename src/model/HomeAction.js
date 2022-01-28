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
    root.Flipdish.HomeAction = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HomeAction model module.
   * @module model/HomeAction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HomeAction</code>.
   * 
   * @alias module:model/HomeAction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>HomeAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HomeAction} obj Optional instance to populate.
   * @return {module:model/HomeAction} The populated <code>HomeAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('HomeActionId'))
        obj.HomeActionId = ApiClient.convertToType(data['HomeActionId'], 'Number');
      if (data.hasOwnProperty('HomeActionType'))
        obj.HomeActionType = ApiClient.convertToType(data['HomeActionType'], 'String');
      if (data.hasOwnProperty('Order'))
        obj.Order = ApiClient.convertToType(data['Order'], 'Number');
      if (data.hasOwnProperty('TitleKey'))
        obj.TitleKey = ApiClient.convertToType(data['TitleKey'], 'String');
      if (data.hasOwnProperty('ActionKey'))
        obj.ActionKey = ApiClient.convertToType(data['ActionKey'], 'String');
      if (data.hasOwnProperty('DescriptionKey'))
        obj.DescriptionKey = ApiClient.convertToType(data['DescriptionKey'], 'String');
      if (data.hasOwnProperty('Action'))
        obj.Action = ApiClient.convertToType(data['Action'], 'String');
      if (data.hasOwnProperty('Dismissible'))
        obj.Dismissible = ApiClient.convertToType(data['Dismissible'], 'Boolean');
    }
    return obj;
  }

  /**
   * 
   * @member {Number} HomeActionId
   */
  exports.prototype.HomeActionId = undefined;

  /**
   * Type of Action
   * @member {module:model/HomeAction.HomeActionTypeEnum} HomeActionType
   */
  exports.prototype.HomeActionType = undefined;

  /**
   * 
   * @member {Number} Order
   */
  exports.prototype.Order = undefined;

  /**
   * 
   * @member {String} TitleKey
   */
  exports.prototype.TitleKey = undefined;

  /**
   * 
   * @member {String} ActionKey
   */
  exports.prototype.ActionKey = undefined;

  /**
   * 
   * @member {String} DescriptionKey
   */
  exports.prototype.DescriptionKey = undefined;

  /**
   * 
   * @member {String} Action
   */
  exports.prototype.Action = undefined;

  /**
   * 
   * @member {Boolean} Dismissible
   */
  exports.prototype.Dismissible = undefined;



  /**
   * Allowed values for the <code>HomeActionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HomeActionTypeEnum = {
    /**
     * value: "Portal"
     * @const
     */
    Portal: "Portal",

    /**
     * value: "External"
     * @const
     */
    External: "External"
  };

  return exports;

}));
