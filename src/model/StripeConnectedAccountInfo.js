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
 * The StripeConnectedAccountInfo model module.
 * @module model/StripeConnectedAccountInfo
 * @version 1.0.0
 */
class StripeConnectedAccountInfo {
    /**
     * Constructs a new <code>StripeConnectedAccountInfo</code>.
     * Represents information about a Stripe connected account associated with a bank account
     * @alias module:model/StripeConnectedAccountInfo
     */
    constructor() { 
        
        StripeConnectedAccountInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StripeConnectedAccountInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StripeConnectedAccountInfo} obj Optional instance to populate.
     * @return {module:model/StripeConnectedAccountInfo} The populated <code>StripeConnectedAccountInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StripeConnectedAccountInfo();

            if (data.hasOwnProperty('AccountStatus')) {
                obj['AccountStatus'] = ApiClient.convertToType(data['AccountStatus'], 'String');
            }
            if (data.hasOwnProperty('StripeId')) {
                obj['StripeId'] = ApiClient.convertToType(data['StripeId'], 'String');
            }
            if (data.hasOwnProperty('CardPaymentStatus')) {
                obj['CardPaymentStatus'] = ApiClient.convertToType(data['CardPaymentStatus'], 'String');
            }
            if (data.hasOwnProperty('PayoutScheduleInterval')) {
                obj['PayoutScheduleInterval'] = ApiClient.convertToType(data['PayoutScheduleInterval'], 'String');
            }
            if (data.hasOwnProperty('PayoutsEnabled')) {
                obj['PayoutsEnabled'] = ApiClient.convertToType(data['PayoutsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('PayoutsPaused')) {
                obj['PayoutsPaused'] = ApiClient.convertToType(data['PayoutsPaused'], 'Boolean');
            }
            if (data.hasOwnProperty('PaymentsEnabled')) {
                obj['PaymentsEnabled'] = ApiClient.convertToType(data['PaymentsEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Stripe connected account status
 * @member {module:model/StripeConnectedAccountInfo.AccountStatusEnum} AccountStatus
 */
StripeConnectedAccountInfo.prototype['AccountStatus'] = undefined;

/**
 * Stripe connected account id
 * @member {String} StripeId
 */
StripeConnectedAccountInfo.prototype['StripeId'] = undefined;

/**
 * Current status of the Card Payment capability of the account
 * @member {module:model/StripeConnectedAccountInfo.CardPaymentStatusEnum} CardPaymentStatus
 */
StripeConnectedAccountInfo.prototype['CardPaymentStatus'] = undefined;

/**
 * Payouts Schedule Interval
 * @member {module:model/StripeConnectedAccountInfo.PayoutScheduleIntervalEnum} PayoutScheduleInterval
 */
StripeConnectedAccountInfo.prototype['PayoutScheduleInterval'] = undefined;

/**
 * Payouts Enabled status
 * @member {Boolean} PayoutsEnabled
 */
StripeConnectedAccountInfo.prototype['PayoutsEnabled'] = undefined;

/**
 * Flag indicating if payouts are paused
 * @member {Boolean} PayoutsPaused
 */
StripeConnectedAccountInfo.prototype['PayoutsPaused'] = undefined;

/**
 * Flag indicating if payments are enabled
 * @member {Boolean} PaymentsEnabled
 */
StripeConnectedAccountInfo.prototype['PaymentsEnabled'] = undefined;





/**
 * Allowed values for the <code>AccountStatus</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccountInfo['AccountStatusEnum'] = {

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


/**
 * Allowed values for the <code>CardPaymentStatus</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccountInfo['CardPaymentStatusEnum'] = {

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
 * Allowed values for the <code>PayoutScheduleInterval</code> property.
 * @enum {String}
 * @readonly
 */
StripeConnectedAccountInfo['PayoutScheduleIntervalEnum'] = {

    /**
     * value: "Manual"
     * @const
     */
    "Manual": "Manual",

    /**
     * value: "Daily"
     * @const
     */
    "Daily": "Daily",

    /**
     * value: "Weekly"
     * @const
     */
    "Weekly": "Weekly",

    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly"
};



export default StripeConnectedAccountInfo;

