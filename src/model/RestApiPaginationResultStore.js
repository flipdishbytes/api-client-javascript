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
import Store from './Store';

/**
 * The RestApiPaginationResultStore model module.
 * @module model/RestApiPaginationResultStore
 * @version 1.0.0
 */
class RestApiPaginationResultStore {
    /**
     * Constructs a new <code>RestApiPaginationResultStore</code>.
     * Rest api pagination result
     * @alias module:model/RestApiPaginationResultStore
     * @param Page {Number} Current page index
     * @param Limit {Number} Current page size
     * @param TotalRecordCount {Number} Total record count
     * @param Data {Array.<module:model/Store>} Generic data object.
     */
    constructor(Page, Limit, TotalRecordCount, Data) { 
        
        RestApiPaginationResultStore.initialize(this, Page, Limit, TotalRecordCount, Data);
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
     * Constructs a <code>RestApiPaginationResultStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestApiPaginationResultStore} obj Optional instance to populate.
     * @return {module:model/RestApiPaginationResultStore} The populated <code>RestApiPaginationResultStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestApiPaginationResultStore();

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
                obj['Data'] = ApiClient.convertToType(data['Data'], [Store]);
            }
        }
        return obj;
    }


}

/**
 * Current page index
 * @member {Number} Page
 */
RestApiPaginationResultStore.prototype['Page'] = undefined;

/**
 * Current page size
 * @member {Number} Limit
 */
RestApiPaginationResultStore.prototype['Limit'] = undefined;

/**
 * Total record count
 * @member {Number} TotalRecordCount
 */
RestApiPaginationResultStore.prototype['TotalRecordCount'] = undefined;

/**
 * Generic data object.
 * @member {Array.<module:model/Store>} Data
 */
RestApiPaginationResultStore.prototype['Data'] = undefined;






export default RestApiPaginationResultStore;

