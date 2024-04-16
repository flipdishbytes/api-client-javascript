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
    root.Flipdish.StripeCustomConnectedAccount = factory(root.Flipdish.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StripeCustomConnectedAccount model module.
   * @module model/StripeCustomConnectedAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StripeCustomConnectedAccount</code>.
   * Flipdish Stripe Custom Connected Account associated to the Store
   * @alias module:model/StripeCustomConnectedAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StripeCustomConnectedAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripeCustomConnectedAccount} obj Optional instance to populate.
   * @return {module:model/StripeCustomConnectedAccount} The populated <code>StripeCustomConnectedAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StoreId'))
        obj.StoreId = ApiClient.convertToType(data['StoreId'], 'Number');
      if (data.hasOwnProperty('StripeId'))
        obj.StripeId = ApiClient.convertToType(data['StripeId'], 'String');
      if (data.hasOwnProperty('CardPaymentsStatus'))
        obj.CardPaymentsStatus = ApiClient.convertToType(data['CardPaymentsStatus'], 'String');
      if (data.hasOwnProperty('TransfersStatus'))
        obj.TransfersStatus = ApiClient.convertToType(data['TransfersStatus'], 'String');
      if (data.hasOwnProperty('AccountStatus'))
        obj.AccountStatus = ApiClient.convertToType(data['AccountStatus'], 'String');
    }
    return obj;
  }

  /**
   * Physical Restaurant Id
   * @member {Number} StoreId
   */
  exports.prototype.StoreId = undefined;

  /**
   * Stripe's own connected account identifier
   * @member {String} StripeId
   */
  exports.prototype.StripeId = undefined;

  /**
   * Card payments capability status (Inactive, Pending, Active, Unrequested)
   * @member {module:model/StripeCustomConnectedAccount.CardPaymentsStatusEnum} CardPaymentsStatus
   */
  exports.prototype.CardPaymentsStatus = undefined;

  /**
   * Transfers capability status (Inactive, Pending, Active, Unrequested)
   * @member {module:model/StripeCustomConnectedAccount.TransfersStatusEnum} TransfersStatus
   */
  exports.prototype.TransfersStatus = undefined;

  /**
   * Current status of the account
   * @member {module:model/StripeCustomConnectedAccount.AccountStatusEnum} AccountStatus
   */
  exports.prototype.AccountStatus = undefined;



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
