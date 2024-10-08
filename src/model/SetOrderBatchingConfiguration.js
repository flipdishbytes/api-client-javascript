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
 * The SetOrderBatchingConfiguration model module.
 * @module model/SetOrderBatchingConfiguration
 * @version 1.0.0
 */
class SetOrderBatchingConfiguration {
    /**
     * Constructs a new <code>SetOrderBatchingConfiguration</code>.
     * Describes the configuration of OrderBatching
     * @alias module:model/SetOrderBatchingConfiguration
     */
    constructor() { 
        
        SetOrderBatchingConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetOrderBatchingConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetOrderBatchingConfiguration} obj Optional instance to populate.
     * @return {module:model/SetOrderBatchingConfiguration} The populated <code>SetOrderBatchingConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetOrderBatchingConfiguration();

            if (data.hasOwnProperty('BatchIntervalInSeconds')) {
                obj['BatchIntervalInSeconds'] = ApiClient.convertToType(data['BatchIntervalInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('Enabled')) {
                obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Batch sending interval in seconds
 * @member {Number} BatchIntervalInSeconds
 */
SetOrderBatchingConfiguration.prototype['BatchIntervalInSeconds'] = undefined;

/**
 * OrderBatching is enabled or not
 * @member {Boolean} Enabled
 */
SetOrderBatchingConfiguration.prototype['Enabled'] = undefined;






export default SetOrderBatchingConfiguration;

