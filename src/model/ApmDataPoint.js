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
 * The ApmDataPoint model module.
 * @module model/ApmDataPoint
 * @version 1.0.0
 */
class ApmDataPoint {
    /**
     * Constructs a new <code>ApmDataPoint</code>.
     * A single data point in timeline graphs related to APM
     * @alias module:model/ApmDataPoint
     */
    constructor() { 
        
        ApmDataPoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApmDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApmDataPoint} obj Optional instance to populate.
     * @return {module:model/ApmDataPoint} The populated <code>ApmDataPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApmDataPoint();

            if (data.hasOwnProperty('PeriodStart')) {
                obj['PeriodStart'] = ApiClient.convertToType(data['PeriodStart'], 'Date');
            }
            if (data.hasOwnProperty('PeriodLengthInDays')) {
                obj['PeriodLengthInDays'] = ApiClient.convertToType(data['PeriodLengthInDays'], 'Number');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date from which the data point starts
 * @member {Date} PeriodStart
 */
ApmDataPoint.prototype['PeriodStart'] = undefined;

/**
 * The length in days that this data point covers
 * @member {Number} PeriodLengthInDays
 */
ApmDataPoint.prototype['PeriodLengthInDays'] = undefined;

/**
 * The value of this data point
 * @member {Number} Value
 */
ApmDataPoint.prototype['Value'] = undefined;






export default ApmDataPoint;

