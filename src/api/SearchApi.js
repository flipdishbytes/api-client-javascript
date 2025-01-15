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
import RestApiPaginationResultRestaurant from '../model/RestApiPaginationResultRestaurant';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the searchRestaurants operation.
     * @callback module:api/SearchApi~searchRestaurantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultRestaurant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} query 
     * @param {String} countryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.includeArchivedStores 
     * @param {module:model/String} opts.searchType 
     * @param {module:model/String} opts.publishedStatus 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/SearchApi~searchRestaurantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultRestaurant}
     */
    searchRestaurants(query, countryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchRestaurants");
      }
      // verify the required parameter 'countryId' is set
      if (countryId === undefined || countryId === null) {
        throw new Error("Missing the required parameter 'countryId' when calling searchRestaurants");
      }

      let pathParams = {
      };
      let queryParams = {
        'query': query,
        'countryId': countryId,
        'includeArchivedStores': opts['includeArchivedStores'],
        'searchType': opts['searchType'],
        'publishedStatus': opts['publishedStatus'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiPaginationResultRestaurant;
      return this.apiClient.callApi(
        '/api/v1.0/search/restaurants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
