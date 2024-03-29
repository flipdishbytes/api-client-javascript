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
    root.Flipdish.MenuZone = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuZone model module.
   * @module model/MenuZone
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuZone</code>.
   * @alias module:model/MenuZone
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuZone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuZone} obj Optional instance to populate.
   * @return {module:model/MenuZone} The populated <code>MenuZone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuZoneId'))
        obj.MenuZoneId = ApiClient.convertToType(data['MenuZoneId'], 'Number');
      if (data.hasOwnProperty('MenuId'))
        obj.MenuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.Description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('ImageName'))
        obj.ImageName = ApiClient.convertToType(data['ImageName'], 'String');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.DisplayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} MenuZoneId
   */
  exports.prototype.MenuZoneId = undefined;

  /**
   * @member {Number} MenuId
   */
  exports.prototype.MenuId = undefined;

  /**
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * @member {String} Description
   */
  exports.prototype.Description = undefined;

  /**
   * @member {String} ImageName
   */
  exports.prototype.ImageName = undefined;

  /**
   * @member {Number} DisplayOrder
   */
  exports.prototype.DisplayOrder = undefined;


  return exports;

}));
