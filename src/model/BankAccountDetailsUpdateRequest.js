/**
 * Flipdish Open API v1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AccountFieldKeyValuePair from './AccountFieldKeyValuePair';

/**
 * The BankAccountDetailsUpdateRequest model module.
 * @module model/BankAccountDetailsUpdateRequest
 * @version 1.0.0
 */
class BankAccountDetailsUpdateRequest {
    /**
     * Constructs a new <code>BankAccountDetailsUpdateRequest</code>.
     * Represents a request to update bank account information details
     * @alias module:model/BankAccountDetailsUpdateRequest
     */
    constructor() { 
        
        BankAccountDetailsUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankAccountDetailsUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccountDetailsUpdateRequest} obj Optional instance to populate.
     * @return {module:model/BankAccountDetailsUpdateRequest} The populated <code>BankAccountDetailsUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccountDetailsUpdateRequest();

            if (data.hasOwnProperty('BankAddress')) {
                obj['BankAddress'] = ApiClient.convertToType(data['BankAddress'], 'String');
            }
            if (data.hasOwnProperty('AccountHolderAddress')) {
                obj['AccountHolderAddress'] = ApiClient.convertToType(data['AccountHolderAddress'], 'String');
            }
            if (data.hasOwnProperty('VatNumber')) {
                obj['VatNumber'] = ApiClient.convertToType(data['VatNumber'], 'String');
            }
            if (data.hasOwnProperty('StoreIds')) {
                obj['StoreIds'] = ApiClient.convertToType(data['StoreIds'], ['Number']);
            }
            if (data.hasOwnProperty('BankName')) {
                obj['BankName'] = ApiClient.convertToType(data['BankName'], 'String');
            }
            if (data.hasOwnProperty('AccountName')) {
                obj['AccountName'] = ApiClient.convertToType(data['AccountName'], 'String');
            }
            if (data.hasOwnProperty('Iban')) {
                obj['Iban'] = ApiClient.convertToType(data['Iban'], 'String');
            }
            if (data.hasOwnProperty('Swift')) {
                obj['Swift'] = ApiClient.convertToType(data['Swift'], 'String');
            }
            if (data.hasOwnProperty('NationalClearingCode')) {
                obj['NationalClearingCode'] = ApiClient.convertToType(data['NationalClearingCode'], 'String');
            }
            if (data.hasOwnProperty('PopulatedAccountFields')) {
                obj['PopulatedAccountFields'] = ApiClient.convertToType(data['PopulatedAccountFields'], [AccountFieldKeyValuePair]);
            }
            if (data.hasOwnProperty('RejectionReason')) {
                obj['RejectionReason'] = ApiClient.convertToType(data['RejectionReason'], 'String');
            }
            if (data.hasOwnProperty('BusinessType')) {
                obj['BusinessType'] = ApiClient.convertToType(data['BusinessType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address of the bank account
 * @member {String} BankAddress
 */
BankAccountDetailsUpdateRequest.prototype['BankAddress'] = undefined;

/**
 * Address of the payee
 * @member {String} AccountHolderAddress
 */
BankAccountDetailsUpdateRequest.prototype['AccountHolderAddress'] = undefined;

/**
 * Account Holders Vat Number
 * @member {String} VatNumber
 */
BankAccountDetailsUpdateRequest.prototype['VatNumber'] = undefined;

/**
 * List of stores to attach to Account
 * @member {Array.<Number>} StoreIds
 */
BankAccountDetailsUpdateRequest.prototype['StoreIds'] = undefined;

/**
 * Name of Bank
 * @member {String} BankName
 */
BankAccountDetailsUpdateRequest.prototype['BankName'] = undefined;

/**
 * Name of this account
 * @member {String} AccountName
 */
BankAccountDetailsUpdateRequest.prototype['AccountName'] = undefined;

/**
 * IBAN of this account
 * @member {String} Iban
 */
BankAccountDetailsUpdateRequest.prototype['Iban'] = undefined;

/**
 * SWIFT of this bank account
 * @member {String} Swift
 */
BankAccountDetailsUpdateRequest.prototype['Swift'] = undefined;

/**
 * National Clearing Code (BSB in Australia, Routing Number in USA/Canada, NCC in NZ)
 * @member {String} NationalClearingCode
 */
BankAccountDetailsUpdateRequest.prototype['NationalClearingCode'] = undefined;

/**
 * A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields will be ignored.
 * @member {Array.<module:model/AccountFieldKeyValuePair>} PopulatedAccountFields
 */
BankAccountDetailsUpdateRequest.prototype['PopulatedAccountFields'] = undefined;

/**
 * Reason for Rejection
 * @member {String} RejectionReason
 */
BankAccountDetailsUpdateRequest.prototype['RejectionReason'] = undefined;

/**
 * Business Type
 * @member {module:model/BankAccountDetailsUpdateRequest.BusinessTypeEnum} BusinessType
 */
BankAccountDetailsUpdateRequest.prototype['BusinessType'] = undefined;





/**
 * Allowed values for the <code>BusinessType</code> property.
 * @enum {String}
 * @readonly
 */
BankAccountDetailsUpdateRequest['BusinessTypeEnum'] = {

    /**
     * value: "Individual"
     * @const
     */
    "Individual": "Individual",

    /**
     * value: "Company"
     * @const
     */
    "Company": "Company",

    /**
     * value: "NonProfit"
     * @const
     */
    "NonProfit": "NonProfit",

    /**
     * value: "GovernmentEntity"
     * @const
     */
    "GovernmentEntity": "GovernmentEntity"
};



export default BankAccountDetailsUpdateRequest;

