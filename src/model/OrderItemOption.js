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
 * The OrderItemOption model module.
 * @module model/OrderItemOption
 * @version 1.0.0
 */
class OrderItemOption {
    /**
     * Constructs a new <code>OrderItemOption</code>.
     * Order item option
     * @alias module:model/OrderItemOption
     */
    constructor() { 
        
        OrderItemOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderItemOption} obj Optional instance to populate.
     * @return {module:model/OrderItemOption} The populated <code>OrderItemOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemOption();

            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('MenuItemOptionPublicId')) {
                obj['MenuItemOptionPublicId'] = ApiClient.convertToType(data['MenuItemOptionPublicId'], 'String');
            }
            if (data.hasOwnProperty('MenuItemOptionId')) {
                obj['MenuItemOptionId'] = ApiClient.convertToType(data['MenuItemOptionId'], 'Number');
            }
            if (data.hasOwnProperty('IsMasterOptionSetItem')) {
                obj['IsMasterOptionSetItem'] = ApiClient.convertToType(data['IsMasterOptionSetItem'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Price')) {
                obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
            }
            if (data.hasOwnProperty('MenuItemOptionDisplayOrder')) {
                obj['MenuItemOptionDisplayOrder'] = ApiClient.convertToType(data['MenuItemOptionDisplayOrder'], 'Number');
            }
            if (data.hasOwnProperty('MenuItemOptionSetDisplayOrder')) {
                obj['MenuItemOptionSetDisplayOrder'] = ApiClient.convertToType(data['MenuItemOptionSetDisplayOrder'], 'Number');
            }
            if (data.hasOwnProperty('DepositReturnFee')) {
                obj['DepositReturnFee'] = ApiClient.convertToType(data['DepositReturnFee'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Metadata
 * @member {Object.<String, String>} Metadata
 */
OrderItemOption.prototype['Metadata'] = undefined;

/**
 * Public id of the Menu Item Option
 * @member {String} MenuItemOptionPublicId
 */
OrderItemOption.prototype['MenuItemOptionPublicId'] = undefined;

/**
 * Menu item option identifier
 * @member {Number} MenuItemOptionId
 */
OrderItemOption.prototype['MenuItemOptionId'] = undefined;

/**
 * Is master option set item
 * @member {Boolean} IsMasterOptionSetItem
 */
OrderItemOption.prototype['IsMasterOptionSetItem'] = undefined;

/**
 * Name
 * @member {String} Name
 */
OrderItemOption.prototype['Name'] = undefined;

/**
 * Price
 * @member {Number} Price
 */
OrderItemOption.prototype['Price'] = undefined;

/**
 * Menu item option display order
 * @member {Number} MenuItemOptionDisplayOrder
 */
OrderItemOption.prototype['MenuItemOptionDisplayOrder'] = undefined;

/**
 * Menu item option set display order
 * @member {Number} MenuItemOptionSetDisplayOrder
 */
OrderItemOption.prototype['MenuItemOptionSetDisplayOrder'] = undefined;

/**
 * Deposit return fee
 * @member {Number} DepositReturnFee
 */
OrderItemOption.prototype['DepositReturnFee'] = undefined;






export default OrderItemOption;

