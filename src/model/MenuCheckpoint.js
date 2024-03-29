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
    root.Flipdish.MenuCheckpoint = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MenuCheckpoint model module.
   * @module model/MenuCheckpoint
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MenuCheckpoint</code>.
   * Menu Checkpoint
   * @alias module:model/MenuCheckpoint
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MenuCheckpoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MenuCheckpoint} obj Optional instance to populate.
   * @return {module:model/MenuCheckpoint} The populated <code>MenuCheckpoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MenuCheckpointId'))
        obj.MenuCheckpointId = ApiClient.convertToType(data['MenuCheckpointId'], 'Number');
      if (data.hasOwnProperty('Time'))
        obj.Time = ApiClient.convertToType(data['Time'], 'Date');
      if (data.hasOwnProperty('Name'))
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Url'))
        obj.Url = ApiClient.convertToType(data['Url'], 'String');
    }
    return obj;
  }

  /**
   * Identifier of Menu Checkpoint
   * @member {Number} MenuCheckpointId
   */
  exports.prototype.MenuCheckpointId = undefined;

  /**
   * Time of creation of checkpoint
   * @member {Date} Time
   */
  exports.prototype.Time = undefined;

  /**
   * Name of checkpoint
   * @member {String} Name
   */
  exports.prototype.Name = undefined;

  /**
   * Url that points to Serialized Checkpoint
   * @member {String} Url
   */
  exports.prototype.Url = undefined;


  return exports;

}));
