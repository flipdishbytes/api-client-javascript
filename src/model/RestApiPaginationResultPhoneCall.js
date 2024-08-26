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
import PhoneCall from './PhoneCall';

/**
 * The RestApiPaginationResultPhoneCall model module.
 * @module model/RestApiPaginationResultPhoneCall
 * @version 1.0.0
 */
class RestApiPaginationResultPhoneCall {
    /**
     * Constructs a new <code>RestApiPaginationResultPhoneCall</code>.
     * Rest api pagination result
     * @alias module:model/RestApiPaginationResultPhoneCall
     * @param Page {Number} Current page index
     * @param Limit {Number} Current page size
     * @param TotalRecordCount {Number} Total record count
     * @param Data {Array.<module:model/PhoneCall>} Generic data object.
     */
    constructor(Page, Limit, TotalRecordCount, Data) { 
        
        RestApiPaginationResultPhoneCall.initialize(this, Page, Limit, TotalRecordCount, Data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Page, Limit, TotalRecordCount, Data) { 
        obj['Page'] = Page;
        obj['Limit'] = Limit;
        obj['TotalRecordCount'] = TotalRecordCount;
        obj['Data'] = Data;
    }

    /**
     * Constructs a <code>RestApiPaginationResultPhoneCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiPaginationResultPhoneCall} obj Optional instance to populate.
     * @return {module:model/RestApiPaginationResultPhoneCall} The populated <code>RestApiPaginationResultPhoneCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiPaginationResultPhoneCall();

            if (data.hasOwnProperty('Page')) {
                obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'Number');
            }
            if (data.hasOwnProperty('TotalRecordCount')) {
                obj['TotalRecordCount'] = ApiClient.convertToType(data['TotalRecordCount'], 'Number');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [PhoneCall]);
            }
        }
        return obj;
    }


}

/**
 * Current page index
 * @member {Number} Page
 */
RestApiPaginationResultPhoneCall.prototype['Page'] = undefined;

/**
 * Current page size
 * @member {Number} Limit
 */
RestApiPaginationResultPhoneCall.prototype['Limit'] = undefined;

/**
 * Total record count
 * @member {Number} TotalRecordCount
 */
RestApiPaginationResultPhoneCall.prototype['TotalRecordCount'] = undefined;

/**
 * Generic data object.
 * @member {Array.<module:model/PhoneCall>} Data
 */
RestApiPaginationResultPhoneCall.prototype['Data'] = undefined;






export default RestApiPaginationResultPhoneCall;

