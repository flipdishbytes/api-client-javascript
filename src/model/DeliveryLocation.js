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
    define(['ApiClient', 'model/Coordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.DeliveryLocation = factory(root.Flipdish.ApiClient, root.Flipdish.Coordinates);
  }
}(this, function(ApiClient, Coordinates) {
  'use strict';

  /**
   * The DeliveryLocation model module.
   * @module model/DeliveryLocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryLocation</code>.
   * Delivery location
   * @alias module:model/DeliveryLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DeliveryLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryLocation} obj Optional instance to populate.
   * @return {module:model/DeliveryLocation} The populated <code>DeliveryLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Coordinates'))
        obj.Coordinates = Coordinates.constructFromObject(data['Coordinates']);
      if (data.hasOwnProperty('Building'))
        obj.Building = ApiClient.convertToType(data['Building'], 'String');
      if (data.hasOwnProperty('Street'))
        obj.Street = ApiClient.convertToType(data['Street'], 'String');
      if (data.hasOwnProperty('Town'))
        obj.Town = ApiClient.convertToType(data['Town'], 'String');
      if (data.hasOwnProperty('PostCode'))
        obj.PostCode = ApiClient.convertToType(data['PostCode'], 'String');
      if (data.hasOwnProperty('DeliveryInstructions'))
        obj.DeliveryInstructions = ApiClient.convertToType(data['DeliveryInstructions'], 'String');
      if (data.hasOwnProperty('PrettyAddressString'))
        obj.PrettyAddressString = ApiClient.convertToType(data['PrettyAddressString'], 'String');
    }
    return obj;
  }

  /**
   * Geo cordinate
   * @member {module:model/Coordinates} Coordinates
   */
  exports.prototype.Coordinates = undefined;

  /**
   * Building
   * @member {String} Building
   */
  exports.prototype.Building = undefined;

  /**
   * Street
   * @member {String} Street
   */
  exports.prototype.Street = undefined;

  /**
   * Town
   * @member {String} Town
   */
  exports.prototype.Town = undefined;

  /**
   * Post code
   * @member {String} PostCode
   */
  exports.prototype.PostCode = undefined;

  /**
   * Delivery instructions
   * @member {String} DeliveryInstructions
   */
  exports.prototype.DeliveryInstructions = undefined;

  /**
   * Formatted, pretty address string
   * @member {String} PrettyAddressString
   */
  exports.prototype.PrettyAddressString = undefined;


  return exports;

}));
