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
    root.Flipdish.PayoutRequestIds = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PayoutRequestIds model module.
   * @module model/PayoutRequestIds
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PayoutRequestIds</code>.
   * Payout Request ids for filtering on Payouts
   * @alias module:model/PayoutRequestIds
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PayoutRequestIds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayoutRequestIds} obj Optional instance to populate.
   * @return {module:model/PayoutRequestIds} The populated <code>PayoutRequestIds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BankAccountIds'))
        obj.BankAccountIds = ApiClient.convertToType(data['BankAccountIds'], ['Number']);
      if (data.hasOwnProperty('States'))
        obj.States = ApiClient.convertToType(data['States'], ['String']);
    }
    return obj;
  }

  /**
   * List of bank account ids to search for
   * @member {Array.<Number>} BankAccountIds
   */
  exports.prototype.BankAccountIds = undefined;

  /**
   * List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
   * @member {Array.<module:model/PayoutRequestIds.StatesEnum>} States
   */
  exports.prototype.States = undefined;



  /**
   * Allowed values for the <code>States</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatesEnum = {
    /**
     * value: "Pending"
     * @const
     */
    Pending: "Pending",

    /**
     * value: "InTransit"
     * @const
     */
    InTransit: "InTransit",

    /**
     * value: "Paid"
     * @const
     */
    Paid: "Paid",

    /**
     * value: "Failed"
     * @const
     */
    Failed: "Failed",

    /**
     * value: "Cancelled"
     * @const
     */
    Cancelled: "Cancelled"
  };

  return exports;

}));
