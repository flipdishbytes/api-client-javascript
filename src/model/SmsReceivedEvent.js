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
import SmsInfo from './SmsInfo';

/**
 * The SmsReceivedEvent model module.
 * @module model/SmsReceivedEvent
 * @version 1.0.0
 */
class SmsReceivedEvent {
    /**
     * Constructs a new <code>SmsReceivedEvent</code>.
     * Sms received event
     * @alias module:model/SmsReceivedEvent
     */
    constructor() { 
        
        SmsReceivedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmsReceivedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmsReceivedEvent} obj Optional instance to populate.
     * @return {module:model/SmsReceivedEvent} The populated <code>SmsReceivedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsReceivedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('SmsInfo')) {
                obj['SmsInfo'] = SmsInfo.constructFromObject(data['SmsInfo']);
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
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The event name
 * @member {String} EventName
 */
SmsReceivedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
SmsReceivedEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/SmsInfo} SmsInfo
 */
SmsReceivedEvent.prototype['SmsInfo'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
SmsReceivedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
SmsReceivedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
SmsReceivedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
SmsReceivedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
SmsReceivedEvent.prototype['IpAddress'] = undefined;






export default SmsReceivedEvent;

