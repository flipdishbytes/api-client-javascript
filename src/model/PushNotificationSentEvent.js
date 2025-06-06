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
import PushNotificationRequest from './PushNotificationRequest';

/**
 * The PushNotificationSentEvent model module.
 * @module model/PushNotificationSentEvent
 * @version 1.0.0
 */
class PushNotificationSentEvent {
    /**
     * Constructs a new <code>PushNotificationSentEvent</code>.
     * 
     * @alias module:model/PushNotificationSentEvent
     */
    constructor() { 
        
        PushNotificationSentEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PushNotificationSentEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PushNotificationSentEvent} obj Optional instance to populate.
     * @return {module:model/PushNotificationSentEvent} The populated <code>PushNotificationSentEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PushNotificationSentEvent();

            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('PushNotification')) {
                obj['PushNotification'] = PushNotificationRequest.constructFromObject(data['PushNotification']);
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
 * The event name
 * @member {String} EventName
 */
PushNotificationSentEvent.prototype['EventName'] = undefined;

/**
 * Description
 * @member {String} Description
 */
PushNotificationSentEvent.prototype['Description'] = undefined;

/**
 * @member {module:model/PushNotificationRequest} PushNotification
 */
PushNotificationSentEvent.prototype['PushNotification'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
PushNotificationSentEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
PushNotificationSentEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
PushNotificationSentEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
PushNotificationSentEvent.prototype['AppId'] = undefined;

/**
 * Org id
 * @member {String} OrgId
 */
PushNotificationSentEvent.prototype['OrgId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
PushNotificationSentEvent.prototype['IpAddress'] = undefined;






export default PushNotificationSentEvent;

