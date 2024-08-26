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
import Group from './Group';

/**
 * The CatalogGroupReference model module.
 * @module model/CatalogGroupReference
 * @version 1.0.0
 */
class CatalogGroupReference {
    /**
     * Constructs a new <code>CatalogGroupReference</code>.
     * Reference to an existing {Flipdish.Menus.PublicModels.V1.Catalog.Groups.Group}
     * @alias module:model/CatalogGroupReference
     * @param CatalogGroupId {String} Identifier of the ProductId to use as SubProduct
     * @param GroupType {module:model/CatalogGroupReference.GroupTypeEnum} Type of the SupProduct
     */
    constructor(CatalogGroupId, GroupType) { 
        
        CatalogGroupReference.initialize(this, CatalogGroupId, GroupType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, CatalogGroupId, GroupType) { 
        obj['CatalogGroupId'] = CatalogGroupId;
        obj['GroupType'] = GroupType;
    }

    /**
     * Constructs a <code>CatalogGroupReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogGroupReference} obj Optional instance to populate.
     * @return {module:model/CatalogGroupReference} The populated <code>CatalogGroupReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogGroupReference();

            if (data.hasOwnProperty('Group')) {
                obj['Group'] = Group.constructFromObject(data['Group']);
            }
            if (data.hasOwnProperty('CatalogGroupId')) {
                obj['CatalogGroupId'] = ApiClient.convertToType(data['CatalogGroupId'], 'String');
            }
            if (data.hasOwnProperty('CatalogItemId')) {
                obj['CatalogItemId'] = ApiClient.convertToType(data['CatalogItemId'], 'String');
            }
            if (data.hasOwnProperty('GroupType')) {
                obj['GroupType'] = ApiClient.convertToType(data['GroupType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Group} Group
 */
CatalogGroupReference.prototype['Group'] = undefined;

/**
 * Identifier of the ProductId to use as SubProduct
 * @member {String} CatalogGroupId
 */
CatalogGroupReference.prototype['CatalogGroupId'] = undefined;

/**
 * Identifier of the ProductId to use as SubProduct
 * @member {String} CatalogItemId
 */
CatalogGroupReference.prototype['CatalogItemId'] = undefined;

/**
 * Type of the SupProduct
 * @member {module:model/CatalogGroupReference.GroupTypeEnum} GroupType
 */
CatalogGroupReference.prototype['GroupType'] = undefined;





/**
 * Allowed values for the <code>GroupType</code> property.
 * @enum {String}
 * @readonly
 */
CatalogGroupReference['GroupTypeEnum'] = {

    /**
     * value: "ModifierGroup"
     * @const
     */
    "ModifierGroup": "ModifierGroup"
};



export default CatalogGroupReference;

