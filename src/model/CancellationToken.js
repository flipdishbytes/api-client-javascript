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
import WaitHandle from './WaitHandle';

/**
 * The CancellationToken model module.
 * @module model/CancellationToken
 * @version 1.0.0
 */
class CancellationToken {
    /**
     * Constructs a new <code>CancellationToken</code>.
     * @alias module:model/CancellationToken
     */
    constructor() { 
        
        CancellationToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CancellationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancellationToken} obj Optional instance to populate.
     * @return {module:model/CancellationToken} The populated <code>CancellationToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CancellationToken();

            if (data.hasOwnProperty('IsCancellationRequested')) {
                obj['IsCancellationRequested'] = ApiClient.convertToType(data['IsCancellationRequested'], 'Boolean');
            }
            if (data.hasOwnProperty('CanBeCanceled')) {
                obj['CanBeCanceled'] = ApiClient.convertToType(data['CanBeCanceled'], 'Boolean');
            }
            if (data.hasOwnProperty('WaitHandle')) {
                obj['WaitHandle'] = WaitHandle.constructFromObject(data['WaitHandle']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} IsCancellationRequested
 */
CancellationToken.prototype['IsCancellationRequested'] = undefined;

/**
 * @member {Boolean} CanBeCanceled
 */
CancellationToken.prototype['CanBeCanceled'] = undefined;

/**
 * @member {module:model/WaitHandle} WaitHandle
 */
CancellationToken.prototype['WaitHandle'] = undefined;






export default CancellationToken;

