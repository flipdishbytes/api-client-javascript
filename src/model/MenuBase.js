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
 * The MenuBase model module.
 * @module model/MenuBase
 * @version 1.0.0
 */
class MenuBase {
    /**
     * Constructs a new <code>MenuBase</code>.
     * Menu base
     * @alias module:model/MenuBase
     */
    constructor() { 
        
        MenuBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuBase} obj Optional instance to populate.
     * @return {module:model/MenuBase} The populated <code>MenuBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuBase();

            if (data.hasOwnProperty('DisplaySectionLinks')) {
                obj['DisplaySectionLinks'] = ApiClient.convertToType(data['DisplaySectionLinks'], 'Boolean');
            }
            if (data.hasOwnProperty('MenuSectionBehaviour')) {
                obj['MenuSectionBehaviour'] = ApiClient.convertToType(data['MenuSectionBehaviour'], 'String');
            }
            if (data.hasOwnProperty('TaxType')) {
                obj['TaxType'] = ApiClient.convertToType(data['TaxType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Display menu section link on UI
 * @member {Boolean} DisplaySectionLinks
 */
MenuBase.prototype['DisplaySectionLinks'] = undefined;

/**
 * Menu section behaviour
 * @member {module:model/MenuBase.MenuSectionBehaviourEnum} MenuSectionBehaviour
 */
MenuBase.prototype['MenuSectionBehaviour'] = undefined;

/**
 * Tax type
 * @member {module:model/MenuBase.TaxTypeEnum} TaxType
 */
MenuBase.prototype['TaxType'] = undefined;





/**
 * Allowed values for the <code>MenuSectionBehaviour</code> property.
 * @enum {String}
 * @readonly
 */
MenuBase['MenuSectionBehaviourEnum'] = {

    /**
     * value: "ExpandSingle"
     * @const
     */
    "ExpandSingle": "ExpandSingle",

    /**
     * value: "ExpandMultiple"
     * @const
     */
    "ExpandMultiple": "ExpandMultiple"
};


/**
 * Allowed values for the <code>TaxType</code> property.
 * @enum {String}
 * @readonly
 */
MenuBase['TaxTypeEnum'] = {

    /**
     * value: "IncludedInBasePrice"
     * @const
     */
    "IncludedInBasePrice": "IncludedInBasePrice",

    /**
     * value: "ExcludedFromBasePrice"
     * @const
     */
    "ExcludedFromBasePrice": "ExcludedFromBasePrice"
};



export default MenuBase;

