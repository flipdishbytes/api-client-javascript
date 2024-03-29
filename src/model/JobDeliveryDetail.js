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
    define(['ApiClient', 'model/JobAddress', 'model/JobContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobAddress'), require('./JobContact'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.JobDeliveryDetail = factory(root.Flipdish.ApiClient, root.Flipdish.JobAddress, root.Flipdish.JobContact);
  }
}(this, function(ApiClient, JobAddress, JobContact) {
  'use strict';

  /**
   * The JobDeliveryDetail model module.
   * @module model/JobDeliveryDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobDeliveryDetail</code>.
   * Job Delivery Detail
   * @alias module:model/JobDeliveryDetail
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JobDeliveryDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDeliveryDetail} obj Optional instance to populate.
   * @return {module:model/JobDeliveryDetail} The populated <code>JobDeliveryDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.Id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('Latitude'))
        obj.Latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.Longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('Comment'))
        obj.Comment = ApiClient.convertToType(data['Comment'], 'String');
      if (data.hasOwnProperty('Address'))
        obj.Address = JobAddress.constructFromObject(data['Address']);
      if (data.hasOwnProperty('Contact'))
        obj.Contact = JobContact.constructFromObject(data['Contact']);
    }
    return obj;
  }

  /**
   * Id
   * @member {Number} Id
   */
  exports.prototype.Id = undefined;

  /**
   * Latitude
   * @member {Number} Latitude
   */
  exports.prototype.Latitude = undefined;

  /**
   * Longitude
   * @member {Number} Longitude
   */
  exports.prototype.Longitude = undefined;

  /**
   * Comment
   * @member {String} Comment
   */
  exports.prototype.Comment = undefined;

  /**
   * Address
   * @member {module:model/JobAddress} Address
   */
  exports.prototype.Address = undefined;

  /**
   * Contact
   * @member {module:model/JobContact} Contact
   */
  exports.prototype.Contact = undefined;


  return exports;

}));
