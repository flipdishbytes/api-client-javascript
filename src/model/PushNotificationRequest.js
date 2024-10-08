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
 * The PushNotificationRequest model module.
 * @module model/PushNotificationRequest
 * @version 1.0.0
 */
class PushNotificationRequest {
    /**
     * Constructs a new <code>PushNotificationRequest</code>.
     * Push Notification Details
     * @alias module:model/PushNotificationRequest
     * @param Message {String} Message of the notification
     */
    constructor(Message) { 
        
        PushNotificationRequest.initialize(this, Message);
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
     * Constructs a <code>PushNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PushNotificationRequest} obj Optional instance to populate.
     * @return {module:model/PushNotificationRequest} The populated <code>PushNotificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PushNotificationRequest();

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
 * UTC Time at which to send the push notification
 * @member {Date} ScheduledTime
 */
PushNotificationRequest.prototype['ScheduledTime'] = undefined;

/**
 * Title of the notification
 * @member {String} Title
 */
PushNotificationRequest.prototype['Title'] = undefined;

/**
 * Message of the notification
 * @member {String} Message
 */
PushNotificationRequest.prototype['Message'] = undefined;






export default PushNotificationRequest;

