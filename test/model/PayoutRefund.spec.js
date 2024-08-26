/*
 * Flipdish Open API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('PayoutRefund', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutRefund();
      });

      it('should create an instance of PayoutRefund', function() {
        // TODO: update the code to test PayoutRefund
        expect(instance).to.be.a(Flipdish.PayoutRefund);
      });

      it('should have the property OrderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property OrderId
        expect(instance).to.have.property('OrderId');
        // expect(instance.OrderId).to.be(expectedValueLiteral);
      });

      it('should have the property OrderCurrency (base name: "OrderCurrency")', function() {
        // TODO: update the code to test the property OrderCurrency
        expect(instance).to.have.property('OrderCurrency');
        // expect(instance.OrderCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property PayoutId (base name: "PayoutId")', function() {
        // TODO: update the code to test the property PayoutId
        expect(instance).to.have.property('PayoutId');
        // expect(instance.PayoutId).to.be(expectedValueLiteral);
      });

      it('should have the property OrderDate (base name: "OrderDate")', function() {
        // TODO: update the code to test the property OrderDate
        expect(instance).to.have.property('OrderDate');
        // expect(instance.OrderDate).to.be(expectedValueLiteral);
      });

      it('should have the property OrderType (base name: "OrderType")', function() {
        // TODO: update the code to test the property OrderType
        expect(instance).to.have.property('OrderType');
        // expect(instance.OrderType).to.be(expectedValueLiteral);
      });

      it('should have the property RefundDate (base name: "RefundDate")', function() {
        // TODO: update the code to test the property RefundDate
        expect(instance).to.have.property('RefundDate');
        // expect(instance.RefundDate).to.be(expectedValueLiteral);
      });

      it('should have the property StoreId (base name: "StoreId")', function() {
        // TODO: update the code to test the property StoreId
        expect(instance).to.have.property('StoreId');
        // expect(instance.StoreId).to.be(expectedValueLiteral);
      });

      it('should have the property TotalRefund (base name: "TotalRefund")', function() {
        // TODO: update the code to test the property TotalRefund
        expect(instance).to.have.property('TotalRefund');
        // expect(instance.TotalRefund).to.be(expectedValueLiteral);
      });

      it('should have the property RefundedFees (base name: "RefundedFees")', function() {
        // TODO: update the code to test the property RefundedFees
        expect(instance).to.have.property('RefundedFees');
        // expect(instance.RefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property RefundedAmount (base name: "RefundedAmount")', function() {
        // TODO: update the code to test the property RefundedAmount
        expect(instance).to.have.property('RefundedAmount');
        // expect(instance.RefundedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property CashFeeRefundedToCustomer (base name: "CashFeeRefundedToCustomer")', function() {
        // TODO: update the code to test the property CashFeeRefundedToCustomer
        expect(instance).to.have.property('CashFeeRefundedToCustomer');
        // expect(instance.CashFeeRefundedToCustomer).to.be(expectedValueLiteral);
      });

    });
  });

}));
