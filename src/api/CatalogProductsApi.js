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
import CreateProduct from '../model/CreateProduct';
import Product from '../model/Product';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiPaginationResultProduct from '../model/RestApiPaginationResultProduct';
import RestApiResultProduct from '../model/RestApiResultProduct';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';
import UpdateProduct from '../model/UpdateProduct';

/**
* CatalogProducts service.
* @module api/CatalogProductsApi
* @version 1.0.0
*/
export default class CatalogProductsApi {

    /**
    * Constructs a new CatalogProductsApi. 
    * @alias module:api/CatalogProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the archiveProduct operation.
     * @callback module:api/CatalogProductsApi~archiveProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Archive Product
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {String} catalogItemId 
     * @param {module:api/CatalogProductsApi~archiveProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    archiveProduct(appId, catalogItemId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling archiveProduct");
      }
      // verify the required parameter 'catalogItemId' is set
      if (catalogItemId === undefined || catalogItemId === null) {
        throw new Error("Missing the required parameter 'catalogItemId' when calling archiveProduct");
      }

      let pathParams = {
        'appId': appId,
        'catalogItemId': catalogItemId
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
        '/api/v1.0/{appId}/catalog/products/{catalogItemId}/archive', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:api/CatalogProductsApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiResultProduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Product
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {module:model/CreateProduct} createProduct 
     * @param {module:api/CatalogProductsApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiResultProduct}
     */
    createProduct(appId, createProduct, callback) {
      let postBody = createProduct;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createProduct");
      }
      // verify the required parameter 'createProduct' is set
      if (createProduct === undefined || createProduct === null) {
        throw new Error("Missing the required parameter 'createProduct' when calling createProduct");
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'CatalogItemId', 'IsArchived', 'Groups', 'ProductType', 'Sku', 'Name', 'Description', 'Price', 'ImageFileName', 'Alcohol'];
      let returnType = RestApiResultProduct;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/catalog/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the duplicateProduct operation.
     * @callback module:api/CatalogProductsApi~duplicateProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate Product
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {String} catalogItemId 
     * @param {module:api/CatalogProductsApi~duplicateProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    duplicateProduct(appId, catalogItemId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling duplicateProduct");
      }
      // verify the required parameter 'catalogItemId' is set
      if (catalogItemId === undefined || catalogItemId === null) {
        throw new Error("Missing the required parameter 'catalogItemId' when calling duplicateProduct");
      }

      let pathParams = {
        'appId': appId,
        'catalogItemId': catalogItemId
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
        '/api/v1.0/{appId}/catalog/products/{catalogItemId}/duplicate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductById operation.
     * @callback module:api/CatalogProductsApi~getProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Product by Id
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {String} catalogItemId 
     * @param {module:api/CatalogProductsApi~getProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    getProductById(appId, catalogItemId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getProductById");
      }
      // verify the required parameter 'catalogItemId' is set
      if (catalogItemId === undefined || catalogItemId === null) {
        throw new Error("Missing the required parameter 'catalogItemId' when calling getProductById");
      }

      let pathParams = {
        'appId': appId,
        'catalogItemId': catalogItemId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'CatalogItemId', 'IsArchived', 'Groups', 'ProductType', 'Sku', 'Name', 'Description', 'Price', 'ImageFileName', 'Alcohol'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/catalog/products/{catalogItemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:api/CatalogProductsApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiPaginationResultProduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get paginated products by app name id filtered by types
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {Array.<module:model/String>} productTypes 
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchTerm 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/CatalogProductsApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiPaginationResultProduct}
     */
    getProducts(appId, productTypes, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getProducts");
      }
      // verify the required parameter 'productTypes' is set
      if (productTypes === undefined || productTypes === null) {
        throw new Error("Missing the required parameter 'productTypes' when calling getProducts");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'productTypes': this.apiClient.buildCollectionParam(productTypes, 'multi'),
        'searchTerm': opts['searchTerm'],
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
      let returnType = RestApiPaginationResultProduct;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/catalog/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/CatalogProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Product
     * [BETA - this endpoint is under development, do not use it in your production system]
     * @param {String} appId 
     * @param {String} catalogItemId 
     * @param {module:model/UpdateProduct} updateProduct 
     * @param {module:api/CatalogProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateProduct(appId, catalogItemId, updateProduct, callback) {
      let postBody = updateProduct;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateProduct");
      }
      // verify the required parameter 'catalogItemId' is set
      if (catalogItemId === undefined || catalogItemId === null) {
        throw new Error("Missing the required parameter 'catalogItemId' when calling updateProduct");
      }
      // verify the required parameter 'updateProduct' is set
      if (updateProduct === undefined || updateProduct === null) {
        throw new Error("Missing the required parameter 'updateProduct' when calling updateProduct");
      }

      let pathParams = {
        'appId': appId,
        'catalogItemId': catalogItemId
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
        '/api/v1.0/{appId}/catalog/products/{catalogItemId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}