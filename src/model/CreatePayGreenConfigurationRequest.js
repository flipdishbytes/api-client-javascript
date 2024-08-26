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
 * The CreatePayGreenConfigurationRequest model module.
 * @module model/CreatePayGreenConfigurationRequest
 * @version 1.0.0
 */
class CreatePayGreenConfigurationRequest {
    /**
     * Constructs a new <code>CreatePayGreenConfigurationRequest</code>.
     * @alias module:model/CreatePayGreenConfigurationRequest
     */
    constructor() { 
        
        CreatePayGreenConfigurationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePayGreenConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayGreenConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/CreatePayGreenConfigurationRequest} The populated <code>CreatePayGreenConfigurationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePayGreenConfigurationRequest();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('PayGreenId')) {
                obj['PayGreenId'] = ApiClient.convertToType(data['PayGreenId'], 'String');
            }
            if (data.hasOwnProperty('PayGreenPrivateKey')) {
                obj['PayGreenPrivateKey'] = ApiClient.convertToType(data['PayGreenPrivateKey'], 'String');
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
CreatePayGreenConfigurationRequest.prototype['Name'] = undefined;

/**
 * @member {String} PayGreenId
 */
CreatePayGreenConfigurationRequest.prototype['PayGreenId'] = undefined;

/**
 * @member {String} PayGreenPrivateKey
 */
CreatePayGreenConfigurationRequest.prototype['PayGreenPrivateKey'] = undefined;

/**
 * @member {Array.<Number>} AssignedStores
 */
CreatePayGreenConfigurationRequest.prototype['AssignedStores'] = undefined;






export default CreatePayGreenConfigurationRequest;

