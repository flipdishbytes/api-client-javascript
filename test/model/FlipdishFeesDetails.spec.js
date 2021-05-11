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
    describe('FlipdishFeesDetails', function() {
      beforeEach(function() {
        instance = new Flipdish.FlipdishFeesDetails();
      });

      it('should create an instance of FlipdishFeesDetails', function() {
        // TODO: update the code to test FlipdishFeesDetails
        expect(instance).to.be.a(Flipdish.FlipdishFeesDetails);
      });

      it('should have the property OnlineSalesFees (base name: "OnlineSalesFees")', function() {
        // TODO: update the code to test the property OnlineSalesFees
        expect(instance).to.have.property('OnlineSalesFees');
        // expect(instance.OnlineSalesFees).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesFees (base name: "CashSalesFees")', function() {
        // TODO: update the code to test the property CashSalesFees
        expect(instance).to.have.property('CashSalesFees');
        // expect(instance.CashSalesFees).to.be(expectedValueLiteral);
      });

      it('should have the property TotalSalesFees (base name: "TotalSalesFees")', function() {
        // TODO: update the code to test the property TotalSalesFees
        expect(instance).to.have.property('TotalSalesFees');
        // expect(instance.TotalSalesFees).to.be(expectedValueLiteral);
      });

      it('should have the property OnlineSalesRefundedFees (base name: "OnlineSalesRefundedFees")', function() {
        // TODO: update the code to test the property OnlineSalesRefundedFees
        expect(instance).to.have.property('OnlineSalesRefundedFees');
        // expect(instance.OnlineSalesRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property CashSalesRefundedFees (base name: "CashSalesRefundedFees")', function() {
        // TODO: update the code to test the property CashSalesRefundedFees
        expect(instance).to.have.property('CashSalesRefundedFees');
        // expect(instance.CashSalesRefundedFees).to.be(expectedValueLiteral);
      });

      it('should have the property SalesFeesVat (base name: "SalesFeesVat")', function() {
        // TODO: update the code to test the property SalesFeesVat
        expect(instance).to.have.property('SalesFeesVat');
        // expect(instance.SalesFeesVat).to.be(expectedValueLiteral);
      });

      it('should have the property TotalFees (base name: "TotalFees")', function() {
        // TODO: update the code to test the property TotalFees
        expect(instance).to.have.property('TotalFees');
        // expect(instance.TotalFees).to.be(expectedValueLiteral);
      });

    });
  });

}));
