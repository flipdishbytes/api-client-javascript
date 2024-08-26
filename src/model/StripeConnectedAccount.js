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

/**
 * The StripeConnectedAccount model module.
 * @module model/StripeConnectedAccount
 * @version 1.0.0
 */
class StripeConnectedAccount {
    /**
     * Constructs a new <code>StripeConnectedAccount</code>.
     * Represents a Stripe custom connected account
     * @alias module:model/StripeConnectedAccount
     */
    constructor() { 
        
        StripeConnectedAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StripeConnectedAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StripeConnectedAccount} obj Optional instance to populate.
     * @return {module:model/StripeConnectedAccount} The populated <code>StripeConnectedAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StripeConnectedAccount();

            if (data.hasOwnProperty('FlipdishConnectedAccountId')) {
                obj['FlipdishConnectedAccountId'] = ApiClient.convertToType(data['FlipdishConnectedAccountId'], 'Number');
            }
            if (data.hasOwnProperty('StripeId')) {
                obj['StripeId'] = ApiClient.convertToType(data['StripeId'], 'String');
            }
            if (data.hasOwnProperty('WhitelabelConfigId')) {
                obj['WhitelabelConfigId'] = ApiClient.convertToType(data['WhitelabelConfigId'], 'Number');
            }
            if (data.hasOwnProperty('CardPaymentsStatus')) {
                obj['CardPaymentsStatus'] = ApiClient.convertToType(data['CardPaymentsStatus'], 'String');
            }
            if (data.hasOwnProperty('TransfersStatus')) {
                obj['TransfersStatus'] = ApiClient.convertToType(data['TransfersStatus'], 'String');
            }
            if (data.hasOwnProperty('AccountStatus')) {
                obj['AccountStatus'] = ApiClient.convertToType(data['AccountStatus'], 'String');
            }
            if (data.hasOwnProperty('PayoutsEnabled')) {
                obj['PayoutsEnabled'] = ApiClient.convertToType(data['PayoutsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('PaymentsEnabled')) {
                obj['PaymentsEnabled'] = ApiClient.convertToType(data['PaymentsEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Flipdish connected account identifier
 * @member {Number} FlipdishConnectedAccountId
 */
StripeConnectedAccount.prototype['FlipdishConnectedAccountId'] = undefined;

/**
 * Stripe's own connected account identifier
 * @member {String} StripeId
 */
StripeConnectedAccount.prototype['StripeId'] = undefined;

/**
 * Id of the WhitelabelConfig the connected account is assigned to
 * @member {Number} WhitelabelConfigId
 */
StripeConnectedAccount.prototype['WhitelabelConfigId'] = undefined;

/**
 * Card payments capability status (Inactive, Pending, Active, Unrequested)
 * @member {module:model/StripeConnectedAccount.CardPaymentsStatusEnum} CardPaymentsStatus
 */
StripeConnectedAccount.prototype['CardPaymentsStatus'] = undefined;

/**
 * Transfers capability status (Inactive, Pending, Active, Unrequested)
 * @member {module:model/StripeConnectedAccount.TransfersStatusEnum} TransfersStatus
 */
StripeConnectedAccount.prototype['TransfersStatus'] = undefined;

/**
 * Current status of the account
 * @member {module:model/StripeConnectedAccount.AccountStatusEnum} AccountStatus
 */
StripeConnectedAccount.prototype['AccountStatus'] = undefined;

/**
 * Payouts Enabled status
 * @member {Boolean} PayoutsEnabled
 */
StripeConnectedAccount.prototype['PayoutsEnabled'] = undefined;

/**
 * Payments Enabled status
 * @member {Boolean} PaymentsEnabled
 */
StripeConnectedAccount.prototype['PaymentsEnabled'] = undefined;





/**
 * Allowed values for the <code>CardPaymentsStatus</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccount['CardPaymentsStatusEnum'] = {

    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Unrequested"
     * @const
     */
    "Unrequested": "Unrequested"
};


/**
 * Allowed values for the <code>TransfersStatus</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccount['TransfersStatusEnum'] = {

    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Unrequested"
     * @const
     */
    "Unrequested": "Unrequested"
};


/**
 * Allowed values for the <code>AccountStatus</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccount['AccountStatusEnum'] = {

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled",

    /**
     * value: "Enabled"
     * @const
     */
    "Enabled": "Enabled",

    /**
     * value: "AdditionalInformationRequired"
     * @const
     */
    "AdditionalInformationRequired": "AdditionalInformationRequired",

    /**
     * value: "PendingVerification"
     * @const
     */
    "PendingVerification": "PendingVerification",

    /**
     * value: "Unverified"
     * @const
     */
    "Unverified": "Unverified",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",

    /**
     * value: "UpdateExternalAccount"
     * @const
     */
    "UpdateExternalAccount": "UpdateExternalAccount",

    /**
     * value: "PlatformPaused"
     * @const
     */
    "PlatformPaused": "PlatformPaused"
};



export default StripeConnectedAccount;

