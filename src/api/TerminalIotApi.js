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
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultKioskIotConnectionParameters from '../model/RestApiResultKioskIotConnectionParameters';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* TerminalIot service.
* @module api/TerminalIotApi
* @version 1.0.0
*/
export default class TerminalIotApi {

    /**
    * Constructs a new TerminalIotApi. 
    * @alias module:api/TerminalIotApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTerminalIotConnection operation.
     * @callback module:api/TerminalIotApi~getTerminalIotConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultKioskIotConnectionParameters} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TerminalIotApi~getTerminalIotConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultKioskIotConnectionParameters}
     */
    getTerminalIotConnection(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = RestApiResultKioskIotConnectionParameters;
      return this.apiClient.callApi(
        '/api/v1.0/terminaliot/connect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}