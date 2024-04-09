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
    describe('PayoutReport3DetailsFlipdishFees', function() {
      beforeEach(function() {
        instance = new Flipdish.PayoutReport3DetailsFlipdishFees();
      });

      it('should create an instance of PayoutReport3DetailsFlipdishFees', function() {
        // TODO: update the code to test PayoutReport3DetailsFlipdishFees
        expect(instance).to.be.a(Flipdish.PayoutReport3DetailsFlipdishFees);
      });

      it('should have the property WebAndAppCash (base name: "WebAndAppCash")', function() {
        // TODO: update the code to test the property WebAndAppCash
        expect(instance).to.have.property('WebAndAppCash');
        // expect(instance.WebAndAppCash).to.be(expectedValueLiteral);
      });

      it('should have the property WebAndAppCashRevenueExcludingTips (base name: "WebAndAppCashRevenueExcludingTips")', function() {
        // TODO: update the code to test the property WebAndAppCashRevenueExcludingTips
        expect(instance).to.have.property('WebAndAppCashRevenueExcludingTips');
        // expect(instance.WebAndAppCashRevenueExcludingTips).to.be(expectedValueLiteral);
      });

      it('should have the property WebAndAppCard (base name: "WebAndAppCard")', function() {
        // TODO: update the code to test the property WebAndAppCard
        expect(instance).to.have.property('WebAndAppCard');
        // expect(instance.WebAndAppCard).to.be(expectedValueLiteral);
      });

      it('should have the property WebAndAppCardRevenueExcludingTips (base name: "WebAndAppCardRevenueExcludingTips")', function() {
        // TODO: update the code to test the property WebAndAppCardRevenueExcludingTips
        expect(instance).to.have.property('WebAndAppCardRevenueExcludingTips');
        // expect(instance.WebAndAppCardRevenueExcludingTips).to.be(expectedValueLiteral);
      });

      it('should have the property KioskCash (base name: "KioskCash")', function() {
        // TODO: update the code to test the property KioskCash
        expect(instance).to.have.property('KioskCash');
        // expect(instance.KioskCash).to.be(expectedValueLiteral);
      });

      it('should have the property KioskCard (base name: "KioskCard")', function() {
        // TODO: update the code to test the property KioskCard
        expect(instance).to.have.property('KioskCard');
        // expect(instance.KioskCard).to.be(expectedValueLiteral);
      });

      it('should have the property QropCash (base name: "QropCash")', function() {
        // TODO: update the code to test the property QropCash
        expect(instance).to.have.property('QropCash');
        // expect(instance.QropCash).to.be(expectedValueLiteral);
      });

      it('should have the property QropCard (base name: "QropCard")', function() {
        // TODO: update the code to test the property QropCard
        expect(instance).to.have.property('QropCard');
        // expect(instance.QropCard).to.be(expectedValueLiteral);
      });

      it('should have the property PosCard (base name: "PosCard")', function() {
        // TODO: update the code to test the property PosCard
        expect(instance).to.have.property('PosCard');
        // expect(instance.PosCard).to.be(expectedValueLiteral);
      });

      it('should have the property PosCardRevenue (base name: "PosCardRevenue")', function() {
        // TODO: update the code to test the property PosCardRevenue
        expect(instance).to.have.property('PosCardRevenue');
        // expect(instance.PosCardRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property PosCardOnFlipdishOrders (base name: "PosCardOnFlipdishOrders")', function() {
        // TODO: update the code to test the property PosCardOnFlipdishOrders
        expect(instance).to.have.property('PosCardOnFlipdishOrders');
        // expect(instance.PosCardOnFlipdishOrders).to.be(expectedValueLiteral);
      });

      it('should have the property OtherIntegrationFees (base name: "OtherIntegrationFees")', function() {
        // TODO: update the code to test the property OtherIntegrationFees
        expect(instance).to.have.property('OtherIntegrationFees');
        // expect(instance.OtherIntegrationFees).to.be(expectedValueLiteral);
      });

      it('should have the property OtherIntegrationTips (base name: "OtherIntegrationTips")', function() {
        // TODO: update the code to test the property OtherIntegrationTips
        expect(instance).to.have.property('OtherIntegrationTips');
        // expect(instance.OtherIntegrationTips).to.be(expectedValueLiteral);
      });

      it('should have the property Vat (base name: "Vat")', function() {
        // TODO: update the code to test the property Vat
        expect(instance).to.have.property('Vat');
        // expect(instance.Vat).to.be(expectedValueLiteral);
      });

      it('should have the property Total (base name: "Total")', function() {
        // TODO: update the code to test the property Total
        expect(instance).to.have.property('Total');
        // expect(instance.Total).to.be(expectedValueLiteral);
      });

    });
  });

}));
