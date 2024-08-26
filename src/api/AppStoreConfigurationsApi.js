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


import ApiClient from "../ApiClient";
import ExecuteConfigurationActionRequest from '../model/ExecuteConfigurationActionRequest';
import RestApiArrayResultAppStoreAppConfigurationSummary from '../model/RestApiArrayResultAppStoreAppConfigurationSummary';
import RestApiArrayResultAppStoreAppSummary from '../model/RestApiArrayResultAppStoreAppSummary';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultAppStoreAppConfiguration from '../model/RestApiResultAppStoreAppConfiguration';
import RestApiResultExecuteConfigurationActionResult from '../model/RestApiResultExecuteConfigurationActionResult';
import RestApiStringResult from '../model/RestApiStringResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UpdateAppStoreAppConfiguration from '../model/UpdateAppStoreAppConfiguration';
import UpdateAppStoreAppConfigurationValuesBatch from '../model/UpdateAppStoreAppConfigurationValuesBatch';

/**
* AppStoreConfigurations service.
* @module api/AppStoreConfigurationsApi
* @version 1.0.0
*/
export default class AppStoreConfigurationsApi {

    /**
    * Constructs a new AppStoreConfigurationsApi. 
    * @alias module:api/AppStoreConfigurationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the appStoreConfigurationsAppStoreHandleOauthResponseCode operation.
     * @callback module:api/AppStoreConfigurationsApi~appStoreConfigurationsAppStoreHandleOauthResponseCodeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appStoreAppId 
     * @param {module:api/AppStoreConfigurationsApi~appStoreConfigurationsAppStoreHandleOauthResponseCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    appStoreConfigurationsAppStoreHandleOauthResponseCode(appStoreAppId, callback) {
      let postBody = null;
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling appStoreConfigurationsAppStoreHandleOauthResponseCode");
      }

      let pathParams = {
        'appStoreAppId': appStoreAppId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/appstore/oauthresponse/{appStoreAppId}/responsecode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAppStoreConfig operation.
     * @callback module:api/AppStoreConfigurationsApi~createAppStoreConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppStoreAppConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {module:api/AppStoreConfigurationsApi~createAppStoreConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppStoreAppConfiguration}
     */
    createAppStoreConfig(appId, appStoreAppId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createAppStoreConfig");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling createAppStoreConfig");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultAppStoreAppConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAppStoreConfig operation.
     * @callback module:api/AppStoreConfigurationsApi~deleteAppStoreConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {String} configId 
     * @param {module:api/AppStoreConfigurationsApi~deleteAppStoreConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    deleteAppStoreConfig(appId, appStoreAppId, configId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteAppStoreConfig");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling deleteAppStoreConfig");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling deleteAppStoreConfig");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId,
        'configId': configId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiStringResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the executeConfigurationAction operation.
     * @callback module:api/AppStoreConfigurationsApi~executeConfigurationActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultExecuteConfigurationActionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {String} configId 
     * @param {module:model/ExecuteConfigurationActionRequest} executeConfigurationActionRequest 
     * @param {module:api/AppStoreConfigurationsApi~executeConfigurationActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultExecuteConfigurationActionResult}
     */
    executeConfigurationAction(appId, appStoreAppId, configId, executeConfigurationActionRequest, callback) {
      let postBody = executeConfigurationActionRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling executeConfigurationAction");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling executeConfigurationAction");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling executeConfigurationAction");
      }
      // verify the required parameter 'executeConfigurationActionRequest' is set
      if (executeConfigurationActionRequest === undefined || executeConfigurationActionRequest === null) {
        throw new Error("Missing the required parameter 'executeConfigurationActionRequest' when calling executeConfigurationAction");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId,
        'configId': configId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultExecuteConfigurationActionResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}/action', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppStoreConfig operation.
     * @callback module:api/AppStoreConfigurationsApi~getAppStoreConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultAppStoreAppConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {String} configId 
     * @param {module:api/AppStoreConfigurationsApi~getAppStoreConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultAppStoreAppConfiguration}
     */
    getAppStoreConfig(appId, appStoreAppId, configId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAppStoreConfig");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling getAppStoreConfig");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling getAppStoreConfig");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId,
        'configId': configId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultAppStoreAppConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfiguredAppSingleApp operation.
     * @callback module:api/AppStoreConfigurationsApi~getConfiguredAppSingleAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultAppStoreAppConfigurationSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {module:api/AppStoreConfigurationsApi~getConfiguredAppSingleAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultAppStoreAppConfigurationSummary}
     */
    getConfiguredAppSingleApp(appId, appStoreAppId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getConfiguredAppSingleApp");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling getConfiguredAppSingleApp");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultAppStoreAppConfigurationSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfiguredApps operation.
     * @callback module:api/AppStoreConfigurationsApi~getConfiguredAppsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultAppStoreAppSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/AppStoreConfigurationsApi~getConfiguredAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultAppStoreAppSummary}
     */
    getConfiguredApps(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getConfiguredApps");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultAppStoreAppSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAppStoreConfig operation.
     * @callback module:api/AppStoreConfigurationsApi~updateAppStoreConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {String} configId 
     * @param {module:model/UpdateAppStoreAppConfiguration} updateAppStoreAppConfiguration 
     * @param {module:api/AppStoreConfigurationsApi~updateAppStoreConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateAppStoreConfig(appId, appStoreAppId, configId, updateAppStoreAppConfiguration, callback) {
      let postBody = updateAppStoreAppConfiguration;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateAppStoreConfig");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling updateAppStoreConfig");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling updateAppStoreConfig");
      }
      // verify the required parameter 'updateAppStoreAppConfiguration' is set
      if (updateAppStoreAppConfiguration === undefined || updateAppStoreAppConfiguration === null) {
        throw new Error("Missing the required parameter 'updateAppStoreAppConfiguration' when calling updateAppStoreConfig");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId,
        'configId': configId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAppStoreConfigSettingValues operation.
     * @callback module:api/AppStoreConfigurationsApi~updateAppStoreConfigSettingValuesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} appStoreAppId 
     * @param {String} configId 
     * @param {module:model/UpdateAppStoreAppConfigurationValuesBatch} updateAppStoreAppConfigurationValues 
     * @param {module:api/AppStoreConfigurationsApi~updateAppStoreConfigSettingValuesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateAppStoreConfigSettingValues(appId, appStoreAppId, configId, updateAppStoreAppConfigurationValues, callback) {
      let postBody = updateAppStoreAppConfigurationValues;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateAppStoreConfigSettingValues");
      }
      // verify the required parameter 'appStoreAppId' is set
      if (appStoreAppId === undefined || appStoreAppId === null) {
        throw new Error("Missing the required parameter 'appStoreAppId' when calling updateAppStoreConfigSettingValues");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling updateAppStoreConfigSettingValues");
      }
      // verify the required parameter 'updateAppStoreAppConfigurationValues' is set
      if (updateAppStoreAppConfigurationValues === undefined || updateAppStoreAppConfigurationValues === null) {
        throw new Error("Missing the required parameter 'updateAppStoreAppConfigurationValues' when calling updateAppStoreConfigSettingValues");
      }

      let pathParams = {
        'appId': appId,
        'appStoreAppId': appStoreAppId,
        'configId': configId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/appstore/apps/{appStoreAppId}/config/{configId}/updatesettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
