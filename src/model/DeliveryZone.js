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
 * The DeliveryZone model module.
 * @module model/DeliveryZone
 * @version 1.0.0
 */
class DeliveryZone {
    /**
     * Constructs a new <code>DeliveryZone</code>.
     * Delivery Zone
     * @alias module:model/DeliveryZone
     */
    constructor() { 
        
        DeliveryZone.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeliveryZone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliveryZone} obj Optional instance to populate.
     * @return {module:model/DeliveryZone} The populated <code>DeliveryZone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryZone();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('FeeChargedToStore')) {
                obj['FeeChargedToStore'] = ApiClient.convertToType(data['FeeChargedToStore'], 'Number');
            }
            if (data.hasOwnProperty('DeliveryFee')) {
                obj['DeliveryFee'] = ApiClient.convertToType(data['DeliveryFee'], 'Number');
            }
            if (data.hasOwnProperty('MinimumDeliveryOrderAmount')) {
                obj['MinimumDeliveryOrderAmount'] = ApiClient.convertToType(data['MinimumDeliveryOrderAmount'], 'Number');
            }
            if (data.hasOwnProperty('WellKnownText')) {
                obj['WellKnownText'] = ApiClient.convertToType(data['WellKnownText'], 'String');
            }
            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Delivery Fee Area Id
 * @member {Number} Id
 */
DeliveryZone.prototype['Id'] = undefined;

/**
 * Delivery Fee charged to store
 * @member {Number} FeeChargedToStore
 */
DeliveryZone.prototype['FeeChargedToStore'] = undefined;

/**
 * Delivery fee (will not be set below 0)
 * @member {Number} DeliveryFee
 */
DeliveryZone.prototype['DeliveryFee'] = undefined;

/**
 * Minimum delivery order amount (will not be set below 0)
 * @member {Number} MinimumDeliveryOrderAmount
 */
DeliveryZone.prototype['MinimumDeliveryOrderAmount'] = undefined;

/**
 * Spatial data in Well Known Text format  We also support CIRCLE((0 0, 200)) - (centerLong centerLat, radius in m)
 * @member {String} WellKnownText
 */
DeliveryZone.prototype['WellKnownText'] = undefined;

/**
 * Is delivery zone enabled
 * @member {Boolean} IsEnabled
 */
DeliveryZone.prototype['IsEnabled'] = undefined;






export default DeliveryZone;

