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
 * The JobProof model module.
 * @module model/JobProof
 * @version 1.0.0
 */
class JobProof {
    /**
     * Constructs a new <code>JobProof</code>.
     * Job Proof
     * @alias module:model/JobProof
     */
    constructor() { 
        
        JobProof.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobProof</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobProof} obj Optional instance to populate.
     * @return {module:model/JobProof} The populated <code>JobProof</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobProof();

            if (data.hasOwnProperty('SignatureUrl')) {
                obj['SignatureUrl'] = ApiClient.convertToType(data['SignatureUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Signature Url
 * @member {String} SignatureUrl
 */
JobProof.prototype['SignatureUrl'] = undefined;






export default JobProof;

