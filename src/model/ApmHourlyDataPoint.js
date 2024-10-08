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
 * The ApmHourlyDataPoint model module.
 * @module model/ApmHourlyDataPoint
 * @version 1.0.0
 */
class ApmHourlyDataPoint {
    /**
     * Constructs a new <code>ApmHourlyDataPoint</code>.
     * Provides an average value for a single hour of day of the week
     * @alias module:model/ApmHourlyDataPoint
     */
    constructor() { 
        
        ApmHourlyDataPoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApmHourlyDataPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApmHourlyDataPoint} obj Optional instance to populate.
     * @return {module:model/ApmHourlyDataPoint} The populated <code>ApmHourlyDataPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApmHourlyDataPoint();

            if (data.hasOwnProperty('Day')) {
                obj['Day'] = ApiClient.convertToType(data['Day'], 'String');
            }
            if (data.hasOwnProperty('Hour')) {
                obj['Hour'] = ApiClient.convertToType(data['Hour'], 'Number');
            }
            if (data.hasOwnProperty('TotalValue')) {
                obj['TotalValue'] = ApiClient.convertToType(data['TotalValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Day of the week
 * @member {module:model/ApmHourlyDataPoint.DayEnum} Day
 */
ApmHourlyDataPoint.prototype['Day'] = undefined;

/**
 * Hour in the day
 * @member {Number} Hour
 */
ApmHourlyDataPoint.prototype['Hour'] = undefined;

/**
 * Total Value
 * @member {Number} TotalValue
 */
ApmHourlyDataPoint.prototype['TotalValue'] = undefined;





/**
 * Allowed values for the <code>Day</code> property.
 * @enum {String}
 * @readonly
 */
ApmHourlyDataPoint['DayEnum'] = {

    /**
     * value: "Sunday"
     * @const
     */
    "Sunday": "Sunday",

    /**
     * value: "Monday"
     * @const
     */
    "Monday": "Monday",

    /**
     * value: "Tuesday"
     * @const
     */
    "Tuesday": "Tuesday",

    /**
     * value: "Wednesday"
     * @const
     */
    "Wednesday": "Wednesday",

    /**
     * value: "Thursday"
     * @const
     */
    "Thursday": "Thursday",

    /**
     * value: "Friday"
     * @const
     */
    "Friday": "Friday",

    /**
     * value: "Saturday"
     * @const
     */
    "Saturday": "Saturday"
};



export default ApmHourlyDataPoint;

