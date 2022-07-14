/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Channel', 'model/Coordinates', 'model/CustomerSummary', 'model/DeliveryLocation', 'model/FeeSummary', 'model/MaskedPhoneNumber', 'model/OrderDropOffLocation', 'model/OrderFulfillmentStatusBase', 'model/OrderItem', 'model/OrderVoucherSummary', 'model/StoreSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channel'), require('./Coordinates'), require('./CustomerSummary'), require('./DeliveryLocation'), require('./FeeSummary'), require('./MaskedPhoneNumber'), require('./OrderDropOffLocation'), require('./OrderFulfillmentStatusBase'), require('./OrderItem'), require('./OrderVoucherSummary'), require('./StoreSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Flipdish) {
      root.Flipdish = {};
    }
    root.Flipdish.Order = factory(root.Flipdish.ApiClient, root.Flipdish.Channel, root.Flipdish.Coordinates, root.Flipdish.CustomerSummary, root.Flipdish.DeliveryLocation, root.Flipdish.FeeSummary, root.Flipdish.MaskedPhoneNumber, root.Flipdish.OrderDropOffLocation, root.Flipdish.OrderFulfillmentStatusBase, root.Flipdish.OrderItem, root.Flipdish.OrderVoucherSummary, root.Flipdish.StoreSummary);
  }
}(this, function(ApiClient, Channel, Coordinates, CustomerSummary, DeliveryLocation, FeeSummary, MaskedPhoneNumber, OrderDropOffLocation, OrderFulfillmentStatusBase, OrderItem, OrderVoucherSummary, StoreSummary) {
  'use strict';

  /**
   * The Order model module.
   * @module model/Order
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * Order
   * @alias module:model/Order
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Store'))
        obj.Store = StoreSummary.constructFromObject(data['Store']);
      if (data.hasOwnProperty('Customer'))
        obj.Customer = CustomerSummary.constructFromObject(data['Customer']);
      if (data.hasOwnProperty('Voucher'))
        obj.Voucher = OrderVoucherSummary.constructFromObject(data['Voucher']);
      if (data.hasOwnProperty('Fees'))
        obj.Fees = FeeSummary.constructFromObject(data['Fees']);
      if (data.hasOwnProperty('OrderItems'))
        obj.OrderItems = ApiClient.convertToType(data['OrderItems'], [OrderItem]);
      if (data.hasOwnProperty('DeliveryLocation'))
        obj.DeliveryLocation = DeliveryLocation.constructFromObject(data['DeliveryLocation']);
      if (data.hasOwnProperty('CustomerLocation'))
        obj.CustomerLocation = Coordinates.constructFromObject(data['CustomerLocation']);
      if (data.hasOwnProperty('MaskedPhoneNumber'))
        obj.MaskedPhoneNumber = MaskedPhoneNumber.constructFromObject(data['MaskedPhoneNumber']);
      if (data.hasOwnProperty('DropOffLocationId'))
        obj.DropOffLocationId = ApiClient.convertToType(data['DropOffLocationId'], 'Number');
      if (data.hasOwnProperty('DropOffLocation'))
        obj.DropOffLocation = ApiClient.convertToType(data['DropOffLocation'], 'String');
      if (data.hasOwnProperty('AcceptedFor'))
        obj.AcceptedFor = ApiClient.convertToType(data['AcceptedFor'], 'Date');
      if (data.hasOwnProperty('InFraudZone'))
        obj.InFraudZone = ApiClient.convertToType(data['InFraudZone'], 'Boolean');
      if (data.hasOwnProperty('UnusualHighValueOrder'))
        obj.UnusualHighValueOrder = ApiClient.convertToType(data['UnusualHighValueOrder'], 'Boolean');
      if (data.hasOwnProperty('RejectedByUserId'))
        obj.RejectedByUserId = ApiClient.convertToType(data['RejectedByUserId'], 'Number');
      if (data.hasOwnProperty('ChannelOrderId'))
        obj.ChannelOrderId = ApiClient.convertToType(data['ChannelOrderId'], 'String');
      if (data.hasOwnProperty('ChannelOrderDisplayId'))
        obj.ChannelOrderDisplayId = ApiClient.convertToType(data['ChannelOrderDisplayId'], 'String');
      if (data.hasOwnProperty('Channel'))
        obj.Channel = Channel.constructFromObject(data['Channel']);
      if (data.hasOwnProperty('ReceiptCode'))
        obj.ReceiptCode = ApiClient.convertToType(data['ReceiptCode'], 'String');
      if (data.hasOwnProperty('OrderDropOffLocation'))
        obj.OrderDropOffLocation = OrderDropOffLocation.constructFromObject(data['OrderDropOffLocation']);
      if (data.hasOwnProperty('FulfillmentStatus'))
        obj.FulfillmentStatus = OrderFulfillmentStatusBase.constructFromObject(data['FulfillmentStatus']);
      if (data.hasOwnProperty('OrderId'))
        obj.OrderId = ApiClient.convertToType(data['OrderId'], 'Number');
      if (data.hasOwnProperty('LocalOrderId'))
        obj.LocalOrderId = ApiClient.convertToType(data['LocalOrderId'], 'String');
      if (data.hasOwnProperty('DeliveryType'))
        obj.DeliveryType = ApiClient.convertToType(data['DeliveryType'], 'String');
      if (data.hasOwnProperty('PickupLocationType'))
        obj.PickupLocationType = ApiClient.convertToType(data['PickupLocationType'], 'String');
      if (data.hasOwnProperty('TableServiceCatagory'))
        obj.TableServiceCatagory = ApiClient.convertToType(data['TableServiceCatagory'], 'String');
      if (data.hasOwnProperty('TipAmount'))
        obj.TipAmount = ApiClient.convertToType(data['TipAmount'], 'Number');
      if (data.hasOwnProperty('DeliveryAmount'))
        obj.DeliveryAmount = ApiClient.convertToType(data['DeliveryAmount'], 'Number');
      if (data.hasOwnProperty('OrderItemsAmount'))
        obj.OrderItemsAmount = ApiClient.convertToType(data['OrderItemsAmount'], 'Number');
      if (data.hasOwnProperty('ServiceChargeAmount'))
        obj.ServiceChargeAmount = ApiClient.convertToType(data['ServiceChargeAmount'], 'Number');
      if (data.hasOwnProperty('ServiceChargePercentage'))
        obj.ServiceChargePercentage = ApiClient.convertToType(data['ServiceChargePercentage'], 'Number');
      if (data.hasOwnProperty('Amount'))
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      if (data.hasOwnProperty('ProcessingFee'))
        obj.ProcessingFee = ApiClient.convertToType(data['ProcessingFee'], 'Number');
      if (data.hasOwnProperty('PaymentAccountType'))
        obj.PaymentAccountType = ApiClient.convertToType(data['PaymentAccountType'], 'String');
      if (data.hasOwnProperty('PaymentAccountDescription'))
        obj.PaymentAccountDescription = ApiClient.convertToType(data['PaymentAccountDescription'], 'String');
      if (data.hasOwnProperty('OrderState'))
        obj.OrderState = ApiClient.convertToType(data['OrderState'], 'String');
      if (data.hasOwnProperty('IsPreOrder'))
        obj.IsPreOrder = ApiClient.convertToType(data['IsPreOrder'], 'Boolean');
      if (data.hasOwnProperty('PlacedTime'))
        obj.PlacedTime = ApiClient.convertToType(data['PlacedTime'], 'Date');
      if (data.hasOwnProperty('RequestedForTime'))
        obj.RequestedForTime = ApiClient.convertToType(data['RequestedForTime'], 'Date');
      if (data.hasOwnProperty('ChefNote'))
        obj.ChefNote = ApiClient.convertToType(data['ChefNote'], 'String');
      if (data.hasOwnProperty('AppType'))
        obj.AppType = ApiClient.convertToType(data['AppType'], 'String');
      if (data.hasOwnProperty('UserRating'))
        obj.UserRating = ApiClient.convertToType(data['UserRating'], 'Number');
      if (data.hasOwnProperty('PaymentStatus'))
        obj.PaymentStatus = ApiClient.convertToType(data['PaymentStatus'], 'String');
      if (data.hasOwnProperty('RejectionReason'))
        obj.RejectionReason = ApiClient.convertToType(data['RejectionReason'], 'String');
      if (data.hasOwnProperty('RefundedAmount'))
        obj.RefundedAmount = ApiClient.convertToType(data['RefundedAmount'], 'Number');
      if (data.hasOwnProperty('DeliveryTrackingStatus'))
        obj.DeliveryTrackingStatus = ApiClient.convertToType(data['DeliveryTrackingStatus'], 'String');
      if (data.hasOwnProperty('DriverId'))
        obj.DriverId = ApiClient.convertToType(data['DriverId'], 'Number');
      if (data.hasOwnProperty('TotalTax'))
        obj.TotalTax = ApiClient.convertToType(data['TotalTax'], 'Number');
      if (data.hasOwnProperty('OrderTrackingCode'))
        obj.OrderTrackingCode = ApiClient.convertToType(data['OrderTrackingCode'], 'String');
    }
    return obj;
  }

  /**
   * Store summary
   * @member {module:model/StoreSummary} Store
   */
  exports.prototype.Store = undefined;

  /**
   * Customer summary
   * @member {module:model/CustomerSummary} Customer
   */
  exports.prototype.Customer = undefined;

  /**
   * Voucher summary
   * @member {module:model/OrderVoucherSummary} Voucher
   */
  exports.prototype.Voucher = undefined;

  /**
   * Fee summary
   * @member {module:model/FeeSummary} Fees
   */
  exports.prototype.Fees = undefined;

  /**
   * Ordered items
   * @member {Array.<module:model/OrderItem>} OrderItems
   */
  exports.prototype.OrderItems = undefined;

  /**
   * Delivery location for delivery orders
   * @member {module:model/DeliveryLocation} DeliveryLocation
   */
  exports.prototype.DeliveryLocation = undefined;

  /**
   * Customer location
   * @member {module:model/Coordinates} CustomerLocation
   */
  exports.prototype.CustomerLocation = undefined;

  /**
   * Represents customers masked phone number
   * @member {module:model/MaskedPhoneNumber} MaskedPhoneNumber
   */
  exports.prototype.MaskedPhoneNumber = undefined;

  /**
   * Represents table service drop off location
   * @member {Number} DropOffLocationId
   */
  exports.prototype.DropOffLocationId = undefined;

  /**
   * Represents table service drop off location
   * @member {String} DropOffLocation
   */
  exports.prototype.DropOffLocation = undefined;

  /**
   * Time store has accepted the order for
   * @member {Date} AcceptedFor
   */
  exports.prototype.AcceptedFor = undefined;

  /**
   * Was order made within a fraud zone
   * @member {Boolean} InFraudZone
   */
  exports.prototype.InFraudZone = undefined;

  /**
   * Is order of unusually high value
   * @member {Boolean} UnusualHighValueOrder
   */
  exports.prototype.UnusualHighValueOrder = undefined;

  /**
   * Id of user who rejected order, if available
   * @member {Number} RejectedByUserId
   */
  exports.prototype.RejectedByUserId = undefined;

  /**
   * ChannelOrderId from external channel
   * @member {String} ChannelOrderId
   */
  exports.prototype.ChannelOrderId = undefined;

  /**
   * ChannelOrderDisplayId from external channel
   * @member {String} ChannelOrderDisplayId
   */
  exports.prototype.ChannelOrderDisplayId = undefined;

  /**
   * Channel where the Order comes from
   * @member {module:model/Channel} Channel
   */
  exports.prototype.Channel = undefined;

  /**
   * Generated receipt code for an order
   * @member {String} ReceiptCode
   */
  exports.prototype.ReceiptCode = undefined;

  /**
   * DropOffLocation selected for this order
   * @member {module:model/OrderDropOffLocation} OrderDropOffLocation
   */
  exports.prototype.OrderDropOffLocation = undefined;

  /**
   * [BETA - this is a new field in development] Fulfillment status for this order
   * @member {module:model/OrderFulfillmentStatusBase} FulfillmentStatus
   */
  exports.prototype.FulfillmentStatus = undefined;

  /**
   * Order identifier
   * @member {Number} OrderId
   */
  exports.prototype.OrderId = undefined;

  /**
   * Local order Id. This is used for displaying a \"shorter\" order ID for customers (eg. Kiosk orders)
   * @member {String} LocalOrderId
   */
  exports.prototype.LocalOrderId = undefined;

  /**
   * Delivery type
   * @member {module:model/Order.DeliveryTypeEnum} DeliveryType
   */
  exports.prototype.DeliveryType = undefined;

  /**
   * Pickup location type
   * @member {module:model/Order.PickupLocationTypeEnum} PickupLocationType
   */
  exports.prototype.PickupLocationType = undefined;

  /**
   * Pickup location type
   * @member {module:model/Order.TableServiceCatagoryEnum} TableServiceCatagory
   */
  exports.prototype.TableServiceCatagory = undefined;

  /**
   * Tip amount
   * @member {Number} TipAmount
   */
  exports.prototype.TipAmount = undefined;

  /**
   * Delivery amount
   * @member {Number} DeliveryAmount
   */
  exports.prototype.DeliveryAmount = undefined;

  /**
   * Ordered items amount
   * @member {Number} OrderItemsAmount
   */
  exports.prototype.OrderItemsAmount = undefined;

  /**
   * Service Charge Amount
   * @member {Number} ServiceChargeAmount
   */
  exports.prototype.ServiceChargeAmount = undefined;

  /**
   * Service Charge Percentage
   * @member {Number} ServiceChargePercentage
   */
  exports.prototype.ServiceChargePercentage = undefined;

  /**
   * This is the sum of the OrderItemsAmount, DeliveryAmount, TipAmount and Voucher.Amount (which is usually negative) and OnlineOrderingFee for cash orders.  It does not include the OnlineOrderingFee in the case of card orders as this fee is charged by Flipdish directly to the customer.
   * @member {Number} Amount
   */
  exports.prototype.Amount = undefined;

  /**
   * This contains the online ordering processing fee. For card payments this is charged directly to the customer and for cash orders it is paid by the customer to the store. It is tax inclusive.
   * @member {Number} ProcessingFee
   */
  exports.prototype.ProcessingFee = undefined;

  /**
   * Payment account type
   * @member {module:model/Order.PaymentAccountTypeEnum} PaymentAccountType
   */
  exports.prototype.PaymentAccountType = undefined;

  /**
   * Payment account description (like Visa ****2371 or Apple Pay. or Cash)
   * @member {String} PaymentAccountDescription
   */
  exports.prototype.PaymentAccountDescription = undefined;

  /**
   * Order state
   * @member {module:model/Order.OrderStateEnum} OrderState
   */
  exports.prototype.OrderState = undefined;

  /**
   * Is pre-order
   * @member {Boolean} IsPreOrder
   */
  exports.prototype.IsPreOrder = undefined;

  /**
   * Order placed time
   * @member {Date} PlacedTime
   */
  exports.prototype.PlacedTime = undefined;

  /**
   * Order requested for
   * @member {Date} RequestedForTime
   */
  exports.prototype.RequestedForTime = undefined;

  /**
   * Chef note
   * @member {String} ChefNote
   */
  exports.prototype.ChefNote = undefined;

  /**
   * Used app type
   * @member {module:model/Order.AppTypeEnum} AppType
   */
  exports.prototype.AppType = undefined;

  /**
   * User rating
   * @member {Number} UserRating
   */
  exports.prototype.UserRating = undefined;

  /**
   * Status of the payment
   * @member {module:model/Order.PaymentStatusEnum} PaymentStatus
   */
  exports.prototype.PaymentStatus = undefined;

  /**
   * Rejection reason. Can have value if the order is rejected.
   * @member {module:model/Order.RejectionReasonEnum} RejectionReason
   */
  exports.prototype.RejectionReason = undefined;

  /**
   * Amount refunded to customer.
   * @member {Number} RefundedAmount
   */
  exports.prototype.RefundedAmount = undefined;

  /**
   * Delivery tracking status
   * @member {module:model/Order.DeliveryTrackingStatusEnum} DeliveryTrackingStatus
   */
  exports.prototype.DeliveryTrackingStatus = undefined;

  /**
   * Assigned driver identifier
   * @member {Number} DriverId
   */
  exports.prototype.DriverId = undefined;

  /**
   * Total tax applied to order
   * @member {Number} TotalTax
   */
  exports.prototype.TotalTax = undefined;

  /**
   * Unique, 6 character long alpha numeric code for tracking.
   * @member {String} OrderTrackingCode
   */
  exports.prototype.OrderTrackingCode = undefined;



  /**
   * Allowed values for the <code>DeliveryType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryTypeEnum = {
    /**
     * value: "Delivery"
     * @const
     */
    Delivery: "Delivery",

    /**
     * value: "Pickup"
     * @const
     */
    Pickup: "Pickup"
  };


  /**
   * Allowed values for the <code>PickupLocationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PickupLocationTypeEnum = {
    /**
     * value: "TakeOut"
     * @const
     */
    TakeOut: "TakeOut",

    /**
     * value: "TableService"
     * @const
     */
    TableService: "TableService",

    /**
     * value: "DineIn"
     * @const
     */
    DineIn: "DineIn"
  };


  /**
   * Allowed values for the <code>TableServiceCatagory</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TableServiceCatagoryEnum = {
    /**
     * value: "Generic"
     * @const
     */
    Generic: "Generic",

    /**
     * value: "Villa"
     * @const
     */
    Villa: "Villa",

    /**
     * value: "House"
     * @const
     */
    House: "House",

    /**
     * value: "Room"
     * @const
     */
    Room: "Room",

    /**
     * value: "Area"
     * @const
     */
    Area: "Area",

    /**
     * value: "Table"
     * @const
     */
    Table: "Table",

    /**
     * value: "ParkingBay"
     * @const
     */
    ParkingBay: "ParkingBay",

    /**
     * value: "Gate"
     * @const
     */
    Gate: "Gate",

    /**
     * value: "DriveThrough"
     * @const
     */
    DriveThrough: "DriveThrough",

    /**
     * value: "Team"
     * @const
     */
    Team: "Team"
  };


  /**
   * Allowed values for the <code>PaymentAccountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentAccountTypeEnum = {
    /**
     * value: "Card"
     * @const
     */
    Card: "Card",

    /**
     * value: "Cash"
     * @const
     */
    Cash: "Cash",

    /**
     * value: "Ideal"
     * @const
     */
    Ideal: "Ideal",

    /**
     * value: "Bancontact"
     * @const
     */
    Bancontact: "Bancontact",

    /**
     * value: "Giropay"
     * @const
     */
    Giropay: "Giropay",

    /**
     * value: "Eps"
     * @const
     */
    Eps: "Eps",

    /**
     * value: "Emv"
     * @const
     */
    Emv: "Emv",

    /**
     * value: "PayPal"
     * @const
     */
    PayPal: "PayPal"
  };


  /**
   * Allowed values for the <code>OrderState</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderStateEnum = {
    /**
     * value: "Created"
     * @const
     */
    Created: "Created",

    /**
     * value: "PlacedCanBeCancelled"
     * @const
     */
    PlacedCanBeCancelled: "PlacedCanBeCancelled",

    /**
     * value: "ReadyToProcess"
     * @const
     */
    ReadyToProcess: "ReadyToProcess",

    /**
     * value: "AcceptedByRestaurant"
     * @const
     */
    AcceptedByRestaurant: "AcceptedByRestaurant",

    /**
     * value: "Dispatched"
     * @const
     */
    Dispatched: "Dispatched",

    /**
     * value: "Delivered"
     * @const
     */
    Delivered: "Delivered",

    /**
     * value: "Cancelled"
     * @const
     */
    Cancelled: "Cancelled",

    /**
     * value: "ManualReview"
     * @const
     */
    ManualReview: "ManualReview",

    /**
     * value: "RejectedByStore"
     * @const
     */
    RejectedByStore: "RejectedByStore",

    /**
     * value: "RejectedByFlipdish"
     * @const
     */
    RejectedByFlipdish: "RejectedByFlipdish",

    /**
     * value: "RejectedAutomatically"
     * @const
     */
    RejectedAutomatically: "RejectedAutomatically",

    /**
     * value: "RejectedAfterBeingAccepted"
     * @const
     */
    RejectedAfterBeingAccepted: "RejectedAfterBeingAccepted",

    /**
     * value: "AcceptedAndRefunded"
     * @const
     */
    AcceptedAndRefunded: "AcceptedAndRefunded"
  };


  /**
   * Allowed values for the <code>AppType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AppTypeEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    Unknown: "Unknown",

    /**
     * value: "Ios"
     * @const
     */
    Ios: "Ios",

    /**
     * value: "Android"
     * @const
     */
    Android: "Android",

    /**
     * value: "Web"
     * @const
     */
    Web: "Web",

    /**
     * value: "Kiosk"
     * @const
     */
    Kiosk: "Kiosk",

    /**
     * value: "Pos"
     * @const
     */
    Pos: "Pos",

    /**
     * value: "TelephoneCall"
     * @const
     */
    TelephoneCall: "TelephoneCall",

    /**
     * value: "Sms"
     * @const
     */
    Sms: "Sms",

    /**
     * value: "PwaAndroid"
     * @const
     */
    PwaAndroid: "PwaAndroid",

    /**
     * value: "PwaIos"
     * @const
     */
    PwaIos: "PwaIos",

    /**
     * value: "Google"
     * @const
     */
    Google: "Google"
  };


  /**
   * Allowed values for the <code>PaymentStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentStatusEnum = {
    /**
     * value: "Paid"
     * @const
     */
    Paid: "Paid",

    /**
     * value: "Unpaid"
     * @const
     */
    Unpaid: "Unpaid",

    /**
     * value: "Refunded"
     * @const
     */
    Refunded: "Refunded",

    /**
     * value: "PartiallyRefunded"
     * @const
     */
    PartiallyRefunded: "PartiallyRefunded",

    /**
     * value: "Disputed"
     * @const
     */
    Disputed: "Disputed"
  };


  /**
   * Allowed values for the <code>RejectionReason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RejectionReasonEnum = {
    /**
     * value: "TooBusy"
     * @const
     */
    TooBusy: "TooBusy",

    /**
     * value: "FoodUnavailable"
     * @const
     */
    FoodUnavailable: "FoodUnavailable",

    /**
     * value: "UnableToDeliver"
     * @const
     */
    UnableToDeliver: "UnableToDeliver",

    /**
     * value: "UnknownAddress"
     * @const
     */
    UnknownAddress: "UnknownAddress",

    /**
     * value: "UnknownReason"
     * @const
     */
    UnknownReason: "UnknownReason",

    /**
     * value: "TooSoon"
     * @const
     */
    TooSoon: "TooSoon",

    /**
     * value: "TimeUnavailable"
     * @const
     */
    TimeUnavailable: "TimeUnavailable",

    /**
     * value: "DontDeliverToArea"
     * @const
     */
    DontDeliverToArea: "DontDeliverToArea",

    /**
     * value: "StoreUncontactable"
     * @const
     */
    StoreUncontactable: "StoreUncontactable"
  };


  /**
   * Allowed values for the <code>DeliveryTrackingStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeliveryTrackingStatusEnum = {
    /**
     * value: "Unassigned"
     * @const
     */
    Unassigned: "Unassigned",

    /**
     * value: "Unaccepted"
     * @const
     */
    Unaccepted: "Unaccepted",

    /**
     * value: "Accepted"
     * @const
     */
    Accepted: "Accepted",

    /**
     * value: "Carrying"
     * @const
     */
    Carrying: "Carrying",

    /**
     * value: "OnTheWay"
     * @const
     */
    OnTheWay: "OnTheWay",

    /**
     * value: "ArrivedAtLocation"
     * @const
     */
    ArrivedAtLocation: "ArrivedAtLocation",

    /**
     * value: "Delivered"
     * @const
     */
    Delivered: "Delivered",

    /**
     * value: "CannotDeliver"
     * @const
     */
    CannotDeliver: "CannotDeliver"
  };

  return exports;

}));
