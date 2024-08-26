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
import ItemNutritionInfoAddUpdateModel from '../model/ItemNutritionInfoAddUpdateModel';
import RestApiArrayResultAllergen from '../model/RestApiArrayResultAllergen';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultMenuNutritionInfoHeader from '../model/RestApiResultMenuNutritionInfoHeader';
import RestApiResultNutritionInfo from '../model/RestApiResultNutritionInfo';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* MenusNutritionInfo service.
* @module api/MenusNutritionInfoApi
* @version 1.0.0
*/
export default class MenusNutritionInfoApi {

    /**
    * Constructs a new MenusNutritionInfoApi. 
    * @alias module:api/MenusNutritionInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrUpdateMenuItemNutritionInfo operation.
     * @callback module:api/MenusNutritionInfoApi~addOrUpdateMenuItemNutritionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuNutritionInfoHeader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update menuitem nutrition info by menu item's publicId
     * @param {Number} menuId Menu identifier
     * @param {String} publicId Menu item's publicId
     * @param {module:model/ItemNutritionInfoAddUpdateModel} addOrUpdateModel 
     * @param {module:api/MenusNutritionInfoApi~addOrUpdateMenuItemNutritionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuNutritionInfoHeader}
     */
    addOrUpdateMenuItemNutritionInfo(menuId, publicId, addOrUpdateModel, callback) {
      let postBody = addOrUpdateModel;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addOrUpdateMenuItemNutritionInfo");
      }
      // verify the required parameter 'publicId' is set
      if (publicId === undefined || publicId === null) {
        throw new Error("Missing the required parameter 'publicId' when calling addOrUpdateMenuItemNutritionInfo");
      }
      // verify the required parameter 'addOrUpdateModel' is set
      if (addOrUpdateModel === undefined || addOrUpdateModel === null) {
        throw new Error("Missing the required parameter 'addOrUpdateModel' when calling addOrUpdateMenuItemNutritionInfo");
      }

      let pathParams = {
        'menuId': menuId,
        'publicId': publicId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultMenuNutritionInfoHeader;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/menuItem/{publicId}/nutrition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrUpdateMenuItemOptionSetItemNutritionInfo operation.
     * @callback module:api/MenusNutritionInfoApi~addOrUpdateMenuItemOptionSetItemNutritionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuNutritionInfoHeader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update menuitem optionsetitem nutrition info its publicId
     * @param {Number} menuId Menu identifier
     * @param {String} publicId Menu item's publicId
     * @param {module:model/ItemNutritionInfoAddUpdateModel} addOrUpdateModel 
     * @param {module:api/MenusNutritionInfoApi~addOrUpdateMenuItemOptionSetItemNutritionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuNutritionInfoHeader}
     */
    addOrUpdateMenuItemOptionSetItemNutritionInfo(menuId, publicId, addOrUpdateModel, callback) {
      let postBody = addOrUpdateModel;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addOrUpdateMenuItemOptionSetItemNutritionInfo");
      }
      // verify the required parameter 'publicId' is set
      if (publicId === undefined || publicId === null) {
        throw new Error("Missing the required parameter 'publicId' when calling addOrUpdateMenuItemOptionSetItemNutritionInfo");
      }
      // verify the required parameter 'addOrUpdateModel' is set
      if (addOrUpdateModel === undefined || addOrUpdateModel === null) {
        throw new Error("Missing the required parameter 'addOrUpdateModel' when calling addOrUpdateMenuItemOptionSetItemNutritionInfo");
      }

      let pathParams = {
        'menuId': menuId,
        'publicId': publicId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiResultMenuNutritionInfoHeader;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/menuItemOption/{publicId}/nutrition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrUpdateMenuNutritionInfoByMenuId operation.
     * @callback module:api/MenusNutritionInfoApi~addOrUpdateMenuNutritionInfoByMenuIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuNutritionInfoHeader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update menu nutrition by identifier
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenusNutritionInfoApi~addOrUpdateMenuNutritionInfoByMenuIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuNutritionInfoHeader}
     */
    addOrUpdateMenuNutritionInfoByMenuId(menuId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addOrUpdateMenuNutritionInfoByMenuId");
      }

      let pathParams = {
        'menuId': menuId
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
      let returnType = RestApiResultMenuNutritionInfoHeader;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/nutrition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuNutritionInfoByMenuId operation.
     * @callback module:api/MenusNutritionInfoApi~deleteMenuNutritionInfoByMenuIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu nutrition information by menuId
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenusNutritionInfoApi~deleteMenuNutritionInfoByMenuIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deleteMenuNutritionInfoByMenuId(menuId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuNutritionInfoByMenuId");
      }

      let pathParams = {
        'menuId': menuId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/nutrition', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllergens operation.
     * @callback module:api/MenusNutritionInfoApi~getAllergensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultAllergen} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get allergens
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageId 
     * @param {module:api/MenusNutritionInfoApi~getAllergensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultAllergen}
     */
    getAllergens(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAllergens");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'languageId': opts['languageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Message', 'ErrorCode', 'StackTrace'];
      let returnType = RestApiArrayResultAllergen;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/menus/nutrition/allergens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuNutritionInfoByMenuId operation.
     * @callback module:api/MenusNutritionInfoApi~getMenuNutritionInfoByMenuIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultNutritionInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu nutrition by menuId
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenusNutritionInfoApi~getMenuNutritionInfoByMenuIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultNutritionInfo}
     */
    getMenuNutritionInfoByMenuId(menuId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuNutritionInfoByMenuId");
      }

      let pathParams = {
        'menuId': menuId
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
      let returnType = RestApiResultNutritionInfo;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/nutrition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
