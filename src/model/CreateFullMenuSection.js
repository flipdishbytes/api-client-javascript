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
    define(['ApiClient', 'model/CreateFullMenuSectionItem', 'model/MenuSectionAvailability'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateFullMenuSectionItem'), require('./MenuSectionAvailability'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.CreateFullMenuSection = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.CreateFullMenuSectionItem, root.FlipdishOpenApiV10.MenuSectionAvailability);
  }
}(this, function(ApiClient, CreateFullMenuSectionItem, MenuSectionAvailability) {
  'use strict';

  /**
   * The CreateFullMenuSection model module.
   * @module model/CreateFullMenuSection
   * @version v1.0
   */

  /**
   * Constructs a new <code>CreateFullMenuSection</code>.
   * Create menu section
   * @alias module:model/CreateFullMenuSection
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateFullMenuSection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFullMenuSection} obj Optional instance to populate.
   * @return {module:model/CreateFullMenuSection} The populated <code>CreateFullMenuSection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuSectionAvailability'))
        obj.menuSectionAvailability = MenuSectionAvailability.constructFromObject(data['MenuSectionAvailability']);
      if (data.hasOwnProperty('MenuItems'))
        obj.menuItems = ApiClient.convertToType(data['MenuItems'], [CreateFullMenuSectionItem]);
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('DisplayOrder'))
        obj.displayOrder = ApiClient.convertToType(data['DisplayOrder'], 'Number');
      if (data.hasOwnProperty('IsAvailable'))
        obj.isAvailable = ApiClient.convertToType(data['IsAvailable'], 'Boolean');
      if (data.hasOwnProperty('IsHiddenFromCustomers'))
        obj.isHiddenFromCustomers = ApiClient.convertToType(data['IsHiddenFromCustomers'], 'Boolean');
      if (data.hasOwnProperty('ImageUrl'))
        obj.imageUrl = ApiClient.convertToType(data['ImageUrl'], 'String');
    }
    return obj;
  }

  /**
   * Menu section availability
   * @member {module:model/MenuSectionAvailability} menuSectionAvailability
   */
  exports.prototype.menuSectionAvailability = undefined;

  /**
   * Menu items
   * @member {Array.<module:model/CreateFullMenuSectionItem>} menuItems
   */
  exports.prototype.menuItems = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Display order
   * @member {Number} displayOrder
   */
  exports.prototype.displayOrder = undefined;

  /**
   * Is available
   * @member {Boolean} isAvailable
   */
  exports.prototype.isAvailable = undefined;

  /**
   * Is hidden from customer. Perhaps when the item is out of stock.
   * @member {Boolean} isHiddenFromCustomers
   */
  exports.prototype.isHiddenFromCustomers = undefined;

  /**
   * Image url
   * @member {String} imageUrl
   */
  exports.prototype.imageUrl = undefined;


  return exports;

}));
