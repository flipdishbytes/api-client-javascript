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
 * The AcceptInvitationResult model module.
 * @module model/AcceptInvitationResult
 * @version 1.0.0
 */
class AcceptInvitationResult {
    /**
     * Constructs a new <code>AcceptInvitationResult</code>.
     * 
     * @alias module:model/AcceptInvitationResult
     */
    constructor() { 
        
        AcceptInvitationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AcceptInvitationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptInvitationResult} obj Optional instance to populate.
     * @return {module:model/AcceptInvitationResult} The populated <code>AcceptInvitationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AcceptInvitationResult();

            if (data.hasOwnProperty('IsNewUser')) {
                obj['IsNewUser'] = ApiClient.convertToType(data['IsNewUser'], 'Boolean');
            }
            if (data.hasOwnProperty('InvitedEmailAddress')) {
                obj['InvitedEmailAddress'] = ApiClient.convertToType(data['InvitedEmailAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Bool indicating if the user accepting the invitation is a new user
 * @member {Boolean} IsNewUser
 */
AcceptInvitationResult.prototype['IsNewUser'] = undefined;

/**
 * The email address that was invited.
 * @member {String} InvitedEmailAddress
 */
AcceptInvitationResult.prototype['InvitedEmailAddress'] = undefined;






export default AcceptInvitationResult;

