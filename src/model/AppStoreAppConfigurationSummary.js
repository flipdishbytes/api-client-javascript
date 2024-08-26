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
import ConfiguredStore from './ConfiguredStore';

/**
 * The AppStoreAppConfigurationSummary model module.
 * @module model/AppStoreAppConfigurationSummary
 * @version 1.0.0
 */
class AppStoreAppConfigurationSummary {
    /**
     * Constructs a new <code>AppStoreAppConfigurationSummary</code>.
     * @alias module:model/AppStoreAppConfigurationSummary
     * @param Id {String} 
     * @param AppId {String} 
     * @param IsEnabled {Boolean} 
     * @param Stores {Array.<module:model/ConfiguredStore>} 
     * @param ConfigurationType {module:model/AppStoreAppConfigurationSummary.ConfigurationTypeEnum} 
     * @param StoreSelectorType {module:model/AppStoreAppConfigurationSummary.StoreSelectorTypeEnum} 
     * @param Internal {Boolean} 
     * @param AppStoreAppId {String} 
     * @param Name {String} 
     * @param Description {String} 
     */
    constructor(Id, AppId, IsEnabled, Stores, ConfigurationType, StoreSelectorType, Internal, AppStoreAppId, Name, Description) { 
        
        AppStoreAppConfigurationSummary.initialize(this, Id, AppId, IsEnabled, Stores, ConfigurationType, StoreSelectorType, Internal, AppStoreAppId, Name, Description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Id, AppId, IsEnabled, Stores, ConfigurationType, StoreSelectorType, Internal, AppStoreAppId, Name, Description) { 
        obj['Id'] = Id;
        obj['AppId'] = AppId;
        obj['IsEnabled'] = IsEnabled;
        obj['Stores'] = Stores;
        obj['ConfigurationType'] = ConfigurationType;
        obj['StoreSelectorType'] = StoreSelectorType;
        obj['Internal'] = Internal;
        obj['AppStoreAppId'] = AppStoreAppId;
        obj['Name'] = Name;
        obj['Description'] = Description;
    }

    /**
     * Constructs a <code>AppStoreAppConfigurationSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppStoreAppConfigurationSummary} obj Optional instance to populate.
     * @return {module:model/AppStoreAppConfigurationSummary} The populated <code>AppStoreAppConfigurationSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStoreAppConfigurationSummary();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('AppId')) {
                obj['AppId'] = ApiClient.convertToType(data['AppId'], 'String');
            }
            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('Stores')) {
                obj['Stores'] = ApiClient.convertToType(data['Stores'], [ConfiguredStore]);
            }
            if (data.hasOwnProperty('ConfigurationType')) {
                obj['ConfigurationType'] = ApiClient.convertToType(data['ConfigurationType'], 'String');
            }
            if (data.hasOwnProperty('StoreSelectorType')) {
                obj['StoreSelectorType'] = ApiClient.convertToType(data['StoreSelectorType'], 'String');
            }
            if (data.hasOwnProperty('Internal')) {
                obj['Internal'] = ApiClient.convertToType(data['Internal'], 'Boolean');
            }
            if (data.hasOwnProperty('AppStoreAppId')) {
                obj['AppStoreAppId'] = ApiClient.convertToType(data['AppStoreAppId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Logo')) {
                obj['Logo'] = ApiClient.convertToType(data['Logo'], 'String');
            }
            if (data.hasOwnProperty('DeveloperName')) {
                obj['DeveloperName'] = ApiClient.convertToType(data['DeveloperName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Id
 */
AppStoreAppConfigurationSummary.prototype['Id'] = undefined;

/**
 * @member {String} AppId
 */
AppStoreAppConfigurationSummary.prototype['AppId'] = undefined;

/**
 * @member {Boolean} IsEnabled
 */
AppStoreAppConfigurationSummary.prototype['IsEnabled'] = undefined;

/**
 * @member {Array.<module:model/ConfiguredStore>} Stores
 */
AppStoreAppConfigurationSummary.prototype['Stores'] = undefined;

/**
 * @member {module:model/AppStoreAppConfigurationSummary.ConfigurationTypeEnum} ConfigurationType
 */
AppStoreAppConfigurationSummary.prototype['ConfigurationType'] = undefined;

/**
 * @member {module:model/AppStoreAppConfigurationSummary.StoreSelectorTypeEnum} StoreSelectorType
 */
AppStoreAppConfigurationSummary.prototype['StoreSelectorType'] = undefined;

/**
 * @member {Boolean} Internal
 */
AppStoreAppConfigurationSummary.prototype['Internal'] = undefined;

/**
 * @member {String} AppStoreAppId
 */
AppStoreAppConfigurationSummary.prototype['AppStoreAppId'] = undefined;

/**
 * @member {String} Name
 */
AppStoreAppConfigurationSummary.prototype['Name'] = undefined;

/**
 * @member {String} Description
 */
AppStoreAppConfigurationSummary.prototype['Description'] = undefined;

/**
 * @member {String} Logo
 */
AppStoreAppConfigurationSummary.prototype['Logo'] = undefined;

/**
 * @member {String} DeveloperName
 */
AppStoreAppConfigurationSummary.prototype['DeveloperName'] = undefined;





/**
 * Allowed values for the <code>ConfigurationType</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreAppConfigurationSummary['ConfigurationTypeEnum'] = {

    /**
     * value: "ExternalLink"
     * @const
     */
    "ExternalLink": "ExternalLink",

    /**
     * value: "FlipdishHosted"
     * @const
     */
    "FlipdishHosted": "FlipdishHosted"
};


/**
 * Allowed values for the <code>StoreSelectorType</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreAppConfigurationSummary['StoreSelectorTypeEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "Single"
     * @const
     */
    "Single": "Single",

    /**
     * value: "Multiple"
     * @const
     */
    "Multiple": "Multiple"
};



export default AppStoreAppConfigurationSummary;

