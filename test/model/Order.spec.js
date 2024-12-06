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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flipdish.Order();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new Flipdish.Order();
      //expect(instance).to.be.a(Flipdish.Order);
    });

    it('should have the property Store (base name: "Store")', function() {
      // uncomment below and update the code to test the property Store
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property Customer (base name: "Customer")', function() {
      // uncomment below and update the code to test the property Customer
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property Voucher (base name: "Voucher")', function() {
      // uncomment below and update the code to test the property Voucher
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property Fees (base name: "Fees")', function() {
      // uncomment below and update the code to test the property Fees
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderItems (base name: "OrderItems")', function() {
      // uncomment below and update the code to test the property OrderItems
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryLocation (base name: "DeliveryLocation")', function() {
      // uncomment below and update the code to test the property DeliveryLocation
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property CustomerLocation (base name: "CustomerLocation")', function() {
      // uncomment below and update the code to test the property CustomerLocation
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property MaskedPhoneNumber (base name: "MaskedPhoneNumber")', function() {
      // uncomment below and update the code to test the property MaskedPhoneNumber
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DropOffLocationId (base name: "DropOffLocationId")', function() {
      // uncomment below and update the code to test the property DropOffLocationId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DropOffLocation (base name: "DropOffLocation")', function() {
      // uncomment below and update the code to test the property DropOffLocation
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property AcceptedFor (base name: "AcceptedFor")', function() {
      // uncomment below and update the code to test the property AcceptedFor
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property InFraudZone (base name: "InFraudZone")', function() {
      // uncomment below and update the code to test the property InFraudZone
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property UnusualHighValueOrder (base name: "UnusualHighValueOrder")', function() {
      // uncomment below and update the code to test the property UnusualHighValueOrder
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property RejectedByUserId (base name: "RejectedByUserId")', function() {
      // uncomment below and update the code to test the property RejectedByUserId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ChannelOrderId (base name: "ChannelOrderId")', function() {
      // uncomment below and update the code to test the property ChannelOrderId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ChannelOrderDisplayId (base name: "ChannelOrderDisplayId")', function() {
      // uncomment below and update the code to test the property ChannelOrderDisplayId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property Channel (base name: "Channel")', function() {
      // uncomment below and update the code to test the property Channel
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderDropOffLocation (base name: "OrderDropOffLocation")', function() {
      // uncomment below and update the code to test the property OrderDropOffLocation
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property FulfillmentStatus (base name: "FulfillmentStatus")', function() {
      // uncomment below and update the code to test the property FulfillmentStatus
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderBatchInfo (base name: "OrderBatchInfo")', function() {
      // uncomment below and update the code to test the property OrderBatchInfo
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property CreatedCampaignVoucherId (base name: "CreatedCampaignVoucherId")', function() {
      // uncomment below and update the code to test the property CreatedCampaignVoucherId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderId (base name: "OrderId")', function() {
      // uncomment below and update the code to test the property OrderId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property LocalOrderId (base name: "LocalOrderId")', function() {
      // uncomment below and update the code to test the property LocalOrderId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryType (base name: "DeliveryType")', function() {
      // uncomment below and update the code to test the property DeliveryType
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property PickupLocationType (base name: "PickupLocationType")', function() {
      // uncomment below and update the code to test the property PickupLocationType
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property TableServiceCatagory (base name: "TableServiceCatagory")', function() {
      // uncomment below and update the code to test the property TableServiceCatagory
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property TipAmount (base name: "TipAmount")', function() {
      // uncomment below and update the code to test the property TipAmount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryAmount (base name: "DeliveryAmount")', function() {
      // uncomment below and update the code to test the property DeliveryAmount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderItemsAmount (base name: "OrderItemsAmount")', function() {
      // uncomment below and update the code to test the property OrderItemsAmount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ServiceChargeAmount (base name: "ServiceChargeAmount")', function() {
      // uncomment below and update the code to test the property ServiceChargeAmount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ServiceChargePercentage (base name: "ServiceChargePercentage")', function() {
      // uncomment below and update the code to test the property ServiceChargePercentage
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property Amount (base name: "Amount")', function() {
      // uncomment below and update the code to test the property Amount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ProcessingFee (base name: "ProcessingFee")', function() {
      // uncomment below and update the code to test the property ProcessingFee
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property PaymentAccountType (base name: "PaymentAccountType")', function() {
      // uncomment below and update the code to test the property PaymentAccountType
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property PaymentAccountDescription (base name: "PaymentAccountDescription")', function() {
      // uncomment below and update the code to test the property PaymentAccountDescription
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderState (base name: "OrderState")', function() {
      // uncomment below and update the code to test the property OrderState
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property IsPreOrder (base name: "IsPreOrder")', function() {
      // uncomment below and update the code to test the property IsPreOrder
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property PlacedTime (base name: "PlacedTime")', function() {
      // uncomment below and update the code to test the property PlacedTime
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property RequestedForTime (base name: "RequestedForTime")', function() {
      // uncomment below and update the code to test the property RequestedForTime
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ChefNote (base name: "ChefNote")', function() {
      // uncomment below and update the code to test the property ChefNote
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property AppType (base name: "AppType")', function() {
      // uncomment below and update the code to test the property AppType
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property UserRating (base name: "UserRating")', function() {
      // uncomment below and update the code to test the property UserRating
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property PaymentStatus (base name: "PaymentStatus")', function() {
      // uncomment below and update the code to test the property PaymentStatus
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property RejectionReason (base name: "RejectionReason")', function() {
      // uncomment below and update the code to test the property RejectionReason
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property RefundedAmount (base name: "RefundedAmount")', function() {
      // uncomment below and update the code to test the property RefundedAmount
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryTrackingStatus (base name: "DeliveryTrackingStatus")', function() {
      // uncomment below and update the code to test the property DeliveryTrackingStatus
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DriverId (base name: "DriverId")', function() {
      // uncomment below and update the code to test the property DriverId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property TotalTax (base name: "TotalTax")', function() {
      // uncomment below and update the code to test the property TotalTax
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property OrderTrackingCode (base name: "OrderTrackingCode")', function() {
      // uncomment below and update the code to test the property OrderTrackingCode
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property DeliveryFeeAreaId (base name: "DeliveryFeeAreaId")', function() {
      // uncomment below and update the code to test the property DeliveryFeeAreaId
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

    it('should have the property ReceiptCode (base name: "ReceiptCode")', function() {
      // uncomment below and update the code to test the property ReceiptCode
      //var instance = new Flipdish.Order();
      //expect(instance).to.be();
    });

  });

}));
