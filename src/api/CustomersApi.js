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
    define(['ApiClient', 'model/CustomerUpdateModel', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultCustomer', 'model/RestApiUnauthorizedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerUpdateModel'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultCustomer'), require('../model/RestApiUnauthorizedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.CustomersApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.CustomerUpdateModel, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiResultCustomer, root.FlipdishOpenApiV10.RestApiUnauthorizedResult);
  }
}(this, function(ApiClient, CustomerUpdateModel, RestApiErrorResult, RestApiForbiddenResult, RestApiResultCustomer, RestApiUnauthorizedResult) {
  'use strict';

  /**
   * Customers service.
   * @module api/CustomersApi
   * @version v1.0
   */

  /**
   * Constructs a new CustomersApi. 
   * @alias module:api/CustomersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCustomerById operation.
     * @callback module:api/CustomersApi~getCustomerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customer of an app by Id
     * @param {String} appId App Name Id
     * @param {Number} customerId Customer Id
     * @param {module:api/CustomersApi~getCustomerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCustomer}
     */
    this.getCustomerById = function(appId, customerId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCustomerById");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerById");
      }


      var pathParams = {
        'appId': appId,
        'customerId': customerId
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
      var returnType = RestApiResultCustomer;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customers/{customerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerById operation.
     * @callback module:api/CustomersApi~updateCustomerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update customer of an app by Id
     * @param {String} appId App Name Id
     * @param {Number} customerId Customer Id
     * @param {module:model/CustomerUpdateModel} updateCustomer Updated customer information
     * @param {module:api/CustomersApi~updateCustomerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultCustomer}
     */
    this.updateCustomerById = function(appId, customerId, updateCustomer, callback) {
      var postBody = updateCustomer;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateCustomerById");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updateCustomerById");
      }

      // verify the required parameter 'updateCustomer' is set
      if (updateCustomer === undefined || updateCustomer === null) {
        throw new Error("Missing the required parameter 'updateCustomer' when calling updateCustomerById");
      }


      var pathParams = {
        'appId': appId,
        'customerId': customerId
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
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = RestApiResultCustomer;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customers/{customerId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
