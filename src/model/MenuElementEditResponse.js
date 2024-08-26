/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    root.Flipdish.MenuElementEditResponse = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuElementEditResponse model module.
   * @module model/MenuElementEditResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuElementEditResponse</code>.
   * Response with any menu elements that had issues being hidden/shown
   * @alias module:model/MenuElementEditResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuElementEditResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuElementEditResponse} obj Optional instance to populate.
   * @return {module:model/MenuElementEditResponse} The populated <code>MenuElementEditResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('SectionName'))
        obj.SectionName = ApiClient.convertToType(data['SectionName'], 'String');
      if (data.hasOwnProperty('ItemName'))
        obj.ItemName = ApiClient.convertToType(data['ItemName'], 'String');
      if (data.hasOwnProperty('OptionSetName'))
        obj.OptionSetName = ApiClient.convertToType(data['OptionSetName'], 'String');
      if (data.hasOwnProperty('OptionSetItemName'))
        obj.OptionSetItemName = ApiClient.convertToType(data['OptionSetItemName'], 'String');
      if (data.hasOwnProperty('MenuElementId'))
        obj.MenuElementId = ApiClient.convertToType(data['MenuElementId'], 'Number');
      if (data.hasOwnProperty('MenuElementType'))
        obj.MenuElementType = ApiClient.convertToType(data['MenuElementType'], 'String');
      if (data.hasOwnProperty('ValidationCode'))
        obj.ValidationCode = ApiClient.convertToType(data['ValidationCode'], 'String');
    }
    return obj;
  }

  /**
   * Section name
   * @member {String} SectionName
   */
  exports.prototype.SectionName = undefined;

  /**
   * Item name
   * @member {String} ItemName
   */
  exports.prototype.ItemName = undefined;

  /**
   * Option Set name
   * @member {String} OptionSetName
   */
  exports.prototype.OptionSetName = undefined;

  /**
   * Element name
   * @member {String} OptionSetItemName
   */
  exports.prototype.OptionSetItemName = undefined;

  /**
   * Holds the information for the A and CNAME Records of a domain.
   * @member {Number} MenuElementId
   */
  exports.prototype.MenuElementId = undefined;

  /**
   * Type of menu element
   * @member {module:model/MenuElementEditResponse.MenuElementTypeEnum} MenuElementType
   */
  exports.prototype.MenuElementType = undefined;

  /**
   * Validation message for menu element issue
   * @member {module:model/MenuElementEditResponse.ValidationCodeEnum} ValidationCode
   */
  exports.prototype.ValidationCode = undefined;



  /**
   * Allowed values for the <code>MenuElementType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MenuElementTypeEnum = {
    /**
     * value: "Item"
     * @const
     */
    Item: "Item",

    /**
     * value: "OptionSetItem"
     * @const
     */
    OptionSetItem: "OptionSetItem"
  };


  /**
   * Allowed values for the <code>ValidationCode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValidationCodeEnum = {
    /**
     * value: "Success"
     * @const
     */
    Success: "Success",

    /**
     * value: "MinimumCountViolation"
     * @const
     */
    MinimumCountViolation: "MinimumCountViolation",

    /**
     * value: "MasterOptionSetViolation"
     * @const
     */
    MasterOptionSetViolation: "MasterOptionSetViolation",

    /**
     * value: "IncorrectElementTypeInMenu"
     * @const
     */
    IncorrectElementTypeInMenu: "IncorrectElementTypeInMenu",

    /**
     * value: "DBFailed"
     * @const
     */
    DBFailed: "DBFailed"
  };

  return exports;

}));
