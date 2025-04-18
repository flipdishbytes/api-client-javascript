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
 * The BankAccount model module.
 * @module model/BankAccount
 * @version 1.0.0
 */
class BankAccount {
    /**
     * Constructs a new <code>BankAccount</code>.
     * BANK ACCOUNT
     * @alias module:model/BankAccount
     */
    constructor() { 
        
        BankAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankAccount} obj Optional instance to populate.
     * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccount();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
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
            if (data.hasOwnProperty('PopulatedAccountFields')) {
                obj['PopulatedAccountFields'] = ApiClient.convertToType(data['PopulatedAccountFields'], [AccountFieldKeyValuePair]);
            }
            if (data.hasOwnProperty('AccountState')) {
                obj['AccountState'] = ApiClient.convertToType(data['AccountState'], 'String');
            }
            if (data.hasOwnProperty('StoreNames')) {
                obj['StoreNames'] = ApiClient.convertToType(data['StoreNames'], ['String']);
            }
            if (data.hasOwnProperty('StoreIds')) {
                obj['StoreIds'] = ApiClient.convertToType(data['StoreIds'], ['Number']);
            }
            if (data.hasOwnProperty('BankAddress')) {
                obj['BankAddress'] = ApiClient.convertToType(data['BankAddress'], 'String');
            }
            if (data.hasOwnProperty('BankCountryCode')) {
                obj['BankCountryCode'] = ApiClient.convertToType(data['BankCountryCode'], 'String');
            }
            if (data.hasOwnProperty('AccountHolderAddress')) {
                obj['AccountHolderAddress'] = ApiClient.convertToType(data['AccountHolderAddress'], 'String');
            }
            if (data.hasOwnProperty('AccountHolderCountryCode')) {
                obj['AccountHolderCountryCode'] = ApiClient.convertToType(data['AccountHolderCountryCode'], 'String');
            }
            if (data.hasOwnProperty('VatNumber')) {
                obj['VatNumber'] = ApiClient.convertToType(data['VatNumber'], 'String');
            }
            if (data.hasOwnProperty('StripeAccountId')) {
                obj['StripeAccountId'] = ApiClient.convertToType(data['StripeAccountId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Id of this account
 * @member {Number} Id
 */
BankAccount.prototype['Id'] = undefined;

/**
 * Name of this account
 * @member {String} AccountName
 */
BankAccount.prototype['AccountName'] = undefined;

/**
 * IBAN of this account
 * @member {String} Iban
 */
BankAccount.prototype['Iban'] = undefined;

/**
 * SWIFT of this bank account
 * @member {String} Swift
 */
BankAccount.prototype['Swift'] = undefined;

/**
 * A list of one or more populated account fields (field key-value pairs).  If this list contains at least one item, the Iban, Swift and NationalClearingCode fields should be ignored.
 * @member {Array.<module:model/AccountFieldKeyValuePair>} PopulatedAccountFields
 */
BankAccount.prototype['PopulatedAccountFields'] = undefined;

/**
 * Status of Account
 * @member {module:model/BankAccount.AccountStateEnum} AccountState
 */
BankAccount.prototype['AccountState'] = undefined;

/**
 * Store Names that are attached to this account
 * @member {Array.<String>} StoreNames
 */
BankAccount.prototype['StoreNames'] = undefined;

/**
 * Store Ids that are attached to this account
 * @member {Array.<Number>} StoreIds
 */
BankAccount.prototype['StoreIds'] = undefined;

/**
 * Address lf the bank
 * @member {String} BankAddress
 */
BankAccount.prototype['BankAddress'] = undefined;

/**
 * CountryCode of the Bank Account
 * @member {String} BankCountryCode
 */
BankAccount.prototype['BankCountryCode'] = undefined;

/**
 * Account Holders Address
 * @member {String} AccountHolderAddress
 */
BankAccount.prototype['AccountHolderAddress'] = undefined;

/**
 * Account Holders Country Code
 * @member {String} AccountHolderCountryCode
 */
BankAccount.prototype['AccountHolderCountryCode'] = undefined;

/**
 * Account Holders Vat Number
 * @member {String} VatNumber
 */
BankAccount.prototype['VatNumber'] = undefined;

/**
 * Stripe Id of the connected account
 * @member {String} StripeAccountId
 */
BankAccount.prototype['StripeAccountId'] = undefined;





/**
 * Allowed values for the <code>AccountState</code> property.
 * @enum {String}
 * @readonly
 */
BankAccount['AccountStateEnum'] = {

    /**
     * value: "Unverified"
     * @const
     */
    "Unverified": "Unverified",

    /**
     * value: "AwatingVerification"
     * @const
     */
    "AwatingVerification": "AwatingVerification",

    /**
     * value: "Verified"
     * @const
     */
    "Verified": "Verified",

    /**
     * value: "Grandfathered"
     * @const
     */
    "Grandfathered": "Grandfathered"
};



export default BankAccount;

