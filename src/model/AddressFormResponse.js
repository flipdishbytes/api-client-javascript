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
import AddressFormDisplayFormat from './AddressFormDisplayFormat';
import DynamicFormField from './DynamicFormField';

/**
 * The AddressFormResponse model module.
 * @module model/AddressFormResponse
 * @version 1.0.0
 */
class AddressFormResponse {
    /**
     * Constructs a new <code>AddressFormResponse</code>.
     * A response of a dyanmic form definition.
     * @alias module:model/AddressFormResponse
     */
    constructor() { 
        
        AddressFormResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressFormResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressFormResponse} obj Optional instance to populate.
     * @return {module:model/AddressFormResponse} The populated <code>AddressFormResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressFormResponse();

            if (data.hasOwnProperty('FormData')) {
                obj['FormData'] = ApiClient.convertToType(data['FormData'], [DynamicFormField]);
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
            }
            if (data.hasOwnProperty('DisplayFormat')) {
                obj['DisplayFormat'] = AddressFormDisplayFormat.constructFromObject(data['DisplayFormat']);
            }
        }
        return obj;
    }


}

/**
 * List of field definitions.
 * @member {Array.<module:model/DynamicFormField>} FormData
 */
AddressFormResponse.prototype['FormData'] = undefined;

/**
 * ISO two letter code.
 * @member {String} CountryCode
 */
AddressFormResponse.prototype['CountryCode'] = undefined;

/**
 * ISO culture code.
 * @member {String} Language
 */
AddressFormResponse.prototype['Language'] = undefined;

/**
 * @member {module:model/AddressFormDisplayFormat} DisplayFormat
 */
AddressFormResponse.prototype['DisplayFormat'] = undefined;






export default AddressFormResponse;

