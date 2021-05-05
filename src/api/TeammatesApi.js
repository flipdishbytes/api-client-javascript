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
    define(['ApiClient', 'model/CreateTeammate', 'model/RestApiArrayResultTeammate', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiResultRedeemInvitationResult', 'model/RestApiResultTeammate', 'model/RestApiUnauthorizedResult', 'model/TeammateBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateTeammate'), require('../model/RestApiArrayResultTeammate'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiResultRedeemInvitationResult'), require('../model/RestApiResultTeammate'), require('../model/RestApiUnauthorizedResult'), require('../model/TeammateBase'));
  } else {
    // Browser globals (root is window)
    if (!root.FlipdishOpenApiV10) {
      root.FlipdishOpenApiV10 = {};
    }
    root.FlipdishOpenApiV10.TeammatesApi = factory(root.FlipdishOpenApiV10.ApiClient, root.FlipdishOpenApiV10.CreateTeammate, root.FlipdishOpenApiV10.RestApiArrayResultTeammate, root.FlipdishOpenApiV10.RestApiErrorResult, root.FlipdishOpenApiV10.RestApiForbiddenResult, root.FlipdishOpenApiV10.RestApiResultRedeemInvitationResult, root.FlipdishOpenApiV10.RestApiResultTeammate, root.FlipdishOpenApiV10.RestApiUnauthorizedResult, root.FlipdishOpenApiV10.TeammateBase);
  }
}(this, function(ApiClient, CreateTeammate, RestApiArrayResultTeammate, RestApiErrorResult, RestApiForbiddenResult, RestApiResultRedeemInvitationResult, RestApiResultTeammate, RestApiUnauthorizedResult, TeammateBase) {
  'use strict';

  /**
   * Teammates service.
   * @module api/TeammatesApi
   * @version v1.0
   */

  /**
   * Constructs a new TeammatesApi. 
   * @alias module:api/TeammatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTeammate operation.
     * @callback module:api/TeammatesApi~createTeammateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultTeammate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create teammate and send an invite.
     * @param {String} appId Application identifier
     * @param {module:model/CreateTeammate} teammate teammate model
     * @param {module:api/TeammatesApi~createTeammateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultTeammate}
     */
    this.createTeammate = function(appId, teammate, callback) {
      var postBody = teammate;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createTeammate");
      }

      // verify the required parameter 'teammate' is set
      if (teammate === undefined || teammate === null) {
        throw new Error("Missing the required parameter 'teammate' when calling createTeammate");
      }


      var pathParams = {
        'appId': appId
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
      var returnType = RestApiResultTeammate;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTeammate operation.
     * @callback module:api/TeammatesApi~deleteTeammateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete teammate
     * @param {String} appId 
     * @param {String} id 
     * @param {module:api/TeammatesApi~deleteTeammateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTeammate = function(appId, id, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteTeammate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTeammate");
      }


      var pathParams = {
        'appId': appId,
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeammateByAppIdAndTeammateId operation.
     * @callback module:api/TeammatesApi~getTeammateByAppIdAndTeammateIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultTeammate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a teammates by email address
     * @param {String} appId 
     * @param {String} id 
     * @param {module:api/TeammatesApi~getTeammateByAppIdAndTeammateIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultTeammate}
     */
    this.getTeammateByAppIdAndTeammateId = function(appId, id, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getTeammateByAppIdAndTeammateId");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTeammateByAppIdAndTeammateId");
      }


      var pathParams = {
        'appId': appId,
        'id': id
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
      var returnType = RestApiResultTeammate;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeammatesByAppId operation.
     * @callback module:api/TeammatesApi~getTeammatesByAppIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultTeammate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all teammates
     * @param {String} appId 
     * @param {module:api/TeammatesApi~getTeammatesByAppIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultTeammate}
     */
    this.getTeammatesByAppId = function(appId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getTeammatesByAppId");
      }


      var pathParams = {
        'appId': appId
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
      var returnType = RestApiArrayResultTeammate;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the redeemInvitation operation.
     * @callback module:api/TeammatesApi~redeemInvitationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRedeemInvitationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redeem one-time code from invitation
     * @param {String} otc 
     * @param {String} appId 
     * @param {module:api/TeammatesApi~redeemInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRedeemInvitationResult}
     */
    this.redeemInvitation = function(otc, appId, callback) {
      var postBody = null;

      // verify the required parameter 'otc' is set
      if (otc === undefined || otc === null) {
        throw new Error("Missing the required parameter 'otc' when calling redeemInvitation");
      }

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling redeemInvitation");
      }


      var pathParams = {
        'otc': otc,
        'appId': appId
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
      var returnType = RestApiResultRedeemInvitationResult;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates/redeem/{otc}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeammate operation.
     * @callback module:api/TeammatesApi~updateTeammateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultTeammate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update teammates (this method does not support Deltas!)
     * @param {String} appId Application identifier
     * @param {String} id teammate identifier
     * @param {module:model/TeammateBase} teammate teammate model
     * @param {module:api/TeammatesApi~updateTeammateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultTeammate}
     */
    this.updateTeammate = function(appId, id, teammate, callback) {
      var postBody = teammate;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateTeammate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTeammate");
      }

      // verify the required parameter 'teammate' is set
      if (teammate === undefined || teammate === null) {
        throw new Error("Missing the required parameter 'teammate' when calling updateTeammate");
      }


      var pathParams = {
        'appId': appId,
        'id': id
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
      var returnType = RestApiResultTeammate;

      return this.apiClient.callApi(
        '/api/v1.0/{appId}/teammates/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
