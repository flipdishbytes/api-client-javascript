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
    root.Flipdish.DriverInvitation = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DriverInvitation model module.
   * @module model/DriverInvitation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DriverInvitation</code>.
   * 
   * @alias module:model/DriverInvitation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DriverInvitation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DriverInvitation} obj Optional instance to populate.
   * @return {module:model/DriverInvitation} The populated <code>DriverInvitation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PhoneNumber'))
        obj.PhoneNumber = ApiClient.convertToType(data['PhoneNumber'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
    }
    return obj;
  }

  /**
   * Phone number
   * @member {String} PhoneNumber
   */
  exports.prototype.PhoneNumber = undefined;

  /**
   * Driver's name
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Assigned store IDs
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;


  return exports;

}));