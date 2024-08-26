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
import RestApiIntegerResult from '../model/RestApiIntegerResult';
import RestApiPaginationResultWebhookLog from '../model/RestApiPaginationResultWebhookLog';
import RestApiPaginationResultWebhookSubscription from '../model/RestApiPaginationResultWebhookSubscription';
import RestApiStringArrayResult from '../model/RestApiStringArrayResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import WebhookEventSample from '../model/WebhookEventSample';
import WebhookSubscription from '../model/WebhookSubscription';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWebhookSubscription operation.
     * @callback module:api/WebhooksApi~createWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiIntegerResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} oauthAppId 
     * @param {String} appId 
     * @param {module:model/WebhookSubscription} webhookSubscription 
     * @param {module:api/WebhooksApi~createWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiIntegerResult}
     */
    createWebhookSubscription(oauthAppId, appId, webhookSubscription, callback) {
      let postBody = webhookSubscription;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling createWebhookSubscription");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createWebhookSubscription");
      }
      // verify the required parameter 'webhookSubscription' is set
      if (webhookSubscription === undefined || webhookSubscription === null) {
        throw new Error("Missing the required parameter 'webhookSubscription' when calling createWebhookSubscription");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message'];
      let returnType = RestApiIntegerResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {String} eventName 
     * @param {String} appId 
     * @param {module:api/WebhooksApi~createWebhookSubscriptionEventNamesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createWebhookSubscriptionEventNames(oauthAppId, webhookSubscriptionId, eventName, appId, callback) {
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling createWebhookSubscriptionEventNames");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling createWebhookSubscriptionEventNames");
      }
      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling createWebhookSubscriptionEventNames");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createWebhookSubscriptionEventNames");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'eventName': eventName,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {String} appId 
     * @param {module:api/WebhooksApi~deleteWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling deleteWebhookSubscription");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling deleteWebhookSubscription");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteWebhookSubscription");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {String} eventName 
     * @param {String} appId 
     * @param {module:api/WebhooksApi~deleteWebhookSubscriptionEventNameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWebhookSubscriptionEventName(oauthAppId, webhookSubscriptionId, eventName, appId, callback) {
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling deleteWebhookSubscriptionEventName");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling deleteWebhookSubscriptionEventName");
      }
      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling deleteWebhookSubscriptionEventName");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteWebhookSubscriptionEventName");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'eventName': eventName,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} appId 
     * @param {module:api/WebhooksApi~getWebhookEventNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringArrayResult}
     */
    getWebhookEventNames(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhookEventNames");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message'];
      let returnType = RestApiStringArrayResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {String} appId 
     * @param {module:api/WebhooksApi~getWebhookEventNamesBySubscriptionIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringArrayResult}
     */
    getWebhookEventNamesBySubscriptionId(oauthAppId, webhookSubscriptionId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getWebhookEventNamesBySubscriptionId");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling getWebhookEventNamesBySubscriptionId");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhookEventNamesBySubscriptionId");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message'];
      let returnType = RestApiStringArrayResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookEventSample operation.
     * @callback module:api/WebhooksApi~getWebhookEventSampleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookEventSample} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} eventName 
     * @param {String} appId 
     * @param {String} oauthAppId 
     * @param {String} webhookSubscriptionId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.version 
     * @param {module:api/WebhooksApi~getWebhookEventSampleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookEventSample}
     */
    getWebhookEventSample(eventName, appId, oauthAppId, webhookSubscriptionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling getWebhookEventSample");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhookEventSample");
      }
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getWebhookEventSample");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling getWebhookEventSample");
      }

      let pathParams = {
        'eventName': eventName,
        'appId': appId,
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId
      };
      let queryParams = {
        'version': opts['version']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Type', 'CreateTime', 'Body'];
      let returnType = WebhookEventSample;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/events/{eventName}/test', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {Date} start 
     * @param {Date} end 
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/WebhooksApi~getWebhookLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultWebhookLog}
     */
    getWebhookLogs(oauthAppId, webhookSubscriptionId, start, end, appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getWebhookLogs");
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
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhookLogs");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'appId': appId
      };
      let queryParams = {
        'start': start,
        'end': end,
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message'];
      let returnType = RestApiPaginationResultWebhookLog;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookSubscriptions operation.
     * @callback module:api/WebhooksApi~getWebhookSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultWebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} oauthAppId 
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/WebhooksApi~getWebhookSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultWebhookSubscription}
     */
    getWebhookSubscriptions(oauthAppId, appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling getWebhookSubscriptions");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhookSubscriptions");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'appId': appId
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message'];
      let returnType = RestApiPaginationResultWebhookSubscription;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} oauthAppId 
     * @param {Number} webhookSubscriptionId 
     * @param {String} appId 
     * @param {module:model/WebhookSubscription} webhookSubscription 
     * @param {module:api/WebhooksApi~updateWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateWebhookSubscription(oauthAppId, webhookSubscriptionId, appId, webhookSubscription, callback) {
      let postBody = webhookSubscription;
      // verify the required parameter 'oauthAppId' is set
      if (oauthAppId === undefined || oauthAppId === null) {
        throw new Error("Missing the required parameter 'oauthAppId' when calling updateWebhookSubscription");
      }
      // verify the required parameter 'webhookSubscriptionId' is set
      if (webhookSubscriptionId === undefined || webhookSubscriptionId === null) {
        throw new Error("Missing the required parameter 'webhookSubscriptionId' when calling updateWebhookSubscription");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateWebhookSubscription");
      }
      // verify the required parameter 'webhookSubscription' is set
      if (webhookSubscription === undefined || webhookSubscription === null) {
        throw new Error("Missing the required parameter 'webhookSubscription' when calling updateWebhookSubscription");
      }

      let pathParams = {
        'oauthAppId': oauthAppId,
        'webhookSubscriptionId': webhookSubscriptionId,
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/webhooks/{oauthAppId}/subscriptions/{webhookSubscriptionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
