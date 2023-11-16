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
    describe('VoucherWithStats', function() {
      beforeEach(function() {
        instance = new Flipdish.VoucherWithStats();
      });

      it('should create an instance of VoucherWithStats', function() {
        // TODO: update the code to test VoucherWithStats
        expect(instance).to.be.a(Flipdish.VoucherWithStats);
      });

      it('should have the property TotalUsed (base name: "TotalUsed")', function() {
        // TODO: update the code to test the property TotalUsed
        expect(instance).to.have.property('TotalUsed');
        // expect(instance.TotalUsed).to.be(expectedValueLiteral);
      });

      it('should have the property TotalCustomers (base name: "TotalCustomers")', function() {
        // TODO: update the code to test the property TotalCustomers
        expect(instance).to.have.property('TotalCustomers');
        // expect(instance.TotalCustomers).to.be(expectedValueLiteral);
      });

      it('should have the property TotalAmountFromOrders (base name: "TotalAmountFromOrders")', function() {
        // TODO: update the code to test the property TotalAmountFromOrders
        expect(instance).to.have.property('TotalAmountFromOrders');
        // expect(instance.TotalAmountFromOrders).to.be(expectedValueLiteral);
      });

      it('should have the property TotalDiscounted (base name: "TotalDiscounted")', function() {
        // TODO: update the code to test the property TotalDiscounted
        expect(instance).to.have.property('TotalDiscounted');
        // expect(instance.TotalDiscounted).to.be(expectedValueLiteral);
      });

      it('should have the property AverageOrderSize (base name: "AverageOrderSize")', function() {
        // TODO: update the code to test the property AverageOrderSize
        expect(instance).to.have.property('AverageOrderSize');
        // expect(instance.AverageOrderSize).to.be(expectedValueLiteral);
      });

      it('should have the property VoucherId (base name: "VoucherId")', function() {
        // TODO: update the code to test the property VoucherId
        expect(instance).to.have.property('VoucherId');
        // expect(instance.VoucherId).to.be(expectedValueLiteral);
      });

      it('should have the property Status (base name: "Status")', function() {
        // TODO: update the code to test the property Status
        expect(instance).to.have.property('Status');
        // expect(instance.Status).to.be(expectedValueLiteral);
      });

      it('should have the property VoucherType (base name: "VoucherType")', function() {
        // TODO: update the code to test the property VoucherType
        expect(instance).to.have.property('VoucherType');
        // expect(instance.VoucherType).to.be(expectedValueLiteral);
      });

      it('should have the property VoucherSubType (base name: "VoucherSubType")', function() {
        // TODO: update the code to test the property VoucherSubType
        expect(instance).to.have.property('VoucherSubType');
        // expect(instance.VoucherSubType).to.be(expectedValueLiteral);
      });

      it('should have the property Currency (base name: "Currency")', function() {
        // TODO: update the code to test the property Currency
        expect(instance).to.have.property('Currency');
        // expect(instance.Currency).to.be(expectedValueLiteral);
      });

      it('should have the property StoreNames (base name: "StoreNames")', function() {
        // TODO: update the code to test the property StoreNames
        expect(instance).to.have.property('StoreNames');
        // expect(instance.StoreNames).to.be(expectedValueLiteral);
      });

      it('should have the property PromotionDetails (base name: "PromotionDetails")', function() {
        // TODO: update the code to test the property PromotionDetails
        expect(instance).to.have.property('PromotionDetails');
        // expect(instance.PromotionDetails).to.be(expectedValueLiteral);
      });

      it('should have the property CreditNoteDetails (base name: "CreditNoteDetails")', function() {
        // TODO: update the code to test the property CreditNoteDetails
        expect(instance).to.have.property('CreditNoteDetails');
        // expect(instance.CreditNoteDetails).to.be(expectedValueLiteral);
      });

      it('should have the property LumpDiscountDetails (base name: "LumpDiscountDetails")', function() {
        // TODO: update the code to test the property LumpDiscountDetails
        expect(instance).to.have.property('LumpDiscountDetails');
        // expect(instance.LumpDiscountDetails).to.be(expectedValueLiteral);
      });

      it('should have the property PercentDiscountDetails (base name: "PercentDiscountDetails")', function() {
        // TODO: update the code to test the property PercentDiscountDetails
        expect(instance).to.have.property('PercentDiscountDetails');
        // expect(instance.PercentDiscountDetails).to.be(expectedValueLiteral);
      });

      it('should have the property Code (base name: "Code")', function() {
        // TODO: update the code to test the property Code
        expect(instance).to.have.property('Code');
        // expect(instance.Code).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "Description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property Stores (base name: "Stores")', function() {
        // TODO: update the code to test the property Stores
        expect(instance).to.have.property('Stores');
        // expect(instance.Stores).to.be(expectedValueLiteral);
      });

      it('should have the property ValidOnOrdersOver (base name: "ValidOnOrdersOver")', function() {
        // TODO: update the code to test the property ValidOnOrdersOver
        expect(instance).to.have.property('ValidOnOrdersOver');
        // expect(instance.ValidOnOrdersOver).to.be(expectedValueLiteral);
      });

      it('should have the property TakesPriority (base name: "TakesPriority")', function() {
        // TODO: update the code to test the property TakesPriority
        expect(instance).to.have.property('TakesPriority');
        // expect(instance.TakesPriority).to.be(expectedValueLiteral);
      });

      it('should have the property IsEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property IsEnabled
        expect(instance).to.have.property('IsEnabled');
        // expect(instance.IsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property IsAutomaticallyApplied (base name: "IsAutomaticallyApplied")', function() {
        // TODO: update the code to test the property IsAutomaticallyApplied
        expect(instance).to.have.property('IsAutomaticallyApplied');
        // expect(instance.IsAutomaticallyApplied).to.be(expectedValueLiteral);
      });

      it('should have the property IncludeDeliveryFee (base name: "IncludeDeliveryFee")', function() {
        // TODO: update the code to test the property IncludeDeliveryFee
        expect(instance).to.have.property('IncludeDeliveryFee');
        // expect(instance.IncludeDeliveryFee).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidForDeliveryOrders (base name: "IsValidForDeliveryOrders")', function() {
        // TODO: update the code to test the property IsValidForDeliveryOrders
        expect(instance).to.have.property('IsValidForDeliveryOrders');
        // expect(instance.IsValidForDeliveryOrders).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidForPickupOrders (base name: "IsValidForPickupOrders")', function() {
        // TODO: update the code to test the property IsValidForPickupOrders
        expect(instance).to.have.property('IsValidForPickupOrders');
        // expect(instance.IsValidForPickupOrders).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidForOrdersPayedOnline (base name: "IsValidForOrdersPayedOnline")', function() {
        // TODO: update the code to test the property IsValidForOrdersPayedOnline
        expect(instance).to.have.property('IsValidForOrdersPayedOnline');
        // expect(instance.IsValidForOrdersPayedOnline).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidForOrdersPayedByCash (base name: "IsValidForOrdersPayedByCash")', function() {
        // TODO: update the code to test the property IsValidForOrdersPayedByCash
        expect(instance).to.have.property('IsValidForOrdersPayedByCash');
        // expect(instance.IsValidForOrdersPayedByCash).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidForFirstOrderOnly (base name: "IsValidForFirstOrderOnly")', function() {
        // TODO: update the code to test the property IsValidForFirstOrderOnly
        expect(instance).to.have.property('IsValidForFirstOrderOnly');
        // expect(instance.IsValidForFirstOrderOnly).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidOncePerCustomer (base name: "IsValidOncePerCustomer")', function() {
        // TODO: update the code to test the property IsValidOncePerCustomer
        expect(instance).to.have.property('IsValidOncePerCustomer');
        // expect(instance.IsValidOncePerCustomer).to.be(expectedValueLiteral);
      });

      it('should have the property IsValidOnlyOnce (base name: "IsValidOnlyOnce")', function() {
        // TODO: update the code to test the property IsValidOnlyOnce
        expect(instance).to.have.property('IsValidOnlyOnce');
        // expect(instance.IsValidOnlyOnce).to.be(expectedValueLiteral);
      });

      it('should have the property StartDate (base name: "StartDate")', function() {
        // TODO: update the code to test the property StartDate
        expect(instance).to.have.property('StartDate');
        // expect(instance.StartDate).to.be(expectedValueLiteral);
      });

      it('should have the property ExpiryDate (base name: "ExpiryDate")', function() {
        // TODO: update the code to test the property ExpiryDate
        expect(instance).to.have.property('ExpiryDate');
        // expect(instance.ExpiryDate).to.be(expectedValueLiteral);
      });

      it('should have the property ChannelRestrictions (base name: "ChannelRestrictions")', function() {
        // TODO: update the code to test the property ChannelRestrictions
        expect(instance).to.have.property('ChannelRestrictions');
        // expect(instance.ChannelRestrictions).to.be(expectedValueLiteral);
      });

    });
  });

}));
