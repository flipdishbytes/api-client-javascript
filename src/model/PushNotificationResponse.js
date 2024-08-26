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
 * The PushNotificationResponse model module.
 * @module model/PushNotificationResponse
 * @version 1.0.0
 */
class PushNotificationResponse {
    /**
     * Constructs a new <code>PushNotificationResponse</code>.
     * Push Notification
     * @alias module:model/PushNotificationResponse
     * @param Message {String} Message of the notification
     */
    constructor(Message) { 
        
        PushNotificationResponse.initialize(this, Message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Message) { 
        obj['Message'] = Message;
    }

    /**
     * Constructs a <code>PushNotificationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PushNotificationResponse} obj Optional instance to populate.
     * @return {module:model/PushNotificationResponse} The populated <code>PushNotificationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PushNotificationResponse();

            if (data.hasOwnProperty('Sent')) {
                obj['Sent'] = ApiClient.convertToType(data['Sent'], 'Boolean');
            }
            if (data.hasOwnProperty('ScheduledPushNotificationId')) {
                obj['ScheduledPushNotificationId'] = ApiClient.convertToType(data['ScheduledPushNotificationId'], 'Number');
            }
            if (data.hasOwnProperty('ScheduledTime')) {
                obj['ScheduledTime'] = ApiClient.convertToType(data['ScheduledTime'], 'Date');
            }
            if (data.hasOwnProperty('Title')) {
                obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Sent
 * @member {Boolean} Sent
 */
PushNotificationResponse.prototype['Sent'] = undefined;

/**
 * Push notification identifier
 * @member {Number} ScheduledPushNotificationId
 */
PushNotificationResponse.prototype['ScheduledPushNotificationId'] = undefined;

/**
 * UTC Time at which to send the push notification
 * @member {Date} ScheduledTime
 */
PushNotificationResponse.prototype['ScheduledTime'] = undefined;

/**
 * Title of the notification
 * @member {String} Title
 */
PushNotificationResponse.prototype['Title'] = undefined;

/**
 * Message of the notification
 * @member {String} Message
 */
PushNotificationResponse.prototype['Message'] = undefined;






export default PushNotificationResponse;

