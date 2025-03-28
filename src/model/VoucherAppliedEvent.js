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
 * The VoucherAppliedEvent model module.
 * @module model/VoucherAppliedEvent
 * @version 1.0.0
 */
class VoucherAppliedEvent {
    /**
     * Constructs a new <code>VoucherAppliedEvent</code>.
     * Voucher Applied Event
     * @alias module:model/VoucherAppliedEvent
     */
    constructor() { 
        
        VoucherAppliedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoucherAppliedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoucherAppliedEvent} obj Optional instance to populate.
     * @return {module:model/VoucherAppliedEvent} The populated <code>VoucherAppliedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoucherAppliedEvent();

            if (data.hasOwnProperty('VoucherId')) {
                obj['VoucherId'] = ApiClient.convertToType(data['VoucherId'], 'Number');
            }
            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('OrderId')) {
                obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'Number');
            }
            if (data.hasOwnProperty('FlipdishEventId')) {
                obj['FlipdishEventId'] = ApiClient.convertToType(data['FlipdishEventId'], 'String');
            }
            if (data.hasOwnProperty('CreateTime')) {
                obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
            }
            if (data.hasOwnProperty('Position')) {
                obj['Position'] = ApiClient.convertToType(data['Position'], 'Number');
            }
            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'String');
            }
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Voucher Id
 * @member {Number} VoucherId
 */
VoucherAppliedEvent.prototype['VoucherId'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
VoucherAppliedEvent.prototype['EventName'] = undefined;

/**
 * Order id
 * @member {Number} OrderId
 */
VoucherAppliedEvent.prototype['OrderId'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
VoucherAppliedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
VoucherAppliedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
VoucherAppliedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
VoucherAppliedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
VoucherAppliedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
VoucherAppliedEvent.prototype['IpAddress'] = undefined;






export default VoucherAppliedEvent;

