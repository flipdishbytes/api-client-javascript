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
 * The CertificateCreatedEvent model module.
 * @module model/CertificateCreatedEvent
 * @version 1.0.0
 */
class CertificateCreatedEvent {
    /**
     * Constructs a new <code>CertificateCreatedEvent</code>.
     * The DNS for the Hostname verified
     * @alias module:model/CertificateCreatedEvent
     */
    constructor() { 
        
        CertificateCreatedEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateCreatedEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateCreatedEvent} obj Optional instance to populate.
     * @return {module:model/CertificateCreatedEvent} The populated <code>CertificateCreatedEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateCreatedEvent();

            if (data.hasOwnProperty('Hostname')) {
                obj['Hostname'] = ApiClient.convertToType(data['Hostname'], 'String');
            }
            if (data.hasOwnProperty('EventName')) {
                obj['EventName'] = ApiClient.convertToType(data['EventName'], 'String');
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
 * Description
 * @member {String} Hostname
 */
CertificateCreatedEvent.prototype['Hostname'] = undefined;

/**
 * The event name
 * @member {String} EventName
 */
CertificateCreatedEvent.prototype['EventName'] = undefined;

/**
 * The identitfier of the event
 * @member {String} FlipdishEventId
 */
CertificateCreatedEvent.prototype['FlipdishEventId'] = undefined;

/**
 * The time of creation of the event
 * @member {Date} CreateTime
 */
CertificateCreatedEvent.prototype['CreateTime'] = undefined;

/**
 * Position
 * @member {Number} Position
 */
CertificateCreatedEvent.prototype['Position'] = undefined;

/**
 * App id
 * @member {String} AppId
 */
CertificateCreatedEvent.prototype['AppId'] = undefined;

/**
 * Ip Address
 * @member {String} IpAddress
 */
CertificateCreatedEvent.prototype['IpAddress'] = undefined;






export default CertificateCreatedEvent;

