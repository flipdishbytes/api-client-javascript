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
 * The TeammateBase model module.
 * @module model/TeammateBase
 * @version 1.0.0
 */
class TeammateBase {
    /**
     * Constructs a new <code>TeammateBase</code>.
     * 
     * @alias module:model/TeammateBase
     */
    constructor() { 
        
        TeammateBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeammateBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeammateBase} obj Optional instance to populate.
     * @return {module:model/TeammateBase} The populated <code>TeammateBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeammateBase();

            if (data.hasOwnProperty('AppAccessLevel')) {
                obj['AppAccessLevel'] = ApiClient.convertToType(data['AppAccessLevel'], 'String');
            }
            if (data.hasOwnProperty('HasAccessToAllStores')) {
                obj['HasAccessToAllStores'] = ApiClient.convertToType(data['HasAccessToAllStores'], 'Boolean');
            }
            if (data.hasOwnProperty('StoreIds')) {
                obj['StoreIds'] = ApiClient.convertToType(data['StoreIds'], ['Number']);
            }
            if (data.hasOwnProperty('PropertyIds')) {
                obj['PropertyIds'] = ApiClient.convertToType(data['PropertyIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * App access level
 * @member {module:model/TeammateBase.AppAccessLevelEnum} AppAccessLevel
 */
TeammateBase.prototype['AppAccessLevel'] = undefined;

/**
 * The user has access to all stores for the app (including new stores that added later)
 * @member {Boolean} HasAccessToAllStores
 */
TeammateBase.prototype['HasAccessToAllStores'] = undefined;

/**
 * Store IDs the user has access to (if HasAccessToAllStores is false)
 * @member {Array.<Number>} StoreIds
 */
TeammateBase.prototype['StoreIds'] = undefined;

/**
 * Property Ids the user has access to (if HasAccessToAllStores is false)
 * @member {Array.<String>} PropertyIds
 */
TeammateBase.prototype['PropertyIds'] = undefined;





/**
 * Allowed values for the <code>AppAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
TeammateBase['AppAccessLevelEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "Owner"
     * @const
     */
    "Owner": "Owner",

    /**
     * value: "StoreOwner"
     * @const
     */
    "StoreOwner": "StoreOwner",

    /**
     * value: "ManagedOwner"
     * @const
     */
    "ManagedOwner": "ManagedOwner",

    /**
     * value: "Integrator"
     * @const
     */
    "Integrator": "Integrator",

    /**
     * value: "PropertyManager"
     * @const
     */
    "PropertyManager": "PropertyManager",

    /**
     * value: "StoreManager"
     * @const
     */
    "StoreManager": "StoreManager",

    /**
     * value: "StoreStaff"
     * @const
     */
    "StoreStaff": "StoreStaff",

    /**
     * value: "StoreReadOnlyAccess"
     * @const
     */
    "StoreReadOnlyAccess": "StoreReadOnlyAccess",

    /**
     * value: "FinanceManger"
     * @const
     */
    "FinanceManger": "FinanceManger",

    /**
     * value: "Onboarding"
     * @const
     */
    "Onboarding": "Onboarding",

    /**
     * value: "Support"
     * @const
     */
    "Support": "Support"
};



export default TeammateBase;

