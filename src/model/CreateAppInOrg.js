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
 * The CreateAppInOrg model module.
 * @module model/CreateAppInOrg
 * @version 1.0.0
 */
class CreateAppInOrg {
    /**
     * Constructs a new <code>CreateAppInOrg</code>.
     * Create an App in an Organisation Request
     * @alias module:model/CreateAppInOrg
     */
    constructor() { 
        
        CreateAppInOrg.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAppInOrg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAppInOrg} obj Optional instance to populate.
     * @return {module:model/CreateAppInOrg} The populated <code>CreateAppInOrg</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAppInOrg();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('CountryId')) {
                obj['CountryId'] = ApiClient.convertToType(data['CountryId'], 'String');
            }
            if (data.hasOwnProperty('MainColor')) {
                obj['MainColor'] = ApiClient.convertToType(data['MainColor'], 'String');
            }
            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
            if (data.hasOwnProperty('LogoImageUrl')) {
                obj['LogoImageUrl'] = ApiClient.convertToType(data['LogoImageUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} Name
 */
CreateAppInOrg.prototype['Name'] = undefined;

/**
 * Country in ISO 3166-1 alpha-2 standard
 * @member {String} CountryId
 */
CreateAppInOrg.prototype['CountryId'] = undefined;

/**
 * Main color for the different sales channels
 * @member {String} MainColor
 */
CreateAppInOrg.prototype['MainColor'] = undefined;

/**
 * A predefined AppId
 * @member {String} AppId
 */
CreateAppInOrg.prototype['AppId'] = undefined;

/**
 * Logo image URL
 * @member {String} LogoImageUrl
 */
CreateAppInOrg.prototype['LogoImageUrl'] = undefined;






export default CreateAppInOrg;

