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
    define(['ApiClient', 'model/MenuSectionItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MenuSectionItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.CreatedMenuSectionItems = factory(root.Flipdish.ApiClient, root.Flipdish.MenuSectionItem);
  }
}(this, function(ApiClient, MenuSectionItem) {
  'use strict';

  /**
   * The CreatedMenuSectionItems model module.
   * @module model/CreatedMenuSectionItems
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreatedMenuSectionItems</code>.
   * Response for the creation of multiple Menu Section Items
   * @alias module:model/CreatedMenuSectionItems
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreatedMenuSectionItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatedMenuSectionItems} obj Optional instance to populate.
   * @return {module:model/CreatedMenuSectionItems} The populated <code>CreatedMenuSectionItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuSectionItems'))
        obj.MenuSectionItems = ApiClient.convertToType(data['MenuSectionItems'], [MenuSectionItem]);
    }
    return obj;
  }

  /**
   * Created Menu Section Items
   * @member {Array.<module:model/MenuSectionItem>} MenuSectionItems
   */
  exports.prototype.MenuSectionItems = undefined;


  return exports;

}));