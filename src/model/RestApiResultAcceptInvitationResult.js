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
import AcceptInvitationResult from './AcceptInvitationResult';

/**
 * The RestApiResultAcceptInvitationResult model module.
 * @module model/RestApiResultAcceptInvitationResult
 * @version 1.0.0
 */
class RestApiResultAcceptInvitationResult {
    /**
     * Constructs a new <code>RestApiResultAcceptInvitationResult</code>.
     * Rest api result
     * @alias module:model/RestApiResultAcceptInvitationResult
     * @param Data {module:model/AcceptInvitationResult} 
     */
    constructor(Data) { 
        
        RestApiResultAcceptInvitationResult.initialize(this, Data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Data) { 
        obj['Data'] = Data;
    }

    /**
     * Constructs a <code>RestApiResultAcceptInvitationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultAcceptInvitationResult} obj Optional instance to populate.
     * @return {module:model/RestApiResultAcceptInvitationResult} The populated <code>RestApiResultAcceptInvitationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultAcceptInvitationResult();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = AcceptInvitationResult.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AcceptInvitationResult} Data
 */
RestApiResultAcceptInvitationResult.prototype['Data'] = undefined;






export default RestApiResultAcceptInvitationResult;

