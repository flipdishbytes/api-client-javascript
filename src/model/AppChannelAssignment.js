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
 * The AppChannelAssignment model module.
 * @module model/AppChannelAssignment
 * @version 1.0.0
 */
class AppChannelAssignment {
    /**
     * Constructs a new <code>AppChannelAssignment</code>.
     * Describes a ChannelAssignment which is   when a AppId is assigned to a Sales Channel
     * @alias module:model/AppChannelAssignment
     */
    constructor() { 
        
        AppChannelAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppChannelAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppChannelAssignment} obj Optional instance to populate.
     * @return {module:model/AppChannelAssignment} The populated <code>AppChannelAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppChannelAssignment();

            if (data.hasOwnProperty('ChannelId')) {
                obj['ChannelId'] = ApiClient.convertToType(data['ChannelId'], 'Number');
            }
            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Id of the channel on the assignment
 * @member {Number} ChannelId
 */
AppChannelAssignment.prototype['ChannelId'] = undefined;

/**
 * AppId of the assignment
 * @member {String} AppId
 */
AppChannelAssignment.prototype['AppId'] = undefined;






export default AppChannelAssignment;

