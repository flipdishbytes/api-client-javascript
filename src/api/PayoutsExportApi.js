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
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* PayoutsExport service.
* @module api/PayoutsExportApi
* @version 1.0.0
*/
export default class PayoutsExportApi {

    /**
    * Constructs a new PayoutsExportApi. 
    * @alias module:api/PayoutsExportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the exportPayoutChargebacks operation.
     * @callback module:api/PayoutsExportApi~exportPayoutChargebacksCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} payoutId 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.storeIds 
     * @param {module:api/PayoutsExportApi~exportPayoutChargebacksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayoutChargebacks(appId, bankAccountId, payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayoutChargebacks");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling exportPayoutChargebacks");
      }
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling exportPayoutChargebacks");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'payoutId': payoutId
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(opts['storeIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/chargebacks/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportPayoutOrders operation.
     * @callback module:api/PayoutsExportApi~exportPayoutOrdersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} payoutId 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.storeIds 
     * @param {module:api/PayoutsExportApi~exportPayoutOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayoutOrders(appId, bankAccountId, payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayoutOrders");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling exportPayoutOrders");
      }
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling exportPayoutOrders");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'payoutId': payoutId
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(opts['storeIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/orders/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportPayoutOtherCharges operation.
     * @callback module:api/PayoutsExportApi~exportPayoutOtherChargesCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} payoutId 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.storeIds 
     * @param {module:api/PayoutsExportApi~exportPayoutOtherChargesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayoutOtherCharges(appId, bankAccountId, payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayoutOtherCharges");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling exportPayoutOtherCharges");
      }
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling exportPayoutOtherCharges");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'payoutId': payoutId
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(opts['storeIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/othercharges/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportPayoutRefunds operation.
     * @callback module:api/PayoutsExportApi~exportPayoutRefundsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} payoutId 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.storeIds 
     * @param {module:api/PayoutsExportApi~exportPayoutRefundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayoutRefunds(appId, bankAccountId, payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayoutRefunds");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling exportPayoutRefunds");
      }
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling exportPayoutRefunds");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'payoutId': payoutId
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(opts['storeIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/refunds/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportPayoutStores operation.
     * @callback module:api/PayoutsExportApi~exportPayoutStoresCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {Number} payoutId 
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.storeIds 
     * @param {module:api/PayoutsExportApi~exportPayoutStoresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayoutStores(appId, bankAccountId, payoutId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayoutStores");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling exportPayoutStores");
      }
      // verify the required parameter 'payoutId' is set
      if (payoutId === undefined || payoutId === null) {
        throw new Error("Missing the required parameter 'payoutId' when calling exportPayoutStores");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId,
        'payoutId': payoutId
      };
      let queryParams = {
        'storeIds': this.apiClient.buildCollectionParam(opts['storeIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/bankaccounts/{bankAccountId}/payouts/{payoutId}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exportPayouts operation.
     * @callback module:api/PayoutsExportApi~exportPayoutsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate 
     * @param {Date} opts.endDate 
     * @param {Array.<Number>} opts.payoutRequestIds_bankAccountIds List of bank account ids to search for
     * @param {Array.<module:model/String>} opts.payoutRequestIds_states List of {Flipdish.PublicModels.V1.Payouts.PayoutStatus} so search for
     * @param {module:api/PayoutsExportApi~exportPayoutsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    exportPayouts(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling exportPayouts");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'payoutRequestIds.bankAccountIds': this.apiClient.buildCollectionParam(opts['payoutRequestIds_bankAccountIds'], 'multi'),
        'payoutRequestIds.states': this.apiClient.buildCollectionParam(opts['payoutRequestIds_states'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/payouts/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}