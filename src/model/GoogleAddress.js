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
import GoogleAddressResult from './GoogleAddressResult';

/**
 * The GoogleAddress model module.
 * @module model/GoogleAddress
 * @version 1.0.0
 */
class GoogleAddress {
    /**
     * Constructs a new <code>GoogleAddress</code>.
     * @alias module:model/GoogleAddress
     */
    constructor() { 
        
        GoogleAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoogleAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleAddress} obj Optional instance to populate.
     * @return {module:model/GoogleAddress} The populated <code>GoogleAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleAddress();

            if (data.hasOwnProperty('Results')) {
                obj['Results'] = ApiClient.convertToType(data['Results'], [GoogleAddressResult]);
            }
            if (data.hasOwnProperty('Result')) {
                obj['Result'] = GoogleAddressResult.constructFromObject(data['Result']);
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GoogleAddressResult>} Results
 */
GoogleAddress.prototype['Results'] = undefined;

/**
 * @member {module:model/GoogleAddressResult} Result
 */
GoogleAddress.prototype['Result'] = undefined;

/**
 * @member {String} Status
 */
GoogleAddress.prototype['Status'] = undefined;






export default GoogleAddress;

