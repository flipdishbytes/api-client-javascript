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
 * The UpdateAppStoreAppExternalProduct model module.
 * @module model/UpdateAppStoreAppExternalProduct
 * @version 1.0.0
 */
class UpdateAppStoreAppExternalProduct {
    /**
     * Constructs a new <code>UpdateAppStoreAppExternalProduct</code>.
     * @alias module:model/UpdateAppStoreAppExternalProduct
     */
    constructor() { 
        
        UpdateAppStoreAppExternalProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAppStoreAppExternalProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAppStoreAppExternalProduct} obj Optional instance to populate.
     * @return {module:model/UpdateAppStoreAppExternalProduct} The populated <code>UpdateAppStoreAppExternalProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAppStoreAppExternalProduct();

            if (data.hasOwnProperty('ExternalProductId')) {
                obj['ExternalProductId'] = ApiClient.convertToType(data['ExternalProductId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ExternalProductId
 */
UpdateAppStoreAppExternalProduct.prototype['ExternalProductId'] = undefined;






export default UpdateAppStoreAppExternalProduct;

