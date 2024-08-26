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
import RestApiArrayResultSubscriptionSummary from '../model/RestApiArrayResultSubscriptionSummary';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultHasPaymentMethodResponse from '../model/RestApiResultHasPaymentMethodResponse';
import RestApiResultSubscription from '../model/RestApiResultSubscription';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1.0.0
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:api/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSubscriptionById operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} subscriptionId 
     * @param {module:api/SubscriptionsApi~getSubscriptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultSubscription}
     */
    getSubscriptionById(appId, subscriptionId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getSubscriptionById");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling getSubscriptionById");
      }

      let pathParams = {
        'appId': appId,
        'subscriptionId': subscriptionId
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
      let returnType = RestApiResultSubscription;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionsForApp operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionsForAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultSubscriptionSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.excludeNotOwnedSubscriptions 
     * @param {Array.<Number>} opts.storeId 
     * @param {Boolean} opts.excludeCancelledSubscriptions 
     * @param {module:api/SubscriptionsApi~getSubscriptionsForAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultSubscriptionSummary}
     */
    getSubscriptionsForApp(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getSubscriptionsForApp");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'excludeNotOwnedSubscriptions': opts['excludeNotOwnedSubscriptions'],
        'storeId': this.apiClient.buildCollectionParam(opts['storeId'], 'multi'),
        'excludeCancelledSubscriptions': opts['excludeCancelledSubscriptions']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultSubscriptionSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the hasCustomerGotPaymentMethodOnFile operation.
     * @callback module:api/SubscriptionsApi~hasCustomerGotPaymentMethodOnFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultHasPaymentMethodResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email 
     * @param {module:api/SubscriptionsApi~hasCustomerGotPaymentMethodOnFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultHasPaymentMethodResponse}
     */
    hasCustomerGotPaymentMethodOnFile(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling hasCustomerGotPaymentMethodOnFile");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'email': opts['email']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultHasPaymentMethodResponse;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/subscriptions/hasPaymentMethod', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
