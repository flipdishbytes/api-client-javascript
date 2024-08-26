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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.PendingMenuChangesSummaries = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PendingMenuChangesSummaries model module.
   * @module model/PendingMenuChangesSummaries
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PendingMenuChangesSummaries</code>.
   * Pending menu changes summaries
   * @alias module:model/PendingMenuChangesSummaries
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PendingMenuChangesSummaries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PendingMenuChangesSummaries} obj Optional instance to populate.
   * @return {module:model/PendingMenuChangesSummaries} The populated <code>PendingMenuChangesSummaries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuId'))
        obj.MenuId = ApiClient.convertToType(data['MenuId'], 'Number');
      if (data.hasOwnProperty('TotalPendingChanges'))
        obj.TotalPendingChanges = ApiClient.convertToType(data['TotalPendingChanges'], 'Number');
    }
    return obj;
  }

  /**
   * Menu id
   * @member {Number} MenuId
   */
  exports.prototype.MenuId = undefined;

  /**
   * Sum of pending changes per menu id
   * @member {Number} TotalPendingChanges
   */
  exports.prototype.TotalPendingChanges = undefined;


  return exports;

}));
