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
import CreateFulfillmentStatesConfiguration from '../model/CreateFulfillmentStatesConfiguration';
import FulfillmentStatesConfiguration from '../model/FulfillmentStatesConfiguration';
import RestApiArrayResultFulfillmentStatesConfigurationSummary from '../model/RestApiArrayResultFulfillmentStatesConfigurationSummary';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultFulfillmentStatesConfiguration from '../model/RestApiResultFulfillmentStatesConfiguration';
import RestApiStringResult from '../model/RestApiStringResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UpdateFulfillmentStatesConfiguration from '../model/UpdateFulfillmentStatesConfiguration';

/**
* FulfillmentStateConfiguration service.
* @module api/FulfillmentStateConfigurationApi
* @version 1.0.0
*/
export default class FulfillmentStateConfigurationApi {

    /**
    * Constructs a new FulfillmentStateConfigurationApi. 
    * @alias module:api/FulfillmentStateConfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFulfillmentStatesConfig operation.
     * @callback module:api/FulfillmentStateConfigurationApi~createFulfillmentStatesConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultFulfillmentStatesConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/CreateFulfillmentStatesConfiguration} fulfillmentStateConfiguration 
     * @param {module:api/FulfillmentStateConfigurationApi~createFulfillmentStatesConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultFulfillmentStatesConfiguration}
     */
    createFulfillmentStatesConfig(appId, fulfillmentStateConfiguration, callback) {
      let postBody = fulfillmentStateConfiguration;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createFulfillmentStatesConfig");
      }
      // verify the required parameter 'fulfillmentStateConfiguration' is set
      if (fulfillmentStateConfiguration === undefined || fulfillmentStateConfiguration === null) {
        throw new Error("Missing the required parameter 'fulfillmentStateConfiguration' when calling createFulfillmentStatesConfig");
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
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultFulfillmentStatesConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/fulfillment/configuration/states', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentStatesConfig operation.
     * @callback module:api/FulfillmentStateConfigurationApi~deleteFulfillmentStatesConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} configId 
     * @param {module:api/FulfillmentStateConfigurationApi~deleteFulfillmentStatesConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    deleteFulfillmentStatesConfig(appId, configId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteFulfillmentStatesConfig");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling deleteFulfillmentStatesConfig");
      }

      let pathParams = {
        'appId': appId,
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
        '/api/v1.0/{appId}/fulfillment/configuration/states/{configId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentStatesConfiguration operation.
     * @callback module:api/FulfillmentStateConfigurationApi~getFulfillmentStatesConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentStatesConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} configId 
     * @param {module:api/FulfillmentStateConfigurationApi~getFulfillmentStatesConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentStatesConfiguration}
     */
    getFulfillmentStatesConfiguration(appId, configId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getFulfillmentStatesConfiguration");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling getFulfillmentStatesConfiguration");
      }

      let pathParams = {
        'appId': appId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'States', 'StoreSelectorType', 'StoreIds', 'Name', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = FulfillmentStatesConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/fulfillment/configuration/states/{configId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentStatesConfigurationTemplate operation.
     * @callback module:api/FulfillmentStateConfigurationApi~getFulfillmentStatesConfigurationTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentStatesConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/FulfillmentStateConfigurationApi~getFulfillmentStatesConfigurationTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentStatesConfiguration}
     */
    getFulfillmentStatesConfigurationTemplate(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getFulfillmentStatesConfigurationTemplate");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'States', 'StoreSelectorType', 'StoreIds', 'Name', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = FulfillmentStatesConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/fulfillment/configuration/states_template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchFulfillmentStatesConfigurations operation.
     * @callback module:api/FulfillmentStateConfigurationApi~searchFulfillmentStatesConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultFulfillmentStatesConfigurationSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/FulfillmentStateConfigurationApi~searchFulfillmentStatesConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultFulfillmentStatesConfigurationSummary}
     */
    searchFulfillmentStatesConfigurations(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling searchFulfillmentStatesConfigurations");
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
      let returnType = RestApiArrayResultFulfillmentStatesConfigurationSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/fulfillment/configuration/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentStatesConfig operation.
     * @callback module:api/FulfillmentStateConfigurationApi~updateFulfillmentStatesConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} configId 
     * @param {module:model/UpdateFulfillmentStatesConfiguration} updateFulfillmentStatesConfiguration 
     * @param {module:api/FulfillmentStateConfigurationApi~updateFulfillmentStatesConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateFulfillmentStatesConfig(appId, configId, updateFulfillmentStatesConfiguration, callback) {
      let postBody = updateFulfillmentStatesConfiguration;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateFulfillmentStatesConfig");
      }
      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling updateFulfillmentStatesConfig");
      }
      // verify the required parameter 'updateFulfillmentStatesConfiguration' is set
      if (updateFulfillmentStatesConfiguration === undefined || updateFulfillmentStatesConfiguration === null) {
        throw new Error("Missing the required parameter 'updateFulfillmentStatesConfiguration' when calling updateFulfillmentStatesConfig");
      }

      let pathParams = {
        'appId': appId,
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
        '/api/v1.0/{appId}/fulfillment/configuration/states/{configId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}