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
 * The CustomerDeliveryTrackingOrderLine model module.
 * @module model/CustomerDeliveryTrackingOrderLine
 * @version 1.0.0
 */
class CustomerDeliveryTrackingOrderLine {
    /**
     * Constructs a new <code>CustomerDeliveryTrackingOrderLine</code>.
     * Defines an order line for driver tracking
     * @alias module:model/CustomerDeliveryTrackingOrderLine
     */
    constructor() { 
        
        CustomerDeliveryTrackingOrderLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerDeliveryTrackingOrderLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerDeliveryTrackingOrderLine} obj Optional instance to populate.
     * @return {module:model/CustomerDeliveryTrackingOrderLine} The populated <code>CustomerDeliveryTrackingOrderLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerDeliveryTrackingOrderLine();

            if (data.hasOwnProperty('ItemName')) {
                obj['ItemName'] = ApiClient.convertToType(data['ItemName'], 'String');
            }
            if (data.hasOwnProperty('SelectedOptions')) {
                obj['SelectedOptions'] = ApiClient.convertToType(data['SelectedOptions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Item name from the order
 * @member {String} ItemName
 */
CustomerDeliveryTrackingOrderLine.prototype['ItemName'] = undefined;

/**
 * Selected option names
 * @member {Array.<String>} SelectedOptions
 */
CustomerDeliveryTrackingOrderLine.prototype['SelectedOptions'] = undefined;






export default CustomerDeliveryTrackingOrderLine;

