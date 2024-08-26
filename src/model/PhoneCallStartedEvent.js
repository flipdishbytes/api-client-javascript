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
import PhoneCall from './PhoneCall';

/**
 * The PhoneCallStartedEvent model module.
 * @module model/PhoneCallStartedEvent
 * @version 1.0.0
 */
class PhoneCallStartedEvent {
    /**
     * Constructs a new <code>PhoneCallStartedEvent</code>.
     * Phone call started event
     * @alias module:model/PhoneCallStartedEvent
     */
    constructor() { 
        
        PhoneCallStartedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PhoneCallStartedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhoneCallStartedEvent} obj Optional instance to populate.
     * @return {module:model/PhoneCallStartedEvent} The populated <code>PhoneCallStartedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneCallStartedEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('StoreId')) {
                obj['StoreId'] = ApiClient.convertToType(data['StoreId'], 'Number');
            }
            if (data.hasOwnProperty('PhoneCall')) {
                obj['PhoneCall'] = PhoneCall.constructFromObject(data['PhoneCall']);
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
PhoneCallStartedEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
PhoneCallStartedEvent.prototype['Description'] = undefined;

/**
 * Store Id
 * @member {Number} StoreId
 */
PhoneCallStartedEvent.prototype['StoreId'] = undefined;

/**
 * @member {module:model/PhoneCall} PhoneCall
 */
PhoneCallStartedEvent.prototype['PhoneCall'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
PhoneCallStartedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
PhoneCallStartedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
PhoneCallStartedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
PhoneCallStartedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
PhoneCallStartedEvent.prototype['IpAddress'] = undefined;






export default PhoneCallStartedEvent;

