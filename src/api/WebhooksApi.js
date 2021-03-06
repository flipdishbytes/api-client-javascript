/**
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RestApiArrayResultWebhookSubscription', 'model/RestApiErrorResult', 'model/RestApiForbiddenResult', 'model/RestApiIntegerResult', 'model/RestApiPaginationResultWebhookLog', 'model/RestApiStringArrayResult', 'model/RestApiUnauthorizedResult', 'model/WebhookSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RestApiArrayResultWebhookSubscription'), require('../model/RestApiErrorResult'), require('../model/RestApiForbiddenResult'), require('../model/RestApiIntegerResult'), require('../model/RestApiPaginationResultWebhookLog'), require('../model/RestApiStringArrayResult'), require('../model/RestApiUnauthorizedResult'), require('../model/WebhookSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.WebhooksApi = factory(root.Flipdish.ApiClient, root.Flipdish.RestApiArrayResultWebhookSubscription, root.Flipdish.RestApiErrorResult, root.Flipdish.RestApiForbiddenResult, root.Flipdish.RestApiIntegerResult, root.Flipdish.RestApiPaginationResultWebhookLog, root.Flipdish.RestApiStringArrayResult, root.Flipdish.RestApiUnauthorizedResult, root.Flipdish.WebhookSubscription);
  }
}(this, function(ApiClient, RestApiArrayResultWebhookSubscription, RestApiErrorResult, RestApiForbiddenResult, RestApiIntegerResult, RestApiPaginationResultWebhookLog, RestApiStringArrayResult, RestApiUnauthorizedResult, WebhookSubscription) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the craeteWebhookSubscription operation.
     * @callback module:api/WebhooksApi~craeteWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiIntegerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a webhook subscription for you Oauth client
     * @param {String} clientId Oauth client identifier
     * @param {module:model/WebhookSubscription} webhookSubscription Webhook subscription object
     * @param {module:api/WebhooksApi~craeteWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiIntegerResult}
     */
    this.craeteWebhookSubscription = function(clientId, webhookSubscription, callback) {
      var postBody = webhookSubscription;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling craeteWebhookSubscription");
      }

      // verify the required parameter 'webhookSubscription' is set
      if (webhookSubscription === undefined || webhookSubscription === null) {
        throw new Error("Missing the required parameter 'webhookSubscription' when calling craeteWebhookSubscription");
      }


      var pathParams = {
        'clientId': clientId
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
      var returnType = RestApiIntegerResult;

      return this.apiClient.callApi(
        '/api/v1.0/webhooks/{clientId}/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createWebhookSubscriptionEventNames operation.
     * @callback module:api/WebhooksApi~createWebhookSubscriptionEventNamesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add event name to your webhook subscription
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {String} eventName Webhook subscription event name
     * @param {module:api/WebhooksApi~createWebhookSubscriptionEventNamesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createWebhookSubscriptionEventNames = function(clientId, webhookSubscriptionId, eventName, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling createWebhookSubscriptionEventNames");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling createWebhookSubscriptionEventNames");
      }

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling createWebhookSubscriptionEventNames");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'eventName': eventName
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
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events/{eventName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookSubscription operation.
     * @callback module:api/WebhooksApi~deleteWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete you webhook subscription
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {module:api/WebhooksApi~deleteWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhookSubscription = function(clientId, webhookSubscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteWebhookSubscription");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling deleteWebhookSubscription");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId
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
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookSubscriptionEventName operation.
     * @callback module:api/WebhooksApi~deleteWebhookSubscriptionEventNameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove event name to your webhook subscription
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {String} eventName Webhook subscription event name
     * @param {module:api/WebhooksApi~deleteWebhookSubscriptionEventNameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhookSubscriptionEventName = function(clientId, webhookSubscriptionId, eventName, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteWebhookSubscriptionEventName");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling deleteWebhookSubscriptionEventName");
      }

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling deleteWebhookSubscriptionEventName");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'eventName': eventName
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
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events/{eventName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookEventNames operation.
     * @callback module:api/WebhooksApi~getWebhookEventNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringArrayResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all webhook subscription event names
     * @param {module:api/WebhooksApi~getWebhookEventNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringArrayResult}
     */
    this.getWebhookEventNames = function(callback) {
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
        '/api/v1.0/webhooks/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookEventNamesBySubscriptionId operation.
     * @callback module:api/WebhooksApi~getWebhookEventNamesBySubscriptionIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringArrayResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your webhook subscriptions selected event names
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {module:api/WebhooksApi~getWebhookEventNamesBySubscriptionIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringArrayResult}
     */
    this.getWebhookEventNamesBySubscriptionId = function(clientId, webhookSubscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getWebhookEventNamesBySubscriptionId");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling getWebhookEventNamesBySubscriptionId");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId
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
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookLogs operation.
     * @callback module:api/WebhooksApi~getWebhookLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultWebhookLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get logs for your webhook subscription
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {Date} start Start time
     * @param {Date} end End time
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number
     * @param {Number} opts.limit Page size
     * @param {module:api/WebhooksApi~getWebhookLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultWebhookLog}
     */
    this.getWebhookLogs = function(clientId, webhookSubscriptionId, start, end, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getWebhookLogs");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling getWebhookLogs");
      }

      // verify the required parameter 'start' is set
      if (start === undefined || start === null) {
        throw new Error("Missing the required parameter 'start' when calling getWebhookLogs");
      }

      // verify the required parameter 'end' is set
      if (end === undefined || end === null) {
        throw new Error("Missing the required parameter 'end' when calling getWebhookLogs");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId
      };
      var queryParams = {
        'start': start,
        'end': end,
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
      var returnType = RestApiPaginationResultWebhookLog;

      return this.apiClient.callApi(
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookSubscriptions operation.
     * @callback module:api/WebhooksApi~getWebhookSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultWebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all webhook subscriptions by your Oauth client id
     * @param {String} clientId Oauth client identifier
     * @param {module:api/WebhooksApi~getWebhookSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultWebhookSubscription}
     */
    this.getWebhookSubscriptions = function(clientId, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getWebhookSubscriptions");
      }


      var pathParams = {
        'clientId': clientId
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
      var returnType = RestApiArrayResultWebhookSubscription;

      return this.apiClient.callApi(
        '/api/v1.0/webhooks/{clientId}/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhookSubscription operation.
     * @callback module:api/WebhooksApi~updateWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook subscription object
     * @param {String} clientId Oauth client identifier
     * @param {Number} webhookSubscriptionId Webhook subscription identifier
     * @param {module:model/WebhookSubscription} webhookSubscription Webhook subscription object
     * @param {module:api/WebhooksApi~updateWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWebhookSubscription = function(clientId, webhookSubscriptionId, webhookSubscription, callback) {
      var postBody = webhookSubscription;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling updateWebhookSubscription");
      }

      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling updateWebhookSubscription");
      }

      // verify the required parameter 'webhookSubscription' is set
      if (webhookSubscription === undefined || webhookSubscription === null) {
        throw new Error("Missing the required parameter 'webhookSubscription' when calling updateWebhookSubscription");
      }


      var pathParams = {
        'clientId': clientId,
        'webhookSubscriptionId': webhookSubscriptionId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1.0/webhooks/{clientId}/subscriptions/{webhookSubscriptionId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
