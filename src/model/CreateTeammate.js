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
    root.Flipdish.CreateTeammate = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateTeammate model module.
   * @module model/CreateTeammate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateTeammate</code>.
   * 
   * @alias module:model/CreateTeammate
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CreateTeammate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTeammate} obj Optional instance to populate.
   * @return {module:model/CreateTeammate} The populated <code>CreateTeammate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Email'))
        obj.Email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('AppAccessLevel'))
        obj.AppAccessLevel = ApiClient.convertToType(data['AppAccessLevel'], 'String');
      if (data.hasOwnProperty('HasAccessToAllStores'))
        obj.HasAccessToAllStores = ApiClient.convertToType(data['HasAccessToAllStores'], 'Boolean');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
    }
    return obj;
  }

  /**
   * Email address
   * @member {String} Email
   */
  exports.prototype.Email = undefined;

  /**
   * App access level
   * @member {module:model/CreateTeammate.AppAccessLevelEnum} AppAccessLevel
   */
  exports.prototype.AppAccessLevel = undefined;

  /**
   * The user has access to all stores for the app (including new stores that added later)
   * @member {Boolean} HasAccessToAllStores
   */
  exports.prototype.HasAccessToAllStores = undefined;

  /**
   * Store IDs the user has access to (if HasAccessToAllStores is false)
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;



  /**
   * Allowed values for the <code>AppAccessLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppAccessLevelEnum = {
    /**
     * value: "None"
     * @const
     */
    None: "None",

    /**
     * value: "Owner"
     * @const
     */
    Owner: "Owner",

    /**
     * value: "StoreOwner"
     * @const
     */
    StoreOwner: "StoreOwner",

    /**
     * value: "ManagedOwner"
     * @const
     */
    ManagedOwner: "ManagedOwner",

    /**
     * value: "Integrator"
     * @const
     */
    Integrator: "Integrator",

    /**
     * value: "StoreManager"
     * @const
     */
    StoreManager: "StoreManager",

    /**
     * value: "StoreStaff"
     * @const
     */
    StoreStaff: "StoreStaff",

    /**
     * value: "StoreReadOnlyAccess"
     * @const
     */
    StoreReadOnlyAccess: "StoreReadOnlyAccess",

    /**
     * value: "FinanceManger"
     * @const
     */
    FinanceManger: "FinanceManger",

    /**
     * value: "Support"
     * @const
     */
    Support: "Support"
  };

  return exports;

}));
