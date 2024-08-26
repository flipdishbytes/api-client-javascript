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
import RestApiArrayResultProcessingFeeConfig from '../model/RestApiArrayResultProcessingFeeConfig';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* ProcessingFeeConfigs service.
* @module api/ProcessingFeeConfigsApi
* @version 1.0.0
*/
export default class ProcessingFeeConfigsApi {

    /**
    * Constructs a new ProcessingFeeConfigsApi. 
    * @alias module:api/ProcessingFeeConfigsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getProcessingFeeConfigsByStoreIds operation.
     * @callback module:api/ProcessingFeeConfigsApi~getProcessingFeeConfigsByStoreIdsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultProcessingFeeConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Array.<Number>} storeIds 
     * @param {module:api/ProcessingFeeConfigsApi~getProcessingFeeConfigsByStoreIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultProcessingFeeConfig}
     */
    getProcessingFeeConfigsByStoreIds(storeIds, callback) {
      let postBody = null;
      // verify the required parameter 'storeIds' is set
      if (storeIds === undefined || storeIds === null) {
        throw new Error("Missing the required parameter 'storeIds' when calling getProcessingFeeConfigsByStoreIds");
      }

      let pathParams = {
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(storeIds, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultProcessingFeeConfig;
      return this.apiClient.callApi(
        '/api/v1.0/processingfeeconfigs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
