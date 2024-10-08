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
 * The TelemetrySeriesProperty model module.
 * @module model/TelemetrySeriesProperty
 * @version 1.0.0
 */
class TelemetrySeriesProperty {
    /**
     * Constructs a new <code>TelemetrySeriesProperty</code>.
     * @alias module:model/TelemetrySeriesProperty
     */
    constructor() { 
        
        TelemetrySeriesProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TelemetrySeriesProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TelemetrySeriesProperty} obj Optional instance to populate.
     * @return {module:model/TelemetrySeriesProperty} The populated <code>TelemetrySeriesProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TelemetrySeriesProperty();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('IntValues')) {
                obj['IntValues'] = ApiClient.convertToType(data['IntValues'], ['Number']);
            }
            if (data.hasOwnProperty('StringValues')) {
                obj['StringValues'] = ApiClient.convertToType(data['StringValues'], ['String']);
            }
            if (data.hasOwnProperty('DoubleValues')) {
                obj['DoubleValues'] = ApiClient.convertToType(data['DoubleValues'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
TelemetrySeriesProperty.prototype['Name'] = undefined;

/**
 * @member {String} Type
 */
TelemetrySeriesProperty.prototype['Type'] = undefined;

/**
 * @member {Array.<Number>} IntValues
 */
TelemetrySeriesProperty.prototype['IntValues'] = undefined;

/**
 * @member {Array.<String>} StringValues
 */
TelemetrySeriesProperty.prototype['StringValues'] = undefined;

/**
 * @member {Array.<Number>} DoubleValues
 */
TelemetrySeriesProperty.prototype['DoubleValues'] = undefined;






export default TelemetrySeriesProperty;

