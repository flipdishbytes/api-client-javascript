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
 * The Reject model module.
 * @module model/Reject
 * @version 1.0.0
 */
class Reject {
    /**
     * Constructs a new <code>Reject</code>.
     * Reject
     * @alias module:model/Reject
     * @param RejectReason {module:model/Reject.RejectReasonEnum} Reject reason.
     */
    constructor(RejectReason) { 
        
        Reject.initialize(this, RejectReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, RejectReason) { 
        obj['RejectReason'] = RejectReason;
    }

    /**
     * Constructs a <code>Reject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reject} obj Optional instance to populate.
     * @return {module:model/Reject} The populated <code>Reject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reject();

            if (data.hasOwnProperty('RejectReason')) {
                obj['RejectReason'] = ApiClient.convertToType(data['RejectReason'], 'String');
            }
            if (data.hasOwnProperty('DoNotNotifyCustomer')) {
                obj['DoNotNotifyCustomer'] = ApiClient.convertToType(data['DoNotNotifyCustomer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Reject reason.
 * @member {module:model/Reject.RejectReasonEnum} RejectReason
 */
Reject.prototype['RejectReason'] = undefined;

/**
 * Notify customer. The server will not send and SMS to the customer if the value is true.
 * @member {Boolean} DoNotNotifyCustomer
 */
Reject.prototype['DoNotNotifyCustomer'] = undefined;





/**
 * Allowed values for the <code>RejectReason</code> property.
 * @enum {String}
 * @readonly
 */
Reject['RejectReasonEnum'] = {

    /**
     * value: "TooBusy"
     * @const
     */
    "TooBusy": "TooBusy",

    /**
     * value: "FoodUnavailable"
     * @const
     */
    "FoodUnavailable": "FoodUnavailable",

    /**
     * value: "UnableToDeliver"
     * @const
     */
    "UnableToDeliver": "UnableToDeliver",

    /**
     * value: "UnknownAddress"
     * @const
     */
    "UnknownAddress": "UnknownAddress",

    /**
     * value: "UnknownReason"
     * @const
     */
    "UnknownReason": "UnknownReason",

    /**
     * value: "TooSoon"
     * @const
     */
    "TooSoon": "TooSoon",

    /**
     * value: "TimeUnavailable"
     * @const
     */
    "TimeUnavailable": "TimeUnavailable",

    /**
     * value: "DontDeliverToArea"
     * @const
     */
    "DontDeliverToArea": "DontDeliverToArea",

    /**
     * value: "StoreUncontactable"
     * @const
     */
    "StoreUncontactable": "StoreUncontactable"
};



export default Reject;

