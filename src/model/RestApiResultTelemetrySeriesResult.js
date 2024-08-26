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
import TelemetrySeriesResult from './TelemetrySeriesResult';

/**
 * The RestApiResultTelemetrySeriesResult model module.
 * @module model/RestApiResultTelemetrySeriesResult
 * @version 1.0.0
 */
class RestApiResultTelemetrySeriesResult {
    /**
     * Constructs a new <code>RestApiResultTelemetrySeriesResult</code>.
     * Rest api result
     * @alias module:model/RestApiResultTelemetrySeriesResult
     * @param Data {module:model/TelemetrySeriesResult} 
     */
    constructor(Data) { 
        
        RestApiResultTelemetrySeriesResult.initialize(this, Data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Data) { 
        obj['Data'] = Data;
    }

    /**
     * Constructs a <code>RestApiResultTelemetrySeriesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiResultTelemetrySeriesResult} obj Optional instance to populate.
     * @return {module:model/RestApiResultTelemetrySeriesResult} The populated <code>RestApiResultTelemetrySeriesResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiResultTelemetrySeriesResult();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = TelemetrySeriesResult.constructFromObject(data['Data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TelemetrySeriesResult} Data
 */
RestApiResultTelemetrySeriesResult.prototype['Data'] = undefined;






export default RestApiResultTelemetrySeriesResult;

