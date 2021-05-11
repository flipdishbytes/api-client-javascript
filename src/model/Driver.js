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
    define(['ApiClient', 'model/DriverStore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DriverStore'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Driver = factory(root.Flipdish.ApiClient, root.Flipdish.DriverStore);
  }
}(this, function(ApiClient, DriverStore) {
  'use strict';

  /**
   * The Driver model module.
   * @module model/Driver
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Driver</code>.
   * 
   * @alias module:model/Driver
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Driver</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Driver} obj Optional instance to populate.
   * @return {module:model/Driver} The populated <code>Driver</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('UserId'))
        obj.UserId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('UserName'))
        obj.UserName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('UserPhoneNumber'))
        obj.UserPhoneNumber = ApiClient.convertToType(data['UserPhoneNumber'], 'String');
      if (data.hasOwnProperty('Stores'))
        obj.Stores = ApiClient.convertToType(data['Stores'], [DriverStore]);
      if (data.hasOwnProperty('ProfileImageUrl'))
        obj.ProfileImageUrl = ApiClient.convertToType(data['ProfileImageUrl'], 'String');
      if (data.hasOwnProperty('DriverKey'))
        obj.DriverKey = ApiClient.convertToType(data['DriverKey'], 'String');
    }
    return obj;
  }

  /**
   * User Id
   * @member {Number} UserId
   */
  exports.prototype.UserId = undefined;

  /**
   * User Name
   * @member {String} UserName
   */
  exports.prototype.UserName = undefined;

  /**
   * User Phone Number
   * @member {String} UserPhoneNumber
   */
  exports.prototype.UserPhoneNumber = undefined;

  /**
   * 
   * @member {Array.<module:model/DriverStore>} Stores
   */
  exports.prototype.Stores = undefined;

  /**
   * Profile image url
   * @member {String} ProfileImageUrl
   */
  exports.prototype.ProfileImageUrl = undefined;

  /**
   * Driver Key
   * @member {String} DriverKey
   */
  exports.prototype.DriverKey = undefined;


  return exports;

}));