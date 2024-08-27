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
import MenuItemOptionSetItemBase from '../model/MenuItemOptionSetItemBase';
import RestApiArrayResultMenuItemOptionSetItem from '../model/RestApiArrayResultMenuItemOptionSetItem';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultMenuItemOptionSetItem from '../model/RestApiResultMenuItemOptionSetItem';
import RestApiStringResult from '../model/RestApiStringResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* MenuOptionSetItems service.
* @module api/MenuOptionSetItemsApi
* @version 1.0.0
*/
export default class MenuOptionSetItemsApi {

    /**
    * Constructs a new MenuOptionSetItemsApi. 
    * @alias module:api/MenuOptionSetItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addMenuItemOptionSetItem operation.
     * @callback module:api/MenuOptionSetItemsApi~addMenuItemOptionSetItemCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create menu item option set item
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {module:model/MenuItemOptionSetItemBase} menuItemOptionSetItem Option set item
     * @param {module:api/MenuOptionSetItemsApi~addMenuItemOptionSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    addMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItem, callback) {
      let postBody = menuItemOptionSetItem;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling addMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling addMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling addMenuItemOptionSetItem");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling addMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuItemOptionSetItem' is set
      if (menuItemOptionSetItem === undefined || menuItemOptionSetItem === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItem' when calling addMenuItemOptionSetItem");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOptionSetItemImage operation.
     * @callback module:api/MenuOptionSetItemsApi~deleteOptionSetItemImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu item option set item image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {module:api/MenuOptionSetItemsApi~deleteOptionSetItemImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteOptionSetItemImage");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling deleteOptionSetItemImage");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling deleteOptionSetItemImage");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling deleteOptionSetItemImage");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling deleteOptionSetItemImage");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuItemOptionSetItemById operation.
     * @callback module:api/MenuOptionSetItemsApi~getMenuItemOptionSetItemByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuItemOptionSetItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu item option set item by identifier
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {module:api/MenuOptionSetItemsApi~getMenuItemOptionSetItemByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuItemOptionSetItem}
     */
    getMenuItemOptionSetItemById(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuItemOptionSetItemById");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling getMenuItemOptionSetItemById");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling getMenuItemOptionSetItemById");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling getMenuItemOptionSetItemById");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling getMenuItemOptionSetItemById");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId
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
      let returnType = RestApiResultMenuItemOptionSetItem;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuItemOptionSetItems operation.
     * @callback module:api/MenuOptionSetItemsApi~getMenuItemOptionSetItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultMenuItemOptionSetItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu item option set items
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {module:api/MenuOptionSetItemsApi~getMenuItemOptionSetItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultMenuItemOptionSetItem}
     */
    getMenuItemOptionSetItems(menuId, menuSectionId, menuSectionItemId, optionSetId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuItemOptionSetItems");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling getMenuItemOptionSetItems");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling getMenuItemOptionSetItems");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling getMenuItemOptionSetItems");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId
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
      let returnType = RestApiArrayResultMenuItemOptionSetItem;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeMenuItemOptionSetItem operation.
     * @callback module:api/MenuOptionSetItemsApi~removeMenuItemOptionSetItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu item option set item
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {module:api/MenuOptionSetItemsApi~removeMenuItemOptionSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling removeMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling removeMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling removeMenuItemOptionSetItem");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling removeMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling removeMenuItemOptionSetItem");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setOptionSetItemTax operation.
     * @callback module:api/MenuOptionSetItemsApi~setOptionSetItemTaxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Tax Rate on OptionSetItem
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId 
     * @param {Number} menuSectionItemId 
     * @param {Number} optionSetId 
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {Number} taxRateId Tax Rate to use
     * @param {module:api/MenuOptionSetItemsApi~setOptionSetItemTaxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    setOptionSetItemTax(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, taxRateId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling setOptionSetItemTax");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling setOptionSetItemTax");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling setOptionSetItemTax");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling setOptionSetItemTax");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling setOptionSetItemTax");
      }
      // verify the required parameter 'taxRateId' is set
      if (taxRateId === undefined || taxRateId === null) {
        throw new Error("Missing the required parameter 'taxRateId' when calling setOptionSetItemTax");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId,
        'taxRateId': taxRateId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/taxrate/{taxRateId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMenuItemOptionSetItem operation.
     * @callback module:api/MenuOptionSetItemsApi~updateMenuItemOptionSetItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update menu item option set item
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {module:model/MenuItemOptionSetItemBase} menuItemOptionSetItem Option set item (delta)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.undoAfter An optional time period, in hours, after which the hide-section operation will be undone.
     * @param {module:api/MenuOptionSetItemsApi~updateMenuItemOptionSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateMenuItemOptionSetItem(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, menuItemOptionSetItem, opts, callback) {
      opts = opts || {};
      let postBody = menuItemOptionSetItem;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling updateMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling updateMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling updateMenuItemOptionSetItem");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling updateMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling updateMenuItemOptionSetItem");
      }
      // verify the required parameter 'menuItemOptionSetItem' is set
      if (menuItemOptionSetItem === undefined || menuItemOptionSetItem === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItem' when calling updateMenuItemOptionSetItem");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId
      };
      let queryParams = {
        'undoAfter': opts['undoAfter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadOptionSetItemImage operation.
     * @callback module:api/MenuOptionSetItemsApi~uploadOptionSetItemImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload menu item option set item image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {Number} menuSectionItemId Menu section item identifier
     * @param {Number} optionSetId Option set identifier
     * @param {Number} menuItemOptionSetItemId Option set item identifier
     * @param {File} Image Option set item image
     * @param {module:api/MenuOptionSetItemsApi~uploadOptionSetItemImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    uploadOptionSetItemImage(menuId, menuSectionId, menuSectionItemId, optionSetId, menuItemOptionSetItemId, Image, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling uploadOptionSetItemImage");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling uploadOptionSetItemImage");
      }
      // verify the required parameter 'menuSectionItemId' is set
      if (menuSectionItemId === undefined || menuSectionItemId === null) {
        throw new Error("Missing the required parameter 'menuSectionItemId' when calling uploadOptionSetItemImage");
      }
      // verify the required parameter 'optionSetId' is set
      if (optionSetId === undefined || optionSetId === null) {
        throw new Error("Missing the required parameter 'optionSetId' when calling uploadOptionSetItemImage");
      }
      // verify the required parameter 'menuItemOptionSetItemId' is set
      if (menuItemOptionSetItemId === undefined || menuItemOptionSetItemId === null) {
        throw new Error("Missing the required parameter 'menuItemOptionSetItemId' when calling uploadOptionSetItemImage");
      }
      // verify the required parameter 'Image' is set
      if (Image === undefined || Image === null) {
        throw new Error("Missing the required parameter 'Image' when calling uploadOptionSetItemImage");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'menuSectionItemId': menuSectionItemId,
        'optionSetId': optionSetId,
        'menuItemOptionSetItemId': menuItemOptionSetItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'Image': Image
      };

      let authNames = ['oauth2'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiStringResult;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitems/{menuSectionItemId}/optionsets/{optionSetId}/optionsetitems/{menuItemOptionSetItemId}/image', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}