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
 * The CreateLocation model module.
 * @module model/CreateLocation
 * @version 1.0.0
 */
class CreateLocation {
    /**
     * Constructs a new <code>CreateLocation</code>.
     * Input model for creating a Location
     * @alias module:model/CreateLocation
     */
    constructor() { 
        
        CreateLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLocation} obj Optional instance to populate.
     * @return {module:model/CreateLocation} The populated <code>CreateLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLocation();

            if (data.hasOwnProperty('LocationId')) {
                obj['LocationId'] = ApiClient.convertToType(data['LocationId'], 'Number');
            }
            if (data.hasOwnProperty('LocationName')) {
                obj['LocationName'] = ApiClient.convertToType(data['LocationName'], 'String');
            }
            if (data.hasOwnProperty('DisplayOrder')) {
                obj['DisplayOrder'] = ApiClient.convertToType(data['DisplayOrder'], 'Number');
            }
            if (data.hasOwnProperty('ExternalLocationId')) {
                obj['ExternalLocationId'] = ApiClient.convertToType(data['ExternalLocationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Location Id
 * @member {Number} LocationId
 */
CreateLocation.prototype['LocationId'] = undefined;

/**
 * Descriptive LocationArea name
 * @member {String} LocationName
 */
CreateLocation.prototype['LocationName'] = undefined;

/**
 * The order that the Location should be displayed on the screen
 * @member {Number} DisplayOrder
 */
CreateLocation.prototype['DisplayOrder'] = undefined;

/**
 * Id of the Location on an external system
 * @member {String} ExternalLocationId
 */
CreateLocation.prototype['ExternalLocationId'] = undefined;






export default CreateLocation;

