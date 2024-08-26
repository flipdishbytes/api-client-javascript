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
import Metafield from './Metafield';
import UpdateCatalogGroupReference from './UpdateCatalogGroupReference';

/**
 * The UpdateCatalogItem model module.
 * @module model/UpdateCatalogItem
 * @version 1.0.0
 */
class UpdateCatalogItem {
    /**
     * Constructs a new <code>UpdateCatalogItem</code>.
     * Update Catalog Item
     * @alias module:model/UpdateCatalogItem
     */
    constructor() { 
        
        UpdateCatalogItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateCatalogItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCatalogItem} obj Optional instance to populate.
     * @return {module:model/UpdateCatalogItem} The populated <code>UpdateCatalogItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCatalogItem();

            if (data.hasOwnProperty('Sku')) {
                obj['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Price')) {
                obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
            }
            if (data.hasOwnProperty('ImageFileName')) {
                obj['ImageFileName'] = ApiClient.convertToType(data['ImageFileName'], 'String');
            }
            if (data.hasOwnProperty('Alcohol')) {
                obj['Alcohol'] = ApiClient.convertToType(data['Alcohol'], 'Boolean');
            }
            if (data.hasOwnProperty('Groups')) {
                obj['Groups'] = ApiClient.convertToType(data['Groups'], [UpdateCatalogGroupReference]);
            }
            if (data.hasOwnProperty('Metafields')) {
                obj['Metafields'] = ApiClient.convertToType(data['Metafields'], [Metafield]);
            }
        }
        return obj;
    }


}

/**
 * Stock Keeping Unit (SKU)
 * @member {String} Sku
 */
UpdateCatalogItem.prototype['Sku'] = undefined;

/**
 * Product name
 * @member {String} Name
 */
UpdateCatalogItem.prototype['Name'] = undefined;

/**
 * Product description
 * @member {String} Description
 */
UpdateCatalogItem.prototype['Description'] = undefined;

/**
 * Product price
 * @member {Number} Price
 */
UpdateCatalogItem.prototype['Price'] = undefined;

/**
 * Image File Name
 * @member {String} ImageFileName
 */
UpdateCatalogItem.prototype['ImageFileName'] = undefined;

/**
 * Product contains alcohol
 * @member {Boolean} Alcohol
 */
UpdateCatalogItem.prototype['Alcohol'] = undefined;

/**
 * Collection of groups associated with this item
 * @member {Array.<module:model/UpdateCatalogGroupReference>} Groups
 */
UpdateCatalogItem.prototype['Groups'] = undefined;

/**
 * Collection of metafields
 * @member {Array.<module:model/Metafield>} Metafields
 */
UpdateCatalogItem.prototype['Metafields'] = undefined;






export default UpdateCatalogItem;

