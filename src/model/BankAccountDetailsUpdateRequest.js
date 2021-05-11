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
    define(['ApiClient', 'model/AccountFieldKeyValuePair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountFieldKeyValuePair'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.BankAccountDetailsUpdateRequest = factory(root.Flipdish.ApiClient, root.Flipdish.AccountFieldKeyValuePair);
  }
}(this, function(ApiClient, AccountFieldKeyValuePair) {
  'use strict';

  /**
   * The BankAccountDetailsUpdateRequest model module.
   * @module model/BankAccountDetailsUpdateRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BankAccountDetailsUpdateRequest</code>.
   * Represents a request to update bank account information details
   * @alias module:model/BankAccountDetailsUpdateRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BankAccountDetailsUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccountDetailsUpdateRequest} obj Optional instance to populate.
   * @return {module:model/BankAccountDetailsUpdateRequest} The populated <code>BankAccountDetailsUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('BankAddress'))
        obj.BankAddress = ApiClient.convertToType(data['BankAddress'], 'String');
      if (data.hasOwnProperty('AccountHolderAddress'))
        obj.AccountHolderAddress = ApiClient.convertToType(data['AccountHolderAddress'], 'String');
      if (data.hasOwnProperty('VatNumber'))
        obj.VatNumber = ApiClient.convertToType(data['VatNumber'], 'String');
      if (data.hasOwnProperty('StoreIds'))
        obj.StoreIds = ApiClient.convertToType(data['StoreIds'], ['Number']);
      if (data.hasOwnProperty('BankName'))
        obj.BankName = ApiClient.convertToType(data['BankName'], 'String');
      if (data.hasOwnProperty('AccountName'))
        obj.AccountName = ApiClient.convertToType(data['AccountName'], 'String');
      if (data.hasOwnProperty('Iban'))
        obj.Iban = ApiClient.convertToType(data['Iban'], 'String');
      if (data.hasOwnProperty('Swift'))
        obj.Swift = ApiClient.convertToType(data['Swift'], 'String');
      if (data.hasOwnProperty('NationalClearingCode'))
        obj.NationalClearingCode = ApiClient.convertToType(data['NationalClearingCode'], 'String');
      if (data.hasOwnProperty('PopulatedAccountFields'))
        obj.PopulatedAccountFields = ApiClient.convertToType(data['PopulatedAccountFields'], [AccountFieldKeyValuePair]);
      if (data.hasOwnProperty('RejectionReason'))
        obj.RejectionReason = ApiClient.convertToType(data['RejectionReason'], 'String');
      if (data.hasOwnProperty('BusinessType'))
        obj.BusinessType = ApiClient.convertToType(data['BusinessType'], 'String');
    }
    return obj;
  }

  /**
   * Address of the bank account
   * @member {String} BankAddress
   */
  exports.prototype.BankAddress = undefined;

  /**
   * Address of the payee
   * @member {String} AccountHolderAddress
   */
  exports.prototype.AccountHolderAddress = undefined;

  /**
   * Account Holders Vat Number
   * @member {String} VatNumber
   */
  exports.prototype.VatNumber = undefined;

  /**
   * List of stores to attach to Account
   * @member {Array.<Number>} StoreIds
   */
  exports.prototype.StoreIds = undefined;

  /**
   * Name of Bank
   * @member {String} BankName
   */
  exports.prototype.BankName = undefined;

  /**
   * Name of this account
   * @member {String} AccountName
   */
  exports.prototype.AccountName = undefined;

  /**
   * IBAN of this account
   * @member {String} Iban
   */
  exports.prototype.Iban = undefined;

  /**
   * SWIFT of this bank account
   * @member {String} Swift
   */
  exports.prototype.Swift = undefined;

  /**
   * National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ)
   * @member {String} NationalClearingCode
   */
  exports.prototype.NationalClearingCode = undefined;

  /**
   * A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored.
   * @member {Array.<module:model/AccountFieldKeyValuePair>} PopulatedAccountFields
   */
  exports.prototype.PopulatedAccountFields = undefined;

  /**
   * Reason for Rejection
   * @member {String} RejectionReason
   */
  exports.prototype.RejectionReason = undefined;

  /**
   * Business Type
   * @member {module:model/BankAccountDetailsUpdateRequest.BusinessTypeEnum} BusinessType
   */
  exports.prototype.BusinessType = undefined;



  /**
   * Allowed values for the <code>BusinessType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessTypeEnum = {
    /**
     * value: "Individual"
     * @const
     */
    Individual: "Individual",

    /**
     * value: "Company"
     * @const
     */
    Company: "Company",

    /**
     * value: "NonProfit"
     * @const
     */
    NonProfit: "NonProfit",

    /**
     * value: "GovernmentEntity"
     * @const
     */
    GovernmentEntity: "GovernmentEntity"
  };

  return exports;

}));