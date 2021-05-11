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
    describe('CreateVoucher', function() {
      beforeEach(function() {
        instance = new Flipdish.CreateVoucher();
      });

      it('should create an instance of CreateVoucher', function() {
        // TODO: update the code to test CreateVoucher
        expect(instance).to.be.a(Flipdish.CreateVoucher);
      });

      it('should have the property VoucherType (base name: "VoucherType")', function() {
        // TODO: update the code to test the property VoucherType
        expect(instance).to.have.property('VoucherType');
        // expect(instance.VoucherType).to.be(expectedValueLiteral);
      });

      it('should have the property Stores (base name: "Stores")', function() {
        // TODO: update the code to test the property Stores
        expect(instance).to.have.property('Stores');
        // expect(instance.Stores).to.be(expectedValueLiteral);
      });

      it('should have the property AddItemDetails (base name: "AddItemDetails")', function() {
        // TODO: update the code to test the property AddItemDetails
        expect(instance).to.have.property('AddItemDetails');
        // expect(instance.AddItemDetails).to.be(expectedValueLiteral);
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

    });
  });

}));
