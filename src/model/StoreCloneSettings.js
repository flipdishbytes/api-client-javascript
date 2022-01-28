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
    root.Flipdish.StoreCloneSettings = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StoreCloneSettings model module.
   * @module model/StoreCloneSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StoreCloneSettings</code>.
   * Settings for cloning a store
   * @alias module:model/StoreCloneSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreCloneSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreCloneSettings} obj Optional instance to populate.
   * @return {module:model/StoreCloneSettings} The populated <code>StoreCloneSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TargetStoreGroupId'))
        obj.TargetStoreGroupId = ApiClient.convertToType(data['TargetStoreGroupId'], 'Number');
    }
    return obj;
  }

  /**
   * If specified will clone to a specific store group, otherwise will clone to the store group of the Store which is being cloned
   * @member {Number} TargetStoreGroupId
   */
  exports.prototype.TargetStoreGroupId = undefined;


  return exports;

}));
