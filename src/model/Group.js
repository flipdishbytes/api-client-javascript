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
import ProductReference from './ProductReference';

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * CatalogGroup
     * @alias module:model/Group
     * @param GroupType {module:model/Group.GroupTypeEnum} Type of group (ModifierGroup, etc)
     * @param Sku {String} Stock Keeping Unit (SKU)
     * @param Name {String} Group name
     */
    constructor(GroupType, Sku, Name) { 
        
        Group.initialize(this, GroupType, Sku, Name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, GroupType, Sku, Name) { 
        obj['GroupType'] = GroupType;
        obj['Sku'] = Sku;
        obj['Name'] = Name;
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('CatalogGroupId')) {
                obj['CatalogGroupId'] = ApiClient.convertToType(data['CatalogGroupId'], 'String');
            }
            if (data.hasOwnProperty('CatalogItemId')) {
                obj['CatalogItemId'] = ApiClient.convertToType(data['CatalogItemId'], 'String');
            }
            if (data.hasOwnProperty('IsArchived')) {
                obj['IsArchived'] = ApiClient.convertToType(data['IsArchived'], 'Boolean');
            }
            if (data.hasOwnProperty('MinSelectCount')) {
                obj['MinSelectCount'] = ApiClient.convertToType(data['MinSelectCount'], 'Number');
            }
            if (data.hasOwnProperty('MaxSelectCount')) {
                obj['MaxSelectCount'] = ApiClient.convertToType(data['MaxSelectCount'], 'Number');
            }
            if (data.hasOwnProperty('Products')) {
                obj['Products'] = ApiClient.convertToType(data['Products'], [ProductReference]);
            }
            if (data.hasOwnProperty('Metafields')) {
                obj['Metafields'] = ApiClient.convertToType(data['Metafields'], [Metafield]);
            }
            if (data.hasOwnProperty('GroupType')) {
                obj['GroupType'] = ApiClient.convertToType(data['GroupType'], 'String');
            }
            if (data.hasOwnProperty('Sku')) {
                obj['Sku'] = ApiClient.convertToType(data['Sku'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AutogenerateDisplayText')) {
                obj['AutogenerateDisplayText'] = ApiClient.convertToType(data['AutogenerateDisplayText'], 'Boolean');
            }
            if (data.hasOwnProperty('ImageFileName')) {
                obj['ImageFileName'] = ApiClient.convertToType(data['ImageFileName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique catalog group id
 * @member {String} CatalogGroupId
 */
Group.prototype['CatalogGroupId'] = undefined;

/**
 * Unique catalog item id
 * @member {String} CatalogItemId
 */
Group.prototype['CatalogItemId'] = undefined;

/**
 * Returns true if the group is archived
 * @member {Boolean} IsArchived
 */
Group.prototype['IsArchived'] = undefined;

/**
 * Minimum number of items that the user has to select
 * @member {Number} MinSelectCount
 */
Group.prototype['MinSelectCount'] = undefined;

/**
 * Maximum number of items that the user has to select
 * @member {Number} MaxSelectCount
 */
Group.prototype['MaxSelectCount'] = undefined;

/**
 * Collection of items associated with this product
 * @member {Array.<module:model/ProductReference>} Products
 */
Group.prototype['Products'] = undefined;

/**
 * Collection of metafields
 * @member {Array.<module:model/Metafield>} Metafields
 */
Group.prototype['Metafields'] = undefined;

/**
 * Type of group (ModifierGroup, etc)
 * @member {module:model/Group.GroupTypeEnum} GroupType
 */
Group.prototype['GroupType'] = undefined;

/**
 * Stock Keeping Unit (SKU)
 * @member {String} Sku
 */
Group.prototype['Sku'] = undefined;

/**
 * Group name
 * @member {String} Name
 */
Group.prototype['Name'] = undefined;

/**
 * Autogenerate display text in ordering applications
 * @member {Boolean} AutogenerateDisplayText
 */
Group.prototype['AutogenerateDisplayText'] = undefined;

/**
 * Image File Name
 * @member {String} ImageFileName
 */
Group.prototype['ImageFileName'] = undefined;





/**
 * Allowed values for the <code>GroupType</code> property.
 * @enum {String}
 * @readonly
 */
Group['GroupTypeEnum'] = {

    /**
     * value: "ModifierGroup"
     * @const
     */
    "ModifierGroup": "ModifierGroup"
};



export default Group;

