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
import BankAccountCreate from '../model/BankAccountCreate';
import BankAccountDetailsUpdateRequest from '../model/BankAccountDetailsUpdateRequest';
import RestApiArrayResultStripeCustomConnectedAccount from '../model/RestApiArrayResultStripeCustomConnectedAccount';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultBankAccountDetail from '../model/RestApiResultBankAccountDetail';
import RestApiResultModelBase from '../model/RestApiResultModelBase';
import RestApiResultStripeConnectedAccount from '../model/RestApiResultStripeConnectedAccount';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import StripeAccountLinkRequest from '../model/StripeAccountLinkRequest';

/**
* StripeCustomConnect service.
* @module api/StripeCustomConnectApi
* @version 1.0.0
*/
export default class StripeCustomConnectApi {

    /**
    * Constructs a new StripeCustomConnectApi. 
    * @alias module:api/StripeCustomConnectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBankAccountAndConnectedAccount operation.
     * @callback module:api/StripeCustomConnectApi~createBankAccountAndConnectedAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultBankAccountDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/BankAccountCreate} account 
     * @param {module:api/StripeCustomConnectApi~createBankAccountAndConnectedAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultBankAccountDetail}
     */
    createBankAccountAndConnectedAccount(appId, account, callback) {
      let postBody = account;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createBankAccountAndConnectedAccount");
      }
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling createBankAccountAndConnectedAccount");
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
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultBankAccountDetail;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/bank-account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createStripeConnectedAccount operation.
     * @callback module:api/StripeCustomConnectApi~createStripeConnectedAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeConnectedAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {module:api/StripeCustomConnectApi~createStripeConnectedAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeConnectedAccount}
     */
    createStripeConnectedAccount(appId, bankAccountId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createStripeConnectedAccount");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling createStripeConnectedAccount");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeConnectedAccount;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/{bankAccountId}/create-update-account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createStripeConnectedAccountLink operation.
     * @callback module:api/StripeCustomConnectApi~createStripeConnectedAccountLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeConnectedAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} stripeConnectedAccountId 
     * @param {module:model/StripeAccountLinkRequest} stripeAccountLinkRequest 
     * @param {module:api/StripeCustomConnectApi~createStripeConnectedAccountLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeConnectedAccount}
     */
    createStripeConnectedAccountLink(appId, stripeConnectedAccountId, stripeAccountLinkRequest, callback) {
      let postBody = stripeAccountLinkRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createStripeConnectedAccountLink");
      }
      // verify the required parameter 'stripeConnectedAccountId' is set
      if (stripeConnectedAccountId === undefined || stripeConnectedAccountId === null) {
        throw new Error("Missing the required parameter 'stripeConnectedAccountId' when calling createStripeConnectedAccountLink");
      }
      // verify the required parameter 'stripeAccountLinkRequest' is set
      if (stripeAccountLinkRequest === undefined || stripeAccountLinkRequest === null) {
        throw new Error("Missing the required parameter 'stripeAccountLinkRequest' when calling createStripeConnectedAccountLink");
      }

      let pathParams = {
        'appId': appId,
        'stripeConnectedAccountId': stripeConnectedAccountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeConnectedAccount;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/{stripeConnectedAccountId}/create-account-link', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomConnect operation.
     * @callback module:api/StripeCustomConnectApi~getCustomConnectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultStripeCustomConnectedAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} storeId 
     * @param {String} appId 
     * @param {module:api/StripeCustomConnectApi~getCustomConnectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultStripeCustomConnectedAccount}
     */
    getCustomConnect(storeId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getCustomConnect");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCustomConnect");
      }

      let pathParams = {
        'storeId': storeId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultStripeCustomConnectedAccount;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/{storeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVerificationStatus operation.
     * @callback module:api/StripeCustomConnectApi~getVerificationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeConnectedAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} stripeConnectedAccountId 
     * @param {module:api/StripeCustomConnectApi~getVerificationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeConnectedAccount}
     */
    getVerificationStatus(appId, stripeConnectedAccountId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getVerificationStatus");
      }
      // verify the required parameter 'stripeConnectedAccountId' is set
      if (stripeConnectedAccountId === undefined || stripeConnectedAccountId === null) {
        throw new Error("Missing the required parameter 'stripeConnectedAccountId' when calling getVerificationStatus");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'stripeConnectedAccountId': stripeConnectedAccountId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeConnectedAccount;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/verification-status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setBankAccountBusinessType operation.
     * @callback module:api/StripeCustomConnectApi~setBankAccountBusinessTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultBankAccountDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {String} businessType 
     * @param {module:api/StripeCustomConnectApi~setBankAccountBusinessTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultBankAccountDetail}
     */
    setBankAccountBusinessType(appId, bankAccountId, businessType, callback) {
      let postBody = businessType;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setBankAccountBusinessType");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling setBankAccountBusinessType");
      }
      // verify the required parameter 'businessType' is set
      if (businessType === undefined || businessType === null) {
        throw new Error("Missing the required parameter 'businessType' when calling setBankAccountBusinessType");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultBankAccountDetail;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/bank-account/{bankAccountId}/businesstype', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stripeCustomConnectRefresh operation.
     * @callback module:api/StripeCustomConnectApi~stripeCustomConnectRefreshCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} linkRequestId 
     * @param {String} appId 
     * @param {module:api/StripeCustomConnectApi~stripeCustomConnectRefreshCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    stripeCustomConnectRefresh(linkRequestId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'linkRequestId' is set
      if (linkRequestId === undefined || linkRequestId === null) {
        throw new Error("Missing the required parameter 'linkRequestId' when calling stripeCustomConnectRefresh");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling stripeCustomConnectRefresh");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'linkRequestId': linkRequestId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/refresh-link', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBankAccountDetails operation.
     * @callback module:api/StripeCustomConnectApi~updateBankAccountDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultStripeConnectedAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} bankAccountId 
     * @param {module:model/BankAccountDetailsUpdateRequest} updateRequest 
     * @param {module:api/StripeCustomConnectApi~updateBankAccountDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultStripeConnectedAccount}
     */
    updateBankAccountDetails(appId, bankAccountId, updateRequest, callback) {
      let postBody = updateRequest;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateBankAccountDetails");
      }
      // verify the required parameter 'bankAccountId' is set
      if (bankAccountId === undefined || bankAccountId === null) {
        throw new Error("Missing the required parameter 'bankAccountId' when calling updateBankAccountDetails");
      }
      // verify the required parameter 'updateRequest' is set
      if (updateRequest === undefined || updateRequest === null) {
        throw new Error("Missing the required parameter 'updateRequest' when calling updateBankAccountDetails");
      }

      let pathParams = {
        'appId': appId,
        'bankAccountId': bankAccountId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultStripeConnectedAccount;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/{bankAccountId}/update-bank-account-details', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePayoutSchedule operation.
     * @callback module:api/StripeCustomConnectApi~updatePayoutScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultModelBase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {String} stripeConnectedAccountId 
     * @param {String} interval 
     * @param {module:api/StripeCustomConnectApi~updatePayoutScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultModelBase}
     */
    updatePayoutSchedule(appId, stripeConnectedAccountId, interval, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updatePayoutSchedule");
      }
      // verify the required parameter 'stripeConnectedAccountId' is set
      if (stripeConnectedAccountId === undefined || stripeConnectedAccountId === null) {
        throw new Error("Missing the required parameter 'stripeConnectedAccountId' when calling updatePayoutSchedule");
      }
      // verify the required parameter 'interval' is set
      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling updatePayoutSchedule");
      }

      let pathParams = {
        'appId': appId,
        'stripeConnectedAccountId': stripeConnectedAccountId,
        'interval': interval
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiResultModelBase;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/customconnect/update-payout-schedule/{stripeConnectedAccountId}/{interval}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
