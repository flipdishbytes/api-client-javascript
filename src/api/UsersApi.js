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
    define(['ApiClient', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiStringArrayResult', 'model/RestApiStringResult', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiStringArrayResult'), require('../model/RestApiStringResult'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.UsersApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiStringArrayResult, root.FlipdishOpenApiV10.RestApiStringResult, root.FlipdishOpenApiV10.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, RestApiErrorResult, RestApiForbiddenResult, RestApiStringArrayResult, RestApiStringResult, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version v1.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPreviousOrderCountForStore operation.
     * @callback module:api/UsersApi~getPreviousOrderCountForStoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} userId 
     * @param {Number} storeId 
     * @param {module:api/UsersApi~getPreviousOrderCountForStoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    this.getPreviousOrderCountForStore = function(userId, storeId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPreviousOrderCountForStore");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getPreviousOrderCountForStore");
      }


      var pathParams = {
        'userId': userId,
        'storeId': storeId
      };
      var queryParams = {
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
      var returnType = RestApiStringResult;

      return this.apiClient.callApi(
        '/api/v1.0/users/{userId}/previousordercount/{storeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoles operation.
     * @callback module:api/UsersApi~getRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringArrayResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get role names
     * @param {module:api/UsersApi~getRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringArrayResult}
     */
    this.getRoles = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = RestApiStringArrayResult;

      return this.apiClient.callApi(
        '/api/v1.0/users/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
