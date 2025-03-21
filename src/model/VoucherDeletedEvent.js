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
import UserEventInfo from './UserEventInfo';
import Voucher from './Voucher';

/**
 * The VoucherDeletedEvent model module.
 * @module model/VoucherDeletedEvent
 * @version 1.0.0
 */
class VoucherDeletedEvent {
    /**
     * Constructs a new <code>VoucherDeletedEvent</code>.
     * Voucher Deleted Event
     * @alias module:model/VoucherDeletedEvent
     */
    constructor() { 
        
        VoucherDeletedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoucherDeletedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoucherDeletedEvent} obj Optional instance to populate.
     * @return {module:model/VoucherDeletedEvent} The populated <code>VoucherDeletedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoucherDeletedEvent();

            if (data.hasOwnProperty('VoucherId')) {
                obj['VoucherId'] = ApiClient.convertToType(data['VoucherId'], 'Number');
            }
            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = UserEventInfo.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Voucher')) {
                obj['Voucher'] = Voucher.constructFromObject(data['Voucher']);
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
VoucherDeletedEvent.prototype['VoucherId'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
VoucherDeletedEvent.prototype['EventName'] = undefined;

/**
 * @member {module:model/UserEventInfo} User
 */
VoucherDeletedEvent.prototype['User'] = undefined;

/**
 * Description
 * @member {String} Description
 */
VoucherDeletedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/Voucher} Voucher
 */
VoucherDeletedEvent.prototype['Voucher'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
VoucherDeletedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
VoucherDeletedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
VoucherDeletedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
VoucherDeletedEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
VoucherDeletedEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
VoucherDeletedEvent.prototype['IpAddress'] = undefined;






export default VoucherDeletedEvent;

