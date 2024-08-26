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
import ExternalStoreAuditLog from '../model/ExternalStoreAuditLog';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* AuditLogs service.
* @module api/AuditLogsApi
* @version 1.0.0
*/
export default class AuditLogsApi {

    /**
    * Constructs a new AuditLogsApi. 
    * @alias module:api/AuditLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrderAuditLog operation.
     * @callback module:api/AuditLogsApi~addOrderAuditLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} orderId 
     * @param {Array.<module:model/ExternalStoreAuditLog>} externalEventCreate 
     * @param {module:api/AuditLogsApi~addOrderAuditLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addOrderAuditLog(orderId, externalEventCreate, callback) {
      let postBody = externalEventCreate;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling addOrderAuditLog");
      }
      // verify the required parameter 'externalEventCreate' is set
      if (externalEventCreate === undefined || externalEventCreate === null) {
        throw new Error("Missing the required parameter 'externalEventCreate' when calling addOrderAuditLog");
      }

      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['Message', 'ErrorCode', 'StackTrace', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/auditlogs/orders/{orderId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addStoreAuditLogEvent operation.
     * @callback module:api/AuditLogsApi~addStoreAuditLogEventCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} storeId 
     * @param {Array.<module:model/ExternalStoreAuditLog>} externalEventCreate 
     * @param {module:api/AuditLogsApi~addStoreAuditLogEventCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addStoreAuditLogEvent(storeId, externalEventCreate, callback) {
      let postBody = externalEventCreate;
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling addStoreAuditLogEvent");
      }
      // verify the required parameter 'externalEventCreate' is set
      if (externalEventCreate === undefined || externalEventCreate === null) {
        throw new Error("Missing the required parameter 'externalEventCreate' when calling addStoreAuditLogEvent");
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
        '/api/v1.0/auditlogs/stores/{storeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
