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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flipdish);
  }
}(this, function(expect, Flipdish) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Order', function() {
      beforeEach(function() {
        instance = new Flipdish.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(Flipdish.Order);
      });

      it('should have the property Store (base name: "Store")', function() {
        // TODO: update the code to test the property Store
        expect(instance).to.have.property('Store');
        // expect(instance.Store).to.be(expectedValueLiteral);
      });

      it('should have the property Customer (base name: "Customer")', function() {
        // TODO: update the code to test the property Customer
        expect(instance).to.have.property('Customer');
        // expect(instance.Customer).to.be(expectedValueLiteral);
      });

      it('should have the property Voucher (base name: "Voucher")', function() {
        // TODO: update the code to test the property Voucher
        expect(instance).to.have.property('Voucher');
        // expect(instance.Voucher).to.be(expectedValueLiteral);
      });

      it('should have the property Fees (base name: "Fees")', function() {
        // TODO: update the code to test the property Fees
        expect(instance).to.have.property('Fees');
        // expect(instance.Fees).to.be(expectedValueLiteral);
      });

      it('should have the property OrderItems (base name: "OrderItems")', function() {
        // TODO: update the code to test the property OrderItems
        expect(instance).to.have.property('OrderItems');
        // expect(instance.OrderItems).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryLocation (base name: "DeliveryLocation")', function() {
        // TODO: update the code to test the property DeliveryLocation
        expect(instance).to.have.property('DeliveryLocation');
        // expect(instance.DeliveryLocation).to.be(expectedValueLiteral);
      });

      it('should have the property CustomerLocation (base name: "CustomerLocation")', function() {
        // TODO: update the code to test the property CustomerLocation
        expect(instance).to.have.property('CustomerLocation');
        // expect(instance.CustomerLocation).to.be(expectedValueLiteral);
      });

      it('should have the property MaskedPhoneNumber (base name: "MaskedPhoneNumber")', function() {
        // TODO: update the code to test the property MaskedPhoneNumber
        expect(instance).to.have.property('MaskedPhoneNumber');
        // expect(instance.MaskedPhoneNumber).to.be(expectedValueLiteral);
      });

      it('should have the property DropOffLocationId (base name: "DropOffLocationId")', function() {
        // TODO: update the code to test the property DropOffLocationId
        expect(instance).to.have.property('DropOffLocationId');
        // expect(instance.DropOffLocationId).to.be(expectedValueLiteral);
      });

      it('should have the property DropOffLocation (base name: "DropOffLocation")', function() {
        // TODO: update the code to test the property DropOffLocation
        expect(instance).to.have.property('DropOffLocation');
        // expect(instance.DropOffLocation).to.be(expectedValueLiteral);
      });

      it('should have the property AcceptedFor (base name: "AcceptedFor")', function() {
        // TODO: update the code to test the property AcceptedFor
        expect(instance).to.have.property('AcceptedFor');
        // expect(instance.AcceptedFor).to.be(expectedValueLiteral);
      });

      it('should have the property InFraudZone (base name: "InFraudZone")', function() {
        // TODO: update the code to test the property InFraudZone
        expect(instance).to.have.property('InFraudZone');
        // expect(instance.InFraudZone).to.be(expectedValueLiteral);
      });

      it('should have the property UnusualHighValueOrder (base name: "UnusualHighValueOrder")', function() {
        // TODO: update the code to test the property UnusualHighValueOrder
        expect(instance).to.have.property('UnusualHighValueOrder');
        // expect(instance.UnusualHighValueOrder).to.be(expectedValueLiteral);
      });

      it('should have the property RejectedByUserId (base name: "RejectedByUserId")', function() {
        // TODO: update the code to test the property RejectedByUserId
        expect(instance).to.have.property('RejectedByUserId');
        // expect(instance.RejectedByUserId).to.be(expectedValueLiteral);
      });

      it('should have the property ChannelOrderId (base name: "ChannelOrderId")', function() {
        // TODO: update the code to test the property ChannelOrderId
        expect(instance).to.have.property('ChannelOrderId');
        // expect(instance.ChannelOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property ChannelOrderDisplayId (base name: "ChannelOrderDisplayId")', function() {
        // TODO: update the code to test the property ChannelOrderDisplayId
        expect(instance).to.have.property('ChannelOrderDisplayId');
        // expect(instance.ChannelOrderDisplayId).to.be(expectedValueLiteral);
      });

      it('should have the property Channel (base name: "Channel")', function() {
        // TODO: update the code to test the property Channel
        expect(instance).to.have.property('Channel');
        // expect(instance.Channel).to.be(expectedValueLiteral);
      });

      it('should have the property ReceiptCode (base name: "ReceiptCode")', function() {
        // TODO: update the code to test the property ReceiptCode
        expect(instance).to.have.property('ReceiptCode');
        // expect(instance.ReceiptCode).to.be(expectedValueLiteral);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property LocalOrderId (base name: "LocalOrderId")', function() {
        // TODO: update the code to test the property LocalOrderId
        expect(instance).to.have.property('LocalOrderId');
        // expect(instance.LocalOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryType (base name: "DeliveryType")', function() {
        // TODO: update the code to test the property DeliveryType
        expect(instance).to.have.property('DeliveryType');
        // expect(instance.DeliveryType).to.be(expectedValueLiteral);
      });

      it('should have the property PickupLocationType (base name: "PickupLocationType")', function() {
        // TODO: update the code to test the property PickupLocationType
        expect(instance).to.have.property('PickupLocationType');
        // expect(instance.PickupLocationType).to.be(expectedValueLiteral);
      });

      it('should have the property TableServiceCatagory (base name: "TableServiceCatagory")', function() {
        // TODO: update the code to test the property TableServiceCatagory
        expect(instance).to.have.property('TableServiceCatagory');
        // expect(instance.TableServiceCatagory).to.be(expectedValueLiteral);
      });

      it('should have the property TipAmount (base name: "TipAmount")', function() {
        // TODO: update the code to test the property TipAmount
        expect(instance).to.have.property('TipAmount');
        // expect(instance.TipAmount).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryAmount (base name: "DeliveryAmount")', function() {
        // TODO: update the code to test the property DeliveryAmount
        expect(instance).to.have.property('DeliveryAmount');
        // expect(instance.DeliveryAmount).to.be(expectedValueLiteral);
      });

      it('should have the property OrderItemsAmount (base name: "OrderItemsAmount")', function() {
        // TODO: update the code to test the property OrderItemsAmount
        expect(instance).to.have.property('OrderItemsAmount');
        // expect(instance.OrderItemsAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ServiceChargeAmount (base name: "ServiceChargeAmount")', function() {
        // TODO: update the code to test the property ServiceChargeAmount
        expect(instance).to.have.property('ServiceChargeAmount');
        // expect(instance.ServiceChargeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property Amount (base name: "Amount")', function() {
        // TODO: update the code to test the property Amount
        expect(instance).to.have.property('Amount');
        // expect(instance.Amount).to.be(expectedValueLiteral);
      });

      it('should have the property ProcessingFee (base name: "ProcessingFee")', function() {
        // TODO: update the code to test the property ProcessingFee
        expect(instance).to.have.property('ProcessingFee');
        // expect(instance.ProcessingFee).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentAccountType (base name: "PaymentAccountType")', function() {
        // TODO: update the code to test the property PaymentAccountType
        expect(instance).to.have.property('PaymentAccountType');
        // expect(instance.PaymentAccountType).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentAccountDescription (base name: "PaymentAccountDescription")', function() {
        // TODO: update the code to test the property PaymentAccountDescription
        expect(instance).to.have.property('PaymentAccountDescription');
        // expect(instance.PaymentAccountDescription).to.be(expectedValueLiteral);
      });

      it('should have the property OrderState (base name: "OrderState")', function() {
        // TODO: update the code to test the property OrderState
        expect(instance).to.have.property('OrderState');
        // expect(instance.OrderState).to.be(expectedValueLiteral);
      });

      it('should have the property IsPreOrder (base name: "IsPreOrder")', function() {
        // TODO: update the code to test the property IsPreOrder
        expect(instance).to.have.property('IsPreOrder');
        // expect(instance.IsPreOrder).to.be(expectedValueLiteral);
      });

      it('should have the property PlacedTime (base name: "PlacedTime")', function() {
        // TODO: update the code to test the property PlacedTime
        expect(instance).to.have.property('PlacedTime');
        // expect(instance.PlacedTime).to.be(expectedValueLiteral);
      });

      it('should have the property RequestedForTime (base name: "RequestedForTime")', function() {
        // TODO: update the code to test the property RequestedForTime
        expect(instance).to.have.property('RequestedForTime');
        // expect(instance.RequestedForTime).to.be(expectedValueLiteral);
      });

      it('should have the property ChefNote (base name: "ChefNote")', function() {
        // TODO: update the code to test the property ChefNote
        expect(instance).to.have.property('ChefNote');
        // expect(instance.ChefNote).to.be(expectedValueLiteral);
      });

      it('should have the property AppType (base name: "AppType")', function() {
        // TODO: update the code to test the property AppType
        expect(instance).to.have.property('AppType');
        // expect(instance.AppType).to.be(expectedValueLiteral);
      });

      it('should have the property UserRating (base name: "UserRating")', function() {
        // TODO: update the code to test the property UserRating
        expect(instance).to.have.property('UserRating');
        // expect(instance.UserRating).to.be(expectedValueLiteral);
      });

      it('should have the property PaymentStatus (base name: "PaymentStatus")', function() {
        // TODO: update the code to test the property PaymentStatus
        expect(instance).to.have.property('PaymentStatus');
        // expect(instance.PaymentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property RejectionReason (base name: "RejectionReason")', function() {
        // TODO: update the code to test the property RejectionReason
        expect(instance).to.have.property('RejectionReason');
        // expect(instance.RejectionReason).to.be(expectedValueLiteral);
      });

      it('should have the property RefundedAmount (base name: "RefundedAmount")', function() {
        // TODO: update the code to test the property RefundedAmount
        expect(instance).to.have.property('RefundedAmount');
        // expect(instance.RefundedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property DeliveryTrackingStatus (base name: "DeliveryTrackingStatus")', function() {
        // TODO: update the code to test the property DeliveryTrackingStatus
        expect(instance).to.have.property('DeliveryTrackingStatus');
        // expect(instance.DeliveryTrackingStatus).to.be(expectedValueLiteral);
      });

      it('should have the property DriverId (base name: "DriverId")', function() {
        // TODO: update the code to test the property DriverId
        expect(instance).to.have.property('DriverId');
        // expect(instance.DriverId).to.be(expectedValueLiteral);
      });

      it('should have the property TotalTax (base name: "TotalTax")', function() {
        // TODO: update the code to test the property TotalTax
        expect(instance).to.have.property('TotalTax');
        // expect(instance.TotalTax).to.be(expectedValueLiteral);
      });

      it('should have the property OrderTrackingCode (base name: "OrderTrackingCode")', function() {
        // TODO: update the code to test the property OrderTrackingCode
        expect(instance).to.have.property('OrderTrackingCode');
        // expect(instance.OrderTrackingCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
