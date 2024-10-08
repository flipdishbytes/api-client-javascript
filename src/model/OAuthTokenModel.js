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
 * The OAuthTokenModel model module.
 * @module model/OAuthTokenModel
 * @version 1.0.0
 */
class OAuthTokenModel {
    /**
     * Constructs a new <code>OAuthTokenModel</code>.
     * OAuth token model
     * @alias module:model/OAuthTokenModel
     */
    constructor() { 
        
        OAuthTokenModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OAuthTokenModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OAuthTokenModel} obj Optional instance to populate.
     * @return {module:model/OAuthTokenModel} The populated <code>OAuthTokenModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuthTokenModel();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('TokenType')) {
                obj['TokenType'] = ApiClient.convertToType(data['TokenType'], 'String');
            }
            if (data.hasOwnProperty('SubjectId')) {
                obj['SubjectId'] = ApiClient.convertToType(data['SubjectId'], 'String');
            }
            if (data.hasOwnProperty('ClientId')) {
                obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'String');
            }
            if (data.hasOwnProperty('Expiry')) {
                obj['Expiry'] = ApiClient.convertToType(data['Expiry'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Identitifier key
 * @member {String} Key
 */
OAuthTokenModel.prototype['Key'] = undefined;

/**
 * Token type
 * @member {String} TokenType
 */
OAuthTokenModel.prototype['TokenType'] = undefined;

/**
 * Oauth subject identifier
 * @member {String} SubjectId
 */
OAuthTokenModel.prototype['SubjectId'] = undefined;

/**
 * Oauth client identifier
 * @member {String} ClientId
 */
OAuthTokenModel.prototype['ClientId'] = undefined;

/**
 * Token expiry
 * @member {Date} Expiry
 */
OAuthTokenModel.prototype['Expiry'] = undefined;






export default OAuthTokenModel;

