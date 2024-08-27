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
import EventSearchResult from '../model/EventSearchResult';
import RestApiErrorResult from '../model/RestApiErrorResult';
import RestApiEventSearchPaginationResult from '../model/RestApiEventSearchPaginationResult';
import RestApiForbiddenResult from '../model/RestApiForbiddenResult';
import RestApiUnauthorizedResult from '../model/RestApiUnauthorizedResult';

/**
* Events service.
* @module api/EventsApi
* @version 1.0.0
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCustomerEvents operation.
     * @callback module:api/EventsApi~getCustomerEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getCustomerEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getCustomerEvents(appId, customerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCustomerEvents");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerEvents");
      }

      let pathParams = {
        'appId': appId,
        'customerId': customerId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/customer/{customerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/EventsApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.whiteLabelId 
     * @param {Number} opts.customerId 
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getEvents(appId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getEvents");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'whiteLabelId': opts['whiteLabelId'],
        'customerId': opts['customerId'],
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventsById operation.
     * @callback module:api/EventsApi~getEventsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} eventId 
     * @param {String} appId 
     * @param {module:api/EventsApi~getEventsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventSearchResult}
     */
    getEventsById(eventId, appId, callback) {
      let postBody = null;
      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling getEventsById");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getEventsById");
      }

      let pathParams = {
        'eventId': eventId,
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
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'AnalyticsClientEvent', 'OrderAcceptedEvent', 'OrderCustomerTrackingCreatedEvent', 'OrderDeliveryTrackingStatusUpdatedEvent', 'OrderBatchPublishedEvent', 'OrderCreatedEvent', 'OrderRatingUpdatedEvent', 'OrderRefundedEvent', 'OrderRejectedEvent', 'OrderTipUpdatedEvent', 'StoreCreatedEvent', 'StoreDeletedEvent', 'StoreAddressUpdatedEvent', 'StoreKioskSettingUpdatedEvent', 'DeliveryZoneCreatedEvent', 'DeliveryZoneUpdatedEvent', 'DeliveryZoneDeletedEvent', 'StoreOpeningHoursUpdatedEvent', 'StoreMenuAssignedEvent', 'StoreBusinessHoursOverrideCreatedEvent', 'StoreBusinessHoursOverrideDeletedEvent', 'StoreArchivedEvent', 'StoreUnarchivedEvent', 'StorePublishedEvent', 'StoreUnpublishedEvent', 'StoreUpdatedEvent', 'StorePreOrderConfigUpdatedEvent', 'StoreLogoCreatedEvent', 'StoreLogoUpdatedEvent', 'StoreLogoDeletedEvent', 'MenuCreatedEvent', 'MenuAsyncCreationCompletedEvent', 'MenuUpdatedEvent', 'MenuUploadedEvent', 'MenuBulkEditEvent', 'MenuCheckpointCreatedEvent', 'CustomerCreatedEvent', 'CustomerUpdatedEvent', 'CustomerConsentUpdatedEvent', 'WebhookSubscriptionCreatedEvent', 'WebhookSubscriptionUpdatedEvent', 'WebhookSubscriptionDeletedEvent', 'PrinterTurnedOnEvent', 'PrinterTurnedOffEvent', 'PrinterAssignedToStoreEvent', 'PrinterUnassignedFromStoreEvent', 'PhoneCallStartedEvent', 'PhoneCallEndedEvent', 'TelephonyConfigUpdatedEvent', 'LoyaltyCampaignCreatedEvent', 'LoyaltyCampaignDeletedEvent', 'LoyaltyCampaignUpdatedEvent', 'RetentionCampaignCreatedEvent', 'RetentionCampaignDeletedEvent', 'RetentionCampaignUpdatedEvent', 'SmsReceivedEvent', 'UserLoginEvent', 'UserCreatedEvent', 'UserUpdatedEvent', 'UserDeletedEvent', 'UserCreatedPasswordEvent', 'UserAnsweredSignupQuestionsEvent', 'TeammateInviteSentEvent', 'TeammateInviteAcceptedEvent', 'TeammateUpdatedEvent', 'TeammateDeletedEvent', 'BankAccountCreatedEvent', 'BankAccountUpdatedEvent', 'BankAccountDeletedEvent', 'BankAccountAssignedEvent', 'HydraAssignedEvent', 'HydraRequestResetEvent', 'HydraSettingChangedEvent', 'HydraUnAssignedEvent', 'KioskBluetoothPairingModeEvent', 'KioskBluetoothUnpairingModeEvent', 'KioskBluetoothTerminalUnpairedEvent', 'KioskTerminalActionStateChangedEvent', 'KioskBluetoothTerminalUpdatedEvent', 'KioskBluetoothTerminalInitiateUpdateCheckEvent', 'KioskBluetoothInstallUpdateInitiateEvent', 'KioskBluetoothTerminalCancelUpdateEvent', 'KioskBluetoothTerminalFirmwareVersionStatusEvent', 'KioskBluetoothTerminalInstallationStatusEvent', 'PushNotificationScheduledEvent', 'PushNotificationSentEvent', 'PushNotificationDeletedEvent', 'DnsVerifiedEvent', 'CertificateCreatedEvent', 'CertificateRenewedEvent', 'WebsiteVanityUrlUpdatedEvent', 'WebsiteUpdatedEvent', 'OrderCapacityUpdatedEvent', 'ExternalStoreEvent', 'AppStoreConfigCreatedEvent', 'AppStoreConfigUpdatedEvent', 'AppStoreConfigDeletedEvent', 'AppStoreSubscriptionChangeJobUpdatedEvent', 'CatalogItemCreatedEvent', 'CatalogItemUpdatedEvent', 'CatalogItemArchivedEvent', 'CatalogGroupCreatedEvent', 'CatalogGroupUpdatedEvent', 'CatalogGroupArchivedEvent', 'StoreTipUpdatedEvent', 'LocationAreaCreatedEvent', 'LocationAreaUpdatedEvent', 'LocationCreatedEvent', 'LocationDeletedEvent', 'StoreServiceChargeUpdatedEvent', 'MobileAppsSubmissionStatusUpdatedEvent', 'MobileAppsSubmissionUpdatedEvent', 'StoreFeeConfigUpdatedEvent'];
      let returnType = EventSearchResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/{eventId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMenuEvents operation.
     * @callback module:api/EventsApi~getMenuEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} menuId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId2 Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getMenuEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getMenuEvents(appId, menuId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getMenuEvents");
      }
      // verify the required parameter 'menuId' is set
      if (menuId === undefined || menuId === null) {
        throw new Error("Missing the required parameter 'menuId' when calling getMenuEvents");
      }

      let pathParams = {
        'appId': appId,
        'menuId': menuId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId2'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/menu/{menuId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderEvents operation.
     * @callback module:api/EventsApi~getOrderEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId2 Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getOrderEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getOrderEvents(appId, orderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOrderEvents");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderEvents");
      }

      let pathParams = {
        'appId': appId,
        'orderId': orderId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId2'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/order/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderEventsByCustomer operation.
     * @callback module:api/EventsApi~getOrderEventsByCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getOrderEventsByCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getOrderEventsByCustomer(appId, customerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getOrderEventsByCustomer");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getOrderEventsByCustomer");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'customerId': customerId,
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/order', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoreEvents operation.
     * @callback module:api/EventsApi~getStoreEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} storeId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId2 Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getStoreEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getStoreEvents(appId, storeId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getStoreEvents");
      }
      // verify the required parameter 'storeId' is set
      if (storeId === undefined || storeId === null) {
        throw new Error("Missing the required parameter 'storeId' when calling getStoreEvents");
      }

      let pathParams = {
        'appId': appId,
        'storeId': storeId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId2'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/store/{storeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserEvents operation.
     * @callback module:api/EventsApi~getUserEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId2 Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getUserEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getUserEvents(appId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getUserEvents");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserEvents");
      }

      let pathParams = {
        'appId': appId,
        'userId': userId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId2'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/user/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhiteLabelEvents operation.
     * @callback module:api/EventsApi~getWhiteLabelEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestApiEventSearchPaginationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} appId 
     * @param {Number} whitelabelId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum elements to return
     * @param {Number} opts.page The index of the page to return, starting by 1
     * @param {Date} opts.start Start date
     * @param {Date} opts.end End date
     * @param {Number} opts.orderId Events that have Order Id
     * @param {Number} opts.storeId Events that have Store Id
     * @param {Array.<Number>} opts.storeIdList Events that have Store Id List
     * @param {Number} opts.storeGroupId Events that have Store Group Id
     * @param {Number} opts.userId Events that have User Id
     * @param {Number} opts.menuId Events that have Menu Id
     * @param {Number} opts.campaignId Events that have Campaign Id
     * @param {String} opts.userEmail Events that have User Email
     * @param {String} opts.userName Events that have User Name
     * @param {String} opts.voucherCode Events that have voucher code
     * @param {Array.<String>} opts.eventType Events that have event type\\s
     * @param {String} opts.flipdishEventId Unique Identifier of Event, if this is specified, all other criteria are ignored.
     * @param {module:api/EventsApi~getWhiteLabelEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestApiEventSearchPaginationResult}
     */
    getWhiteLabelEvents(appId, whitelabelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWhiteLabelEvents");
      }
      // verify the required parameter 'whitelabelId' is set
      if (whitelabelId === undefined || whitelabelId === null) {
        throw new Error("Missing the required parameter 'whitelabelId' when calling getWhiteLabelEvents");
      }

      let pathParams = {
        'appId': appId,
        'whitelabelId': whitelabelId
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end'],
        'orderId': opts['orderId'],
        'storeId': opts['storeId'],
        'storeIdList': this.apiClient.buildCollectionParam(opts['storeIdList'], 'multi'),
        'storeGroupId': opts['storeGroupId'],
        'userId': opts['userId'],
        'menuId': opts['menuId'],
        'campaignId': opts['campaignId'],
        'userEmail': opts['userEmail'],
        'userName': opts['userName'],
        'voucherCode': opts['voucherCode'],
        'eventType': this.apiClient.buildCollectionParam(opts['eventType'], 'multi'),
        'flipdishEventId': opts['flipdishEventId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'Data', 'Page', 'Limit', 'TotalRecordCount'];
      let returnType = RestApiEventSearchPaginationResult;
      return this.apiClient.callApi(
        '/api/v1.0/{appId}/events/whitelabel/{whitelabelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}