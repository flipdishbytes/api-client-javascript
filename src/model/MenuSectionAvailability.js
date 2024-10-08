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
import BusinessHoursPeriod from './BusinessHoursPeriod';

/**
 * The MenuSectionAvailability model module.
 * @module model/MenuSectionAvailability
 * @version 1.0.0
 */
class MenuSectionAvailability {
    /**
     * Constructs a new <code>MenuSectionAvailability</code>.
     * Menu section availability
     * @alias module:model/MenuSectionAvailability
     */
    constructor() { 
        
        MenuSectionAvailability.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuSectionAvailability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuSectionAvailability} obj Optional instance to populate.
     * @return {module:model/MenuSectionAvailability} The populated <code>MenuSectionAvailability</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuSectionAvailability();

            if (data.hasOwnProperty('AvailableTimes')) {
                obj['AvailableTimes'] = ApiClient.convertToType(data['AvailableTimes'], [BusinessHoursPeriod]);
            }
            if (data.hasOwnProperty('AvailabilityMode')) {
                obj['AvailabilityMode'] = ApiClient.convertToType(data['AvailabilityMode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Available times
 * @member {Array.<module:model/BusinessHoursPeriod>} AvailableTimes
 */
MenuSectionAvailability.prototype['AvailableTimes'] = undefined;

/**
 * Availability mode
 * @member {module:model/MenuSectionAvailability.AvailabilityModeEnum} AvailabilityMode
 */
MenuSectionAvailability.prototype['AvailabilityMode'] = undefined;





/**
 * Allowed values for the <code>AvailabilityMode</code> property.
 * @enum {String}
 * @readonly
 */
MenuSectionAvailability['AvailabilityModeEnum'] = {

    /**
     * value: "DisplayAlways"
     * @const
     */
    "DisplayAlways": "DisplayAlways",

    /**
     * value: "DisplayBasedOnTimes"
     * @const
     */
    "DisplayBasedOnTimes": "DisplayBasedOnTimes",

    /**
     * value: "DisplayAlwaysStartCollapsed"
     * @const
     */
    "DisplayAlwaysStartCollapsed": "DisplayAlwaysStartCollapsed",

    /**
     * value: "DisplayAlwaysStartCollapsedBasedOnTimes"
     * @const
     */
    "DisplayAlwaysStartCollapsedBasedOnTimes": "DisplayAlwaysStartCollapsedBasedOnTimes"
};



export default MenuSectionAvailability;

