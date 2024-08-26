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
 * The CreateBasicAccountModel model module.
 * @module model/CreateBasicAccountModel
 * @version 1.0.0
 */
class CreateBasicAccountModel {
    /**
     * Constructs a new <code>CreateBasicAccountModel</code>.
     * Basic attributes for creating an account
     * @alias module:model/CreateBasicAccountModel
     * @param StoreName {String} Store name
     */
    constructor(StoreName) { 
        
        CreateBasicAccountModel.initialize(this, StoreName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, StoreName) { 
        obj['StoreName'] = StoreName;
    }

    /**
     * Constructs a <code>CreateBasicAccountModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBasicAccountModel} obj Optional instance to populate.
     * @return {module:model/CreateBasicAccountModel} The populated <code>CreateBasicAccountModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBasicAccountModel();

            if (data.hasOwnProperty('StoreName')) {
                obj['StoreName'] = ApiClient.convertToType(data['StoreName'], 'String');
            }
            if (data.hasOwnProperty('LanguageId')) {
                obj['LanguageId'] = ApiClient.convertToType(data['LanguageId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Store name
 * @member {String} StoreName
 */
CreateBasicAccountModel.prototype['StoreName'] = undefined;

/**
 * LanguageId
 * @member {String} LanguageId
 */
CreateBasicAccountModel.prototype['LanguageId'] = undefined;






export default CreateBasicAccountModel;

