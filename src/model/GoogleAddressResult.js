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
import GoogleAddressComponent from './GoogleAddressComponent';
import GoogleGeometry from './GoogleGeometry';

/**
 * The GoogleAddressResult model module.
 * @module model/GoogleAddressResult
 * @version 1.0.0
 */
class GoogleAddressResult {
    /**
     * Constructs a new <code>GoogleAddressResult</code>.
     * @alias module:model/GoogleAddressResult
     */
    constructor() { 
        
        GoogleAddressResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoogleAddressResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleAddressResult} obj Optional instance to populate.
     * @return {module:model/GoogleAddressResult} The populated <code>GoogleAddressResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleAddressResult();

            if (data.hasOwnProperty('Address_components')) {
                obj['Address_components'] = ApiClient.convertToType(data['Address_components'], [GoogleAddressComponent]);
            }
            if (data.hasOwnProperty('Formatted_address')) {
                obj['Formatted_address'] = ApiClient.convertToType(data['Formatted_address'], 'String');
            }
            if (data.hasOwnProperty('Geometry')) {
                obj['Geometry'] = GoogleGeometry.constructFromObject(data['Geometry']);
            }
            if (data.hasOwnProperty('Place_id')) {
                obj['Place_id'] = ApiClient.convertToType(data['Place_id'], 'String');
            }
            if (data.hasOwnProperty('Types')) {
                obj['Types'] = ApiClient.convertToType(data['Types'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GoogleAddressComponent>} Address_components
 */
GoogleAddressResult.prototype['Address_components'] = undefined;

/**
 * @member {String} Formatted_address
 */
GoogleAddressResult.prototype['Formatted_address'] = undefined;

/**
 * @member {module:model/GoogleGeometry} Geometry
 */
GoogleAddressResult.prototype['Geometry'] = undefined;

/**
 * @member {String} Place_id
 */
GoogleAddressResult.prototype['Place_id'] = undefined;

/**
 * @member {Array.<String>} Types
 */
GoogleAddressResult.prototype['Types'] = undefined;






export default GoogleAddressResult;

