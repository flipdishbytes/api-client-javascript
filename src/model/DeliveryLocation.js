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
    define(['ApiClient', 'model/Coordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.DeliveryLocation = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.Coordinates);
  }
}(this, function(ApiClient, Coordinates) {
  'use strict';

  /**
   * The DeliveryLocation model module.
   * @module model/DeliveryLocation
   * @version v1.0
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
        obj.coordinates = Coordinates.constructFromObject(data['Coordinates']);
      if (data.hasOwnProperty('Building'))
        obj.building = ApiClient.convertToType(data['Building'], 'String');
      if (data.hasOwnProperty('Street'))
        obj.street = ApiClient.convertToType(data['Street'], 'String');
      if (data.hasOwnProperty('Town'))
        obj.town = ApiClient.convertToType(data['Town'], 'String');
      if (data.hasOwnProperty('PostCode'))
        obj.postCode = ApiClient.convertToType(data['PostCode'], 'String');
      if (data.hasOwnProperty('DeliveryInstructions'))
        obj.deliveryInstructions = ApiClient.convertToType(data['DeliveryInstructions'], 'String');
      if (data.hasOwnProperty('PrettyAddressString'))
        obj.prettyAddressString = ApiClient.convertToType(data['PrettyAddressString'], 'String');
    }
    return obj;
  }

  /**
   * Geo cordinate
   * @member {module:model/Coordinates} coordinates
   */
  exports.prototype.coordinates = undefined;

  /**
   * Building
   * @member {String} building
   */
  exports.prototype.building = undefined;

  /**
   * Street
   * @member {String} street
   */
  exports.prototype.street = undefined;

  /**
   * Town
   * @member {String} town
   */
  exports.prototype.town = undefined;

  /**
   * Post code
   * @member {String} postCode
   */
  exports.prototype.postCode = undefined;

  /**
   * Delivery instructions
   * @member {String} deliveryInstructions
   */
  exports.prototype.deliveryInstructions = undefined;

  /**
   * Formatted, pretty address string
   * @member {String} prettyAddressString
   */
  exports.prototype.prettyAddressString = undefined;


  return exports;

}));
