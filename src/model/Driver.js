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
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.Driver = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.DriverStore);
  }
}(this, function(ApiClient, DriverStore) {
  'use strict';

  /**
   * The Driver model module.
   * @module model/Driver
   * @version v1.0
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
        obj.userId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('UserName'))
        obj.userName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('UserPhoneNumber'))
        obj.userPhoneNumber = ApiClient.convertToType(data['UserPhoneNumber'], 'String');
      if (data.hasOwnProperty('Stores'))
        obj.stores = ApiClient.convertToType(data['Stores'], [DriverStore]);
      if (data.hasOwnProperty('ProfileImageUrl'))
        obj.profileImageUrl = ApiClient.convertToType(data['ProfileImageUrl'], 'String');
      if (data.hasOwnProperty('DriverKey'))
        obj.driverKey = ApiClient.convertToType(data['DriverKey'], 'String');
    }
    return obj;
  }

  /**
   * User Id
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * User Name
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * User Phone Number
   * @member {String} userPhoneNumber
   */
  exports.prototype.userPhoneNumber = undefined;

  /**
   * 
   * @member {Array.<module:model/DriverStore>} stores
   */
  exports.prototype.stores = undefined;

  /**
   * Profile image url
   * @member {String} profileImageUrl
   */
  exports.prototype.profileImageUrl = undefined;

  /**
   * Driver Key
   * @member {String} driverKey
   */
  exports.prototype.driverKey = undefined;


  return exports;

}));
