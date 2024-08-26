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
    root.Flipdish.StoreListItem = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StoreListItem model module.
   * @module model/StoreListItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StoreListItem</code>.
   * Store id and name
   * @alias module:model/StoreListItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StoreListItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreListItem} obj Optional instance to populate.
   * @return {module:model/StoreListItem} The populated <code>StoreListItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StoreName'))
        obj.StoreName = ApiClient.convertToType(data['StoreName'], 'String');
      if (data.hasOwnProperty('StoreGroupId'))
        obj.StoreGroupId = ApiClient.convertToType(data['StoreGroupId'], 'Number');
      if (data.hasOwnProperty('StoreGroupName'))
        obj.StoreGroupName = ApiClient.convertToType(data['StoreGroupName'], 'String');
      if (data.hasOwnProperty('HasLoyaltyCampaign'))
        obj.HasLoyaltyCampaign = ApiClient.convertToType(data['HasLoyaltyCampaign'], 'Boolean');
      if (data.hasOwnProperty('HasRetentionCampaign'))
        obj.HasRetentionCampaign = ApiClient.convertToType(data['HasRetentionCampaign'], 'Boolean');
      if (data.hasOwnProperty('IsPublished'))
        obj.IsPublished = ApiClient.convertToType(data['IsPublished'], 'Boolean');
    }
    return obj;
  }

  /**
   * Store Id
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Store Name
   * @member {String} StoreName
   */
  exports.prototype.StoreName = undefined;

  /**
   * Store Group Id
   * @member {Number} StoreGroupId
   */
  exports.prototype.StoreGroupId = undefined;

  /**
   * Store Group Name
   * @member {String} StoreGroupName
   */
  exports.prototype.StoreGroupName = undefined;

  /**
   * Store has loyalty campaign
   * @member {Boolean} HasLoyaltyCampaign
   */
  exports.prototype.HasLoyaltyCampaign = undefined;

  /**
   * Store has retention campaign
   * @member {Boolean} HasRetentionCampaign
   */
  exports.prototype.HasRetentionCampaign = undefined;

  /**
   * Is Published store
   * @member {Boolean} IsPublished
   */
  exports.prototype.IsPublished = undefined;


  return exports;

}));
