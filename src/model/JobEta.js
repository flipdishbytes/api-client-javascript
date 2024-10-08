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
 * The JobEta model module.
 * @module model/JobEta
 * @version 1.0.0
 */
class JobEta {
    /**
     * Constructs a new <code>JobEta</code>.
     * Job Eta
     * @alias module:model/JobEta
     */
    constructor() { 
        
        JobEta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobEta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobEta} obj Optional instance to populate.
     * @return {module:model/JobEta} The populated <code>JobEta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobEta();

            if (data.hasOwnProperty('Pickup')) {
                obj['Pickup'] = ApiClient.convertToType(data['Pickup'], 'String');
            }
            if (data.hasOwnProperty('Dropoff')) {
                obj['Dropoff'] = ApiClient.convertToType(data['Dropoff'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Pickup
 * @member {String} Pickup
 */
JobEta.prototype['Pickup'] = undefined;

/**
 * Dropoff
 * @member {String} Dropoff
 */
JobEta.prototype['Dropoff'] = undefined;






export default JobEta;

