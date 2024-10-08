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
import PublishMenuChanges from '../model/PublishMenuChanges';
import RestApiArrayResultPendingMenuChangesSummaries from '../model/RestApiArrayResultPendingMenuChangesSummaries';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiPaginationResultPendingMenuChanges from '../model/RestApiPaginationResultPendingMenuChanges';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* CatalogChanges service.
* @module api/CatalogChangesApi
* @version 1.0.0
*/
export default class CatalogChangesApi {

    /**
    * Constructs a new CatalogChangesApi. 
    * @alias module:api/CatalogChangesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getPendingMenuChanges operation.
     * @callback module:api/CatalogChangesApi~getPendingMenuChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultPendingMenuChanges} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu pending changes from Catalog groups and items
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.menuId 
     * @param {String} opts.catalogItemId 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/CatalogChangesApi~getPendingMenuChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultPendingMenuChanges}
     */
    getPendingMenuChanges(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getPendingMenuChanges");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'menuId': opts['menuId'],
        'catalogItemId': opts['catalogItemId'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiPaginationResultPendingMenuChanges;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/catalog-changes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPendingMenuChangesSummaries operation.
     * @callback module:api/CatalogChangesApi~getPendingMenuChangesSummariesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultPendingMenuChangesSummaries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu pending changes summaries by appId
     * @param {String} appId 
     * @param {module:api/CatalogChangesApi~getPendingMenuChangesSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultPendingMenuChangesSummaries}
     */
    getPendingMenuChangesSummaries(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getPendingMenuChangesSummaries");
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
      let returnType = RestApiArrayResultPendingMenuChangesSummaries;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/catalog-changes/summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the publishPendingMenuChanges operation.
     * @callback module:api/CatalogChangesApi~publishPendingMenuChangesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update menus with the pending changes from Catalog groups and items
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {module:model/PublishMenuChanges} publishMenuChanges 
     * @param {module:api/CatalogChangesApi~publishPendingMenuChangesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    publishPendingMenuChanges(appId, publishMenuChanges, callback) {
      let postBody = publishMenuChanges;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling publishPendingMenuChanges");
      }
      // verify the required parameter 'publishMenuChanges' is set
      if (publishMenuChanges === undefined || publishMenuChanges === null) {
        throw new Error("Missing the required parameter 'publishMenuChanges' when calling publishPendingMenuChanges");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/catalog-changes/publish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
