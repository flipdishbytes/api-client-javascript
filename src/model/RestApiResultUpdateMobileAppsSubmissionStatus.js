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
import UpdateMobileAppsSubmissionStatus from './UpdateMobileAppsSubmissionStatus';

/**
 * The RestApiResultUpdateMobileAppsSubmissionStatus model module.
 * @module model/RestApiResultUpdateMobileAppsSubmissionStatus
 * @version 1.0.0
 */
class RestApiResultUpdateMobileAppsSubmissionStatus {
    /**
     * Constructs a new <code>RestApiResultUpdateMobileAppsSubmissionStatus</code>.
     * Rest api result
     * @alias module:model/RestApiResultUpdateMobileAppsSubmissionStatus
     * @param Data {module:model/UpdateMobileAppsSubmissionStatus} 
     */
    constructor(Data) { 
        
        RestApiResultUpdateMobileAppsSubmissionStatus.initialize(this, Data);
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
     * Constructs a <code>RestApiResultUpdateMobileAppsSubmissionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultUpdateMobileAppsSubmissionStatus} obj Optional instance to populate.
     * @return {module:model/RestApiResultUpdateMobileAppsSubmissionStatus} The populated <code>RestApiResultUpdateMobileAppsSubmissionStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultUpdateMobileAppsSubmissionStatus();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = UpdateMobileAppsSubmissionStatus.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UpdateMobileAppsSubmissionStatus} Data
 */
RestApiResultUpdateMobileAppsSubmissionStatus.prototype['Data'] = undefined;






export default RestApiResultUpdateMobileAppsSubmissionStatus;

