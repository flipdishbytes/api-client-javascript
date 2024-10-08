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
import MenuItemOptionSetItem from './MenuItemOptionSetItem';

/**
 * The MenuItemOptionSet model module.
 * @module model/MenuItemOptionSet
 * @version 1.0.0
 */
class MenuItemOptionSet {
    /**
     * Constructs a new <code>MenuItemOptionSet</code>.
     * Menu item option set
     * @alias module:model/MenuItemOptionSet
     */
    constructor() { 
        
        MenuItemOptionSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuItemOptionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuItemOptionSet} obj Optional instance to populate.
     * @return {module:model/MenuItemOptionSet} The populated <code>MenuItemOptionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuItemOptionSet();

            if (data.hasOwnProperty('MenuItemOptionSetId')) {
                obj['MenuItemOptionSetId'] = ApiClient.convertToType(data['MenuItemOptionSetId'], 'Number');
            }
            if (data.hasOwnProperty('ImageName')) {
                obj['ImageName'] = ApiClient.convertToType(data['ImageName'], 'String');
            }
            if (data.hasOwnProperty('ImageUrl')) {
                obj['ImageUrl'] = ApiClient.convertToType(data['ImageUrl'], 'String');
            }
            if (data.hasOwnProperty('MenuItemOptionSetItems')) {
                obj['MenuItemOptionSetItems'] = ApiClient.convertToType(data['MenuItemOptionSetItems'], [MenuItemOptionSetItem]);
            }
            if (data.hasOwnProperty('PublicId')) {
                obj['PublicId'] = ApiClient.convertToType(data['PublicId'], 'String');
            }
            if (data.hasOwnProperty('CatalogItemId')) {
                obj['CatalogItemId'] = ApiClient.convertToType(data['CatalogItemId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('IsMasterOptionSet')) {
                obj['IsMasterOptionSet'] = ApiClient.convertToType(data['IsMasterOptionSet'], 'Boolean');
            }
            if (data.hasOwnProperty('DisplayOrder')) {
                obj['DisplayOrder'] = ApiClient.convertToType(data['DisplayOrder'], 'Number');
            }
            if (data.hasOwnProperty('MinSelectCount')) {
                obj['MinSelectCount'] = ApiClient.convertToType(data['MinSelectCount'], 'Number');
            }
            if (data.hasOwnProperty('MaxSelectCount')) {
                obj['MaxSelectCount'] = ApiClient.convertToType(data['MaxSelectCount'], 'Number');
            }
            if (data.hasOwnProperty('CellLayoutType')) {
                obj['CellLayoutType'] = ApiClient.convertToType(data['CellLayoutType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Menu item option set identifier
 * @member {Number} MenuItemOptionSetId
 */
MenuItemOptionSet.prototype['MenuItemOptionSetId'] = undefined;

/**
 * Image Name
 * @member {String} ImageName
 */
MenuItemOptionSet.prototype['ImageName'] = undefined;

/**
 * Image url
 * @member {String} ImageUrl
 */
MenuItemOptionSet.prototype['ImageUrl'] = undefined;

/**
 * Option set items
 * @member {Array.<module:model/MenuItemOptionSetItem>} MenuItemOptionSetItems
 */
MenuItemOptionSet.prototype['MenuItemOptionSetItems'] = undefined;

/**
 * Permanent reference to the item.
 * @member {String} PublicId
 */
MenuItemOptionSet.prototype['PublicId'] = undefined;

/**
 * Catalog item Id when the OptionSet is associated to a Product
 * @member {String} CatalogItemId
 */
MenuItemOptionSet.prototype['CatalogItemId'] = undefined;

/**
 * Menu item option set name
 * @member {String} Name
 */
MenuItemOptionSet.prototype['Name'] = undefined;

/**
 * Is master option set. This can affect the layout of the options in the menu displayed to the customer. Usually it is true if the option could be considerd a standalone item as opposed to an addition (\"with ketchup\") or modifier (\"large\").
 * @member {Boolean} IsMasterOptionSet
 */
MenuItemOptionSet.prototype['IsMasterOptionSet'] = undefined;

/**
 * Display order. Displayed in ascending order.
 * @member {Number} DisplayOrder
 */
MenuItemOptionSet.prototype['DisplayOrder'] = undefined;

/**
 * Minimum items must be selected
 * @member {Number} MinSelectCount
 */
MenuItemOptionSet.prototype['MinSelectCount'] = undefined;

/**
 * Maximum number of items can be selected
 * @member {Number} MaxSelectCount
 */
MenuItemOptionSet.prototype['MaxSelectCount'] = undefined;

/**
 * Small | Medium | Large  Affects the layout of the menu.
 * @member {module:model/MenuItemOptionSet.CellLayoutTypeEnum} CellLayoutType
 */
MenuItemOptionSet.prototype['CellLayoutType'] = undefined;





/**
 * Allowed values for the <code>CellLayoutType</code> property.
 * @enum {String}
 * @readonly
 */
MenuItemOptionSet['CellLayoutTypeEnum'] = {

    /**
     * value: "Small"
     * @const
     */
    "Small": "Small",

    /**
     * value: "Medium"
     * @const
     */
    "Medium": "Medium",

    /**
     * value: "Large"
     * @const
     */
    "Large": "Large",

    /**
     * value: "HiddenImage"
     * @const
     */
    "HiddenImage": "HiddenImage"
};



export default MenuItemOptionSet;

