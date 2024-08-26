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
 * The MenuSectionAvailabilityBase model module.
 * @module model/MenuSectionAvailabilityBase
 * @version 1.0.0
 */
class MenuSectionAvailabilityBase {
    /**
     * Constructs a new <code>MenuSectionAvailabilityBase</code>.
     * Menu section availability
     * @alias module:model/MenuSectionAvailabilityBase
     */
    constructor() { 
        
        MenuSectionAvailabilityBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuSectionAvailabilityBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuSectionAvailabilityBase} obj Optional instance to populate.
     * @return {module:model/MenuSectionAvailabilityBase} The populated <code>MenuSectionAvailabilityBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuSectionAvailabilityBase();

            if (data.hasOwnProperty('AvailabilityMode')) {
                obj['AvailabilityMode'] = ApiClient.convertToType(data['AvailabilityMode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Availability mode
 * @member {module:model/MenuSectionAvailabilityBase.AvailabilityModeEnum} AvailabilityMode
 */
MenuSectionAvailabilityBase.prototype['AvailabilityMode'] = undefined;





/**
 * Allowed values for the <code>AvailabilityMode</code> property.
 * @enum {String}
 * @readonly
 */
MenuSectionAvailabilityBase['AvailabilityModeEnum'] = {

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



export default MenuSectionAvailabilityBase;

