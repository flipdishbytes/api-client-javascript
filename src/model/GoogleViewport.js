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
import GoogleCoordinates from './GoogleCoordinates';

/**
 * The GoogleViewport model module.
 * @module model/GoogleViewport
 * @version 1.0.0
 */
class GoogleViewport {
    /**
     * Constructs a new <code>GoogleViewport</code>.
     * @alias module:model/GoogleViewport
     */
    constructor() { 
        
        GoogleViewport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoogleViewport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleViewport} obj Optional instance to populate.
     * @return {module:model/GoogleViewport} The populated <code>GoogleViewport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleViewport();

            if (data.hasOwnProperty('Northeast')) {
                obj['Northeast'] = GoogleCoordinates.constructFromObject(data['Northeast']);
            }
            if (data.hasOwnProperty('Southwest')) {
                obj['Southwest'] = GoogleCoordinates.constructFromObject(data['Southwest']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GoogleCoordinates} Northeast
 */
GoogleViewport.prototype['Northeast'] = undefined;

/**
 * @member {module:model/GoogleCoordinates} Southwest
 */
GoogleViewport.prototype['Southwest'] = undefined;






export default GoogleViewport;

