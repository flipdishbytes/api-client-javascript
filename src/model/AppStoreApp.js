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
import AppStoreAppSupportInfo from './AppStoreAppSupportInfo';
import FieldGroup from './FieldGroup';

/**
 * The AppStoreApp model module.
 * @module model/AppStoreApp
 * @version 1.0.0
 */
class AppStoreApp {
    /**
     * Constructs a new <code>AppStoreApp</code>.
     * @alias module:model/AppStoreApp
     * @param Id {String} 
     * @param VerificationStatus {module:model/AppStoreApp.VerificationStatusEnum} 
     * @param OAuthAppId {String} 
     * @param Internal {Boolean} 
     * @param Details {String} 
     * @param ConfigurationType {module:model/AppStoreApp.ConfigurationTypeEnum} 
     * @param StoreSelectorType {module:model/AppStoreApp.StoreSelectorTypeEnum} 
     * @param PermissionsType {module:model/AppStoreApp.PermissionsTypeEnum} 
     * @param Name {String} 
     * @param Description {String} 
     * @param Categories {Array.<module:model/AppStoreApp.CategoriesEnum>} 
     * @param Countries {Array.<module:model/AppStoreApp.CountriesEnum>} 
     */
    constructor(Id, VerificationStatus, OAuthAppId, Internal, Details, ConfigurationType, StoreSelectorType, PermissionsType, Name, Description, Categories, Countries) { 
        
        AppStoreApp.initialize(this, Id, VerificationStatus, OAuthAppId, Internal, Details, ConfigurationType, StoreSelectorType, PermissionsType, Name, Description, Categories, Countries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Id, VerificationStatus, OAuthAppId, Internal, Details, ConfigurationType, StoreSelectorType, PermissionsType, Name, Description, Categories, Countries) { 
        obj['Id'] = Id;
        obj['VerificationStatus'] = VerificationStatus;
        obj['OAuthAppId'] = OAuthAppId;
        obj['Internal'] = Internal;
        obj['Details'] = Details;
        obj['ConfigurationType'] = ConfigurationType;
        obj['StoreSelectorType'] = StoreSelectorType;
        obj['PermissionsType'] = PermissionsType;
        obj['Name'] = Name;
        obj['Description'] = Description;
        obj['Categories'] = Categories;
        obj['Countries'] = Countries;
    }

    /**
     * Constructs a <code>AppStoreApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppStoreApp} obj Optional instance to populate.
     * @return {module:model/AppStoreApp} The populated <code>AppStoreApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStoreApp();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('VerificationStatus')) {
                obj['VerificationStatus'] = ApiClient.convertToType(data['VerificationStatus'], 'String');
            }
            if (data.hasOwnProperty('Logo')) {
                obj['Logo'] = ApiClient.convertToType(data['Logo'], 'String');
            }
            if (data.hasOwnProperty('OAuthAppId')) {
                obj['OAuthAppId'] = ApiClient.convertToType(data['OAuthAppId'], 'String');
            }
            if (data.hasOwnProperty('Internal')) {
                obj['Internal'] = ApiClient.convertToType(data['Internal'], 'Boolean');
            }
            if (data.hasOwnProperty('Details')) {
                obj['Details'] = ApiClient.convertToType(data['Details'], 'String');
            }
            if (data.hasOwnProperty('ConfigurationType')) {
                obj['ConfigurationType'] = ApiClient.convertToType(data['ConfigurationType'], 'String');
            }
            if (data.hasOwnProperty('StoreSelectorType')) {
                obj['StoreSelectorType'] = ApiClient.convertToType(data['StoreSelectorType'], 'String');
            }
            if (data.hasOwnProperty('FieldGroups')) {
                obj['FieldGroups'] = ApiClient.convertToType(data['FieldGroups'], [FieldGroup]);
            }
            if (data.hasOwnProperty('SetupInstructions')) {
                obj['SetupInstructions'] = ApiClient.convertToType(data['SetupInstructions'], 'String');
            }
            if (data.hasOwnProperty('ExternalSetupLink')) {
                obj['ExternalSetupLink'] = ApiClient.convertToType(data['ExternalSetupLink'], 'String');
            }
            if (data.hasOwnProperty('TeammateAppAccessLevel')) {
                obj['TeammateAppAccessLevel'] = ApiClient.convertToType(data['TeammateAppAccessLevel'], 'String');
            }
            if (data.hasOwnProperty('PermissionsType')) {
                obj['PermissionsType'] = ApiClient.convertToType(data['PermissionsType'], 'String');
            }
            if (data.hasOwnProperty('Support')) {
                obj['Support'] = AppStoreAppSupportInfo.constructFromObject(data['Support']);
            }
            if (data.hasOwnProperty('ExternalFunctionActionUrl')) {
                obj['ExternalFunctionActionUrl'] = ApiClient.convertToType(data['ExternalFunctionActionUrl'], 'String');
            }
            if (data.hasOwnProperty('ExternalFunctionSignatureKey')) {
                obj['ExternalFunctionSignatureKey'] = ApiClient.convertToType(data['ExternalFunctionSignatureKey'], 'String');
            }
            if (data.hasOwnProperty('IsPaid')) {
                obj['IsPaid'] = ApiClient.convertToType(data['IsPaid'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('IsEnabled')) {
                obj['IsEnabled'] = ApiClient.convertToType(data['IsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('Categories')) {
                obj['Categories'] = ApiClient.convertToType(data['Categories'], ['String']);
            }
            if (data.hasOwnProperty('Countries')) {
                obj['Countries'] = ApiClient.convertToType(data['Countries'], ['String']);
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
AppStoreApp.prototype['Id'] = undefined;

/**
 * @member {module:model/AppStoreApp.VerificationStatusEnum} VerificationStatus
 */
AppStoreApp.prototype['VerificationStatus'] = undefined;

/**
 * @member {String} Logo
 */
AppStoreApp.prototype['Logo'] = undefined;

/**
 * @member {String} OAuthAppId
 */
AppStoreApp.prototype['OAuthAppId'] = undefined;

/**
 * @member {Boolean} Internal
 */
AppStoreApp.prototype['Internal'] = undefined;

/**
 * @member {String} Details
 */
AppStoreApp.prototype['Details'] = undefined;

/**
 * @member {module:model/AppStoreApp.ConfigurationTypeEnum} ConfigurationType
 */
AppStoreApp.prototype['ConfigurationType'] = undefined;

/**
 * @member {module:model/AppStoreApp.StoreSelectorTypeEnum} StoreSelectorType
 */
AppStoreApp.prototype['StoreSelectorType'] = undefined;

/**
 * @member {Array.<module:model/FieldGroup>} FieldGroups
 */
AppStoreApp.prototype['FieldGroups'] = undefined;

/**
 * @member {String} SetupInstructions
 */
AppStoreApp.prototype['SetupInstructions'] = undefined;

/**
 * @member {String} ExternalSetupLink
 */
AppStoreApp.prototype['ExternalSetupLink'] = undefined;

/**
 * @member {module:model/AppStoreApp.TeammateAppAccessLevelEnum} TeammateAppAccessLevel
 */
AppStoreApp.prototype['TeammateAppAccessLevel'] = undefined;

/**
 * @member {module:model/AppStoreApp.PermissionsTypeEnum} PermissionsType
 */
AppStoreApp.prototype['PermissionsType'] = undefined;

/**
 * @member {module:model/AppStoreAppSupportInfo} Support
 */
AppStoreApp.prototype['Support'] = undefined;

/**
 * @member {String} ExternalFunctionActionUrl
 */
AppStoreApp.prototype['ExternalFunctionActionUrl'] = undefined;

/**
 * @member {String} ExternalFunctionSignatureKey
 */
AppStoreApp.prototype['ExternalFunctionSignatureKey'] = undefined;

/**
 * @member {Boolean} IsPaid
 */
AppStoreApp.prototype['IsPaid'] = undefined;

/**
 * @member {String} Name
 */
AppStoreApp.prototype['Name'] = undefined;

/**
 * @member {String} Description
 */
AppStoreApp.prototype['Description'] = undefined;

/**
 * @member {Boolean} IsEnabled
 */
AppStoreApp.prototype['IsEnabled'] = undefined;

/**
 * @member {Array.<module:model/AppStoreApp.CategoriesEnum>} Categories
 */
AppStoreApp.prototype['Categories'] = undefined;

/**
 * @member {Array.<module:model/AppStoreApp.CountriesEnum>} Countries
 */
AppStoreApp.prototype['Countries'] = undefined;

/**
 * @member {String} DeveloperName
 */
AppStoreApp.prototype['DeveloperName'] = undefined;





/**
 * Allowed values for the <code>VerificationStatus</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['VerificationStatusEnum'] = {

    /**
     * value: "Draft"
     * @const
     */
    "Draft": "Draft",

    /**
     * value: "Submitted"
     * @const
     */
    "Submitted": "Submitted",

    /**
     * value: "Verified"
     * @const
     */
    "Verified": "Verified"
};


/**
 * Allowed values for the <code>ConfigurationType</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['ConfigurationTypeEnum'] = {

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
AppStoreApp['StoreSelectorTypeEnum'] = {

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


/**
 * Allowed values for the <code>TeammateAppAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['TeammateAppAccessLevelEnum'] = {

    /**
     * value: "Owner"
     * @const
     */
    "Owner": "Owner",

    /**
     * value: "StoreOwner"
     * @const
     */
    "StoreOwner": "StoreOwner",

    /**
     * value: "ManagedOwner"
     * @const
     */
    "ManagedOwner": "ManagedOwner",

    /**
     * value: "Integrator"
     * @const
     */
    "Integrator": "Integrator",

    /**
     * value: "StoreManager"
     * @const
     */
    "StoreManager": "StoreManager",

    /**
     * value: "StoreStaff"
     * @const
     */
    "StoreStaff": "StoreStaff",

    /**
     * value: "StoreReadOnlyAccess"
     * @const
     */
    "StoreReadOnlyAccess": "StoreReadOnlyAccess",

    /**
     * value: "FinanceManger"
     * @const
     */
    "FinanceManger": "FinanceManger"
};


/**
 * Allowed values for the <code>PermissionsType</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['PermissionsTypeEnum'] = {

    /**
     * value: "Teammate"
     * @const
     */
    "Teammate": "Teammate"
};


/**
 * Allowed values for the <code>Categories</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['CategoriesEnum'] = {

    /**
     * value: "PointOfSale"
     * @const
     */
    "PointOfSale": "PointOfSale",

    /**
     * value: "DeliveryAndLogistics"
     * @const
     */
    "DeliveryAndLogistics": "DeliveryAndLogistics",

    /**
     * value: "CRM"
     * @const
     */
    "CRM": "CRM",

    /**
     * value: "GiftCard"
     * @const
     */
    "GiftCard": "GiftCard",

    /**
     * value: "Accounting"
     * @const
     */
    "Accounting": "Accounting",

    /**
     * value: "LoyaltyAndMarketing"
     * @const
     */
    "LoyaltyAndMarketing": "LoyaltyAndMarketing",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};


/**
 * Allowed values for the <code>Countries</code> property.
 * @enum {String}
 * @readonly
 */
AppStoreApp['CountriesEnum'] = {

    /**
     * value: "GB"
     * @const
     */
    "GB": "GB",

    /**
     * value: "IE"
     * @const
     */
    "IE": "IE",

    /**
     * value: "FR"
     * @const
     */
    "FR": "FR",

    /**
     * value: "ES"
     * @const
     */
    "ES": "ES",

    /**
     * value: "PT"
     * @const
     */
    "PT": "PT",

    /**
     * value: "IT"
     * @const
     */
    "IT": "IT",

    /**
     * value: "DE"
     * @const
     */
    "DE": "DE",

    /**
     * value: "PL"
     * @const
     */
    "PL": "PL",

    /**
     * value: "BE"
     * @const
     */
    "BE": "BE",

    /**
     * value: "LU"
     * @const
     */
    "LU": "LU",

    /**
     * value: "NL"
     * @const
     */
    "NL": "NL",

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "CA"
     * @const
     */
    "CA": "CA",

    /**
     * value: "BG"
     * @const
     */
    "BG": "BG",

    /**
     * value: "MX"
     * @const
     */
    "MX": "MX",

    /**
     * value: "AU"
     * @const
     */
    "AU": "AU",

    /**
     * value: "NZ"
     * @const
     */
    "NZ": "NZ"
};



export default AppStoreApp;

