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
    root.Flipdish.StripeConnectedAccount = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StripeConnectedAccount model module.
   * @module model/StripeConnectedAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StripeConnectedAccount</code>.
   * Represents a Stripe custom connected account
   * @alias module:model/StripeConnectedAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StripeConnectedAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripeConnectedAccount} obj Optional instance to populate.
   * @return {module:model/StripeConnectedAccount} The populated <code>StripeConnectedAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('FlipdishConnectedAccountId'))
        obj.FlipdishConnectedAccountId = ApiClient.convertToType(data['FlipdishConnectedAccountId'], 'Number');
      if (data.hasOwnProperty('StripeId'))
        obj.StripeId = ApiClient.convertToType(data['StripeId'], 'String');
      if (data.hasOwnProperty('WhitelabelConfigId'))
        obj.WhitelabelConfigId = ApiClient.convertToType(data['WhitelabelConfigId'], 'Number');
      if (data.hasOwnProperty('CardPaymentsStatus'))
        obj.CardPaymentsStatus = ApiClient.convertToType(data['CardPaymentsStatus'], 'String');
      if (data.hasOwnProperty('TransfersStatus'))
        obj.TransfersStatus = ApiClient.convertToType(data['TransfersStatus'], 'String');
      if (data.hasOwnProperty('AccountStatus'))
        obj.AccountStatus = ApiClient.convertToType(data['AccountStatus'], 'String');
      if (data.hasOwnProperty('PayoutsEnabled'))
        obj.PayoutsEnabled = ApiClient.convertToType(data['PayoutsEnabled'], 'Boolean');
      if (data.hasOwnProperty('PaymentsEnabled'))
        obj.PaymentsEnabled = ApiClient.convertToType(data['PaymentsEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * Flipdish connected account identifier
   * @member {Number} FlipdishConnectedAccountId
   */
  exports.prototype.FlipdishConnectedAccountId = undefined;

  /**
   * Stripe's own connected account identifier
   * @member {String} StripeId
   */
  exports.prototype.StripeId = undefined;

  /**
   * Id of the WhitelabelConfig the connected account is assigned to
   * @member {Number} WhitelabelConfigId
   */
  exports.prototype.WhitelabelConfigId = undefined;

  /**
   * Card payments capability status (Inactive, Pending, Active, Unrequested)
   * @member {module:model/StripeConnectedAccount.CardPaymentsStatusEnum} CardPaymentsStatus
   */
  exports.prototype.CardPaymentsStatus = undefined;

  /**
   * Transfers capability status (Inactive, Pending, Active, Unrequested)
   * @member {module:model/StripeConnectedAccount.TransfersStatusEnum} TransfersStatus
   */
  exports.prototype.TransfersStatus = undefined;

  /**
   * Current status of the account
   * @member {module:model/StripeConnectedAccount.AccountStatusEnum} AccountStatus
   */
  exports.prototype.AccountStatus = undefined;

  /**
   * Payouts Enabled status
   * @member {Boolean} PayoutsEnabled
   */
  exports.prototype.PayoutsEnabled = undefined;

  /**
   * Payments Enabled status
   * @member {Boolean} PaymentsEnabled
   */
  exports.prototype.PaymentsEnabled = undefined;



  /**
   * Allowed values for the <code>CardPaymentsStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CardPaymentsStatusEnum = {
    /**
     * value: "Inactive"
     * @const
     */
    Inactive: "Inactive",

    /**
     * value: "Pending"
     * @const
     */
    Pending: "Pending",

    /**
     * value: "Active"
     * @const
     */
    Active: "Active",

    /**
     * value: "Unrequested"
     * @const
     */
    Unrequested: "Unrequested"
  };


  /**
   * Allowed values for the <code>TransfersStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TransfersStatusEnum = {
    /**
     * value: "Inactive"
     * @const
     */
    Inactive: "Inactive",

    /**
     * value: "Pending"
     * @const
     */
    Pending: "Pending",

    /**
     * value: "Active"
     * @const
     */
    Active: "Active",

    /**
     * value: "Unrequested"
     * @const
     */
    Unrequested: "Unrequested"
  };


  /**
   * Allowed values for the <code>AccountStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountStatusEnum = {
    /**
     * value: "Disabled"
     * @const
     */
    Disabled: "Disabled",

    /**
     * value: "Enabled"
     * @const
     */
    Enabled: "Enabled",

    /**
     * value: "AdditionalInformationRequired"
     * @const
     */
    AdditionalInformationRequired: "AdditionalInformationRequired",

    /**
     * value: "PendingVerification"
     * @const
     */
    PendingVerification: "PendingVerification",

    /**
     * value: "Unverified"
     * @const
     */
    Unverified: "Unverified",

    /**
     * value: "Rejected"
     * @const
     */
    Rejected: "Rejected",

    /**
     * value: "UpdateExternalAccount"
     * @const
     */
    UpdateExternalAccount: "UpdateExternalAccount",

    /**
     * value: "PlatformPaused"
     * @const
     */
    PlatformPaused: "PlatformPaused"
  };

  return exports;

}));
