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
import CreatePayGreenConfigurationRequest from '../model/CreatePayGreenConfigurationRequest';
import RestApiArrayResultRestaurantVoucherEligibleStore from '../model/RestApiArrayResultRestaurantVoucherEligibleStore';
import RestApiArrayResultRestaurantVoucherPayGreenConfiguration from '../model/RestApiArrayResultRestaurantVoucherPayGreenConfiguration';
import RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary from '../model/RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultRestaurantVoucherPayGreenConfiguration from '../model/RestApiResultRestaurantVoucherPayGreenConfiguration';
import RestApiResultRestaurantVoucherPayGreenStoreConfiguration from '../model/RestApiResultRestaurantVoucherPayGreenStoreConfiguration';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UpdatePayGreenConfigurationRequest from '../model/UpdatePayGreenConfigurationRequest';
import UpdateStorePayGreenConfigurationRequest from '../model/UpdateStorePayGreenConfigurationRequest';

/**
* RestaurantVouchersPayGreen service.
* @module api/RestaurantVouchersPayGreenApi
* @version 1.0.0
*/
export default class RestaurantVouchersPayGreenApi {

    /**
    * Constructs a new RestaurantVouchersPayGreenApi. 
    * @alias module:api/RestaurantVouchersPayGreenApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPayGreenConfiguration operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~createPayGreenConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestaurantVoucherPayGreenConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:model/CreatePayGreenConfigurationRequest} request 
     * @param {module:api/RestaurantVouchersPayGreenApi~createPayGreenConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestaurantVoucherPayGreenConfiguration}
     */
    createPayGreenConfiguration(appId, request, callback) {
      let postBody = request;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createPayGreenConfiguration");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling createPayGreenConfiguration");
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
      let returnType = RestApiResultRestaurantVoucherPayGreenConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePayGreenConfiguration operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~deletePayGreenConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} paygreenConfigurationId 
     * @param {module:api/RestaurantVouchersPayGreenApi~deletePayGreenConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deletePayGreenConfiguration(appId, paygreenConfigurationId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deletePayGreenConfiguration");
      }
      // verify the required parameter 'paygreenConfigurationId' is set
      if (paygreenConfigurationId === undefined || paygreenConfigurationId === null) {
        throw new Error("Missing the required parameter 'paygreenConfigurationId' when calling deletePayGreenConfiguration");
      }

      let pathParams = {
        'appId': appId,
        'paygreenConfigurationId': paygreenConfigurationId
      };
      let queryParams = {
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
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getElegibleStores operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~getElegibleStoresCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultRestaurantVoucherEligibleStore} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/RestaurantVouchersPayGreenApi~getElegibleStoresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultRestaurantVoucherEligibleStore}
     */
    getElegibleStores(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getElegibleStores");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultRestaurantVoucherEligibleStore;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/stores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPayGreenConfigurations operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~getPayGreenConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultRestaurantVoucherPayGreenConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {module:api/RestaurantVouchersPayGreenApi~getPayGreenConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultRestaurantVoucherPayGreenConfiguration}
     */
    getPayGreenConfigurations(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getPayGreenConfigurations");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultRestaurantVoucherPayGreenConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoreAvailablePayGreenConfigurations operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~getStoreAvailablePayGreenConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} storeId 
     * @param {module:api/RestaurantVouchersPayGreenApi~getStoreAvailablePayGreenConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary}
     */
    getStoreAvailablePayGreenConfigurations(appId, storeId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStoreAvailablePayGreenConfigurations");
      }
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getStoreAvailablePayGreenConfigurations");
      }

      let pathParams = {
        'appId': appId,
        'storeId': storeId
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
      let returnType = RestApiArrayResultRestaurantVoucherPayGreenConfigurationSummary;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId}/available-configurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStorePayGreenConfiguration operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~getStorePayGreenConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestaurantVoucherPayGreenStoreConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} storeId 
     * @param {module:api/RestaurantVouchersPayGreenApi~getStorePayGreenConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestaurantVoucherPayGreenStoreConfiguration}
     */
    getStorePayGreenConfiguration(appId, storeId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStorePayGreenConfiguration");
      }
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getStorePayGreenConfiguration");
      }

      let pathParams = {
        'appId': appId,
        'storeId': storeId
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
      let returnType = RestApiResultRestaurantVoucherPayGreenStoreConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPayGreenConfigurations operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~listPayGreenConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestaurantVoucherPayGreenConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} paygreenConfigurationId 
     * @param {module:api/RestaurantVouchersPayGreenApi~listPayGreenConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestaurantVoucherPayGreenConfiguration}
     */
    listPayGreenConfigurations(appId, paygreenConfigurationId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listPayGreenConfigurations");
      }
      // verify the required parameter 'paygreenConfigurationId' is set
      if (paygreenConfigurationId === undefined || paygreenConfigurationId === null) {
        throw new Error("Missing the required parameter 'paygreenConfigurationId' when calling listPayGreenConfigurations");
      }

      let pathParams = {
        'appId': appId,
        'paygreenConfigurationId': paygreenConfigurationId
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
      let returnType = RestApiResultRestaurantVoucherPayGreenConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePayGreenConfiguration operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~updatePayGreenConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestaurantVoucherPayGreenConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} paygreenConfigurationId 
     * @param {module:model/UpdatePayGreenConfigurationRequest} request 
     * @param {module:api/RestaurantVouchersPayGreenApi~updatePayGreenConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestaurantVoucherPayGreenConfiguration}
     */
    updatePayGreenConfiguration(appId, paygreenConfigurationId, request, callback) {
      let postBody = request;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updatePayGreenConfiguration");
      }
      // verify the required parameter 'paygreenConfigurationId' is set
      if (paygreenConfigurationId === undefined || paygreenConfigurationId === null) {
        throw new Error("Missing the required parameter 'paygreenConfigurationId' when calling updatePayGreenConfiguration");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updatePayGreenConfiguration");
      }

      let pathParams = {
        'appId': appId,
        'paygreenConfigurationId': paygreenConfigurationId
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
      let returnType = RestApiResultRestaurantVoucherPayGreenConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/{paygreenConfigurationId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStorePayGreenConfiguration operation.
     * @callback module:api/RestaurantVouchersPayGreenApi~updateStorePayGreenConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultRestaurantVoucherPayGreenStoreConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} storeId 
     * @param {module:model/UpdateStorePayGreenConfigurationRequest} request 
     * @param {module:api/RestaurantVouchersPayGreenApi~updateStorePayGreenConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultRestaurantVoucherPayGreenStoreConfiguration}
     */
    updateStorePayGreenConfiguration(appId, storeId, request, callback) {
      let postBody = request;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateStorePayGreenConfiguration");
      }
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling updateStorePayGreenConfiguration");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateStorePayGreenConfiguration");
      }

      let pathParams = {
        'appId': appId,
        'storeId': storeId
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
      let returnType = RestApiResultRestaurantVoucherPayGreenStoreConfiguration;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/restaurant-vouchers/paygreen/stores/{storeId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
