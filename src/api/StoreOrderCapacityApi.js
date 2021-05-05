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
    define(['ApiClient', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultStoreOrderCapacityConfig', 'model/RestApiUnauthorizedResult', 'model/StoreOrderCapacityConfigEditModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultStoreOrderCapacityConfig'), require('../model/RestApiUnauthorizedResult'), require('../model/StoreOrderCapacityConfigEditModel'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.StoreOrderCapacityApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiResultStoreOrderCapacityConfig, root.FlipdishOpenApiV10.RestApiUnauthorizedResult, root.FlipdishOpenApiV10.StoreOrderCapacityConfigEditModel);
  }
}(this, function(ApiClient, RestApiErrorResult, RestApiForbiddenResult, RestApiResultStoreOrderCapacityConfig, RestApiUnauthorizedResult, StoreOrderCapacityConfigEditModel) {
  'use strict';

  /**
   * StoreOrderCapacity service.
   * @module api/StoreOrderCapacityApi
   * @version v1.0
   */

  /**
   * Constructs a new StoreOrderCapacityApi. 
   * @alias module:api/StoreOrderCapacityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStoreOrderCapacity operation.
     * @callback module:api/StoreOrderCapacityApi~getStoreOrderCapacityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStoreOrderCapacityConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get store's order capacity configuration
     * @param {String} appId App Name Id
     * @param {Number} storeId Store Id
     * @param {module:model/String} deliveryType Delivery / Pickup
     * @param {module:api/StoreOrderCapacityApi~getStoreOrderCapacityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStoreOrderCapacityConfig}
     */
    this.getStoreOrderCapacity = function(appId, storeId, deliveryType, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStoreOrderCapacity");
      }

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getStoreOrderCapacity");
      }

      // verify the required parameter 'deliveryType' is set
      if (deliveryType === undefined || deliveryType === null) {
        throw new Error("Missing the required parameter 'deliveryType' when calling getStoreOrderCapacity");
      }


      var pathParams = {
        'appId': appId,
        'storeId': storeId,
        'deliveryType': deliveryType
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
      var returnType = RestApiResultStoreOrderCapacityConfig;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/storeordercapacity/{storeId}/{deliveryType}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStoreOrderCapacityConfig operation.
     * @callback module:api/StoreOrderCapacityApi~updateStoreOrderCapacityConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a store's order capacity configuration
     * @param {Number} storeId Store identifier
     * @param {module:model/String} deliveryType Delivery / Pickup
     * @param {module:model/StoreOrderCapacityConfigEditModel} newOrderCapacityConfig new order capacity configuration
     * @param {String} appId 
     * @param {module:api/StoreOrderCapacityApi~updateStoreOrderCapacityConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateStoreOrderCapacityConfig = function(storeId, deliveryType, newOrderCapacityConfig, appId, callback) {
      var postBody = newOrderCapacityConfig;

      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling updateStoreOrderCapacityConfig");
      }

      // verify the required parameter 'deliveryType' is set
      if (deliveryType === undefined || deliveryType === null) {
        throw new Error("Missing the required parameter 'deliveryType' when calling updateStoreOrderCapacityConfig");
      }

      // verify the required parameter 'newOrderCapacityConfig' is set
      if (newOrderCapacityConfig === undefined || newOrderCapacityConfig === null) {
        throw new Error("Missing the required parameter 'newOrderCapacityConfig' when calling updateStoreOrderCapacityConfig");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateStoreOrderCapacityConfig");
      }


      var pathParams = {
        'storeId': storeId,
        'appId': appId
      };
      var queryParams = {
        'deliveryType': deliveryType,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/storeordercapacity/{storeId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
