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
import MenuTaxRate from './MenuTaxRate';

/**
 * The MenuTaxDetails model module.
 * @module model/MenuTaxDetails
 * @version 1.0.0
 */
class MenuTaxDetails {
    /**
     * Constructs a new <code>MenuTaxDetails</code>.
     * Tax information for Menu
     * @alias module:model/MenuTaxDetails
     */
    constructor() { 
        
        MenuTaxDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuTaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuTaxDetails} obj Optional instance to populate.
     * @return {module:model/MenuTaxDetails} The populated <code>MenuTaxDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuTaxDetails();

            if (data.hasOwnProperty('TaxRates')) {
                obj['TaxRates'] = ApiClient.convertToType(data['TaxRates'], [MenuTaxRate]);
            }
            if (data.hasOwnProperty('DisplayTax')) {
                obj['DisplayTax'] = ApiClient.convertToType(data['DisplayTax'], 'Boolean');
            }
            if (data.hasOwnProperty('TaxType')) {
                obj['TaxType'] = ApiClient.convertToType(data['TaxType'], 'String');
            }
            if (data.hasOwnProperty('ItemTaxes')) {
                obj['ItemTaxes'] = ApiClient.convertToType(data['ItemTaxes'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('SetItemTaxes')) {
                obj['SetItemTaxes'] = ApiClient.convertToType(data['SetItemTaxes'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * Tax Rates
 * @member {Array.<module:model/MenuTaxRate>} TaxRates
 */
MenuTaxDetails.prototype['TaxRates'] = undefined;

/**
 * Display tax for Menu
 * @member {Boolean} DisplayTax
 */
MenuTaxDetails.prototype['DisplayTax'] = undefined;

/**
 * TaxType
 * @member {module:model/MenuTaxDetails.TaxTypeEnum} TaxType
 */
MenuTaxDetails.prototype['TaxType'] = undefined;

/**
 * ItemIds and TaxIds
 * @member {Object.<String, Number>} ItemTaxes
 */
MenuTaxDetails.prototype['ItemTaxes'] = undefined;

/**
 * SetItemIds and TaxIds
 * @member {Object.<String, Number>} SetItemTaxes
 */
MenuTaxDetails.prototype['SetItemTaxes'] = undefined;





/**
 * Allowed values for the <code>TaxType</code> property.
 * @enum {String}
 * @readonly
 */
MenuTaxDetails['TaxTypeEnum'] = {

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



export default MenuTaxDetails;

