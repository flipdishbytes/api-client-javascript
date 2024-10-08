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
import BusinessHoursPeriodBase from '../model/BusinessHoursPeriodBase';
import MenuObjectDisplayOrders from '../model/MenuObjectDisplayOrders';
import MenuSectionAvailabilityBase from '../model/MenuSectionAvailabilityBase';
import MenuSectionBase from '../model/MenuSectionBase';
import RestApiArrayResultMenuSection from '../model/RestApiArrayResultMenuSection';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiResultBusinessHoursPeriod from '../model/RestApiResultBusinessHoursPeriod';
import RestApiResultMenuSection from '../model/RestApiResultMenuSection';
import RestApiResultMenuSectionAvailability from '../model/RestApiResultMenuSectionAvailability';
import RestApiStringResult from '../model/RestApiStringResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* MenuSections service.
* @module api/MenuSectionsApi
* @version 1.0.0
*/
export default class MenuSectionsApi {

    /**
    * Constructs a new MenuSectionsApi. 
    * @alias module:api/MenuSectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cloneMenuSection operation.
     * @callback module:api/MenuSectionsApi~cloneMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~cloneMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuSection}
     */
    cloneMenuSection(menuId, menuSectionId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling cloneMenuSection");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling cloneMenuSection");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
      let returnType = RestApiResultMenuSection;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuAvailabilityForDay operation.
     * @callback module:api/MenuSectionsApi~createMenuAvailabilityForDayCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set/update menu section availability hours.
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/String} dayOfWeek Day of the  week
     * @param {module:model/BusinessHoursPeriodBase} businessHoursPeriod Menu section active hours, note: DayOfWeek property will be overriden by the path parameter.
     * @param {module:api/MenuSectionsApi~createMenuAvailabilityForDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createMenuAvailabilityForDay(menuId, menuSectionId, dayOfWeek, businessHoursPeriod, callback) {
      let postBody = businessHoursPeriod;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuAvailabilityForDay");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling createMenuAvailabilityForDay");
      }
      // verify the required parameter 'dayOfWeek' is set
      if (dayOfWeek === undefined || dayOfWeek === null) {
        throw new Error("Missing the required parameter 'dayOfWeek' when calling createMenuAvailabilityForDay");
      }
      // verify the required parameter 'businessHoursPeriod' is set
      if (businessHoursPeriod === undefined || businessHoursPeriod === null) {
        throw new Error("Missing the required parameter 'businessHoursPeriod' when calling createMenuAvailabilityForDay");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId,
        'dayOfWeek': dayOfWeek
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability/times/{dayOfWeek}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuSection operation.
     * @callback module:api/MenuSectionsApi~createMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create menu section
     * @param {Number} menuId Menu identifier
     * @param {module:model/MenuSectionBase} menuSection Menu section
     * @param {module:api/MenuSectionsApi~createMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createMenuSection(menuId, menuSection, callback) {
      let postBody = menuSection;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuSection");
      }
      // verify the required parameter 'menuSection' is set
      if (menuSection === undefined || menuSection === null) {
        throw new Error("Missing the required parameter 'menuSection' when calling createMenuSection");
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
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createMenuSectionAvailability operation.
     * @callback module:api/MenuSectionsApi~createMenuSectionAvailabilityCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create menu availability type
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuSectionAvailabilityBase} menuSectionAvailability DisplayAlways, DisplayBasedOnTimes, DisplayAlwaysStartCollapsed, DisplayAlwaysStartCollapsedBasedOnTimes
     * @param {module:api/MenuSectionsApi~createMenuSectionAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createMenuSectionAvailability(menuId, menuSectionId, menuSectionAvailability, callback) {
      let postBody = menuSectionAvailability;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling createMenuSectionAvailability");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling createMenuSectionAvailability");
      }
      // verify the required parameter 'menuSectionAvailability' is set
      if (menuSectionAvailability === undefined || menuSectionAvailability === null) {
        throw new Error("Missing the required parameter 'menuSectionAvailability' when calling createMenuSectionAvailability");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/availability', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuSection operation.
     * @callback module:api/MenuSectionsApi~deleteMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~deleteMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteMenuSection(menuId, menuSectionId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuSection");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling deleteMenuSection");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMenuSectionImage operation.
     * @callback module:api/MenuSectionsApi~deleteMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete menu section image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~deleteMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteMenuSectionImage(menuId, menuSectionId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling deleteMenuSectionImage");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling deleteMenuSectionImage");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/image', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuSectionById operation.
     * @callback module:api/MenuSectionsApi~getMenuSectionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu section by identifier
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:api/MenuSectionsApi~getMenuSectionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultMenuSection}
     */
    getMenuSectionById(menuId, menuSectionId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuSectionById");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling getMenuSectionById");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
      let returnType = RestApiResultMenuSection;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuSections operation.
     * @callback module:api/MenuSectionsApi~getMenuSectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiArrayResultMenuSection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get menu sections
     * @param {Number} menuId Menu identifier
     * @param {module:api/MenuSectionsApi~getMenuSectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiArrayResultMenuSection}
     */
    getMenuSections(menuId, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuSections");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data'];
      let returnType = RestApiArrayResultMenuSection;
      return this.apiClient.callApi(
        '/api/v1.0/menus/{menuId}/sections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the menuSectionsSetItemDisplayOrders operation.
     * @callback module:api/MenuSectionsApi~menuSectionsSetItemDisplayOrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Re-arrange Items within a Section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuObjectDisplayOrders} displayOrders Item Ids and their new display order
     * @param {module:api/MenuSectionsApi~menuSectionsSetItemDisplayOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    menuSectionsSetItemDisplayOrders(menuId, menuSectionId, displayOrders, callback) {
      let postBody = displayOrders;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling menuSectionsSetItemDisplayOrders");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling menuSectionsSetItemDisplayOrders");
      }
      // verify the required parameter 'displayOrders' is set
      if (displayOrders === undefined || displayOrders === null) {
        throw new Error("Missing the required parameter 'displayOrders' when calling menuSectionsSetItemDisplayOrders");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
      };
      let queryParams = {
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/sectionitemdisplayorders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMenuSection operation.
     * @callback module:api/MenuSectionsApi~updateMenuSectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update menu section
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {module:model/MenuSectionBase} menuSection Menu section changes (delta)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.undoAfter An optional time period, in hours, after which the hide-section operation will be undone.
     * @param {module:api/MenuSectionsApi~updateMenuSectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateMenuSection(menuId, menuSectionId, menuSection, opts, callback) {
      opts = opts || {};
      let postBody = menuSection;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling updateMenuSection");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling updateMenuSection");
      }
      // verify the required parameter 'menuSection' is set
      if (menuSection === undefined || menuSection === null) {
        throw new Error("Missing the required parameter 'menuSection' when calling updateMenuSection");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMenuSectionImage operation.
     * @callback module:api/MenuSectionsApi~uploadMenuSectionImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiStringResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload menu section image
     * @param {Number} menuId Menu identifier
     * @param {Number} menuSectionId Menu section identifier
     * @param {File} Image Menu section image
     * @param {module:api/MenuSectionsApi~uploadMenuSectionImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiStringResult}
     */
    uploadMenuSectionImage(menuId, menuSectionId, Image, callback) {
      let postBody = null;
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling uploadMenuSectionImage");
      }
      // verify the required parameter 'menuSectionId' is set
      if (menuSectionId === undefined || menuSectionId === null) {
        throw new Error("Missing the required parameter 'menuSectionId' when calling uploadMenuSectionImage");
      }
      // verify the required parameter 'Image' is set
      if (Image === undefined || Image === null) {
        throw new Error("Missing the required parameter 'Image' when calling uploadMenuSectionImage");
      }

      let pathParams = {
        'menuId': menuId,
        'menuSectionId': menuSectionId
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
        '/api/v1.0/menus/{menuId}/sections/{menuSectionId}/image', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
