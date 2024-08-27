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
import TelephonyConfig from '../model/TelephonyConfig';

/**
* Fpm service.
* @module api/FpmApi
* @version 1.0.0
*/
export default class FpmApi {

    /**
    * Constructs a new FpmApi. 
    * @alias module:api/FpmApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFpmForStore operation.
     * @callback module:api/FpmApi~createFpmForStoreCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} storeId 
     * @param {String} phoneNumber 
     * @param {module:api/FpmApi~createFpmForStoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createFpmForStore(storeId, phoneNumber, callback) {
      let postBody = null;
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling createFpmForStore");
      }
      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling createFpmForStore");
      }

      let pathParams = {
        'storeId': storeId
      };
      let queryParams = {
        'phoneNumber': phoneNumber
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
        '/api/v1.0/{storeId}/fpm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editFpmForStore operation.
     * @callback module:api/FpmApi~editFpmForStoreCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} storeId 
     * @param {module:model/TelephonyConfig} telephonyConfig 
     * @param {module:api/FpmApi~editFpmForStoreCallback} callback The callback function, accepting three arguments: error, data, response
     */
    editFpmForStore(storeId, telephonyConfig, callback) {
      let postBody = telephonyConfig;
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling editFpmForStore");
      }
      // verify the required parameter 'telephonyConfig' is set
      if (telephonyConfig === undefined || telephonyConfig === null) {
        throw new Error("Missing the required parameter 'telephonyConfig' when calling editFpmForStore");
      }

      let pathParams = {
        'storeId': storeId
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
        '/api/v1.0/{storeId}/fpm/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}