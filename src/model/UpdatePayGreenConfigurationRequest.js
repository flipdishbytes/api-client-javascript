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
    root.Flipdish.UpdatePayGreenConfigurationRequest = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdatePayGreenConfigurationRequest model module.
   * @module model/UpdatePayGreenConfigurationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdatePayGreenConfigurationRequest</code>.
   * @alias module:model/UpdatePayGreenConfigurationRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdatePayGreenConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatePayGreenConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/UpdatePayGreenConfigurationRequest} The populated <code>UpdatePayGreenConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('AssignedStores'))
        obj.AssignedStores = ApiClient.convertToType(data['AssignedStores'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * @member {Array.<Number>} AssignedStores
   */
  exports.prototype.AssignedStores = undefined;


  return exports;

}));