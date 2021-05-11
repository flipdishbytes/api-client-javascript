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
    describe('RevenueDetail', function() {
      beforeEach(function() {
        instance = new Flipdish.RevenueDetail();
      });

      it('should create an instance of RevenueDetail', function() {
        // TODO: update the code to test RevenueDetail
        expect(instance).to.be.a(Flipdish.RevenueDetail);
      });

      it('should have the property OnlineSalesAmount (base name: "OnlineSalesAmount")', function() {
        // TODO: update the code to test the property OnlineSalesAmount
        expect(instance).to.have.property('OnlineSalesAmount');
        // expect(instance.OnlineSalesAmount).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesTax (base name: "OnlineSalesTax")', function() {
        // TODO: update the code to test the property OnlineSalesTax
        expect(instance).to.have.property('OnlineSalesTax');
        // expect(instance.OnlineSalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesIncludingTax (base name: "OnlineSalesIncludingTax")', function() {
        // TODO: update the code to test the property OnlineSalesIncludingTax
        expect(instance).to.have.property('OnlineSalesIncludingTax');
        // expect(instance.OnlineSalesIncludingTax).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesFeesBaseAmount (base name: "OnlineSalesFeesBaseAmount")', function() {
        // TODO: update the code to test the property OnlineSalesFeesBaseAmount
        expect(instance).to.have.property('OnlineSalesFeesBaseAmount');
        // expect(instance.OnlineSalesFeesBaseAmount).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesAmount (base name: "CashSalesAmount")', function() {
        // TODO: update the code to test the property CashSalesAmount
        expect(instance).to.have.property('CashSalesAmount');
        // expect(instance.CashSalesAmount).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesTax (base name: "CashSalesTax")', function() {
        // TODO: update the code to test the property CashSalesTax
        expect(instance).to.have.property('CashSalesTax');
        // expect(instance.CashSalesTax).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesIncludingTax (base name: "CashSalesIncludingTax")', function() {
        // TODO: update the code to test the property CashSalesIncludingTax
        expect(instance).to.have.property('CashSalesIncludingTax');
        // expect(instance.CashSalesIncludingTax).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesFeesBaseAmount (base name: "CashSalesFeesBaseAmount")', function() {
        // TODO: update the code to test the property CashSalesFeesBaseAmount
        expect(instance).to.have.property('CashSalesFeesBaseAmount');
        // expect(instance.CashSalesFeesBaseAmount).to.be(expectedValueLiteral);
      });

      it('should have the property TotalSalesIncludingTax (base name: "TotalSalesIncludingTax")', function() {
        // TODO: update the code to test the property TotalSalesIncludingTax
        expect(instance).to.have.property('TotalSalesIncludingTax');
        // expect(instance.TotalSalesIncludingTax).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesDeliveryCharges (base name: "OnlineSalesDeliveryCharges")', function() {
        // TODO: update the code to test the property OnlineSalesDeliveryCharges
        expect(instance).to.have.property('OnlineSalesDeliveryCharges');
        // expect(instance.OnlineSalesDeliveryCharges).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesTips (base name: "OnlineSalesTips")', function() {
        // TODO: update the code to test the property OnlineSalesTips
        expect(instance).to.have.property('OnlineSalesTips');
        // expect(instance.OnlineSalesTips).to.be(expectedValueLiteral);
      });

      it('should have the property TotalOnlineRevenue (base name: "TotalOnlineRevenue")', function() {
        // TODO: update the code to test the property TotalOnlineRevenue
        expect(instance).to.have.property('TotalOnlineRevenue');
        // expect(instance.TotalOnlineRevenue).to.be(expectedValueLiteral);
      });

    });
  });

}));
