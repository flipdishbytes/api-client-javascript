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
 * The RedeemInvitationResult model module.
 * @module model/RedeemInvitationResult
 * @version 1.0.0
 */
class RedeemInvitationResult {
    /**
     * Constructs a new <code>RedeemInvitationResult</code>.
     * 
     * @alias module:model/RedeemInvitationResult
     */
    constructor() { 
        
        RedeemInvitationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RedeemInvitationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeemInvitationResult} obj Optional instance to populate.
     * @return {module:model/RedeemInvitationResult} The populated <code>RedeemInvitationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedeemInvitationResult();

            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
            if (data.hasOwnProperty('InvitationStatus')) {
                obj['InvitationStatus'] = ApiClient.convertToType(data['InvitationStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access level is for this App
 * @member {String} AppId
 */
RedeemInvitationResult.prototype['AppId'] = undefined;

/**
 * Invitation status
 * @member {module:model/RedeemInvitationResult.InvitationStatusEnum} InvitationStatus
 */
RedeemInvitationResult.prototype['InvitationStatus'] = undefined;





/**
 * Allowed values for the <code>InvitationStatus</code> property.
 * @enum {String}
 * @readonly
 */
RedeemInvitationResult['InvitationStatusEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Accepted"
     * @const
     */
    "Accepted": "Accepted",

    /**
     * value: "Expired"
     * @const
     */
    "Expired": "Expired"
};



export default RedeemInvitationResult;

