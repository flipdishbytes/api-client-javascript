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
 * The PayoutRequestIds model module.
 * @module model/PayoutRequestIds
 * @version 1.0.0
 */
class PayoutRequestIds {
    /**
     * Constructs a new <code>PayoutRequestIds</code>.
     * Payout Request ids for filtering on Payouts
     * @alias module:model/PayoutRequestIds
     */
    constructor() { 
        
        PayoutRequestIds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutRequestIds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutRequestIds} obj Optional instance to populate.
     * @return {module:model/PayoutRequestIds} The populated <code>PayoutRequestIds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutRequestIds();

            if (data.hasOwnProperty('BankAccountIds')) {
                obj['BankAccountIds'] = ApiClient.convertToType(data['BankAccountIds'], ['Number']);
            }
            if (data.hasOwnProperty('States')) {
                obj['States'] = ApiClient.convertToType(data['States'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of bank account ids to search for
 * @member {Array.<Number>} BankAccountIds
 */
PayoutRequestIds.prototype['BankAccountIds'] = undefined;

/**
 * List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
 * @member {Array.<module:model/PayoutRequestIds.StatesEnum>} States
 */
PayoutRequestIds.prototype['States'] = undefined;





/**
 * Allowed values for the <code>States</code> property.
 * @enum {String}
 * @readonly
 */
PayoutRequestIds['StatesEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "InTransit"
     * @const
     */
    "InTransit": "InTransit",

    /**
     * value: "Paid"
     * @const
     */
    "Paid": "Paid",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled"
};



export default PayoutRequestIds;

