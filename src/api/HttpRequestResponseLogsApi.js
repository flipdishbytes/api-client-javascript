/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiPaginationResultHttpRequestAndResponseLog', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiPaginationResultHttpRequestAndResponseLog'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.HttpRequestResponseLogsApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiPaginationResultHttpRequestAndResponseLog, root.FlipdishOpenApiV10.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, RestApiErrorResult, RestApiForbiddenResult, RestApiPaginationResultHttpRequestAndResponseLog, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * HttpRequestResponseLogs service.
   * @module api/HttpRequestResponseLogsApi
   * @version v1.0
   */

  /**
   * Constructs a new HttpRequestResponseLogsApi. 
   * @alias module:api/HttpRequestResponseLogsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLogs operation.
     * @callback module:api/HttpRequestResponseLogsApi~getLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultHttpRequestAndResponseLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get API interaction logs
     * @param {Date} start Start date time
     * @param {Date} end End date time
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterByUserId User id (optional)
     * @param {String} opts.guid Id of the log
     * @param {Number} opts.page Page number
     * @param {Number} opts.limit Page size
     * @param {module:api/HttpRequestResponseLogsApi~getLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultHttpRequestAndResponseLog}
     */
    this.getLogs = function(start, end, appId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'start' is set
      if (start === undefined || start === null) {
        throw new Error("Missing the required parameter 'start' when calling getLogs");
      }

      // verify the required parameter 'end' is set
      if (end === undefined || end === null) {
        throw new Error("Missing the required parameter 'end' when calling getLogs");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getLogs");
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'start': start,
        'end': end,
        'filterByUserId': opts['filterByUserId'],
        'guid': opts['guid'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiPaginationResultHttpRequestAndResponseLog;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/interactions/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
