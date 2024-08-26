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
 * The UpdatePayGreenConfigurationRequest model module.
 * @module model/UpdatePayGreenConfigurationRequest
 * @version 1.0.0
 */
class UpdatePayGreenConfigurationRequest {
    /**
     * Constructs a new <code>UpdatePayGreenConfigurationRequest</code>.
     * @alias module:model/UpdatePayGreenConfigurationRequest
     */
    constructor() { 
        
        UpdatePayGreenConfigurationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePayGreenConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePayGreenConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePayGreenConfigurationRequest} The populated <code>UpdatePayGreenConfigurationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePayGreenConfigurationRequest();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AssignedStores')) {
                obj['AssignedStores'] = ApiClient.convertToType(data['AssignedStores'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
UpdatePayGreenConfigurationRequest.prototype['Name'] = undefined;

/**
 * @member {Array.<Number>} AssignedStores
 */
UpdatePayGreenConfigurationRequest.prototype['AssignedStores'] = undefined;






export default UpdatePayGreenConfigurationRequest;

